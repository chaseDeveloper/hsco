package hsco.mis.ctr.CTR020300;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * <pre>
 * @Project Name : 화성도시공사 차세대정보시스템
 * @Class Name   : CTR020300Service.java
 * @Description  : 계약의뢰를 관리하는 ServiceImpl 클래스 
 * @author       : 김형태
 * @since        : 2017. 07. 17.
 * @version      : 1.0
 * @see          :
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 07. 17.                  김형태              최초생성
 * </pre>
 */
@Service("CTR020300Service")
public class CTR020300ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 계약의뢰목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCntrctReqestList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap output1 = new DataSetMap();
		DataSetMap output2 = new DataSetMap();
		output1.setRowMaps((List<Map>) baseDao.list("CTR020300DAO.selectCntrctReqestList", inMap)); // 계약의뢰내역
		output2.setRowMaps((List<Map>) baseDao.list("CTR020300DAO.selectCntrctReqestFile", inMap)); // 계약의뢰별 파일목록
		outDataset.put("output1", output1);
		outDataset.put("output2", output2);
	}

	/**
	 * 의뢰별 발주계획 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectReqestOrderPlan(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR020300DAO.selectReqestOrderPlan", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 계약정보생성
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntrctInfoCreat(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);

			// 체크된 계약의뢰건만 처리
			String chk = (String) map.get("CHK");
			if ("1".equals(chk)) {
				List<Map> cntrctTrget = (List) baseDao.list("CTR020300DAO.selectCntrctTrget", map);
				for (int c1 = 0; c1 < cntrctTrget.size(); c1++) {
					Map cntrctMap = cntrctTrget.get(c1);
					String cntrctNo = (String) baseDao.select("CTR020300DAO.cntrctNo", cntrctMap);
					cntrctMap.put("CNTRCT_NO", cntrctNo);

					baseDao.insert("CTR020300DAO.insertCntrct",       cntrctMap);
					baseDao.insert("CTR020300DAO.insertCntrctBudget", cntrctMap);
					baseDao.insert("CTR020300DAO.insertCntrctThng",   cntrctMap);
				}
			}
		}
	}

	/**
	 * 계약정보재생성
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntrctInfoReCreat(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			String chk      = (String) map.get("CHK");
			String cntrctNo = (String) map.get("MIN_CNTRCT_NO");
			
			// 체크된 계약의뢰건만 처리
			if ("1".equals(chk)) {
				List<Map> cntrctTrget = (List) baseDao.list("CTR020300DAO.selectCntrctTrget", map);
				for (int c1 = 0; c1 < cntrctTrget.size(); c1++) {
					Map cntrctMap = cntrctTrget.get(c1);
					
					// 계약정보가 이미 생성된 건을 재생성하는 것으로 최초 1건은 INSERT가 아닌 UPDATE
					// 계약예산과 계약물품은 생성된 것이 없으므로 INSERT
					if(c1 == 0) {
						cntrctMap.put("CNTRCT_NO", cntrctNo);
						
						baseDao.update("CTR020300DAO.updateCntrct",       cntrctMap);
						baseDao.insert("CTR020300DAO.insertCntrctBudget", cntrctMap);
						baseDao.insert("CTR020300DAO.insertCntrctThng",   cntrctMap);
					} else {
						cntrctNo = (String) baseDao.select("CTR020300DAO.cntrctNo", cntrctMap);
						cntrctMap.put("CNTRCT_NO", cntrctNo);
						
						baseDao.insert("CTR020300DAO.insertCntrct",       cntrctMap);
						baseDao.insert("CTR020300DAO.insertCntrctBudget", cntrctMap);
						baseDao.insert("CTR020300DAO.insertCntrctThng",   cntrctMap);
					}
					
				}
			}
		}
	}

}