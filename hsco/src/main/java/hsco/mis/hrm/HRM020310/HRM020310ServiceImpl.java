package hsco.mis.hrm.HRM020310;

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
 * &#64;Class Name   	: HRM020310ServiceImpl.java
 * &#64;Description  	: 서류전형관리
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 06. 22.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 06. 22.					정 민				최초생성
 * </pre>
 */

@Service("HRM020310Service")
public class HRM020310ServiceImpl extends BaseService implements HRM020310Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 서류전형관리 목록 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectEmpmnPapersScrproList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM020310DAO.selectEmpmnPapersScrproList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/** 서류전형관리 저장 */
	@SuppressWarnings({ "rawtypes" })
	public void saveEmpmnPapersScrproList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();
				
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM020310DAO.empmnPapersScrproC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020310DAO.empmnPapersScrproU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("HRM020310DAO.empmnPapersScrproD", map);
				break;
				
			}
		}
	}

}
