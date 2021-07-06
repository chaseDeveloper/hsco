package hsco.hpm.ctm.HPM070104;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: HPM070104Controller.java
 * &#64;Description  	: 
 * &#64;author       	: 정 민
 * &#64;since        	: 2018. 01. 03.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2018. 01. 03.					정 민			최초생성
 * </pre>
 */

@Service("HPM070104Service")
public class HPM070104ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(HPM070104ServiceImpl.class);

	/**
	 * 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// 집계자료
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070104DAO.selectAcmsltList", inMap));
		outDataset.put("output1", outDsMap);
		
		// 누계실적자료
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070104DAO.selectAcmtlAcmsltList", inMap));
		outDataset.put("output2", outDsMap);
		
		// 일일 목표값
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070104DAO.selectGoalDta", inMap));
		outDataset.put("output3", outDsMap);

		// 전년동기자료
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070104DAO.selectPastYearDtaList", inMap));
		outDataset.put("output4", outDsMap);
	}

	/**
	 * 실적목표값 저장
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap list = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				String stdrYear = (String) inMap.get("STDR_YEAR");
				String fcltsSn = (String) map.get("FCLTS_SN");
				map.put("STDR_YEAR", stdrYear);
				map.put("COLUM_NM",  fcltsSn);
				baseDao.update("HPM070104DAO.acmsltGoalDtaCU", map);
				break;
			}
		}
		
		DataSetMap list2 = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				String stdrYear = (String) inMap.get("STDR_YEAR");
				map.put("STDR_YEAR", stdrYear);
				map.put("COLUM_NM",  "ONE_DAY");
				baseDao.update("HPM070104DAO.acmsltGoalDtaCU", map);
				break;
			}
		}
	}

}