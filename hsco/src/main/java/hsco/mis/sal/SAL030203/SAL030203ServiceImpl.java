package hsco.mis.sal.SAL030203;

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
 * @Class Name   	: SAL030103ServiceImpl.java
 * @Description  	: 년간급여자료조회
 * @author       	: 정  민
 * @since        	: 2017. 4. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 4. 04.					정  민				최초생성
 * </pre>  
 */

@Service("SAL030203Service")
public class SAL030203ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /**
	 * 월급여기본자료 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectYearPymntList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL030203DAO.selectYearPymntList", inMap));
		outDataset.put("output1", outDsMap);
	}
}
