package hsco.mis.aud.AUD030101;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD030101ServiceImpl.java
 * @Description     : 오프라인신고를 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 06.
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
 *  2015. 07. 06.      김병진              최초생성
 *  2016. 04. 11.      이수지              내부결재
 * </pre>
 */

@Service("AUD030101Service")
public class AUD030101ServiceImpl extends BaseService implements AUD030101Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;

	/**
	 * 오프라인 신고 관리 목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOffCvplist(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		if (inMap != null) {
			records = (List<Map>) baseDao.list("AUD030101DAO.selectOffCvplist", inMap);
		} else {
			records = (List<Map>) baseDao.list("AUD030101DAO.selectOffCvplist", inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output01", outDsMap);

	}

	/**
	 * 오프라인신고관리 목록 저장/수정/삭제
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int OffCvplistCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input02");

		int listSize = (list == null) ? 0 : list.size();

		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input01");
		Map inMap1 = null;

		if (inDsMap1 != null) {
			inMap1 = inDsMap1.get(0);
		}

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			if (rowType == DataSet.ROW_TYPE_DELETED) {
				baseDao.delete("AUD030101DAO.OffCvplistD", map);
			} else if (rowType == DataSet.ROW_TYPE_INSERTED) {
				baseDao.insert("AUD030101DAO.OffCvplistC", map);

				String empnos = (String) baseDao.select("AUD030101DAO.selectEmpnos", inMap1);
				inMap1.put("RECV_IDS", empnos);
				baseDao.insert("UcMessengerDAO.sendMessage", inMap1);
			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				baseDao.update("AUD030101DAO.OffCvplistU", map);
			}
		}
		return iRow;
	}

	/**
	 * 오프라인 신고 관리_부서및 담당자 목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCvplDeptList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input03");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		if (inMap != null) {
			records = (List<Map>) baseDao.list("AUD030101DAO.selectCvplDeptList", inMap);
		} else {
			records = (List<Map>) baseDao.list("AUD030101DAO.selectCvplDeptList", inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output03", outDsMap);

	}

	/**
	 * 오프라인신고관리 목록 저장/수정/삭제
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int OfflinCvplDeptListCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input04");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			if (rowType == DataSet.ROW_TYPE_INSERTED) {

				baseDao.insert("AUD030101DAO.OfflinCvplDeptListC", map);

			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

				baseDao.update("AUD030101DAO.OfflinCvplDeptListU", map);

			} else if (rowType == DataSet.ROW_TYPE_DELETED) {

				baseDao.delete("AUD030101DAO.OfflinCvplDeptListD", map);

			}
		}
		return iRow;
	}

	/**
	 * UBIREOPORT DATASET을 조회한다.
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void innerSanctnUbiDataset(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();

		List<Map> records = null;

		if (inMap != null) {
			records = (List<Map>) baseDao.list("AUD030101DAO.innerSanctnUbiSelect", inMap);
		}
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);

	}

	/**
	 * 내부결재
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveInnerSanc(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		if (list.size() > 0) {
			Map map = list.get(0);
			map.put("INNER_SANCTN_MDL_ID", "AUD-100064");
			baseDao.update("AUD030101DAO.saveInnerSanc", map);
		}

	}

	/**
	 * 승인여부(결재여부) 변경저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void confmU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		if (list.size() > 0) {
			Map map = list.get(0);
			baseDao.update("AUD030101DAO.confmU", map);
		}
	}
}
