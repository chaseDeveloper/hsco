package hsco.pms.sls.hou.rci.SLS040201;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;
import hsco.pms.com.COM000000.COM000000ServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS040201ServiceImpl.java
 * @Description  	: 자동이체 신청해지 관리를 위한 Service
 * @author       	: 이인성
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 6.11.		이인성			최초생성
 *  2015.09.15.		이상준			Rework
 * </pre>
 */
@Service("SLS040201Service")
public class SLS040201ServiceImpl extends BaseService implements SLS040201Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
	
    @Resource(name = "COM000000Service")
    protected COM000000ServiceImpl COM000000Service;
    
    /**
     * 은행코드 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings({"unchecked","rawtypes"})
	public void selectBankCodeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		
		resList = (List<Map>)baseDao.list("SLS040201DAO.selectBankCodeList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("bankCode", outDsMap);
	}
	
	/**
     * 월별 자동이체 신청해지 내역 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings({"rawtypes"})
	public void selectAtcngReqstSumInfo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		Map resMap = null;
		
		resMap = (Map)baseDao.select("SLS040201DAO.selectAtcngReqstSumInfo", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(resMap);
		
		outDataset.put("reqstSumInfo", outDsMap);
	}
	
	/**
     * 월별 자동이체 신청해지 결과 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
	public void selectAtcngReqstList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		
		resList = (List<Map>)baseDao.list("SLS040201DAO.selectAtcngReqstList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("reqstList", outDsMap);
	}
    
    /**
	 * 월별 자동이체 신청해지 처리 건수 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws Exception
	 */
    @SuppressWarnings({"rawtypes"})
	public void selectAtcngProcessCnt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if(inDsMap != null)
			inMap = inDsMap.get(0);
		
		Map resMap = null;
		
		resMap = (Map)baseDao.select("SLS040201DAO.selectAtcngProcessCnt", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.add(resMap);
		
		outDataset.put("reqstCntInfo", outDsMap);
		
	}
	
	/**
     * 월별 자동이체 신청 파일 업로드
     * - 파일을 읽어 내용을 데이터화 하고 저장 처리후 결과를 반환한다.
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
	 * @throws UnsupportedEncodingException 
     * @throws Exception
     */
    
    @SuppressWarnings({"unchecked","rawtypes"})
    public void uploadAtcngRqestFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException, UnsupportedEncodingException {
    	
    	NexacroMapDTO xpDto = getXpDto();
    	
    	// 업로드 파일 데이터 화
    	Map<String, Object> readDataMap = COM000000Service.getDataFromFile(xpDto);
		boolean resultAt = Boolean.valueOf((String)readDataMap.get("RESULT_AT"));	// 처리 성공여부
    	
		if(resultAt){
			
			// 전달 기본값 추출
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			if(inDsMap == null){
				throw new NexaServiceException("err.입력데이터셋.없음");
			}
			
			Map inMap = inDsMap.get(0);
			String inReqstYm = (String)inMap.get("REQST_YM");	// 신청월
			
			Map userMap = (Map)inMap.get("USER");
			String inUserId = (String)userMap.get("S_USER_ID");	// 사용자 ID
			
			// 기존 해당 년월 데이터 삭제
			baseDao.delete("SLS040201DAO.deleteAtcngInfo", inMap);
			
			// 데이터부 데이터 저장 처리
			List<Map> resultBodyList = null;	// 저장 레코드
			int newCnt = 0;		// 신규건수
			int canCnt = 0;		// 해지건수
			int etcCnt = 0;		// 기타건수
			
			List<Map> bodyList = (List<Map>)readDataMap.get("DATA_BODY");	// 데이터 목록
			int bodyListSize = bodyList == null ? 0 : bodyList.size();
			for(int i = 0; i < bodyListSize; i++){
				
				Map<String, Object> bodyItem = (Map<String, Object>)bodyList.get(i);
				
				String bdHouseCode = (String)bodyItem.get("HOUSE_CODE");	// 주택코드
				String bdReqstEe = (String)bodyItem.get("REQST_SE");		// 신청구분
				
				// 주택코드가 영구임대 주택코드인지 확인(영구임대 주택코드는 제외)
				int rntHouseCnt = (Integer)baseDao.select("SLS040201DAO.selectRentHouseCnt", bdHouseCode);
				
				if(rntHouseCnt > 0){
					continue;
				}
				
				// 주택코드 변환 - AS-IS에서는 resHouseCode == null 일 경우 continue 구분이 있으나 주석처리 되어있음.
				String resHouseCode = (String)baseDao.select("SLS040201DAO.selectReqstHouseCode", bdHouseCode);
				
				// 건수 카운팅 처리(신청구분 : 1(신규), 3(해지)) 및 신청구분명 설정
				String resReqstSeNm = null;
				if("1".equals(bdReqstEe)){
					resReqstSeNm = "신규";
					newCnt++;
				}else if("3".equals(bdReqstEe)){
					resReqstSeNm = "해지";
					canCnt++;
				}else{
					resReqstSeNm = bdReqstEe;
					etcCnt++;
				}
				
				// 신청일자 설정
				String nwReqstDe = null;
				String bdReqstDe = (String)bodyItem.get("REQST_DE");	// 신청일자(YYMMDD)
				int bdReqstDeLeng = bdReqstDe.length();
				if( bdReqstDeLeng < 8 && bdReqstDeLeng == 6){
					nwReqstDe = inReqstYm.substring(0,2) + bdReqstDe;	// 신청년월의(YY) + 전문 신청일자(YYMMDD)
				}
				
				// 은행코드 설정(파일 2자리 코드 3자리)
				String bdBankCode = (String)bodyItem.get("BANK_CODE");	// 은행코드(2)
				
				// 추가 저장값 설정
				bodyItem.put("REQST_DE", nwReqstDe);		// 신청일자(YYYYMMDD)
				bodyItem.put("BANK_CODE", StringUtil.lpad(bdBankCode, '0', 3));
				bodyItem.put("REQST_YM", inReqstYm);		// 신청월
				bodyItem.put("REQST_SE_NM", resReqstSeNm);	// 신청 구분명 설정
				bodyItem.put("S_USER_ID", inUserId);		// 사용자ID
								
				// 월별 자동이체 신청/해지정보 건별 등록
				baseDao.insert("SLS040201DAO.insertAtcngReqstInfo", bodyItem);
				
				if(resultBodyList == null){
					resultBodyList = new ArrayList<Map>();
				}
				
				resultBodyList.add(bodyItem);
				
			}
			
			// header
			Map<String, Object> headerMap = (Map<String, Object>)readDataMap.get("DATA_HEADER");	// Header내용
			DataSetMap headDsMap = new DataSetMap();
			headDsMap.add(headerMap);
			
			// body
			DataSetMap bodyDsMap = new DataSetMap();
			bodyDsMap.setRowMaps(resultBodyList);
			
			// footer
			Map<String, Object> footerMap = (Map<String, Object>)readDataMap.get("DATA_FOOTER");	// Footer 내뇽

			// 파일의 TOTAL_CNT 부분은 총 레코드 수를 나타내므로 실제 Body 행 수로 변경한다.
			// ※ TOTAL_CNT 필드명은 화면에서 지정한 필드명임.
			int resultBodySize = resultBodyList == null ? 0 : resultBodyList.size();
			footerMap.put("TOTAL_CNT", resultBodySize);	// 총 건수
			footerMap.put("NEW_CNT", newCnt);			// 신규 건수
			footerMap.put("CAN_CNT", canCnt);			// 해지 건수
			footerMap.put("ETC_CNT", etcCnt);			// 기타 건수
			
			DataSetMap footDsMap = new DataSetMap();
			footDsMap.add(footerMap);
			
			outDataset.put("headInfo", headDsMap);
			outDataset.put("bodyList", bodyDsMap);
			outDataset.put("footInfo", footDsMap);
			
		}else{
			
			String resultMsg = (String)readDataMap.get("RESULT_MSG");
			// {0} 아닙니다. {1} 확인하세요
			throw new NexaServiceException("errors.값확인.요청", resultMsg + "|업로드 파일을");
			
		}
    }
    
    /**
     * 자동이체 신청해지정보 적용 처리
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    
    @SuppressWarnings({"unchecked","rawtypes"})
    public void saveAtcngRqestApplyInfo(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	List<Map> inList = null;
		if(inDsMap != null){
			
			// 파라메타 정보 추출
			inList = inDsMap.getRowMaps();
			int inListSize = inList == null ? 0 : inList.size();
			
			String reqstResultCode = null;	// 신청결과코드
			String processResult = null;	// 처리결과
			
			for(int i = 0; i < inListSize; i++){
				
				Map inListItem = (Map)inList.get(i);
				
				String inReqstSe = (String)inListItem.get("REQST_SE");		// 신청구분 : 1:신청, 3:해지
				String inReqstDe = (String)inListItem.get("REQST_DE");		// 신청일자
				String inBankCode = (String)inListItem.get("BANK_CODE");	// 은행코드
				String inAcnutno = (String)inListItem.get("ACNUTNO");		// 계좌번호
				String inDpstr = (String)inListItem.get("DPSTR");			// 예금주명
				String inPayerNo = (String)inListItem.get("PAYER_NO");		// 납부자번호
				String inHouseCode = inPayerNo.substring(0, 3);				// 주택코드
				String inDong = inPayerNo.substring(3, 7);					// 동
				String inHo = inPayerNo.substring(7, 11);					// 호
				
				
				// 조회조건용 맵
				Map<String, Object> tempSchMap = new HashMap<String, Object>();
				tempSchMap.put("HOUSE_CODE", inHouseCode);	// 주택코드
				tempSchMap.put("DONG", inDong);				// 동
				tempSchMap.put("HO", inHo);					// 호
				
//System.out.println("inListItem = " + inListItem.toString());
				
				// [Step 1] 계약자 유무 체크
				String cntrctrNo = (String)baseDao.select("SLS040201DAO.selectAtcngReqstCntrctrNo", tempSchMap);
				
//System.out.println("[BEGIN] STEP1 계약자 유무 체크 cntrctrNo = " + cntrctrNo);
				
				Map<String, Object> houseSetleInfo = null;
				if(cntrctrNo == null){
//System.out.println("[ END ] STEP1 2002 대상 납부자 없음(자동이체미등록)");
					reqstResultCode = "2002";
					processResult = "대상 납부자 없음(자동이체미등록)";
				}else{
					
					// 조회 조건 추가
					tempSchMap.put("CNTRCTR_NO", cntrctrNo);	// 계약자 번호
					tempSchMap.put("ACNUTNO", inAcnutno);		// 계좌번호
					
//System.out.println("[BEGIN] STEP2 신청구분 확인/처리");
					// [Step 2] 신청구분 확인/처리
					if("3".equals(inReqstSe)){
						// [Step 2-1] 해당계좌 존재유무 체크
//System.out.println("[BEGIN] STEP2-1 해지  ====================");
						// 계약자번호, 계좌번호별 추택결제 정보 조회
						houseSetleInfo = (Map<String, Object>)baseDao.select("SLS040201DAO.selectHouseSetleInfo", tempSchMap);
						
						if(houseSetleInfo == null){
							// 계좌번호가 없을 경우
//System.out.println("해지 > 2003 해지신청시 계좌번호 불일치 ===");
							reqstResultCode = "2003";
							processResult = "해지신청시 계좌번호 불일치";
						}else{
							// 계좌번호가 있을 경우
//System.out.println("해지 > 000 정상처리  === " + houseSetleInfo.toString());
							// 해당 추택결제 정보를 사용유무를 0으로 업데이트
							houseSetleInfo.put("USE_AT", "0");	// 기본정보 사용유무를 "0"으로 설정
//System.out.println("해지 > 주택결제정보 사용유무 Update = " + houseSetleInfo.toString());
							baseDao.update("SLS040201DAO.updateHouseSetleInfo", houseSetleInfo);
							
							// 해당 추택결제(해지) 정보를 이력정보로 Insert 처리
//System.out.println("해지 > 주택결제정보 해지정보 Insert = " + houseSetleInfo.toString());
							baseDao.insert("SLS040201DAO.InsertHouseSetleInfo", houseSetleInfo);
							
							reqstResultCode = "0000";
							processResult = "정상처리";
						}
//System.out.println("[ END ] STEP2-1 해지  ====================");
					}else if("1".equals(inReqstSe)){
						// [Step 2-2] 신규
//System.out.println("[BEGIN] STEP2-2 신규  ====================");
						// 이중신청(동일 납부자번호&동일계좌) 확인
						tempSchMap.put("REQST_SE", inReqstSe);	// 신청구분 : 1:신청
						houseSetleInfo = (Map<String, Object>)baseDao.select("SLS040201DAO.selectHouseSetleInfo", tempSchMap);
						
						if(houseSetleInfo != null){
							// 이중신청(동일 납부자번호&동일계좌)
//System.out.println("신규  > 2005 정이중신청(동일 납부자번호&동일계좌)");
							reqstResultCode = "2005";
							processResult = "이중신청(동일 납부자번호&동일계좌)";
						}else{
							
							// 이중신청(동일 납부자번호&상이계좌) 확인
							tempSchMap.put("ACNUTNO_TYPE", "2");	// 계좌구분 : 1:동일, 2:상이
							houseSetleInfo = (Map<String, Object>)baseDao.select("SLS040201DAO.selectHouseSetleInfo", tempSchMap);
							
							if(houseSetleInfo != null){
								// 이중신청(동일 납부자번호&상이계좌)
//System.out.println("신규  > 2015 이중신청(동일 납부자번호&상이계좌)");
								reqstResultCode = "2015";
								processResult = "이중신청(동일 납부자번호&상이계좌)";
							}else{
								// 이중 신청 정보 없음.
//System.out.println("신규  > 0000 정상");
								Map<String, Object> insertMap = new HashMap<String, Object>();
								insertMap.put("CNTRCTR_NO", cntrctrNo);	// 계약자번호
								insertMap.put("SETLE_SE", "02");		// 결제구분 : 02(자동이체)
								insertMap.put("REQST_DE", inReqstDe);	// 신청일자
								insertMap.put("BANK_CODE", inBankCode);	// 은행코드
								insertMap.put("ACNUTNO", inAcnutno);	// 계좌번호
								insertMap.put("DPSTR",inDpstr); 		// 예금주
							    insertMap.put("USE_AT", "1");			// 사용여부 : 1(사용)
							    
								// 주택결제정보 신규 Insert 처리
//System.out.println("주택결제정보 신규 Insert = " + insertMap.toString());
								baseDao.insert("SLS040201DAO.insertHouseSetleInfo", insertMap);
								
								reqstResultCode = "0000";
								processResult = "정상처리";
							}
							
						}
//System.out.println("[ END ] STEP2-2 신규  ====================");
					}else{
						// [Step 2-3] 기타
//System.out.println("[BEGIN] STEP2-3 기타  ====================");
//System.out.println("기타  > 01 신청구분오류");
						reqstResultCode = "01";
						processResult = "신청구분오류";
//System.out.println("[ END ] STEP2-3 기타  ====================");
					}
//System.out.println("[ END ] STEP2 신청구분 확인/처리");
				}
				
				// [Step 3] 정보 업데이트 처리
//System.out.println("[BEGIN] STEP3 최종 자동이체 신규/해지정보 업데이트");
				inListItem.put("REQST_RESULT_CODE", reqstResultCode);
				inListItem.put("PROCESS_RESULT", processResult);
				
				System.out.println("Update ListItem = " + inListItem.toString());
				baseDao.update("SLS040201DAO.updateAtcngReqstResult", inListItem);
//System.out.println("[ END ] STEP3 최종 자동이체 신규/해지정보 업데이트");
			}
			
		}else{
			throw new NexaServiceException("info.수정데이터.없음");
		}
    }
    
    /**
     * 자동이체 결과파일을 생성한다.
     * @param xpDto
     * @return File
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes"})
    public File getAtcngReqstFile(NexacroMapDTO xpDto) throws NexaServiceException {
    	
    	try
    	{
	    	File atcngReqstFile = null;
	    	
	    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
	    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");	// 조회조건
	    	
	    	Map inMap = null;
			if (inDsMap != null){
				inMap = inDsMap.get(0);
				
				String inReqstYm = (String)inMap.get("REQST_YM");	// 신청월
				
				String exMsg = null;
				// 해당월 처리내역 확인(분양팀)
				int resultCnt = (Integer)baseDao.select("SLS040201DAO.selectAtcngReqstResultCnt", inMap);
				if(resultCnt < 1){
					// {0} 아닙니다. {1} 확인하세요
					// 해당월의 처리내역이 존재하지 않습니다.(분양팀)
					exMsg = "결과파일을 생성할 수 있는 신청월이|\n해당월(" + inReqstYm + ")의 처리내역이 존재하지 않습니다.(분양팀)\n신청월";
					throw new NexaServiceException("errors.값확인.요청", exMsg);
				}
				
				// 해당월 처리내역 확인(주거복지센터)
				int resultRntCnt = (Integer)baseDao.select("SLS040201DAO.selectAtcngReqstRntResultCnt", inMap);
				if(resultRntCnt < 1){
					// {0} 아닙니다. {1} 확인하세요
					// 해당월의 처리내역이 존재하지 않습니다.(분양팀)
					exMsg = "결과파일을 생성할 수 있는 신청월이|\n해당월(" + inReqstYm + ")의 처리내역이 존재하지 않습니다.(주거복지센터)\n신청월";
					throw new NexaServiceException("errors.값확인.요청", exMsg);
				}
				
				// 다운로드 파일 내용을 구선한다.
				String contents = getAtcngReqstFileContents(inMap);
				
				// 파일생성
				String inFileName = (String)inMap.get("FILE_NM");	// 파일명
				String downFileName = inFileName == null ? "ST31" + inReqstYm.substring(4, 6) + ".txt" : inFileName;
				
				atcngReqstFile = new File(downFileName);
				
				OutputStreamWriter ow = new OutputStreamWriter(new FileOutputStream(atcngReqstFile), "EUC-KR");
				BufferedWriter bw = new BufferedWriter(ow);
	
				bw.write(contents, 0, contents.length());
				
				bw.close();
			}
	    	
	    	return atcngReqstFile;
    	}
    	catch(Exception ex)
    	{
    		throw new NexaServiceException("err.파일.다운로드.실패", ex);
    	}
    }
    
    /**
     * 자동이체 신청/해지 결과파일 내용을 구성한다.
     * @param inMap
     * @return String
     * @throws Exception
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public String getAtcngReqstFileContents(Map inMap) throws Exception
    {
    	System.out.println("[BEGIN] 자동이체 신청해지 결과 DUCO > BANK File Layout =================");
    	
    	StringBuffer buffer = new StringBuffer();
    	String CRLF = "\r\n";

    	// 헤더구성용
    	Map<String, Object> reqstDeInfo = (Map<String, Object>)baseDao.select("SLS040201DAO.selectAtcngReqstDeInfo", inMap);

    	// 바디구성용
    	List<Map> bodyList = (List<Map>)baseDao.list("SLS040201DAO.selectAtcngReqstList", inMap);
    	
    	// 파일 헤더 구성
    	/*
    		// S15312141430
			// 150914150601150608                                                  
		    ls_Str := 'S15';
		    ls_Str := ls_Str + '31';
		    ls_Str := ls_Str + '2141430';
		    ls_Str := ls_Str + ls_Tran;		// 150914
		    ls_Str := ls_Str + ls_min;		// 150601
		    ls_Str := ls_Str + ls_max;		// 150608
		    ls_Str := ls_Str + StringOfChar(' ',50);
    	 */
    	String reTranDe = (String)reqstDeInfo.get("TRAN_DE");			// 생성일
    	String reMinReqstDe = (String)reqstDeInfo.get("MIN_REQST_DE");	// 최소일
    	String reMaxReqstDe = (String)reqstDeInfo.get("MAX_REQST_DE");	// 최대일
    	
    	buffer.append(StringUtil.rpad("S", ' ', 1));		// 헤더-데이터 구분('S'로 고정)
    	buffer.append(StringUtil.rpad("15", ' ', 2));		// 헤더-구분('15'로 고정)
    	buffer.append(StringUtil.rpad("31", ' ', 2));		// 헤더-은행코드('31'로 고정)
    	buffer.append(StringUtil.rpad("2141430", ' ', 7));	// 헤더-기관코드('2141430'로 고정)
    	buffer.append(StringUtil.rpad(reTranDe, ' ', 6));	// 헤더-생성일
    	
    	//헤더부를 80byte로 채워야 할 경우 하단의 if 절을 모두 제거한다.
    	//if(reMinReqstDe != null){
    		buffer.append(StringUtil.rpad(reMinReqstDe, ' ', 6));	// 헤더-최소일
    	//}
    	//if(reMaxReqstDe != null){
    		buffer.append(StringUtil.rpad(reMaxReqstDe, ' ', 6));	// 헤더-최대일
    	//}
    	buffer.append(StringUtil.rpad("", ' ', 50));				// 헤더-예비
    	
    	buffer.append(CRLF);
    	
    	// 파일 바디 구성
    	int inNewCnt = 0;
    	int inCancelCnt = 0;
    	int listSize = (bodyList == null? 0 : bodyList.size());
    	for(int i = 0; i < listSize; i++){
    		
    		Map bodyInfo = (Map)bodyList.get(i);
    		
    		String reqstDe = (String)bodyInfo.get("REQST_DE");					// 신청일자
    		String bankCode = (String)bodyInfo.get("BANK_CODE");				// 은행코드
    		String acnutno = (String)bodyInfo.get("ACNUTNO");					// 계좌번호
    		String fbsManageNo = (String)bodyInfo.get("FBS_MANAGE_NO");			// FSB관리번호
    		String payerNo = (String)bodyInfo.get("PAYER_NO");					// 납부자번호
    		String reqstSe = (String)bodyInfo.get("REQST_SE");					// 신청구분
    		String transfrHopeDe = (String)bodyInfo.get("TRANSFR_HOPE_DE");		// 이체희망일자
    		String reqstSpotCode = (String)bodyInfo.get("REQST_SPOT_CODE");		// 신청지점코드
    		String dpstr = (String)bodyInfo.get("DPSTR");						// 예금주명
    		String reqstResultCode = (String)bodyInfo.get("REQST_RESULT_CODE");	// 결과
    		
    		// 예금주명 Encoding 처리
    		byte[] byteRpadDpstr = StringUtil.rpad(dpstr, ' ', 12, "KSC-5601");
    		String encodeDpstr = new String(byteRpadDpstr, "EUC-KR");
    		
    		if("3".equals(reqstSe)){
    			inCancelCnt++;
    		}else if("1".equals(reqstSe)){
    			inNewCnt++;
    		}else{
    			// TODO
    		}
    		
    		/*
    		ls_Str := 'D';
	        ls_Str := ls_Str + FindField('XREC_DATE').AsString;                       //신청일자(6)
	        ls_Str := ls_Str + FindField('XBANK_CODE').AsString;                      //은행코드(2)
	        ls_Str := ls_Str + Format('%-15s',[ FindField('XPASSBOOK_NO').AsString]); //계좌번호(15)
	        ls_Str := ls_Str + Copy(FindField('XFBS_NO').AsString,1,7);               //FSB관리번호(7)
	        ls_Str := ls_Str + Format('%-23s',[ FindField('XPAY_NO').AsString ] );    //납부자번호(23)
	        ls_Str := ls_Str + Copy( FindField('XREC_TYPE').AsString,    1, 1);       //신청구분(1)
	        ls_Str := ls_Str + Copy( FindField('XICHE_DATE').AsString,   1, 2);       //이체희망일자(2)
	        ls_Str := ls_Str + Copy( FindField('XBRANCH_CODE').AsString, 1, 3 );      //신청지점코드(3)
	        ls_Str := ls_Str + Format('%-12s',[ Copy( FindField('XDEPOSIT_NAME').AsString, 1, 12 )]); //공백(12)
	        ls_Str := ls_Str + Format('%-8s',[ FindField('XREC_RESULT').AsString ] ); //결과(8)
    		*/
    		buffer.append(StringUtil.rpad("D", ' ', 1));				// 바디-데이터 구분('D'로 고정)
    		buffer.append(StringUtil.rpad(reqstDe.substring(2, 8), ' ', 6));	// 바디-신청일자[YYMMDD](6)
    		buffer.append(StringUtil.lpad(bankCode, ' ', 2));			// 바디-은행코드(2)
    		buffer.append(StringUtil.rpad(acnutno, ' ', 15));			// 바디-계좌번호(15)
    		buffer.append(StringUtil.rpad(fbsManageNo, ' ', 7));		// 바디-FSB관리번호(7)
    		buffer.append(StringUtil.rpad(payerNo, ' ', 23));			// 바디-납부자번호(23)
    		buffer.append(StringUtil.rpad(reqstSe, ' ', 1));			// 바디-신청구분(1)
    		buffer.append(StringUtil.rpad(transfrHopeDe, ' ', 2));		// 바디-이체희망일자(2)
    		buffer.append(StringUtil.rpad(reqstSpotCode, ' ', 3));		// 바디-신청지점코드(3)
    		buffer.append(StringUtil.rpad(encodeDpstr, ' ', 12));		// 바디-예금주명+공백(12)
    		buffer.append(StringUtil.rpad(reqstResultCode, ' ', 8));	// 바디-결과(8)
    		buffer.append(CRLF);
    	}
    	// 파일 테일 구성
    	/*
    		ls_Str := 'E';
		    ls_Str := ls_Str + Format('%.7d',[ li_New + li_cel + 2 ] );  // 전송Record수
		    ls_Str := ls_Str + Format('%.7d',[ li_New ] );               // 총신청건수
		    ls_Str := ls_Str + Format('%.7d',[ li_cel ] );               // 총해지건수
		    ls_Str := ls_Str + Format('%.7d',[ 0 ] );                    // 총변경건수
		    ls_Str := ls_Str + Format('%.7d',[ 0 ] );                    // 건수예비1
		    ls_Str := ls_Str + Format('%.7d',[ 0 ] );                    // 건수예비2
		    ls_Str := ls_Str + Format('%.7d',[ 0 ] );                    // 건수예비3
		    ls_Str := ls_Str + Format('%.7d',[ 0 ] );                    // 건수예비4
		    ls_Str := ls_Str + StringOfChar(' ',23);
    	 */
    	String totalRecord = String.valueOf(listSize + 2);
    	
    	buffer.append(StringUtil.rpad("E", ' ', 1));							// 테일-데이터 구분('E'로 고정)
    	buffer.append(StringUtil.lpad(totalRecord, '0', 7));					// 전송Record수(7)
    	buffer.append(StringUtil.lpad(String.valueOf(inNewCnt), '0', 7));		// 총신청건수(7)
    	buffer.append(StringUtil.lpad(String.valueOf(inCancelCnt), '0', 7));	// 총해지건수(7)
    	buffer.append(StringUtil.lpad("", '0', 7));								// 총변경건수(7)
    	buffer.append(StringUtil.lpad("", '0', 7));								// 건수예비1(7)
    	buffer.append(StringUtil.lpad("", '0', 7));								// 건수예비2(7)
    	buffer.append(StringUtil.lpad("", '0', 7));								// 건수예비3(7)
    	buffer.append(StringUtil.lpad("", '0', 7));								// 건수예비4(7)
    	buffer.append(StringUtil.rpad("", ' ', 23));							// 공백(예비)(23)
    	
    	System.out.println("[ END ] 자동이체 신청해지 결과 DUCO > BANK File Layout =================");
    	
    	return buffer.toString();
    }
    
    
    
	/**
     * 월별 자동이체 신청해지 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
	public void selectAtcngReqstTrmnatList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		
		resList = (List<Map>)baseDao.list("SLS040201DAO.selectAtcngReqstTrmnatList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("reqstTrmnatList", outDsMap);
	}
    
    /**
     * 월별 자동이체 신청해지 상세 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
	public void selectAtcngReqstDetList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		
		resList = (List<Map>)baseDao.list("SLS040201DAO.selectAtcngReqstDetList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(resList);
		
		outDataset.put("reqstDetList", outDsMap);
	}
}
