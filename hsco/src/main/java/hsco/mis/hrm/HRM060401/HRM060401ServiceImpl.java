package hsco.mis.hrm.HRM060401;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("HRM060401Service")
public class HRM060401ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 근무평정 집계결과 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectEvlGnrlzSm(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 평정 반기
		List<Map> records0 = (List<Map>) baseDao.list("HRM060401DAO.selectWorkEvlPd",  inMap);

		// 직급별
		inMap.put("CLSF_SE", "201");
		List<Map> records1 = (List<Map>) baseDao.list("HRM060401DAO.selectEvlGnrlzSm", inMap);
		inMap.put("CLSF_SE", "202");
		List<Map> records2 = (List<Map>) baseDao.list("HRM060401DAO.selectEvlGnrlzSm", inMap);
		inMap.put("CLSF_SE", "203");
		List<Map> records3 = (List<Map>) baseDao.list("HRM060401DAO.selectEvlGnrlzSm", inMap);
		inMap.put("CLSF_SE", "204");
		List<Map> records4 = (List<Map>) baseDao.list("HRM060401DAO.selectEvlGnrlzSm", inMap);
		inMap.put("CLSF_SE", "205");
		List<Map> records5 = (List<Map>) baseDao.list("HRM060401DAO.selectEvlGnrlzSm", inMap);

		DataSetMap outDsMap0 = new DataSetMap();
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		DataSetMap outDsMap4 = new DataSetMap();
		DataSetMap outDsMap5 = new DataSetMap();
		outDsMap0.setRowMaps(records0);
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		outDsMap4.setRowMaps(records4);
		outDsMap5.setRowMaps(records5);
		outDataset.put("output0", outDsMap0);
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
		outDataset.put("output5", outDsMap5);
	}

	/**
	 * 근무평정 집계결과 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void calcEvlGnrlzSm(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		baseDao.delete("HRM060401DAO.deleteEvlGnrlzSm", inMap);
		baseDao.insert("HRM060401DAO.insertEvlGnrlzSm", inMap);
	}
}
