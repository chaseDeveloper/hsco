package hsco.mis.acc.ACC030202;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC030202ServiceImpl.java
 * @Description  	: 원천징수영수증 관리하는 서비스 구현체 클래스
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
@Service("ACC030202Service")
public class ACC030202ServiceImpl extends BaseService {

protected Logger log = LoggerFactory.getLogger(ACC030202ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
     * 원천징수영수증(건별)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void wthtxRciptCsbyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("wthtxRciptCsbyList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap1 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("ACC030202DAO.wthtxRciptCsbyList", inMap);		
		outDsMap1.setRowMaps(records);
		outDataset.put("output1", outDsMap1);
	}
    
    /**
     * 원천징수영수증(개인별)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void wthtxRciptIndvdlList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap1 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("ACC030202DAO.wthtxRciptIndvdlList", inMap);		
		outDsMap1.setRowMaps(records);
		outDataset.put("output1", outDsMap1);
	}
    
    /**
     * 거주자의 기타소득 원천징수영수증
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void etcIncome( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("ACC030202DAO.etcIncomeList", inMap);		
		outDsMap1.setRowMaps(records);
		outDataset.put("output1", outDsMap1);
		
		List <Map> records2 = (List<Map>)baseDao.list("ACC030202DAO.etcIncomeDtlsList", inMap);		
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);
	}
    
    /**
     * 거주자의 사업소득 원천징수영수증
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsIncome( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("ACC030202DAO.bsnsIncomeList", inMap);		
		outDsMap1.setRowMaps(records);
		outDataset.put("output1", outDsMap1);
		
		List <Map> records2 = (List<Map>)baseDao.list("ACC030202DAO.bsnsIncomeDtlsList", inMap);		
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);
	}
   
}
