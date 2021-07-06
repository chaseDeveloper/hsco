package hsco.pms.sls.hou.rci.SLS040102;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.HashMap;
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
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020101ServiceImpl.java
 * @Description  	: 
 * @author       	: 홍길동
 * @since        	: 2015. 8.17.
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
 *  2015. 8. 17.		 홍길동			최초생성
 * </pre>
 */
@Service("SLS040102Service")
public class SLS040102ServiceImpl extends BaseService implements SLS040102Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
		
    
	/**
	 * 주택코드조회 조회영역사용
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseCashRcipt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS040102DAO.selectHouseCashRcipt", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 현금영수증 기존테이블 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseCashRciptList1( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS040102DAO.selectHouseCashRciptList1", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}	
	/**
	 * 현금영수증 생성자료 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectHouseCashRciptList2( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS040102DAO.selectHouseCashRciptList2", inMap);

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

	
    /**
     * 현금영수증 생성자료 입력 프로시저 호출
     * @param inMap
     * @return String
     * @throws Exception
     */    
	@SuppressWarnings("rawtypes")
	public void spsls_house_cash_rcipt_i(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		log.debug("프로시저 호출 ----------------------------------------------------!");		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		//for (int x = 0; x < inDsMap.size(); x++) {
			
		//Map<String, Object> map = inDsMap.get(x);
		records = (List<Map>)baseDao.list("SLS040102DAO.SPSLS_HOUSE_CASH_RCIPT_I", inMap);		
		//}
	}		
	
    /**
     * 현금영수증 결과파일생성
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
     * 현금영수증 결과파일 내용을 구성한다.
     * @param inMap
     * @return String
     * @throws Exception
     */
    @SuppressWarnings({"unchecked","rawtypes"})
    public String getAtcngReqstFileContents(Map inMap) throws Exception
    {
    	System.out.println("[BEGIN] 현금영수증 결과   =================");
    	
    	StringBuffer buffer = new StringBuffer();
    	String CRLF = "\r\n";

    	// 헤더구성용
    	Map<String, Object> reqstDeInfoHeader = (Map<String, Object>)baseDao.select("SLS040102DAO.CashRciptHeader", inMap);

    	// 바디구성용
    	List<Map> bodyList = (List<Map>)baseDao.list("SLS040102DAO.CashRciptBody", inMap);
    	
    	// 헤더구성용
    	Map<String, Object> reqstDeInfoTail = (Map<String, Object>)baseDao.select("SLS040102DAO.CashRciptTail", inMap);
    	/*
		     Header Record (150 Byte)
		     H(Record 구분(1)) + 0000000(일련번호(7)) + HP00000000(가맹점기관코드(10)) +
		     HR11MMDD(파일이름(8)) + 파일생성일자(YYYYMMDD(8)) + 5048206254(가맹점사업자등록번호(10)) +
		        공란(가맹점 Terminal-ID(16)) + 공란(90)
    	 */
    	String FileNm = (String)reqstDeInfoHeader.get("File_Nm");			// 생성일
    	String CreatDe = (String)reqstDeInfoHeader.get("Creat_De");	// 최소일
    	
    	buffer.append(StringUtil.rpad("1", ' ', 1));		// 헤더-구분
    	buffer.append(StringUtil.rpad("0000000", ' ', 7));		// 헤더-일련번호
    	buffer.append(StringUtil.rpad("HP00000000", ' ', 10));		// 헤더-가맹점기관코드
    	buffer.append(StringUtil.rpad(FileNm, ' ', 8));	// 헤더-파일이름
    	buffer.append(StringUtil.rpad(CreatDe, ' ', 8));	// 헤더-파일생성일자
    	buffer.append(StringUtil.rpad("5048206254", ' ', 10));				// 헤더-사업자등록번호
    	buffer.append(StringUtil.rpad("                ", ' ', 16));				// 헤더-공란(가맹점ID)
    	buffer.append(StringUtil.rpad(" ", ' ', 90));				// 헤더-공란
    	buffer.append(CRLF);
    	
    	// 파일 바디 구성
    	int listSize = (bodyList == null? 0 : bodyList.size());
    	for(int i = 0; i < listSize; i++){
    		
    		Map bodyInfo = (Map)bodyList.get(i);
    		
    		String creatSn = bodyInfo.get("CREAT_SN").toString();				// 일련번호
    		String ihidNum = (String)bodyInfo.get("IHIDNUM");				// 신분확인
    		String tdate   = (String)bodyInfo.get("TDATE");					// 거래일자
    		String suply_Amount = bodyInfo.get("SUPLY_AMOUNT").toString();		// 금액
    		String cntrctr_se = (String)bodyInfo.get("CNTRCTR_SE");			// 거래자구분
    		String delng_se = (String)bodyInfo.get("DELNG_SE");				// 거래구분
    		String memor_input_at = (String)bodyInfo.get("MEMOR_INPUT_AT"); // 수기입력여부
    		String tcont_info = (String)bodyInfo.get("TCONT_INFO"); 		// 가맹정사용영역(고객번호+주택코드+동+호)
    		
    		
    		
    		/*
			     Data Record (150 Byte)
			     D(Record 구분(1)) + 일련번호(7) + HP+7자리+0(가맹점기관코드(10)) + 5048206254(사업자등록번호(10)) +
			  	 YYMMDDHHMMSS(거래일자(12)) + 공급가액(9) + 부가가치세(9) + 봉사료(9) + 거래금액총합계(9) +
			        거래자구분(1) + 거래구분(1) + 신분확인(20) + 수기입력여부(1) +
			        오류처리구분(1) + 오류코드(3) + 거래구분(1) + 가맹점 사용영역(25) + 공란(12)
    		*/
    		buffer.append(StringUtil.rpad("2", ' ', 1));				// 바디-레코드 구분
    		buffer.append(StringUtil.lpad(creatSn, '0', 7));			// 바디-일련번호
    		buffer.append(StringUtil.rpad("D", ' ', 1));				// 바디-고정값
    		buffer.append(StringUtil.rpad("HP", ' ', 2));				// 바디-고정값
    		buffer.append(StringUtil.rpad("0000003", ' ', 7));			// 바디-가맹점기관코드
    		buffer.append(StringUtil.rpad("0", ' ', 1));				// 바디-고정값
    		buffer.append(StringUtil.rpad("         ", ' ', 9));		// 바디-고정값
    		buffer.append(StringUtil.rpad("5048206254", ' ', 10));		// 바디-사업자등록번호    		
    		buffer.append(StringUtil.rpad(tdate, ' ', 12));				// 바디-거래일자
    		buffer.append(StringUtil.lpad(suply_Amount, '0', 9));		// 바디-공급가액
    		buffer.append(StringUtil.lpad("0", '0', 9));				// 바디-부가가치세
    		buffer.append(StringUtil.lpad("0", '0', 9));				// 바디-봉사료
    		buffer.append(StringUtil.lpad(suply_Amount, '0', 9));		// 바디-거래금액총합계    		    		
    		buffer.append(StringUtil.rpad(cntrctr_se, ' ', 1));			// 바디-거래자구분
    		buffer.append(StringUtil.rpad(delng_se, ' ', 1));			// 바디-거래구분
    		buffer.append(StringUtil.rpad(ihidNum, ' ', 20));			// 바디-신분확인
    		buffer.append(StringUtil.rpad(memor_input_at, ' ', 1));		// 바디-수기입력여부
    		buffer.append(StringUtil.rpad("     ", ' ', 5));			// 바디-오류처리구분,오류코드,거래구분
    		buffer.append(StringUtil.rpad(tcont_info, ' ', 25));		// 바디-가맹점 사용영역
    		buffer.append(StringUtil.rpad("            ", ' ', 12));	// 바디-공란
    		buffer.append(CRLF);
    	}
    	// 파일 테일 구성
    	/*
		   Trailer Record (150 Byte)
		   T(Record 구분) + 9999999(File 구분) + 전송건수(7 Byte) + 출금의뢰건수(7 Byte) + 출금의뢰금액(13 Byte) +
		     출금건수(7 Byte) + 출금금액(13 Byte) + 미출금건수(7 Byte) + 미출금금액(13 Byte) + 공란
    	 */
    	String tDate1 = (String)reqstDeInfoTail.get("TDATE1");			// 생성일
    	String tDate2 = (String)reqstDeInfoTail.get("TDATE2");			// 생성일
    	String tCount = reqstDeInfoTail.get("TCOUNT").toString();			// 총건수
    	String tSum   = reqstDeInfoTail.get("TSUM").toString();			// 총건수
    	
    	buffer.append(StringUtil.rpad("3", ' ', 1));					// 테일-데이터 구분('E'로 고정)
    	buffer.append(StringUtil.lpad("0000000", '0', 7));				// 전송Record수(7)
    	buffer.append(StringUtil.lpad("T", '0', 1));					// 총신청건수(7)
    	buffer.append(StringUtil.lpad("9999999", '0', 7));				// 총해지건수(7)
    	buffer.append(StringUtil.lpad("HP00000030", '0', 10));			// 총변경건수(7)
    	buffer.append(StringUtil.lpad("HR11", '0', 4));					// 건수예비1(7)
    	buffer.append(StringUtil.lpad(tDate1, '0', 2));		 		// 건수예비2(7)
    	buffer.append(StringUtil.lpad(tDate2, '0', 2));				// 건수예비3(7)
    	buffer.append(StringUtil.lpad(tCount, '0', 7));				// 건수예비4(7)
    	buffer.append(StringUtil.lpad(tSum, '0', 13));				// 공백(예비)(23)
    	buffer.append(StringUtil.lpad("0", '0', 40));					// 공백(예비)(23)
    	buffer.append(StringUtil.rpad(" ", ' ', 64));					// 공백(예비)(23)
    	
    	System.out.println("[ END ] 현금영수증 결과  =================");
    	
    	return buffer.toString();
    }	
	
	
}


