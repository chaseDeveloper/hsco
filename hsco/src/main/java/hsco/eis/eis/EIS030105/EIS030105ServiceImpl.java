package hsco.eis.eis.EIS030105;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: EIS030105ServiceImpl.java
 * @Description  	: 근태현황조회
 * @author       	: 이동석
 * @since        	: 2016. 4. 5.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 4. 5.					이동석				최초생성
 * </pre>  
 */

@Service("EIS030105Service")
public class EIS030105ServiceImpl extends BaseService implements EIS030105Service {
	
    protected Logger log = LoggerFactory.getLogger(EIS030105ServiceImpl.class);   
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
	 *  근태현황조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMnbyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isDebugEnabled()) log.debug("selectMnbyList started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("EIS030105DAO.selectMnbyList", inMap);
		} else {
			records = (List<Map>)baseDao.list("EIS030105DAO.selectMnbyList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
   		
   	}
    
    /**
     *  근태현황조회2한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMnby2List( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("EIS030105DAO.selectMnby2List", inMap);
        } else {
            records = (List<Map>)baseDao.list("EIS030105DAO.selectMnby2List", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output2", outDsMap);
        
        
    }    
    
}
