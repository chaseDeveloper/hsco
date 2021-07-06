package hsco.pms.prj.PRJ010120;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

@Service("PRJ010120Service")
public class PRJ010120ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 하자보증 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFlawAssrncDtls(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010120DAO.selectFlawAssrncDtls", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 파일 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCtgryFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("PRJ010120DAO.selectCtgryFile", inMap));
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
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("PRJ010120DAO.insertFlawAssrncDtls", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("PRJ010120DAO.updateFlawAssrncDtls", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("PRJ010120DAO.deleteFlawAssrncDtls", map);
					break;
			}
		}
	}

	/**
	 * 첨부파일 수정사항 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveCtgryFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		List<Map> resultList = new ArrayList<Map>();
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
				case DataSet.ROW_TYPE_UPDATED:
					String ctgryFileId = (String) map.get("CTGRY_FILE_ID");
					if (StringUtils.isEmpty(ctgryFileId) || "".equals(ctgryFileId)) {
						ctgryFileId = (String) baseDao.select("PRJ010120DAO.getCtgryFileId", map);
						map.put("CTGRY_FILE_ID", ctgryFileId);
						baseDao.insert("PRJ010120DAO.insertCtgryFile", map);

						String docSn = (String) map.get("DOC_SN");
						if (StringUtils.isEmpty(docSn) || "".equals(docSn)) {
							docSn = (String) baseDao.select("PRJ010120DAO.getDocSn", map);
							map.put("DOC_SN", docSn);
							baseDao.update("PRJ010120DAO.updateDocSn", map);
						}
						baseDao.insert("PRJ010120DAO.insertDocRgs", map);
					}
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("PRJ010120DAO.deleteCtgryFile", map);
					baseDao.delete("PRJ010120DAO.deleteDocRgs", map);
					break;
			}
			resultList.add(map);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resultList);
		outDataset.put("output1", outDsMap);
	}
}
