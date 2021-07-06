package hsco.mis.bdg.BDG010202;

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
 * &#64;Class Name   	: BDG010202ServiceImpl.java
 * &#64;Description  	: 지시사항관리
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 12. 23.
 * &#64;version      	: 1.0
 * &#64;see          	:
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일					작성자			내용
 * ------------------------------------------------------------------
 *  2017. 12. 23.			정 민			최초생성
 * </pre>
 */

@Service("BDG010202Service")
public class BDG010202ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 담당부서 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDeptCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010202DAO.selectDeptCode", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	/** 지시사항관리 목록 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDrctMatterList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010202DAO.selectDrctMatterList", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	/** 지시사항이행내역 목록 조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDrctMatterFlflList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010202DAO.selectDrctMatterFlflList", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	/** 지시사항이행내역 저장 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void saveDrctMatterFlflList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");

		// 지시사항관리
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("BDG010202DAO.drctMatterFlflU", map);
				break;
			}
		}
	}
}
