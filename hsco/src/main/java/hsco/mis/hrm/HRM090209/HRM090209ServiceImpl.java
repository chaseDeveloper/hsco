package hsco.mis.hrm.HRM090209;

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
 * @Class Name   	: HRM090209ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 07. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07.16.	이혜선			최초생성
 * </pre>  
 */

@Service("HRM090209Service")
public class HRM090209ServiceImpl extends BaseService implements HRM090209Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	

    
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbhrmObjcReqstList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM090209DAO.tbhrmObjcReqstList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
	}
	

	
	@SuppressWarnings({ "rawtypes" })
	public int tbhrmObjcReqstCUD(DataSetMap tranInfo, Map<String, Object> inVar,Map<String, DataSetMap> inDataset, 
			Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws Exception {
		
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input2");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("HRM090209DAO.tbhrmObjcReqstC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("HRM090209DAO.tbhrmObjcReqstU",map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("HRM090209DAO.tbhrmObjcReqstD",map);
                    break;
            }   
        }
		return iRow;
	
	}
		
	
}