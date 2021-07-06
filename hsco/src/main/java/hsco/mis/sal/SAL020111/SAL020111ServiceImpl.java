package hsco.mis.sal.SAL020111;

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
 * @Class Name   	: SAL020111ServiceImpl.java
 * @Description  	: 성과급관리
 * @author       	: 이상명
 * @since        	: 2015. 7. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 16.					이상명				최초생성
 * </pre>  
 */

@Service("SAL020111Service")
public class SAL020111ServiceImpl extends BaseService implements SAL020111Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
    /**
	 * 성과급정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPricewageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL020111DAO.selectPricewageList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL020111DAO.selectPricewageList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}	
    
    /**
     * 성과급정보 -기준관리 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPymntstdrrtList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL020111DAO.selectPymntstdrrtList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL020111DAO.selectPymntstdrrtList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);    
        
    }
    
    /**
     * 성과급정보 -기준관리 등급별 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectGradpymntrtList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL020111DAO.selectGradpymntrtList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL020111DAO.selectGradpymntrtList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);    
        
    }
    
    /**
	 * 성과급정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPricewage2List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL020111DAO.selectPricewage2List", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL020111DAO.selectPricewage2List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);	
   		
   	}	
    
    /**
 	 * 성과급 생성
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return int
 	 * @throws NexaServiceException
 	 */
 	@SuppressWarnings({ "rawtypes", "unchecked" })
 	
 	public void pricewageCreate( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
 		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			baseDao.insert("SAL020111DAO.pricewageCreate", inMap);
			records = (List<Map>)baseDao.list("SAL020111DAO.selectPricewageList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL020111DAO.selectPricewageList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
 		
 	}
    
    /**
 	 * 성과급정보 등록, 수정, 삭제
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return int
 	 * @throws NexaServiceException
 	 */
 	@SuppressWarnings({ "rawtypes" })
 	
 	public int PricewageCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
 					baseDao.insert("SAL020111DAO.PricewageC", map);
 					break;
 				case DataSet.ROW_TYPE_UPDATED :
 					iRow += baseDao.update("SAL020111DAO.PricewageU", map);
 					break;
 				case DataSet.ROW_TYPE_DELETED :
 					iRow += baseDao.delete("SAL020111DAO.PricewageD", map);
 					break;			
 			}				
 		}		
 		return iRow;
 	}
 	
 	/**
     * 성과급정보-기준정보 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int PymntstdrrtCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input2");     
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
                    baseDao.insert("SAL020111DAO.PymntstdrrtC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL020111DAO.PymntstdrrtU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL020111DAO.PymntstdrrtD", map);
                    break;          
            }               
        }       
        return iRow;
    }
    
    /**
     * 성과급정보-기준정보 등급별 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int GradpymntrtCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input2");     
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
                    baseDao.insert("SAL020111DAO.GradpymntrtC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL020111DAO.GradpymntrtU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL020111DAO.GradpymntrtD", map);
                    break;          
            }               
        }       
        return iRow;
    }
 	
 	 /**
 	 * 성과급정보 등록, 수정, 삭제
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return int
 	 * @throws NexaServiceException
 	 */
 	@SuppressWarnings({ "rawtypes" })
 	
 	public int Pricewage2D( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
 		
			int iRow = 0;
	        
	        DataSetMap list = (DataSetMap) inDataset.get("input4");     
	                            
	        Map map = list.get(0);          
	        // 세션정보 설정
	        try {
	            ObjectUtil.setUserToMap(map);
	        }
	        catch( Exception e) {
	            throw new NexaServiceException(e); 
	        }       
	        
	        baseDao.insert("SAL020111DAO.PricewageD", map);
                 
        return iRow;
 	}
			
}
