package hsco.pms.fms.FMS020401;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

@Service("FMS020401Service")
public class FMS020401ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("FMS020401DAO.select", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		for (int x1 = 0; x1 < listSize; x1++) {
			Map map = list.get(x1);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("FMS020401DAO.delete", map);
					break;
			}
		}
		for (int x2 = 0; x2 < listSize; x2++) {
			Map map = list.get(x2);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("FMS020401DAO.insert", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("FMS020401DAO.update", map);
					break;
			}
		}
	}

}