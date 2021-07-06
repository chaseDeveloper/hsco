package hsco.pms.fms.FMS030103;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

@Service("FMS030103Service")
public class FMS030103ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 시설물목록 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFcltsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
		if (inDsMap1 != null) {
			inMap = inDsMap1.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("FMS030103DAO.selectFcltsList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 보수보강계획 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCheckDgnssPlan(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
		if (inDsMap1 != null) {
			inMap = inDsMap1.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("FMS030103DAO.selectCheckDgnssPlan", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 첨부파일(전경, 기타) 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
		if (inDsMap1 != null) {
			inMap = inDsMap1.get(0);
		}

		Map inMap1 = new HashMap();
		Map inMap2 = new HashMap();
		Map inMap3 = new HashMap();

		String fileSn1 = "";
		if (!StringUtils.isEmpty(inMap.get("EQPMN_FILE_SN"))) {
			fileSn1 = (String) inMap.get("EQPMN_FILE_SN");
		}
		String fileSn2 = "";
		if (!StringUtils.isEmpty(inMap.get("REINFC_PLAN_FILE_SN"))) {
			fileSn2 = (String) inMap.get("REINFC_PLAN_FILE_SN");
		}
		String fileSn3 = "";
		if (!StringUtils.isEmpty(inMap.get("MANAGT_SYSTM_FILE_SN"))) {
			fileSn3 = (String) inMap.get("MANAGT_SYSTM_FILE_SN");
		}

		inMap1.put("FILE_SN", fileSn1);
		inMap2.put("FILE_SN", fileSn2);
		inMap3.put("FILE_SN", fileSn3);

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap1));
		outDsMap2.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap2));
		outDsMap3.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap3));
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
	}

	/**
	 * 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		// 시설물 목록
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("FMS030103DAO.mendngReinfcPlanC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("FMS030103DAO.mendngReinfcPlanU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("FMS030103DAO.mendngReinfcPlanD", map);
					break;
			}
		}
	}
}