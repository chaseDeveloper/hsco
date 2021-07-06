package hsco.mis.sal.SAL020110;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL020110ServiceImpl.java
 * @Description  	: 연차수당관리
 * @author       	: 이상명
 * @since        	: 2015. 7. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 13.					이상명				최초생성
 * </pre>  
 */

@Service("SAL020110Service")
public class SAL020110ServiceImpl extends BaseService implements SAL020110Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 연차수당정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectYrycallwncList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL020110DAO.selectYrycallwncList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL020110DAO.selectYrycallwncList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}		
    
    /**
	 * 연차수당정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectYrycallwnc4List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL020110DAO.selectYrycallwnc4List", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL020110DAO.selectYrycallwnc4List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);	
   		
   	}		
	
    /**
   	 * 연차수당정보 목록을 조회한다.
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return void
   	 * @throws NexaServiceException
   	 */
       @SuppressWarnings({ "rawtypes", "unchecked" })
   	public void selectYrycallwnc2List( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
   		
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);
   		
   		List <Map> records;

   		if (inMap != null) {
   			records = (List<Map>)baseDao.list("SAL020110DAO.selectYrycallwnc2List", inMap);
   		} else {
   			records = (List<Map>)baseDao.list("SAL020110DAO.selectYrycallwnc2List", inVar);
   		}
   		
   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		
   		outDataset.put("output2", outDsMap);	
      		
      	}	
       
   /**
  	 * 연차수당정보 목록을 조회한다.
  	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  	 * @return void
  	 * @throws NexaServiceException
  	 */
      @SuppressWarnings({ "rawtypes", "unchecked" })
  	public void selectYrycallwnc3List( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;
  		List <Map> records2;

  		if (inMap != null) {
  			records = (List<Map>)baseDao.list("SAL020110DAO.selectYrycallwnc3List", inMap);
  		} else {
  			records = (List<Map>)baseDao.list("SAL020110DAO.selectYrycallwnc3List", inVar);
  		}
  		
  		if (inMap != null) {
  			records2 = (List<Map>)baseDao.list("SAL020110DAO.selectUsePeriod", inMap);
  		} else {
  			records2 = (List<Map>)baseDao.list("SAL020110DAO.selectUsePeriod", inVar);
  		}
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		DataSetMap outDsMap2 = new DataSetMap();
  		outDsMap2.setRowMaps(records2);
  		
  		outDataset.put("output4", outDsMap);	
  		outDataset.put("output5", outDsMap2);
     	
 	}	  
	

  /**
 	 * 연차수당정보 등록, 수정, 삭제
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return int
 	 * @throws NexaServiceException
 	 */
 	@SuppressWarnings({ "rawtypes" })
 	
 	public int YrycallwncCUD( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
 		
 		int iRow = 0;
 		
 		DataSetMap list = (DataSetMap) inDataset.get("input3");	
 		
 	         		
 		int listSize = (list == null) ? 0 : list.size();		
 		for (int x = 0; x < listSize; x++) {
 				
 			Map map = list.get(x);			
 			// 세션정보 설정
 			try {
 				ObjectUtil.setUserToMap(map);
 			}
 			catch( Exception e) {
 				throw new NexaServiceException(e); 
 			}	
 			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 			
 			switch(rowType) {
 				case DataSet.ROW_TYPE_INSERTED :
 					baseDao.insert("SAL020110DAO.YrycallwncC", map);
 					break;
 				case DataSet.ROW_TYPE_UPDATED :
 					iRow += baseDao.update("SAL020110DAO.YrycallwncU", map);
 					break;
 				case DataSet.ROW_TYPE_DELETED :
 					iRow += baseDao.delete("SAL020110DAO.YrycallwncD", map);
 					break;			
 			}				
 		}		
 		return iRow;
 	}

 	/**
   	 * 연차수당정보 일괄삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int delYrycallwnc( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
   		int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input3");		
   		   		
   				
		Map map = list.get(0);			
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		}	
		// 삭제
		baseDao.insert("SAL020110DAO.delYrycallwnc", map);
		
   			
   		return iRow;
   	}
}
