package hsco.mis.sal.SAL030104;

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
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 경영정보시스템
 * &#64;Class Name   	: SAL030104ServiceImpl.java
 * &#64;Description  	: 월급여조정관리
 * &#64;author       	: 이상명
 * &#64;since        	: 2015. 9. 1.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 1.					이상명				최초생성
 * </pre>
 */

@Service("SAL030104Service")
public class SAL030104ServiceImpl extends BaseService implements SAL030104Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 월급여조정 목록을 조회한다.
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtSalaryPymntList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 월급여조정 대상자 내역 목록 조회
		List<Map> records = (List<Map>) baseDao.list("SAL030104DAO.selectMtSalaryPymntList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);

		// 월급여생성 내역 정보 건수 확인 (급여확정전)
		List<Map> records9 = (List<Map>) baseDao.list("SAL030104DAO.selectMtSalaryPymntCreate", inMap);

		DataSetMap outDsMap9 = new DataSetMap();
		outDsMap9.setRowMaps(records9);

		outDataset.put("output9", outDsMap9);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtDtls(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records1 = (List<Map>) baseDao.list("SAL030104DAO.selectMtPymntDtlsList", inMap);
		List<Map> records2 = (List<Map>) baseDao.list("SAL030104DAO.selectMtDdcDtlsList", inMap);

		inMap.put("PYMNT_DDC_SE", "0");
		List<Map> records3 = (List<Map>) baseDao.list("SAL030104DAO.selectPymntDdcStdrCodeList", inMap);

		inMap.put("PYMNT_DDC_SE", "1");
		List<Map> records4 = (List<Map>) baseDao.list("SAL030104DAO.selectPymntDdcStdrCodeList", inMap);

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDataset.put("output1", outDsMap1);

		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);

		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps(records3);
		outDataset.put("output3", outDsMap3);

		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps(records4);
		outDataset.put("output4", outDsMap4);
	}

	/**
	 * 월급여조정 지급공제코드 목록을 조회한다.
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPymntDdcStdrCodeList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input2");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		if (inMap != null) {
			records = (List<Map>) baseDao.list("SAL030104DAO.selectPymntDdcStdrCodeList", inMap);
		} else {
			records = (List<Map>) baseDao.list("SAL030104DAO.selectPymntDdcStdrCodeList", inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output2", outDsMap);
	}

	/**
	 * 월급여조정 개인별지급내역 목록을 조회한다.
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtPymntDtlsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input3");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		if (inMap != null) {
			records = (List<Map>) baseDao.list("SAL030104DAO.selectMtPymntDtlsList", inMap);
		} else {
			records = (List<Map>) baseDao.list("SAL030104DAO.selectMtPymntDtlsList", inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output3", outDsMap);
	}

	/**
	 * 월급여조정 개인별공제내역 목록을 조회한다.
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtDdcDtlsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input4");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		if (inMap != null) {
			records = (List<Map>) baseDao.list("SAL030104DAO.selectMtDdcDtlsList", inMap);
		} else {
			records = (List<Map>) baseDao.list("SAL030104DAO.selectMtDdcDtlsList", inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output4", outDsMap);
	}

	/**
	 * 월급여조정 지급내역 등록, 수정, 삭제
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })

	public void mtDtlsCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;

		// ======================================================================
		// 월지급내역 등록, 수정, 삭제
		// ======================================================================
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		int listSize2 = (list2 == null) ? 0 : list2.size();
		for (int x = 0; x < listSize2; x++) {

			Map map2 = list2.get(x);
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map2);
			} catch (Exception e) {
				throw new NexaServiceException(e);
			}

			int rowType = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("SAL030104DAO.MtPymntDtlsC", map2);
				iRow++;
				break;
			case DataSet.ROW_TYPE_UPDATED:
				iRow += baseDao.update("SAL030104DAO.MtPymntDtlsU", map2);
				break;
			case DataSet.ROW_TYPE_DELETED:
				iRow += baseDao.delete("SAL030104DAO.MtPymntDtlsD", map2);
				break;
			}
		}

		// ======================================================================
		// 월공제내역 등록, 수정, 삭제
		// ======================================================================
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");
		int listSize3 = (list3 == null) ? 0 : list3.size();
		for (int x = 0; x < listSize3; x++) {

			Map map3 = list3.get(x);
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map3);
			} catch (Exception e) {
				throw new NexaServiceException(e);
			}

			int rowType = ((Integer) map3.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("SAL030104DAO.MtPymntDtlsC", map3);
				iRow++;
				break;
			case DataSet.ROW_TYPE_UPDATED:
				iRow += baseDao.update("SAL030104DAO.MtPymntDtlsU", map3);
				break;
			case DataSet.ROW_TYPE_DELETED:
				iRow += baseDao.delete("SAL030104DAO.MtPymntDtlsD", map3);
				break;
			}
		}
		
		// 세액재계산
		if(listSize2 > 0) {
			Map map = list2.get(0);
			baseDao.update("SAL030104DAO.salaryCalcTax", map);
		}
		
		// 우수리모금 재계산
		if(listSize2 > 0 || listSize3 > 0) {
			Map map = listSize2 > 0 ? list2.get(0) : list3.get(0);
			baseDao.update("SAL030104DAO.salaryCalcFraction", map);
		}
		

		// ======================================================================
		// 월급여지급(마스터) 등록, 삭제
		// ======================================================================
		/*
		DataSetMap list7 = (DataSetMap) inDataset.get("input7");
		int listSize7 = (list7 == null) ? 0 : list7.size();
		for (int x = 0; x < listSize7; x++) {

			Map map7 = list7.get(x);
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map7);
			} catch (Exception e) {
				throw new NexaServiceException(e);
			}

			int rowType = ((Integer) map7.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				iRow += baseDao.delete("SAL030104DAO.MtSalaryPymntD", map7);

				iRow += baseDao.delete("SAL030104DAO.MtPymntDtlsAllD", map7);
				iRow += baseDao.delete("SAL030104DAO.MtDdcDtlsAllD", map7);

				baseDao.insert("SAL030104DAO.MtSalaryPymntC", map7);
				iRow++;
				break;
			case DataSet.ROW_TYPE_DELETED:
				iRow += baseDao.delete("SAL030104DAO.MtSalaryPymntD", map7);

				iRow += baseDao.delete("SAL030104DAO.MtPymntDtlsAllD", map7);
				iRow += baseDao.delete("SAL030104DAO.MtDdcDtlsAllD", map7);
				break;
			}
		}
		*/

		// 월급여 지급/공제 집계처리 프로시저
		/*
		DataSetMap list4 = (DataSetMap) inDataset.get("input4");
		int listSize4 = (list4 == null) ? 0 : list4.size();
		if (iRow > 0 && listSize4 > 0) {
			Map map = list4.get(0);

			baseDao.insert("SAL030104DAO.SPSAL_MT_SALARY_PYMNT_U", map);
			if ("-1".equals(map.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException("errors.항목.값.무효", map.get("OUT_RESULT_MSG").toString());
			}
			if ("-2".equals(map.get("OUT_RESULT_CD").toString())) {
				throw new NexaServiceException("err.예외상황.발생.SQL", map.get("OUT_RESULT_MSG").toString());
			}
		}
		*/

	}

	/**
	 * 월급여조정 추가 대상자 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtSalaryPymnt2List(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 월급여조정 추가 대상자 조회
		List<Map> records = (List<Map>) baseDao.list("SAL030104DAO.selectMtSalaryPymnt2List", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 급여개별계산
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void salaryCalc(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		baseDao.update("SAL030104DAO.salaryCalc", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(inMap);

		outDataset.put("output1", outDsMap);
	}
}
