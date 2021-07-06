package hsco.mis.hrm.HRM070304;

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
 * @Class Name   	: HRM070304ServiceImpl.java
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
 *  2016. 07. 15    최현식				전자결재
 * </pre>  
 */

@Service("HRM070304Service")
public class HRM070304ServiceImpl extends BaseService implements HRM070304Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 대직승인원 내역 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSubDutyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("HRM070304DAO.selectSubDutyList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

    /** 대직승인원 내역 상세조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void subdutyListR( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        

        records = (List<Map>)baseDao.list("HRM070304DAO.subdutyListR", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**당직자 정보 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBndtEmpnoList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        

        records = (List<Map>)baseDao.list("HRM070304DAO.selectBndtEmpnoList", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }

    /**당직일자 선택팝업 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBndtDeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        

        records = (List<Map>)baseDao.list("HRM070304DAO.selectBndtDeList", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**현당직자 선택팝업 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCurEmpnoList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        

        records = (List<Map>)baseDao.list("HRM070304DAO.selectCurEmpnoList", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**대직자 선택팝업 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEmpnoList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        

        records = (List<Map>)baseDao.list("HRM070304DAO.selectEmpnoList", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**CUD */
    @SuppressWarnings({ "rawtypes" })
    public int saveSubDutyList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
    
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
            case DataSet.ROW_TYPE_DELETED :
                iRow += baseDao.update("HRM070304DAO.saveBndtDU", map);
                iRow += baseDao.update("HRM070304DAO.saveBndtSnEmpDU", map);
                iRow += baseDao.update("HRM070304DAO.saveBndtSnSubdutyDU", map);
                break;
            }   
        }
        return iRow;
    
    }
    
    /**상세 CUD */
    @SuppressWarnings({ "rawtypes" })
    public int saveBndtCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
                    baseDao.update("HRM070304DAO.saveBndtRegistU", map);
                    iRow += baseDao.update("HRM070304DAO.subDutylastBndtDeU", map);
                    iRow += baseDao.update("HRM070304DAO.lastBndtDeU", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("HRM070304DAO.saveBndtU", map);
                    break;

            }   
        }
        return iRow;
    
    }
    
    
    /**
	 * 대직승인원 전자결재
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
		
		baseDao.update("HRM070304DAO.approveU", map);
	}
    
 /*   @SuppressWarnings({ "rawtypes" })
 	
 	public int saveAutoBndtSnCUD( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
 		String sqlId = null;
 		String forceFlag = null;
 		
 		  int iRow = 0;
 	        
 	        DataSetMap list = (DataSetMap) inDataset.get("input1");
 	        
 	        int listSize = (list == null) ? 0 : list.size();
 	        
 	        for (int x = 0; x < listSize; x++) {
 	                
 	            Map map = list.get(x);
 	            
 	            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
 	            
 	            switch(rowType) {
 	            case DataSet.ROW_TYPE_INSERTED :
 	                baseDao.insert("HRM070304DAO.saveAutoBndtSnC", map);
 	                iRow += baseDao.update("HRM070304DAO.saveTbhrmBndtSnU", map);
 	                break;
 	            case DataSet.ROW_TYPE_DELETED :
 	                iRow += baseDao.delete("HRM070304DAO.saveAutoBndtSnD", map);
 	                iRow += baseDao.delete("HRM070304DAO.saveTbhrmBndtSnDU", map);
 	                break;  
 	            }   
 	        }
 	        return iRow;

 		
 	}*/
    
    /**CUD */
    @SuppressWarnings({ "rawtypes" })
    public int saveSubDutyCfm( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
    
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
            case DataSet.ROW_TYPE_UPDATED :
                iRow += baseDao.update("HRM070304DAO.saveSubDutyCfm", map);
                break;
            }   
        }
        return 1;
    
    }

  
    
}