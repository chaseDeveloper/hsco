package hsco.mis.hrm.HRM090702;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM090702ServiceImpl.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2019. 10. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 WebCash, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                        내용
 * ------------------------------------------------------------------
 *  2019. 10. 7.			  양성모			최초생성
 * </pre>
 */

@Service("HRM090702Service")
public class HRM090702ServiceImpl extends BaseService implements HRM090702Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
	/** 사원별 자원봉사현황 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSrvcList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090702DAO.selectSrvcList", inMap));
        
        outDataset.put("output1", outDsMap);
    }
    
    /** 사원별 자원봉사참여내역 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSrvcDtlList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090702DAO.selectSrvcDtlList", inMap));
		
		outDataset.put("output1", outDsMap);
	}
}