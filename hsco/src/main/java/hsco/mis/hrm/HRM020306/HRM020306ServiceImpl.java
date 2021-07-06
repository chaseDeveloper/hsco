package hsco.mis.hrm.HRM020306;

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

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: HRM020306ServiceImpl.java
 * &#64;Description  	: 
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 12. 26.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일					 작성자			내용
 * ------------------------------------------------------------------
 *   2017. 12. 26.			 정 민			최초생성
 * </pre>
 */

@Service("HRM020306Service")
public class HRM020306ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 대상자 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectEcnySportGnrlList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020306DAO.selectEcnySportGnrlList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/** 면접평가항목 상세조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectIntrvwEvlIEemList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM020306DAO.selectIntrvwEvlIEemList", inMap));
		outDataset.put("output1", outDsMap);
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM020306DAO.selectIntrvwEvl", inMap));
		outDataset.put("output2", outDsMap);
	}

	/**  면접 평가내역 생성 및 수정 */
	@SuppressWarnings("rawtypes")
	public void intrvwEvlCU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020306DAO.intrvwEvlScrproCU", map);
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
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020306DAO.intrvwEvlCU", map);
				break;
			}
		}
	}

}