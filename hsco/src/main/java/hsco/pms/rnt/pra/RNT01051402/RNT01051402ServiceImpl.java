package hsco.pms.rnt.pra.RNT01051402;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT01051402ServiceImpl.java
 * @Description  	: 자동이체 청구내격 조회
 * @author       	: 김지훈
 * @since        	: 2015. 12. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 24.					김지훈			최초생성
 * </pre>  
 */
@Service("RNT01051402Service")
public class RNT01051402ServiceImpl extends BaseService{
	/**
	 * 자동이체 청구내역조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAtcngRqestRciv( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01051402DAO.selectAtcngRqestRciv", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	

    /**
     * 자동이체 청구화일 변환
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
     * 자동이체 청구자료 출력
     * @param inMap
     * @return String
     * @throws Exception
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public String getAtcngReqstFileContents(Map inMap) throws Exception
    {
    	System.out.println("[BEGIN] 청구자료생성 결과 DUCO > BANK File Layout =================");
    	
    	StringBuffer buffer = new StringBuffer();
    	String CRLF = "\r\n";

    	// 헤더구성용
    	Map<String, Object> reqstDeInfo = (Map<String, Object>)baseDao.select("RNT01051402DAO.getListHead", inMap);
       
    	// 바디구성용
    	List<Map> bodyList = (List<Map>)baseDao.list("RNT01051402DAO.getList", inMap);
    	
    	// 파일 헤더 구성
    	/*
     		Header Record (80 Byte)
    		S(Data 구분) + 5(File 구분) + 31(은행코드) + 2140010(관리번호) + 의뢰일자(YYMMDD) + 이체일자(YYMMDD) + CD31(고정값) + 청구년월(YYMM) + 공란(48)    	  
		    SQL.Add('SELECT ''1'' AS ord,                                                             ');
		    SQL.Add('       ''S5'' || ''31'' || ''2140010'' ||                                        ');
		    SQL.Add('       to_char(sysdate,''YYMMDD'') || :PayEndDate || ''CD'' || ''31'' ||         ');
		    SQL.Add('	      Substr( :Chul_YYYYMM , 3,4) || LPAD('' '',48,'' '') AS Pay_Data           ');
		    SQL.Add('       ,'' '' as gu_code, '' '' as dong, '' '' as ho                             ');
    	 */
    	String Transfr_Reqest_De = (String)reqstDeInfo.get("TRANSFR_REQEST_DE");			// 청구의뢰일자
    	String Defray_De = (String)reqstDeInfo.get("DEFRAY_DE");	// 이체일자
    	String Defray_Ym = (String)reqstDeInfo.get("DEFRAY_YM");	// 청구년월
    	String entrps_code = (String)inMap.get("SAM_ENTRPS_CODE");
    	
    	buffer.append(StringUtil.rpad("S5", ' ', 2));		// 헤더-데이터 구분('S'로 고정)
    	buffer.append(StringUtil.rpad("31", ' ', 2));		// 헤더-구분('15'로 고정)
    	buffer.append(StringUtil.rpad(entrps_code, ' ', 7));	// 헤더-기관코드 : 영구임대료 / 영구지원금
    	buffer.append(StringUtil.rpad(Transfr_Reqest_De, ' ', 6));	// 청구의뢰일자 (yymmdd)
    	buffer.append(StringUtil.rpad(Defray_De, ' ', 6));	// 이체일자 (yymmdd)
    	buffer.append(StringUtil.rpad("CD31", ' ', 4));		// 헤더-cd31(고정값)    	
    	buffer.append(StringUtil.rpad(Defray_Ym, ' ', 6));	// 헤더-청구년월
    	buffer.append(StringUtil.rpad("", ' ', 48));				// 헤더-예비
    	
    	buffer.append(CRLF);
    	
    	
    	
    	// 파일 바디 구성
    	int inNewCnt = 0;
    	int inCancelCnt = 0;
    	int Total_Amount = 0;
    	int listSize = (bodyList == null? 0 : bodyList.size());
    	
    	System.out.println("=================================================================================");
    	System.out.println(listSize);
    	System.out.println("=================================================================================");
    	for(int i = 0; i < listSize; i++){
    		
    		Map bodyInfo = (Map)bodyList.get(i);
    		
    		String Transfer_File_Se = (String)bodyInfo.get("TRANSFR_FILE_SE");					// 파일구분
    		String Dta_Se = (String)bodyInfo.get("DTA_SE");				// 자료구분 
    		String Defray_Sn = (String)bodyInfo.get("DEFRAY_SN").toString();					// 일련번호
    		String Bank_Code = (String)bodyInfo.get("BANK_CODE");			// 은행코드
    		String Acnutno = (String)bodyInfo.get("ACNUTNO");					// 계좌번호
    		String Defray_Reqest_Amount = (String)bodyInfo.get("DEFRAY_REQEST_AMOUNT").toString();					// 출금의뢰금액
    		String Defray_YM = (String)bodyInfo.get("DEFRAY_YM");		// 해당출금년월
    		String Cptal_Se = (String)bodyInfo.get("CPTAL_SE");		// 자금구분
    		String Area_Se = (String)bodyInfo.get("RENT_HOUSE_CODE");		// 자금구분
    		String Dong = (String)bodyInfo.get("DONG");		// 동
    		String Ho = (String)bodyInfo.get("HO");		// 호
    		String Cntrctr_No = (String)bodyInfo.get("CNTRCTR_NO");		// 계약자고유번호
    		Total_Amount = Total_Amount + Integer.parseInt(bodyInfo.get("DEFRAY_REQEST_AMOUNT").toString());		// 출금의뢰금액 총액
 
    		
    		/*
		    // D(Data 구분) + 5(File 구분) + 순차번호(6 Byte) + 31(은행코드) + 계좌번호(15 Byte) +
		    // 출금의뢰금액(11 Byte) + 공란(9 Byte) + 해당출금년월(YYMM) + 출금여부(1 Byte) + 불능코드(4 Byte) +
		    // 신규구분(1 Byte) + 자금구분(1 Byte / 2:임대료)  + 공란(2 Byte) +
		    // 업체활용란(22 Byte / 주택코드(3)+동(4)+호(4)+공란(1)+계약자고유번호(10) )
		    SQL.Add('SELECT ''2'' AS ord,                                                               ');
		    SQL.Add('       Data_Class || File_Div  || File_Seq || Bank_Code ||                         ');
		    SQL.Add('       RPAD(Pass_Book_No,15,'' '') || LPAD(Chul_Amt,11,''0'') ||                   ');
		    SQL.Add('	      LPAD('' '',9,'' '') || substr(Chul_YYYYMM,1,4) ||                           ');
		    SQL.Add('       LPAD('' '',6,'' '')     || Flag || ''  '' ||                                ');
		    SQL.Add('	      rtrim(gu_code) || dong || ho ||'' ''|| Pay_No AS Pay_Data                   ');
		    SQL.Add('       ,gu_code, dong, ho                                                          ');
		    SQL.Add('  FROM rnt_rent_autopay_demand                                                     ');
		    SQL.Add(' WHERE Chul_YYYYMM = :Chul_YYYYMM  AND Flag = ''2''                                ');
    		*/
    		buffer.append(StringUtil.rpad(Dta_Se, ' ', 1));				// 바디-데이터 구분(1)
    		buffer.append(StringUtil.rpad(Transfer_File_Se, ' ', 1));	// 바디-파일구분(1)
    		buffer.append(StringUtil.lpad(Defray_Sn, '0', 6));			// 바디-순차번호(6)
    		buffer.append(StringUtil.rpad(Bank_Code, ' ', 2));			// 바디-은행코드(2)
    		buffer.append(StringUtil.rpad(Acnutno, ' ', 15));			// 바디-계좌번호(15)
    		buffer.append(StringUtil.lpad(Defray_Reqest_Amount, '0', 11));			// 바디-출금의뢰금액(11)
    		buffer.append(StringUtil.rpad("", ' ', 9));					// 바디-공란(9)
    		buffer.append(StringUtil.rpad(Defray_YM, ' ', 4));		// 바디-해당출금년월(4)
    		buffer.append(StringUtil.rpad("", ' ', 1));		// 바디-출금여부(1)
    		buffer.append(StringUtil.rpad("", ' ', 4));		// 바디-불능코드(4)
    		buffer.append(StringUtil.rpad("", ' ', 1));		// 바디-신규구분(1)
    		buffer.append(StringUtil.rpad(Cptal_Se, ' ', 1));		// 바디-자금구분(1)
    		buffer.append(StringUtil.rpad("", ' ', 2));	// 바디-공란(2)    		
    		buffer.append(StringUtil.rpad(Area_Se, ' ', 3));	// 바디-주택코드(3)
    		buffer.append(StringUtil.rpad(Dong, ' ', 4));	// 바디-동(4)
    		buffer.append(StringUtil.lpad(Ho, '0', 4));	// 바디-호(4)
    		buffer.append(StringUtil.lpad("", ' ', 1));	// 공란(1)
    		buffer.append(StringUtil.rpad(Cntrctr_No, ' ', 10));	// 바디-계약자고유번호(10)
    		buffer.append(CRLF);
    	}
    	// 파일 테일 구성
    	/*
		    // E(Data 구분) + 5(File 구분) + 전송건수(7 Byte) + 출금의뢰건수(7 Byte) + 출금의뢰금액(13 Byte) +
		    // 출금건수(7 Byte) + 출금금액(13 Byte) + 미출금건수(7 Byte) + 미출금금액(13 Byte) + 공란
		    SQL.Add('SELECT ''3'' AS ord,                                                             ');
		    SQL.Add('       ''E5'' || LPAD(nvl(Count(1),0)+2,7,''0'') ||                              ');
		    SQL.Add('	      LPAD(nvl(Count(1),0),7,''0'') || LPAD(nvl(sum(CHUL_AMT),0),13,''0'') ||   ');
		    SQL.Add('	      LPAD(''0'',40,''0'') || LPAD('' '',11,'' '')  AS Pay_Data                 ');
    	 */
    	String totalRecord = String.valueOf(listSize + 2);
    	String Record = String.valueOf(listSize);
    	Map bodyInfo = (Map)bodyList.get(0); //(bodyList == null? 0 : bodyList.size());
    	//String total_sum = (String)bodyInfo.get("TOTAL_AMOUNT").toString();	// 청구년월
    	
    	buffer.append(StringUtil.rpad("E5", ' ', 2));							// 테일-데이터 , 파일구분('E5'로 고정)
    	buffer.append(StringUtil.lpad(totalRecord, '0', 7));					// 전송Record수(7)
    	buffer.append(StringUtil.lpad(Record , '0', 7));						// 출금의뢰건수(7)
    	buffer.append(StringUtil.lpad(String.valueOf(Total_Amount), '0', 13));	// 출금의뢰금액(13)
    	buffer.append(StringUtil.lpad("", '0', 7));								// 출금건수(7)
    	buffer.append(StringUtil.lpad("", '0', 13));							// 출금금액(13)
    	buffer.append(StringUtil.lpad("", '0', 7));								// 미출금건수(7)
    	buffer.append(StringUtil.lpad("", '0', 13));							// 미출금금액(13)
    	buffer.append(StringUtil.lpad("", ' ', 11));							// 공란(11)
 
    	System.out.println("[ END ] 청구자료생성 결과 DUCO > BANK File Layout =================");
    	
    	return buffer.toString();
    }
    
    /**
	 * 자동이체 청구자료 생성
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void saveAtcngRqestRciv(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT01051402DAO.SPRNT_RENT_AUTOPAY_DEMAND_ID", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
	}	
}
