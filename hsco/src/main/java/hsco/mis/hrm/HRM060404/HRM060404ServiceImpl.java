package hsco.mis.hrm.HRM060404;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM060404Controller.java
 * @Description  	: 
 * @author       	: 박세현
 * @since        	: 2016. 10. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2016. 10. 13.	박세현			최초생성
 * </pre>  
 */
@Service("HRM060404Service")
public class HRM060404ServiceImpl extends BaseService implements HRM060404Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**집계내역 조회 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectPerevaResultList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        records = (List<Map>)baseDao.list("HRM060404DAO.selectPerevaResultList", inMap);     
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
    }
}
