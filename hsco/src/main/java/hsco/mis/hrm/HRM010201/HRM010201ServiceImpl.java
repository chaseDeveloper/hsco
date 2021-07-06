package hsco.mis.hrm.HRM010201;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("HRM010201Service")
public class HRM010201ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 조직도목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOrgcht(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM010201DAO.selectOrgcht", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 조직도별 부서목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOrgchtDept(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM010201DAO.selectOrgchtDept", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 조직도 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void saveOrgcht(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		String orgchtCode = null;
		for (int l1Row = 0; l1Row < (list1 == null ? 0 : list1.size()); l1Row++) {
			Map map = list1.get(l1Row);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					orgchtCode = (String) baseDao.select("HRM010201DAO.getOrgchtCode", map);
					map.put("ORGCHT_CODE", orgchtCode);
					baseDao.insert("HRM010201DAO.insertOrgcht", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM010201DAO.updateOrgcht", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM010201DAO.deleteOrgchtDept", map);
					baseDao.delete("HRM010201DAO.deleteOrgcht", map);
					break;
			}
		}

		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int l2Row = 0; l2Row < (list2 == null ? 0 : list2.size()); l2Row++) {
			Map map = list2.get(l2Row);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (orgchtCode != null) {
						map.put("ORGCHT_CODE", orgchtCode);
					}
					baseDao.insert("HRM010201DAO.insertOrgchtDept", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM010201DAO.updateOrgchtDept", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM010201DAO.deleteOrgchtDept", map);
					break;
			}
		}
	}

	/**
	 * 조직도별 부서목록 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveOrgchtDept(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 기존 데이터 제거
		baseDao.delete("HRM010201DAO.deleteOrgchtDept", inMap);

		String orgchtCode = (String) inMap.get("ORGCHT_CODE");
		String trgetOrgchtCode = (String) inMap.get("TRGET_ORGCHT_CODE");

		// 대상 조직도로부터 불러와서 저장
		inMap.put("ORGCHT_CODE", trgetOrgchtCode);
		List<Map> trgetList = (List<Map>) baseDao.list("HRM010201DAO.selectOrgchtDept", inMap);
		for (int rRow = 0; rRow < (trgetList == null ? 0 : trgetList.size()); rRow++) {
			Map map = trgetList.get(rRow);
			map.put("ORGCHT_CODE", orgchtCode);
			baseDao.insert("HRM010201DAO.insertOrgchtDept", map);
		}

		// 저장된 결과 조회
		inMap.put("ORGCHT_CODE", orgchtCode);
		List<Map> records = (List<Map>) baseDao.list("HRM010201DAO.selectOrgchtDept", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}
