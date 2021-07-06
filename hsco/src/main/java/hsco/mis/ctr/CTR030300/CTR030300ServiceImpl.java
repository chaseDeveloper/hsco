package hsco.mis.ctr.CTR030300;

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

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CTR030300ServiceImpl.java
 * @Description     : 검수검사관리
 * @author          : 김형태
 * @since           : 2017. 07. 21.
 * @version         : 1.0
 * @see             :
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 07. 21.                  김형태              최초생성
 * </pre>
 */
@Service("CTR030300Service")
public class CTR030300ServiceImpl extends BaseService implements CTR030300Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "FileUploadService")
	FileUploadServiceImpl FileUploadService;

	/**
	 * 계약목록 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCntrctList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030300DAO.selectCntrctList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 검사입회내역 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrsecWtnessDtls(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030300DAO.selectPrsecWtnessDtls", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 입회검사자 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectWtnessInsptr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 입회검사자
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("CTR030300DAO.selectWtnessInsptr", inMap));
		outDataset.put("output1", outDsMap1);

		// 첨부파일
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output2", outDsMap2);
	}

	/**
	 * 검사입회 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveCntrwkServc(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		String wtnessSn = null;

		// 검사입회내역
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int i = 0; i < list1.size(); i++) {
			Map map = list1.get(i);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					wtnessSn = (String) baseDao.select("CTR030300DAO.wtnessSn", map);
					map.put("WTNESS_SN", wtnessSn);
					baseDao.insert("CTR030300DAO.PrsecWtnessDtlsC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030300DAO.PrsecWtnessDtlsU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					// 첨부파일 삭제
					if (!StringUtil.isNull((String) map.get("FILE_SN"))) {
						FileUploadService.deleteFileAll((String) map.get("FILE_SN"));
					}
					baseDao.delete("CTR030300DAO.WtnessInsptrAllD", map); // 입회검사자 모두 삭제
					baseDao.delete("CTR030300DAO.PrsecWtnessDtlsD", map);
					break;
			}
		}

		// 입회검사자
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int i = 0; i < list2.size(); i++) {
			Map map = list2.get(i);
			if ("".equals(map.get("WTNESS_SN")) || map.get("WTNESS_SN") == null) {
				map.put("WTNESS_SN", wtnessSn);
			}

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("CTR030300DAO.WtnessInsptrC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030300DAO.WtnessInsptrU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR030300DAO.WtnessInsptrD", map);
					break;
			}
		}
	}


	/**
	 * 첨부파일 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output1", outDsMap);
	}

}