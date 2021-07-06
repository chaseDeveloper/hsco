package hsco.pms.sls.lad.ctr.SLS080500;

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
 * @Class Name   	: SLS080500ServiceImpl.java
 * @Description  	: 
 * @author       	: 김시영
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자			내용
 * ------------------------------------------------------------------
 *  2016.02.16.		이상준			Re Work
 * </pre>
 */
@Service("SLS080500Service")
public class SLS080500ServiceImpl extends BaseService implements SLS080500Service {

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

		List<Map> resFormatList = null;		// 서식목록
		List<Map> resFormatLogList = null;	// 발급이력목록
		List<Map> resPayInfoList = null;	// 분양납부내역
		Map resEtcInfo = null;				// 토지계약자 기타정보(압류, 대출, 소유권)
		
		// 민원서류 목록 - JOB_SE, JOB_KEY
		resFormatList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatList", inMap);
		
		// 발급이력 - JOB_SE, JOB_KEY, CNTRCTR_NO, FORMAT_SE(01)
		resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", inMap);
		
		// 분양납부내역 - CNTRCTR_NO, LTTOT_RENT_SE(S)
		resPayInfoList = (List<Map>)baseDao.list("SLS080500DAO.selectPayInfoList", inMap);
		
		// 토지계약자 기타정보(압류, 대출, 소유권) 조회 - CNTRCTR_NO
		resEtcInfo = (Map)baseDao.select("SLS000000DAO.selectLcntrctrEtcInfo", inMap);

		// 반환 데이터셋 구성
		DataSetMap outDsFormatMap = new DataSetMap();
		outDsFormatMap.setRowMaps(resFormatList);
		
		DataSetMap outDsFormatLogMap = new DataSetMap();
		outDsFormatLogMap.setRowMaps(resFormatLogList);
		
		DataSetMap outDsPayInfoMap = new DataSetMap();
		outDsPayInfoMap.setRowMaps(resPayInfoList);
		
		DataSetMap outDsEtcInfoMap = new DataSetMap();
		outDsEtcInfoMap.add(resEtcInfo);

		outDataset.put("issuFormatList", outDsFormatMap);
		outDataset.put("issuFormatLogList", outDsFormatLogMap);
		outDataset.put("payInfoList", outDsPayInfoMap);
		outDataset.put("etcInfo", outDsEtcInfoMap);
	}
	
	// [BEGIN] 레포트 출력용 데이터 조회 ========================================
	
	/**
	 * A01 부동산거래계약신고서 내용(신고서, 별지) 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportA01( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportA01Info = null;			// 부동산거래계약신고서 내용
		List<Map> reportA01SubList = null;	// 부동산거래계약신고서 별지 목록
		
		// 부동산거래계약신고서 내용 - CNTRCTR_NO
		reportA01Info = (Map)baseDao.select("SLS080500DAO.selectReportA01Info", inMap);
		
		// 부동산거래계약신고서 별지 목록 - CNTRCTR_NO
		reportA01SubList = (List<Map>)baseDao.list("SLS080500DAO.selectReportA01SubList", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportA01Map = new DataSetMap();
		outDsReportA01Map.add(reportA01Info);
		
		DataSetMap outDsReportA01SubMap = new DataSetMap();
		outDsReportA01SubMap.setRowMaps(reportA01SubList);

		outDataset.put("reportA01Info", outDsReportA01Map);
		outDataset.put("reportA01SubList", outDsReportA01SubMap);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C01 토지분양 확인서 내용 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC01( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportC01Info = null;			// 토지분양 확인서 내용
		
		// 토지분양 확인서 내용 - CNTRCTR_NO
		reportC01Info = (Map)baseDao.select("SLS080500DAO.selectReportC01Info", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC01Map = new DataSetMap();
		outDsReportC01Map.add(reportC01Info);

		outDataset.put("reportC01Info", outDsReportC01Map);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C02 사실확인서 내용 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC02( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리

		Map reportC02Info = null;			//사실 확인서 내용
		
		// 사실 확인서 내용 - CNTRCTR_NO
		reportC02Info = (Map)baseDao.select("SLS080500DAO.selectReportC02Info", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC02Map = new DataSetMap();
		outDsReportC02Map.add(reportC02Info);

		outDataset.put("reportC02Info", outDsReportC02Map);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C03  위임장(소유권이전) 내용 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC03( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportC03Info = null;			// 부동산 및 등기의무자 정보
		Map reportC03AddInfo = null;		// 부등기권리자 정보
		
		// 위임장(소유권이전) - 부동산 및 등기의무자 정보 - CNTRCTR_NO, ISSU_OFC
		reportC03Info = (Map)baseDao.select("SLS080500DAO.selectReportC03Info", inMap);
		
		// 위임장(소유권이전) - 부등기권리자정보 조회 - CNTRCTR_NO, COCNR_CNT
		if(reportC03Info != null)
		{
			reportC03AddInfo = (Map)baseDao.select("SLS080500DAO.selectReportC03AddInfo", reportC03Info);
		
			String cstmrNm1 = reportC03AddInfo == null ? "" : (String)reportC03AddInfo.get("CSTMR_NM1");
		    String cstmrAdres1 = reportC03AddInfo == null ? "" : (String)reportC03AddInfo.get("CSTMR_ADRES1");
		    String cstmrNm2 = reportC03AddInfo == null ? "" : (String)reportC03AddInfo.get("CSTMR_NM2");
		    String cstmrAdres2 = reportC03AddInfo == null ? "" : (String)reportC03AddInfo.get("CSTMR_ADRES2");
			
		    reportC03Info.put("CSTMR_NM1", cstmrNm1);
		    reportC03Info.put("CSTMR_ADRES1", cstmrAdres1);
		    reportC03Info.put("CSTMR_NM2", cstmrNm2);
		    reportC03Info.put("CSTMR_ADRES2", cstmrAdres2);
		}
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC03Map = new DataSetMap();
		outDsReportC03Map.add(reportC03Info);

		outDataset.put("reportC03Info", outDsReportC03Map);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C04 환매특약말소등기신청 내용 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC04( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportC04Info = null;			// 환매특약말소등기신청 내용
		
		// 환매특약말소등기신청 내용 - CNTRCTR_NO
		reportC04Info = (Map)baseDao.select("SLS080500DAO.selectReportC04Info", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC04Map = new DataSetMap();
		outDsReportC04Map.add(reportC04Info);

		outDataset.put("reportC04Info", outDsReportC04Map);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C05 위임장_환매권말소 내용 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC05( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportC05Info = null;			// 위임장_환매권말소 내용 
		
		// 위임장_환매권말소 내용 - CNTRCTR_NO, ISSU_OFC
		reportC05Info = (Map)baseDao.select("SLS080500DAO.selectReportC05Info", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC05Map = new DataSetMap();
		outDsReportC05Map.add(reportC05Info);

		outDataset.put("reportC05Info", outDsReportC05Map);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C06 해지증서_환매특약 내용 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC06( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportC06Info = null;			// 해지증서_환매특약 내용
		
		// 해지증서_환매특약 내용 - CNTRCTR_NO
		reportC06Info = (Map)baseDao.select("SLS080500DAO.selectReportC06Info", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC06Map = new DataSetMap();
		outDsReportC06Map.add(reportC06Info);

		outDataset.put("reportC06Info", outDsReportC06Map);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C07  추천서 내용 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC07( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportC07Info = null;			// 분양대상자 정보
		Map reportC07AddInfo = null;		// 입금(가상)계좌 정보
		List<Map> reportC07SubList = null;	// 납부시기 정보 목록
		
		// 분양대상자 정보 조회 - CNTRCTR_NO
		reportC07Info = (Map)baseDao.select("SLS080500DAO.selectReportC07Info", inMap);
		
		// 입금(가상)계좌 정보 조회 - CNTRCTR_NO
		if(reportC07Info != null)
		{
			reportC07AddInfo = (Map)baseDao.select("SLS080500DAO.selectReportC07AddInfo", inMap);
		
			String bank1 = reportC07AddInfo == null ? "" : (String)reportC07AddInfo.get("BANK1");
			String bank2 = reportC07AddInfo == null ? "" : (String)reportC07AddInfo.get("BANK2");
			String bank3 = reportC07AddInfo == null ? "" : (String)reportC07AddInfo.get("BANK3");
			String bank4 = reportC07AddInfo == null ? "" : (String)reportC07AddInfo.get("BANK4");
			String bank5 = reportC07AddInfo == null ? "" : (String)reportC07AddInfo.get("BANK5");
			String bank6 = reportC07AddInfo == null ? "" : (String)reportC07AddInfo.get("BANK6");
			
			reportC07Info.put("BANK1", bank1);
			reportC07Info.put("BANK2", bank2);
			reportC07Info.put("BANK3", bank3);
			reportC07Info.put("BANK4", bank4);
			reportC07Info.put("BANK5", bank5);
			reportC07Info.put("BANK6", bank6);
		}
		
		// 납부시기 정보 목록 조회 - CNTRCTR_NO
		reportC07SubList = (List<Map>)baseDao.list("SLS080500DAO.selectReportC07SubList", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC07Map = new DataSetMap();
		outDsReportC07Map.add(reportC07Info);
		
		DataSetMap outDsReportC07SubMap = new DataSetMap();
		outDsReportC07SubMap.setRowMaps(reportC07SubList);

		outDataset.put("reportC07Info", outDsReportC07Map);
		outDataset.put("reportC07SubList", outDsReportC07SubMap);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C08 청구서 내용 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC08( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportC08Info = null;			// 청구서 내용
		
		// 청구서 내용 - CNTRCTR_NO
		reportC08Info = (Map)baseDao.select("SLS080500DAO.selectReportC08Info", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC08Map = new DataSetMap();
		outDsReportC08Map.add(reportC08Info);

		outDataset.put("reportC08Info", outDsReportC08Map);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C09 토지사용승낙서 내용 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC09( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportC09Info = null;			// 토지의 표시 내용
		List<Map> reportC09SubList = null;	// 토지사용자 목록
		
		// 토지의 표시 내용 - CNTRCTR_NO
		reportC09Info = (Map)baseDao.select("SLS080500DAO.selectReportC09Info", inMap);
		
		// 토지사용자 목록 - CNTRCTR_NO
		reportC09SubList = (List<Map>)baseDao.list("SLS080500DAO.selectReportC09SubList", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC09Map = new DataSetMap();
		outDsReportC09Map.add(reportC09Info);
		
		DataSetMap outDsReportC09SubMap = new DataSetMap();
		outDsReportC09SubMap.setRowMaps(reportC09SubList);

		outDataset.put("reportC09Info", outDsReportC09Map);
		outDataset.put("reportC09SubList", outDsReportC09SubMap);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C10 공유자 명부 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC10( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		List<Map> reportC10List = null;			// 공유자명부 목록
		
		// 공유자 명부 목록 - CNTRCTR_NO
		reportC10List = (List<Map>)baseDao.list("SLS080500DAO.selectReportC10List", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC10Map = new DataSetMap();
		outDsReportC10Map.setRowMaps(reportC10List);

		outDataset.put("reportC10List", outDsReportC10Map);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C11 확인서 내용 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC11( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportC11Info = null;			// 확인서 내용
		
		// 청구서 내용 - CNTRCTR_NO
		reportC11Info = (Map)baseDao.select("SLS080500DAO.selectReportC11Info", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC11Map = new DataSetMap();
		outDsReportC11Map.add(reportC11Info);

		outDataset.put("reportC11Info", outDsReportC11Map);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	/**
	 * C12 계약체결결의서 내용 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void selectReportC12( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// [BEGIN] 이력저장처리
		String inIssuLogYn = (String)inMap.get("ISSU_LOG_YN");	// 이력저장여부
		boolean runIssuLog = inIssuLogYn == null ? false : ("Y".equals(inIssuLogYn) ? true : false);
		boolean succIssuLog = false;
		if(runIssuLog){
			try{
				// 서식 발급이력 저장
				baseDao.insert("COM000000DAO.insertIssuFormatLog", inMap);
				succIssuLog = true;
			}catch(Exception ex){
				String exMessage = ExceptionUtils.getRootCauseMessage(ex);
				String exMsgId = null;
				String exMsgAdd = null;
				if(exMessage.indexOf("ORA-00001") != -1){
					exMsgId = "info.항목.중복";	// {0}가 중복되었습니다.
					exMsgAdd = "서식 발급정보";
				}else{
					exMsgId = "fail.저장.실패";	// 저장에 실패하였습니다.
				}
				throw new NexaServiceException(exMsgId, exMsgAdd);
			}
		}
		// [ END ] 이력저장처리
		
		Map reportC12Info = null;			// 계약체결결의서 내용
		
		// 계약체결결의서 내용 - CNTRCTR_NO
		reportC12Info = (Map)baseDao.select("SLS080500DAO.selectReportC12Info", inMap);
		
		// 반환 데이터셋 구성
		DataSetMap outDsReportC12Map = new DataSetMap();
		outDsReportC12Map.add(reportC12Info);

		outDataset.put("reportC12Info", outDsReportC12Map);
		
		// [BEGIN] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
		if(runIssuLog && succIssuLog){
			
			List<Map> resFormatLogList = null;	// 발급이력목록
			
			Map<String, Object> logParamMap = new HashMap<String, Object>();
			logParamMap.put("JOB_SE", inMap.get("JOB_SE"));
			logParamMap.put("JOB_KEY", inMap.get("JOB_KEY"));
			logParamMap.put("FORMAT_SE", inMap.get("FORMAT_SE"));
			logParamMap.put("CNTRCTR_NO", inMap.get("CNTRCTR_NO"));
			
			resFormatLogList = (List<Map>)baseDao.list("COM000000DAO.selectIssuFormatLogList", logParamMap);
			
			DataSetMap outDsFormatLogMap = new DataSetMap();
			outDsFormatLogMap.setRowMaps(resFormatLogList);
			
			outDataset.put("issuFormatLogList", outDsFormatLogMap);
		}
		// [ END ] 발급로그 목록 재조회 - 발급로그 저장 및 저장 완료시
	}
	
	// [ END ] 레포트 출력용 데이터 조회 ========================================
}
