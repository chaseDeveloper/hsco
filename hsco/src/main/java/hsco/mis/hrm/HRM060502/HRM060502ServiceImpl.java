package hsco.mis.hrm.HRM060502;

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
 * @Class Name   	: HRM060502ServiceImpl.java
 * @Description  	: 
 * @author       	:  신지성
 * @since        	: 2019. 09. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 
 * </pre>  
 */
@Service("HRM060502Service")
public class HRM060502ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
    public void checkOfcps( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	//평가 직급 조회
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
     
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060502DAO.checkOfcps", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
	
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectMlssClsfList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	//평가 직급 조회
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
     
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060502DAO.selectMlssClsfList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
	
	
    /**평가대상자 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectMlssAprsr( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	//피평가자 조회 
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
     
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060502DAO.selectMlssAprsrList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
        // 등급분포표 조회
        List <Map> records2;
        records2 = (List<Map>)baseDao.list("HRM060502DAO.selectMlssGradDistrbList", inMap);     
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output2", outDsMap2);
    }
    
    /**평가표 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectEvlTable( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
     
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060502DAO.selectEvlTableList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
    
    /* 저장 */
    @SuppressWarnings({ "rawtypes" })
	public int insertMlssScor(DataSetMap tranInfo, Map<String, Object> inVar,
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
                    baseDao.insert("HRM060502DAO.insertMlssScore", map);
                    break;
            }   
        }
        return iRow;
	}
    
    /* 저장 */
    @SuppressWarnings({ "rawtypes" })
	public int updateMlssAprsr(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            baseDao.update("HRM060502DAO.updateMlssAprsr", map); 
        }
        return iRow;
	}
    
    
    /* 저장 */
    @SuppressWarnings({ "rawtypes" })
	public int updateMlssAprsrCancle(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            baseDao.update("HRM060502DAO.updateMlssAprsrCancle", map); 
        }
        return iRow;
	}
   
}
