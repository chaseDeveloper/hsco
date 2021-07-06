package hsco.mis.sal.SAL050202;


import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.dreamsecurity.verify.DSTSPDFSig;
import com.epapyrus.api.ExportCustomFile;
import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL050201ServiceImpl.java
 * @Description  	: 연말정산입력관리
 * @author       	: 이상명
 * @since        	: 2015. 10. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 13.					이상명				최초생성
 * </pre>  
 */

@Service("SAL050202Service")
public class SAL050202ServiceImpl extends BaseService implements SAL050202Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /**
	 * 연말정산입력관리조회 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectYndExcclInputList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndExcclInputList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndExcclInputList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}
    
    /**
     * 연말정산입력관리조회 목록을 조회한다.  - 대상자
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectYndExcclempList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndExcclempList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndExcclempList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output2", outDsMap);    
        
    }
    
    /**
     * 인적공제 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectYndhnddcList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndhnddcList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndhnddcList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap); 
        
        
        
        DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input1");
        Map inMap2 = null;
        
        if (inDsMap2 != null)
            inMap2 = inDsMap2.get(0);
        
        List <Map> records2;

        if (inMap2 != null) {
            records2 = (List<Map>)baseDao.list("SAL050202DAO.selectYndhnddc2List", inMap2);
        } else {
            records2 = (List<Map>)baseDao.list("SAL050202DAO.selectYndhnddc2List", inVar);
        }
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output2", outDsMap2);  
        
    }
    
    /**
     * 기부금 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectYndctbnyList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndhnddcList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndhnddcList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap); 
        
        
        
        DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input1");
        Map inMap2 = null;
        
        if (inDsMap2 != null)
            inMap2 = inDsMap2.get(0);
        
        List <Map> records2;

        if (inMap2 != null) {
            records2 = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList", inMap2);
        } else {
            records2 = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList", inVar);
        }
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output2", outDsMap2);  
        
    }
    
    /**
     * 의료비 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectYndmcpList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndhnddcList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndhnddcList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap); 
        
        
        
        DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input1");
        Map inMap2 = null;
        
        if (inDsMap2 != null)
            inMap2 = inDsMap2.get(0);
        
        List <Map> records2;

        if (inMap2 != null) {
            records2 = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList", inMap2);
        } else {
            records2 = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList", inVar);
        }
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output2", outDsMap2);  
        
    }
    
    /**
     * 연금저축 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectYndanntyList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**
     * 월세월리금 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectYndpnintList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndpnintList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndpnintList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
   
    /**
     * 연말정산입력 목록을 저장한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
   	
   	public int YndExcclInputCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
   					baseDao.insert("SAL050202DAO.YndExcclInputC", map);
   					break;
   				case DataSet.ROW_TYPE_UPDATED :
   					iRow += baseDao.update("SAL050202DAO.YndExcclInputU", map);
   					baseDao.update("SAL050202DAO.YndExcclcHnDdcU_000", map);
   					break;
   				case DataSet.ROW_TYPE_DELETED :
   					iRow += baseDao.delete("SAL050202DAO.YndExcclInputD", map);
   					break;			
   			}				
   		}		
   		return iRow;
    }
    
    
    /**
     * 인적공제 목록을 저장한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int YndExcclcHnDdcCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
                    baseDao.insert("SAL050202DAO.YndExcclcHnDdcC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL050202DAO.YndExcclcHnDdcU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL050202DAO.YndExcclcHnDdcD", map);
                    break;          
            }               
        }       
        return iRow;
    }
    
    /**
     * 기부금 목록을 저장한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int YndctbnyCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
                    baseDao.insert("SAL050202DAO.YndNTS_C", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL050202DAO.YndNTS_U", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL050202DAO.YndNTS_D", map);
                    break;          
            }               
        }       
        return iRow;
    }
    
    /**
     * 의료비 목록을 저장한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int YndmcpCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
                    baseDao.insert("SAL050202DAO.YndNTS_C", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL050202DAO.YndNTS_U", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL050202DAO.YndNTS_D", map);
                    break;          
            }               
        }       
        return iRow;
    }
    
    /**
     * 연금저축 목록을 저장한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int YndanntyCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
                    baseDao.insert("SAL050202DAO.YndNTS_C", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL050202DAO.YndNTS_U", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL050202DAO.YndNTS_D", map);
                    break;          
            }               
        }       
        return iRow;
    }
    
    /**
     * 월세월리금 목록을 저장한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int YndpnintCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
                    baseDao.insert("SAL050202DAO.YndpnintC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL050202DAO.YndpnintU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL050202DAO.YndpnintD", map);
                    break;          
            }               
        }       
        return iRow;
    }
    
    /**
     * 연말정산기초정보를 수정한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int updateYndExcclInput2( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");     
                            
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }       
        
        baseDao.insert("SAL050202DAO.updateYndExcclInput2", map);
        
        baseDao.update("SAL050202DAO.CNTR_MDAT_B_U", map);
	    baseDao.insert("SAL050202DAO.YndcntrmdatD_1", map);   // 정산년도 기부조정금 삭제
	    baseDao.insert("SAL050202DAO.YndcntrmdatC_1", map);   // 정산년도 기부조정금 생성
                 
        return iRow;
    }
    
    /**
     * 연말정산기초정보를 수정한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int updateYndExcclInput3( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");     
                            
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }       
        
  //      baseDao.insert("SAL050202DAO.updateYndExcclInput3", map);
        baseDao.insert("SAL050202DAO.NTS2015B_U", map);
        baseDao.insert("SAL050202DAO.NTS2015H_U", map);             // 국세청자료 합계저장(여러가지)
        baseDao.insert("SAL050202DAO.updateYndExcclInput2", map);
        
        
                 
        return iRow;
    }
    
    /**
     * 기부조정금 수정한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int updateYndExcclInput4( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
                            
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }
        
        baseDao.update("SAL050202DAO.CNTR_MDAT_B_U", map);
        if(map.get("TYPE")!= null && "1".equals(map.get("TYPE"))){
	        baseDao.insert("SAL050202DAO.YndcntrmdatD_1", map);   // 정산년도 기부조정금 삭제
	        baseDao.insert("SAL050202DAO.YndcntrmdatC_1", map);   // 정산년도 기부조정금 생성
        }
                 
        return iRow;
    }
    
    /**
     * 국세청자료 파일 업로드
     *
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws IOException 
     * @throws Exception
     */
    
    @SuppressWarnings({"unchecked"})
    public void pdfuploadinsert(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException, IOException {
    	
    	    	
    	DataSetMap list = (DataSetMap) inDataset.get("input2");
    	@SuppressWarnings("rawtypes")
		Map map = list.get(0);
    	String empno = (String)map.get("EMPNO");
    	String year = (String)map.get("EXCCLC_YEAR");
    	String pw = (String)map.get("PW");
    	
    	NexacroMapDTO xpDto = getXpDto();    	
    	HttpServletRequest request = xpDto.getRequest(); 
    	
    	// 전달 데이터 파일 추출
		MultipartHttpServletRequest mpRequest = (MultipartHttpServletRequest)request;
		
		// 업로드 파일 정보 추출
		Iterator<String> iterFile = mpRequest.getFileNames();		
		
    	String p_pwd = pw;  // 비밀번호
    	String key = "SAM";  //key 
    	// 파일내용을 읽음
    	String formName = (String)iterFile.next();
    	MultipartFile multiFile = mpRequest.getFile(formName);
		byte[] pdfBytes = multiFile.getBytes();
		boolean isSuccess = false;
						
	/* [Step1] 전자문서 위변조 검증 */
		try {
			DSTSPDFSig dstsPdfsig = new DSTSPDFSig();
			
			dstsPdfsig.init(pdfBytes);
			dstsPdfsig.tokenParse();

			isSuccess = dstsPdfsig.tokenVerify();
			
			if( isSuccess ) {
				System.out.println("<!-- 검증 완료(진본) -->");
			} else {
				String msg = dstsPdfsig.getTstVerifyFailInfo();
				System.out.println(msg);
				
				return;
			}
		} catch(Exception ex)
		{		
		     throw new NexaServiceException("err.변조된 문서입니다.", ex);
		}
		
		
	/* [Step2] XML(or SAM) 데이터 추출 */

		try {
			if (isSuccess) {
				
				 ExportCustomFile pdf = new ExportCustomFile();
				
		//		ezPDFExportFile pdf = new ezPDFExportFile();
				
				// 데이터 추출
				byte[] buf = pdf.NTS_GetFileBufEx(pdfBytes, p_pwd, key, false );
				int v_ret = pdf.NTS_GetLastError();				
				
				if (v_ret == 1) {
					System.out.println("성공");	
					System.out.println(empno);
					System.out.println(year);
					
					String strXml = new String( buf, "UTF-8" );
					
				// 정상적으로 추출된 데이터 활용하는 로직 구현 부분
					
					System.out.println(strXml);					
					String[] arrForm = strXml.split("\\n"); // sam file을 캐리지리턴으로 나눠서 배열에 저장					
					
					baseDao.insert("SAL050202DAO.NTS2015_D",map);           // 국제청자료 삭제
					baseDao.insert("SAL050202DAO.YndcntrmdatD_1", map);   // 정산년도 기부조정금 삭제
					
					// SAM Header/Footer 정보는 데이터입력 안하도록...
					for (int idx = 1; idx < arrForm.length - 1; idx++) {	
						Map subMap = new HashMap<String, String>();
						subMap.putAll(map);
						
						String[] args = arrForm[idx].trim().split("\\|");	// 구분자'|'기준 분리					
						String formCd = args[0].trim();                     // 서식코드
						System.out.println(formCd);

						if (year.equals("2016")) {                          // 2015년도 연말정산 전자파일정보 저장	
							if(this.update2015Datas(subMap, formCd, args)){
								baseDao.insert("SAL050202DAO.NTS2015_C", subMap);  // 국제청자료 입력 							
							}
						}
					}					
					// 입력합계 저장
					baseDao.insert("SAL050202DAO.NTS2015H_U", map);             // 국세청자료 합계저장(여러가지)					
					baseDao.insert("SAL050202DAO.NTS2015B_U", map);             // 국세청자료 합계저장(주택)
					baseDao.insert("SAL050202DAO.updateYndExcclInput2", map);   // 연말정산 기초자료 업데이트
					baseDao.update("SAL050202DAO.CNTR_MDAT_B_U", map);
					baseDao.insert("SAL050202DAO.YndcntrmdatC_1", map);   // 정산년도 기부조정금 생성
					
				} else if (v_ret == 0) {
					System.out.println("연말정산간소화 표준 전자문서가 아닙니다.");					
				} else if (v_ret == -1) {
					System.out.println("비밀번호가 틀립니다.");					
				} else if (v_ret == -2) {
					System.out.println("PDF문서가 아니거나 손상된 문서입니다.");					
				} else {
					System.out.println("데이터 추출에 실패하였습니다.");					
				}
			}
			
		} catch (Exception e) {			
			System.out.println("[Step2] 데이터 추출 실패(" + e.toString() + ")");			
		}				
    }    

	private boolean update2015Datas(@SuppressWarnings("rawtypes") Map map, String formCd, String[] args) throws Exception {
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		}		
		
    	if (formCd.equals("A102Y")) { //A101Y 보험료 (보장성 보험, 장애인전용보장성보험)    		
    		this.getA102Y(map,args);
		} else if (formCd.equals("B101Y")) { // B101Y 의료비			
			this.getB101Y(map,args);			
		} else if (formCd.equals("C101Y")) { // C101Y 교육비(유초중고, 대학, 기타)
			this.getC101Y(map,args);			
		} else if (formCd.equals("C202Y")) { // C202Y 직업훈련비
			this.getC202Y(map,args);			
		} else if (formCd.equals("C301Y")) { // C301Y 교복구입비
			this.getC301Y(map,args);			
		} else if (formCd.equals("D101Y")) { // D101Y 개인연금저축
			this.getD101Y(map,args);			
		} else if (formCd.equals("E102Y")) { // E102Y 연금저축
			this.getE102Y(map,args);			
		} else if (formCd.equals("F102Y")) { // F102Y 퇴직연금
			this.getF102Y(map,args);
		} else if (formCd.equals("G103Y")) { // G103Y 신용카드
			this.getG103Y(map,args);			
		} else if (formCd.equals("G104Y")) { // G104Y 신용카드	(2016년 코드 변경)
			this.getG103Y(map,args);			
		} else if (formCd.equals("G204M")) { // G203M 현금영수증
			this.getG204M(map,args);
		} else if (formCd.equals("G205M")) { // G205M 현금영수증 (2016년 코드 변경)
			this.getG204M(map,args);
		} else if (formCd.equals("G303Y")) { // G302Y 직불카드
			this.getG303Y(map,args);
		} else if (formCd.equals("G304Y")) { // G304Y 직불카드 (2016년 코드 변경)
			this.getG303Y(map,args);
		} else if (formCd.equals("J101Y")) { // J101Y 원리금상환(주택임차차입금 원리금상환액)
			this.getJ101Y(map,args);
		} else if (formCd.equals("J203Y")) { // J203Y 장기주택_차입_이자(장기주택저당차입금 이자상환액)
			this.getJ203Y(map,args);
		} else if (formCd.equals("J301Y")) { // J301Y 주택마련저축
			this.getJ301Y(map,args);
		} else if (formCd.equals("K101M")) { // K101M 공제부금(소기업소상공인 공제부금)
			this.getK101Y(map,args);
		} else if (formCd.equals("L101Y")) { // L101Y 기부금
			this.getL101Y(map,args);
		} else if (formCd.equals("L102Y")) { // L102Y 기부금 (2016년 코드 변경)
			this.getL101Y(map,args);
		} else if (formCd.equals("J401Y")) { // J401Y 목돈 안드는 전세 이자상환액[2013년도 신규서식 추가]
			this.getJ401Y(map,args);
		} else if (formCd.equals("N101Y")) { // 장기집합투자증권저축[2014년도 신규서식 추가]
			this.getN101Y(map,args);
		} else if (formCd.equals("M101Y")) { // 장기주식형저축
			return false;
		} else {
			return false;
		}
    	return true;
    }	
    
	/**
	 * 서식구분 : A102Y
	 * 서식명: 보험료
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getA102Y(@SuppressWarnings("rawtypes") Map map, String[] args) {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0001:보장성, G0002:장애인보장성)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String acc_no      = args[6].trim();  // 증권번호
		String goods_nm    = args[7].trim();  // 보험종류
		String amt         = args[16].trim(); // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));  // 연말정산년도
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));    // 정산구분
		map.put("EMPNO",       (String)map.get("EMPNO"));	     // 사번
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("GOODS_NM",     goods_nm);    // 상품명
		map.put("ESNTL_NO",     acc_no);      // 고유번호(증권번호)
		
		map.put("DETAIL_KND",  "");
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("STDR_DE",     "");        
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);   
	}
	
	/**
	 * 서식구분 : B101Y
	 * 서식명: 의료비
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getB101Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0003:의료비, G0025:의료기기구입비용, G0026:안경 또는 콘택트렌즈구입비용, G0072:보청기또는 장애인보장구)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String amt         = args[6].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));	
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		
		map.put("GOODS_NM",     "");  
		map.put("ESNTL_NO",     "");  
		map.put("DETAIL_KND",   "1");      // 증빙구분
		map.put("DETAIL_KND_2", "1");      // 공제구분
		map.put("STDR_DE",      "");        
		map.put("BEGIN_DE",     "");       
		map.put("END_DE",       "");       
		map.put("GNRL_2",       ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",       ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : C101Y
	 * 서식명: 교육비
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getC101Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0004:유초중고 G0006:대학교 G0007:기타)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 학교명
		String edu_tp      = args[6].trim();  // 교육비종류
		String amt         = args[7].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));	
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("DETAIL_KND",   edu_tp);      // 교육비종류
		
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("GOODS_NM",     "");  
		map.put("ESNTL_NO",     ""); 		      
		map.put("STDR_DE",      "");        
		map.put("BEGIN_DE",     "");       
		map.put("END_DE",       "");       
		map.put("GNRL_2",       ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",       ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : C202Y
	 * 서식명: 직업훈련비
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getC202Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0005:직업훈련비)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 교육기관명
		String goods_nm  = args[7].trim();  // 과정명
		String amt         = args[8].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));	
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("GOODS_NM",     goods_nm);    // 상품명
		
		map.put("ESNTL_NO",    ""); 
		map.put("DETAIL_KND",  ""); 
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("STDR_DE",     "");        
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : C301Y
	 * 서식명: 교복구입비
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getC301Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0024:교복구입비)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 학교명
		String amt         = args[6].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));	
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호		
       
		map.put("GOODS_NM",    "");
		map.put("ESNTL_NO",    ""); 
		map.put("DETAIL_KND",  ""); 
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("STDR_DE",     "");        
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : D101Y
	 * 서식명: 개인연금저축
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getD101Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0009:개인연금저축)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String acc_no      = args[6].trim();  // 계좌번호
		String com_cd      = args[9].trim();  // 금융회사등코드
		
		String amt         = args[10].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("ESNTL_NO",     acc_no);      // 계좌번호
		map.put("DETAIL_KND",   com_cd);      // 금융회사등코드
		
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("GOODS_NM",    "");
		map.put("STDR_DE",     "");        
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : E102Y
	 * 서식명: 연금저축
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getE102Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0010:연금저축)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String acc_no      = args[6].trim();  // 계좌번호
		String com_cd      = args[7].trim();  // 금융회사등코드
		
		String amt         = args[10].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("ESNTL_NO",     acc_no);      // 계좌번호
		map.put("DETAIL_KND",   com_cd);      // 금융회사등코드
		
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("GOODS_NM",    "");
		map.put("STDR_DE",     "");        
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : F102Y
	 * 서식명: 퇴직연금
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getF102Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0011:퇴직연금)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String acc_no      = args[6].trim();  // 계좌번호
		String com_cd      = args[7].trim();  // 금융회사등코드
		
		String amt         = args[11].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));	
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("ESNTL_NO",     acc_no);      // 계좌번호
		map.put("DETAIL_KND",   com_cd);      // 금융회사등코드
		
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("GOODS_NM",    "");
		map.put("STDR_DE",     "");        
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : G103Y
	 * 서식명: 신용카드
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getG103Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0012:신용카드)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String use_place_cd      = args[6].trim();  // 사용종류
		
		String grnl_2      = args[7].trim();  // 전전년도 일반공제
		String trdit_2     = args[8].trim();  // 전전년도 전통시장공제
		String mass_2      = args[9].trim();  // 전전년도 대중교통공제
		
		String grnl_1      = args[10].trim();  // 전년도 일반공제
		String trdit_1     = args[11].trim();  // 전년도 전통시장공제
		String mass_1      = args[12].trim();  // 전년도 대중교통공제
		
		String frhfyr      = args[15].trim();  // 상반기공제
		String shyy        = args[16].trim();  // 하반기공제		
		
		String amt         = args[19].trim();  // 공제대상금액계
		
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		
		map.put("DETAIL_KND",   use_place_cd);   // 세부종류
		
		map.put("GNRL_2",        grnl_2);     // 일반전전년도
		map.put("TRDIT_MRKT_2",  trdit_2);    // 전통시장전전년도
		map.put("MASS_TRNSPORT_2",  mass_2);  // 대중교통전전년도
		 
		map.put("GNRL_1",        grnl_1);     // 일반전년도
		map.put("TRDIT_MRKT_1",  trdit_1);    // 전통시장전년도
		map.put("MASS_TRNSPORT_1",  mass_1);  // 대중교통전년도
		
		map.put("FRHFYR_CARD",  frhfyr);      // 상반기카드사용
		map.put("SHYY_CARD",    shyy);        // 하반기카드사용
		
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("GOODS_NM",    "");
		map.put("ESNTL_NO",    "");
		map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",  amt);    // 납입금액계
	}
	
	/**
	 * 서식구분 : G204M
	 * 서식명: 현금영수증
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getG204M(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0013:현금영수증)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		
		String use_place_cd      = args[4].trim();  // 사용종류
		
		String grnl_2      = args[5].trim();  // 전전년도 일반공제
		String trdit_2     = args[6].trim();  // 전전년도 전통시장공제
		String mass_2      = args[7].trim();  // 전전년도 대중교통공제
		
		String grnl_1      = args[8].trim();  // 전년도 일반공제
		String trdit_1     = args[9].trim();  // 전년도 전통시장공제
		String mass_1      = args[10].trim();  // 전년도 대중교통공제
		
		String frhfyr      = args[13].trim();  // 상반기공제
		String shyy        = args[14].trim();  // 하반기공제		
		
		String amt         = args[17].trim();  // 공제대상금액계
		
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));	
		map.put("DAT_CD",        dat_cd);
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		
		map.put("DETAIL_KND",   use_place_cd);   // 세부종류
		
		map.put("GNRL_2",        grnl_2);     // 일반전전년도
		map.put("TRDIT_MRKT_2",  trdit_2);    // 전통시장전전년도
		map.put("MASS_TRNSPORT_2",  mass_2);  // 대중교통전전년도
		 
		map.put("GNRL_1",        grnl_1);     // 일반전년도
		map.put("TRDIT_MRKT_1",  trdit_1);    // 전통시장전년도
		map.put("MASS_TRNSPORT_1",  mass_1);  // 대중교통전년도
		
		map.put("FRHFYR_CARD",  frhfyr);      // 상반기카드사용
		map.put("SHYY_CARD",    shyy);        // 하반기카드사용
		
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("GOODS_NM",    "");
		map.put("ESNTL_NO",    "");
		map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",  amt);    // 납입금액계
	}
	
	/**
	 * 서식구분 : G303Y
	 * 서식명: 직불카드
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getG303Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0013:현금영수증)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String use_place_cd      = args[6].trim();  // 사용종류
		
		String grnl_2      = args[7].trim();  // 전전년도 일반공제
		String trdit_2     = args[8].trim();  // 전전년도 전통시장공제
		String mass_2      = args[9].trim();  // 전전년도 대중교통공제
		
		String grnl_1      = args[10].trim();  // 전년도 일반공제
		String trdit_1     = args[11].trim();  // 전년도 전통시장공제
		String mass_1      = args[12].trim();  // 전년도 대중교통공제
		
		String frhfyr      = args[15].trim();  // 상반기공제
		String shyy        = args[16].trim();  // 하반기공제		
		
		String amt         = args[19].trim();  // 공제대상금액계
		
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));	
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		
		map.put("DETAIL_KND",   use_place_cd);   // 세부종류
		
		map.put("GNRL_2",        grnl_2);     // 일반전전년도
		map.put("TRDIT_MRKT_2",  trdit_2);    // 전통시장전전년도
		map.put("MASS_TRNSPORT_2",  mass_2);  // 대중교통전전년도
		 
		map.put("GNRL_1",        grnl_1);     // 일반전년도
		map.put("TRDIT_MRKT_1",  trdit_1);    // 전통시장전년도
		map.put("MASS_TRNSPORT_1",  mass_1);  // 대중교통전년도
		
		map.put("FRHFYR_CARD",  frhfyr);      // 상반기카드사용
		map.put("SHYY_CARD",    shyy);        // 하반기카드사용
		
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("GOODS_NM",    "");
		map.put("ESNTL_NO",    "");
		map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",  amt);    // 납입금액계
	}
	
	/**
	 * 서식구분 : J101Y
	 * 서식명: 주택임차차입금 원리금상환액
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getJ101Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0016:주택임차차입금 원리금상환액)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String acc_no      = args[6].trim();  // 계좌번호
		String goods_nm    = args[7].trim();  // 상품명
		String lend_dt     = args[8].trim();  // 대출일자
		
		String amt         = args[9].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("ESNTL_NO",     acc_no);      // 계좌번호
		map.put("GOODS_NM",     goods_nm);    // 상품명
		map.put("STDR_DE",      lend_dt);     // 대출일자		
		   
		map.put("DETAIL_KND",  "");
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : J203Y
	 * 서식명: 장기주택저당차입금 이자상환액
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getJ203Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0017:장기주택저당차입금 이자상환액)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String acc_no      = args[6].trim();  // 계좌번호
		String goods_nm    = args[13].trim();  // 상품명
		String lend_dt     = args[10].trim();  // 대출일자
		String rpay_sdytrn = args[12].trim();  // 상환연수
		String debt        = args[14].trim();  // 차입금
		String fixed_debt  = args[15].trim();  // 고정금리차입금
		String not_debt    = args[16].trim();  // 비거치식상환차입금
		String this_amt    = args[17].trim();  // 당해원금상환
		
		String amt         = args[18].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));	
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("ESNTL_NO",     acc_no);      // 계좌번호
		map.put("GOODS_NM",     goods_nm);    // 상품명
		map.put("STDR_DE",      lend_dt);     // 대출일자
		map.put("RPAY_PD",      rpay_sdytrn); // 상환연수
		map.put("BRRW_AMOUNT",      debt);    // 차입금액
		map.put("FIXING_BRRW_AMOUNT",      fixed_debt); // 고정금리차입금액
		map.put("NTHG_DFR_BRRW_AMOUNT",      not_debt); // 비거치차입금액
		map.put("PRTINT_PRNCPAL_RPAY",      this_amt);  // 당해원금상환		
		     
		map.put("DETAIL_KND",  "");
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); 
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : J301Y
	 * 서식명: 주택마련저축
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getJ301Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0018:주택마련저축)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String acc_no      = args[6].trim();  // 계좌번호
		String goods_nm    = args[7].trim();  // 상품명
		String svings_se   = args[8].trim();  // 저축구분
		String lend_dt     = args[9].trim();  // 가입일자
		String com_cd      = args[10].trim();  // 금융회사코드
		
		String amt         = args[11].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));	
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("ESNTL_NO",     acc_no);      // 계좌번호
		map.put("GOODS_NM",     goods_nm);    // 상품명
		map.put("STDR_DE",      lend_dt);     // 가입일자
		map.put("DETAIL_KND",   com_cd);      // 세부종류
		map.put("DETAIL_KND_2",   svings_se);      // 세부종류2
		    
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : J401Y
	 * 서식명: 목돈 안드는 전세 이자상환액
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getJ401Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0018:주택마련저축)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String acc_no      = args[6].trim();  // 계좌번호
		String lend_dt     = args[8].trim();  // 대출일자
		
		String amt         = args[9].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("ESNTL_NO",     acc_no);      // 계좌번호
		map.put("STDR_DE",      lend_dt);     // 가입일자
		
		map.put("GOODS_NM",    ""); 
		map.put("DETAIL_KND",  ""); 
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
	
	/**
	 * 서식구분 : K101Y
	 * 서식명: 소기업소상공인 공제부금
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getK101Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0019:소기업소상공인 공제부금)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String acc_no      = args[4].trim();  // 증서번호
		String start_dt    = args[5].trim();  // 시작일자
		String end_dt      = args[6].trim();  // 종료일자
		
		String amt         = args[9].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("ESNTL_NO",     acc_no);      // 계약번호
		map.put("BEGIN_DE",     start_dt);    // 시작일자
		map.put("END_DE",       end_dt);      // 종료일자
		
		map.put("GOODS_NM",    ""); 
		map.put("BIZRNO",      "");
		map.put("MTLTY",       ""); 
		map.put("DETAIL_KND",  "");  
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
		
	}
	
	/**
	 * 서식구분 : L101Y
	 * 서식명: 기부금
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getL101Y(@SuppressWarnings("rawtypes") Map map, String[] args) {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 단체명
		String donation_cd = args[6].trim();  // 기부유형
		String amt         = args[7].trim();  // 기부공제대상
		String amt1         = args[8].trim();  // 기부장려금
		String amt2         = args[9].trim();  // 기부금합계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("RELATE_SE",    "000");       // 관계
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("DETAIL_KND",   donation_cd); // 세부종류
		
		map.put("DETAIL_KND_2","");           // 세부종류2
		map.put("ESNTL_NO",    "");
		map.put("GOODS_NM",    ""); 
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
		map.put("CTBNY_ICNT_AMOUNT",   amt1);         // 기부장려금
		map.put("CTBNY_AMOUNT",   amt2);         // 기부금합계
	}
	
	/**
	 * 서식구분 : N101Y
	 * 서식명: 장기집합투자증권저축
	 * @param content
	 * @param map
	 * @return
	 */
	@SuppressWarnings({ "unchecked" })
	public void  getN101Y(@SuppressWarnings("rawtypes") Map map, String[] args)  {
		String form_cd     = args[0].trim();
		String dat_cd      = args[1].trim();  // 자료구분(G0029:장기집합투자증권저축)
		String resid       = args[2].trim();  // 주민번호
		String name        = args[3].trim();  // 성명
		String busnid      = args[4].trim();  // 사업자번호
		String trade_nm    = args[5].trim();  // 상호
		String acc_no      = args[6].trim();  // 계좌번호
		String goods_nm    = args[7].trim();  // 상품명
		String com_cd      = args[9].trim();  // 금융회사등코드
		String lend_dt     = args[8].trim();  // 가입일자
		
		String amt         = args[11].trim();  // 납입금액계
		map.put("EXCCLC_YEAR", (String)map.get("EXCCLC_YEAR"));
		map.put("EXCCLC_SE",   (String)map.get("EXCCLC_SE"));
		map.put("EMPNO",       (String)map.get("EMPNO"));	
		
		map.put("DTA_SE",  "Y");              // 국제청자료구분
		map.put("FORMAT_CODE",  form_cd);     // 서식코드
		map.put("IEM_CODE",     dat_cd);      // 항목코드
		map.put("IHIDNUM",      resid);       // 주민번호
		map.put("NM",           name);        // 성명
		map.put("BIZRNO",       busnid);	  // 사업자번호	
		map.put("MTLTY",        trade_nm);    // 상호
		map.put("ESNTL_NO",     acc_no);      // 계좌번호
		map.put("GOODS_NM",     goods_nm);    // 상품명
		map.put("DETAIL_KND",   com_cd);      // 세부종류
		map.put("STDR_DE",      lend_dt);     // 가입일자		
		
		map.put("DETAIL_KND_2","");      // 세부종류2
		map.put("BEGIN_DE",    "");       
		map.put("END_DE",      "");       
		map.put("GNRL_2",      ""); map.put("TRDIT_MRKT_2",     "");  map.put("MASS_TRNSPORT_2",     "");
		map.put("GNRL_1",      ""); map.put("TRDIT_MRKT_1",     "");  map.put("MASS_TRNSPORT_1",     "");
		map.put("FRHFYR_CARD",     "");  map.put("SHYY_CARD",     ""); map.put("RPAY_PD",     "");
		map.put("BRRW_AMOUNT",     "");  map.put("FIXING_BRRW_AMOUNT",     ""); map.put("NTHG_DFR_BRRW_AMOUNT",     "");
		map.put("PRTINT_PRNCPAL_RPAY",     "");
		
		map.put("PAY_AMOUNT",   amt);         // 납입금액계
	}
    
	
	@SuppressWarnings("rawtypes")
	public int yndExcclcClos( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
        int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input1");
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
   			iRow += baseDao.delete("SAL050202DAO.yndExcclcClos", map);
   		}		
   		return iRow;
    }
	
	@SuppressWarnings("rawtypes")
	public int yndExcclcClosCancle( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
   		
        int iRow = 0;
   		
   		DataSetMap list = (DataSetMap) inDataset.get("input1");
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
   			iRow += baseDao.delete("SAL050202DAO.yndExcclcClosCancle", map);
   		}		
   		return iRow;
    }
	
	
	/**
     * 기부금조정관리 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectYndcntrmdatList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndcntrmdatList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL050202DAO.selectYndcntrmdatList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
	
	/**
     * 기부금조정관리 등록
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public int YndcntrmdatCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
                    baseDao.insert("SAL050202DAO.YndcntrmdatC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("SAL050202DAO.YndcntrmdatU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("SAL050202DAO.YndcntrmdatD", map);
                    break;          
            }               
        }       
        return iRow;
    }
    
    
    /**
     * 기부금조정관리 수정 (공제, 이월, 소멸)
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int updateYndExcclcCntrMdat( DataSetMap tranInfo, Map<String, Object> inVar,
	        Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	        Map<String, DataSetMap> outDataset) throws NexaServiceException {       
	    
		int iRow = 0;
		    
		DataSetMap list = (DataSetMap) inDataset.get("input8");     
		if(list != null && list.size() > 0){
			Map map = list.get(0);
				
			List <Map> records;
			
			// 법정 기부금 이월금
			long LEGAL_CNTR_CYFD = Long.parseLong((String)map.get("LEGAL_CNTR_CYFD"));
			map.put("CNTR_TY", "10");
			map.put("CYFD_AT", "1");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndcntrmdatList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				long DDC_TRGET = Long.parseLong((String)item.get("DDC_TRGET"));	// 공제대상금액
				long CRRSPND_DDC = 0;							// 해당년도 공제금액
				long EXTSH_AMOUNT = 0;							// 소멸 금액
				long CYFD_AMOUNT = 0;							// 이월 금액
				if(LEGAL_CNTR_CYFD > DDC_TRGET){	// 공제한도가 대상보다 클 경우
					CRRSPND_DDC = DDC_TRGET;
					LEGAL_CNTR_CYFD -= DDC_TRGET;
				}else{
					CRRSPND_DDC = LEGAL_CNTR_CYFD;
					EXTSH_AMOUNT = DDC_TRGET - LEGAL_CNTR_CYFD;	// 이월이 안되기 때문에 공제받지 못한금액은 소멸
				}
				item.put("CRRSPND_DDC", CRRSPND_DDC);
				item.put("EXTSH_AMOUNT", EXTSH_AMOUNT);
				item.put("CYFD_AMOUNT", CYFD_AMOUNT);
				
				baseDao.update("SAL050202DAO.YndcntrmdatU", item);
			}
			
			// 지정 기부금 이월금
			long APPN_CNTR_CYFD = Long.parseLong((String)map.get("APPN_CNTR_CYFD"));
			map.put("CNTR_TY", "40");
			map.put("CYFD_AT", "1");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndcntrmdatList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				long DDC_TRGET = Long.parseLong((String)item.get("DDC_TRGET"));	// 공제대상금액
				long CRRSPND_DDC = 0;							// 해당년도 공제금액
				long EXTSH_AMOUNT = 0;							// 소멸 금액
				long CYFD_AMOUNT = 0;							// 이월 금액
				if(APPN_CNTR_CYFD > DDC_TRGET){	// 공제한도가 대상보다 클 경우
					CRRSPND_DDC = DDC_TRGET;
					APPN_CNTR_CYFD -= DDC_TRGET;
				}else{
					CRRSPND_DDC = APPN_CNTR_CYFD;
					if("2011".equals((String)map.get("CNTR_YEAR"))){
						EXTSH_AMOUNT = DDC_TRGET - APPN_CNTR_CYFD;
					}else{
						CYFD_AMOUNT = DDC_TRGET - APPN_CNTR_CYFD;
					}
				}
				item.put("CRRSPND_DDC", CRRSPND_DDC);
				item.put("EXTSH_AMOUNT", EXTSH_AMOUNT);
				item.put("CYFD_AMOUNT", CYFD_AMOUNT);
				
				baseDao.update("SAL050202DAO.YndcntrmdatU", item);
			}
			
			// 정치자금 기부금
			long CNTR_POLITC_CPTAL = 0;
			if( map.get("CNTR_POLITC_CPTAL") != null && !"".equals(map.get("CNTR_POLITC_CPTAL")) && !"0".equals(map.get("CNTR_POLITC_CPTAL")) ){
				CNTR_POLITC_CPTAL = Long.parseLong((String)map.get("CNTR_POLITC_CPTAL"));
			}
			if( map.get("CNTR_POLITC_UP") != null && !"".equals(map.get("CNTR_POLITC_UP")) && !"0".equals(map.get("CNTR_POLITC_UP")) ){
				CNTR_POLITC_CPTAL = Long.parseLong((String)map.get("CNTR_POLITC_UP"));
			}
			map.put("CNTR_TY", "20");
			map.put("CYFD_AT", "0");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndcntrmdatList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				long DDC_TRGET = Long.parseLong((String)item.get("DDC_TRGET"));	// 공제대상금액
				long CRRSPND_DDC = 0;							// 해당년도 공제금액
				long EXTSH_AMOUNT = 0;							// 소멸 금액
				long CYFD_AMOUNT = 0;							// 이월 금액
				if(CNTR_POLITC_CPTAL > DDC_TRGET){	// 공제한도가 대상보다 클 경우
					CRRSPND_DDC = DDC_TRGET;
					CNTR_POLITC_CPTAL -= DDC_TRGET;
				}else{
					CRRSPND_DDC = CNTR_POLITC_CPTAL;
					EXTSH_AMOUNT = DDC_TRGET - CNTR_POLITC_CPTAL;	// 이월이 안되기 때문에 공제받지 못한금액은 소멸
				}
				item.put("CRRSPND_DDC", CRRSPND_DDC);
				item.put("EXTSH_AMOUNT", EXTSH_AMOUNT);
				item.put("CYFD_AMOUNT", CYFD_AMOUNT);
				
				baseDao.update("SAL050202DAO.YndcntrmdatU", item);
			}
			
			// 법정 기부금
			long LEGAL_CNTR = Long.parseLong((String)map.get("LEGAL_CNTR"));
			map.put("CNTR_TY", "10");
			map.put("CYFD_AT", "0");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndcntrmdatList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				long DDC_TRGET = Long.parseLong((String)item.get("DDC_TRGET"));	// 공제대상금액
				long CRRSPND_DDC = 0;							// 해당년도 공제금액
				long EXTSH_AMOUNT = 0;							// 소멸 금액
				long CYFD_AMOUNT = 0;							// 이월 금액
				if(LEGAL_CNTR > DDC_TRGET){	// 공제한도가 대상보다 클 경우
					CRRSPND_DDC = DDC_TRGET;
					LEGAL_CNTR -= DDC_TRGET;
				}else{
					CRRSPND_DDC = LEGAL_CNTR;
					CYFD_AMOUNT = DDC_TRGET - LEGAL_CNTR;	// 법정기부금 2014년도 이후는 전부 이월 가능
				}
				item.put("CRRSPND_DDC", CRRSPND_DDC);
				item.put("EXTSH_AMOUNT", EXTSH_AMOUNT);
				item.put("CYFD_AMOUNT", CYFD_AMOUNT);
				
				baseDao.update("SAL050202DAO.YndcntrmdatU", item);
			}
			
			// 지정 기부금
			long APPN_CNTR = Long.parseLong((String)map.get("APPN_CNTR"));
			map.put("CNTR_TY", "40");
			map.put("CYFD_AT", "0");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndcntrmdatList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				long DDC_TRGET = Long.parseLong((String)item.get("DDC_TRGET"));	// 공제대상금액
				long CRRSPND_DDC = 0;							// 해당년도 공제금액
				long EXTSH_AMOUNT = 0;							// 소멸 금액
				long CYFD_AMOUNT = 0;							// 이월 금액
				if(APPN_CNTR > DDC_TRGET){	// 공제한도가 대상보다 클 경우
					CRRSPND_DDC = DDC_TRGET;
					APPN_CNTR -= DDC_TRGET;
				}else{
					CRRSPND_DDC = APPN_CNTR;
					CYFD_AMOUNT = DDC_TRGET - APPN_CNTR;	// 지정기부금 2014년도 이후는 전부 이월 가능
				}
				item.put("CRRSPND_DDC", CRRSPND_DDC);
				item.put("EXTSH_AMOUNT", EXTSH_AMOUNT);
				item.put("CYFD_AMOUNT", CYFD_AMOUNT);
				
				baseDao.update("SAL050202DAO.YndcntrmdatU", item);
			}
			
			// 지정 기부금(종교)
			long END_CNTR = Long.parseLong((String)map.get("END_CNTR"));
			map.put("CNTR_TY", "41");
			map.put("CYFD_AT", "0");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndcntrmdatList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				long DDC_TRGET = Long.parseLong((String)item.get("DDC_TRGET"));	// 공제대상금액
				long CRRSPND_DDC = 0;							// 해당년도 공제금액
				long EXTSH_AMOUNT = 0;							// 소멸 금액
				long CYFD_AMOUNT = 0;							// 이월 금액
				if(END_CNTR > DDC_TRGET){	// 공제한도가 대상보다 클 경우
					CRRSPND_DDC = DDC_TRGET;
					END_CNTR -= DDC_TRGET;
				}else{
					CRRSPND_DDC = END_CNTR;
					CYFD_AMOUNT = DDC_TRGET - END_CNTR;	// 지정기부금 2014년도 이후는 전부 이월 가능
				}
				item.put("CRRSPND_DDC", CRRSPND_DDC);
				item.put("EXTSH_AMOUNT", EXTSH_AMOUNT);
				item.put("CYFD_AMOUNT", CYFD_AMOUNT);
				
				baseDao.update("SAL050202DAO.YndcntrmdatU", item);
			}
			
			
			// 월세액
			long MTHT_AM_TAXXAMT = Long.parseLong((String)map.get("MTHT_AM_TAXXAMT"));
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndpnintList", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				if( item.get("MTHT_AM") != null && !"".equals(item.get("MTHT_AM")) ){
					long DDC_MTHT_AM = Long.parseLong((String)item.get("MTHT_AM")) / 10 ;	// 월세액
					long DDC_AMOUNT = 0;							// 해당년도 공제금액
					if(MTHT_AM_TAXXAMT > DDC_MTHT_AM){	// 공제한도가 대상보다 클 경우
						DDC_AMOUNT = DDC_MTHT_AM;
						MTHT_AM_TAXXAMT -= DDC_MTHT_AM;
					}else{
						DDC_AMOUNT = MTHT_AM_TAXXAMT;
					}
					item.put("DDC_AMOUNT", DDC_AMOUNT);
					
					baseDao.update("SAL050202DAO.YndpnintU", item);
				}
			}
			
			
			baseDao.update("SAL050202DAO.initYndNtsDdcAmount", map);
			
			// 주택차임금 원리금 상환액_거주자
			long PNINT_RPAY_RESIDNT = Long.parseLong((String)map.get("PNINT_RPAY_RESIDNT"));
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndpnintList", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				if( item.get("PNINT_RPAY_AMOUNT") != null && !"".equals(item.get("PNINT_RPAY_AMOUNT")) ){
					long DDC_MTHT_AM = Long.parseLong((String)item.get("PNINT_RPAY_AMOUNT"));	// 원리금상환액
					DDC_MTHT_AM = DDC_MTHT_AM / 10 * 4;
					long DDC_AMOUNT = 0;							// 해당년도 공제금액
					if(PNINT_RPAY_RESIDNT > DDC_MTHT_AM){	// 공제한도가 대상보다 클 경우
						DDC_AMOUNT = DDC_MTHT_AM;
						PNINT_RPAY_RESIDNT -= DDC_MTHT_AM;
					}else{
						DDC_AMOUNT = PNINT_RPAY_RESIDNT;
					}
					item.put("DDC_AMOUNT_2", DDC_AMOUNT);
					
					baseDao.update("SAL050202DAO.YndpnintU", item);
				}
			}
			
			// 퇴직연금
			long RETIRE_ANNTY_DDC = Long.parseLong((String)map.get("RETIRE_ANNTY_DDC"));
			
			map.put("FORMAT_CODE", "F102Y");
			map.put("IEM_CODE", "G0011");
			map.put("DETAIL_KND_2", "");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				if( item.get("PAY_AMOUNT") != null && !"".equals(item.get("PAY_AMOUNT")) ){
					long PAY_AMOUNT = Long.parseLong((String)item.get("PAY_AMOUNT"));
					if(Long.parseLong((String)map.get("SALARY_TOT_AMOUNT")) > 55000000 ){
						PAY_AMOUNT = PAY_AMOUNT / 100 * 12;
					}else{
						PAY_AMOUNT = PAY_AMOUNT / 100 * 15;
					}
					long DDC_AMOUNT = 0;							// 해당년도 공제금액
					if(RETIRE_ANNTY_DDC > PAY_AMOUNT){	// 공제한도가 대상보다 클 경우
						DDC_AMOUNT = PAY_AMOUNT;
						RETIRE_ANNTY_DDC -= PAY_AMOUNT;
					}else{
						DDC_AMOUNT = RETIRE_ANNTY_DDC;
					}
					item.put("DDC_AMOUNT", DDC_AMOUNT);
					
					baseDao.update("SAL050202DAO.YndNTS_U", item);
				}
			}
			
			// 개인연금저축
			long INDVDL_ANNTY_SVINGS_INCOME_DDC = Long.parseLong((String)map.get("INDVDL_ANNTY_SVINGS_INCOME_DDC"));
			
			map.put("FORMAT_CODE", "D101Y");
			map.put("IEM_CODE", "G0009");
			map.put("DETAIL_KND_2", "");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				if( item.get("PAY_AMOUNT") != null && !"".equals(item.get("PAY_AMOUNT")) ){
					long PAY_AMOUNT = Long.parseLong((String)item.get("PAY_AMOUNT"));
					PAY_AMOUNT = PAY_AMOUNT / 100 * 40;
					long DDC_AMOUNT = 0;							// 해당년도 공제금액
					if(INDVDL_ANNTY_SVINGS_INCOME_DDC > PAY_AMOUNT){	// 공제한도가 대상보다 클 경우
						DDC_AMOUNT = PAY_AMOUNT;
						INDVDL_ANNTY_SVINGS_INCOME_DDC -= PAY_AMOUNT;
					}else{
						DDC_AMOUNT = INDVDL_ANNTY_SVINGS_INCOME_DDC;
					}
					item.put("DDC_AMOUNT", DDC_AMOUNT);
					
					baseDao.update("SAL050202DAO.YndNTS_U", item);
				}
			}
			
			// 연금저축
			long ANNTY_SVINGS_TAXAMT = Long.parseLong((String)map.get("ANNTY_SVINGS_TAXAMT"));
			
			map.put("FORMAT_CODE", "E102Y");
			map.put("IEM_CODE", "G0010");
			map.put("DETAIL_KND_2", "");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				if( item.get("PAY_AMOUNT") != null && !"".equals(item.get("PAY_AMOUNT")) ){
					long PAY_AMOUNT = Long.parseLong((String)item.get("PAY_AMOUNT"));
					if(Long.parseLong((String)map.get("SALARY_TOT_AMOUNT")) > 55000000 ){
						PAY_AMOUNT = PAY_AMOUNT / 100 * 12;
					}else{
						PAY_AMOUNT = PAY_AMOUNT / 100 * 15;
					}
					long DDC_AMOUNT = 0;							// 해당년도 공제금액
					if(ANNTY_SVINGS_TAXAMT > PAY_AMOUNT){	// 공제한도가 대상보다 클 경우
						DDC_AMOUNT = PAY_AMOUNT;
						ANNTY_SVINGS_TAXAMT -= PAY_AMOUNT;
					}else{
						DDC_AMOUNT = ANNTY_SVINGS_TAXAMT;
					}
					item.put("DDC_AMOUNT", DDC_AMOUNT);
					
					baseDao.update("SAL050202DAO.YndNTS_U", item);
				}
			}
			
			// 청약저축
			long SUBSCRPT_SVINGS = Long.parseLong((String)map.get("SUBSCRPT_SVINGS"));
			
			map.put("FORMAT_CODE", "J301Y");
			map.put("IEM_CODE", "G0018");
			map.put("DETAIL_KND_2", "1");
			if(Long.parseLong((String)map.get("SALARY_TOT_AMOUNT")) > 70000000 ){
				map.put("TOT_7000_AT", "1");
			}else{
				map.put("TOT_7000_AT", "");
			}
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				if( item.get("PAY_AMOUNT") != null && !"".equals(item.get("PAY_AMOUNT")) ){
					long PAY_AMOUNT = Long.parseLong((String)item.get("PAY_AMOUNT"));
					PAY_AMOUNT = PAY_AMOUNT / 100 * 40;
					long DDC_AMOUNT = 0;							// 해당년도 공제금액
					if(SUBSCRPT_SVINGS > PAY_AMOUNT){	// 공제한도가 대상보다 클 경우
						DDC_AMOUNT = PAY_AMOUNT;
						SUBSCRPT_SVINGS -= PAY_AMOUNT;
					}else{
						DDC_AMOUNT = SUBSCRPT_SVINGS;
					}
					item.put("DDC_AMOUNT", DDC_AMOUNT);
					
					baseDao.update("SAL050202DAO.YndNTS_U", item);
				}
			}
			
			// 주택청약종합
			long HOUSE_SUBSCRPT_GNRLZ = Long.parseLong((String)map.get("HOUSE_SUBSCRPT_GNRLZ"));
			
			map.put("FORMAT_CODE", "J301Y");
			map.put("IEM_CODE", "G0018");
			map.put("DETAIL_KND_2", "2");
			if(Long.parseLong((String)map.get("SALARY_TOT_AMOUNT")) > 70000000 ){
				map.put("TOT_7000_AT", "1");
			}else{
				map.put("TOT_7000_AT", "");
			}
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				if( item.get("PAY_AMOUNT") != null && !"".equals(item.get("PAY_AMOUNT")) ){
					long PAY_AMOUNT = Long.parseLong((String)item.get("PAY_AMOUNT"));
					PAY_AMOUNT = PAY_AMOUNT / 100 * 40;
					long DDC_AMOUNT = 0;							// 해당년도 공제금액
					if(HOUSE_SUBSCRPT_GNRLZ > PAY_AMOUNT){	// 공제한도가 대상보다 클 경우
						DDC_AMOUNT = PAY_AMOUNT;
						HOUSE_SUBSCRPT_GNRLZ -= PAY_AMOUNT;
					}else{
						DDC_AMOUNT = HOUSE_SUBSCRPT_GNRLZ;
					}
					item.put("DDC_AMOUNT", DDC_AMOUNT);
					
					baseDao.update("SAL050202DAO.YndNTS_U", item);
				}
			}
			
			// 근로자주택마련
			long LABRR_HOUSE_PREPRTN = Long.parseLong((String)map.get("LABRR_HOUSE_PREPRTN"));
			
			map.put("FORMAT_CODE", "J301Y");
			map.put("IEM_CODE", "G0018");
			map.put("DETAIL_KND_2", "4");
			map.put("TOT_7000_AT", "");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				if( item.get("PAY_AMOUNT") != null && !"".equals(item.get("PAY_AMOUNT")) ){
					long PAY_AMOUNT = Long.parseLong((String)item.get("PAY_AMOUNT"));
					PAY_AMOUNT = PAY_AMOUNT / 100 * 40;
					long DDC_AMOUNT = 0;							// 해당년도 공제금액
					if(LABRR_HOUSE_PREPRTN > PAY_AMOUNT){	// 공제한도가 대상보다 클 경우
						DDC_AMOUNT = PAY_AMOUNT;
						LABRR_HOUSE_PREPRTN -= PAY_AMOUNT;
					}else{
						DDC_AMOUNT = LABRR_HOUSE_PREPRTN;
					}
					item.put("DDC_AMOUNT", DDC_AMOUNT);
					
					baseDao.update("SAL050202DAO.YndNTS_U", item);
				}
			}
			
			// 장기집합투자증권소득공제
			long INORG_STOCK_SVINGS = Long.parseLong((String)map.get("INORG_STOCK_SVINGS"));
			
			map.put("FORMAT_CODE", "N101Y");
			map.put("IEM_CODE", "G0029");
			map.put("DETAIL_KND_2", "");
			map.put("TOT_7000_AT", "");
			
			records = (List<Map>)baseDao.list("SAL050202DAO.selectYndNtsList2", map);
			for(int i = 0 ; i < records.size() ; i++){
				Map item = records.get(i);
				if( item.get("PAY_AMOUNT") != null && !"".equals(item.get("PAY_AMOUNT")) ){
					long PAY_AMOUNT = Long.parseLong((String)item.get("PAY_AMOUNT"));
					PAY_AMOUNT = PAY_AMOUNT / 100 * 40;
					long DDC_AMOUNT = 0;							// 해당년도 공제금액
					if(INORG_STOCK_SVINGS > PAY_AMOUNT){	// 공제한도가 대상보다 클 경우
						DDC_AMOUNT = PAY_AMOUNT;
						INORG_STOCK_SVINGS -= PAY_AMOUNT;
					}else{
						DDC_AMOUNT = INORG_STOCK_SVINGS;
					}
					item.put("DDC_AMOUNT", DDC_AMOUNT);
					
					baseDao.update("SAL050202DAO.YndNTS_U", item);
				}
			}
			
		}
		return iRow;
	}
}
