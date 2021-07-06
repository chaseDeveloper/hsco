package hsco.mis.hrm.HRM090208;

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
 * @Class Name   	: HRM090208ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 07. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07.15.	이혜선			최초생성
 * </pre>  
 */

@Service("HRM090208Service")
public class HRM090208ServiceImpl extends BaseService implements HRM090208Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	


	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void tbhrmAdministinfoList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM090208DAO.tbhrmAdministinfoList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
	}
	
	
	
	@SuppressWarnings({ "rawtypes" })
	public int tbhrmAdministinfoCUD(DataSetMap tranInfo, Map<String, Object> inVar,Map<String, DataSetMap> inDataset, 
			Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws Exception {

        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input2");
    	System.out.println("dddddddddddddddddddddddddddddddddddd");
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                	System.out.println("111111111111111111111111111111111111111111");
                    baseDao.insert("HRM090208DAO.tbhrmAdministinfoC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("HRM090208DAO.tbhrmAdministinfoU",map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("HRM090208DAO.tbhrmAdministinfoD",map);
                    break;
            }   
        }

		return iRow;
	
	}
		
	
}