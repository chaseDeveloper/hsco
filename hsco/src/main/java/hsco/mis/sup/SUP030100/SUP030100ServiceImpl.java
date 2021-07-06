package hsco.mis.sup.SUP030100;

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
 * @Class Name   	: SUP030100ServiceImpl.java
 * @Description  	: 대외협력관리 테이블을 관리하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 10. 12.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 12.				   양성모				최초생성
 * </pre>  
 */

@Service("sup030100Service")
public class SUP030100ServiceImpl extends BaseService implements SUP030100Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    /**
	 * 대외협력관리 목록 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectExtrnlCorpr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SUP030100DAO.selectDpstAcnutList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 대외협력관리 수정, 삭제, 등록 처리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	

	public int saveExtrnlCorpr( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("SUP030100DAO.extrnlCorprC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("SUP030100DAO.extrnlCorprU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("SUP030100DAO.extrnlCorprD", map);
					break;
			}	
		}		

		return iRow;
	
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
    public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
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
        baseDao.update("SUP030100DAO.updateNewFileSn", map);

        // return Result Data (with FileSn)
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
    }    
    
	/**
	 * 전자결재번호 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
	@SuppressWarnings({ "rawtypes" })
	
	public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 					
	
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		// 전자결재번호 조회
		String sanctnNO= (String) baseDao.select("SUP030100DAO.selectSanctnNO", map);			
		map.put("SANCTN_NO", sanctnNO);
		
		// 대외협력관리 전자결재번호 업데이트
		baseDao.update("SUP030100DAO.approveU", map);
		
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
        
	}    
}
