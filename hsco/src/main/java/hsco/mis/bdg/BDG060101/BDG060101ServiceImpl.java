package hsco.mis.bdg.BDG060101;

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
 * @Class Name      : BDG060101ServiceImpl.java
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
@Service("BDG060101Service")
public class BDG060101ServiceImpl extends BaseService implements BDG060101Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	// 배정등록관리 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAsignRegistList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG060101DAO.selectAsignRegistList", inMap));
		outDataset.put("output1", outDsMap1);
	}

	// 저장
	@SuppressWarnings({ "rawtypes" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("BDG060101DAO.updateAnytmAsignDemand", map);
					break;
			}
		}
	}

	// 잔액이월
	@SuppressWarnings({ "rawtypes" })
	public void blceCyfd(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		baseDao.delete("BDG060101DAO.deleteBlceCyfd", inMap);	// 기존 잔액이월 삭제
		baseDao.insert("BDG060101DAO.insertBlceCyfd", inMap);	// 잔액이월 등록
	}
}
