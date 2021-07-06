package hsco.pms.rnt.lrm.RNT030404;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
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
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;
import hsco.pms.com.COM000000.COM000000ServiceImpl;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT030404ServiceImpl.java
 * @Description  	: 
 * @author       	: 이광원
 * @since        	: 2015. 11. 4.
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

@SuppressWarnings("unused")
@Service("RNT030404Service")
public class RNT030404ServiceImpl extends BaseService implements RNT030404Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

    @Resource(name = "COM000000Service")
    protected COM000000ServiceImpl COM000000Service;    
    
    
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
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		Map resMap = null;
		
		resMap = (Map)baseDao.select("RNT030404DAO.selectAtcngReqstSumInfo", inMap);
		
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
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map> resList = null;
		
		resList = (List<Map>)baseDao.list("RNT030404DAO.selectAtcngReqstList", inMap);
		
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
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if(inDsMap != null)
			inMap = inDsMap.get(0);
		
		Map resMap = null;
		
		resMap = (Map)baseDao.select("RNT030404DAO.selectAtcngProcessCnt", inMap);
		
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
     * @throws Exception
     */
    
    @SuppressWarnings({"unchecked","rawtypes"})
    public void uploadAtcngRqestList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws Exception {
    	
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
			baseDao.delete("RNT030404DAO.deleteAtcngInfo", inMap);
			
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
				/*
				int rntHouseCnt = (Integer)baseDao.select("SLS040201DAO.selectRentHouseCnt", bdHouseCode);
				
				if(rntHouseCnt > 0){
					continue;
				}
				
				// 주택코드 변환 - AS-IS에서는 resHouseCode == null 일 경우 continue 구분이 있으나 주석처리 되어있음.
				String resHouseCode = (String)baseDao.select("SLS040201DAO.selectReqstHouseCode", bdHouseCode);
				*/
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
				
				// 추가 저장값 설정
				bodyItem.put("REQST_YM", inReqstYm);		// 신청월
				bodyItem.put("REQST_SE_NM", resReqstSeNm);	// 신청 구분명 설정
				bodyItem.put("S_USER_ID", inUserId);			// 사용자ID
								
				// 월별 자동이체 신청/해지정보 건별 등록
				baseDao.insert("RNT030404DAO.insertAtcngReqstInfo", bodyItem);
				//baseDao.insert("RNT030404DAO.insertAtcngInfo", bodyItem);
				
				
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
     * 자동이체 결과파일을 생성한다.
     * @param xpDto
     * @return File
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes"})
    public File getAtcngReqstFile(NexacroMapDTO xpDto) throws Exception {
    	
    	File atcngReqstFile = null;
    	
    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");	// 조회조건
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
			
			// 해당월 처리내역 확인(분양팀)
			
			// 해당월 처리내역 확인(주거복지센터)
						
			// 다운로드 파일 내용을 구선한다.
			String contents = getAtcngReqstFileContents(inMap);
			
			// 파일생성
			String inReqstYm = (String)inMap.get("REQST_YM");	// 신청월
			String inFileName = (String)inMap.get("FILE_NM");	// 파일명
			String downFileName = inFileName == null ? "RNT" + inReqstYm.substring(4, 6) + ".txt" : inFileName;
			
			atcngReqstFile = new File(downFileName);
			
			OutputStreamWriter ow = new OutputStreamWriter(new FileOutputStream(atcngReqstFile), "EUC-KR");
			BufferedWriter bw = new BufferedWriter(ow);

			bw.write(contents, 0, contents.length());
			
			bw.close();
		}
    	
    	return atcngReqstFile;
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
    	Map<String, Object> reqstDeInfo = (Map<String, Object>)baseDao.select("RNT030404DAO.selectAtcngReqstDeInfo", inMap);

    	// 바디구성용
    	List<Map> bodyList = (List<Map>)baseDao.list("RNT030404DAO.selectAtcngReqstList", inMap);
    	
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
    	buffer.append(StringUtil.rpad("2140010", ' ', 7));	// 헤더-기관코드('2140010'로 고정)
    	buffer.append(StringUtil.rpad(reTranDe, ' ', 6));	// 헤더-생성일
    	buffer.append(StringUtil.rpad("", ' ', 50));				// 헤더-예비
    	
    	buffer.append(CRLF);
    	
    	// 파일 바디 구성
    	int inNewCnt = 0;
    	int inCancelCnt = 0;
    	int listSize = (bodyList == null? 0 : bodyList.size());
    	for(int i = 0; i < listSize; i++){
    		
    		Map bodyInfo = (Map)bodyList.get(i);
    		
    		String reqstDe = (String)bodyInfo.get("REQST_DE2");					// 신청일자
    		String bankCode = (String)bodyInfo.get("BANK_CODE2");				// 은행코드
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
    		buffer.append(StringUtil.rpad(reqstDe, ' ', 6));	// 바디-신청일자[YYMMDD](6)
    		buffer.append(StringUtil.rpad(bankCode, ' ', 2));			// 바디-은행코드(2)
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
     * 자동이체정보 입력 및 신청결과 등록 .
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings("rawtypes")
	public void listCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		log.debug("프로시저 호출 ----------------------------------------------------!");		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT030404DAO.SP_RN_RENT_AUTOPAY_DESC_IU", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

	}	
	
}