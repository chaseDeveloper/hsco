package hsco.mis.hrm.HRM020102;

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
 * &#64;Class Name   	: HRM020102ServiceImpl.java
 * &#64;Description  	: 
 * &#64;author       	: 이혜선
 * &#64;since        	: 2015. 07.23.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07.23.	이혜선			최초생성
 * </pre>
 */

@Service("HRM020102Service")
public class HRM020102ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** 채용공고관리조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void empmnPblancList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020102DAO.empmnPblancList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/** 채용공고관리조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void empmnKeyList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020102DAO.empmnKeyList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/** 모집분야 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void empmnRcritRealmList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020102DAO.empmnRcritRealmList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	
	/** 과목 조회 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectChoiseSbjectList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;
		records = (List<Map>) baseDao.list("HRM020102DAO.choiseSbjectList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/** 저장 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void empmnPblancCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM020102DAO.empmnPblancC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020102DAO.empmnPblancU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				map.put("IS_PARENT", "TRUE");
				baseDao.delete("HRM020102DAO.choiseSbjectD", map);
				baseDao.delete("HRM020102DAO.empmnRcritRealmD", map);
				baseDao.delete("HRM020102DAO.empmnPblancD", map);
				break;
			}
		}

		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		String sn = "";
		int listSize2 = (list2 == null) ? 0 : list2.size();

		for (int x = 0; x < listSize2; x++) {

			Map map = list2.get(x);

			int rowTyp2 = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowTyp2) {
			case DataSet.ROW_TYPE_INSERTED:
				sn = (String) baseDao.select("HRM020102DAO.selectEmpmnRcritRealmSn", map);
				map.put("SN", sn);
				baseDao.insert("HRM020102DAO.empmnRcritRealmC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020102DAO.empmnRcritRealmU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("HRM020102DAO.empmnRcritRealmD", map);
				break;
			}
		}

		DataSetMap list3 = (DataSetMap) inDataset.get("input3");

		int listSize3 = (list3 == null) ? 0 : list3.size();

		for (int x = 0; x < listSize3; x++) {

			Map map = list3.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				if(map.get("SN") == null || "".equals(map.get("SN"))) {
					map.put("SN", sn);
				}
				baseDao.insert("HRM020102DAO.choiseSbjectC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HRM020102DAO.choiseSbjectU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("HRM020102DAO.choiseSbjectD", map);
				break;
			}
		}
	}

}