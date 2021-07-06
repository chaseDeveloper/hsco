package hsco.pms.sls.hou.rci.SLS040202;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS040202ServiceImpl.java
 * @Description  	: 자동이체청구생성(공사->은행)  관리 ServiceImpl
 * @author       	: 정윤원
 * @since        	: 2015. 11.04
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
 *  
 * </pre>
 */
@Service("SLS040202Service")
public class SLS040202ServiceImpl extends BaseService implements SLS040202Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());	


	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

	
    /**
	 * 자동이체청구대상 등록 여부 체크
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectAtcngRqestCnt(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS040202DAO.selectAtcngRqestCnt", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 자동이체청구 수납 조회(기존 등록된 데이터가 있는경우조회)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectAtcngRqestList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS040202DAO.selectAtcngRqestList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 자동이체청구 대상(납부,주택결제) 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public void selectAtcngRqestTrgetList(DataSetMap tranInfo, Map<String, Object> inVar, 
				Map<String, DataSetMap> inDataset,
				Map<String, Object> outVar, 
				Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>)baseDao.list("SLS040202DAO.selectAtcngRqestTrgetList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	
	/**
	 * 자동이체청구 대상 신규 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
		
	@SuppressWarnings({ "unchecked", "rawtypes" })	
	public int insertAtcngRqestTrgetList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");


		int listSize = (list==null) ? 0 : list.size(); 
		
		log.debug("++++++++++++++++++++++++++++++++listSize:"+listSize);
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
				
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
		
			switch(rowType) {
			
			case DataSet.ROW_TYPE_INSERTED :
				
			//	baseDao.insert("SLS040202DAO.insertAtcngRqestTrgetList"        , map);  //입력
			//	break;
				
			case DataSet.ROW_TYPE_UPDATED :
			//	iRow += baseDao.update("SLS040202DAO.updateAtcngRqestTrgetList", map); //수정
			//	break;
				baseDao.insert("SLS040202DAO.insertAtcngRqestTrgetList"        , map);  //입력
				break;
				
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("SLS040202DAO.deleteAtcngRqestList" ,map); //삭제
				break;
		    }
			
		}

		return iRow;
	}
	
	
	
	/**
     * 자동이체 대상 결과파일을 생성한다.
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
				
				// 해당월 처리내역 확인(분양팀)
				
				// 해당월 처리내역 확인(주거복지센터)
							
				// 다운로드 파일 내용을 구선한다.
				String contents = getAtcngReqstFileContents(inMap);
				
				// 파일생성
				String inReqstYm = (String)inMap.get("REQST_YM");	// 신청월
				String inFileName = (String)inMap.get("FILE_NM");	// 파일명
				String downFileName = inFileName == null ? "D43" + inReqstYm + ".txt" : inFileName;
				
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
    		
    		System.out.println("파일 생성 실패~~~~~~~~");
    		
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
    	System.out.println("[BEGIN] 자동이체 생성 > BANK File Layout =================");
    	
    	StringBuffer buffer = new StringBuffer();
    	String CRLF = "\r\n";

    	// 헤더구성용
    	Map<String, Object> reqstDeInfo = (Map<String, Object>)baseDao.select("SLS040202DAO.selectAtcngRqestDeInfo", inMap);

    	// 바디구성용
    	List<Map> bodyList = (List<Map>)baseDao.list("SLS040202DAO.selectAtcngRqestFile", inMap);
    	
    	// 파일 헤더 구성(AS IS) 예제
    	/*
    		ls_Str := 'S5';
		    ls_Str := ls_Str + '31';
		    ls_Str := ls_Str + '2141430';
		    ls_Str := ls_Str + FormatDateTime('yymmdd', Date);
		    ls_Str := ls_Str + FormatDateTime('yymmdd', dpkVPayEnd_Date.Date);
		    ls_Str := ls_Str + 'CD31';
		    ls_Str := ls_Str + RightStr( FN_Replace(speMonth.Text, '-'), 4 );
		    ls_Str := ls_Str + StringOfChar(' ',49);
		     Writeln(F, ls_Str);
    	 */
    	String reTranDe     = (String)reqstDeInfo.get("TRAN_DE"      );	// 생성일(현재날짜,YYMMDD)
    	String reMinReqstDe = (String)reqstDeInfo.get("MIN_RQEST_DE" );	// 이체일자(YYMMDD)
    	String reMaxReqstDe = (String)reqstDeInfo.get("MAX_RQEST_DE" );	// 청구년월(YYMM)
    	
    	buffer.append(StringUtil.rpad("S5"         , ' ' , 2 )); // 헤더-데이터 구분('S5'로 고정)
    	buffer.append(StringUtil.rpad("31"         , ' ' , 2 )); // 헤더-은행코드('31'로 고정)
    	buffer.append(StringUtil.rpad("2141430"    , ' ' , 7 )); // 헤더-기관코드('2141430'로 고정)
    	buffer.append(StringUtil.rpad(reTranDe     , ' ' , 6 )); // 헤더-생성일(현재날짜,YYMMDD)
    	buffer.append(StringUtil.rpad(reMinReqstDe , ' ' , 6 )); // 헤더-이체일자:YYMMDD
    	buffer.append(StringUtil.rpad("CD31"       , ' ' , 4 )); // 헤더-'CD31'로 고정
    	buffer.append(StringUtil.rpad(reMaxReqstDe , ' ' , 4 )); // 헤더-청구년월(YYMM)
    	buffer.append(StringUtil.rpad(""           , ' ' , 49)); // 헤더-예비(헤더 전체 80Byte)
    	buffer.append(CRLF);
    	
    	//헤더부를 80byte로 채워야 할 경우 하단의 if 절을 모두 제거한다.
    	//if(reMinReqstDe != null){
    	    //buffer.append(StringUtil.rpad(reMinReqstDe, ' ', 6));	// (현재날짜,YYMMDD)
    	//}

    	//if(reMaxReqstDe != null){
    	    //buffer.append(StringUtil.rpad(reMaxReqstDe, ' ', 4));	// 청구년월(YYMM)
    	//}
    	//buffer.append(StringUtil.rpad("", ' ', 50));				// 헤더-예비
    	//buffer.append(CRLF);
    	

    	// 파일 바디 구성
    	long totalSumAmt  = 0; //출금의뢰 총 금액(11)

    	int listSize = (bodyList == null? 0 : bodyList.size());
    	for(int i = 0; i < listSize; i++){
    		
    		Map bodyInfo = (Map)bodyList.get(i);
    		
    		String data_type          = (String)bodyInfo.get("F_DATA_TYPE"       ); //자료구분(1)
    		String file_type          = (String)bodyInfo.get("F_FILE_TYPE"       ); //화일구분(1)
    		String file_seq           = String.valueOf(bodyInfo.get("F_FILE_SEQ")); //일련번호(6)
    		String bank_code          = (String)bodyInfo.get("F_BANK_CODE"       ); //은행코드(2)
    		String pass_book_no       = (String)bodyInfo.get("F_PASS_BOOK_NO"    ); //계좌번호(15)
    		String chul_amt           = String.valueOf(bodyInfo.get("F_CHUL_AMT")); //출금의뢰금액(11)
    		String space1             = (String)bodyInfo.get("F_SPACE1"          ); //공백1(9)
    		String chul_yymm          = (String)bodyInfo.get("F_CHUL_YYMM"       );	//출금연월(4) 
    		String space2             = (String)bodyInfo.get("F_SPACE2"          ); //공백2(1)
    		String space3             = (String)bodyInfo.get("F_SPACE3"          ); //공백3(4)
    		String space4             = (String)bodyInfo.get("F_SPACE4"          ); //공백4(1)
    		String jakum_type         = (String)bodyInfo.get("F_JAKUM_TYPE"      );	//자금구분(1)
    		String space5             = (String)bodyInfo.get("F_SPACE5"          ); //공백5(2)
    		String apt_code           = (String)bodyInfo.get("F_APT_CODE"        );	//주택코드(3)
    		String dong               = (String)bodyInfo.get("F_DONG"            );	//동(4)
    		String ho                 = (String)bodyInfo.get("F_HO"              );	//호(4)
    		String space6             = (String)bodyInfo.get("F_SPACE6"          ); //공백6(1)
    		String rel_info           = (String)bodyInfo.get("F_REL_INFO"        ); //회사관련정보(10)-주택계약번호
    		
    		/* AS IS 예제
    		ls_Str :=          FindField('F_DATA_TYPE').AsString;      //자료구분(1)
	        ls_Str := ls_Str + FindField('F_FILE_TYPE').AsString;      //화일구분(1)
	        ls_Str := ls_Str + FindField('F_FILE_SEQ').AsString;       //순차번호(6)
	        ls_Str := ls_Str + FindField('F_BANK_CODE').AsString;      //은행코드(2)
	        ls_Str := ls_Str + Format('%-15s',[ FindField('F_PASS_BOOK_NO').AsString ] );   //계좌번호(15)
	        ls_Str := ls_Str + Format('%.11d',[ FindField('F_CHUL_AMT').AsInteger ] );      //출금금액(11)
	        ls_Str := ls_Str + StringOfChar(' ', 9);                                        //공백(9)
	        ls_Str := ls_Str + FindField('F_CHUL_YYMM').AsString;                           //출금연월(4)
	        ls_Str := ls_Str + StringOfChar(' ', 1);
	        ls_Str := ls_Str + StringOfChar(' ', 4);
	        ls_Str := ls_Str + StringOfChar(' ', 1);
	        ls_Str := ls_Str + FindField('F_JAKUM_TYPE').AsString;
	        ls_Str := ls_Str + StringOfChar(' ', 2);
	        ls_Str := ls_Str + Copy( FindField('F_APT_CODE').AsString , 1, 3 );
	        ls_Str := ls_Str + FindField('F_DONG').AsString;
	        ls_Str := ls_Str + FindField('F_HO').AsString;
	        ls_Str := ls_Str + ' ' + FindField('F_REL_INFO').AsString;
	        Writeln(F, ls_Str);
    		*/ 
    		
    		buffer.append(StringUtil.rpad(data_type    ,' ' , 1 ));	// 바디-자료구분(1), D
    		buffer.append(StringUtil.rpad(file_type    ,' ' , 1 ));	// 바디- 화일구분(1)
    		buffer.append(StringUtil.lpad(file_seq     ,'0' , 6 ));	// 바디-순차번호(6)
    		buffer.append(StringUtil.rpad(bank_code    ,' ' , 2 ));	// 바디-은행코드(2)
    		buffer.append(StringUtil.rpad(pass_book_no ,' ' , 15));	// 바디-계좌번호(15)
    		buffer.append(StringUtil.lpad(chul_amt     ,'0' , 11));	// 바디-출금금액(11)
    		buffer.append(StringUtil.rpad(space1       ,' ' , 9 ));	// 바디-공란1(9)
    		buffer.append(StringUtil.rpad(chul_yymm    ,' ' , 4 )); // 바디-출금연월(4)
    		buffer.append(StringUtil.rpad(space2       ,' ' , 1 ));	// 바디- space2 출금여부(1)
    		buffer.append(StringUtil.rpad(space3       ,' ' , 4 ));	// 바디-space3 불능코드(4)
    		buffer.append(StringUtil.rpad(space4       ,' ' , 1 ));	// 바디-space4신규구분(1)
    		buffer.append(StringUtil.rpad(jakum_type   ,' ' , 1 ));	// 바디-자금구분(1)
    		buffer.append(StringUtil.rpad(space5       ,' ' , 2 ));	// 바디-space4 공란(2)
    		buffer.append(StringUtil.rpad(apt_code     ,' ' , 3 ));	// 바디-주택코드(3)
    		buffer.append(StringUtil.rpad(dong         ,' ' , 4 ));	// 바디-동(4)
    		buffer.append(StringUtil.lpad(ho           ,'0' , 4 ));	// 바디-호(4)
    		buffer.append(StringUtil.rpad(space6       ,' ' , 1 ));	// 공란(1)
    		buffer.append(StringUtil.rpad(rel_info     ,' ' , 10));	// 회사관련정보(10)-계약번호
    		buffer.append(CRLF);
    		
    		totalSumAmt = totalSumAmt + Long.parseLong(String.valueOf(bodyInfo.get("F_CHUL_AMT"))); //출금의뢰 총 금액(11)
    	}
    	// 파일 테일 구성
    	/*
    		  	ls_Str := 'E5';
			    ls_Str := ls_Str + Format('%.7d', [ li_New + 2 ] );
			    ls_Str := ls_Str + Format('%.7d', [ li_New     ] );
			    ls_Str := ls_Str + Format('%.13d',[ li_SumAmt  ] );
			    ls_Str := ls_Str + StringOfChar('0',40);
			    ls_Str := ls_Str + StringOfChar(' ',11);

               Writeln(F, ls_Str);
    	 */
    	String totalRecord = String.valueOf(listSize + 2)   ; // 전송Record수
    	String Record      = String.valueOf(listSize)       ; // 출금의뢰건수
    	String total_sum   = Long.toString(totalSumAmt)     ; // 출금의뢰 총 금액(13)
    	
    	buffer.append(StringUtil.rpad("E5"        ,' ' , 2 )); // 테일-데이터 , 파일구분('E5'로 고정)
    	buffer.append(StringUtil.lpad(totalRecord ,'0' , 7 )); // 전송Record수(7)
    	buffer.append(StringUtil.lpad(Record      ,'0' , 7 )); // 출금의뢰건수(7)
    	buffer.append(StringUtil.lpad(total_sum   ,'0' , 13)); // 출금의뢰 총 금액(13)
    	buffer.append(StringUtil.lpad(""          ,'0' , 7 )); // 출금건수(7)
    	buffer.append(StringUtil.lpad(""          ,'0' , 13)); // 출금금액(13)
    	buffer.append(StringUtil.lpad(""          ,'0' , 7 )); // 미출금건수(7)
    	buffer.append(StringUtil.lpad(""          ,'0' , 13)); // 미출금금액(13)
    	buffer.append(StringUtil.lpad(""          ,' ' , 11)); // 공란(11)
    	
    	System.out.println("[ END ] 자동이체 대상 결과 파일생성 DUCO > BANK File Layout =================");
    	
    	return buffer.toString();
    }
    
	
	
}
