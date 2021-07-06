package hsco.com.sym.ism.SYM090200;

import java.io.File;
import java.math.BigDecimal;
import java.rmi.server.UID;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.cntn.impl.CntnMessengerServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.innerSanctn.InnerSanctionPostProcessor;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.FileUtils;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM090200ServiceImpl.java
 * @Description  	: 내부결재를 관리하는 서비스 구현체 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------

 * </pre>  
 */

@Service("SYM090200Service")
public class SYM090200ServiceImpl extends BaseService implements SYM090200Service {
    protected Logger log = LoggerFactory.getLogger(SYM090200ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    @Resource(name = "cntnMessengerServiceImpl")
    protected CntnMessengerServiceImpl cntnMessengerServiceImpl;
    
    /**
	 * 결재선 부서사용자정보
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void sSanctnerDeptUserInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		List <Map> records;
		DataSetMap outDsMap = new DataSetMap();
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		if(inMap != null){
			records = (List<Map>)baseDao.list("SYM090200DAO.sSanctnerDeptUserInfo", inMap);	
			outDsMap.setRowMaps(records);
		}

		outDataset.put("sSanctnerDeptUserInfo", outDsMap);
	}
	
	/**
	 * 결재선 사용자조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void sSanctnerUserInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		List <Map> records;
		DataSetMap outDsMap = new DataSetMap();
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		if(inMap != null){
			records = (List<Map>)baseDao.list("SYM090200DAO.sSanctnerUserInfo", inMap);	
			outDsMap.setRowMaps(records);
		}

		outDataset.put("sSanctnerUserInfo", outDsMap);
	}
	
	/**
	 * 결재선 최근결재선
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void sSanctnerRecentInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		List <Map> records;
		DataSetMap outDsMap = new DataSetMap();
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		if(inMap != null){
			records = (List<Map>)baseDao.list("SYM090200DAO.sSanctnerRecentInfo", inMap);	
			outDsMap.setRowMaps(records);
		}

		outDataset.put("sSanctnerRecentInfo", outDsMap);
	}
	
	/**
	 * 내부결재 기안 초기화
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void initInnerSanctn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		String ncnt = (String)baseDao.select("SYM090200DAO.innerSanctionChk", inMap);
		if(!"0".equals(ncnt)){
			throw new NexaServiceException("info.내부결재.등록된ID");
		}
		
		Map<String, String> oMap = (HashMap<String, String>)baseDao.select("SYM090200DAO.innerSanctionMdl", inMap);	
		List <Map> records = new ArrayList<Map>();
		records.add(oMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("innerSanctnMdl", outDsMap);
	}
	
	/**
	 * 내부결재 기안등록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void insInnerSanctn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		//1. 내부결재ID 가져오기
		String innerSanctnId = (String)baseDao.select("SYM090200DAO.innerSanctionId");
		
		//2. 내부결재마스터 insert
		DataSetMap innerSanctnMastrDs = (DataSetMap)inDataset.get("innerSanctnMastr"); // 내부결재마스터
		Map innerSanctnMastrMap = null;
		if (innerSanctnMastrDs != null) innerSanctnMastrMap = innerSanctnMastrDs.get(0);
		innerSanctnMastrMap.put("INNER_SANCTN_ID", innerSanctnId);
		innerSanctnMastrMap.put("LAST_SANCTN_STTUS", "S00"); // COM034 대기 최종결재상태
		baseDao.insert("SYM090200DAO.insInnerSanctionMaster", innerSanctnMastrMap);
		
		//3. 내부결재내역 insert
		DataSetMap innerSanctnerDs = (DataSetMap) inDataset.get("innerSanctner");   // 내부결재자
		Map<String, String> mapUserInfo = (Map<String, String>) inVar.get(NexacroConstant.SESSION_USER_MAP_NAME);
		//3.1 등록자본인 insert
		Map<String, String> hm = new HashMap<String, String>();
		hm.put("INNER_SANCTN_ID", innerSanctnId);
		hm.put("SANCTN_SN","0");
		hm.put("EMPNO",mapUserInfo.get("USER_ID"));
		hm.put("EMPNM",mapUserInfo.get("USER_NM"));
		hm.put("RSPOFC_SE","S1"); 	//기안자
		hm.put("SANCTN_STEP","S1"); //기안
		hm.put("SANCTN_STTUS","S01"); //완료
		hm.put("DEPT_CODE",mapUserInfo.get("DEPT_CODE"));
		baseDao.insert("SYM090200DAO.insInnerSanctner", hm);
		baseDao.insert("SYM090200DAO.insInnerSanctnDtls", hm);
		
		//3.2 결재라인 insert
		//4.내부결재라인 insert
		for(Map map : innerSanctnerDs.getRowMaps()){
			map.put("INNER_SANCTN_ID", innerSanctnId);
			map.put("SANCTN_STTUS", "S00");	//결재상태 대기 GPR_CODE : COM032
			baseDao.insert("SYM090200DAO.insInnerSanctner", map);
			baseDao.insert("SYM090200DAO.insInnerSanctnDtls", map);
		}
		
		//5. 내부결재보고서정보 insert
		DataSetMap innerSanctnReprtInfoDs = (DataSetMap) inDataset.get("innerSanctnReprtInfo");  // 레포트정보
		if(innerSanctnReprtInfoDs!=null
			&& innerSanctnReprtInfoDs.size()>0){
			for(Map map : innerSanctnReprtInfoDs.getRowMaps()){
				map.put("INNER_SANCTN_ID", innerSanctnId);
				baseDao.insert("SYM090200DAO.insInnerSanctnReprtInfo", map);
			}
		}
		
		//6. 내부결재보고서데이터 insert
//		DataSetMap innerSanctnReprtDataDs = (DataSetMap) inDataset.get("innerSanctnReprtData");  // 레포트 조회 데이터 메타 정보
//		if(innerSanctnReprtDataDs!=null
//			&& innerSanctnReprtDataDs.size()>0) {
//			for(Map map : innerSanctnReprtDataDs.getRowMaps()){
//				map.put("INNER_SANCTN_ID", innerSanctnId);
//				String INPUT_DATA = (String)map.get("INPUT_DATA");
//				map.put("INPUT_DATA", INPUT_DATA.replaceAll("\\t","").replace("\"  /","\"/"));
//				baseDao.insert("SYM090200DAO.insInnerSanctnReprtData", map);
//			}
//		}
		DataSetMap innerSanctnReprtDataClob = (DataSetMap) inDataset.get("innerSanctnReprtDataClob");  // 레포트 조회 Dataset
		if(innerSanctnReprtDataClob!=null
			&& innerSanctnReprtDataClob.size()>0) {
			for(Map map : innerSanctnReprtDataClob.getRowMaps()){
				map.put("INNER_SANCTN_ID", innerSanctnId);
				baseDao.insert("SYM090200DAO.insInnerSanctnReprtDataClob", map);
			}
		}
		
		//7.최종결재자, 다음결재자 정보 UPDATE
		baseDao.update("SYM090200DAO.updInnerSanctionMasterSanctner", innerSanctnId);
		
		//결재자 메신저 알림처리
		sendMessenger(inVar, innerSanctnId);
		//참조자 메신저 알림처리
		sendMessenger_S3(inVar, innerSanctnId);
		
		List <Map> records = new ArrayList<Map>();
		Map outMap = new HashMap();
		outMap.put("INNER_SANCTN_ID",innerSanctnId);
		records.add(outMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("innerSanctnId", outDsMap);
	}
	
	@SuppressWarnings("unchecked")
	//결재요청안내
	private void sendMessenger(Map<String, Object> inVar, String innerSanctnId){
		Map<String, String> hm = (HashMap<String, String>)baseDao.select("SYM090200DAO.selectMessenger", innerSanctnId);
		if(hm!=null
			&& null!=hm.get("NEXT_SANCTNER_ID")){

			Map<String, String> msgrMap = new HashMap<String, String>();
			msgrMap.put("MSG_CODE", "COM001");	//[내부결재안내] 결재요청 - [내부결재안내]  %CHANGEWORD1%님 %CHANGEWORD3% 님의 내부결재:%CHANGEWORD2% 건이 있습니다.
			msgrMap.put("INS_USER_ID", hm.get("FROM_EMP_ID"));
			msgrMap.put("FROM_USER_ID", hm.get("FROM_EMP_ID"));
			msgrMap.put("TO_USER_ID", hm.get("NEXT_SANCTNER_ID"));
			msgrMap.put("CHANGEWORD1", hm.get("NEXT_SANCTNER_NM"));
			msgrMap.put("CHANGEWORD3", hm.get("FROM_EMP_NM"));
			msgrMap.put("CHANGEWORD2", hm.get("SANCTN_SJ"));
			msgrMap.put("CHANGEWORD4", "");
			msgrMap.put("CHANGEWORD5", "");
			baseDao.insert("MessengerDAO.sendMsgr", msgrMap);
			
			/*
			//SMS 전송
			Map<String, String> smsInfoMap = (Map<String,String>)baseDao.select("SYM090200DAO.selectSMSInfo",msgrMap);
			String toUsrTel = smsInfoMap.get("TO_USR_TEL");
			if(toUsrTel!=null
				&& !"".equals(toUsrTel)
				&& toUsrTel.indexOf("01")==0){
				Map<String, String> smsMap = new HashMap<String, String>();
				smsMap.put("SEND_DEPT_CODE", smsInfoMap.get("FROM_DEPT_CODE"));
				smsMap.put("ANSW_TEL", smsInfoMap.get("FROM_USR_TEL"));
				smsMap.put("MSGE", smsInfoMap.get("CONTENT"));
				smsMap.put("RECIPIENT_NUM", smsInfoMap.get("TO_USR_TEL"));
				smsMap.put("RCVER_NM", hm.get("NEXT_SANCTNER_NM"));
				smsMap.put("SENDER_ID", hm.get("FROM_EMP_ID"));
				baseDao.insert("SYM090200DAO.messeageProcedure", smsMap);  
			}
			*/
		}
	}
	
	//결재완료안내
	@SuppressWarnings("unchecked")
	private void sendMessenger_result(Map<String, Object> inVar, String innerSanctnId){
		Map<String, String> hm = (HashMap<String, String>)baseDao.select("SYM090200DAO.selectMessenger_result", innerSanctnId);
		if(hm!=null
			&& null!=hm.get("TO_EMP_ID")){
			
			Map<String, String> msgrMap = new HashMap<String, String>();
			msgrMap.put("MSG_CODE", "COM002");	//[내부결재안내]결재완료안내 - [내부결재안내]  %CHANGEWORD1%님 내부결재:%CHANGEWORD2%건이 %CHANGEWORD3% 되었습니다.
			msgrMap.put("INS_USER_ID", hm.get("NEXT_SANCTNER_ID"));
			msgrMap.put("FROM_USER_ID", hm.get("NEXT_SANCTNER_ID"));
			msgrMap.put("TO_USER_ID", hm.get("TO_EMP_ID"));
			msgrMap.put("CHANGEWORD1", hm.get("TO_EMP_NM"));
			msgrMap.put("CHANGEWORD2", hm.get("SANCTN_SJ"));
			msgrMap.put("CHANGEWORD3", hm.get("LAST_SANCTN_STTUS_NM"));
			msgrMap.put("CHANGEWORD4", "");
			msgrMap.put("CHANGEWORD5", "");
			baseDao.insert("MessengerDAO.sendMsgr", msgrMap);
			
			/*
			//SMS 전송
			Map<String, String> smsInfoMap = (Map<String,String>)baseDao.select("SYM090200DAO.selectSMSInfo",msgrMap);
			String toUsrTel = smsInfoMap.get("TO_USR_TEL");
			if(toUsrTel!=null
				&& !"".equals(toUsrTel)
				&& toUsrTel.indexOf("01")==0){
				Map<String, String> smsMap = new HashMap<String, String>();
				smsMap.put("SEND_DEPT_CODE", smsInfoMap.get("FROM_DEPT_CODE"));
				smsMap.put("ANSW_TEL", smsInfoMap.get("FROM_USR_TEL"));
				smsMap.put("MSGE", smsInfoMap.get("CONTENT"));
				smsMap.put("RECIPIENT_NUM", smsInfoMap.get("TO_USR_TEL"));
				smsMap.put("RCVER_NM", hm.get("TO_EMP_NM"));
				smsMap.put("SENDER_ID", hm.get("NEXT_SANCTNER_ID"));
				baseDao.insert("SYM090200DAO.messeageProcedure", smsMap);  
			}
			*/
		}
	}
	
	//참조안내 
	@SuppressWarnings("unchecked")
	private void sendMessenger_S3(Map<String, Object> inVar, String innerSanctnId){
		List <Map<String, String>> list = (List<Map<String,String>>)baseDao.list("SYM090200DAO.selectMessenger_S3", innerSanctnId);
		for(Map<String, String> hm : list){
			Map<String, String> msgrMap = new HashMap<String, String>();
			msgrMap.put("MSG_CODE", "COM001");	//[내부결재안내] 결재요청 - [내부결재안내]  %CHANGEWORD1%님 %CHANGEWORD3% 님의 내부결재:%CHANGEWORD2% 건이 있습니다.
			msgrMap.put("INS_USER_ID", hm.get("FROM_EMP_ID"));
			msgrMap.put("FROM_USER_ID", hm.get("FROM_EMP_ID"));
			msgrMap.put("TO_USER_ID", hm.get("SANCTNER_S3_ID"));
			msgrMap.put("CHANGEWORD1", hm.get("SANCTNER_S3_NM"));
			msgrMap.put("CHANGEWORD3", hm.get("FROM_EMP_NM"));
			msgrMap.put("CHANGEWORD2", hm.get("SANCTN_SJ"));
			msgrMap.put("CHANGEWORD4", "");
			msgrMap.put("CHANGEWORD5", "");
			baseDao.insert("MessengerDAO.sendMsgr", msgrMap);
			
			/*
			//SMS 전송
			Map<String, String> smsInfoMap = (Map<String,String>)baseDao.select("SYM090200DAO.selectSMSInfo",msgrMap);
			String toUsrTel = smsInfoMap.get("TO_USR_TEL");
			if(toUsrTel!=null
				&& !"".equals(toUsrTel)
				&& toUsrTel.indexOf("01")==0){
				Map<String, String> smsMap = new HashMap<String, String>();
				smsMap.put("SEND_DEPT_CODE", smsInfoMap.get("FROM_DEPT_CODE"));
				smsMap.put("ANSW_TEL", smsInfoMap.get("FROM_USR_TEL"));
				smsMap.put("MSGE", smsInfoMap.get("CONTENT"));
				smsMap.put("RECIPIENT_NUM", smsInfoMap.get("TO_USR_TEL"));
				smsMap.put("RCVER_NM", hm.get("SANCTNER_S3_NM"));
				smsMap.put("SENDER_ID", hm.get("FROM_EMP_ID"));
				baseDao.insert("SYM090200DAO.messeageProcedure", smsMap);  
			}
			*/
		}
	}
	
	/**
	 * 내부결재 파일등록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void innerSanctnFileUpload( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
		Map<String, Object> upResult = null;
		if(fileInfo != null){
			
			NexacroMapDTO xpDto = getXpDto();
			setFileLocation(getFileLocation());
			
			upResult = (Map<String, Object>)uploadSingleFileinfo(xpDto);
			
			List<Map> resultList = (List<Map>)upResult.get("UP_FILE_LIST");
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(resultList);
			outDataset.put("fileList", outDsMap);
			
		}else{
			throw new NexaServiceException("err.파일.업로드.정보없음");
		}
	}
	
	
	/**
	 * 내부결재 목록조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void innerSanctionList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		List <Map> records;
		DataSetMap outDsMap = new DataSetMap();
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		if(inMap != null){
			records = (List<Map>)baseDao.list("SYM090200DAO.innerSanctionList", inMap);	
			outDsMap.setRowMaps(records);
		}

		outDataset.put("innerSanctionList", outDsMap);
	}
	
	/**
	 * 내부결재현황 결재정보
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void innerSanctnInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}

		// 내부결재 master 조회
		List <Map> records2;
			if("Y".equals(inMap.get("MASTR_U"))){
				records2 = (List<Map>)baseDao.list("SYM090201DAO.innerSanctnMastrU", inMap);
			}else{
				records2 = (List<Map>)baseDao.list("SYM090201DAO.innerSanctnMastr", inMap);	
			}
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		outDataset.put("innerSanctnMastr", outDsMap2);
		
		// 내부결재 file
		List <Map> records6;
		records6 = (List<Map>)baseDao.list("SYM090203DAO.innerSanctnFileList", inMap);	
		DataSetMap outDsMap6 = new DataSetMap();
		outDsMap6.setRowMaps(records6);
		outDataset.put("innerSanctnFileList", outDsMap6);
		
		// report apprline
		List <Map> records7;
		records7 = (List<Map>)baseDao.list("SYM090202DAO.innerSanctnReprtApprline", inMap);	
		DataSetMap outDsMap7 = new DataSetMap();
		outDsMap7.setRowMaps(records7);
		outDataset.put("innerSanctnReprtApprline", outDsMap7);
		
		// report parameter
		List <Map> records4;
		records4 = (List<Map>)baseDao.list("SYM090202DAO.innerSanctnReprtInfo", inMap);	
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps(records4);
		outDataset.put("innerSanctnReprtInfo", outDsMap4);
		
		// report info
		List <Map> records5;
		records5 = (List<Map>)baseDao.list("SYM090203DAO.innerSanctnReprtData", inMap);	
		DataSetMap outDsMap5 = new DataSetMap();
		outDsMap5.setRowMaps(records5);
		outDataset.put("innerSanctnReprtData", outDsMap5);
		
		// 결재상태코드
		List <Map> records8;
		Map tmCommCode = new HashMap();
		tmCommCode.put("GRP_CODE","COM032");
		records8 = (List<Map>)baseDao.list("cmmCodeDAO.cmmCodeList", tmCommCode);	
		DataSetMap outDsMap8 = new DataSetMap();
		outDsMap8.setRowMaps(records8);
		outDataset.put("sanctnSttusCode", outDsMap8);
	}
	
	/**
	 * 내부결재 결재정보 결재내역
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void innerSanctnDtls( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		List <Map> records;
		DataSetMap outDsMap = new DataSetMap();
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		if(inMap != null){
		    records = (List<Map>)baseDao.list("SYM090200DAO.innerSanctnDtls", inMap);	
		    outDsMap.setRowMaps(records);
		}

		outDataset.put("innerSanctnDtls", outDsMap);
	}
	
	/**
	 * 내부결재 결재정보 결재처리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void innerSanctnDtlsU( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap innerSanctnDtlsUDs = (DataSetMap)inDataset.get("input1");
		
		if(innerSanctnDtlsUDs!=null
			&& innerSanctnDtlsUDs.size()>0){
			
			for(Map map : innerSanctnDtlsUDs.getRowMaps()){
				if(1!=baseDao.update("SYM090200DAO.innerSanctnDtlsU", map)){
					throw new NexaServiceException("err.내부결재.결재처리");
				}
				// 개인결재처리후 Mastr 상태 udpate
				Map<String, String> innerSanctnMastrLastSttusS = (HashMap<String, String>)baseDao.select("SYM090200DAO.innerSanctnMastrLastSttusS", map);
				if("S08".equals(innerSanctnMastrLastSttusS.get("OGN_LAST_SANCTN_STTUS"))
					|| "S09".equals(innerSanctnMastrLastSttusS.get("OGN_LAST_SANCTN_STTUS"))){
					throw new NexaServiceException("err.내부결재.취소상태");
				}
				
				if(1!=baseDao.update("SYM090200DAO.innerSanctnMastrLastSttusU", innerSanctnMastrLastSttusS)){
					throw new NexaServiceException("err.내부결재.결재마스터처리");
				}
				
				//파일경로 (결재파일스토리지/JOB_SE/INNSER_SANCTN_ID.pdf)    			
				// 취소, 반송, 최종결재자 결재완료시에는 파일이 존재해야함.
				String inner_sanctn_id = (String)map.get("INNER_SANCTN_ID");
//				String sanctn_sttus = (String)map.get("SANCTN_STTUS");
//				String curr_sanctner_id = (String)map.get("CURR_SANCTNER_ID");
//				String last_sanctner_id = innerSanctnMastrLastSttusS.get("LAST_SANCTNER_ID");
//				
//				if( !isExistsSanctnFile(sanctn_sttus,
//										curr_sanctner_id.equals(last_sanctner_id),
//										inner_sanctn_id,
//										innerSanctnMastrLastSttusS.get("JOB_SE")) ){
//					throw new NexaServiceException("err.내부결재.파일변환");
//				}
				
				//내부결재 후처리
				DataSetMap posInDsMap = new DataSetMap();
				List <Map> posRecords = (List<Map>)baseDao.list("SYM090200DAO.selectInnerSanctnPost", inner_sanctn_id);	
				posInDsMap.setRowMaps(posRecords);
				Map<String, DataSetMap> posInDataset = new HashMap<String, DataSetMap>();
				posInDataset.put("INNER_SANCTN_MASTR", posInDsMap);
				InnerSanctionPostProcessor.postProcess(baseDao, tranInfo, inVar, posInDataset, outVar, outDataset);
				
				//결재요청 안내
				sendMessenger(inVar, inner_sanctn_id);
				//내부결재완료 안내
				sendMessenger_result(inVar, inner_sanctn_id);
			}
		}
	}
	
	// 내부결재완료건 파일변환처리
	@SuppressWarnings("unused")
	private boolean isExistsSanctnFile(String sanctnSttus, boolean isFinalSanctner, String innerSanctnId, String jobSe){
		return true;
/*		boolean reVal = false;
		
		//파일경로 (결재파일스토리지/JOB_SE/INNSER_SANCTN_ID.pdf)
		//pdf viwer 연동으로 웹 디렉토리 하위에 있어야함 symbolic link 필요
		//웹 디렉토리에 없는경우 link를 고려해볼 필요가 있음 
		// 취소, 반송, 최종결재자 결재완료시에는 파일이 존재해야함.
		
		try{
			if("S08".equals(sanctnSttus)
				|| "S09".equals(sanctnSttus)
				|| ("S01".equals(sanctnSttus) && isFinalSanctner) ){
				String sanctn_file_path = getFileSanctnLocation()+File.separator+jobSe+File.separator;
				File sanctn_file = new File(sanctn_file_path+innerSanctnId+".pdf");
				reVal = sanctn_file.exists();				
				log.debug("===========================================================");
				log.debug("sanctn file getPath    : "+sanctn_file.getPath());
				log.debug("sanctn file getAbsolutePath    : "+sanctn_file.getAbsolutePath());
				log.debug("sanctn file dir    : "+sanctn_file_path+innerSanctnId+".pdf");
				log.debug("sanctn file exists : "+reVal);
				log.debug("===========================================================");
			}else{
				reVal = true;
			}
		}catch(Exception e){
			e.printStackTrace();
			reVal = false;
		}
		
		return reVal;
*/
	}
	
	/**
	 * 내부결재 결재정보 참조자결재처리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void innerSanctnDtlsU_S3( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap innerSanctnDtlsUDs = (DataSetMap)inDataset.get("input1");
		if(innerSanctnDtlsUDs!=null
			&& innerSanctnDtlsUDs.size()>0){
			for(Map map : innerSanctnDtlsUDs.getRowMaps()){
				baseDao.update("SYM090200DAO.innerSanctnDtlsU_S3", map);
				
				// 개인결재처리후 Mastr 상태 udpate
				Map<String, String> innerSanctnMastrLastSttusS = (HashMap<String, String>)baseDao.select("SYM090200DAO.innerSanctnMastrLastSttusS", map);
				if("S00".equals(innerSanctnMastrLastSttusS.get("OGN_LAST_SANCTN_STTUS"))){
					baseDao.update("SYM090200DAO.innerSanctnMastrLastSttusU", innerSanctnMastrLastSttusS);
				}
			}
		}
	}
	
	/**
	 * 내부결재 결재정보 일괄결재
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void updAllSanctnSttus( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap innerSanctnList = (DataSetMap)inDataset.get("innerSanctnList");
		DataSetMap innerSanctnDtlsU = (DataSetMap)inDataset.get("innerSanctnDtlsU"); // 결재처리정보
		Map innerSanctnDtlsUMap = null;		
		if (innerSanctnDtlsU != null){
			innerSanctnDtlsUMap = innerSanctnDtlsU.get(0);
		}
		
		
		if(innerSanctnList!=null
			&& innerSanctnList.size()>0){
			for(Map map : innerSanctnList.getRowMaps()){
				//1.결재상세정보
				innerSanctnDtlsUMap.put("INNER_SANCTN_ID", (String)map.get("INNER_SANCTN_ID"));
				Map<String, String> innerSanctnMastrMap = (HashMap<String, String>)baseDao.select("SYM090201DAO.innerSanctnMastrU", map);
			
				//2.결재처리(결재자, 참조자)
				if("S3".equals(innerSanctnMastrMap.get("SANCTNER_STEP"))){
					//참조자
					if(1!=baseDao.update("SYM090200DAO.innerSanctnDtlsU_S3", innerSanctnDtlsUMap)){
						throw new NexaServiceException("err.내부결재.결재처리");
					}
					// 개인결재처리후 Mastr 상태 udpate
					Map<String, String> innerSanctnMastrLastSttusS = (HashMap<String, String>)baseDao.select("SYM090200DAO.innerSanctnMastrLastSttusS", innerSanctnDtlsUMap);
					if("S00".equals(innerSanctnMastrLastSttusS.get("OGN_LAST_SANCTN_STTUS"))){
						if(1!=baseDao.update("SYM090200DAO.innerSanctnMastrLastSttusU", innerSanctnMastrLastSttusS)){
							throw new NexaServiceException("err.내부결재.결재마스터처리");
						}
					}
					
				}else{
					
					//결재자
					innerSanctnDtlsUMap.put("CURR_SANCTNER_ID", innerSanctnMastrMap.get("CURR_SANCTNER_ID"));
					if(1!=baseDao.update("SYM090200DAO.innerSanctnDtlsU", innerSanctnDtlsUMap)){
						throw new NexaServiceException("err.내부결재.결재처리");
					}
					// 개인결재처리후 Mastr 상태 udpate
					Map<String, String> innerSanctnMastrLastSttusS = (HashMap<String, String>)baseDao.select("SYM090200DAO.innerSanctnMastrLastSttusS", innerSanctnDtlsUMap);
					if("S08".equals(innerSanctnMastrLastSttusS.get("OGN_LAST_SANCTN_STTUS"))
						|| "S09".equals(innerSanctnMastrLastSttusS.get("OGN_LAST_SANCTN_STTUS"))){
						throw new NexaServiceException("err.내부결재.취소상태");
					}
					
					if(1!=baseDao.update("SYM090200DAO.innerSanctnMastrLastSttusU", innerSanctnMastrLastSttusS)){
						throw new NexaServiceException("err.내부결재.결재마스터처리");
					}
					
					//파일경로 (결재파일스토리지/JOB_SE/INNSER_SANCTN_ID.pdf)    			
					// 취소, 반송, 최종결재자 결재완료시에는 파일이 존재해야함.
					String inner_sanctn_id = (String)innerSanctnDtlsUMap.get("INNER_SANCTN_ID");
//					String sanctn_sttus = (String)innerSanctnDtlsUMap.get("SANCTN_STTUS");
//					String curr_sanctner_id = innerSanctnMastrMap.get("CURR_SANCTNER_ID");
//					String last_sanctner_id = innerSanctnMastrMap.get("LAST_SANCTNER_ID");
//					
//					
//					if( !isExistsSanctnFile(sanctn_sttus,
//											curr_sanctner_id.equals(last_sanctner_id),
//											inner_sanctn_id,
//											innerSanctnMastrLastSttusS.get("JOB_SE")) ){
//						throw new NexaServiceException("err.내부결재.파일변환");
//					}
					
					//내부결재 후처리
					DataSetMap posInDsMap = new DataSetMap();
					List <Map> posRecords = (List<Map>)baseDao.list("SYM090200DAO.selectInnerSanctnPost", inner_sanctn_id);	
					posInDsMap.setRowMaps(posRecords);
					Map<String, DataSetMap> posInDataset = new HashMap<String, DataSetMap>();
					posInDataset.put("INNER_SANCTN_MASTR", posInDsMap);
					InnerSanctionPostProcessor.postProcess(baseDao, tranInfo, inVar, posInDataset, outVar, outDataset);
					
					//결재요청 안내
					sendMessenger(inVar, inner_sanctn_id);
					//내부결재완료 안내
					sendMessenger_result(inVar, inner_sanctn_id);
				}
			}
		}
	}
	
	/**
	 * MY기안문서 상신취소
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void innerSanctnMastrLastSttusD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap ds = (DataSetMap)inDataset.get("input1");
		if(ds!=null
			&& ds.size()>0){
			for(Map map : ds.getRowMaps()){
				if(1!=baseDao.update("SYM090200DAO.innerSanctnMastrLastSttusD", map)){
					throw new NexaServiceException("err.내부결재.상신취소");
				}
				
				//내부결재 후처리
				DataSetMap posInDsMap = new DataSetMap();
				List <Map> posRecords = (List<Map>)baseDao.list("SYM090200DAO.selectInnerSanctnPost", (String)map.get("INNER_SANCTN_ID"));	
				posInDsMap.setRowMaps(posRecords);
				Map<String, DataSetMap> posInDataset = new HashMap<String, DataSetMap>();
				posInDataset.put("INNER_SANCTN_MASTR", posInDsMap);
				InnerSanctionPostProcessor.postProcess(baseDao, tranInfo, inVar, posInDataset, outVar, outDataset);
			}
		}
	}
	
	/**
	 * 파일 업로드
	 * - Service to Service
	 * @author LeeSJ
	 * @param xpDto
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({"unchecked"})
	public Map<String, Object> uploadSingleFileinfo(NexacroMapDTO xpDto) throws NexaServiceException {
		
		Map<String, Object> resultMap = null;
		
		Map <String, Object> inVar 			= xpDto.getInVariableMap();
		Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
		HttpServletRequest request 			= xpDto.getRequest();
		
		// 첨부파일 정보
		DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");	// List
		
		if(fileInfo != null){
			
			String uploadDir = null;		// 업로드 디렉토리
			boolean saveFile = false;		// 파일 저장여부
			boolean isNewMaster = true; // 첨부마스터가 신규 인지 여부 신규(true)/ 이미존재하면 false
			
			ArrayList<Map<String, Object>> fileList = new ArrayList<Map<String,Object>>();	// 업로드 파일 정보
			
			String oriFileName = null;		// 실제 파일명
			String oriExtName = null;		// 실제 확장자
			String uniqueFileName = null;	// 변경(유일) 파일명
			try{
				
				// [STEP1] 파일저장
				MultipartHttpServletRequest mpRequest = (MultipartHttpServletRequest)request;
//				int filInfoSize = fileInfo.size();
//				System.out.println("업로드 대상 파일정보 수 = " + filInfoSize);
				// 파일일련번호 조회
				BigDecimal filesSn = null;
				
				
				String strFileSn = null;  ////String.valueOf(filesSn);
				strFileSn = (String)fileInfo.getMapValue(0, "FILE_SN");
				if(strFileSn != null){
					if(!"".equals(strFileSn)){
						filesSn = new BigDecimal(strFileSn);
						
						Map<String, Object> inFileItem = new HashMap<String, Object>();
						inFileItem.put("FILE_SN",  filesSn);
						// 파일일련번호에 해당하는 마스터 정보 존해 확인
						int regMstCnt = (Integer)baseDao.select("checkAtchmnFileMast", inFileItem);
						if(regMstCnt != 0){
							isNewMaster = false;
						}
					}
				}
				
				//System.out.println("strFileSn === " + strFileSn);
				resultMap = new HashMap<String, Object>();
//				System.out.println("selectFileSn = " + strFileSn);
				
				// 파일 저장처리
				// 업로드 파일 정보 추출
				Iterator<String> iterFile = mpRequest.getFileNames();
				while(iterFile.hasNext()){
					String formName = (String)iterFile.next();	
					
					MultipartFile multiFile = mpRequest.getFile(formName);
					oriFileName = multiFile.getOriginalFilename();
//					System.out.println("multiFile.getName = " + multiFile.getName());
					if(!StringUtil.isNull(oriFileName)){
						oriExtName = oriFileName.substring(oriFileName.lastIndexOf('.') + 1, oriFileName.length());
						
						// 전달 파일정보
						int inFileIdx = ObjectUtil.findRowIndexInDs(fileInfo, "ORGINL_FILE_NM", oriFileName);
						Map<String, Object> inFileItem = (Map<String, Object>)fileInfo.get(inFileIdx);
						
						String inFileSn = (String)inFileItem.get("FILE_SN");				// 파일 일련번호 
						
						// 파일일련번호 설정
						if(strFileSn == null){
							if(inFileSn == null){
								// 파일에 일련번호가 없고 채번된 일련번호가 없을 경우 채번
								filesSn = selectFileSn();				// 파일일련번호 채번
								strFileSn = String.valueOf(filesSn);
							}else{
								strFileSn = inFileSn;
							}
						}
						
						String inSysSeCode = (String)inFileItem.get("SYS_SE_CODE");			// 전달 시스템 구분
						String inJobSeCode = (String)inFileItem.get("JOB_SE");				// 전달 업무구분
						
//						String inOrginlFileNm = (String)inFileItem.get("ORGINL_FILE_NM");	// 전달 파일명
//						String inFileExtsn = (String)inFileItem.get("FILE_EXTSN");			// 전달 파일 확장자
						String inFileId = (String)inFileItem.get("FILE_ID");				// 전달 파일 ID
						String inFileTy = (String)inFileItem.get("FILE_TY");				// 전달 파일 타입
						
						// 저장경로 설정
						String rootPath = null;
//						String path = null;
						
						String fileStoreLoc = (String)inVar.get("fileLocation");
						fileStoreLoc = StringUtil.replace(fileStoreLoc, "/", File.separator);
								
						// RootPath 구하기
						rootPath = fileStoreLoc;//servletcontext.getRealPath("upload");
						uploadDir = rootPath + File.separator + inSysSeCode + File.separator  + inJobSeCode;
//						path = fileStoreLoc + File.separator;
						
//						System.out.println("rootPath = " + rootPath);
//						System.out.println("uploadDir = " + uploadDir);
//						System.out.println("path = " + path);
//						System.out.println("  {Upload Target Dir} 업로드 경로 = " + uploadDir);
						
						// 디렉토리생성 확인
						if(!FileUtils.isDirectory(uploadDir)){ 
							FileUtils.makeDir(uploadDir);
						}
					
//						System.out.println("  {Upload 파일} 업로드 파일 = " + oriFileName + " :: " + multiFile.getBytes().length);
						uniqueFileName = ((new UID()).toString()).replaceAll(":", "");	// 임시 파일명생성
						uniqueFileName = strFileSn +  uniqueFileName;
						
						File uploadedFile = new File(uploadDir  + File.separator + uniqueFileName);		// 임시파일명으로 파일생성
						
						multiFile.transferTo(uploadedFile);								// 파일저장
						
//						System.out.println("  {Upload 파일} 업로드 파일 저장완료");
						
						// 저장정보 구성
						Map<String, Object> fileItem = new HashMap<String, Object>();	// 업로드 파일정보
						Long mfSize = multiFile.getSize();
						long fileSize = mfSize.longValue();				// 업로드 파일사이즈
						
						// 저장 파일명 정보 설정(TBCOM_CMMN_ATCHMNFL 테이블 구조)
						// 파일 순차번호는 자동 채번
						
						fileItem.put("FILE_SN", strFileSn);				// 파일일련번호
						fileItem.put("SYS_SE_CODE", inSysSeCode);		// 시스템구분코드
						fileItem.put("JOB_SE", inJobSeCode);			// 업부구분코드
						fileItem.put("FILE_STRE_COURS", uploadDir);		// 파일저장경로
						fileItem.put("STRE_FILE_NM", uniqueFileName);	// 저장파일명
						fileItem.put("ORGINL_FILE_NM", oriFileName);	// 원본파일명
						fileItem.put("FILE_EXTSN", oriExtName);			// 파일확장자
						fileItem.put("FILE_CN", fileSize);				// 파일내용(파일ID)
						fileItem.put("FILE_MG", fileSize);				// 파일크기
						fileItem.put("USE_AT", "1");					// 사용여부
						fileItem.put("FILE_ID", inFileId);				// 파일ID
						fileItem.put("FILE_TY", inFileTy);				// 파일타입
						fileList.add(fileItem);
					}
				}
				
				saveFile = true; // 파일 저장 완료 처리
				//System.out.println("filesSn 2 === " + filesSn);
				//System.out.println("strFileSn === " + strFileSn);
				// 파일정보 DB 처리
				// 마스터 정보 처리
				int upFileListSize = fileList.size();

				int fileOrdr = -1;
				for(int i = 0; i < upFileListSize; i++){
					Map<String, Object> upFileItem = fileList.get(i);
					// 첫 행의 경우 마스터 정보에 Insert
					if(i == 0){
						if(isNewMaster)
						    baseDao.insert("insertAtchmnFileMast", upFileItem);
					}
					
					// 상세 파일순차 조회
					fileOrdr = (Integer)baseDao.select("selectFileOrdr", upFileItem);
					upFileItem.put("FILE_ORDR", fileOrdr);
						
					// 상세 정보 저장 
					baseDao.insert("insertAtchmnFile", upFileItem);
				}
				
				// 저장 파일 정모 목록 조회
				//Map<String, Object> resSchMap = new HashMap<String, Object>();
				//resSchMap.put("FILE_SN", strFileSn);
				//List<Map> resultFileList = (List<Map>)baseDao.list("selectAtchmnFileList", resSchMap);
				
				resultMap.put("FILE_SN", strFileSn);			// 파일 일련번호
				resultMap.put("FILE_ORDR", fileOrdr);			// 상세 파일순차 번호(최종)
				resultMap.put("UP_FILE_CNT", upFileListSize);	// 파일 수
				resultMap.put("UP_FILE_LIST", fileList);		// 업로드 파일 정보
				
			}catch(Exception ex){
//				System.out.println("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
				log.error("!!ERROR {" + ex.getClass().getName() + "} 파일 업로드 중 오류발생 " + ExceptionUtils.getStackTrace(ex));
				// 저장된 파일은 삭제
				log.error(" saveFile = " + saveFile);
				if(saveFile){
					int fileListSize = fileList.size();
					log.error(" Delete File Count = " + fileListSize);
					
					for(int i = 0; i < fileListSize; i++){
						Map<String, Object> item = (Map<String, Object>)fileList.get(i);
						String delStrePath = (String)item.get("FILE_STRE_COURS");
						String delFileName = (String)item.get("STRE_FILE_NM");
						String delFilePath = delStrePath + delFileName;
						FileUtils.removeFile(delFilePath);
					}
				}
				throw new NexaServiceException("err.파일.업로드.실패", ex);
			}
		}
		return resultMap;
	}
	
	// 파일첨부 시퀀스 가져오기
	public BigDecimal selectFileSn() {
		BigDecimal seqFileSn = (BigDecimal)baseDao.select("selectFileSn");	
		
		SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
		long today = System.currentTimeMillis();
		String ymd = sf.format(today);
		
		// 시퀀스 채번 서비스 호출 
		String strFileSn = ymd +""+ seqFileSn;			// 파일일련번호 = YYYYMMDD + 시퀀스
		BigDecimal fileSn = new BigDecimal(strFileSn);	// 파일일련번호
		return fileSn;
	}
	
	// 내부결재현황 목록을 조회한다. (?)
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM090200InnerSanctionSttusList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		Map smMap = null;
		
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM090200DAO.innerSanctionList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		smMap = (Map)baseDao.select("SYM090200DAO.InnerSanctionSttusSm", inMap);	
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.add(smMap);
		outDataset.put("output2", outDsMap2);
	}

    // 내부결재현황 보고서데이터오류로 정정처리 조회
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void curReprtInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("SYM090202DAO.innerSanctnReprtInfo", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		List <Map> records2 = (List<Map>)baseDao.list("SYM090203DAO.innerSanctnReprtData", inMap);
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);
	}
    
    // 내부결재현황 보고서데이터오류로 정정처리
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void updateTobeReprtInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		String HisSeq = (String)baseDao.select("SYM090200DAO.reprtUpdateSelectHisSeq", inMap);
		inMap.put("HIS_SEQ", HisSeq);
		if(baseDao.update("SYM090200DAO.reprtUpdateInsertHis", inMap)<=0){
			throw new NexaServiceException("fail.정보등록.실패", "내부결재데이터 이력생성 실패");
		}
		if(baseDao.delete("SYM090200DAO.reprtUpdateDelData", inMap)<=0){
			throw new NexaServiceException("fail.정보등록.실패", "내부결재데이터 삭제 실패");
		}
		if(baseDao.update("SYM090200DAO.reprtUpdateReprtInfo", inMap)<=0){
			throw new NexaServiceException("fail.정보등록.실패", "내부결재정보 수정 실패");
		}
		
		DataSetMap inDsMapData = (DataSetMap)inDataset.get("input2");
		for(Map map : inDsMapData.getRowMaps()){
			baseDao.insert("SYM090200DAO.insInnerSanctnReprtDataClob", map);
		}
	}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/////////													  /////////
/////////													  /////////
/////////	아래구현부는 이전개발자 구현부분으로		  /////////
/////////	삭제처리할 예정임	2016.07.13					  /////////
/////////													  /////////
/////////													  /////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

	/*
	// 내부결재ID 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void SYM090200InnerSanctionId ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		Map<String, String> oMap = (HashMap<String, String>)baseDao.select("SYM090200DAO.innerSanctionId1", inMap);	
		List <Map> records = new ArrayList<Map>();
		records.add(oMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	// 부서관리자 목록 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void SYM090200DeptManagerList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		List <Map> records;
		DataSetMap outDsMap = new DataSetMap();
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		if(inMap != null){
		    inMap.put("SANCTN_APPN_SE", "T4");
		    records = (List<Map>)baseDao.list("SYM090200DAO.DeptManagerList", inMap);	
		    outDsMap.setRowMaps(records);
		}

		outDataset.put("output1", outDsMap);
		
	}
	
	// 부서관리자 목록 조회
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void SYM090200PlList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		List <Map> records;
		DataSetMap outDsMap = new DataSetMap();
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		if(inMap != null){
			inMap.put("SANCTN_APPN_SE", "T5");
			records = (List<Map>)baseDao.list("SYM090200DAO.DeptManagerList", inMap);	
			outDsMap.setRowMaps(records);
		}
		
		
		outDataset.put("output1", outDsMap);
		
	}
    
	// 내부결재보고서 조회트랜잭션 정보 조회한다.
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM090200InnerSanctionReportInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
				

		records = (List<Map>)baseDao.list("SYM090202DAO.reportInfoList", inMap);		

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
	// 내부결재보고서 데이터 메타 정보 조회한다.
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM090200InnerSanctionReportMeta( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
				

		records = (List<Map>)baseDao.list("SYM090203DAO.reportMetaList", inMap);		

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    
	
		// 내부결재 정보를 조회한다.(최초 기안 시)
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		public void SYM090200InnerSanctionDrftInfo( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    	
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			// 버튼 정보
			List <Map> records;	
			records = (List<Map>)baseDao.list("SYM090200DAO.innerSanctionButtons", inMap);		

			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);
			
			//
			List <Map> records2;
			records2 = (List<Map>)baseDao.list("SYM090201DAO.sanctionerDrftList", inMap);	
			DataSetMap outDsMap2 = new DataSetMap();
			outDsMap2.setRowMaps(records2);
			outDataset.put("output2", outDsMap2);
			
			List <Map> records3;
			records3 = (List<Map>)baseDao.list("SYM090201DAO.LastInnerSanctionDtl", inMap);	
			DataSetMap outDsMap3 = new DataSetMap();
			outDsMap3.setRowMaps(records3);
			outDataset.put("output3", outDsMap3);
			
			List <Map> records4;
			records4 = (List<Map>)baseDao.list("SYM090201DAO.NextSantnStepInfo", inMap);	
			DataSetMap outDsMap4 = new DataSetMap();
			outDsMap4.setRowMaps(records4);
			outDataset.put("output4", outDsMap4);
			
		}
    
		// 내부결재 기안 저장
		@SuppressWarnings({ "rawtypes", "unchecked" })
		
		public int SYM090200SaveDrft( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

	        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1"); // 내부결재마스터
			DataSetMap list = (DataSetMap) inDataset.get("input2");   // 내부결재자
			DataSetMap list3 = (DataSetMap) inDataset.get("input3");  // 내부결재내역
			DataSetMap list4 = (DataSetMap) inDataset.get("input4");  // 레포트정보
			DataSetMap list5 = (DataSetMap) inDataset.get("input5");  // 레포트 조회 데이터 메타 정보
			
			int iRow = 0;
	       
			
	        int intSize0 = (inDsMap == null) ? 0 : inDsMap.size();
	        
	        if(intSize0 > 0){
	        	Map inMap = null;
	        	if (inDsMap != null)
					inMap = inDsMap.get(0);
	        	
				int rowType = -1;
				if(inMap != null)
				    rowType = ((Integer) inMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				switch(rowType) {
				    case DataSet.ROW_TYPE_INSERTED :
					    baseDao.insert("SYM090200DAO.insertInnerSanctionMaster", inMap);
					    break;
				    case DataSet.ROW_TYPE_UPDATED :
				    	iRow += baseDao.update("SYM090200DAO.processInnerSanction", inMap);

					    break;
				    default:
			        	break; 
			    }
				
	        }
			

			int listSize = (list == null) ? 0 : list.size();
			
			// 내부결재자  저장
			for (int x = 0; x < listSize; x++) {
				Map map = list.get(x);
				baseDao.insert("SYM090201DAO.insertInnerSanctioner", map);  // MERGE
			}
			
			// 결재내역 저장	TBCOM_INNER_SANCTN_DTLS
           
			int intSize3 = (list3 == null) ? 0 : list3.size();
			if(intSize3 > 0){
				for (int y = 0; y < intSize3; y++) {
				    Map map3 = list3.get(y);	
				    int rowType = ((Integer) map3.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				    switch(rowType){
			            case DataSet.ROW_TYPE_INSERTED :
				            baseDao.insert("SYM090201DAO.insertInnerSanctionDtl", map3);
				            break;
			            case DataSet.ROW_TYPE_UPDATED :
			        	    baseDao.insert("SYM090201DAO.updateInnerSanctionDtl", map3);
			        	    break;
			            default:
				        	break;
				    }
				}
			}
			
		    
			
			// 다음결재단계 다음결재자 정보 업데이트
			if(intSize0 > 0){
	        	Map inMap = null;
	        	if (inDsMap != null)
					inMap = inDsMap.get(0);
	        	    iRow += baseDao.update("SYM090200DAO.updateNextSanctionerInfo", inMap);
			}
			
			
			int listSize4 = (list4 == null) ? 0 : list4.size();
			if(listSize4 > 0){
				for (int y = 0; y < listSize4; y++) {
					Map map4 = list4.get(y);
					baseDao.insert("SYM090202DAO.insertReportInfo", map4);  // merge
				}
			}
			
			
			int listSize5 = (list5 == null) ? 0 : list5.size();
			if(listSize4 > 0 && listSize5>0) {
				for (int z = 0; z < listSize5; z++) {
					Map map5 = list5.get(z);
					int rowType = ((Integer) map5.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
					switch(rowType){
				        case DataSet.ROW_TYPE_INSERTED :
					        baseDao.insert("SYM090203DAO.insertReportMeta", map5);
					        break;
				        case DataSet.ROW_TYPE_UPDATED :
				        	baseDao.insert("SYM090203DAO.updateReportMeta", map5);
				        	break;
				        default:
				        	break;
					}
				}
			}
			
			//후처리 프로세스 호출( POSPROC_AT = '1')
			

          Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			// 버튼 정보
			List <Map> records;	
			records = (List<Map>)baseDao.list("SYM090201DAO.InnerSanctionProcessInfo", inMap);
			DataSetMap inDsMap99 = new DataSetMap();
			inDsMap99.setRowMaps(records);
			inDataset.put("input99", inDsMap99);
			int size = (records == null) ? 0 : records.size();
			if(size>0){
				Map rsltMap = records.get(0);
				String posprocAt = "0";
				posprocAt = (String)rsltMap.get("POSPROC_AT");
				if("1".equals(posprocAt)){
					String sanctnStts = (String)rsltMap.get("LAST_SANCTN_STTUS");
					if("S01".equals(sanctnStts) || "S03".equals(sanctnStts) || "T03".equals(sanctnStts) || "T04".equals(sanctnStts)
					    || "T07".equals(sanctnStts) || "T08".equals(sanctnStts) || "T09".equals(sanctnStts) 
						|| "T11".equals(sanctnStts) || "T12".equals(sanctnStts) || "T13".equals(sanctnStts) 
						|| "T15".equals(sanctnStts) || "T16".equals(sanctnStts)	){
//						String className = (String)rsltMap.get("POSPROC_CLASS");
//						String methodName = (String)rsltMap.get("POSPROC_OPRTIN_NM");
					    
						// InvocationTargetException의 cause가 null로 반환되는 것을 방지하기 위해 baseDao를 아규먼트로 넘겨준다.
						// hsco.com.sym.ism.SYM090200.hsco.com.sym.ism.SYM090200  SYM090200Test 호출
//						InnerSanctionPostProcessor.postProcess(className, methodName, baseDao, tranInfo, inVar, inDataset, outVar, outDataset);  
						// hsco.com.sym.ism.SYM090200.hsco.com.sym.ism.SYM090200   SYM090200Test2 호출
						// InnerSanctionPostProcessor.postProcess(className, methodName, baseDao, rsltMap, outDataset);  
					}
					
				}
			}				
			return iRow;
			
		}
		
		//내부결재 정보를 조회한다.
		@SuppressWarnings({ "unchecked", "rawtypes" })
		public void SYM090200InnerSaction( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    	
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null){
				inMap = inDsMap.get(0);
			}
			// 버튼 정보
			List <Map> records;	
			records = (List<Map>)baseDao.list("SYM090200DAO.innerSanctionButtons", inMap);		

			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);
			
			// 내부결재 master 조회
			List <Map> records2;
			records2 = (List<Map>)baseDao.list("SYM090201DAO.SanctionMasterInfo", inMap);	
			DataSetMap outDsMap2 = new DataSetMap();
			outDsMap2.setRowMaps(records2);
			outDataset.put("output2", outDsMap2);
			
			// 결재단계별 내역 목록 조회
			List <Map> records3;
			records3 = (List<Map>)baseDao.list("SYM090201DAO.SanctionStepsDtl", inMap);	
			DataSetMap outDsMap3 = new DataSetMap();
			outDsMap3.setRowMaps(records3);
			outDataset.put("output3", outDsMap3);
			
			// report parameter
			List <Map> records4;
			records4 = (List<Map>)baseDao.list("SYM090202DAO.reportInfoList", inMap);	
			DataSetMap outDsMap4 = new DataSetMap();
			outDsMap4.setRowMaps(records4);
			outDataset.put("output4", outDsMap4);
			
			// report info
			List <Map> records5;
			records5 = (List<Map>)baseDao.list("SYM090203DAO.reportMetaList", inMap);	
			DataSetMap outDsMap5 = new DataSetMap();
			outDsMap5.setRowMaps(records5);
			outDataset.put("output5", outDsMap5);
			
			List <Map> records6;
			records6 = (List<Map>)baseDao.list("SYM090201DAO.LastInnerSanctionDtl", inMap);	
			DataSetMap outDsMap6 = new DataSetMap();
			outDsMap6.setRowMaps(records6);
			outDataset.put("output6", outDsMap6);
			
			//결재자 목록 조회
			
			List <Map> records7;
			records7 = (List<Map>)baseDao.list("SYM090201DAO.InnerSanctionerList", inMap);	
			DataSetMap outDsMap7 = new DataSetMap();
			outDsMap7.setRowMaps(records7);
			outDataset.put("output7", outDsMap7);
			
			List <Map> records8;
			records8 = (List<Map>)baseDao.list("SYM090201DAO.NextSantnStepInfo", inMap);	
			DataSetMap outDsMap8 = new DataSetMap();
			outDsMap8.setRowMaps(records8);
			outDataset.put("output8", outDsMap8);
		}
		

		
		// 후처리 테스트용
		@SuppressWarnings({ "unchecked", "rawtypes" })
		public void SYM090200Test( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
            DataSetMap inDsMap = (DataSetMap)inDataset.get("input99");
			Map sanctnInfo = null;
			
			if (inDsMap != null)
				sanctnInfo = inDsMap.get(0);

			List <Map> records99;
	     	if(sanctnInfo != null){
	     		records99 = (List<Map>) baseDao.list("SYM090201DAO.SanctionMasterInfo", sanctnInfo);
		     	DataSetMap outDsMap99 = new DataSetMap();
		     	outDsMap99.setRowMaps(records99);
		     	outDataset.put("output99", outDsMap99);
	     	}
			    
		}
		
		
		
		
	    // 첨부파일을 업로드하고 공통 첨부파일정보에 저장한 정보를 반환한다.
	    @SuppressWarnings({"rawtypes", "unchecked" })
	    public void fileUpload(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    	
	    	// 파일 첨부확인
	    	DataSetMap fileInfo = (DataSetMap)inDataset.get("inputFile");
	    	Map<String, Object> upResult = null;
	    	if(fileInfo != null){
	    		
	    		NexacroMapDTO xpDto = getXpDto();
	    		setFileLocation(getFileLocation());
	    		
	    		upResult = (Map<String, Object>)uploadSingleFileinfo(xpDto);
	    		
	    		List<Map> resultList = (List<Map>)upResult.get("UP_FILE_LIST");
	    		
	    		DataSetMap outDsMap = new DataSetMap();
	    		outDsMap.setRowMaps(resultList);
	    		outDataset.put("fileList", outDsMap);
	    		
	    	}else{
	    		throw new NexaServiceException("err.파일.업로드.정보없음");
	    	}
	    }
	    
		// 내부결재 첨부파일 리스트
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		public void sancSelectAtchmnFileList( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records = new ArrayList<Map>();

			if (inMap != null) {
				records = (List<Map>)baseDao.list("SYM090203DAO.sancSelectAtchmnFileList", inMap);
			} 
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}
*/
}