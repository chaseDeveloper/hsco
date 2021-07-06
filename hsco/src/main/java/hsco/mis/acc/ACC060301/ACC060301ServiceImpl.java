package hsco.mis.acc.ACC060301;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC060301ServiceImpl.java
 * @Description  	: 구분회계 재무상태표 서비스 구현체 클래스
 * @author       	: 이상명
 * @since        	: 2015. 8. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 25.					이상명				최초생성
 * </pre>  
 */
@Service("ACC060301Service")
public class ACC060301ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC060301ServiceImpl.class);
    
    
    /**
	 * 구분회계 재무상태표
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void select( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("select Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACC060301DAO.select", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 구분회계코드
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void seAccnutAcntCodeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC060301DAO.seAccnutAcntCodeList", inMap));
        outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 공급유형
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void suplyTypeCodeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC060301DAO.suplyTypeCodeList", inMap));
        outDataset.put("output1", outDsMap);
	}
    
	 /**
		 * 사업유형
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void bsnsTypeCodeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
	        Map inMap = null;
	        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
	        if (inDsMap != null) {
	            inMap = inDsMap.get(0);
	        }
	        DataSetMap outDsMap = new DataSetMap();
	        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC060301DAO.bsnsTypeCodeList", inMap));
	        outDataset.put("output1", outDsMap);
		}
		
		 /**
	     * 구분회계 세부내역 조회
	     * @param tranInfo
	     * @param inVar
	     * @param inDataset
	     * @param outVar
	     * @param outDataset
	     * @return
	     * @throws NexaServiceException
	     */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		
		public void seAccExcelDown( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
	    	
	    	Map inMap = null;
	        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
	        if (inDsMap != null) {
	            inMap = inDsMap.get(0);
	        }
	        DataSetMap outDsMap = new DataSetMap();
	        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC060301DAO.seAccExcelDown", inMap));
	        outDataset.put("output1", outDsMap);
			
			
	    }
}
