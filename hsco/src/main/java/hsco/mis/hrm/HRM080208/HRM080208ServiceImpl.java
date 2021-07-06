package hsco.mis.hrm.HRM080208;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service("HRM080208Service")
public class HRM080208ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 교육평정대상 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEvlTrgter(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080208DAO.selectEvlTrgter", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 개인별교육실적 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectIndvdlzAcmslt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		// 2016년 ~ 검색기준년도의 데이터를 모두 표출
		Integer srcYr = Integer.parseInt(((String)inMap.get("YEAR")).substring(0, 4));
		
		List<Map> yrList = new ArrayList<>();
		
		HashMap<String, String> map = new HashMap<>();
		
		for(int i = 2016; i <= srcYr; i++ ){
			map = new HashMap<>();
			
			map.put("YEAR", Integer.toString(i));
			
			yrList.add(map);
		}
		
		inMap.put("yearList", yrList);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080208DAO.selectIndvdlzAcmslt", inMap));
		outDataset.put("output1", outDsMap);
	}

}
