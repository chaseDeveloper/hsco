package hsco.mis.hrm.HRM060102;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

@Service("HRM060102Service")
public class HRM060102ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectWorkEvl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap1 = null;
		if (inDsMap != null) {
			inMap1 = inDsMap.get(0);
		}

		List<Map> records1;
		List<Map> records2;
		List<Map> records3;
		List<Map> records4;
		List<Map> records5;

		// 탭1 : 기간설정
		records1 = (List<Map>) baseDao.list("HRM060102DAO.selectWorkEvlPd", inMap1);
		Map inMap2 = null;
		if (records1 != null) {
			inMap2 = records1.get(0);
			
			String jssfcSe     = (String)inMap1.get("JSSFC_SE");
			String clsfSe      = (String)inMap1.get("CLSF_SE");
			String trgetCombo  = (String)inMap1.get("TRGET_COMBO");
			String trgetNm     = (String)inMap1.get("TRGET_NM");
			
			inMap2.put("JSSFC_SE",    jssfcSe);
			inMap2.put("CLSF_SE",     clsfSe);
			inMap2.put("TRGET_COMBO", trgetCombo);
			inMap2.put("TRGET_NM",    trgetNm);

			// 탭2 : 제외자
			records2 = (List<Map>) baseDao.list("HRM060102DAO.selectworkEvlExcl", inMap2);
			DataSetMap outDsMap2 = new DataSetMap();
			outDsMap2.setRowMaps(records2);
			outDataset.put("output2", outDsMap2);

			// 탭3 : 대상자
			records3 = (List<Map>) baseDao.list("HRM060102DAO.selectWorkEvlTagter", inMap2);
			DataSetMap outDsMap3 = new DataSetMap();
			outDsMap3.setRowMaps(records3);
			outDataset.put("output3", outDsMap3);

			// 탭4 : 2단계 평정 대상자
			inMap2.put("EVL_STEP_SE", "02");
			records4 = (List<Map>) baseDao.list("HRM060102DAO.selectWorkEvlTagter", inMap2);
			DataSetMap outDsMap4 = new DataSetMap();
			outDsMap4.setRowMaps(records4);
			outDataset.put("output4", outDsMap4);

			// 탭4 : 3단계 평정 대상자
			inMap2.put("EVL_STEP_SE", "03");
			records5 = (List<Map>) baseDao.list("HRM060102DAO.selectWorkEvlTagter", inMap2);
			DataSetMap outDsMap5 = new DataSetMap();
			outDsMap5.setRowMaps(records5);
			outDataset.put("output5", outDsMap5);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records1);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void saveWorkEvl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		// 탭2 : 제외자 탭
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x2 = 0; x2 < (list2 == null ? 0 : list2.size()); x2++) {
			Map map2 = list2.get(x2);
			int rowType2 = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType2) {
				case DataSet.ROW_TYPE_INSERTED:
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.insert("HRM060102DAO.workEvlExclCU", map2);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM060102DAO.workEvlExclD", map2);
					break;
			}
		}

		// 탭3 : 대상자 탭
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");
		for (int x3 = 0; x3 < (list3 == null ? 0 : list3.size()); x3++) {
			Map map3 = list3.get(x3);
			int rowType3 = ((Integer) map3.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType3) {
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM060102DAO.workEvlTagterU", map3);
					break;
			}
		}
		
		// 탭4 : 평정단계 변경 탭(2단계)
		DataSetMap list4 = (DataSetMap) inDataset.get("input4");
		for (int x4 = 0; x4 < (list4 == null ? 0 : list4.size()); x4++) {
			Map map4 = list4.get(x4);
			int rowType4 = ((Integer) map4.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType4) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.update("HRM060102DAO.workEvlTagterU", map4);
					break;
			}
		}
		
		// 탭4 : 평정단계 변경 탭(3단계)
		DataSetMap list5 = (DataSetMap) inDataset.get("input5");
		for (int x5 = 0; x5 < (list5 == null ? 0 : list5.size()); x5++) {
			Map map5 = list5.get(x5);
			int rowType5 = ((Integer) map5.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType5) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.update("HRM060102DAO.workEvlTagterU", map5);
					break;
			}
		}

		// 탭1 : 기간설정 탭(최종집계를 위해 가장 마지막에 갱신)
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		if (list1.size() > 0) {
			Map map1 = list1.get(0);
			int rowType1 = ((Integer) map1.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType1) {
				case DataSet.ROW_TYPE_INSERTED:
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.insert("HRM060102DAO.saveWorkEvlPd", map1);
					break;
			}
		}
	}

	/**
	 * 제외자 추가시 제외자정보 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void addExclEmp(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		List<Map> records = (List<Map>) baseDao.list("HRM060102DAO.addExclEmp", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 제외자 선정
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void saveAutoWorkEvlExcl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
			baseDao.delete("HRM060102DAO.deleteAutoWorkEvlExcl", inMap);
			baseDao.insert("HRM060102DAO.insertAutoWorkEvlExcl", inMap);
		}
	}

	/**
	 * 대상자 선정
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void saveAutoWorkEvlTagter(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
			baseDao.delete("HRM060102DAO.deleteAutoWorkEvlTagter", inMap);
			baseDao.insert("HRM060102DAO.insertAutoWorkEvlTagter", inMap);
		}
	}
	
	/**
	 * 대상자 재계산
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void saveAutoCalc(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
			baseDao.delete("HRM060102DAO.deleteTmp", inMap);
			baseDao.insert("HRM060102DAO.insertTagterToTmp", inMap);
			baseDao.delete("HRM060102DAO.deleteTagter", inMap);
			baseDao.insert("HRM060102DAO.insertTmpToTagter", inMap);
			baseDao.delete("HRM060102DAO.deleteTmp", inMap);
		}
	}
}