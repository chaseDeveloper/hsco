package hsco.mis.acc.ACC020203;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.messenger.UcMessengerServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;
import hsco.mis.mis.MIS000000.MIS000000ServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC020203ServiceImpl.java
 * @Description  	: 지출결의등록을 관리하는 ServiceImpl 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 20.	이상명		최초생성
 * </pre>  
 */
@Service("acc020203Service")
public class ACC020203ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC020203ServiceImpl.class);
	
	@Resource(name = "MIS000000Service")
	MIS000000ServiceImpl MIS000000ServiceImpl;
	
	@Resource(name = "UcMessengerService")
	UcMessengerServiceImpl ucMessengerService;
	
	private final static String STR_DSN_MASTR 				= "DSNMASTR";
	
	/**
	 * 신규 결의서 저장 후 결의번호를 넣어줄 QUERY ID를 담고있는 Map 
	 */
	private final static Map<String,String> MAP_DECSN_NO_QUERY = new HashMap<String,String>();
	static {
		MAP_DECSN_NO_QUERY.put("ASS010600"			, "ASS010600DAO.updateDecsnNo");			// 물품수급계획 구입과지출결의
		MAP_DECSN_NO_QUERY.put("ASS010800"			, "ASS010800DAO.updateDecsnNo");			// 물품수급계획실행 지출결의
		MAP_DECSN_NO_QUERY.put("CMP040200"			, "CMP040200DAO.updateRwmnyPymntExpndtr");	// 보상금청구
		MAP_DECSN_NO_QUERY.put("CUS010108"			, "CUS010108DAO.updateExpndtrDecsnNo");		// 고객방문평가카드지출관리
		MAP_DECSN_NO_QUERY.put("CUS010207"			, "CUS010207DAO.updateExpndtrDecsnNo");		// 고객모니터단지출관리
		MAP_DECSN_NO_QUERY.put("CUS010208"			, "CUS010208DAO.updateExpndtrDecsnNo");		// 직원칭찬지출
		MAP_DECSN_NO_QUERY.put("CUS010209"			, "CUS010209DAO.updateExpndtrDecsnNo");		// 고객제안지출
		MAP_DECSN_NO_QUERY.put("FUN020301"			, "FUN020301DAO.updateExpndtrDecsnNo");		// 공사채이자지급
		MAP_DECSN_NO_QUERY.put("FUN020301_2"		, "FUN020301DAO.updateExpndtrDecsnNo2");	// 공사채원리금지급
		MAP_DECSN_NO_QUERY.put("HRM070205"			, "HRM070205DAO.updateExpndtrDecsnNo");		// 공무 국외연수명령 및 비용지출
		MAP_DECSN_NO_QUERY.put("HRM070206"			, "HRM070206DAO.updateBsrpDecsnNo");		// 출장비정산
		MAP_DECSN_NO_QUERY.put("HRM080306"			, "HRM080306DAO.updateEdcDecsnNo");			// 교육비정산
		MAP_DECSN_NO_QUERY.put("CTR030600"			, "CTR030600DAO.updateCntrctDecsnNo");		// 계약대가지급
		MAP_DECSN_NO_QUERY.put("LAW010103"			, "LAW010103DAO.updateExpndtrDecsnNo");		// 변호사비용지출관리
		MAP_DECSN_NO_QUERY.put("RNT01030100_P03"	, "RNT01030500DAO.updateExpndtrDecsnNo");	// 영구 자격변경_보증금청구
		MAP_DECSN_NO_QUERY.put("RNT01030100_P05"	, "RNT01030700DAO.updateExpndtrDecsnNo");	// 영구 동호변경_보증금청구
		MAP_DECSN_NO_QUERY.put("RNT01030100_P06"	, "RNT01030400DAO.updateExpndtrDecsnNo");	// 영구 해약처리_보증금청구
		MAP_DECSN_NO_QUERY.put("RNT01030400"		, "RNT01030400DAO.updateExpndtrDecsnNo");	// 영구임대보증금 청구
		MAP_DECSN_NO_QUERY.put("RNT02030100_P03"	, "RNT02030500DAO.updateExpndtrDecsnNo");	// 매입 자격변경_보증금청구
		MAP_DECSN_NO_QUERY.put("RNT02030100_P05"	, "RNT02030700DAO.updateExpndtrDecsnNo");	// 매입 동호변경_보증금청구
		MAP_DECSN_NO_QUERY.put("RNT02030100_P06"	, "RNT02030400DAO.updateExpndtrDecsnNo");	// 매입 해약처리_보증금청구
		MAP_DECSN_NO_QUERY.put("RNT030408"			, "RNT030408DAO.updateExpndtrDecsnNo");		// 전세임대 과오납 처리
		MAP_DECSN_NO_QUERY.put("RNT030301"			, "RNT030301DAO.updateExpndtrDecsnNo");		// 전세임대 지원금,중개수수료 지출결의
		MAP_DECSN_NO_QUERY.put("SLS020102"			, "SLS020102DAO.updateExpndtrDecsnNo");		// 주택해약
		MAP_DECSN_NO_QUERY.put("SLS040301"			, "SLS040301DAO.updateExpndtrDecsnNo");		// 주택 과오납금액 청구
		MAP_DECSN_NO_QUERY.put("SLS080201"			, "SLS080202DAO.updateExpndtrDecsnNoIntr");	// 토지해약 (이자) 청구
		MAP_DECSN_NO_QUERY.put("SLS080202"			, "SLS080202DAO.updateExpndtrDecsnNo");		// 토지해약 분양금/임대보증금 청구
		MAP_DECSN_NO_QUERY.put("HRM110102"			, "HRM110102DAO.updateDecsnNo");			// 원천세(일용직) 결의번호 업데이트
		};
	
	
	/**
	 * 지출결의서 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void expDsnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		if(log.isInfoEnabled()) log.info("expDsnList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACC020203DAO.expDsnList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

	/**
	 * 품의 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cnsulList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACC020203DAO.cnsulList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 지출결의서 코드 정보
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void selectExpCode( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		outDataset.put("output1", getDsMap(baseDao.list("ACC020102DAO.fnncInsttCodeList")));	// 금융기관코드
		outDataset.put("output2", getDsMap(baseDao.list("ACC030108DAO.select")));				// 안분대상코드
		
	}
	
	/**
	 * 지출결의서 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectExpDsn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap input1 = inDataset.get("input1");
		if (input1 != null && input1.size() > 0) {
			Map inMap = input1.get(0);
			outDataset.put("output1", getDsMap(baseDao.select("ACC020203DAO.expDsnMastrInfo", inMap)));				// 지출결의마스터
			outDataset.put("output2", getDsMap(baseDao.select("ACC020203DAO.expDsnMtrDetInfo", inMap)));			// 지출결의마스터상세
			outDataset.put("output3", getDsMap(baseDao.select("ACC020203DAO.slaryExpDsnMtrDetInfo", inMap)));		// 봉급지출결의마스터상세
			outDataset.put("output4", getDsMap(baseDao.select("ACC020203DAO.rturnExpDsnMtrDetInfo", inMap)));		// 반납지출결의마스터상세
			outDataset.put("output5", getDsMap(baseDao.select("ACC020203DAO.trvctExpDsnMtrDetInfo", inMap)));		// 여비지출결의마스터상세
			outDataset.put("output6", getDsMap(baseDao.list("ACC020203DAO.expDsnDetailList", inMap)));				// 지출결의세부
			outDataset.put("output7", getDsMap(baseDao.list("ACC020203DAO.expDsnDetailTrvctList", inMap)));			// 지출결의세부여비
			outDataset.put("output9", getDsMap(baseDao.list("ACC020203DAO.expDsnDtlsList", inMap)));				// 지출결의내역
			outDataset.put("output10", getDsMap(baseDao.list("ACC020203DAO.expDsnDtlsCntrwkList", inMap)));			// 지출결의내역공사
			outDataset.put("output11", getDsMap(baseDao.list("ACC020203DAO.expDsnDtlsPurchsList", inMap)));			// 지출결의내역구입
			outDataset.put("output13", getDsMap(baseDao.list("ACC020203DAO.expDsnDtlsServcList", inMap)));			// 지출결의내역용역
			outDataset.put("output14", getDsMap(baseDao.list("ACC020203DAO.expDsnDtlsHireList", inMap)));			// 지출결의내역임차
		}
	}
	
	/**
	 * DataSetMap 병합
	 * @param input
	 * @param output
	 * @return
	 */
	/*
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private DataSetMap mergeData(DataSetMap input, DataSetMap output) {

		if(input == null || input.size() == 0) {
			return output;
		}
		
		if(output == null || output.size() == 0) { 
			return input;
		}
		
		int i = 0;
		
		for(Map map : output.getRowMaps()) {
			
			if(input.size() <= i) {
				input.add(map);
			} else {
			
				Iterator iter = map.entrySet().iterator();
				while(iter.hasNext()) {
					Map.Entry entry = (Entry) iter.next();
					
					if(entry.getValue() != null) {
						input.get(i).put(entry.getKey(), entry.getValue());
					}
				}
			}
			i++;
		}
		
		return input;
	}
	*/
	
	/**
	 * 지출결의서 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked", "unused" })
	public int saveExpDsn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		if(inDataset.get("input1").size() > 0) {
			
			long budgetBalc		= 0;	// 부기잔액(원인행위+결의서 기준)
			long asignBalc		= 0;	// 배정잔액(원인행위+결의서 기준)
			long cyfdBalc		= 0;	// 이월잔액(결의서 기준, 결의금액을 본예산/이월예산 나누는 용도)
			long decsnAmt		= 0;	// 결의금액
			long cyfdBudgetBalc = 0;	// 이월예산잔액(원인행위+결의서 기준)
			long oriBudgetBalc	= 0;	// 본예산잔액(원인행위+결의서 기준)
			
			// 지출결의마스터 저장
			Map mastrMap = inDataset.get("input1").get(0);
			int mastrRowType = ((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			String trgFormId = (String) mastrMap.get("TRG_FORM_ID");	// 화면ID
			
			// 예산잔액 정보
			Map budgetBalcMap = (Map) baseDao.select("ACC020203DAO.budgetBalcR", mastrMap);
			if(budgetBalcMap != null) {
				budgetBalc 		= Long.parseLong(String.valueOf(budgetBalcMap.get("EXECUT_BUDGET_JAN_AM")));
				asignBalc		= Long.parseLong(String.valueOf(budgetBalcMap.get("ASIGN_JAN_AMOUNT")));
				cyfdBalc		= Long.parseLong(String.valueOf(budgetBalcMap.get("CYFD_BUDGET_BALC")));
				cyfdBudgetBalc	= Long.parseLong(String.valueOf(budgetBalcMap.get("CYFDE_XECUT_BUDGET_JAN_AM")));
				oriBudgetBalc	= Long.parseLong(String.valueOf(budgetBalcMap.get("ORI_EXECUT_BUDGET_JAN_AM")));
			}

			// 계약번호
			String cntrctNo = (String) mastrMap.get("CNTRCT_NO");
			
			// 원인행위잔액 정보
			long caActJanAmt = (Long) baseDao.select("ACC020203DAO.caActJanAmt", mastrMap);
			
			// 결의금액
			if(mastrMap.get("DECSN_AMOUNT") != null && !"".equals(mastrMap.get("DECSN_AMOUNT"))) {				
				decsnAmt = ((BigDecimal)mastrMap.get("DECSN_AMOUNT")).longValue();				
			}
			else{
				throw new NexaServiceException("fail.정보등록.실패", "결의금액이 없습니다.");
			}
			
			
			// 여입결의서(05) 일경우 각종 금액 체크 통과
			String anactKnd = (String) mastrMap.get("ANACT_KND");
			int year = Integer.parseInt((String)mastrMap.get("DECSN_YEAR"));
			String cyfdSe = (String)mastrMap.get("CYFD_SE");
			
			switch(mastrRowType) {
				case DataSet.ROW_TYPE_INSERTED:
					// 다른 테이블에 결의번호 등록
					if(inDataset.get("input20") != null && inDataset.get("input20").size() > 0) {
						String queryId = (String)MAP_DECSN_NO_QUERY.get((String)inVar.get("TRG_FORM_ID"));
						if(!StringUtil.isNull(queryId)) {
							for(Map map : inDataset.get("input20").getRowMaps()) {
								map.put(STR_DSN_MASTR, mastrMap);
								baseDao.update(queryId, map);
							}
						}
					}
					
					Map keyMap = (Map) baseDao.select("ACC020203DAO.selectDecsnNo");
//					mastrMap.put("DECSN_YEAR", (String)keyMap.get("DECSN_YEAR"));
					mastrMap.put("DECSN_NO"	 , (String)keyMap.get("DECSN_NO"));
					
					if(!"05".equals(anactKnd) && !"11".equals(anactKnd)) {
						
						if(!StringUtil.isNull((String)mastrMap.get("CAUSE_ACTION_NO"))) {
							// 원인행위금액 초과 체크
							if(caActJanAmt < decsnAmt) {
								throw new NexaServiceException("fail.정보등록.실패", "원인행위금액을 초과하였습니다.");
							}
						} else {
							// 예산 체크
							if(year < 2020) {
								if(budgetBalc < decsnAmt) {
									throw new NexaServiceException("fail.정보등록.실패", "부기잔액을 초과하였습니다.");
								}
							} else {
								if("0".equals(cyfdSe)) {
									if(oriBudgetBalc < decsnAmt) {
										throw new NexaServiceException("fail.정보등록.실패", "예산잔액을 초과하였습니다.");
									}
								} else {
									if(cyfdBudgetBalc < decsnAmt) {
										throw new NexaServiceException("fail.정보등록.실패", "이월예산잔액을 초과하였습니다.");
									}
								}
							}
						}
						
						// 배정 체크
						if(asignBalc < decsnAmt) {
							throw new NexaServiceException("fail.정보등록.실패", "배정잔액을 초과하였습니다.");
						}
						
						// 이월예산, 본예산 사용액 계산
						if(year < 2020) {
							// 2020년 이전은 기존 로직대로 이월결의금액 계산
							if(cyfdBalc >= decsnAmt) {
								mastrMap.put("ORIBDGT_DECSN_AMOUNT"		, 0);
								mastrMap.put("CYFD_BUDGET_DECSN_AMOUNT"	, decsnAmt);
							} 
							else {
								mastrMap.put("ORIBDGT_DECSN_AMOUNT"		, decsnAmt - cyfdBalc);
								mastrMap.put("CYFD_BUDGET_DECSN_AMOUNT"	, cyfdBalc);
							}
							mastrMap.put("CYFD_SE", cyfdBalc > 0 ? "1" : "0");
						} else {
							// 2020년부터 사용자가 직접 이월구분을 선택
							if("0".equals(cyfdSe)) {
								mastrMap.put("ORIBDGT_DECSN_AMOUNT"		, decsnAmt);
								mastrMap.put("CYFD_BUDGET_DECSN_AMOUNT"	, 0);
							} else {
								mastrMap.put("ORIBDGT_DECSN_AMOUNT"		, 0);
								mastrMap.put("CYFD_BUDGET_DECSN_AMOUNT"	, decsnAmt);
							}
						}
					}
					
					baseDao.insert("ACC020203DAO.expDsnMastrC", mastrMap);
					
					break;
					
				case DataSet.ROW_TYPE_UPDATED:
					
					if(!"05".equals(anactKnd) && !"11".equals(anactKnd)) {
						// 변경 전 결의금액
						Map decsnAmtMap = (Map) baseDao.select("ACC020203DAO.decsnAmtR", mastrMap);
						if(decsnAmtMap != null) {
							long beforeDecsnAmt = ((BigDecimal)decsnAmtMap.get("DECSN_AMOUNT")).longValue();
							long beforeCyfdAmt  = ((BigDecimal)decsnAmtMap.get("CYFD_BUDGET_DECSN_AMOUNT")).longValue();
							String beforeCyfdSe = String.valueOf(decsnAmtMap.get("CYFD_SE"));
							
							// 결의금액이 변경되면 이월예산, 본예산 사용액 재계산
							if(beforeDecsnAmt != decsnAmt || !cyfdSe.equals(beforeCyfdSe)) {
								
								// 변경후 결의금액이 이전 결의금액보다 큰 경우만 예산 체크
								if(beforeDecsnAmt < decsnAmt || !cyfdSe.equals(beforeCyfdSe)) {
									
									if(!StringUtil.isNull((String)mastrMap.get("CAUSE_ACTION_NO"))) {
										// 원인행위금액 체크
										if(caActJanAmt < decsnAmt) {
											throw new NexaServiceException("fail.정보등록.실패", "원인행위금액을 초과하였습니다.");
										}
									} else {
										// 예산 체크
										if(year < 2020) {
											if(budgetBalc + beforeDecsnAmt < decsnAmt) {
												throw new NexaServiceException("fail.정보등록.실패", "부기잔액을 초과하였습니다.");
											}
										} else {
											if("0".equals(cyfdSe)) {
												if(cyfdSe.equals(beforeCyfdSe)) {
													oriBudgetBalc += beforeDecsnAmt;
												}
												if(oriBudgetBalc < decsnAmt) {
													throw new NexaServiceException("fail.정보등록.실패", "예산잔액을 초과하였습니다.");
												}
											} else {
												if(cyfdSe.equals(beforeCyfdSe)) {
													cyfdBudgetBalc += beforeDecsnAmt;
												}
												if(cyfdBudgetBalc < decsnAmt) {
													throw new NexaServiceException("fail.정보등록.실패", "이월예산잔액을 초과하였습니다.");
												}
											}
										}
										
									}
									
									// 배정 체크
									if(asignBalc + beforeDecsnAmt < decsnAmt) {
										throw new NexaServiceException("fail.정보등록.실패", "배정잔액을 초과하였습니다.");
									}
								}
								
								// 이월예산, 본예산 사용액 재계산
								if(year < 2020) {
									// 2020년 이전은 기존 로직대로 이월결의금액 계산
									cyfdBalc += beforeCyfdAmt;
									if(cyfdBalc >= decsnAmt) {
										mastrMap.put("ORIBDGT_DECSN_AMOUNT"		, 0);
										mastrMap.put("CYFD_BUDGET_DECSN_AMOUNT"	, decsnAmt);
									} 
									else {
										mastrMap.put("ORIBDGT_DECSN_AMOUNT"		, decsnAmt - cyfdBalc);
										mastrMap.put("CYFD_BUDGET_DECSN_AMOUNT"	, cyfdBalc);
									}
									mastrMap.put("CYFD_SE", cyfdBalc > 0 ? "1" : "0");
								} else {
									// 2020년부터 사용자가 직접 이월구분을 선택
									if("0".equals(cyfdSe)) {
										mastrMap.put("ORIBDGT_DECSN_AMOUNT"		, decsnAmt);
										mastrMap.put("CYFD_BUDGET_DECSN_AMOUNT"	, 0);
									} else {
										mastrMap.put("ORIBDGT_DECSN_AMOUNT"		, 0);
										mastrMap.put("CYFD_BUDGET_DECSN_AMOUNT"	, decsnAmt);
									}
								}
								mastrMap.put("MDFY_AMT", "1");	// 금액 수정여부
								
							}
						}
					}
					// 결의마스터 수정
					iRow += baseDao.update("ACC020203DAO.expDsnMastrU", mastrMap);
					
					// 수정요청건일 경우 메시지 전송
					String updtReqAt = (String) mastrMap.get("UPDT_REQ_AT");
					if("1".equals(updtReqAt)) {
						String decsnNo  = (String)mastrMap.get("DECSN_NO");
						String sumry	= (String)mastrMap.get("SUMRY");
						String empno	= (String)mastrMap.get("REGISTER_EMPNO");
						String subject = "지출결의서("+decsnNo+") 수정 요청";
						
						StringBuffer sb = new StringBuffer();
						sb.append("결의번호: ").append(decsnNo).append("\n");
						sb.append("적요: ").append(sumry);
						
						if(!"".equals(empno)) {
							ucMessengerService.sendMessage(empno,subject,sb.toString());
						}
					}
					
					break;
				
				case DataSet.ROW_TYPE_DELETED:
					iRow += baseDao.delete("ACC020203DAO.expDsnMastrD", mastrMap);
					break;
				
				default:
					break;
			}
			
			// 지출결의마스터상세 저장
			if(inDataset.get("input2") != null) {
				for(Map map : inDataset.get("input2").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);							
							baseDao.insert("ACC020203DAO.expDsnMtrDetC", map);
							break;
							
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC020203DAO.expDsnMtrDetU", map);
							break;
							
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.expDsnMtrDetD", map);
							break;
							
						default:
							break;
					}
				}
			}
			
			// 봉급지출결의마스터상세 저장
			if(inDataset.get("input3") != null) {
				for(Map map : inDataset.get("input3").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.insert("ACC020203DAO.slaryExpDsnMtrDetC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC020203DAO.slaryExpDsnMtrDetU", map);
							break;
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.slaryExpDsnMtrDetD", map);
							break;
						default:
							break;
					}
				}
			}
			
			// 여입지출결의마스터상세 저장
			if(inDataset.get("input4") != null) {
				for(Map map : inDataset.get("input4").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.insert("ACC020203DAO.rturnExpDsnMtrDetC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC020203DAO.rturnExpDsnMtrDetU", map);
							break;
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.rturnExpDsnMtrDetD", map);
							break;
						default:
							break;
					}
				}
			}
			
			// 여비지출결의마스터상세 저장
			if(inDataset.get("input5") != null) {
				for(Map map : inDataset.get("input5").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.insert("ACC020203DAO.trvctExpDsnMtrDetC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC020203DAO.trvctExpDsnMtrDetU", map);
							break;
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.trvctExpDsnMtrDetD", map);
							break;
						default:
							break;
					}
				}
			}
			
			// 지출결의세부 저장
			if(inDataset.get("input6") != null) {
				DataSetMap list = (DataSetMap) inDataset.get("input6");
				String cntrctMthd = null;
				if(inDataset.get("input2").size() > 0) {
					Map mastrDetMap = inDataset.get("input2").get(0);
					cntrctMthd = (String)mastrDetMap.get("CNTRCT_MTHD");
				}
				for (int x = 0; x < list.size(); x++) {
					Map map = list.get(x);
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							
							// 수의계약 건 집행실적통제금액 초과여부 체크
							if("04".equals(cntrctMthd)) {
								Map excessMap = (Map) baseDao.select("ACC020203DAO.selectExcessAmt",map);
								if(excessMap != null) {
									long excutStdrAmt = Long.parseLong(String.valueOf(excessMap.get("EXCUT_STDR_AMT")));
									long excessAmt = Long.parseLong(String.valueOf(excessMap.get("EXCESS_AMT")));
									if(excessAmt > 0) {
										StringBuffer sb = new StringBuffer();
										sb.append(map.get("BCNC_NM")).append("(").append(map.get("BCNC_CODE")).append(")의 집행실적 금액이 ")
										.append(excutStdrAmt).append("원을 초과하였습니다.(초과금액: ").append(excessAmt).append("원)").append("\r\n")
										.append("재무팀 계약 담당자에게 문의 주시기 바랍니다.");
										throw new NexaServiceException("fail.정보등록.실패", sb.toString());
									}
								}
							}
							
							String seq = (String)baseDao.select("ACC020203DAO.expDsnDetailSeq",map);
							map.put("SEQ", seq);
							// 지출결의세부 등록
							baseDao.insert("ACC020203DAO.expDsnDetailC", map);
							
							// 법인카드 테이블에 결의번호 입력
							if("ACC040202".equals(trgFormId)) {
								int apprCnt = baseDao.update("ACC020203DAO.nhApprU", map);
								if(apprCnt == 0) {
									throw new NexaServiceException("fail.정보등록.실패", "법인카드 내역에 결의번호를 등록하는 과정에서 오류가 발생했습니다.");
								}
							}
							
							// 매입전표생성 지출결의등록
							if("ACC030111".equals(trgFormId) || "CTR030600".equals(trgFormId)) {
								if(map.get("ISSU_SEQNO") != null && !"".equals(map.get("ISSU_SEQNO"))) {
									// 계산서번호 조회
									String taxbillNo = (String) baseDao.select("ACC030111DAO.selectTaxbillNo");
									map.put("TAXBILL_NO", taxbillNo);
									baseDao.insert("ACC030111DAO.insertTaxbilMaster", map);	// 계산서생성
									int taxCnt = baseDao.update("ACC030111DAO.updateTaxbilNo", map);		// 계산서번호 업데이트
									if(taxCnt == 0) {
										throw new NexaServiceException("fail.정보등록.실패", "세금계산서 데이터를 생성하는 과정에서 오류가 발생했습니다.");
									}
								}
							}
							
							// 기타증빙 지출결의등록
							if("ACC030111_P02".equals(trgFormId)) {
								DataSetMap list21 = (DataSetMap) inDataset.get("input21");
								if(list21 != null) {
									if(list21.size() > 0 && mastrRowType == DataSet.ROW_TYPE_INSERTED) {
										// 계산서번호 조회
										Map map21 = list21.get(0);
										String taxbillNo = (String) baseDao.select("ACC030111DAO.selectTaxbillNo", map21);
										map21.put("TAXBILL_NO", taxbillNo);
										map21.put("DECSN_YEAR", mastrMap.get("DECSN_YEAR"));
										map21.put("DECSN_NO"  , mastrMap.get("DECSN_NO"));
										map21.put("DECSN_SEQ" , seq);
										baseDao.insert("ACC030111DAO.insertTaxbilMasterP02", map21);
									}
								}
							}
							
							// 세금계산서 등록(매입전표생성 화면이 아닐 경우)
							if(!"ACC030111".equals(trgFormId) && !"ACC030111_P02".equals(trgFormId) && !"CTR030600".equals(trgFormId)) {
								baseDao.insert("ACC020203DAO.taxbilC", map);
							}

                            // 대관환불대상
                            if("HPM070201".equals(trgFormId)) {
                                Map map2 = inDataset.get("input20").get(x);
                                map2.put("DECSN_YEAR", mastrMap.get("DECSN_YEAR"));
                                map2.put("DECSN_NO"  , mastrMap.get("DECSN_NO"));
                                map2.put("SEQ", seq);
                                baseDao.insert("HPM070201DAO.hpmRentFcltsReqstManageU", map2);
                            }
                            
							// 환불대상
                            if("HPM070202".equals(trgFormId)) {
                                Map map2 = inDataset.get("input20").get(x);
                                map2.put("DECSN_YEAR", mastrMap.get("DECSN_YEAR"));
                                map2.put("DECSN_NO"  , mastrMap.get("DECSN_NO"));
                                map2.put("SEQ", seq);
                                baseDao.insert("HPM070202DAO.hpmRefndTrgetU", map2);
                            }
							break;
						case DataSet.ROW_TYPE_UPDATED:
							map.put(STR_DSN_MASTR, mastrMap);
							
							// 수의계약 건 집행실적통제금액 초과여부 체크
							if("04".equals(cntrctMthd)) {
								Map excessMap = (Map) baseDao.select("ACC020203DAO.selectExcessAmt",map);
								if(excessMap != null) {
									long excutStdrAmt = Long.parseLong(String.valueOf(excessMap.get("EXCUT_STDR_AMT")));
									long excessAmt = Long.parseLong(String.valueOf(excessMap.get("EXCESS_AMT")));
									if(excessAmt > 0) {
										StringBuffer sb = new StringBuffer();
										sb.append(map.get("BCNC_NM")).append("(").append(map.get("BCNC_CODE")).append(")의 집행실적 금액이 ")
										.append(excutStdrAmt).append("원을 초과하였습니다.(초과금액: ").append(excessAmt).append("원)").append("\r\n")
										.append("재무팀 계약 담당자에게 문의 주시기 바랍니다.");
										throw new NexaServiceException("fail.정보등록.실패", sb.toString());
									}
								}
							}
							
							// 지출결의세부 수정
							baseDao.update("ACC020203DAO.expDsnDetailU", map);
							// 세금계산서 삭제(부가세여부가 무로 변경된것)
							baseDao.delete("ACC020203DAO.taxbilVatAtD", map);
							// 세금계산서 수정
							int udtCnt = baseDao.update("ACC020203DAO.taxbilU", map);
							// 부가세여부가 유로 변경된경우 등록
							if(udtCnt <= 0) {
								baseDao.insert("ACC020203DAO.taxbilC", map);
							}
							break;
						case DataSet.ROW_TYPE_DELETED:
							// 세금계산서 삭제
							baseDao.delete("ACC020203DAO.taxbilD", map);
							// 지출결의세부 삭제
							baseDao.delete("ACC020203DAO.expDsnDetailD", map);
							
							if("ACC040202".equals(trgFormId)) {
								baseDao.update("ACC020203DAO.nhApprD", map);
							}
							break;
						default:
							break;
					}
				}
			}
			
			// 지출결의세부여비 저장
			if(inDataset.get("input7") != null) {
				for(Map map : inDataset.get("input7").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.insert("ACC020203DAO.expDsnDetailTrvctC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC020203DAO.expDsnDetailTrvctU", map);
							break;
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.expDsnDetailTrvctD", map);
							break;
						default:
							break;
					}
				}
			}
			
			// 지출결의내역 저장
			if(inDataset.get("input9") != null) {
				for(Map map : inDataset.get("input9").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.insert("ACC020203DAO.expDsnDtlsC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC020203DAO.expDsnDtlsU", map);
							break;
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.expDsnDtlsD", map);
							break;
						default:
							break;
					}
				}
			}
			
			// 지출결의내역공사 저장
			if(inDataset.get("input10") != null) {
				for(Map map : inDataset.get("input10").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.insert("ACC020203DAO.expDsnDtlsCntrwkC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC020203DAO.expDsnDtlsCntrwkU", map);
							break;
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.expDsnDtlsCntrwkD", map);
							break;
						default:
							break;
					}
				}
			}
			
			// 지출결의내역구입 저장
			if(inDataset.get("input11") != null) {
				for(Map map : inDataset.get("input11").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.insert("ACC020203DAO.expDsnDtlsPurchsC", map);
							// 자산대장 등록
							//baseDao.insert("ACC020203DAO.assetsMastrC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC020203DAO.expDsnDtlsPurchsU", map);
							break;
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.expDsnDtlsPurchsD", map);
							break;
						default:
							break;
					}
				}
			}
			
			
			// 지출결의내역용역 저장
			/*
			if(inDataset.get("input13") != null) {
				for(Map map : inDataset.get("input13").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.insert("ACC020203DAO.expDsnDtlsServcC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC020203DAO.expDsnDtlsServcU", map);
							break;
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.expDsnDtlsServcD", map);
							break;
						default:
							break;
					}
				}
			}
			*/
			
			// 지출결의내역임차 저장 
			/*
			if(inDataset.get("input14") != null) {
				for(Map map : inDataset.get("input14").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.insert("ACC020203DAO.expDsnDtlsServcC", map);
							break;
						case DataSet.ROW_TYPE_UPDATED:
							baseDao.update("ACC020203DAO.expDsnDtlsServcU", map);
							break;
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.expDsnDtlsServcD", map);
							break;
						default:
							break;
					}
				}
			}
			*/
			
			// 법인카드 지출결의내역 등록 
			/*
			if(inDataset.get("input15") != null) {
				for(Map map : inDataset.get("input15").getRowMaps()) {
					int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
					switch(rowType) {
						case DataSet.ROW_TYPE_INSERTED:
							map.put(STR_DSN_MASTR, mastrMap);
							if("Y".equals( (String)baseDao.select("ACC020203DAO.selectCcmApprInsertAt",map)) ){
								throw new NexaServiceException("fail.정보등록.실패", "해당 법인카드건으로 등록된 지출결의서가 존재합니다. 다시 조회 후 수정해 주시기 바랍니다.");
							}
							baseDao.update("ACC020203DAO.ccmApprCU", map);
							break;
						case DataSet.ROW_TYPE_UPDATED:
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.update("ACC020203DAO.ccmApprCU", map);
							break;
						case DataSet.ROW_TYPE_DELETED:
							baseDao.delete("ACC020203DAO.ccmApprD", map);
							break;
						default:
							break;
					}
				}
			}
			*/
			
			// 신규 결의서인 경우
			if(mastrRowType == DataSet.ROW_TYPE_INSERTED) {
				
				// 다른 테이블에 결의번호 등록
				if(inDataset.get("input20") != null && inDataset.get("input20").size() > 0) {
					String queryId = (String)MAP_DECSN_NO_QUERY.get((String)inVar.get("TRG_FORM_ID"));
					if(!StringUtil.isNull(queryId)) {
						for(Map map : inDataset.get("input20").getRowMaps()) {
							map.put(STR_DSN_MASTR, mastrMap);
							baseDao.update(queryId, map);
						}
					}
				}
				
				// 파일복사
				if(inDataset.get("input22") != null && inDataset.get("input22").size() > 0) {
					BigDecimal fileSn = new BigDecimal((String)mastrMap.get("FILE_SN"));
					
					MIS000000ServiceImpl.fileCopyOnService(inVar, fileSn, (DataSetMap)inDataset.get("input22"));
				}
				
				// 수입지출외현금 항목이 있을경우 대상 테이블에 기초데이터 입력
				// 신규 등록
				if("1".equals(mastrMap.get("INC_EXP_AT"))) {
					String incExpKey = (String)baseDao.select("ACC020502DAO.incExpElseCashMastrPk");
					mastrMap.put("SN", incExpKey);
					baseDao.insert("ACC020502DAO.expDsnMastrC", mastrMap);
					baseDao.insert("ACC020502DAO.expDsnDetailC", mastrMap);
				}
			}
			
			
			// 결의서 수정 시 수입지출외현금 항목 재생성
			int input6Size = inDataset.get("input6") == null ? 0 : inDataset.get("input6").size();
			if(mastrRowType == DataSet.ROW_TYPE_UPDATED || (mastrRowType == DataSet.ROW_TYPE_NORMAL && input6Size > 0)) {
				if("1".equals(mastrMap.get("INC_EXP_AT"))) {
					String incExpKey = (String)baseDao.select("ACC020502DAO.incExpSn", mastrMap);
					if(incExpKey == null || "".equals(incExpKey)) {
						incExpKey = (String)baseDao.select("ACC020502DAO.incExpElseCashMastrPk");
					}
					mastrMap.put("SN", incExpKey);
					baseDao.delete("ACC020502DAO.incExpElseCashMastrD", mastrMap);
					baseDao.insert("ACC020502DAO.expDsnMastrC", mastrMap);
					baseDao.insert("ACC020502DAO.expDsnDetailC", mastrMap);
				}
			}
			
			// 결의서 삭제 시 (미사용...)
			if(mastrRowType == DataSet.ROW_TYPE_DELETED) {
				// 수입지출외현금 항목도 삭제
				if("1".equals(mastrMap.get("INC_EXP_AT"))) {
					String incExpKey = (String)baseDao.select("ACC020502DAO.incExpSn", mastrMap);
					if(incExpKey != null && !"".equals(incExpKey)) {
						// 등록된 데이터가 있으면 삭제 후 재등록
						mastrMap.put("SN", incExpKey);
						baseDao.delete("ACC020502DAO.incExpElseCashMastrD", mastrMap);
					}
				}
				
				// 구입과지출결의서인 경우 물품수급계획의 결의번호 삭제
				if("02".equals((String)mastrMap.get("ANACT_KND"))) {
					baseDao.update("ASS010600DAO.deleteDecsnNo", mastrMap);
				}
			}
			
			// 지출결의마스터를 리턴한다.
			outDataset.put("output1", getDsMap(mastrMap));
		}
		
		return iRow;
		
	}
	
	/**
	 * 결의서 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public int expDsnD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		if(inDataset.get("input1").size() > 0) {
			
			// 지출결의마스터 저장
			Map mastrMap = inDataset.get("input1").get(0);
			int mastrRowType = ((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(mastrRowType) {
				case DataSet.ROW_TYPE_DELETED:
					iRow += baseDao.delete("ACC020203DAO.expDsnD", mastrMap);
					// 지출결의서인 경우
					// 지출결의서인 경우
			         if("03".equals((String)mastrMap.get("ANACT_KND"))) {
			            switch((String)mastrMap.get("TRG_FORM_ID")) {
			               case "CTR030600":   // 대가지급의 결의번호 삭제
			                  baseDao.update("CTR030600DAO.updateCntrctDecsnNoToNull", mastrMap);
			                  break;   
			            }
			         }
			         // 공사와집행결의서인 경우
			         if("06".equals((String)mastrMap.get("ANACT_KND"))) {
			            switch((String)mastrMap.get("TRG_FORM_ID")) {
			               case "CTR030600":   // 대가지급의 결의번호 삭제
			                  baseDao.update("CTR030600DAO.updateCntrctDecsnNoToNull", mastrMap);
			                  break;   
			            }
			         }
			         // 구입과지출결의서인 경우 물품수급계획의 결의번호 삭제
			         if("02".equals((String)mastrMap.get("ANACT_KND"))) {
			            baseDao.update("ASS010600DAO.deleteDecsnNo", mastrMap);
			            
			            switch((String)mastrMap.get("TRG_FORM_ID")) {
			               case "CTR030600":   // 대가지급의 결의번호 삭제
			                  baseDao.update("CTR030600DAO.updateCntrctDecsnNoToNull", mastrMap);
			                  break;   
			            }
			         }
					// 여비지출결의서인 경우 출장비정산의 결의번호 갱신
					if("01".equals((String)mastrMap.get("ANACT_KND"))) {
						switch((String)mastrMap.get("TRG_FORM_ID")) {
							case "HRM070206":
								baseDao.update("HRM070206DAO.updateBsrpDecsnNoToNull", mastrMap);
								break;
							case "HRM080306":
								baseDao.update("HRM080306DAO.updateEdcDecsnNoToNull", mastrMap);
								break;
						}
					}
					break;
				default:
					break;
			}
		}
		
		return iRow;
	}

	/**
	 * 쿼리결과를 DataSetMap으로 변환
	 * @param obj
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private DataSetMap getDsMap(Object obj) {
		DataSetMap dsMap = new DataSetMap();
		if(obj instanceof Map) {
			dsMap.add((Map)obj);
		} else if(obj instanceof List) {
			dsMap.setRowMaps((List<Map>)obj);
		}
		return dsMap;
	}
	
	/**
	 * 첨부파일
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAtchFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList",  inMap));
		outDataset.put("output1", outDsMap);
	}


	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveNewFileSn(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		// input Map get
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map map = list.get(0);
		
		// date get
		SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMdd");
		long curentTime = System.currentTimeMillis();
		
		// FileSn calculate
		String todayStr = sDateFormat.format(curentTime);
		BigDecimal seqFileSn = (BigDecimal)baseDao.select("selectFileSn");  
		String strFileSn = todayStr +""+ seqFileSn;
		
		// input FileSn
		BigDecimal fileSn = new BigDecimal(strFileSn);
		map.put("FILE_SN", fileSn);
		
		// insert into File Master
		baseDao.insert("insertAtchmnFileMast", map);
		
		// update to Contract Master
		baseDao.update("ACC020203DAO.updateNewFileSn", map);
		
		// return Result Data (with FileSn)
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(map);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 수입지출외현금 계좌번호 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void incExpElseCashBcnc( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACC020203DAO.incExpElseCashBcnc", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	

	/**
	 * 품의서 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCnsul( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = null;
		
		if (inMap != null){
			records = (List<Map>)baseDao.list("ACC020203DAO.selectCnsul", inMap);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	
	/**
	 * 지출승인/취소
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int expndtrConfmU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input2");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ACC020203DAO.expndtrConfmU", map);
					
					if("1".equals((String)map.get("EXPNDTR_CNFIRM_AT"))) {

						String decsnNo  = (String)map.get("DECSN_NO");
						String sumry	= (String)map.get("SUMRY");
						String empno	= (String)map.get("REGISTER_EMPNO");
						String subject = "지출결의서("+decsnNo+") 승인";
						
						StringBuffer sb = new StringBuffer();
						sb.append("결의번호: ").append(decsnNo).append("\n");
						sb.append("적요: ").append(sumry);
						
						if(!"".equals(empno)) {
							ucMessengerService.sendMessage(empno,subject,sb.toString());
						}
					}
					
					break;
			    default:
			    	break;
			}	
		}
		
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		int listSize2 = (list == null) ? 0 : list.size();
		if(listSize2 > 0) {
			Map inMap = inDsMap.get(0);
			List<Map> records = (List<Map>)baseDao.list("ACC020203DAO.expDsnList", inMap);
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDataset.put("output1", outDsMap);
		}
		
		return iRow;
		
	}
	
	/**
	 * 지출결의서 결재초기화
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void updateSanctnNo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.delete("ACC020203DAO.deleteChitDetail", map); //전표상세정보 삭제
					baseDao.delete("ACC020203DAO.deleteChitMastr", map);  //전표마스터정보 삭제
					baseDao.update("ACC020203DAO.updateSanctnNo", map);   //지출결의마스터 결재번호 null 초기화
					break;
				default:
			    	break;
			}	
		}
		
	}
}