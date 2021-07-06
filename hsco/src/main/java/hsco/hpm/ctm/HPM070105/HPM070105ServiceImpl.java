package hsco.hpm.ctm.HPM070105;

import java.util.ArrayList;
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
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: HPM070105Controller.java
 * &#64;Description  	: 
 * &#64;author       	: 정 민
 * &#64;since        	: 2018. 01. 09.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2018. 01. 09.					정 민			최초생성
 * </pre>
 */

@Service("HPM070105Service")
public class HPM070105ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(HPM070105ServiceImpl.class);

	/**
	 * 시설 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFctlsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// 시설목록
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070105DAO.selectFctlsList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 실적 조회
	 * 
	 * @param (DataSetMap,inVar,
	 *            inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked"})
	public void selectAcmsltList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		
		String fcltsSn = (String) inMap.get("FCLTS_SN");
		List<Map> resultMap = new ArrayList<Map>();
		
		if("TNNCRT01".equals(fcltsSn)) {
			resultMap = (List<Map>) baseDao.list("HPM070105DAO.selectCentralparkTnncrtList", inMap);
		}else if("TNNCRT02".equals(fcltsSn)) {
			resultMap = (List<Map>)baseDao.list("HPM070105DAO.selectDolmoruTnncrtList", inMap);
		}else if("TNNCRT03".equals(fcltsSn)) {
			resultMap = (List<Map>) baseDao.list("HPM070105DAO.selectDongtanBadmcrtList", inMap);
		}else if("TNNCRT04".equals(fcltsSn)) {
			resultMap = (List<Map>) baseDao.list("HPM070105DAO.selectParkGlcrsList", inMap);
		}else if("TNNCRT05".equals(fcltsSn)) {
			resultMap = (List<Map>) baseDao.list("HPM070105DAO.selectHyangnamParkGlcrsList", inMap);
		}else if("TNNCRT06".equals(fcltsSn)) {
			resultMap = (List<Map>) baseDao.list("HPM070105DAO.selectAchsteList", inMap);
		}else {
			resultMap = (List<Map>) baseDao.list("HPM070105DAO.selectAcmsltList", inMap);
		}
		
		// 월별징수실적
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultMap);
		outDataset.put("output1", outDsMap);
	}
}