package hsco.mis.hrm.HRM020101;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import com.nexacro.xapi.data.DataSet;

import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM020101ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 07.21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07.21.	이혜선			최초생성
 * </pre>  
 */

@Service("HRM020101Service")
public class HRM020101ServiceImpl extends BaseService implements HRM020101Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	


    /** 채용기초정보관리조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbhrmEmpmnBsisList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020101DAO.tbhrmEmpmnBsisList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
	}

	
	
    /** 채용기초정보관리 상세조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbhrmEmpmnBsisR(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception {
	    
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM020101DAO.tbhrmEmpmnBsisR", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output2", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes" })
	public int tbhrmEmpmnBsisCUD(DataSetMap tranInfo, Map<String, Object> inVar,Map<String, DataSetMap> inDataset, 
			Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws Exception {

        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input3");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("HRM020101DAO.tbhrmEmpmnBsisC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("HRM020101DAO.tbhrmEmpmnBsisU",map);
                    iRow += baseDao.delete("HRM020101DAO.tbhrmScrproStepD",map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("HRM020101DAO.tbhrmScrproStepD",map);
                    iRow += baseDao.delete("HRM020101DAO.tbhrmEmpmnBsisD",map);
                    break;
            }   
        }

        DataSetMap list2 = (DataSetMap) inDataset.get("input4");
        
        int listSize2 = (list2 == null) ? 0 : list2.size();
        
        for (int x = 0; x < listSize2; x++) {
                
            Map map2 = list2.get(x);
            
            int rowType2 = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType2) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("HRM020101DAO.tbhrmScrproStepC", map2);
                    break;
            }   
        }
        return iRow;
	}

	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public int tbhrmEmpmnBsisDeleteData(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception {

        int iRow = 0;
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null) inMap = inDsMap.get(0);
        
        iRow += baseDao.update("HRM020101DAO.tbhrmEmpmnBsisDeleteData",inMap);
        return iRow;
	}
}