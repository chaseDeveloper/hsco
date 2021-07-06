package hsco.mis.ctr.CTR030600;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CTR030600ServiceImpl.java
 * @Description  	: 계약대가지급
 * @author       	: 김형태
 * @since        	: 2017. 08. 04.
 * @version      	: 1.0
 * @see          	:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 08. 04.                  김형태              최초생성
 * </pre>
 */
@Service("CTR030600Service")
public class CTR030600ServiceImpl extends BaseService implements CTR030600Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 금융기관목록 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFnncInsttList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030600DAO.selectFnncInsttList"));
		outDataset.put("output1", outDsMap);
	}

	/** (Popup) 전자세금계산서 원장 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDetIssuMstr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030600DAO.selectDetIssuMstr", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	/** 검사입회목록 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrsecWtnessList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030600DAO.selectPrsecWtnessList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/** 계약결의정보 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCntrctDecsnInfo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
		if (inDsMap1 != null) {
			inMap = inDsMap1.get(0);
		}

		// 계약결의정보
		DataSetMap outDsMap1 = new DataSetMap();
		List<Map> cntrctDecsnList = (List<Map>) baseDao.list("CTR030600DAO.selectCntrctDecsnInfo", inMap);
		outDsMap1.setRowMaps(cntrctDecsnList);
		outDataset.put("output1", outDsMap1);

		// 계약정보
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("CTR030600DAO.selectCntrct", inMap));
		outDataset.put("output3", outDsMap3);

		if (cntrctDecsnList.size() > 0) {
			Map cntrctDecsnInfo = cntrctDecsnList.get(0);
			String cntrctDecsnYear = cntrctDecsnInfo.get("CNTRCT_DECSN_YEAR") == null ? null : String.valueOf(cntrctDecsnInfo.get("CNTRCT_DECSN_YEAR"));
			String cntrctDecsnSn   = cntrctDecsnInfo.get("CNTRCT_DECSN_SN") == null ? null : String.valueOf(cntrctDecsnInfo.get("CNTRCT_DECSN_SN"));
			String fileSn          = cntrctDecsnInfo.get("FILE_SN") == null ? null : String.valueOf(cntrctDecsnInfo.get("FILE_SN"));

			inMap.put("CNTRCT_DECSN_YEAR", cntrctDecsnYear);
			inMap.put("CNTRCT_DECSN_SN", cntrctDecsnSn);
			inMap.put("FILE_SN", fileSn);
		}

		// 계약대가지급
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps((List<Map>) baseDao.list("CTR030600DAO.selectCntrctDecsnDetail", inMap));
		outDataset.put("output4", outDsMap4);

		// 첨부파일(대가지급)
		DataSetMap outDsMap5 = new DataSetMap();
		outDsMap5.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output5", outDsMap5);

		// 첨부파일(검사검수)
		DataSetMap outDsMap6 = new DataSetMap();
		String fileSn2 = inMap.get("FILE_SN2") == null ? null : String.valueOf(inMap.get("FILE_SN2"));
		inMap.put("FILE_SN", fileSn2);
		outDsMap6.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output6", outDsMap6);
	}

	/** 저장 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR030600DAO.deleteCntrctDecsnDetail", map);
					baseDao.delete("CTR030600DAO.cntrctDecsnInfoD", map);
					break;
			}
		}
		
		String cntrctDecsnYear = "";
		String cntrctDecsnSn   = "";
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					// 검사검수와 계약결의는 1:1
					int cnt = Integer.parseInt((String) baseDao.select("CTR030600DAO.selectCntrctDecsnCnt", map));
					if(cnt > 0) {
						String errMsg = "해당 검사검수에 대하여 계약결의가 이미 등록되어 있습니다.\n재조회 후 다시 진행해주십시오.";
						throw new NexaServiceException("info.처리불가", errMsg);
					}
					cntrctDecsnYear = map.get("CNTRCT_DECSN_YEAR") == null ? null : String.valueOf(map.get("CNTRCT_DECSN_YEAR"));
					cntrctDecsnSn   = baseDao.select("CTR020100DAO.cntrctDecsnSn", map) == null ? null : String.valueOf(baseDao.select("CTR020100DAO.cntrctDecsnSn", map));
					map.put("CNTRCT_DECSN_SN", cntrctDecsnSn);
					baseDao.insert("CTR030600DAO.cntrctDecsnInfoC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					cntrctDecsnYear = map.get("CNTRCT_DECSN_YEAR") == null ? null : String.valueOf(map.get("CNTRCT_DECSN_YEAR"));
					cntrctDecsnSn   = map.get("CNTRCT_DECSN_SN") == null ? null : String.valueOf(map.get("CNTRCT_DECSN_SN"));
					baseDao.update("CTR030600DAO.cntrctDecsnInfoU", map);
					break;
			}
		}

		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
				case DataSet.ROW_TYPE_UPDATED:
					String decsnChk = map.get("DECSN_CHK") == null ? null : String.valueOf(map.get("DECSN_CHK"));
					if("1".equals(decsnChk)) {
						if(!StringUtils.isEmpty(cntrctDecsnYear) && !"".equals(cntrctDecsnYear)) {
							map.put("CNTRCT_DECSN_YEAR", cntrctDecsnYear);
							map.put("CNTRCT_DECSN_SN",   cntrctDecsnSn);
						}
						baseDao.insert("CTR030600DAO.mergeCntrctDecsnDetail", map);
					} else {
						baseDao.delete("CTR030600DAO.deleteCntrctDecsnDetail", map);
					}
					break;
			}
		}
	}

}