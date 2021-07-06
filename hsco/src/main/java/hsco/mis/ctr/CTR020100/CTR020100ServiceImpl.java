package hsco.mis.ctr.CTR020100;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.messenger.UcMessengerServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CTR020100Service.java
 * @Description  	: 계약의뢰를 관리하는 ServiceImpl 클래스 
 * @author       	: 김형태
 * @since        	: 2017. 07. 07.
 * @version      	: 1.0
 * @see          	:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2075. 07. 07.                  김형태              최초생성
 * </pre>
 */
@Service("CTR020100Service")
public class CTR020100ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "FileUploadService")
	FileUploadServiceImpl FileUploadService;
	
	@Resource(name = "UcMessengerService")
	UcMessengerServiceImpl ucMessengerService;

	/**
	 * 발주계획 목록(P01)
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOrderPlanList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR020100DAO.selectOrderPlanList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 발주계획 목록(P01)
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
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
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR020100DAO.selectReqestOrderPlan", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 계약의뢰 목록(P02)
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
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR020100DAO.selectCntrctReqestList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 예산계정 목록(P03)
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBudgetAcntList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR020100DAO.selectBudgetAcntList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 계약의뢰 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntRequest(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 계약의뢰
		DataSetMap output1 = new DataSetMap();
		output1.setRowMaps((List<Map>) baseDao.list("CTR020100DAO.cntRequest", inMap));
		outDataset.put("output1", output1);
	}

	/**
	 * 계약의뢰관리 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntRequestCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap input1 = (DataSetMap) inDataset.get("input1"); // 계약의뢰
		String reqestNo = null;

		if (input1.size() > 0) {
			// 계약의뢰 등록,수정
			Map mastrMap = input1.get(0);
			int mastrRowType = ((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (mastrRowType) {
				case DataSet.ROW_TYPE_INSERTED:
					reqestNo = (String) baseDao.select("CTR020100DAO.requestNo", mastrMap);
					mastrMap.put("REQEST_NO", reqestNo);
					baseDao.insert("CTR020100DAO.cntRequestC", mastrMap);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					String bfConfmAt = (String)baseDao.select("CTR020100DAO.selectConfmAt", mastrMap);
					String afConfmAt = (String)mastrMap.get("CONFM_AT");
					baseDao.update("CTR020100DAO.cntRequestU", mastrMap);
					reqestNo = (String) mastrMap.get("REQEST_NO");
					
					// 승인,반려 시 메신저 알림
					if(afConfmAt != null && !afConfmAt.equals(bfConfmAt)) {
						String empno = (String)mastrMap.get("CLIENT_EMPNO");
						String subject;
						StringBuffer sb = new StringBuffer();
						if("1".equals(afConfmAt)) {
							subject = "계약의뢰(의뢰번호:" + mastrMap.get("REQEST_NO") + ") 승인";
							sb.append("의뢰번호: ").append(mastrMap.get("REQEST_NO")).append("\n");
							sb.append("의뢰명: ").append(mastrMap.get("REQEST_NM"));
							ucMessengerService.sendMessage(empno, subject, sb.toString());
						} else if("2".equals(afConfmAt)) {
							subject = "계약의뢰(의뢰번호:" + mastrMap.get("REQEST_NO") + ") 반려";
							sb.append("의뢰번호: ").append(mastrMap.get("REQEST_NO")).append("\n");
							sb.append("의뢰명: ").append(mastrMap.get("REQEST_NM")).append("\n");
							sb.append("반려사유: ").append(mastrMap.get("RETURN_PRVONSH"));
							ucMessengerService.sendMessage(empno, subject, sb.toString());
						}
					}
					break;
				case DataSet.ROW_TYPE_DELETED:
					// 첨부파일 삭제
					if (!StringUtil.isNull((String) mastrMap.get("FILE_SN"))) {
						FileUploadService.deleteFileAll((String) mastrMap.get("FILE_SN"));
					}
					baseDao.update("CTR020100DAO.deleteReqestOrderPlan", mastrMap);
					baseDao.delete("CTR020100DAO.CntrctReqestThngAllD", mastrMap);
					baseDao.delete("CTR020100DAO.cntRequestD", mastrMap);
					break;
			}
		}

		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			if ("".equals(map.get("REQEST_NO")) || map.get("REQEST_NO") == null) {
				map.put("REQEST_NO", reqestNo);
			}
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR020100DAO.updateReqestOrderPlan", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.update("CTR020100DAO.deleteReqestOrderPlan", map);
					break;
			}
		}

		DataSetMap list3 = (DataSetMap) inDataset.get("input3");
		for (int x = 0; x < list3.size(); x++) {
			Map map = list3.get(x);
			if ("".equals(map.get("REQEST_NO")) || map.get("REQEST_NO") == null) {
				map.put("REQEST_NO", reqestNo);
			}
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("CTR020100DAO.CntrctReqestThngC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR020100DAO.CntrctReqestThngU", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR020100DAO.CntrctReqestThngD", map);
					break;
			}
		}

		Map inMap = null;
		DataSetMap inList_dsCond = (DataSetMap) inDataset.get("input0");
		if (inList_dsCond != null) {
			inMap = inList_dsCond.get(0);
		}
		DataSetMap output1 = new DataSetMap();
		if (!StringUtil.isNull(reqestNo)) {
			inMap.put("REQEST_NO", reqestNo);
			output1.setRowMaps((List<Map>) baseDao.list("CTR020100DAO.cntRequest", inMap));
		} else {
			output1 = inList_dsCond;
		}
		outDataset.put("output1", output1);
	}

	/**
	 * 서브조회(첨부파일, 예산배정내역, 계약업무처리과정조회, 물품등록)
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntRequestSub(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 첨부파일
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output1", outDsMap1);

		// 예산배정내역
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("CTR020100DAO.selectReqestOrderPlan", inMap));
		outDataset.put("output2", outDsMap2);

		// 물품상세
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("CTR020100DAO.selectCntrctReqestThng", inMap));
		outDataset.put("output3", outDsMap3);
	}

	/**
	 * 첨부파일 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
		outDataset.put("output1", outDsMap);
	}

}