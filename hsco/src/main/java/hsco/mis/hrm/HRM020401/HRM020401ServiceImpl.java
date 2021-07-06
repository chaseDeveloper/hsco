package hsco.mis.hrm.HRM020401;

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
 * &#64;Class Name   	: HRM020401ServiceImpl.java
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
 *   작성일						작성자				내용
 * ------------------------------------------------------------------
 *  2017. 12. 26.				정 민				최초생성
 * </pre>
 */

@Service("HRM020401Service")
public class HRM020401ServiceImpl extends BaseService implements HRM020401Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 최종결과관리 상세조회 */
	@SuppressWarnings({ "unchecked", "rawtypes"})
	public void empmnLastResultR(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// 평가위원 목록 조회
		List<Map> scrproEvlList = (List<Map>) baseDao.list("HRM020305DAO.scrproEvlMfcmmList", inMap);
		
		inMap.put("scrproEvlList", scrproEvlList);
		
		List<Map> result = (List<Map>) baseDao.list("HRM020401DAO.empmnLastResultR", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(scrproEvlList);
		outDataset.put("output1", outDsMap);
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(result);
		outDataset.put("output2", outDsMap);
	}

	/** 최종결과관리 생성 및 수정 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void empmnLastResultCU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020401DAO.empmnLastResultCU", map);
				break;
			}
		}
	}

	@SuppressWarnings({ "rawtypes" })
	public void empmnLastDtaCreatList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			baseDao.delete("HRM020401DAO.empmnLastResultD", map);
			baseDao.insert("HRM020401DAO.empmnLastResultC", map);
		}
	}
}