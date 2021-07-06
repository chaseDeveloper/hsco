package hsco.mis.hrm.HRM060104;

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

import com.nexacro.xapi.data.DataSet;

@Service("HRM060104Service")
public class HRM060104ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 평정대상자 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectWorkEvlTrgter(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps((List<Map>) baseDao.list("HRM060104DAO.selectEvlManInfo", inMap));			// 평정자정보 조회
		
		if(outDsMap4.size() > 0) {
			String suprrAt = (String) outDsMap4.get(0).get("SUPRR_AT");
			inMap.put("SUPRR_AT", suprrAt);
		}
		
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM060104DAO.selectWorkEvlTrgter", inMap));		// 평정대상자 조회
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM060104DAO.selectWorkEvlPd", inMap));			// 평정기간 조회
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM060104DAO.selectGradDistrbTable", inMap));	// 등급분포표 조회
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
	}

	/**
	 * 평정대상자 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEvlScreEvl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM060104DAO.selectEvlScreEvl", inMap));			// 근무성적평정 조회
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM060104DAO.selectWorkScreEvlOpinion", inMap));	// 군무성적평정의견 조회
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM060104DAO.selectGradNmpr", inMap));			// 평정인원분포 조회(2020년 미만)
		outDsMap4.setRowMaps((List<Map>) baseDao.list("HRM060104DAO.selectCrevalNmprDistrb", inMap));	// 평정인원분포 조회(2020년 이상)
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		outDataset.put("output4", outDsMap4);
	}

	/**
	 * 근무성적평정 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void saveEvlScreEvl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		int listSize1 = (list1 == null) ? 0 : list1.size();
		for (int x = 0; x < listSize1; x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM060104DAO.updateEvlScreEvl", map);
					break;
			}
		}

		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		int listSize2 = (list2 == null) ? 0 : list2.size();
		for (int x = 0; x < listSize2; x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM060104DAO.updateWorkScreEvlOpinion", map);
					break;
			}
		}
	}

	/**
	 * (Popop) 평정자 선택대상 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEvlManPopup(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM060104DAO.selectEvlManPopup", inMap));
		outDataset.put("output1", outDsMap);
	}
}
