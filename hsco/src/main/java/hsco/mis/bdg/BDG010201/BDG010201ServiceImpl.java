package hsco.mis.bdg.BDG010201;

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
 * &#64;Class Name   	: BDG010201ServiceImpl.java
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

@Service("BDG010201Service")
public class BDG010201ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

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
		outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010201DAO.selectDrctMatterList", inMap));
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
		outDsMap.setRowMaps((List<Map>) baseDao.list("BDG010201DAO.selectDrctMatterFlflList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/** 지시사항관리, 지시사항이행내역 저장 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void saveDrctMatterList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		String key = (String) baseDao.select("BDG010201DAO.selectdrctMatterSn", inMap);
		
		DataSetMap list1 = (DataSetMap) inDataset.get("input2");
		
		// 지시사항관리
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				map.put("SN", key);
				baseDao.insert("BDG010201DAO.drctMatterC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("BDG010201DAO.drctMatterU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("BDG010201DAO.drctMatterFlflD", map);	// 지시사항이행내역
				baseDao.delete("BDG010201DAO.drctMatterD", map);		// 지시사항관리
				break;
			}
		}

		// 지시사항이행내역
		DataSetMap list2 = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				if("".equals(map.get("SN")) || map.get("SN") == null) {
					map.put("SN", key);
				}
				baseDao.update("BDG010201DAO.drctMatterFlflCU", map);
			}
		}
	}
}
