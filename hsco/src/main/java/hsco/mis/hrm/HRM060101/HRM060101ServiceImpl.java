package hsco.mis.hrm.HRM060101;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM060101ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 9. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 14.	이혜선			최초생성
 * </pre>  
 */

@Service("HRM060101Service")
public class HRM060101ServiceImpl extends BaseService implements HRM060101Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    
    /**
	 * 평가항목탭을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */	
     @SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbhrmPerevaIemList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("HRM060101DAO.tbhrmPerevaIemList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 평가항목별배점을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */	
     @SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbhrmPerevaAllotList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("HRM060101DAO.tbhrmPerevaAllotList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
 
    /**
	 * 평정설문 조회.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */	
     @SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbhrmPerevaQustnrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("HRM060101DAO.tbhrmPerevaQustnrList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}  
    
    /**
	 * 평정설문답변조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */	
     @SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbhrmPerevaQustnrR( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("HRM060101DAO.tbhrmPerevaQustnrR", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}      
    
	/**
	 * CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int tbhrmPerevaCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("HRM060101DAO.tbhrmPerevaIemC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("HRM060101DAO.tbhrmPerevaIemU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("HRM060101DAO.tbhrmPerevaIemD", map);
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input2");	
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM060101DAO.tbhrmPerevaAllotU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					break;
			}	
		}	
		
		list = (DataSetMap) inDataset.get("input3");	
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HRM060101DAO.tbhrmPerevaQustnrC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("HRM060101DAO.tbhrmPerevaQustnrU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					map.put("IS_PARENT", "TRUE");
					iRow += baseDao.delete("HRM060101DAO.tbhrmPerevaQustnrRD", map);
					iRow += baseDao.delete("HRM060101DAO.tbhrmPerevaQustnrD", map);
					break;
			}	
		}	
		
		list = (DataSetMap) inDataset.get("input4");	
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HRM060101DAO.tbhrmPerevaQustnrRC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("HRM060101DAO.tbhrmPerevaQustnrRU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("HRM060101DAO.tbhrmPerevaQustnrRD", map);
					break;
			}	
		}			
		return iRow;
		
	}
	
	
	/**
	 * 평가항목 직전차수복사
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int copyTbhrmPerevaIemList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			iRow += baseDao.delete("HRM060101DAO.copyTbhrmPerevaIemListD", map);
			baseDao.insert("HRM060101DAO.copyTbhrmPerevaIemListC", map);
					
		}
		return iRow;		
	}	
	
	/**
	 * 평정설문 직전차수복사
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int copyTbhrmPerevaQustnrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			iRow += baseDao.delete("HRM060101DAO.copyTbhrmPerevaQustnrListRD", map);
			iRow += baseDao.delete("HRM060101DAO.copyTbhrmPerevaQustnrListD", map);
			baseDao.insert("HRM060101DAO.copyTbhrmPerevaQustnrList", map);
			baseDao.insert("HRM060101DAO.copyTbhrmPerevaQustnrListR", map);
		}
		return iRow;		
	}
	
}