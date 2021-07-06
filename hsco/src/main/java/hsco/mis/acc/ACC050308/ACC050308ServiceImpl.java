package hsco.mis.acc.ACC050308;

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
 * @Class Name   	: ACC050308ServiceImpl.java
 * @Description  	: 재무상태표 서비스 구현체 클래스
 * @author       	: 이상명
 * @since        	: 2015. 8. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 25.					이상명				최초생성
 * </pre>  
 */
@Service("ACC050308Service")
public class ACC050308ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC050308ServiceImpl.class);
    
    
    /**
	 * 재무상태표
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void fnnrSttusList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("fnnrSttusList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
//		List <Map> records;
//		int condDate = 0;
//		if(inMap != null){  // inMap에 대한 NULL POINTER Exception 조치(code inspection)
//			if(inMap.get("YYYYMM") != null)  // inMap에 대한 NULL POINTER Exception 조치(code inspection)
//				condDate = Integer.parseInt(inMap.get("YYYYMM").toString());
//		}
		
		
//		if(condDate > 201600){
//			records = (List<Map>)baseDao.list("ACC050301DAO.fnnrSttusListIfrs", inMap);
//		}else{
//			records = (List<Map>)baseDao.list("ACC050301DAO.fnnrSttusListIfrs", inMap);
//		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("ACC050308DAO.fnnrSttusListIfrs", inMap));
		
		outDataset.put("output1", outDsMap);
		
	}
}
