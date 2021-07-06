package hsco.mis.hrm.HRM080306;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

@Service("HRM080306Service")
public class HRM080306ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "FileUploadService")
	FileUploadServiceImpl FileUploadService;

	/**
	 * 교육목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectEdcList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 개인별 교육비 집계(여비지출결의서 세부내용 목적)
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectExpDsnDetailTrvct(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 개인별 교육비 집계(여비지출결의서 세부내용 목적)
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectExpDsnDetailTrvct", inMap));
		outDataset.put("output1", outDsMap1);

		// 교육목록 조회
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectEdcList", inMap));		// TODO : 쿼리 수정 필요
		outDataset.put("output2", outDsMap2);

		// 법인카드사용내역
		inMap.put("EXCCLC_SE", "001");
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectEdcctExcclcTab", inMap));
		outDataset.put("output3", outDsMap3);

		// 영수증
		inMap.put("EXCCLC_SE", "002");
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectEdcctExcclcTab", inMap));
		outDataset.put("output4", outDsMap4);

		// 정액지급
		inMap.put("EXCCLC_SE", "003");
		DataSetMap outDsMap5 = new DataSetMap();
		outDsMap5.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectEdcctExcclcTab", inMap));
		outDataset.put("output5", outDsMap5);

		// 영수증의 모든 첨부파일
		inMap.put("EXCCLC_SE", "002");
		DataSetMap outDsMap6 = new DataSetMap();
		outDsMap6.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectFileList", inMap));
		outDataset.put("output6", outDsMap6);
	}

	/**
	 * 교육비 정산 조회(법인카드사용내역, 영수증, 정액지급)
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcctExcclc(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap1 = null;
		Map inMap2 = null;
		Map inMap3 = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap1 = inDsMap.get(0);
			inMap2 = inDsMap.get(0);
			inMap3 = inDsMap.get(0);
		}

		// 법인카드사용내역
		inMap1.put("EXCCLC_SE", "001");
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectEdcctExcclcTab", inMap1));
		outDataset.put("output1", outDsMap1);

		// 영수증
		inMap2.put("EXCCLC_SE", "002");
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectEdcctExcclcTab", inMap2));
		outDataset.put("output2", outDsMap2);

		// 정액지급
		inMap3.put("EXCCLC_SE", "003");
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectEdcctExcclcTab", inMap3));
		outDataset.put("output3", outDsMap3);
	}

	/**
	 * 첨부파일 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output1", outDsMap1);
	}

	/**
	 * 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		// 교육목록
		DataSetMap list0 = (DataSetMap) inDataset.get("input0");
		for (int x = 0; x < list0.size(); x++) {
			Map map = list0.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM080306DAO.updateEdcList", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					break;
			}
		}

		// 법인카드사용내역
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM080306DAO.insertEdcctExcclc", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM080306DAO.updateEdcctExcclc", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					// 첨부파일 삭제
					if (!StringUtil.isNull((String) map.get("FILE_SN"))) {
						FileUploadService.deleteFileAll((String) map.get("FILE_SN"));
					}
					baseDao.delete("HRM080306DAO.deleteEdcctExcclc", map); // 법인카드사용내역 삭제
					break;
			}
		}

		// 영수증
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM080306DAO.insertEdcctExcclc", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM080306DAO.updateEdcctExcclc", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					// 첨부파일 삭제
					if (!StringUtil.isNull((String) map.get("FILE_SN"))) {
						FileUploadService.deleteFileAll((String) map.get("FILE_SN"));
					}
					baseDao.delete("HRM080306DAO.deleteEdcctExcclc", map); // 영수증 삭제
					break;
			}
		}

		// 정액지급
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list3.size(); x++) {
			Map map = list3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM080306DAO.insertEdcctExcclc", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM080306DAO.updateEdcctExcclc", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					// 첨부파일 삭제
					if (!StringUtil.isNull((String) map.get("FILE_SN"))) {
						FileUploadService.deleteFileAll((String) map.get("FILE_SN"));
					}
					baseDao.delete("HRM080306DAO.deleteEdcctExcclc", map); // 정액지급 삭제
					break;
			}
		}

		// 교육비정산
		DataSetMap list5 = (DataSetMap) inDataset.get("input5");
		for (int x = 0; x < list5.size(); x++) {
			Map map = list5.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM080306DAO.updateEdcList2", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					break;
			}
		}

	}

	/**
	 * 예산계정 목록(P01)
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBudgetAcntList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080306DAO.selectBudgetAcntList", inMap));
		outDataset.put("output1", outDsMap);
	}

}
