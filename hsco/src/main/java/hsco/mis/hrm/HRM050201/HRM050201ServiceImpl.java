package hsco.mis.hrm.HRM050201;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM050201ServiceImpl.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 10. 09.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10.09.   김형태		최초생성
 * </pre>
 */

@Service("HRM050201Service")
public class HRM050201ServiceImpl extends BaseService implements HRM050201Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 일반승급대상자 기초자료 생성 */
	@SuppressWarnings({ "rawtypes" })
	public void tbhrmTrgterCreat(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		Map<String, Object> paramMap = new HashMap<String, Object>();

		Object in_insert_id = null;
		Object arg_type = null;
		Object arg_date = null;
		Object out_result_cd = null;
		Object out_result_msg = null;

		// 작성자
		in_insert_id = inMap.get("IN_INSERT_ID");
		paramMap.put("IN_INSERT_ID", in_insert_id);

		// 승급구분
		arg_type = inMap.get("ARG_TYPE");
		paramMap.put("ARG_TYPE", arg_type);

		// 기준일자
		arg_date = inMap.get("ARG_DATE") + "01";
		paramMap.put("ARG_DATE", arg_date);

		// 결과 코드
		out_result_cd = new String();
		paramMap.put("OUT_RESULT_CD", out_result_cd);

		// 결과 메시지
		out_result_msg = new String();
		paramMap.put("OUT_RESULT_MSG", out_result_msg);

		baseDao.insert("HRM050201DAO.tbhrmTrgterCreat", paramMap);
	}

	/** 호봉획정현황 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmPromtPrsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM050201DAO.tbhrmPromtPrsList", inMap));

		outDataset.put("output1", outDsMap);
	}

	/** 저장(CUD) */
	@SuppressWarnings({ "rawtypes" })
	public void tbhrmPromtSave(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.update("HRM050201DAO.insertPromt", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM050201DAO.updatePromt", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.update("HRM050201DAO.deletePromt", map);
					break;
			}
		}
	}

	/** 승급 적용 */
	@SuppressWarnings({ "rawtypes" })
	public void tbhrmPromtAt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			baseDao.update("HRM050201DAO.updatePromtAt", map);
			baseDao.update("HRM050201DAO.updatePromtHR", map);
		}
	}

	/** 승급 취소 */
	@SuppressWarnings({ "rawtypes" })
	public void tbhrmPromtAtC(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			baseDao.update("HRM050201DAO.updatePromtAtC", map);
			baseDao.update("HRM050201DAO.updatePromtHRC", map);
		}
	}

	/**
	 * 전자결재번호 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void approveCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		Map map = list.get(0);

		// 전자결재번호 조회
		String sanctnNO = (String) baseDao.select("HRM050201DAO.selectSanctnNO", map);
		map.put("SANCTN_NO", sanctnNO);

		// 전자결재번호 업데이트
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map2 = list2.get(x);

			// 전자결재번호 업데이트
			map2.put("SANCTN_NO", sanctnNO);
			baseDao.update("HRM050201DAO.approveU", map2);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		outDataset.put("output1", outDsMap);
	}

}