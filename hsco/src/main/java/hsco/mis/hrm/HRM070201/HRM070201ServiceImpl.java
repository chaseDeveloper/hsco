package hsco.mis.hrm.HRM070201;

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
 * @Class Name   	: HRM070201ServiceImpl.java
 * @Description     : 
 * @author          : 이수지
 * @since           : 2017. 05. 29.
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
 * 2017. 05. 29.         이수지            최초생성
 * </pre>
 */

@Service("HRM070201Service")
public class HRM070201ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 여비기준 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBsrpStdr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		List<Map> records1 = (List<Map>) baseDao.list("HRM070201DAO.tbhrmBsrpTrvct", inVar);
		List<Map> records2 = (List<Map>) baseDao.list("HRM070201DAO.tbhrmBsrpCty",   inVar);

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}

	/**
	 * 여비기준 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void saveBsrpStdr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		int listSize1 = (list1 == null) ? 0 : list1.size();
		for (int x = 0; x < listSize1; x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM070201DAO.tbhrmBsrpTrvctC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM070201DAO.tbhrmBsrpTrvctU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM070201DAO.tbhrmBsrpTrvctD", map);
					break;
			}
		}
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		int listSize2 = (list2 == null) ? 0 : list2.size();
		for (int x = 0; x < listSize2; x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM070201DAO.tbhrmBsrpCtyC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM070201DAO.tbhrmBsrpCtyU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM070201DAO.tbhrmBsrpCtyD", map);
					break;
			}
		}
	}
}