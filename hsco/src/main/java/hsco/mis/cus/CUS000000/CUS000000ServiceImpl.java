package hsco.mis.cus.CUS000000;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CUS000000ServiceImpl.java
 * @Description  	: 
 * @author       	: 
 * @since        	: 2016. 4. 5.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 4. 5.					   				최초생성
 * </pre>
 */
@Service("CUS000000Service")
public class CUS000000ServiceImpl extends BaseService {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());

    /**
     * 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void migration( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	List<Map> list = (List<Map>) baseDao.list("ACC000000DAO.vocQstCommonTranR");
    	for(Map map : list) {
    		baseDao.update("ACC000000DAO.vocQstCommonTranU", map);
    	}
    	
        
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void migration2( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	List<Map> list2 = (List<Map>) baseDao.list("ACC000000DAO.vocQstCommonTran2R");
    	for(Map map : list2) {
    		baseDao.update("ACC000000DAO.vocQstCommonTran2U", map);
    	}
        
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void migration3( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	List<Map> list = (List<Map>) baseDao.list("ACC000000DAO.vocFaqTranR");
    	for(Map map : list) {
    		baseDao.update("ACC000000DAO.vocFaqTranU", map);
    	}
    	
        
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void migration4( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	List<Map> list2 = (List<Map>) baseDao.list("ACC000000DAO.vocFaqTran2R");
    	for(Map map : list2) {
    		baseDao.update("ACC000000DAO.vocFaqTran2U", map);
    	}
        
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectUserInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        records = (List<Map>)baseDao.list("CUS000000.selectUserInfo", inMap);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void migration5( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	List<Map> list = (List<Map>) baseDao.list("CUS000000.absurdityChrgContentR");
    	for(Map map : list) {
    		baseDao.update("CUS000000.absurdityChrgContentC", map);
    	}
    	
    	List<Map> list2 = (List<Map>) baseDao.list("CUS000000.absurdityChrgContent2R");
    	for(Map map : list2) {
    		baseDao.update("CUS000000.absurdityChrgContent2C", map);
    	}
        
    }
    
    /**
	 * 홈페이지 회원 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMemberList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("CUS000000.selectMemberList", inMap);
		} else {
			records = (List<Map>)baseDao.list("CUS000000.selectMemberList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output01", outDsMap);
		
	}  
    
    /**
	 * 기타, 홈페이지 회원 조회(오프라인 민원 등록시)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMemberList02( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("CUS000000.selectMemberList02", inMap);
		} else {
			records = (List<Map>)baseDao.list("CUS000000.selectMemberList02", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output01", outDsMap);
		
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
        List <Map> records;
        List <Map> records2;
        List <Map> records3;
        
        if (inMap != null) {
            records = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);
            records2 = (List<Map>)baseDao.list("CUS000000DAO.selectCn", inMap);
            records3 = (List<Map>)baseDao.list("CUS000000DAO.selectResult", inMap);
        } else {
            records = (List<Map>)baseDao.list("selectAtchmnFileList", inVar);
            records2 = (List<Map>)baseDao.list("CUS000000DAO.selectCn", inVar);
            records3 = (List<Map>)baseDao.list("CUS000000DAO.selectResult", inMap);
        }

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        DataSetMap outDsMap3 = new DataSetMap();
        outDsMap3.setRowMaps(records3);
        
        outDataset.put("output1", outDsMap);
        outDataset.put("output2", outDsMap2);
        outDataset.put("output3", outDsMap3);
    }   
    
    /**
	 * 주택계약정보 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHcntrctrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("CUS000000DAO.selectHcntrctrList", inMap);
		} else {
			records = (List<Map>)baseDao.list("CUS000000DAO.selectHcntrctrList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output01", outDsMap);
		
	}         
}
