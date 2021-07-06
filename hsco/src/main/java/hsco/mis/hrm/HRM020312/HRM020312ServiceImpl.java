package hsco.mis.hrm.HRM020312;

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
 * &#64;Class Name   	: HRM020312ServiceImpl.java
 * &#64;Description  	: 
 * &#64;author       	: 이수지
 * &#64;since        	: 2017. 07. 13.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 07. 13.	이수지			최초생성
 * </pre>
 */

@Service("HRM020312Service")
public class HRM020312ServiceImpl extends BaseService implements HRM020312Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 인적성결과 목록 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectNcsScrproList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020312DAO.selectNcsScrproList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/** 인적성결과 목록 저장 */
	@SuppressWarnings({ "rawtypes" })
	public void saveNcsScrproList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020312DAO.ncsScrproCU", map);
				break;
			}
		}
	}
	
	/** 엑셀업로드 */
	@SuppressWarnings({ "rawtypes" })
	public void excelUpload(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		baseDao.delete("HRM020312DAO.ncsScrproD", inMap);

		DataSetMap list = (DataSetMap) inDataset.get("input2");

		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			baseDao.update("HRM020312DAO.ncsScrproCU", map);
		}
	}
}