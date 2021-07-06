package hsco.mis.hrm.HRM020309;

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
 * &#64;Class Name   	: HRM020309ServiceImpl.java
 * &#64;Description  	: 
 * @author          	: 정 민
 * @since        	    : 2017. 12. 20.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일						작성자			내용
 * ------------------------------------------------------------------
 *  2017. 12. 20.				정 민			최초생성
 * </pre>
 */

@Service("HRM020309Service")
public class HRM020309ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 모집분야 목록 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectEmpmnRcritRealmList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020309DAO.selectEmpmnRcritRealmList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}
	
	/** 서류전형관리 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectPapersScrproList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020309DAO.selectPapersScrproList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/** 서류전형관리 등록 및 수정 */
	@SuppressWarnings("rawtypes")
	@Transactional
	public void papersScrproListCU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020309DAO.papersScrproListCU", map);
				break;
			}
		}
	}

}