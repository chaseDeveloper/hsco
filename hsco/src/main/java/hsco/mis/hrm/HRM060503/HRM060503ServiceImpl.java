package hsco.mis.hrm.HRM060503;

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
 * @Class Name   	: HRM060503ServiceImpl.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2019. 09. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2019. 09. 23.  				   양성모				최초생성
 * </pre>  
 */
@Service("HRM060503Service")
public class HRM060503ServiceImpl extends BaseService implements HRM060503Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**다면평가 결과표 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectEvlResult( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
     
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060503DAO.selectEvlResult", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
    
    @SuppressWarnings("rawtypes")
	public int updateDcsnEvlGrad ( DataSetMap tranInfo
    						  , Map<String, Object> inVar
    						  , Map<String, DataSetMap> inDataset
    						  , Map<String, Object> outVar
    						  , Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    		int iRow = 0;
	        
	        DataSetMap list = (DataSetMap) inDataset.get("input1");
	        
	        int listSize = (list == null) ? 0 : list.size();
	        
	        for (int x = 0; x < listSize; x++) {
	            Map map = list.get(x);
	            
	            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	            
	            switch(rowType) {
	                case DataSet.ROW_TYPE_UPDATED :
	                    baseDao.insert("HRM060503DAO.updateDcsnEvlGrad", map);
	                    break;
	            }   
	        }
	        return iRow;
    }
}
