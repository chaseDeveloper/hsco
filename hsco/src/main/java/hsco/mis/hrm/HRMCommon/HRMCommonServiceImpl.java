package hsco.mis.hrm.HRMCommon;

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
 * @Class Name   	: HRMCommonServiceImpl.java
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
@Service("HRMCommonService")
public class HRMCommonServiceImpl extends BaseService implements HRMCommonService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
 
    /**
 	 * get 현재 평가차수(평가연도&차수) 정보
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return void
 	 * @throws NexaServiceException
 	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
 	public void selectCurDevaOdrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {
 		
 		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
 		Map inMap = null;
 		
 		if (inDsMap != null)
 			inMap = inDsMap.get(0);
 		
 		List <Map> records;

 		if (inMap != null) {
 			records = (List<Map>)baseDao.list("HRMCommonDAO.selectCurDevaOdrInfo", inMap);
 		} else {
 			records = (List<Map>)baseDao.list("HRMCommonDAO.selectCurDevaOdrInfo", inVar);
 		}
 		
 		DataSetMap outDsMap = new DataSetMap();
 		outDsMap.setRowMaps(records);
 		
 		outDataset.put("output1", outDsMap);		
 	}
     
     /**
  	 * get 직전 평가차수(평가연도&차수) 정보
  	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  	 * @return void
  	 * @throws NexaServiceException
  	 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
  	 public void selectBefDevaOdrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("HRMCommonDAO.selectBefDevaOdrInfo", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("HRMCommonDAO.selectBefDevaOdrInfo", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);		
  	}  
     
     /**
  	 * get 평정단위별 평정자  정보
  	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  	 * @return void
  	 * @throws NexaServiceException
  	 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
  	 public void selectRaterDtlInfo( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("HRMCommonDAO.selectRaterDtlInfo", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("HRMCommonDAO.selectRaterDtlInfo", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);		
  	} 
     
     /**
  	 * get 징계처분코드 목록 조회
  	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  	 * @return void
  	 * @throws NexaServiceException
  	 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
  	 public void selectDslrcCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("HRMCommonDAO.selectDslrcCodeList", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("HRMCommonDAO.selectDslrcCodeList", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);		
  	}    
     
     /**
  	 * get 직무지원 부서코드 목록 조회
  	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  	 * @return void
  	 * @throws NexaServiceException
  	 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
  	 public void selectSportDeptList( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("HRMCommonDAO.selectSportDeptList", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("HRMCommonDAO.selectSportDeptList", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);		
  	} 
     
     /**
  	 * get 현재적용 기준년도&차수[직위/직무공모]
  	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  	 * @return void
  	 * @throws NexaServiceException
  	 */
     @SuppressWarnings({ "rawtypes", "unchecked" })
  	 public void selectCurStdrOdrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("HRMCommonDAO.selectCurStdrOdrInfo", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("HRMCommonDAO.selectCurStdrOdrInfo", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);		
  	}
     
     /**
      * 접속자정보를 조회한다.
      * 
      * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
      * @return void
      * @throws NexaServiceException
      */
     @SuppressWarnings({ "rawtypes", "unchecked" })
     public void selectUserInfo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
         DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
         Map inMap = null;
         if (inDsMap != null) {
             inMap = inDsMap.get(0);
         }

         List<Map> records;
         records = (List<Map>) baseDao.list("HRMCommonDAO.selectUserInfo", inMap);
         DataSetMap outDsMap = new DataSetMap();
         outDsMap.setRowMaps(records);
         outDataset.put("output1", outDsMap);
     }

     
     /**
      * 사용자정보를 조회한다.
      * 
      * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
      * @return void
      * @throws NexaServiceException
      */
     @SuppressWarnings({ "rawtypes", "unchecked" })
     public void selectEmpnoList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	 DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
    	 Map inMap = null;
    	 if (inDsMap != null) {
    		 inMap = inDsMap.get(0);
    	 }
    	 
    	 List<Map> records;
    	 records = (List<Map>) baseDao.list("HRMCommonDAO.selectEmpnoList", inMap);
    	 DataSetMap outDsMap = new DataSetMap();
    	 outDsMap.setRowMaps(records);
    	 outDataset.put("output1", outDsMap);
     }
     
     @SuppressWarnings({ "rawtypes", "unchecked" })
     public void selectUserIdList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	 DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
    	 Map inMap = null;
    	 if (inDsMap != null) {
    		 inMap = inDsMap.get(0);
    	 }
    	 
    	 List<Map> records;
    	 records = (List<Map>) baseDao.list("HRMCommonDAO.selectUserIdList", inMap);
    	 DataSetMap outDsMap = new DataSetMap();
    	 outDsMap.setRowMaps(records);
    	 outDataset.put("output1", outDsMap);
     }
}
