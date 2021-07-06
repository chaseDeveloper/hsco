package hsco.eis.eis.EIS030104;

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
 * @Class Name   	: EIS030104ServiceImpl.java
 * @Description  	: 보수현황조회
 * @author       	: 이동석
 * @since        	: 2016. 4. 4.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 4. 4.					이동석				최초생성
 * </pre>  
 */

@Service("EIS030104Service")
public class EIS030104ServiceImpl extends BaseService implements EIS030104Service {
	
    protected Logger log = LoggerFactory.getLogger(EIS030104ServiceImpl.class);   
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
	 *  보수현황조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSalaryList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isDebugEnabled()) log.debug("selectSalaryList started!");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("EIS030104DAO.selectSalaryList", inMap);
		} else {
			records = (List<Map>)baseDao.list("EIS030104DAO.selectSalaryList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
		
		List <Map> records2;

        if (inMap != null) {
            records2 = (List<Map>)baseDao.list("EIS030104DAO.selectSalaryviewList", inMap);
        } else {
            records2 = (List<Map>)baseDao.list("EIS030104DAO.selectSalaryviewList", inVar);
        }
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output2", outDsMap2); 
       
   	}    
}
