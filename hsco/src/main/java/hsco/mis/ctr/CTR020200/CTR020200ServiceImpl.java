package hsco.mis.ctr.CTR020200;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("CTR020200Service")
public class CTR020200ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 발주계획내역 목록 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOrderPlanList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 계약구분 공통코드
		Map<String, Object> commCodeMap = new HashMap<String, Object>();
		commCodeMap.put("GRP_CODE", "CTR022");
		List<Map<String, Object>> cntrctSeList = (List<Map<String, Object>>) baseDao.list("cmmCodeDAO.cmmCodeList", commCodeMap, false);

		// 탭(전체, 공사, 용역, 물품) 목록 조회
		int cntrctSeListSize = cntrctSeList.size();
		for (int i = 0; i < (cntrctSeListSize + 1); i++) {
			DataSetMap outDsMap = new DataSetMap();
			if (i < cntrctSeListSize) {
				Map cntrctSe = cntrctSeList.get(i);
				inMap.put("CNTRCT_SE_CODE", cntrctSe.get("CODE"));
			} else {
				inMap.put("CNTRCT_SE_CODE", null);
			}
			outDsMap.setRowMaps((List<Map>) baseDao.list("CTR020200DAO.selectOrderPlanList", inMap));
			outDataset.put("output" + (i + 1), outDsMap);
		}
	}

	/**
	 * 발주계획 별 예산 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOrderBudget(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR020200DAO.selectOrderBudget", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 발주계획내역 목록 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@Autowired(required = false)
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveOrderPlanList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap input1 = (DataSetMap) inDataset.get("input1"); // 탭2(공사)
		DataSetMap input2 = (DataSetMap) inDataset.get("input2"); // 탭3(용역)
		DataSetMap input3 = (DataSetMap) inDataset.get("input3"); // 탭4(물품)
		DataSetMap input4 = (DataSetMap) inDataset.get("input4"); // 탭2(공사_예산)
		DataSetMap input5 = (DataSetMap) inDataset.get("input5"); // 탭3(용역_예산)
		DataSetMap input6 = (DataSetMap) inDataset.get("input6"); // 탭4(물품_예산)

		String orderPlanSn1 = null;
		String orderPlanSn2 = null;
		String orderPlanSn3 = null;

		/*************
		 * 탭2(공사)
		 *************/

		// 발주 (삭제)
		for (int x = 0; x < input1.size(); x++) {
			Map map = input1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					int chkCnt = (Integer) baseDao.select("CTR020200DAO.getRequestCnt", map);
					if (chkCnt > 0) {
						String orderNm = (String) map.get("ORDER_NM");
						String errMsg = "[ " + orderNm + " ] 의뢰를 삭제할 수 없습니다.";
						errMsg += "\n해당 발주계획을 참조하는 계약의뢰 건이 존재합니다.";
						throw new NexaServiceException("info.처리불가", errMsg);
					} else {
						baseDao.delete("CTR020200DAO.deleteOrderBudget", map);
						baseDao.delete("CTR020200DAO.deleteOrderPlan", map);
					}
					break;
			}
		}

		// 발주 (추가, 수정)
		for (int x = 0; x < input1.size(); x++) {
			Map map = input1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					orderPlanSn1 = (String)baseDao.select("CTR020200DAO.getOrderPlanSn", map);
					map.put("ORDER_PLAN_SN", orderPlanSn1);
					baseDao.insert("CTR020200DAO.insertOrderPlan", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR020200DAO.updateOrderPlan", map);
					break;
			}
		}

		// 예산 (삭제)
		for (int x = 0; x < input4.size(); x++) {
			Map map = input4.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR020200DAO.deleteOrderBudget", map);
					break;
			}
		}

		// 예산(추가, 수정)
		for (int x = 0; x < input4.size(); x++) {
			Map map = input4.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if(!StringUtils.isEmpty(orderPlanSn1)) {
						map.put("ORDER_PLAN_SN", orderPlanSn1);
					}
					baseDao.insert("CTR020200DAO.insertOrderBudget", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR020200DAO.updateOrderBudget", map);
					break;
			}
		}

		/*************
		 * 탭3(용역)
		 *************/

		// 발주 (삭제)
		for (int x = 0; x < input2.size(); x++) {
			Map map = input2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					int chkCnt = (Integer) baseDao.select("CTR020200DAO.getRequestCnt", map);
					if (chkCnt > 0) {
						String orderNm = (String) map.get("ORDER_NM");
						String errMsg = "[ " + orderNm + " ] 발령을 삭제할 수 없습니다.";
						errMsg += "\n해당 발주계획을 참조하는 계약의뢰 건이 존재합니다.";
						throw new NexaServiceException("info.처리불가", errMsg);
					} else {
						baseDao.delete("CTR020200DAO.deleteOrderBudget", map);
						baseDao.delete("CTR020200DAO.deleteOrderPlan", map);
					}
					break;
			}
		}

		// 발주 (추가, 수정)
		for (int x = 0; x < input2.size(); x++) {
			Map map = input2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					orderPlanSn2 = (String)baseDao.select("CTR020200DAO.getOrderPlanSn", map);
					map.put("ORDER_PLAN_SN", orderPlanSn2);
					baseDao.insert("CTR020200DAO.insertOrderPlan", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR020200DAO.updateOrderPlan", map);
					break;
			}
		}
		
		// 예산 (삭제)
		for (int x = 0; x < input5.size(); x++) {
			Map map = input5.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR020200DAO.deleteOrderBudget", map);
					break;
			}
		}

		// 예산(추가, 수정)
		for (int x = 0; x < input5.size(); x++) {
			Map map = input5.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if(!StringUtils.isEmpty(orderPlanSn2)) {
						map.put("ORDER_PLAN_SN", orderPlanSn2);
					}
					baseDao.insert("CTR020200DAO.insertOrderBudget", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR020200DAO.updateOrderBudget", map);
					break;
			}
		}

		/*************
		 * 탭4(물품)
		 *************/

		// 발주 (삭제)
		for (int x = 0; x < input3.size(); x++) {
			Map map = input3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					int chkCnt = (Integer) baseDao.select("CTR020200DAO.getRequestCnt", map);
					if (chkCnt > 0) {
						String orderNm = (String) map.get("ORDER_NM");
						String errMsg = "[ " + orderNm + " ] 발령을 삭제할 수 없습니다.";
						errMsg += "\n해당 발주계획을 참조하는 계약의뢰 건이 존재합니다.";
						throw new NexaServiceException("info.처리불가", errMsg);
					} else {
						baseDao.delete("CTR020200DAO.deleteOrderBudget", map);
						baseDao.delete("CTR020200DAO.deleteOrderPlan", map);
					}
					break;
			}
		}

		// 발주 (추가, 수정)
		for (int x = 0; x < input3.size(); x++) {
			Map map = input3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					orderPlanSn3 = (String)baseDao.select("CTR020200DAO.getOrderPlanSn", map);
					map.put("ORDER_PLAN_SN", orderPlanSn3);
					baseDao.insert("CTR020200DAO.insertOrderPlan", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR020200DAO.updateOrderPlan", map);
					break;
			}
		}
		
		// 예산 (삭제)
		for (int x = 0; x < input6.size(); x++) {
			Map map = input6.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR020200DAO.deleteOrderBudget", map);
					break;
			}
		}

		// 예산(추가, 수정)
		for (int x = 0; x < input6.size(); x++) {
			Map map = input6.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					if(!StringUtils.isEmpty(orderPlanSn3)) {
						map.put("ORDER_PLAN_SN", orderPlanSn3);
					}
					baseDao.insert("CTR020200DAO.insertOrderBudget", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR020200DAO.updateOrderBudget", map);
					break;
			}
		}
	}

}