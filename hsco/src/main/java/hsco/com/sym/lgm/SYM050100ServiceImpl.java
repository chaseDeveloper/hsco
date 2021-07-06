package hsco.com.sym.lgm;

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
 * @Class Name   	: SYM050100ServiceImpl.java
 * @Description  	: 사용자정보를 관리하는 서비스 구현체 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 6. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 24.					정윤원				최초생성
 * </pre>  
 */
@Service("SYM050100Service")
public class SYM050100ServiceImpl extends BaseService implements SYM050100Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM050100ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /**
     * 
     * <pre>
     * @DESCRIPTION: 시스템로그 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     * 2015. 9. 18.
     * </pre>
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListSysLog(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("getListSysLog called!");
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SYM050100DAO.getListSysLog", inMap, false);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
     * 
     * <pre>
     * @DESCRIPTION: DB 로그 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     * 2015. 9. 14.
     * </pre>
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
   	public void getListDBLog(DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);
   		
   		List <Map> records = (List<Map>)baseDao.list("SYM050100DAO.getListDBLog", inMap, false);
   		
   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		
   		outDataset.put("output1", outDsMap);
   		
   	}
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
   	public void getListIndvdlLog(DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);
   		
   		List <Map> records = (List<Map>)baseDao.list("SYM050100DAO.getListIndvdlLog", inMap, false);
   		
   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		
   		outDataset.put("output1", outDsMap);
   		
   	}
	
    /**
     * 외부연계송수신로그 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectTrsmrcvLogList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SYM050100DAO.selectTrsmrcvLogList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SYM050100DAO.selectTrsmrcvLogList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);    
        
    }
    
    /**
     * 메뉴사용현황 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMenuUsedSttus( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        Map inMap2 = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        if (inDsMap2 != null)
            inMap2 = inDsMap2.get(0);
        
        List <Map> records;
        List <Map> records2;

        if (inMap == null) { // 디폴트 설정
            inMap = new HashMap();
            inMap.put("UPPER_MENU", 0);
            inMap.put("STTUS_LEVEL", "0");
            inMap.put("BY_DT_AT", "0");
            inMap.put("BY_USER_AT", "0");
            inMap.put("RQESTER_ID", "");
            inMap.put("BGNDT", "");
            inMap.put("ENDDT", "");
            inMap.put("VIEW_EXISTS_ONLY", "1");
            
            
            inMap2 = new HashMap();
            inMap2.put("UPPER_MENU", 0);
            inMap2.put("RQESTER_ID", "");
            inMap2.put("BY_DT_AT", "1");
            inMap2.put("BY_USER_AT", "1");
            inMap2.put("BGNDT", "");
            inMap2.put("ENDDT", "");
            inMap2.put("STTUS_LEVEL", "4");
            inMap2.put("VIEW_EXISTS_ONLY", "1");
            
        }
        if (inMap2 == null) { // 디폴트 설정
            inMap2 = new HashMap();
            inMap2.put("UPPER_MENU", inMap.get("UPPER_MENU"));
            inMap2.put("STTUS_LEVEL", "4");
            inMap2.put("BY_DT_AT", "1");
            inMap2.put("BY_USER_AT", "1");
            inMap2.put("RQESTER_ID", inMap.get("RQESTER_ID"));
            inMap2.put("BGNDT", inMap.get("BGNDT"));
            inMap2.put("ENDDT", inMap.get("ENDDT"));
            inMap2.put("VIEW_EXISTS_ONLY", "1");
        }
        records = (List<Map>)baseDao.list("SYM050100DAO.selectMenuUsedSttus", inMap);
        records2 = (List<Map>)baseDao.list("SYM050100DAO.selectMenuUsedSttus", inMap2);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output1", outDsMap);  
        outDataset.put("output2", outDsMap2); 
        
    }
    
    /**
     * 사용자별/일별 메뉴사용현황 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMenuUsedSttusDtl( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;

        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        
        List <Map> records;

        if (inMap == null) { // 디폴트 설정
            inMap = new HashMap();
            inMap.put("UPPER_MENU", 0);
            inMap.put("STTUS_LEVEL", "0");
            inMap.put("BY_DT_AT", "");
            inMap.put("BY_USER_AT", "");
            inMap.put("RQESTER_ID", "");
            inMap.put("BGNDT", "");
            inMap.put("ENDDT", "");

        }

        records = (List<Map>)baseDao.list("SYM050100DAO.selectMenuUsedSttus", inMap);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        
        outDataset.put("output1", outDsMap);  
        
    }
    

}
