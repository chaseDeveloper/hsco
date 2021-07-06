package hsco.pms.fms.FMS020104;

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

@Service("FMS020104Service")
public class FMS020104ServiceImpl extends BaseService {

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
		outDsMap.setRowMaps((List<Map>) baseDao.list("FMS020104DAO.selectFcltsList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 상세(대표시설물, 공원시설) 조회
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
		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
		if (inDsMap1 != null) {
			inMap = inDsMap1.get(0);
		}

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("FMS020104DAO.selectReprsntFcltsManage", inMap));
		outDsMap2.setRowMaps((List<Map>) baseDao.list("FMS020104DAO.selectReprsntFcltsPark",   inMap));
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
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

		String fileSn1 = "";
		if (!StringUtils.isEmpty(inMap.get("PHOTO1_FILE_SN"))) {
			fileSn1 = (String) inMap.get("PHOTO1_FILE_SN");
		}
		String fileSn2 = "";
		if (!StringUtils.isEmpty(inMap.get("PHOTO2_FILE_SN"))) {
			fileSn2 = (String) inMap.get("PHOTO2_FILE_SN");
		}

		inMap1.put("FILE_SN", fileSn1);
		inMap2.put("FILE_SN", fileSn2);

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap1));
		outDsMap2.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap2));
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
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
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		String fcltsManageSn = "";

		// 시설물 목록
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("FMS020104DAO.deleteReprsntFcltsManage", map);
					baseDao.delete("FMS020104DAO.deleteReprsntFcltsPark", map);
					break;
			}
		}

		// 대표시설물
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					fcltsManageSn = (String) baseDao.select("FMS020104DAO.getFcltsManageSn", map);
					map.put("FCLTS_MANAGE_SN", fcltsManageSn);
					baseDao.insert("FMS020104DAO.insertReprsntFcltsManage", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("FMS020104DAO.updateReprsntFcltsManage", map);
					break;
			}
		}

		// 공원시설
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list3.size(); x++) {
			Map map = list3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if (!"".equals(fcltsManageSn)) {
						map.put("FCLTS_MANAGE_SN", fcltsManageSn);
					}
					baseDao.insert("FMS020104DAO.insertReprsntFcltsPark", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("FMS020104DAO.updateReprsntFcltsPark", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("FMS020104DAO.deleteReprsntFcltsPark", map);
					break;
			}
		}
	}
}