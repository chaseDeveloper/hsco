package hsco.pms.sls.hou.ctr.SLS020400;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020400ServiceImpl.java
 * @Description  	: 
 * @author       	: 변승우
 * @since        	: 2015. 9. 03.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 9. 03.	변승우			최초생성
 *  2016.02. 26.	이상준			수정보완				
 * </pre>
 */
@Service("SLS020400Service")
public class SLS020400ServiceImpl extends BaseService implements SLS020400Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
	
    /**
   	 * 토지별 민원서류 목록 및  토지계약자 납부정보, 발급이력 조회
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return void
   	 * @throws NexaServiceException
   	 */
   	@SuppressWarnings({ "unchecked", "rawtypes" })
   	public void selectIssuDtlsAllList( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {

   		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
   		Map inMap = null;

   		if (inDsMap != null)
   			inMap = inDsMap.get(0);

   		List<Map> resFormatList 	= null;		// 서식목록
   		List<Map> resFormatLogList	= null;		// 발급이력목록
   		List<Map> resPayInfoList 	= null;		// 납부내역
   		
   		// 민원서류 목록 - JOB_SE, JOB_KEY
   		resFormatList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatList", inMap);
   		
   		// 발급이력 - JOB_SE, JOB_KEY, CNTRCTR_NO, FORMAT_SE(01)
   		resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", inMap);
   		
   		// 납부내역 - CNTRCTR_NO, LTTOT_RENT_SE
   		resPayInfoList = (List<Map>)baseDao.list("SLS020400DAO.selectPayInfoList", inMap);

   		// 반환 데이터셋 구성
   		DataSetMap outDsFormatMap = new DataSetMap();
   		outDsFormatMap.setRowMaps(resFormatList);
   		
   		DataSetMap outDsFormatLogMap = new DataSetMap();
   		outDsFormatLogMap.setRowMaps(resFormatLogList);
   		
   		DataSetMap outDsPayInfoMap = new DataSetMap();
   		outDsPayInfoMap.setRowMaps(resPayInfoList);
   		
   		outDataset.put("issuFormatList", 	outDsFormatMap);
   		outDataset.put("issuFormatLogList", outDsFormatLogMap);
   		outDataset.put("payInfoList", 		outDsPayInfoMap);
   	}
   	
	/**
	 * 분양확인서 조회 [C01], 수납확인서 조회 [C02]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectFormListC01( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		//==============================================================================================
		// [BEGIN] 이력저장처리
		String inIssuLogYn 	= (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog 	= inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage 	= ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId 		= null;
				String exMsgAdd 	= null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId 		= "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd 		= "서식 발급정보";
				}else{
					exMsgId 		= "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		//==============================================================================================
		
		List <Map> records;
		records = (List<Map>)baseDao.list("SLS020400DAO.selectFormListC01", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		//==============================================================================================
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", 		inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", 		inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", 	inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", 	inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		//==============================================================================================
	}
	
	/**
	 * 입주예정확인서 조회 [C03], 입주확인서 조회 [C04]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectFormListC03( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		//==============================================================================================
		// [BEGIN] 이력저장처리
		String inIssuLogYn 	= (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog 	= inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage 	= ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId 		= null;
				String exMsgAdd 	= null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId 		= "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd 		= "서식 발급정보";
				}else{
					exMsgId 		= "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		//==============================================================================================
		
		List <Map> records;
		records = (List<Map>)baseDao.list("SLS020400DAO.selectFormListC03", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		//==============================================================================================
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", 		inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", 		inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", 	inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", 	inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		//==============================================================================================
	}
	
	/**
	 * 임대료 임대료수납대장 조회 [C05] (임대료 납부증명서)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectFormListC05( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		//==============================================================================================
		// [BEGIN] 이력저장처리
		String inIssuLogYn 	= (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog 	= inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage	= ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId 		= null;
				String exMsgAdd 	= null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId 		= "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd 		= "서식 발급정보";
				}else{
					exMsgId 		= "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		//==============================================================================================
		
		Map reportInfo = null;			// 입대료 납부증명서 내용
		List<Map> reportSubList = null;	// 임대료 수납내역

		// 임대료 납부증명서 내용 - CNTRCTR_NO
		reportInfo = (Map)baseDao.select("SLS020400DAO.selectFormInfoC05", inMap);
		
		// 임대료 수납내역 - CNTRCTR_NO, RNTCHRG_YM_FM, RNTCHRG_YM_TO
		reportSubList = (List<Map>)baseDao.list("SLS020400DAO.selectFormListC05", inMap);

		DataSetMap outDsInfoMap = new DataSetMap();
		outDsInfoMap.add(reportInfo);
		
		DataSetMap outDsSubListMap = new DataSetMap();
		outDsSubListMap.setRowMaps(reportSubList);
		
		outDataset.put("reportInfo", outDsInfoMap);
		outDataset.put("reportSubList", outDsSubListMap);
		
		//==============================================================================================
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", 		inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", 		inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", 	inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", 	inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		//==============================================================================================
	}

	/**
	 * 임대료 납부확인서 조회 [C06]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectFormListC06( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		//==============================================================================================
		// [BEGIN] 이력저장처리
		String inIssuLogYn 	= (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog 	= inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage 	= ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId 		= null;
				String exMsgAdd 	= null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId 		= "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd 		= "서식 발급정보";
				}else{
					exMsgId 		= "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		//==============================================================================================
		
		List <Map> records;
		records = (List<Map>)baseDao.list("SLS020400DAO.selectFormListC06", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		//==============================================================================================
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", 		inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", 		inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", 	inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", 	inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		//==============================================================================================
	}

	/**
	 * 임대계약서 조회 [C08]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectFormListC08( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		//==============================================================================================
		// [BEGIN] 이력저장처리
		String inIssuLogYn 	= (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog 	= inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage 	= ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId 		= null;
				String exMsgAdd 	= null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId 		= "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd 		= "서식 발급정보";
				}else{
					exMsgId 		= "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		//==============================================================================================
		
		List <Map> records, cprs;
		records = (List<Map>)baseDao.list("SLS020400DAO.selectFormListC08", inMap);
		cprs = (List<Map>)baseDao.list("PMS000000DAO.cprInfoList", inMap);		
	
		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);

		DataSetMap outDsMap2 = new DataSetMap();		
		outDsMap2.setRowMaps(cprs);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
		
		//==============================================================================================
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", 		inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", 		inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", 	inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", 	inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		//==============================================================================================
	}	
	/**
	 * 임대해약확인서 조회 [C10]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectFormListC10( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		//==============================================================================================
		// [BEGIN] 이력저장처리
		String inIssuLogYn 	= (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog 	= inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage 	= ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId 		= null;
				String exMsgAdd 	= null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId 		= "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd 		= "서식 발급정보";
				}else{
					exMsgId 		= "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		//==============================================================================================
		
		List <Map> records;
		records = (List<Map>)baseDao.list("SLS020400DAO.selectFormListC10", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		//==============================================================================================
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", 		inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", 		inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", 	inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", 	inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		//==============================================================================================
	}

	/**
	 * 부동산거래신고서 조회 [C11]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectFormListC11( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		//==============================================================================================
		// [BEGIN] 이력저장처리
		String inIssuLogYn 	= (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog 	= inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage 	= ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId 		= null;
				String exMsgAdd 	= null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId 		= "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd 		= "서식 발급정보";
				}else{
					exMsgId 		= "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		//==============================================================================================
		
		List <Map> records;
		records = (List<Map>)baseDao.list("SLS020400DAO.selectFormListC11", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		//==============================================================================================
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", 		inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", 		inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", 	inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", 	inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		//==============================================================================================
	}
	
	/**
	 * 주택임대차계약갱신확인서 조회 [C12]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectFormListC12( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		//==============================================================================================
		// [BEGIN] 이력저장처리
		String inIssuLogYn 	= (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog 	= inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage 	= ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId 		= null;
				String exMsgAdd 	= null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId 		= "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd 		= "서식 발급정보";
				}else{
					exMsgId 		= "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		//==============================================================================================
		
		Map reportInfo = null;			
		List<Map> reportSubList = null;	

		reportInfo = (Map)baseDao.select("SLS020400DAO.selectFormInfoC12", inMap);
		
		reportSubList = (List<Map>)baseDao.list("SLS020400DAO.selectFormListC12", inMap);

		DataSetMap outDsInfoMap = new DataSetMap();
		outDsInfoMap.add(reportInfo);
		
		DataSetMap outDsSubListMap = new DataSetMap();
		outDsSubListMap.setRowMaps(reportSubList);
		
		outDataset.put("reportInfo", outDsInfoMap);
		outDataset.put("reportSubList", outDsSubListMap);

		
		//==============================================================================================
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", 		inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", 		inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", 	inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", 	inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		//==============================================================================================
	}	
}
