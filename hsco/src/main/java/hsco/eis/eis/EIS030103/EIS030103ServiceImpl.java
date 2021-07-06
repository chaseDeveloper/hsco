package hsco.eis.eis.EIS030103;

import java.util.HashMap;
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
 * @Class Name   	: EIS030214ServiceImpl.java
 * @Description  	: 인사현황
 * @author       	: 이동석
 * @since        	: 2016. 3. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 3. 30.					이동석				최초생성
 * </pre>  
 */

@Service("EIS030103Service")
public class EIS030103ServiceImpl extends BaseService implements EIS030103Service {
	
    protected Logger log = LoggerFactory.getLogger(EIS030103ServiceImpl.class);   
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
	 *  인사현황 직종별현원 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPsncpaList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	Map<String, Object> commCodeMap = new HashMap<String, Object>();
    	Map<String, Object> commCodeMap2 = new HashMap<String, Object>();
    	
		// 직급
		commCodeMap.put("GRP_CODE", "HRM002");
		commCodeMap2.put("hrClsfList", baseDao.list("cmmCodeDAO.cmmCodeList", commCodeMap, false));
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		DataSetMap outDsMap = new DataSetMap();
		
		inMap.putAll(commCodeMap2);
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030103DAO.selectPsncpaJssfcHrClsfList", inMap));
		outDataset.put("output1", outDsMap);
    
    }
    
    /**
     *  인사현황 부서별현원 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPsncpa2List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	Map<String, Object> commCodeMap = new HashMap<String, Object>();
    	Map<String, Object> commCodeMap2 = new HashMap<String, Object>();
    	
    	// 직종
    	commCodeMap.put("GRP_CODE", "HRM001");
    	commCodeMap2.put("jssfcList", baseDao.list("cmmCodeDAO.cmmCodeList", commCodeMap, false));

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		DataSetMap outDsMap = new DataSetMap();
		
		inMap.putAll(commCodeMap2);
		outDsMap.setRowMaps((List<Map>)baseDao.list("EIS030103DAO.selectPsncpaJssfcDeptList",  inMap));
		outDataset.put("output1", outDsMap);
   		
        
    }
    
    /**
     *  부서정보 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectdeptcodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectdeptcodeList", inMap);
        } else {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectdeptcodeList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output2", outDsMap);    
        
    }
    
    /**
     *  인사현황 직급별현원 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPsncpa3List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa3List", inMap);
        } else {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa3List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output3", outDsMap);
        
        List <Map> records2;

        if (inMap != null) {
            records2 = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa4List", inMap);
        } else {
            records2 = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa4List", inVar);
        }
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output4", outDsMap2);
        
    }
    
    /**
     *  부서정보 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPsncpa4List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa5List", inMap);
        } else {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa5List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output5", outDsMap);    
        
    }
    
    /**
     *  퇴직자현황 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPsncpa5List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa6List", inMap);
        } else {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa6List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output6", outDsMap);    
        
    }
    
    /**
     *  퇴직자상세 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPsncpa6List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa7List", inMap);
        } else {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa7List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output7", outDsMap);  
    }
    
    /**
     *  임금피크대상자 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPsncpa7List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa8List", inMap);
        } else {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa8List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output8", outDsMap);
        
        List <Map> records2;

        if (inMap != null) {
            records2 = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa9List", inMap);
        } else {
            records2 = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa9List", inVar);
        }
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output9", outDsMap2);
        
    }
    
    /**
     *  임금피크대상자 상세 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPsncpa8List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa10List", inMap);
        } else {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa10List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output10", outDsMap);    
        
    }
    
    /**
     *  임원퇴직자 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPsncpa9List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa11List", inMap);
        } else {
            records = (List<Map>)baseDao.list("EIS030103DAO.selectPsncpa11List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output11", outDsMap);    
        
    }
       
}
