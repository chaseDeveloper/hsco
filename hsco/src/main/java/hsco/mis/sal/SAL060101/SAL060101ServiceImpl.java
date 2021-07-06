package hsco.mis.sal.SAL060101;

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
 * @Class Name   	: SAL060101ServiceImpl.java
 * @Description  	: 학자금대부관리
 * @author       	: 이상명
 * @since        	: 2015. 11. 3.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 3.					이상명				최초생성
 * </pre>  
 */

@Service("SAL060101Service")
public class SAL060101ServiceImpl extends BaseService implements SAL060101Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 학자금대부 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSchxpnLoanList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoanList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoanList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}
    
    /**
     * 학자금대부 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSchxpnLoan2List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoan2List", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoan2List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output2", outDsMap);    
              
    }
    
    /**
     * 학자금대부 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSchxpnLoan3List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoan3List", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoan3List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output2", outDsMap);  
        
    }
    
  
    /**
     * 학자금대부 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSchxpnLoan4List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoan4List", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoan4List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output4", outDsMap);    
        
    }
    
    
    /**
     * 학자금대부 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSchxpnLoan5List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoan5List", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoan5List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output5", outDsMap);    
        
    }
    
    /**
     * 학자금대부 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSchxpnLoan6List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoan6List", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL060101DAO.selectSchxpnLoan6List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output6", outDsMap);    
        
    }
    
        
    /**
   	 * 학자금대부 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int SchxpnLoanCUD( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
   		int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input4");		
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
   					baseDao.insert("SAL060101DAO.SchxpnLoanC", map);
   					break;
   				case DataSet.ROW_TYPE_UPDATED :
   					iRow += baseDao.update("SAL060101DAO.SchxpnLoanU", map);
   					break;
   				case DataSet.ROW_TYPE_DELETED :
   					iRow += baseDao.delete("SAL060101DAO.SchxpnLoanD", map);
   					break;			
   			}				
   		}		
   		return iRow;
   	}
   	
   	/**
     * 학자금대부 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int SchxpnLoan2CUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input5");     
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
                    baseDao.insert("SAL060101DAO.SchxpnLoan2C", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL060101DAO.SchxpnLoan2U", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL060101DAO.SchxpnLoan2D", map);
                    break;          
            }               
        }       
        return iRow;
    }
   	
   	
   	/**
     * 학자금대부2 등록
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int SchxpnLoan2_1C( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input6");     
             
                
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }   
       
        baseDao.insert("SAL060101DAO.SchxpnLoan2_1C", map);
        
             
        return iRow;
    }
   	
   	/**
     * 학자금대부 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int SchxpnLoanRpayCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input7");     
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
                    baseDao.insert("SAL060101DAO.SchxpnLoanRpayC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL060101DAO.SchxpnLoanRpayU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL060101DAO.SchxpnLoanRpayD", map);
                    break;          
            }               
        }       
        return iRow;
    }
    
}
