package hsco.mis.ctr.CTR010101;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CTR010101ServiceImpl.java
 * @Description  	: 
 * @author       	: 배용근
 * @since        	: 2015. 7. 27.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 27.   배용근	           최초생성
 *  2015. 11. 24.                  정윤원                공통형식에 맞춰 수정
 * </pre>
 */
@Service("ctr010101Service")
public class CTR010101ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBcncmstList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("ds_cond");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		//inMap.put("USE_AT", "1");

		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("CTR010101DAO.selectBcncmstList", inMap));
		outDsMap2.setRowMaps((List<Map>) baseDao.list("ACC020102DAO.fnncInsttCodeList", inMap));
		outDataset.put("ds_bcncMastrList", outDsMap1);
		outDataset.put("ds_fnncInsttCode", outDsMap2);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFnncInsttCodeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("ds_cond");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		inMap.put("USE_AT", "1");

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("ACC020102DAO.fnncInsttCodeList", inMap));
		outDataset.put("ds_fnncInsttCode", outDsMap);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBcncAcnutnoList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("ds_cond");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010101DAO.selectBcncAcnutnoList", inMap));
		outDataset.put("ds_bcncAcnutnoList", outDsMap);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCntrctList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("ds_cond");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010101DAO.selectCntrctList", inMap));
		outDataset.put("ds_cntrctList", outDsMap);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBcncmst(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("ds_cond");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010101DAO.selectBcncmst", inMap));
		outDataset.put("ds_bcncMastr", outDsMap);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectChkBizrno(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("ds_cond");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		String chkFlag = inMap.get("CHK_FLAG").toString();
		if("Y".equals(chkFlag)){
			outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010101DAO.selectChkBizrno", inMap));
		}
		
		outDataset.put("ds_chkBizrno", outDsMap);
	}

	@SuppressWarnings("unchecked")
	public void saveBcncmst(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		DataSetMap list1 = (DataSetMap) inDataset.get("ds_bcncMastr");
		for (int x = 0; x < list1.size(); x++) {
			@SuppressWarnings("rawtypes")
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			int bcncNmCnt = 0;
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					//기존 중복체크 로직 주석처리 -> 저장전 중복확인후 저장여부 사용자로부터 confirm 처리(20200604)
//					String bizrNo = String.valueOf(map.get("BIZRNO"));
//					if(bizrNo != null && !"".equals(bizrNo)) {
//						// 거래처마스터 중복 확인(거래처구분 상관없이)
//						int bcncCnt = Integer.parseInt((String) baseDao.select("CTR010101DAO.selectBcncMastr", map));
//						
//						if(bcncCnt > 0) {
//							String bizrno = map.get("BIZRNO").toString();
//							String errMsg = "입력하신 주민(사업자)번호("+bizrno+") 는 이미 거래처마스터에 등록되어 있습니다.";
//							throw new NexaServiceException("info.처리불가", errMsg);
//						}
//					}
//					bcncNmCnt = Integer.parseInt((String) baseDao.select("CTR010101DAO.selectBcncNmMastr", map));
//					if(bcncNmCnt > 0) {
//						String bizrnm = map.get("BCNC_NM").toString();
//						String errMsg = "입력하신 거래처명("+bizrnm+")은 이미 거래처마스터에 등록되어 있습니다.";
//						throw new NexaServiceException("info.처리불가", errMsg);
//					}
					baseDao.insert("CTR010101DAO.insertBcncmst", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					//기존 중복체크 로직 주석처리 -> 저장전 중복확인후 저장여부 사용자로부터 confirm 처리(20200604)
//					String bizrNochangeAt = String.valueOf(map.get("BIZRNO_CHANGE_AT"));
//					if(bizrNochangeAt != null && !"".equals(bizrNochangeAt)) {
//						if("1".equals(bizrNochangeAt)) {
//							// 거래처마스터 사업자번호 중복 확인(거래처구분 상관없이)
//							int bcncCnt = Integer.parseInt((String) baseDao.select("CTR010101DAO.selectBcncMastr", map));
//							
//							if(bcncCnt > 0) {
//								String bizrno = map.get("BIZRNO").toString();
//								String errMsg = "입력하신 주민(사업자)번호("+bizrno+") 는 이미 거래처마스터에 등록되어 있습니다.";
//								throw new NexaServiceException("info.처리불가", errMsg);
//							}
//							
//							
//						}
//					}
//					
//					bcncNmCnt = Integer.parseInt((String) baseDao.select("CTR010101DAO.selectBcncNmMastr", map));
//					if(bcncNmCnt > 0) {
//						String bizrnm = map.get("BCNC_NM").toString();
//						String errMsg = "입력하신 거래처명("+bizrnm+")은 이미 거래처마스터에 등록되어 있습니다.";
//						throw new NexaServiceException("info.처리불가", errMsg);
//					}
					baseDao.update("CTR010101DAO.updateBcncmst", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					
					List<Map<String, Object>> useList = (List<Map<String, Object>>) baseDao.list("CTR010101DAO.selectBcncUseInfo", map);
					if(useList != null && useList.size() > 0) {
						String bcncCode = map.get("BCNC_CODE").toString();
						String errMsg = "해당 거래처(코드 : "+bcncCode+")는 사용 중이어서 삭제할 수 없습니다.";
						throw new NexaServiceException("info.처리불가", errMsg);
					}
					
					baseDao.delete("CTR010101DAO.deleteBcncmst", map);
					break;
			}
		}

		DataSetMap list2 = (DataSetMap) inDataset.get("ds_bcncAcnutnoList");
		for (int x = 0; x < list2.size(); x++) {
			@SuppressWarnings("rawtypes")
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("CTR010101DAO.insertBcncAcnutnoList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR010101DAO.updateBcncAcnutnoList", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR010101DAO.deleteBcncAcnutnoList", map);
					break;
			}
		}
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBcncmstPopupList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("ds_cond");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010101DAO.selectBcncmstPopupList", inMap));
		outDataset.put("ds_bcncmstPopupList", outDsMap);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBcncChangeHistList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("ds_cond");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR010101DAO.selectBcncChangeHistList", inMap));
		outDataset.put("ds_bcncChangeHistList", outDsMap);
	}

	public void saveBcncChangeHistList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		DataSetMap list1 = (DataSetMap) inDataset.get("ds_bcncChangeHistList");
		for (int x = 0; x < list1.size(); x++) {
			@SuppressWarnings("rawtypes")
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("CTR010101DAO.insertBcncChangeHistList", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR010101DAO.updateBcncChangeHistList", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR010101DAO.deleteBcncChangeHistList", map);
					break;
			}
		}
	}

}
