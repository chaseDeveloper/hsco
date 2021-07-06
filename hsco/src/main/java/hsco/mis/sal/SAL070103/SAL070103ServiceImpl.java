package hsco.mis.sal.SAL070103;

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
 * @Class Name   	: SAL070103ServiceImpl.java
 * @Description  	: 기간제급여계산관리
 * @author       	: 이상명
 * @since        	: 2015. 11. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 10.					이상명				최초생성
 * </pre>  
 */

@Service("SAL070103Service")
public class SAL070103ServiceImpl extends BaseService implements SAL070103Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /**
	 * 기간제급여계산 목록조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPdWorkSalaryList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL070103DAO.selectPdWorkSalaryList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL070103DAO.selectPdWorkSalaryList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   	}
    
    /**
     * 기간제근태정보 확인
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPdWorkSalary2List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL070103DAO.selectPdWorkSalary2List", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL070103DAO.selectPdWorkSalary2List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output3", outDsMap);
    }
    
    /**
     * 기간제급여계산조회3 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPdWorkSalary3List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL070103DAO.selectPdWorkSalary3List", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL070103DAO.selectPdWorkSalary3List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output4", outDsMap);    
    }
    
       
    /**
   	 * 기간제급여계산 등록, 수정, 삭제 (공제내역 계산 안함)
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int PdWorkSalaryCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
   					baseDao.insert("SAL070103DAO.PdWorkSalaryC", map);
   					if("1".equals(map.get("PD_WORK_SALARY_TYPE"))){
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl_3", map);
   					}else if("2".equals(map.get("PD_WORK_SALARY_TYPE"))){
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl2_3", map);
   					}
   					break;
   				case DataSet.ROW_TYPE_UPDATED :
   					iRow += baseDao.update("SAL070103DAO.PdWorkSalaryU", map);
   					if("1".equals(map.get("PD_WORK_SALARY_TYPE"))){
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl_3", map);
   					}else if("2".equals(map.get("PD_WORK_SALARY_TYPE"))){
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl2_3", map);
   					}
   					break;
   				case DataSet.ROW_TYPE_DELETED :
   					iRow += baseDao.delete("SAL070103DAO.PdWorkSalaryD", map);
   					break;			
   			}				
   		}		
   		return iRow;
   	}
   	
   	/**
   	 * 기간제급여계산 등록, 수정, 삭제 (공제내역 계산)
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int PdWorkSalaryCUD2( DataSetMap tranInfo, Map<String, Object> inVar,
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
   					baseDao.insert("SAL070103DAO.PdWorkSalaryC", map);
   					if("1".equals(map.get("PD_WORK_SALARY_TYPE"))){
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl_2", map);
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl_3", map);
   					}else if("2".equals(map.get("PD_WORK_SALARY_TYPE"))){
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl2_2", map);
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl2_3", map);
   					}
   					break;
   				case DataSet.ROW_TYPE_UPDATED :
   					iRow += baseDao.update("SAL070103DAO.PdWorkSalaryU", map);
   					if("1".equals(map.get("PD_WORK_SALARY_TYPE"))){
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl_2", map);
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl_3", map);
   					}else if("2".equals(map.get("PD_WORK_SALARY_TYPE"))){
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl2_2", map);
   						iRow += baseDao.update("SAL070103DAO.insertPdWorkSalaryl2_3", map);
   					}
   					break;
   				case DataSet.ROW_TYPE_DELETED :
   					iRow += baseDao.delete("SAL070103DAO.PdWorkSalaryD", map);
   					break;			
   			}				
   		}		
   		return iRow;
   	}
   	
   	/**
     * 기간제급여계산 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int insertPdWorkSalarylList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input5");     
             
                
        Map map = list.get(0);          
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }   
        
        if("1".equals(map.get("PD_WORK_SALARY_TYPE"))){
	        // 지급액, 소득세, 지방소득세
	        baseDao.insert("SAL070103DAO.insertPdWorkSalaryl_1", map);
	        
	        // 건강보험, 국민연금, 고용보험
	        baseDao.insert("SAL070103DAO.insertPdWorkSalaryl_2", map);
	        
	        // 지급계, 공제계, 실지급액
	        baseDao.insert("SAL070103DAO.insertPdWorkSalaryl_3", map);
        }else if("2".equals(map.get("PD_WORK_SALARY_TYPE"))){
	        // 지급액, 소득세, 지방소득세
	        baseDao.insert("SAL070103DAO.insertPdWorkSalaryl2_1", map);
	        
	        // 건강보험, 국민연금, 고용보험
	        baseDao.insert("SAL070103DAO.insertPdWorkSalaryl2_2", map);
	        
	        // 지급계, 공제계, 실지급액
	        baseDao.insert("SAL070103DAO.insertPdWorkSalaryl2_3", map);
        }
        return iRow;
    }
    
    /**
     * 기간제급여계산 마감, 마감취소
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int updatePdWorkSalary( DataSetMap tranInfo, Map<String, Object> inVar,
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
       
        // 지급액, 소득세, 지방소득세
        baseDao.update("SAL070103DAO.updatePdWorkSalary", map);
        
        return iRow;
    }

    /**
     * 마감취소 전 결재상태 체크
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPdWorkClose( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL070103DAO.selectPdWorkClose", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL070103DAO.selectPdWorkClose", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output4", outDsMap);    
    }
    
}
