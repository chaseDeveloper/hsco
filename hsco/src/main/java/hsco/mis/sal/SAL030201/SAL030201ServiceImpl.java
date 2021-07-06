package hsco.mis.sal.SAL030201;

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
 * @Description  	: 급여명세서조회
 * @author       	: 이상명
 * @since        	: 2015. 9. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 10.					이상명				최초생성
 * </pre>  
 */

@Service("SAL030201Service")
public class SAL030201ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
	
	/**
	 * 최종급여년월
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectLastPymntYm( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map map = (Map) baseDao.select("SAL030201DAO.selectLastPymntYm");
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		outDataset.put("output1", outDsMap);
	
	}
	
    
    /**
	 * 급여명세서 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtSalaryDtstmnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap1 = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		DataSetMap outDsMap = new DataSetMap();

		if (inDsMap1 != null)
		    inMap = inDsMap1.get(0);
		
		inMap.put("PYMNT_DDC_SE", "0");
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL030201DAO.selectMtSalaryDtstmnList", inMap));
		outDataset.put("output1", outDsMap);

		outDsMap = new DataSetMap();

		inMap.put("PYMNT_DDC_SE", "1");
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL030201DAO.selectMtSalaryDtstmnList", inMap));
		outDataset.put("output2", outDsMap);
	
	}
}
