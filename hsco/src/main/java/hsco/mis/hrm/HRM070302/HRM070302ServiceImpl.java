package hsco.mis.hrm.HRM070302;

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
 * @Class Name   	: HRM070302ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 10. 21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 21	이혜선			최초생성
 * </pre>  
 */

@Service("HRM070302Service")
public class HRM070302ServiceImpl extends BaseService implements HRM070302Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /** 당직자 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmpnoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("HRM070302DAO.selectEmpnoList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** 당직리스트조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDalyBndtList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("HRM070302DAO.selectDalyBndtList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /** 당직순번리스트조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void autoBndtSnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		List <Map> records2;

		records = (List<Map>)baseDao.list("HRM070302DAO.autoBndtSnList", inMap);		
		records2 = (List<Map>)baseDao.list("HRM070302DAO.selectDtList", inMap);	
		
		DataSetMap outDsMap = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		
		outDsMap.setRowMaps(records);
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
		
	}
    
    @SuppressWarnings({ "rawtypes" })
 	public int saveAutoBndtSnCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
 	                baseDao.insert("HRM070302DAO.saveAutoBndtSnC", map);
 	                iRow += baseDao.update("HRM070302DAO.saveTbhrmBndtSnU", map);
 	                break;
 	            case DataSet.ROW_TYPE_DELETED :
 	                iRow += baseDao.delete("HRM070302DAO.saveAutoBndtSnD", map);
 	                iRow += baseDao.delete("HRM070302DAO.saveTbhrmBndtSnDU", map);
 	                break;  
 	            }   
 	        }
 	        return iRow;

 		
 	}
    
    @SuppressWarnings({ "rawtypes" })
 	public void saveBndtPymnt( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		

			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
	        baseDao.delete("HRM070302DAO.deleteBndtPymnt", inMap);
			baseDao.delete("HRM070302DAO.deleteBndtPymntExpndtr", inMap);
			baseDao.insert("HRM070302DAO.insertBndtPymntExpndtr", inMap);
	        baseDao.insert("HRM070302DAO.insertBndtPymnt", inMap);
 		
 	}    
    
    
    /**
	 * 당직명령 전자결재
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes" })
	public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		baseDao.update("HRM070302DAO.approveU", map);
	}

  
    
}