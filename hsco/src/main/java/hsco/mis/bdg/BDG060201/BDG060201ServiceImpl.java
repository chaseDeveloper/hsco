package hsco.mis.bdg.BDG060201;

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
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : BDG060201ServiceImpl.java
 * @Description     : 
 * @author          : 김형태
 * @since           : 2017. 5. 10.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 5. 10.                   김형태              최초생성
 * </pre>
 */
@Service("BDG060201Service")
public class BDG060201ServiceImpl extends BaseService implements BDG060201Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAnytmAsignDemand(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG060201DAO.selectAnytmAsignDemand", inMap));
		outDataset.put("output1", outDsMap1);
	}

	@SuppressWarnings({ "rawtypes" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("BDG060201DAO.callSpbdgAnytmAsignDemand", map);
					if (null != map.get("OUT_RESULT_MSG")) {
						throw new NexaServiceException("info.처리불가", map.get("OUT_RESULT_MSG").toString());
					}
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.insert("BDG060201DAO.callSpbdgAnytmAsignDemand", map);
					if (null != map.get("OUT_RESULT_MSG")) {
						throw new NexaServiceException("info.처리불가", map.get("OUT_RESULT_MSG").toString());
					}
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("BDG060201DAO.deleteAnytmAsignDemand", map);
					break;
			}
		}
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAcntCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("BDG060201DAO.selectAcntCode", inMap));
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBukipCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		int year = Integer.parseInt((String) inMap.get("YEAR"));
		DataSetMap outDsMap = new DataSetMap();

		if (year < 2018) { // 2018년 이전
			outDsMap.setRowMaps((List<Map>) baseDao.list("BDG060201DAO.selectBukipCodeOld", inMap));
		} else {
			outDsMap.setRowMaps((List<Map>) baseDao.list("BDG060201DAO.selectBukipCode", inMap));
		}

		outDataset.put("output1", outDsMap);
	}
}
