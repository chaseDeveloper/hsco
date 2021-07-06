package hsco.mis.aud.AUD030105;

import java.util.ArrayList;
import java.util.HashMap;
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
 * @Class Name      : AUD030105ServiceImpl.java
 * @Description     : 금품등접수처리대장을 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 08.
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
 *  2015. 07. 08.         김병진               최초생성
 * </pre>
 */

@Service("AUD030105Service")
public class AUD030105ServiceImpl extends BaseService implements AUD030105Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;

	/**
	 * 금품등접수처리대장 목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMngdRceptlist(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		if (inMap != null) {
			records = (List<Map>) baseDao.list("AUD030105DAO.selectMngdRceptlist", inMap);
		} else {
			records = (List<Map>) baseDao.list("AUD030105DAO.selectMngdRceptlist", inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output01", outDsMap);

	}

	/**
	 * 금품등접수처리대장 저장/수정/삭제
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int MngdRceptlistCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;

		DataSetMap list1 = (DataSetMap) inDataset.get("input01");
		Map inMap1 = null;

		if (list1 != null)
			inMap1 = list1.get(0);

		DataSetMap list = (DataSetMap) inDataset.get("input02");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			if (rowType == DataSet.ROW_TYPE_INSERTED) {

				baseDao.insert("AUD030105DAO.MngdRceptlistC", map);

				String empnos = (String) baseDao.select("AUD030105DAO.selectEmpnos", inMap1);
				inMap1.put("RECV_IDS", empnos);
				baseDao.insert("UcMessengerDAO.sendMessage", inMap1);
			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

				baseDao.update("AUD030105DAO.MngdRceptlistU", map);

			} else if (rowType == DataSet.ROW_TYPE_DELETED) {

				baseDao.delete("AUD030105DAO.MngdRceptlistD", map);

			}
		}
		return iRow;
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
			map.put("INNER_SANCTN_MDL_ID", "AUD-100067");
			baseDao.update("AUD030105DAO.saveInnerSanc", map);
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
			baseDao.update("AUD030105DAO.confmU", map);
		}
	}
}
