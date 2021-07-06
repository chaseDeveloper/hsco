package hsco.mis.sup.SUP010203;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SUP010203Service.java
 * @Description  	: 경영평가결과 관리하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 07.	이수지		최초생성
 * </pre>  
 */
@Service("SUP010203Service")
public class SUP010203ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 경영평가결과 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mngmtEvlStdrList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("SUP010203DAO.mngmtEvlStdrList", inMap));
        outDataset.put("output1", outDsMap);
        
        int count = (Integer)baseDao.select("SUP010203DAO.selectMngmtEvlReprtCnt", inMap);
        
        if(count == 0){
        	baseDao.insert("SUP010203DAO.mngmtEvlReprtC", inMap);
        	
        }
        
        DataSetMap output2 = new DataSetMap();
        output2.setRowMaps((List<Map>) baseDao.list("SUP010203DAO.selectMngmtEvlReprt", inMap));
        outDataset.put("output2", output2);
        
        DataSetMap output3 = new DataSetMap();
        output3.setRowMaps((List<Map>) baseDao.list("SUP010203DAO.selectMngmtEvlReprt2", inMap));
        outDataset.put("output3", output3);
	}
	
	/**
	 * 첨부파일 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void selectAtchFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
       Map inMap = null;
       DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
       if (inDsMap != null) {
           inMap = inDsMap.get(0);
       }
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
       outDataset.put("output1", outDsMap);
   }   
   
	/**
	 * 경영평가결과 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	
	public int mngmtEvlStdrU( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	int iRow = 0;
    	
    	DataSetMap input1 = inDataset.get("input1");	// 경영평가결과
    	DataSetMap input2 = inDataset.get("input2");
		
		// 평점표 저장(등록, 수정)
		for(Map map : input1.getRowMaps()) {
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED:
					iRow += baseDao.update("SUP010203DAO.mngmtEvlStdrU", map);
					break;
				default:
					break;
			}
		}

		return iRow;
    }
	
	/**
	 * 첨부파일키 생성 및 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public void saveNewFileSn(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        // input Map get
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);
        
        // date get
        SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMdd");
        long curentTime = System.currentTimeMillis();
        
        // FileSn calculate
        String todayStr = sDateFormat.format(curentTime);
        BigDecimal seqFileSn = (BigDecimal)baseDao.select("selectFileSn");  
        String strFileSn = todayStr +""+ seqFileSn;
        
        // input FileSn
        BigDecimal fileSn = new BigDecimal(strFileSn);
        map.put("FILE_SN", fileSn);
        
        // insert into File Master
        baseDao.insert("insertAtchmnFileMast", map);
        
        // update to Contract Master
        baseDao.update("SUP010203DAO.saveNewFileSn", map);
        
        // return Result Data (with FileSn)
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
    }
}