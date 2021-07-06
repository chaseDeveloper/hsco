package hsco.mis.hrm.HRM030201;

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
 * @Class Name   	: HRM030201SeviceImpl.java
 * @Description  	: 인사발령관리 서비스 클래스
 * @author       	: 양성모
 * @since        	: 2017. 05. 02.
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
 *  2017. 05. 02.				   양성모				최초생성
 * </pre>
 */
@Service("HRM030201Service")
public class HRM030201ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 발령관리CUD
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmGnfdCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		// 발령상세정보
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < input1.size(); x++) {
			Map map = input1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			String appntDe = (String) map.get("APPNT_DE");
			String gnfdSe = (String) map.get("GNFD_SE");
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					int gnfdSeq = (Integer) baseDao.select("HRM030201DAO.selectGnfdSeq", map); // seq 취득
					map.put("GNFD_SEQ", gnfdSeq);
					baseDao.insert("HRM030201DAO.tbhrmGnfdDtlsC", map);

					if (!"".equals(appntDe) && appntDe != null) { // 보직일자 존재
						if (!"001".equals(gnfdSe) && !"002".equals(gnfdSe)) { // 겸직이 아닐 경우
							baseDao.update("HRM030201DAO.updateHrMastr", map); // 인사마스터 보직일자 업데이트
						}
					}
					baseDao.update("HRM030201DAO.updateHrMastrEtc", map); // 인사마스터 급여구분, 근속년수정보 업데이트
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM030201DAO.tbhrmGnfdDtlsU", map);
					if (!"".equals(appntDe) && appntDe != null) { // 보직일자 존재
						if (!"001".equals(gnfdSe) && !"002".equals(gnfdSe)) { // 겸직이 아닐 경우
							baseDao.update("HRM030201DAO.updateHrMastr", map); // 인사마스터 보직일자 업데이트
						}
					}
					baseDao.update("HRM030201DAO.updateHrMastrEtc", map); // 인사마스터 급여구분, 근속년수정보 업데이트
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM030201DAO.tbhrmGnfdDtlsD", map);
					break;
			}
		}
	}

	/**
	 * 발령 상세정보 목록을 조회한다.
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmGnfdDtlsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM030201DAO.tbhrmGnfdDtlsList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 신규 입력 사원 선택시 해당 사원의 현재 정보 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmpnoInfo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM030201DAO.selectEmpnoInfo", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 발령처리
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmGnfdProcess(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		// 발령 기본정보
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		int listSize = (input1 == null) ? 0 : input1.size();
		for (int x = 0; x < listSize; x++) {
			Map map = input1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_UPDATED:
					map.put("SE", "I");
					baseDao.update("HRM030201DAO.tbhrmGnfdProcessU", map); // 발령관리 테이블 확정여부 컬럼 업데이트
					baseDao.update("HRM030201DAO.tbhrmGnfdProcess", map); //발령처리 프로시져 호출
					String gnfdSe = (String) map.get("GNFD_SE");
					if ("012".equals(gnfdSe)) {
						baseDao.update("HRM030201DAO.updateNowClsfEmplmnDe", map);
					}
					break;
			}
		}
	}

	/**
	 * 발령처리취소
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmGnfdProcessCancel(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		// 발령 기본정보
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		int listSize = (input1 == null) ? 0 : input1.size();
		for (int x = 0; x < listSize; x++) {
			Map map = input1.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					break;
				case DataSet.ROW_TYPE_UPDATED:
					map.put("SE", "C");
					baseDao.update("HRM030201DAO.tbhrmGnfdProcessCancelU", map); // 발령관리 테이블 확정여부 컬럼 업데이트
					baseDao.update("HRM030201DAO.tbhrmGnfdProcess", map); //발령처리 프로시져 호출
					String gnfdSe = (String) map.get("GNFD_SE");
					if ("012".equals(gnfdSe)) {
						baseDao.update("HRM030201DAO.updateNowClsfEmplmnDe", map);
					}
					break;
				case DataSet.ROW_TYPE_DELETED:
					break;
			}
		}
	}
}
