package hsco.mis.hrm.HRM110103;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service("HRM110103Service")
public class HRM110103ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 원천세(일용직) 지급명세서 조회(일용직, 기타소득, 사업소득)
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectWhtaxDtstmn(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap1 = null;
		Map inMap2 = null;
		Map inMap3 = null;
		if (inDsMap != null) {
			inMap1 = inDsMap.get(0);
			inMap2 = inDsMap.get(0);
			inMap3 = inDsMap.get(0);
		}
		
		// 일용직
		inMap1.put("INCOME_SE", "01");
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM110103DAO.selectWhtaxDtstmn", inMap1));
		outDataset.put("output1", outDsMap1);
		
		
		// 기타소득
		inMap2.put("INCOME_SE", "02");
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM110103DAO.selectWhtaxDtstmn", inMap2));
		outDataset.put("output2", outDsMap2);
		
		
		// 사업소득
		inMap3.put("INCOME_SE", "03");
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM110103DAO.selectWhtaxDtstmn", inMap3));
		outDataset.put("output3", outDsMap3);
	}
	
}