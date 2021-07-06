package hsco.mis.ach.ACHCommon;

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
 * @Class Name   	: ACHCommonServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 8. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 18.	박병일				최초생성
 * </pre>  
 */
@Service("ACHCommonService")
public class ACHCommonServiceImpl extends BaseService implements ACHCommonService {
	
	protected Logger log = LoggerFactory.getLogger(ACHCommonServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
 
    /**
	 * 배정조직 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOrgnztList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	if(log.isInfoEnabled()) log.info("selectOrgnztList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectOrgnztList", inMap);
		} else {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectOrgnztList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * get 지표명
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIxNm( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxNm", inMap);
		} else {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxNm", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /**
	 * get 평가점수목록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEvlScoreList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectEvlScoreList", inMap);
		} else {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectEvlScoreList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /**
	 * get 평가주기
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEvlCycleSingle( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectEvlCycleSingle", inMap);
		} else {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectEvlCycleSingle", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}  
    
    /**
	 * get 평가차수 목록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOdrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectOdrList", inMap);
		} else {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectOdrList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}   
    
    /**
 	 * get 현재 평가차수(평가연도&차수) 정보
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return void
 	 * @throws NexaServiceException
 	 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
 	public void selectCurEvlOdrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {
 		
 		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
 		Map inMap = null;
 		
 		if (inDsMap != null)
 			inMap = inDsMap.get(0);
 		
 		List <Map> records;

 		if (inMap != null) {
 			records = (List<Map>)baseDao.list("ACHCommonDAO.selectCurEvlOdrInfo", inMap);
 		} else {
 			records = (List<Map>)baseDao.list("ACHCommonDAO.selectCurEvlOdrInfo", inVar);
 		}
 		
 		DataSetMap outDsMap = new DataSetMap();
 		outDsMap.setRowMaps(records);
 		
 		outDataset.put("output1", outDsMap);		
 	}
     
     /**
 	 * get 계량지표 목록
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return void
 	 * @throws NexaServiceException
 	 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
 	public void selectQyeIxcodeList( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {
 		
 		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
 		Map inMap = null;
 		
 		if (inDsMap != null)
 			inMap = inDsMap.get(0);
 		
 		List <Map> records;

 		if (inMap != null) {
 			records = (List<Map>)baseDao.list("ACHCommonDAO.selectQyeIxcodeList", inMap);
 		} else {
 			records = (List<Map>)baseDao.list("ACHCommonDAO.selectQyeIxcodeList", inVar);
 		}
 		
 		DataSetMap outDsMap = new DataSetMap();
 		outDsMap.setRowMaps(records);
 		
 		outDataset.put("output1", outDsMap);
 		
 	}
     
     /**
 	 * get 지표별 가감점기준점수 목록
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return void
 	 * @throws NexaServiceException
 	 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
 	public void selectAdsbtrScoreList( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {
 		
 		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
 		Map inMap = null;
 		
 		if (inDsMap != null)
 			inMap = inDsMap.get(0);
 		
 		List <Map> records;

 		if (inMap != null) {
 			records = (List<Map>)baseDao.list("ACHCommonDAO.selectAdsbtrScoreList", inMap);
 		} else {
 			records = (List<Map>)baseDao.list("ACHCommonDAO.selectAdsbtrScoreList", inVar);
 		}
 		
 		DataSetMap outDsMap = new DataSetMap();
 		outDsMap.setRowMaps(records);
 		
 		outDataset.put("output1", outDsMap);
 		
 	}
     
     /**
 	 * get 지표[마일리지타입] 목록
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return void
 	 * @throws NexaServiceException
 	 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
 	public void selectIxcodeListM( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {
 		
 		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
 		Map inMap = null;
 		
 		if (inDsMap != null)
 			inMap = inDsMap.get(0);
 		
 		List <Map> records;

 		if (inMap != null) {
 			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListM", inMap);
 		} else {
 			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListM", inVar);
 		}
 		
 		DataSetMap outDsMap = new DataSetMap();
 		outDsMap.setRowMaps(records);
 		
 		outDataset.put("output1", outDsMap);
 		
 	}  
     
     /**
  	 * get 지표[복합지표타입] 목록
  	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  	 * @return void
  	 * @throws NexaServiceException
  	 */
      @SuppressWarnings({ "rawtypes", "unchecked" })
  	public void selectIxcodeListT( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListT", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListT", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  		
  	}
      
     /**
	 * get 지표[상대평가타입] 목록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIxcodeListA( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListA", inMap);
		} else {
			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListA", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}      

    /**
  	 * get 지표[일정관리 타입] 목록
  	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  	 * @return void
  	 * @throws NexaServiceException
  	 */
      @SuppressWarnings({ "rawtypes", "unchecked" })
  	public void selectIxcodeListD( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListD", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListD", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  		
  	} 
          
      /**
    	 * get 지표[이행평가 타입] 목록
    	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    	 * @return void
    	 * @throws NexaServiceException
    	 */
        @SuppressWarnings({ "rawtypes", "unchecked" })
    	public void selectIxcodeListE( DataSetMap tranInfo, Map<String, Object> inVar,
    			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    		
    		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    		Map inMap = null;
    		
    		if (inDsMap != null)
    			inMap = inDsMap.get(0);
    		
    		List <Map> records;

    		if (inMap != null) {
    			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListE", inMap);
    		} else {
    			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListE", inVar);
    		}
    		
    		DataSetMap outDsMap = new DataSetMap();
    		outDsMap.setRowMaps(records);
    		
    		outDataset.put("output1", outDsMap);
    		
    	}  
            
        /**
      	 * get 지표[공정율관리 타입] 목록
      	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
      	 * @return void
      	 * @throws NexaServiceException
      	 */
          @SuppressWarnings({ "rawtypes", "unchecked" })
      	public void selectIxcodeListF( DataSetMap tranInfo, Map<String, Object> inVar,
      			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
      			Map<String, DataSetMap> outDataset) throws NexaServiceException {
      		
      		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
      		Map inMap = null;
      		
      		if (inDsMap != null)
      			inMap = inDsMap.get(0);
      		
      		List <Map> records;

      		if (inMap != null) {
      			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListF", inMap);
      		} else {
      			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeListF", inVar);
      		}
      		
      		DataSetMap outDsMap = new DataSetMap();
      		outDsMap.setRowMaps(records);
      		
      		outDataset.put("output1", outDsMap);
      		
      	} 
              
          /**
    	 * get 상위지표 목록
    	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    	 * @return void
    	 * @throws NexaServiceException
    	 */
        @SuppressWarnings({ "rawtypes", "unchecked" })
    	public void selectUpIxcodeList( DataSetMap tranInfo, Map<String, Object> inVar,
    			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    		
    		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    		Map inMap = null;
    		
    		if (inDsMap != null)
    			inMap = inDsMap.get(0);
    		
    		List <Map> records;

    		if (inMap != null) {
    			records = (List<Map>)baseDao.list("ACHCommonDAO.selectUpIxcodeList", inMap);
    		} else {
    			records = (List<Map>)baseDao.list("ACHCommonDAO.selectUpIxcodeList", inVar);
    		}
    		
    		DataSetMap outDsMap = new DataSetMap();
    		outDsMap.setRowMaps(records);
    		
    		outDataset.put("output1", outDsMap);
    		
    	}  
        
     /**
  	 * get 지표 목록
  	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  	 * @return void
  	 * @throws NexaServiceException
  	 */
      @SuppressWarnings({ "rawtypes", "unchecked" })
  	public void selectIxcodeAllList( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeAllList", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("ACHCommonDAO.selectIxcodeAllList", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  		
  	}   
      
      /**
    	 * get 지표 목록
    	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    	 * @return void
    	 * @throws NexaServiceException
    	 */
        @SuppressWarnings({ "rawtypes", "unchecked" })
    	public void selectQlevalSeqList( DataSetMap tranInfo, Map<String, Object> inVar,
    			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    		
    		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    		Map inMap = null;
    		
    		if (inDsMap != null)
    			inMap = inDsMap.get(0);
    		
    		List <Map> records;

    		if (inMap != null) {
    			records = (List<Map>)baseDao.list("ACHCommonDAO.selectQlevalSeqList", inMap);
    		} else {
    			records = (List<Map>)baseDao.list("ACHCommonDAO.selectQlevalSeqList", inVar);
    		}
    		
    		DataSetMap outDsMap = new DataSetMap();
    		outDsMap.setRowMaps(records);
    		
    		outDataset.put("output1", outDsMap);
    		
    	}  
        /**
      	 * get TempList 달성율구간Color 목록
      	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
      	 * @return void
      	 * @throws NexaServiceException
      	 */
          @SuppressWarnings({ "rawtypes", "unchecked" })
      	public void selectAchivRtSctnList( DataSetMap tranInfo, Map<String, Object> inVar,
      			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
      			Map<String, DataSetMap> outDataset) throws NexaServiceException {
      		
      		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
      		Map inMap = null;
      		
      		if (inDsMap != null)
      			inMap = inDsMap.get(0);
      		
      		List <Map> records;

      		if (inMap != null) {
      			records = (List<Map>)baseDao.list("ACHCommonDAO.selectAchivRtSctnList", inMap);
      		} else {
      			records = (List<Map>)baseDao.list("ACHCommonDAO.selectAchivRtSctnList", inVar);
      		}
      		
      		DataSetMap outDsMap = new DataSetMap();
      		outDsMap.setRowMaps(records);
      		
      		outDataset.put("output1", outDsMap);
      		
      	}        
        
}
