package hsco.mis.sal.SAL050208;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL050208ServiceImpl.java
 * @Description  	: 연말정산원천징수영수증관리
 * @author       	: 이상명
 * @since        	: 2015. 10. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 28.					이상명				최초생성
 * </pre>  
 */

@Service("SAL050208Service")
public class SAL050208ServiceImpl extends BaseService implements SAL050208Service {
	
    protected Logger log = LoggerFactory.getLogger(this.getClass());   
	
    /**
	 * 연말정산결과 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectYndExcclcPrintList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL050208DAO.selectCprInfoList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL050208DAO.selectCprInfoList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
        
        DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input2");
		Map inMap2 = null;
		
		if (inDsMap2 != null)
			inMap2 = inDsMap2.get(0);
		
		List <Map> records2;

		if (inMap2 != null) {
			records2 = (List<Map>)baseDao.list("SAL050208DAO.selectYndExcclcPrintList", inMap2);
		} else {
			records2 = (List<Map>)baseDao.list("SAL050208DAO.selectYndExcclcPrintList", inVar);
		}
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output2", outDsMap2);
			
   		
   	}
    
    /**
     * 연말정산결과 목록2을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectYndExcclcPrint2List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SAL050208DAO.selectYndExcclcPrint2List", inMap);
        } else {
            records = (List<Map>)baseDao.list("SAL050208DAO.selectYndExcclcPrint2List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output3", outDsMap);
            
        
    }
    
    
}
