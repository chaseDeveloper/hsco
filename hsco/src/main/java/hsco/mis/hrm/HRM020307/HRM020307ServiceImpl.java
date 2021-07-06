package hsco.mis.hrm.HRM020307;

import java.util.HashMap;
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
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: HRM020307ServiceImpl.java
 * &#64;Description  	: 
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 12. 23
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일				작성자			내용
 * ------------------------------------------------------------------
 *2017. 12. 23			정 민			최초생성
 * </pre>
 */

@Service("HRM020307Service")
public class HRM020307ServiceImpl extends BaseService implements HRM020307Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 대상자 목록 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectIntrvwEvl(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020307DAO.selectIntrvwEvl", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/** 평가집계 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectIntrvwEvlDetail(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input5");
		Map inMap = null;
		Map<String, Object> cmmCode = new HashMap<String, Object>();
		cmmCode.put("GRP_CODE", "HRM074");
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// 면접평가항목 
		inMap.put("intrvwEvlIemList", (List)baseDao.list("cmmCodeDAO.cmmCodeList", cmmCode, false));
		
		// 평가집계 조회
		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020307DAO.selectIntrvwEvlDetail", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output5", outDsMap);
	}

	/** 대상자 목록 저장 */
	@SuppressWarnings({ "rawtypes" })
	public void intrvwEvlCU (DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020307DAO.intrvwEvlCU", map);
				break;
			}
		}
	}
}