package hsco.mis.sal.SAL030106;

import java.util.ArrayList;
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
 * @Class Name   	: SAL030106ServiceImpl.java
 * @Description  	: 월급여지출관리
 * @author       	: 이상명
 * @since        	: 2015. 11. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 23.					이상명				최초생성
 * </pre>  
 */

@Service("SAL030106Service")
public class SAL030106ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    
    /**
     * 월급여지급내역
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMtSalaryList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectMtSalaryList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectMtSalaryList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);  
        
    }
    
    
    /**
	 * 월급여지출조회 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSalaryPymntExpndtrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntExpndtrList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntExpndtrList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		List <Map> records2;

        if (inMap != null) {
            records2 = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntExpndtrList_2", inMap);
        } else {
            records2 = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntExpndtrList_2", inVar);
        }
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output2", outDsMap2);
   		
   	}
    
    /**
     * 월급여지출조회 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSalaryPymntExpndtr2List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntExpndtrList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntExpndtrList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);       
        
    }
    
    
    
    /**
     * 월급여지급일자조회 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSalaryPymntSheetList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntSheetList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntSheetList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output4", outDsMap);        
        
    }
    
    /**
     * 월급여지급일자조회 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSalaryPymntIncmtaxList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input5");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntIncmtaxList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntIncmtaxList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output5", outDsMap);        
        
    }
    
    /**
     * 월급여지급장기근속수당조회 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSalaryPymntLongList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input6");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntLongList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntLongList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output6", outDsMap);        
        
    }
    
    /**
     * 월급여지급 결재리포트 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSalaryPymntReportList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input7");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntReportList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntReportList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output7", outDsMap);   
        
        List <Map> records2;

        if (inMap != null) {
            records2 = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntReport2List", inMap);
        } else {
            records2 = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntReport2List", inVar);
        }
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output8", outDsMap2);
        
    }
    
    /**
     * 월급여지급 결재리포트 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSalaryPymntReport2List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input7");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntReport2List", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL030106DAO.selectSalaryPymntReport2List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output7", outDsMap);        
        
    }
    
       
    /**
   	 * 급여지출관리 등록, 수정, 삭제
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return int
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "rawtypes" })
   	
   	public int SalaryPymntExpndtrCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
   					baseDao.insert("SAL030106DAO.SalaryPymntExpndtrC", map);
   					break;
   				case DataSet.ROW_TYPE_UPDATED :
   					iRow += baseDao.update("SAL030106DAO.SalaryPymntExpndtrU", map);
   					break;
   				case DataSet.ROW_TYPE_DELETED :
   					iRow += baseDao.delete("SAL030106DAO.SalaryPymntExpndtrD", map);
   					break;			
   			}				
   		}		
   		return iRow;
   	}
    
   	/**
     * 급여지출관리 등록
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ })
    
    public int SalaryPymntExpndtrC( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        DataSetMap list = inDataset.get("input1");
        @SuppressWarnings("unchecked")
        Map<String, Object> map = list.get(0);  
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }
        
        baseDao.insert("SAL030106DAO.SalaryPymntExpndtrC", map);
       
        return iRow;  
    }   

    
    /**
     * 지급공제항목 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPymntDdcIem( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
    	
    	if (inDsMap != null)
            inMap  = inDsMap.get(0);
       
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>)baseDao.list("SAL030106DAO.selectPymntDdcIem", inMap));
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**
	 * 급여지급상세정보 조회 (부서별급여지급상세정보, 사원별급여지급상세정보)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSalaryPymntList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		List pymntDdcIemList = new ArrayList();
        
		if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
		// 지급공제항목 조회
        pymntDdcIemList = (List<Map>)baseDao.list("SAL030106DAO.selectPymntDdcIem", inMap);
        inMap.put("pymntDdcIemList", pymntDdcIemList);
		
		// 탭1 : 부서별급여지급상세정보 목록조회
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL030106DAO.selectDeptSalaryPymntList", inMap));
		outDataset.put("output1", outDsMap);
		
		// 탭2 : 사원별급여지급상세정보 목록조회
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>)baseDao.list("SAL030106DAO.selectEmpSalaryPymntList", inMap));
		outDataset.put("output2", outDsMap2);

    }
    
   	/**
     * 월급여지출관리 결재취소
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ })
    
    public int apprCancel( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        DataSetMap list = inDataset.get("input4");
        @SuppressWarnings("unchecked")
        Map<String, Object> map = list.get(0);  
        // 세션정보 설정
        try {
            ObjectUtil.setUserToMap(map);
        }
        catch( Exception e) {
            throw new NexaServiceException(e); 
        }
        
        iRow =  baseDao.update("SAL030106DAO.apprCancel", map);
       
        return iRow;  
    }  
}
