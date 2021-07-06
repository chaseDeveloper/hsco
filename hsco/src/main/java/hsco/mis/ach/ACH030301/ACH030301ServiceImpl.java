package hsco.mis.ach.ACH030301;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACH030301ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 9. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 02.	박병일		최초생성
 * </pre>  
 */
@Service("ACH030301Service")
public class ACH030301ServiceImpl extends BaseService implements ACH030301Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH030301ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
  
    /**
	 * 비계량지표목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListMst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("selectListMst Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACH030301DAO.selectListMst", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /**
	 * 첩무실적정보를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListDtl( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACH030301DAO.selectListDtl", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}    
	
	
	/**
	 * 첨부실적 정보를  저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int dtlCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
  
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
				
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
							
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ACH030301DAO.dtlU", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					break;
			    default:
			    	break;
			}
		
		}
		return iRow;
		
	}
	
	/**
     * 첨부파일 일련번호 생성 및 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */ 
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public void saveNewFileSn( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        // input Map get
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);

        // date get
        SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMdd");
        long curentTime = System.currentTimeMillis();

        // FileSn calculate
        String todayStr = sDateFormat.format(curentTime);
        BigDecimal seqFileSn = (BigDecimal) baseDao.select("selectFileSn");
        String strFileSn = todayStr + "" + seqFileSn;

        // input FileSn
        BigDecimal fileSn = new BigDecimal(strFileSn);
        map.put("FILE_SN", fileSn);

        // insert into File Master
        baseDao.insert("insertAtchmnFileMast", map);

        // update to Contract Master
        baseDao.update("ACH030301DAO.updateNewFileSn", map);

        // return Result Data (with FileSn)
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
    }
    
    /**
     * 첨부파일 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
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
     * 첨부파일 업로드 전 기본데이터 생성
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */ 
    @SuppressWarnings({ "rawtypes"})
    
    public void saveTemp( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        // input Map get
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        Map map = list.get(0);

        // insert into File Master
        baseDao.insert("ACH030301DAO.saveTempC", map);
    }    

}
