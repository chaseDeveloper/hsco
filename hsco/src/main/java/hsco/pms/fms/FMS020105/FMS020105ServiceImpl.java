package hsco.pms.fms.FMS020105;

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

@Service("FMS020105Service")
public class FMS020105ServiceImpl extends BaseService {

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
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
		if (inDsMap1 != null) {
			inMap = inDsMap1.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("FMS020105DAO.selectFcltsList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 상세(설비) 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSub(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("FMS020105DAO.selectEqpManage", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 첨부파일(사진) 조회
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

		Map inFileMap = new HashMap();

		String fileSn = "";
		if (!StringUtils.isEmpty(inMap.get("PHOTO_FILE_SN"))) {
			fileSn = (String) inMap.get("PHOTO_FILE_SN");
		}

		inFileMap.put("FILE_SN", fileSn);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inFileMap));
		outDataset.put("output1", outDsMap);
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
		// 설비
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("FMS020105DAO.insertEqpManage", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("FMS020105DAO.updateEqpManage", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("FMS020105DAO.deleteEqpManage", map);
					break;
			}
		}
	}
}