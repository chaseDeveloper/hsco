package hsco.mis.sal.SAL010204;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL010204ServiceImpl.java
 * @Description  	: 통상임금(업무직)
 * @author       	: 이상명
 * @since        	: 2015. 6. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 26.					이상명				최초생성
 * </pre>  
 */

@Service("SAL010204Service")
public class SAL010204ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    
    /**
	 * 통상임금(업무직) 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOdygsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		List pymntDdcCodeList = new ArrayList();
        
		if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
		// 통상임금 항목 조회
		pymntDdcCodeList = (List<Map>)baseDao.list("SAL010204DAO.selectPymntDdcCodeList", inMap);
        inMap.put("pymntDdcCodeList", pymntDdcCodeList);
		
        DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(pymntDdcCodeList);
		outDataset.put("output1", outDsMap1);
        
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>)baseDao.list("SAL010204DAO.selectOdygsList", inMap));
		outDataset.put("output2", outDsMap2);
		
   		
   	}	
   	
}
