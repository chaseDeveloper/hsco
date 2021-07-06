package hsco.mis.sal.SAL050207;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL050207ServiceImpl.java
 * @Description  	: 연말정산전산매체생성관리
 * @author       	: 이상명
 * @since        	: 2015. 10. 27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 27.					이상명				최초생성
 * </pre>  
 */

@Service("SAL050207Service")
public class SAL050207ServiceImpl extends BaseService implements SAL050207Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 연말정산결과 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectYndMediumEmpList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL050207DAO.selectYndMediumEmpList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL050207DAO.selectYndMediumEmpList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		List <Map> records2;

		if (inMap != null) {
			records2 = (List<Map>)baseDao.list("SAL050207DAO.selectYndMediumList", inMap);
		} else {
			records2 = (List<Map>)baseDao.list("SAL050207DAO.selectYndMediumList", inVar);
		}
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output2", outDsMap2);
		
		List <Map> records3;

		if (inMap != null) {
			records3 = (List<Map>)baseDao.list("SAL050207DAO.selectYndMedium2List", inMap);
		} else {
			records3 = (List<Map>)baseDao.list("SAL050207DAO.selectYndMedium2List", inVar);
		}
		
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps(records3);
		
		outDataset.put("output3", outDsMap3);
   		
   	}
    
    /**
	 * 퇴직소득 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectYndMediumEmp2List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL050207DAO.selectYndMediumEmp2List", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL050207DAO.selectYndMediumEmp2List", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
		List <Map> records2;

		if (inMap != null) {
			records2 = (List<Map>)baseDao.list("SAL050207DAO.selectYndMediumEmp3List", inMap);
		} else {
			records2 = (List<Map>)baseDao.list("SAL050207DAO.selectYndMediumEmp3List", inVar);
		}
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output2", outDsMap2);
		
   }
    
   private String blank(Object o, int type, int length) throws Exception {
		
		String s = String.valueOf(o);
		if(StringUtil.isNull(s)){
			s = "";
		}
		//0 숫자 1 문자
		
		if(type==0){
			if(s.length() > length){
				//길이잘라내기
				return StringUtil.rpadByte(s, (char) 0, length-3)+"..."; 
			 }
			return StringUtil.lpad(s, '0', length).toString();
		}else{
				 // s 의 byte
			if(s.getBytes("ksc5601").length > length){
				String r_val = s;
				int oF = 0, oL = 0, rF = 0, rL = 0;
				int lengthPrev = 0;
				byte[] bytes = r_val.getBytes("UTF-8"); // 바이트로 보관
				int j = 0;
				if (lengthPrev > 0)
				while (j < bytes.length)
				{
					if ((bytes[j] & 0x80) != 0){
						oF += 2; rF += 3;
						if (oF + 2 > lengthPrev){
						break;
						}
						j += 3;
					}else{
						if (oF + 1 > lengthPrev){
							break;
						}
					++oF; ++rF; ++j;
					}
				}
				j = rF;
				while (j < bytes.length){
					if ((bytes[j] & 0x80) != 0){
						if (oL + 2 > length){
							break;
						}
						oL += 2; rL += 3; j += 3;
					}else{
					if (oL + 1 > length){
						break;
					}
					++oL; ++rL; ++j;
					}
				}
				r_val = new String(bytes, rF, rL, "UTF-8"); // charset 옵션
				if(r_val.getBytes("ksc5601").length <length){
					r_val += ' ';
				}
				return r_val;
			}else{
				for(int i=s.getBytes("ksc5601").length; i<length; i++){
						s = s + ' ';
				}
				return s;
			}
		}
	}
    
    /**
     * 연말정산 근로소득전산매체파일을 생성한다.
     * @param xpDto
     * @return File
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes"})
    public File getAtcngReqstFile(NexacroMapDTO xpDto) throws NexaServiceException {
    	System.out.println("[BEGIN] 전산매체생성 - 근로소득매체생성 =================");
    	try
    	{
	    	File atcngReqstFile = null;
	    	
	    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
	    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");	// 조회조건
	    	
	    	Map inMap = null;
			if (inDsMap != null){
				inMap = inDsMap.get(0);				
				
				// 다운로드 파일 내용을 구성한다.
				String contents = getAtcngReqstFileContents(inMap,inDsMap);
				
				// 파일생성				
				String downFileName = (String)inMap.get("file_name");	// 파일명
				
				atcngReqstFile = new File(downFileName);
				
				OutputStreamWriter ow = new OutputStreamWriter(new FileOutputStream(atcngReqstFile), "ksc5601");
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
     * 연말정산 의료비전산매체파일을 생성한다.
     * @param xpDto
     * @return File
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes"})
    public File getAtcngReqstFile2(NexacroMapDTO xpDto) throws NexaServiceException {
    	System.out.println("[BEGIN] 전산매체생성 - 의료비매체생성 =================");
    	try
    	{
	    	File atcngReqstFile = null;
	    	
	    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
	    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");	// 조회조건
	    	
	    	Map inMap = null;
			if (inDsMap != null){
				inMap = inDsMap.get(0);				
				
				// 다운로드 파일 내용을 구성한다.
				String contents = getAtcngReqstFileContents2(inMap,inDsMap);
				
				// 파일생성				
				String downFileName = (String)inMap.get("file_name");	// 파일명
				
				atcngReqstFile = new File(downFileName);
				
				OutputStreamWriter ow = new OutputStreamWriter(new FileOutputStream(atcngReqstFile), "ksc5601");
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
     * 연말정산 기부금전산매체파일을 생성한다.
     * @param xpDto
     * @return File
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes"})
    public File getAtcngReqstFile3(NexacroMapDTO xpDto) throws NexaServiceException {
    	System.out.println("[BEGIN] 전산매체생성 - 기부금매체생성 =================");
    	try
    	{
	    	File atcngReqstFile = null;
	    	
	    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
	    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");	// 조회조건
	    	
	    	Map inMap = null;
			if (inDsMap != null){
				inMap = inDsMap.get(0);				
				
				// 다운로드 파일 내용을 구성한다.
				String contents = getAtcngReqstFileContents3(inMap,inDsMap);
				
				// 파일생성				
				String downFileName = (String)inMap.get("file_name");	// 파일명
				
				atcngReqstFile = new File(downFileName);
				
				OutputStreamWriter ow = new OutputStreamWriter(new FileOutputStream(atcngReqstFile), "ksc5601");
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
     * 연말정산 퇴직소득전산매체파일을 생성한다.
     * @param xpDto
     * @return File
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes"})
    public File getAtcngReqstFile4(NexacroMapDTO xpDto) throws NexaServiceException {
    	System.out.println("[BEGIN] 전산매체생성 - 퇴직소득매체생성 =================");
    	try
    	{
	    	File atcngReqstFile = null;
	    	
	    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
	    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");	// 조회조건
	    	
	    	Map inMap = null;
			if (inDsMap != null){
				inMap = inDsMap.get(0);				
				
				// 다운로드 파일 내용을 구성한다.
				String contents = getAtcngReqstFileContents4(inMap,inDsMap);
				
				// 파일생성				
				String downFileName = (String)inMap.get("file_name");	// 파일명
				
				atcngReqstFile = new File(downFileName);
				
				OutputStreamWriter ow = new OutputStreamWriter(new FileOutputStream(atcngReqstFile), "ksc5601");
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
     * 연말정산 의료비전산매체 내용을 구성한다.
     * @param inMap
     * @return String
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes"})
    public String getAtcngReqstFileContents2(Map inMap,DataSetMap inDsMap) throws Exception
    {
    	 
    	  	
    	   	
    	StringBuffer buffer = new StringBuffer();
    	
    	String CRLF = "\r\n";
    	
    	// 바디구성용
    	@SuppressWarnings("unchecked")
		List<Map> bodyList = (List<Map>)baseDao.list("SAL050207DAO.selectYndMcpList", inMap);
    	    	
		String out_date = (String)inMap.get("out_date");  // 제출일자
    	
    	// A레코드  	
    	int listSize = (bodyList == null? 0 : bodyList.size());
    	for(int i = 0; i < listSize; i++){
    		
    		Map bodyInfo = (Map)bodyList.get(i);        	
    		
    		String COUNT1 = (String)bodyInfo.get("COUNT1");		          // 일련번호
    		String MTLTY = (String)bodyInfo.get("MTLTY");		          // 상호
    		String DETAIL_KND = (String)bodyInfo.get("DETAIL_KND");		  // 의료증빙코드
    		String DETAIL_KND_2 = (String)bodyInfo.get("DETAIL_KND_2");	  // 본인등 해당여부
    		String PAY_AMOUNT = (String)bodyInfo.get("PAY_AMOUNT");		  // 금액
    		String PAY_CNT = (String)bodyInfo.get("PAY_CNT");		      // 건수
    		String IHIDNUM = (String)bodyInfo.get("IHIDNUM");		      // 공제자 주민번호
    		String IHIDNUM2 = (String)bodyInfo.get("IHIDNUM2");		      // 소득자 주민번호
    		String NM = (String)bodyInfo.get("NM");		                  // 소득자 성명
    		String BIZRNO = (String)bodyInfo.get("BIZRNO");		          // 사업자번호
    		String CBPR_TREAT_AT = (String)bodyInfo.get("CBPR_TREAT_AT");		          // 난임시술비여부
    		
    		
    		// A레코드  		    	
        	buffer.append(blank("A", 1, 1));		                  // 1   영문대문자 'A'
        	buffer.append(StringUtil.rpad("26", ' ', 2));		      // 3   의료비 - 숫자 '26'
        	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
        	buffer.append(StringUtil.lpad(COUNT1, '0', 6));	          // 일련번호
        	buffer.append(StringUtil.rpad(out_date, '0', 8));	      // 제출일자    	
        	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 사업자등록번호        	
        	buffer.append(StringUtil.rpad("", ' ', 20));	          // 홈텍스ID
        	buffer.append(StringUtil.rpad("9000", ' ', 4));	          // 세무프로그램코드
        	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 사업자등록번호
        	buffer.append(blank("화성도시공사", 1, 40));              // 법인명또는 상호
        	buffer.append(StringUtil.rpad(IHIDNUM2, ' ', 13));        // 소득자의 주민번호
        	buffer.append(StringUtil.rpad("1", ' ', 1));              // 내외국인코드
        	buffer.append(blank(NM, 1, 30));                          // 소득자의 성명
        	buffer.append(StringUtil.rpad(BIZRNO, ' ', 10));          // 사업자번호
        	buffer.append(blank(MTLTY, 1, 40));           // 상호
        	buffer.append(StringUtil.rpad(DETAIL_KND, ' ', 1));       // 의료증빙코드
        	buffer.append(StringUtil.lpad(PAY_CNT, '0', 5));	              // 건수
        	buffer.append(StringUtil.lpad(PAY_AMOUNT, '0', 11));	  // 금액
        	buffer.append(StringUtil.rpad(CBPR_TREAT_AT, ' ', 1));               // 난임시술비
        	buffer.append(StringUtil.rpad(IHIDNUM, ' ', 13));         // 주민번호
        	buffer.append(StringUtil.rpad("1", ' ', 1));              // 내외국인코드
        	buffer.append(StringUtil.lpad(DETAIL_KND_2, '0', 1));     // 공제구분
        	buffer.append(StringUtil.lpad("1", '0', 1));              // 제출대상기간코드
        	buffer.append(StringUtil.rpad("", ' ', 19));              // 공란
        	
        	
        	buffer.append(CRLF);
    	}
    	
    	
    	
    	System.out.println("[ END ] 전산매체생성 - 의료비매체생성 =================");
    	
    	return buffer.toString();
    }		
    	
    /**
     * 연말정산 기부금전산매체 내용을 구성한다.
     * @param inMap
     * @return String
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes", "unchecked"})
    public String getAtcngReqstFileContents3(Map inMap,DataSetMap inDsMap) throws Exception
    {
    	 
    	  	
    	   	
    	StringBuffer buffer = new StringBuffer();
    	
    	String CRLF = "\r\n";
    	String out_date = (String)inMap.get("out_date");  // 제출일자
    	
    	// 바디구성용
    	
    	List<Map> mainList = (List<Map>)baseDao.list("SAL050207DAO.selectYndCtbnyMain", inMap);
    	
		Map mainItem = (Map)mainList.get(0); 
		
		String CNTR_MDAT_CNT = (String)mainItem.get("CNTR_MDAT_CNT");
		String CNTR_MDAT_AMOUNT = (String)mainItem.get("CNTR_MDAT_AMOUNT");
		String CNTR_MDAT_CRRSPND_DDC = (String)mainItem.get("CNTR_MDAT_CRRSPND_DDC");
		String CNTR_CNT = (String)mainItem.get("CNTR_CNT");
    	
    	// A레코드  		    	
    	buffer.append(StringUtil.rpad("A", ' ', 1));		      // 1   영문대문자 'A'
    	buffer.append(StringUtil.rpad("27", ' ', 2));		      // 3   의료비 - 숫자 '27'
    	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
    	buffer.append(StringUtil.rpad(out_date, '0', 8));	      // 제출일자    	
    	buffer.append(StringUtil.lpad("2", '0', 1));   	          // 제출자구분
    	buffer.append(StringUtil.rpad("", ' ', 6));	              // 세무대리인 공란 
    	buffer.append(StringUtil.rpad("", ' ', 20));	          // 홈텍스ID
    	buffer.append(StringUtil.rpad("9000", ' ', 4));	          // 세무프로그램코드
    	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 사업자등록번호        	
    	buffer.append(blank("화성도시공사", 1, 40));              // 법인명또는 상호
    	buffer.append(blank("경영지원처", 1, 30));	              // 제출담당부서
    	buffer.append(blank("강경진", 1, 30));	                  // 제출담당자의 성명
    	buffer.append(blank("053-350-0116", 1, 15));              // 제출담당자의 전화번호
    	buffer.append(StringUtil.lpad("1", '0', 5));	          // 원천징수의무자수0
    	buffer.append(StringUtil.lpad("101", ' ', 3));	          // 사용한 한글코드 종류0
    	buffer.append(blank("", 1, 12));	                          // 공란
    	
    	buffer.append(CRLF);
    	
    	// B레코드  		    	
    	buffer.append(StringUtil.rpad("B", ' ', 1));		      // 1   영문대문자 'B'
    	buffer.append(StringUtil.rpad("27", ' ', 2));		      // 3   의료비 - 숫자 '27'
    	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
    	buffer.append(StringUtil.lpad("1", '0', 6));	          // 일련번호
    	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 사업자등록번호        	
    	buffer.append(blank("화성도시공사", 1, 40));              // 법인명또는 상호
    	
    	buffer.append(StringUtil.lpad(CNTR_MDAT_CNT, '0', 7));	      // C레코드수
    	buffer.append(StringUtil.lpad(CNTR_CNT, '0', 7));	          // D레코드수
    	buffer.append(StringUtil.lpad(CNTR_MDAT_AMOUNT, '0', 13));	  // C레코드 기부금액
    	buffer.append(StringUtil.lpad(CNTR_MDAT_CRRSPND_DDC, '0', 13));	          // C레코드 공제금액
    	buffer.append(StringUtil.lpad("1", '0', 1));	          // 연간 합산제출
    	buffer.append(blank("", 1, 87));		                  // 공란
    	
    	buffer.append(CRLF);    	
    	
		List<Map> bodyList = (List<Map>)baseDao.list("SAL050207DAO.selectYndCtbnyList", inMap);
    	
    	// D레코드(해당연도)    
    		
    	int listSize = (bodyList == null? 0 : bodyList.size());
    	for(int i = 0; i < listSize; i++){
    		
    		Map bodyInfo = (Map)bodyList.get(i);        	
    		
    		String EXCCLC_YEAR = (String)inMap.get("EXCCLC_YEAR"); 
        	String EXCCLC_SE = (String)inMap.get("EXCCLC_SE"); 
        	String EMPNO = (String)bodyInfo.get("EMPNO");
        	
        	inMap.put("EXCCLC_YEAR", EXCCLC_YEAR);
        	inMap.put("EXCCLC_SE", EXCCLC_SE);
        	inMap.put("EMPNO", EMPNO);
        	
        	
			List<Map> bodyList2 = (List<Map>)baseDao.list("SAL050207DAO.selectYndCtbny2List", inMap);
        	
        	String NUM = i+1+"";
        	
        	int listSize2 = (bodyList2 == null? 0 : bodyList2.size());
    	  	for(int i2 = 0; i2 < listSize2; i2++){
        		
        		Map bodyInfo2 = (Map)bodyList2.get(i2); 
        		
        		String IHIDNUM = (String)bodyInfo2.get("IHIDNUM");
        		String EMPNM = (String)bodyInfo2.get("EMPNM");
        		String CNTR_TY = (String)bodyInfo2.get("CNTR_TY");
        		String CNTR_YEAR = (String)bodyInfo2.get("CNTR_YEAR");
        		String CNTR_AMOUNT = (String)bodyInfo2.get("CNTR_AMOUNT");
        		String PRVYY_DDC = (String)bodyInfo2.get("PRVYY_DDC");
        		String DDC_TRGET = (String)bodyInfo2.get("DDC_TRGET");
        		String CRRSPND_DDC = (String)bodyInfo2.get("CRRSPND_DDC");
        		String EXTSH_AMOUNT = (String)bodyInfo2.get("EXTSH_AMOUNT");
        		String CYFD_AMOUNT = (String)bodyInfo2.get("CYFD_AMOUNT");
        		String NUM2 = i2+1+"";
        		
	    		buffer.append(StringUtil.rpad("C", ' ', 1));              // 1   영문대문자 'B'
	        	buffer.append(StringUtil.rpad("27", ' ', 2));		      // 3   기부금 - 숫자 '27'
	        	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'  
	        	buffer.append(StringUtil.lpad(NUM, '0', 6));	          // 소득자 일련번호
	        	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 사업자등록번호
	        	buffer.append(StringUtil.rpad(IHIDNUM, ' ', 13));	      // 주민등록번호
	        	buffer.append(StringUtil.lpad("1", '0', 1));   	          // 내외국인구분
	        	buffer.append(blank(EMPNM, 1, 30));   	                  // 소득자성명
	        	buffer.append(StringUtil.rpad(CNTR_TY, ' ', 2));   	      // 유형코드
	        	buffer.append(StringUtil.lpad(CNTR_YEAR, '0', 4));   	  // 기부년도
	        	buffer.append(StringUtil.lpad(CNTR_AMOUNT, '0', 13));	  // 기부금액
	        	buffer.append(StringUtil.lpad(PRVYY_DDC, '0', 13));	      // 전년공제금액
	        	buffer.append(StringUtil.lpad(DDC_TRGET, '0', 13));	      // 공제대상금액
	        	buffer.append(StringUtil.lpad("", '0', 13));	          // 해당년도공제금액필요경비( 무조건 0 )
	        	buffer.append(StringUtil.lpad(CRRSPND_DDC, '0', 13));	  // 공제금액
	        	buffer.append(StringUtil.lpad(EXTSH_AMOUNT, '0', 13));	  // 소멸금액
	        	buffer.append(StringUtil.lpad(CYFD_AMOUNT, '0', 13));	  // 이월금액
	        	buffer.append(StringUtil.lpad(NUM2, '0', 5));	          // 일련번호
	        	buffer.append(blank("", 1, 22));		                  // 공란
        	
	        	buffer.append(CRLF);           	      	
    	  	}
    	  	
    	  	
			List<Map> bodyList3 = (List<Map>)baseDao.list("SAL050207DAO.selectYndCtbny3List", inMap);
        	
        	// D레코드(해당연도 기부명세)
        	
			int listSize3 = (bodyList3 == null? 0 : bodyList3.size());
    	  	for(int i3 = 0; i3 < listSize3; i3++){
        		
        		Map bodyInfo3 = (Map)bodyList3.get(i3); 
        		
        		String MY_IHIDNUM = (String)bodyInfo3.get("MY_IHIDNUM");
        		String IHIDNUM = (String)bodyInfo3.get("IHIDNUM");
        		String EMPNM = (String)bodyInfo3.get("EMPNM");
        		String DETAIL_KND = (String)bodyInfo3.get("DETAIL_KND");
        		String BIZRNO = (String)bodyInfo3.get("BIZRNO");
        		String MTLTY = (String)bodyInfo3.get("MTLTY");
        		String FAMILY_RELATE = (String)bodyInfo3.get("FAMILY_RELATE");
        		String NM = (String)bodyInfo3.get("NM");
        		
        		String PAY_CNT = (String)bodyInfo3.get("PAY_CNT");
        		String CTBNY_AMOUNT = (String)bodyInfo3.get("CTBNY_AMOUNT");
        		String PAY_AMOUNT = (String)bodyInfo3.get("PAY_AMOUNT");
        		String CTBNY_ICNT_AMOUNT = (String)bodyInfo3.get("CTBNY_ICNT_AMOUNT");
        		String NUM3 = i3+1+"";
        		
        		
	    		buffer.append(StringUtil.rpad("D", ' ', 1));              // 1   영문대문자 'B'
	        	buffer.append(StringUtil.rpad("27", ' ', 2));		      // 3   기부금 - 숫자 '27'
	        	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'  
	        	buffer.append(StringUtil.lpad(NUM, '0', 6));	          // 소득자 일련번호
	        	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 사업자등록번호
	        	buffer.append(StringUtil.rpad(MY_IHIDNUM, ' ', 13));	      // 주민등록번호
	        	buffer.append(StringUtil.rpad(DETAIL_KND, ' ', 2));   	  // 유형코드
	        	buffer.append(StringUtil.rpad(BIZRNO, ' ', 13));   	      // 사업자번호
	        	buffer.append(blank(MTLTY, 1, 30));   	                  // 상호
	        	buffer.append(StringUtil.rpad(FAMILY_RELATE, ' ', 1));   	  // 관계코드
	        	buffer.append(StringUtil.rpad("1", ' ', 1));       	      // 내외국인구분
	        	buffer.append(blank(NM, 1, 20));   	                      // 성명
	        	buffer.append(StringUtil.rpad(IHIDNUM, ' ', 13));   	  // 주민번호
	        	buffer.append(StringUtil.lpad(PAY_CNT, '0', 5));	              // 기부건수
	        	buffer.append(StringUtil.lpad(CTBNY_AMOUNT, '0', 13));	  // 기부금합계
	        	buffer.append(StringUtil.lpad(PAY_AMOUNT, '0', 13));	  // 공제대상기부금
	        	buffer.append(StringUtil.lpad(CTBNY_ICNT_AMOUNT, '0', 13));	  // 기부장려금
	        	buffer.append(StringUtil.lpad(NUM3, '0', 5));	          // 일련번호
	        	buffer.append(blank("", 1, 26));		                  // 공란
        	
	        	buffer.append(CRLF);           	      	
    	  	}
    	}
    	
    	buffer.append(CRLF);
    	
    	System.out.println("[ END ] 전산매체생성 - 근로소득매체생성 =================");
    	
    	return buffer.toString();
    }	
    
    /**
     * 퇴직소득 전산매체 내용을 구성한다.
     * @param inMap
     * @return String
     * @throws Exception
     */
    @SuppressWarnings({"rawtypes", "unchecked"})
    public String getAtcngReqstFileContents4(Map inMap,DataSetMap inDsMap) throws Exception
    {
    	 
    	  	
    	   	
    	StringBuffer buffer = new StringBuffer();
    	
    	String CRLF = "\r\n";
    	String out_date = (String)inMap.get("out_date");  // 제출일자
    	
    	// 바디구성용
    	
		List<Map> bodyList = (List<Map>)baseDao.list("SAL050207DAO.selectYndMediumEmp4List", inMap);
    	
    	String count1 = (String)inMap.get("COUNT1");	          // D레코드수
    	String AMT1 = (String)inMap.get("AMT1");	              // 퇴직급여합계
    	String AMT2 = (String)inMap.get("AMT2");	              // 소득세합계
    	String AMT3 = (String)inMap.get("AMT3");	              // 이연퇴직소득세합계
    	String AMT4 = (String)inMap.get("AMT4");	              // 차감원천징수소득세합계
    	String AMT5 = (String)inMap.get("AMT5");	              // 차감원천징수지방소득세합계
    	String AMT6 = (String)inMap.get("AMT6");	              // 차감원천징수합계
    	
    	// A레코드  		    	
    	buffer.append(StringUtil.rpad("A", ' ', 1));		      // 1   영문대문자 'A'
    	buffer.append(StringUtil.rpad("27", ' ', 2));		      // 3   퇴직소득 - 숫자 '25'
    	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
    	buffer.append(StringUtil.rpad(out_date, '0', 8));	      // 제출일자    	
    	buffer.append(StringUtil.lpad("2", '0', 1));   	          // 제출자구분
    	buffer.append(StringUtil.rpad("", ' ', 6));	              // 세무대리인 공란 
    	buffer.append(StringUtil.rpad("", ' ', 20));	          // 홈텍스ID
    	buffer.append(StringUtil.rpad("9000", ' ', 4));	          // 세무프로그램코드
    	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 사업자등록번호        	
    	buffer.append(blank("화성도시공사", 1, 40));              // 법인명또는 상호
    	buffer.append(blank("경영지원처", 1, 30));	              // 제출담당부서
    	buffer.append(blank("강경진", 1, 30));	                  // 제출담당자의 성명
    	buffer.append(blank("053-350-0116", 1, 15));              // 제출담당자의 전화번호
    	buffer.append(StringUtil.lpad("1", '0', 5));	          // 원천징수의무자수0
    	buffer.append(StringUtil.lpad("101", ' ', 3));	          // 사용한 한글코드 종류0
    	buffer.append(blank("", 1, 912));	                      // 공란
    	
    	buffer.append(CRLF);
    	
    	// B레코드  		    	
    	buffer.append(StringUtil.rpad("B", ' ', 1));		      // 1   영문대문자 'B'
    	buffer.append(StringUtil.rpad("25", ' ', 2));		      // 3   의료비 - 숫자 '27'
    	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
    	buffer.append(StringUtil.lpad("1", '0', 6));	          // 일련번호
    	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 사업자등록번호        	
    	buffer.append(blank("화성도시공사", 1, 40));              // 법인명또는 상호
    	buffer.append(blank("이종덕", 1, 30));                    // 대표자명
    	buffer.append(blank("1701710000450", 1, 13));             // 법인번호
    	buffer.append(StringUtil.lpad("1", '0', 1));	          // 연간 합산제출
    	buffer.append(StringUtil.lpad(count1, '0', 7));	          // C레코드수
    	buffer.append(blank("", 1, 7));		                      // 공란
    	buffer.append(StringUtil.lpad(AMT1, '0', 14));	          // 퇴직급여합계
    	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호: 양수
    	buffer.append(StringUtil.lpad(AMT2, '0', 13));	          // 신고대상소득세합계
    	buffer.append(StringUtil.lpad(AMT3, '0', 13));	          // 이연퇴직소득세합계
    	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호: 양수
    	buffer.append(StringUtil.lpad(AMT4, '0', 13));	          // 차감원천징수소득세합계
    	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호: 양수
    	buffer.append(StringUtil.lpad(AMT5, '0', 13));	          // 차감원천징수지방소득세합계
    	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호: 양수
    	buffer.append(StringUtil.lpad("", '0', 13));	          // 차감농어촌특별세합계
    	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호: 양수
    	buffer.append(StringUtil.lpad(AMT6, '0', 13));	          // 차감원천징수합계
    	buffer.append(blank("", 1, 873));	                      // 공란
    	
    	buffer.append(CRLF);    	
    	
    	
    	// C레코드   
    		
    	int listSize = (bodyList == null? 0 : bodyList.size());
    	for(int i = 0; i < listSize; i++){
    		
    		Map bodyInfo = (Map)bodyList.get(i);  
    		
    		String NUM = i+1+"";
    		String empnm = (String)bodyInfo.get("EMPNM");			  // 성명
    		String ihidnum = (String)bodyInfo.get("IHIDNUM");		  // 주민번호
    		String EXCTV_AT = (String)bodyInfo.get("EXCTV_AT");		  // 임원여부
    		String S_DE = (String)bodyInfo.get("S_DE");		          // 귀속시작
    		String RETIRE_DE = (String)bodyInfo.get("RETIRE_DE");	  // 귀속종료
    		String RTRPAY = (String)bodyInfo.get("RTRPAY");	          // 퇴직급여
    		String ECNY_DE = (String)bodyInfo.get("ECNY_DE");	      // 입사일자
    		String BGNDE = (String)bodyInfo.get("BGNDE");	          // 기산일
    		String PYMNT_DE = (String)bodyInfo.get("PYMNT_DE");	      // 지급일
    		String CNWK_MONTH = (String)bodyInfo.get("CNWK_MONTH");	  // 근속월수
    		String CNWK_YY = (String)bodyInfo.get("CNWK_YY");	      // 근속년수
    		String FIX_RATE_DDC = (String)bodyInfo.get("FIX_RATE_DDC");	 // 정률공제
    		String CNWK_YEAR_DDC = (String)bodyInfo.get("CNWK_YEAR_DDC");	 // 근속연수공제
    		String RTRPAY2 = (String)bodyInfo.get("RTRPAY2");	      // 과세표준정산
    		String TAXT_STD_PRPDVS_BEFORE = (String)bodyInfo.get("TAXT_STD_PRPDVS_BEFORE");	      // 과세표준안분
    		String YRYMN_TAXT_STD_BEFORE = (String)bodyInfo.get("YRYMN_TAXT_STD_BEFORE");	      // 연평균과세표준
    		String YRYMN_COMPUT_TAXAMT_BEFORE = (String)bodyInfo.get("YRYMN_COMPUT_TAXAMT_BEFORE");	      // 연평균산출세액
    		String COMPUT_TAXAMT_BEFORE = (String)bodyInfo.get("COMPUT_TAXAMT_BEFORE");	      // 산출세액
    		String TAXT_STD_PRPDVS_AFTER = (String)bodyInfo.get("TAXT_STD_PRPDVS_AFTER");	      // 과세표준안분이후
    		String YRYMN_TAXT_STD_AFTER = (String)bodyInfo.get("YRYMN_TAXT_STD_AFTER");	      // 연평균과세표준이후
    		String CNVRSN_TAXT_STD_AFTER = (String)bodyInfo.get("CNVRSN_TAXT_STD_AFTER");	      // 환산과세표준이후
    		String CNVRSN_COMPUT_TAXAMT_AFTER = (String)bodyInfo.get("CNVRSN_COMPUT_TAXAMT_AFTER");	      // 환산산출세액이후
    		String YRYMN_COMPUT_TAXAMT_AFTER = (String)bodyInfo.get("YRYMN_COMPUT_TAXAMT_AFTER");	      // 연평균산출세액이후
    		String COMPUT_TAXAMT_AFTER = (String)bodyInfo.get("COMPUT_TAXAMT_AFTER");	      // 산출세액이후
    		String PRPDVS = (String)bodyInfo.get("PRPDVS");	                                  // 과세표준안분합계
    		String COMPUT_TAXAMT = (String)bodyInfo.get("COMPUT_TAXAMT");	                  // 연평균산출세액합계
    		String COMPUT_TAXAMT2 = (String)bodyInfo.get("COMPUT_TAXAMT2");	                  // 산출세액합계
    		String INCMTAX = (String)bodyInfo.get("INCMTAX");	      // 소득세
    		String LCLTY_INCMTAX = (String)bodyInfo.get("LCLTY_INCMTAX");	      // 지방소득세
    		String INCMTAX2 = (String)bodyInfo.get("INCMTAX2");	      // 소득세+지방소득세
    		
        	
    		buffer.append(StringUtil.rpad("C", ' ', 1));		      // 1   영문대문자 'A'
        	buffer.append(StringUtil.rpad("20", ' ', 2));		      // 3   근로소득 - 숫자 '20'
        	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
        	buffer.append(StringUtil.lpad(NUM, '0', 6));	          // 12  일련번호
        	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 22  사업자등록번호
        	buffer.append(StringUtil.lpad("1", '0', 1));	          // 사업장
        	buffer.append(StringUtil.lpad("1", '0', 1));	          // 거주구분
        	buffer.append(StringUtil.lpad("1", '0', 1));	          // 내국인 
        	buffer.append(StringUtil.rpad("", ' ', 2));	              // 거주지국코드
        	buffer.append(blank(empnm, 1, 30));	                      // 소득자의 성명
        	buffer.append(StringUtil.rpad(ihidnum, ' ', 13));	      // 주민번호
        	buffer.append(StringUtil.lpad(EXCTV_AT, '0', 1));	      // 임원여부
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 퇴직연금제도가입일
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 2011.12.31 퇴직금
        	buffer.append(StringUtil.lpad(S_DE, '0', 8));	          // 귀속시작
        	buffer.append(StringUtil.lpad(RETIRE_DE, '0', 8));	      // 귀속종료
        	buffer.append(StringUtil.lpad("1", '0', 1));	          // 퇴직사유
        	buffer.append(blank("", 1, 40));	                      // 중간지급_근무처명
        	buffer.append(blank("", 1, 10));	                      // 중간지급_근무처사업자번호
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 중간지급_퇴직급여
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 중간지급_비과세퇴직급여
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 중간지급_과세퇴직급여
        	// 퇴직급여최종분
        	buffer.append(blank("화성도시공사", 1, 40));              // 근무처명
        	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 사업자등록번호
        	buffer.append(StringUtil.lpad(RTRPAY, '0', 11));	      // 퇴직급여
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 비과세퇴직급여
        	buffer.append(StringUtil.lpad(RTRPAY, '0', 11));	      // 과세퇴직급여
        	// 퇴직급여정산
        	buffer.append(StringUtil.lpad(RTRPAY, '0', 11));	      // 퇴직급여
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 비과세퇴직급여
        	buffer.append(StringUtil.lpad(RTRPAY, '0', 11));	      // 과세퇴직급여
        	// 중간지급 등
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 입사일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 기산일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 퇴사일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 지급일
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 근속월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 제외월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 가산월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 중복월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 근속년수
        	// 최종
        	buffer.append(StringUtil.lpad(ECNY_DE, '0', 8));	      // 입사일
        	buffer.append(StringUtil.lpad(BGNDE, '0', 8));	          // 기산일
        	buffer.append(StringUtil.lpad(RETIRE_DE, '0', 8));	      // 퇴사일
        	buffer.append(StringUtil.lpad(PYMNT_DE, '0', 8));	      // 지급일
        	buffer.append(StringUtil.lpad(CNWK_MONTH, '0', 4));	      // 근속월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 제외월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 가산월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 중복월수
        	buffer.append(StringUtil.lpad(CNWK_YY, '0', 4));	      // 근속년수
        	// 정산
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 입사일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 기산일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 퇴사일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 지급일
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 근속월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 제외월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 가산월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 중복월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 근속년수
        	// 정산분 안분2012.12.31 이전
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 입사일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 기산일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 퇴사일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 지급일
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 근속월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 제외월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 가산월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 중복월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 근속년수
        	// 정산분 안분2012.12.31 이후
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 입사일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 기산일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 퇴사일
        	buffer.append(StringUtil.lpad("", '0', 8));	              // 지급일
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 근속월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 제외월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 가산월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 중복월수
        	buffer.append(StringUtil.lpad("", '0', 4));	              // 근속년수
        	
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 중간지급과세퇴직급여
        	buffer.append(StringUtil.lpad(RTRPAY, '0', 11));	      // 최종지급과세퇴직급여
        	buffer.append(StringUtil.lpad(RTRPAY, '0', 11));	      // 합계과세퇴직급여
        	buffer.append(StringUtil.lpad(FIX_RATE_DDC, '0', 11));	  // 정률공제
        	buffer.append(StringUtil.lpad(CNWK_YEAR_DDC, '0', 11));	  // 근속연수공제
        	buffer.append(StringUtil.lpad(RTRPAY2, '0', 11));	      // 과세표준정산
        	// 세액계산 2012.12.31 이전
        	buffer.append(StringUtil.lpad(TAXT_STD_PRPDVS_BEFORE, '0', 11));	// 과세표준안분이전
        	buffer.append(StringUtil.lpad(YRYMN_TAXT_STD_BEFORE, '0', 11));	    // 연평균과세표준이전
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 환산과세표준0
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 환산산출세액0
        	buffer.append(StringUtil.lpad(YRYMN_COMPUT_TAXAMT_BEFORE, '0', 11));	 // 연평균산출세액
        	buffer.append(StringUtil.lpad(COMPUT_TAXAMT_BEFORE, '0', 11));	 // 산출세액
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 기납부0
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 신고대상세액0
        	// 세액계산 2013.01.01 이후
        	buffer.append(StringUtil.lpad(TAXT_STD_PRPDVS_AFTER, '0', 11));	          // 과세표준안분이후
        	buffer.append(StringUtil.lpad(YRYMN_TAXT_STD_AFTER, '0', 11));	          // 연평균과세표준이후
        	buffer.append(StringUtil.lpad(CNVRSN_TAXT_STD_AFTER, '0', 11));	          // 환산과세표준이후
        	buffer.append(StringUtil.lpad(CNVRSN_COMPUT_TAXAMT_AFTER, '0', 11));	  // 환산산출세액이후
        	buffer.append(StringUtil.lpad(YRYMN_COMPUT_TAXAMT_AFTER, '0', 11));	      // 연평균산출세액이후
        	buffer.append(StringUtil.lpad(COMPUT_TAXAMT_AFTER, '0', 11));	          // 산출세액이후
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 기납부0
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 신고대상세액0
        	// 퇴직소득세액계산_합계
        	buffer.append(StringUtil.lpad(PRPDVS, '0', 11));	      // 과세표준안분합계
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 연평균과세표준0
        	buffer.append(StringUtil.lpad(CNVRSN_TAXT_STD_AFTER, '0', 11));	          // 환산과세표준이후
        	buffer.append(StringUtil.lpad(CNVRSN_COMPUT_TAXAMT_AFTER, '0', 11));	  // 환산산출세액이후
        	buffer.append(StringUtil.lpad(COMPUT_TAXAMT, '0', 11));	  // 연평균산출세액합계
        	buffer.append(StringUtil.lpad(COMPUT_TAXAMT2, '0', 11));  // 산출세액합계
        	buffer.append(StringUtil.lpad("", '0', 11));	          // 기납부
        	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호
        	buffer.append(StringUtil.lpad(COMPUT_TAXAMT2, '0', 11));  // 신고대상세액
        	// 이연퇴직소득세액계산
        	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호
        	buffer.append(StringUtil.lpad("", '0', 11));              // 신고대상세액
        	buffer.append(StringUtil.lpad("", '0', 11));              // 계좌입금금액합계
        	buffer.append(StringUtil.lpad("", '0', 11));              // 퇴직급여
        	buffer.append(StringUtil.lpad("", '0', 11));              // 이연퇴직소득세
        	// 신고대상세액
        	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호
        	buffer.append(StringUtil.lpad(INCMTAX, '0', 11));         // 소득세
        	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호
        	buffer.append(StringUtil.lpad(LCLTY_INCMTAX, '0', 11));   // 지방소득세
        	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호
        	buffer.append(StringUtil.lpad("", '0', 11));              // 농어촌특별세
        	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호
        	buffer.append(StringUtil.lpad(INCMTAX2, '0', 11));        // 소득세+지방소득세
        	// 이연퇴직소득세
        	buffer.append(StringUtil.lpad("", '0', 11));              // 소득세
        	buffer.append(StringUtil.lpad("", '0', 11));              // 지방소득세
        	buffer.append(StringUtil.lpad("", '0', 11));              // 농어촌특별세
        	buffer.append(StringUtil.lpad("", '0', 11));              // 소득세+지방소득세
        	// 차감원천징수세액
        	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호
        	buffer.append(StringUtil.lpad(INCMTAX, '0', 11));         // 소득세
        	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호
        	buffer.append(StringUtil.lpad(LCLTY_INCMTAX, '0', 11));   // 지방소득세
        	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호
        	buffer.append(StringUtil.lpad("", '0', 11));              // 농어촌특별세
        	buffer.append(StringUtil.lpad("0", '0', 1));	          // 부호
        	buffer.append(StringUtil.lpad(INCMTAX2, '0', 11));        // 소득세+지방소득세
        	buffer.append(blank("", 1, 8));	                          // 공란
        	
        	buffer.append(CRLF);
    	  	
    	}
    	
    	System.out.println("[ END ] 전산매체생성 - 퇴직소득매체생성 =================");
    	
    	return buffer.toString();
    }		
    
    
    /**
     * 연말정산 근로소득전산매체 내용을 구성한다.
     * @param inMap
     * @return String
     * @throws Exception
     */
   
    public String getAtcngReqstFileContents(Map inMap,DataSetMap inDsMap) throws Exception
    {
    	 
    	  	
    	   	
    	StringBuffer buffer = new StringBuffer();
    	
    	String CRLF = "\r\n";
    	
    	// 바디구성용
    	@SuppressWarnings("unchecked")
		List<Map> bodyList = (List<Map>)baseDao.list("SAL050207DAO.selectYndResultList", inMap);
    	    	
		String out_date = (String)inMap.get("out_date");  // 제출일자    	
		String count1 = (String)inMap.get("COUNT1");	  // 주현근무처레코드수
    	String count2 = (String)inMap.get("COUNT2");	  // 종전근무처레코드수
    	String amt1 = (String)inMap.get("AMT1");	      // 총급여 총계
    	String ddc1 = (String)inMap.get("DDC1");	      // 소득세 총계
    	String ddc2 = (String)inMap.get("DDC2");	      // 지방소득세 총계
    	String ddc3 = (String)inMap.get("DDC3");	      // 농특세 총계
    	String ddc4 = (String)inMap.get("DDC4");	      // 결정세액총계
    	
    	// A레코드  	
    	    	    	
    	buffer.append(StringUtil.rpad("A", ' ', 1));		      // 1   영문대문자 'A'
    	buffer.append(StringUtil.rpad("20", ' ', 2));		      // 3   근로소득 - 숫자 '20'
    	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
    	buffer.append(StringUtil.rpad(out_date, ' ', 8));	      // 14  제출일자    	
    	buffer.append(StringUtil.rpad("2", ' ', 1));	          // 15  제출자구분
    	buffer.append(StringUtil.rpad("", ' ', 6));	              // 21  세무대리인의 경우 기입, 공란
    	buffer.append(StringUtil.rpad("", ' ', 20));	          // 41  홈텍스ID
    	buffer.append(StringUtil.rpad("9000", ' ', 4));	          // 45  제출자구분
    	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 55  사업자등록번호
    	buffer.append(blank("화성도시공사", 1, 40));              // 95  법인명또는 상호
    	buffer.append(blank("경영지원처", 1, 30));	              // 125 제출담당부서
    	buffer.append(blank("강경진", 1, 30));	                  // 155 제출담당자의 성명
    	buffer.append(blank("053-350-0116", 1, 15));              // 170 제출담당자의 전화번호
    	buffer.append(StringUtil.lpad("1", '0', 5));	          // 175 원천징수의무자수0
    	buffer.append(StringUtil.lpad("101", ' ', 3));	          // 178 사용한 한글코드 종류0
    	buffer.append(blank("", 1, 1442));	          // 1620공란
    	
    	buffer.append(CRLF);
    	
    	// B레코드  	
    	
    	buffer.append(StringUtil.rpad("B", ' ', 1));		      // 1   영문대문자 'A'
    	buffer.append(StringUtil.rpad("20", ' ', 2));		      // 3   근로소득 - 숫자 '20'
    	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
    	buffer.append(StringUtil.lpad("1", '0', 6));  	          // 12  일련번호    	
    	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 22  원천징수의무자의 사업자등록번호
    	buffer.append(blank("화성도시공사", 1, 40));  // 62  원천징수의무자의 법인명 또는 상호
    	buffer.append(blank("이종덕", 1, 30));        // 92  대표자 성명
    	buffer.append(StringUtil.rpad("1701710000450", ' ', 13)); // 105 법인번호
    	buffer.append(StringUtil.lpad(count1, '0', 7));	          // 112 C레코드수
    	buffer.append(StringUtil.lpad(count2, '0', 7));           // 119 D레코드수
    	buffer.append(StringUtil.lpad(amt1, '0', 14));	          // 133 총급여 총계
    	buffer.append(StringUtil.lpad(ddc1, '0', 13));  	      // 146 c레코드의 결정세액(소득세) 합계
    	buffer.append(StringUtil.lpad(ddc2, '0', 13));  	      // 159 c레코드의 결정세액(지방소득세) 합계
    	buffer.append(StringUtil.lpad(ddc3, '0', 13));  	      // 172 c레코드의 결정세액(농특세) 합계
    	buffer.append(StringUtil.lpad(ddc4, '0', 13));  	      // 185 c레코드의 결정세액(합계) 합계
    	buffer.append(StringUtil.rpad("1", ' ', 1));     	      // 186 연간합산제출
    	buffer.append(blank("", 1, 1434));	          // 1610공란
    	
    	buffer.append(CRLF);
    	
    	// C레코드
    	
    	int listSize = (bodyList == null? 0 : bodyList.size());
    	for(int i = 0; i < listSize; i++){
    		
    		Map bodyInfo = (Map)bodyList.get(i);        	
    		
    		String COUNT1 = (String)bodyInfo.get("COUNT1");		      // 일련번호
    		String empnm = (String)bodyInfo.get("EMPNM");			  // 성명
    		String ihidnum = (String)bodyInfo.get("IHIDNUM");		  // 주민번호
    	    
    		String hshldr_at = (String)bodyInfo.get("HSHLDR_AT");	  // 세대주여부    	    		
    		String bgnde = (String)bodyInfo.get("EXCCLC_BGNDE");	  // 정산시작일자
    		String endde = (String)bodyInfo.get("EXCCLC_ENDDE");	  // 정산종료일자
    		String NOW_WORK_SALARY_AMOUNT = (String)bodyInfo.get("NOW_WORK_SALARY_AMOUNT");	        // 주현근무지급여총액
    		String NOW_WORK_BNS_AMOUNT = (String)bodyInfo.get("NOW_WORK_BNS_AMOUNT");	            // 주현근무지상여총액
    		String NOW_WORK_RCOGN_BNS_AMOUNT = (String)bodyInfo.get("NOW_WORK_RCOGN_BNS_AMOUNT");	// 주현근무지인정상여총액
    		String SALARY_TOT_AMOUNT = (String)bodyInfo.get("SALARY_TOT_AMOUNT");	                // 총급여
    		String AMOUNT = (String)bodyInfo.get("AMOUNT");	                                        // 총액
    		String ERNM_DDC = (String)bodyInfo.get("ERNM_DDC");	                                    // 근로소득공제
    		String ERNM_AMOUNT = (String)bodyInfo.get("ERNM_AMOUNT");	                            // 근로소득금액
    		String BSIS_DDC = (String)bodyInfo.get("BSIS_DDC");	                                    // 기초공제
    		String SPOUSE_DDC = (String)bodyInfo.get("SPOUSE_DDC");	                                // 배우자공제
    		String SUPORTR = (String)bodyInfo.get("SUPORTR");	                                    // 부양가족공제인원
    		String DNTMY_DDC = (String)bodyInfo.get("DNTMY_DDC");	                                // 부양가족공제금액
    		String COURS_PVLTRT_70 = (String)bodyInfo.get("COURS_PVLTRT_70");	                    // 경로우대공제인원
    		String COURS_PVLTRT_DDC_70 = (String)bodyInfo.get("COURS_PVLTRT_DDC_70");	            // 경로우대공제금액
    		String DSPSN_CO = (String)bodyInfo.get("DSPSN_CO");	                                    // 장애인수
    		String DSPSN_DDC = (String)bodyInfo.get("DSPSN_DDC");	                                // 장애인공제금액
    		String LADY_HSHLDR_DDC = (String)bodyInfo.get("LADY_HSHLDR_DDC");	                    // 부녀자공제금액
    		String PARNTS_1_DDC = (String)bodyInfo.get("PARNTS_1_DDC");	                            // 한부모가족공제금액
    		String NPN = (String)bodyInfo.get("NPN");	                                            // 국민연금보험료공제
    		String HLTHINS = (String)bodyInfo.get("HLTHINS");	                                    // 건강보험료
    		String EMPLYMINSRNC = (String)bodyInfo.get("EMPLYMINSRNC");	                            // 고용보험료
    		String PNINT_RPAY_FNNC = (String)bodyInfo.get("PNINT_RPAY_FNNC");	                    // 주택임차차임금원리금상환_대출기관
    		String PNINT_RPAY_RESIDNT = (String)bodyInfo.get("PNINT_RPAY_RESIDNT");	                // 주택임차차임금원리금상환_거주자
    		String HOUSE_MRTG_BRRW_INTR_14 = (String)bodyInfo.get("HOUSE_MRTG_BRRW_INTR_14");	    // 장기주택저장차입금이자15미만
    		String HOUSE_MRTG_BRRW_INTR_29 = (String)bodyInfo.get("HOUSE_MRTG_BRRW_INTR_29");	    // 장기주택저장차입금이자15-29
    		String HOUSE_MRTG_BRRW_INTR_30 = (String)bodyInfo.get("HOUSE_MRTG_BRRW_INTR_30");	    // 장기주택저장차입금이자30
    		String HOUSE_MRTG_BRRW_INTR_FIXING = (String)bodyInfo.get("HOUSE_MRTG_BRRW_INTR_FIXING");  // 고정비거치상환대출
    		String HOUSE_MRTG_BRRW_INTR_ETC = (String)bodyInfo.get("HOUSE_MRTG_BRRW_INTR_ETC");     // 기타대출
    		String HOUSE_MRTG_BRRW_INTR_15Y_15_1 = (String)bodyInfo.get("HOUSE_MRTG_BRRW_INTR_15Y_15_1");     // 주택저당차입이자15.1.1이후_15년이상&비거치식&고정금리
    		String HOUSE_MRTG_BRRW_INTR_15Y_15_2 = (String)bodyInfo.get("HOUSE_MRTG_BRRW_INTR_15Y_15_2");     // 주택저당차입이자15.1.1이후_15년이상&(비거치식or고정금리)
    		String HOUSE_MRTG_BRRW_INTR_15Y_15_3 = (String)bodyInfo.get("HOUSE_MRTG_BRRW_INTR_15Y_15_3");     // 주택저당차입이자15.1.1이후_15년이상&기타
    		String HOUSE_MRTG_BRRW_INTR_15Y_10 = (String)bodyInfo.get("HOUSE_MRTG_BRRW_INTR_15Y_10");         // 주택저당차입이자15.1.1이후_10년이상&(비거치식or고정금리)
    		String CNTR_CYFD = (String)bodyInfo.get("CNTR_CYFD");         							// 기부금(이월금)
    		
    		String SPECL_INCOME_DDC = (String)bodyInfo.get("SPECL_INCOME_DDC");                     // 특별소득공제계
    		String DDCT_INCOME_AMOUNT = (String)bodyInfo.get("DDCT_INCOME_AMOUNT");                 // 차감소득금액
    		String INDVDL_ANNTY_SVINGS_INCOME_DDC = (String)bodyInfo.get("INDVDL_ANNTY_SVINGS_INCOME_DDC");  // 개인연금저축소득공제
    		String SMALL_CRNTY_DDC = (String)bodyInfo.get("SMALL_CRNTY_DDC");                       // 소기업소상공인공제부금
    		String SUBSCRPT_SVINGS = (String)bodyInfo.get("SUBSCRPT_SVINGS");                       // 청약저축
    		String HOUSE_SUBSCRPT_GNRLZ = (String)bodyInfo.get("HOUSE_SUBSCRPT_GNRLZ");             // 주택청약종합
    		String LABRR_HOUSE_PREPRTN = (String)bodyInfo.get("LABRR_HOUSE_PREPRTN");               // 근로자주택마련저축
    		String INVT_MXTR_INCOME_DDC = (String)bodyInfo.get("INVT_MXTR_INCOME_DDC");             // 투자조합출자소득공제
    		String CREDTCARD_DDC = (String)bodyInfo.get("CREDTCARD_DDC");                           // 신용카드등 소득공제
    		String LFSTS_INTR = (String)bodyInfo.get("LFSTS_INTR");                                 // 목돈안드는 전세이자상환액공제
    		String INORG_STOCK_SVINGS = (String)bodyInfo.get("INORG_STOCK_SVINGS");                 // 장기집합투자증권저축
    		String ETC_INCOME_DDC_SM = (String)bodyInfo.get("ETC_INCOME_DDC_SM");                   // 그밖의 소득공제계
    		String GNRLZ_LMT_EXCESS_AMOUNT = (String)bodyInfo.get("GNRLZ_LMT_EXCESS_AMOUNT");       // 소득공제종합한도 초과액
    		String GNRLZ_STDTAX = (String)bodyInfo.get("GNRLZ_STDTAX");                             // 종합소득과세표준
    		String COMPUT_TAXAMT = (String)bodyInfo.get("COMPUT_TAXAMT");                           // 산출세액
    		String ERNM_TAXAMT_DDC_AMOUNT = (String)bodyInfo.get("ERNM_TAXAMT_DDC_AMOUNT");         // 근로소득세액공제
    		String MNYCH = (String)bodyInfo.get("MNYCH");                                           // 자녀세액공제인원
    		String MNYCH_DDC = (String)bodyInfo.get("MNYCH_DDC");                                   // 자녀세액공제
    		String CHLDRN_6_BELOW = (String)bodyInfo.get("CHLDRN_6_BELOW");                         // 6세이하세액공제인원수
    		String TAXAMT_DDC_6_BELOW = (String)bodyInfo.get("TAXAMT_DDC_6_BELOW");                 // 6세이하세액공제
    		String CHLDBRTH_ADP_CHLDRN = (String)bodyInfo.get("CHLDBRTH_ADP_CHLDRN");               // 출산입양세액공제인원
    		String CHLDBRTH_ADP_DDC = (String)bodyInfo.get("CHLDBRTH_ADP_DDC");                     // 출산입양세액공제
    		String RETIRE_ANNTY = (String)bodyInfo.get("RETIRE_ANNTY");                             // 퇴직급여
    		String RETIRE_ANNTY_DDC = (String)bodyInfo.get("RETIRE_ANNTY_DDC");                     // 퇴직급여공제
    		String ANNTY_SVINGS_INCOME_DDC = (String)bodyInfo.get("ANNTY_SVINGS_INCOME_DDC");       // 연금저축
    		String ANNTY_SVINGS_TAXAMT = (String)bodyInfo.get("ANNTY_SVINGS_TAXAMT");               // 연금저축세액공제
    		String GRNT_IRNCF = (String)bodyInfo.get("GRNT_IRNCF");                                 // 보장성보험
    		String IRNCF_TAXAMT = (String)bodyInfo.get("IRNCF_TAXAMT");                             // 보장성보험세액공제
    		String DSPSN_GRNT_INSRNC = (String)bodyInfo.get("DSPSN_GRNT_INSRNC");                   // 장애인보장성보험
    		String DSPSN_GRNT_INSRNC_DDC = (String)bodyInfo.get("DSPSN_GRNT_INSRNC_DDC");           // 장애인보장성보험세액공제
    		String MCP_DDC = (String)bodyInfo.get("MCP_DDC");                                       // 의료비공제대상금액
    		String MCP_TAXAMT = (String)bodyInfo.get("MCP_TAXAMT");                                 // 의료비세액공제액
    		String EDCCT_DDC = (String)bodyInfo.get("EDCCT_DDC");                                   // 교육비공제대상금액
    		String EDCCT_TAXAMT = (String)bodyInfo.get("EDCCT_TAXAMT");                             // 교육비세액공제액
    		String CNTR_POLITC_CPTAL = (String)bodyInfo.get("CNTR_POLITC_CPTAL");                   // 정치자금기부금10만원이하
    		String CNTR_POLITC_TAXAMT = (String)bodyInfo.get("CNTR_POLITC_TAXAMT");                 // 정치자금기부금10만원이하세액공제
    		String CNTR_POLITC_UP = (String)bodyInfo.get("CNTR_POLITC_UP");                         // 정치자금기부금10만원초과
    		String CNTR_POLITC_UP_TAXAMT = (String)bodyInfo.get("CNTR_POLITC_UP_TAXAMT");           // 정치자금기부금10만원초과세액공제
    		String LEGAL_CNTR = (String)bodyInfo.get("LEGAL_CNTR");                                 // 법정기부금공제대상금액
    		String LEGAL_CNTR_TAXAMT = (String)bodyInfo.get("LEGAL_CNTR_TAXAMT");                   // 법정기부금세액공제액
    		String APPN_CNTR = (String)bodyInfo.get("APPN_CNTR");                                   // 지정기부금공제대상금액
    		String APPN_CNTR_TAXAMT = (String)bodyInfo.get("APPN_CNTR_TAXAMT");                     // 지정기부금세액공제액
    		String END_CNTR = (String)bodyInfo.get("END_CNTR");                                     // 지정기부금(종교단체)공제대상금액
    		String END_CNTR_TAXAMT = (String)bodyInfo.get("END_CNTRTAXAMT");                        // 지정기부금(종교단체)세액공제액
    		String SPECL_TAXAMT_DDC_SM = (String)bodyInfo.get("SPECL_TAXAMT_DDC_SM");               // 특별세액공제계
    		String STD_DDC = (String)bodyInfo.get("STD_DDC");                                       // 표준세액공제
    		String HOUSE_BRRW_AMOUNT = (String)bodyInfo.get("HOUSE_BRRW_AMOUNT");                   // 주택차입금
    		String MTHT_AM = (String)bodyInfo.get("MTHT_AM");                                       // 월세세액공제대상액
    		String MTHT_AM_TAXXAMT = (String)bodyInfo.get("MTHT_AM_TAXXAMT");                       // 월세세액공제액
    		String TAXAMT_DDC_SM = (String)bodyInfo.get("TAXAMT_DDC_SM");                           // 세액공제계
    		String DECSN_TAXAMT_INCMTAX = (String)bodyInfo.get("DECSN_TAXAMT_INCMTAX");             // 결정소득세
    		String DECSN_TAXAMT_LCLTY_INCMTAX = (String)bodyInfo.get("DECSN_TAXAMT_LCLTY_INCMTAX"); // 결정지방소득세
    		String DECSN_TAXAMT_AGSPT = (String)bodyInfo.get("DECSN_TAXAMT_AGSPT");                 // 결정농특세
    		String NOW_LEV_RESULT_INCMTAX = (String)bodyInfo.get("NOW_LEV_RESULT_INCMTAX");         // 기납부소득세
    		String NOW_LEV_RESULT_LCLTY_INCMTAX = (String)bodyInfo.get("NOW_LEV_RESULT_LCLTY_INCMTAX");   // 기납부지방소득세
    		String NOW_LEV_RESULT_AGSPT = (String)bodyInfo.get("NOW_LEV_RESULT_AGSPT");             // 기납부농특세
    		String GUBUN1 = (String)bodyInfo.get("GUBUN1");                                         // 징수환급구분
    		String INCMTAX = (String)bodyInfo.get("INCMTAX");                                       // 소득세
    		String GUBUN2 = (String)bodyInfo.get("GUBUN2");                                         // 징수환급구분
    		String LCLTY_INCMTAX = (String)bodyInfo.get("LCLTY_INCMTAX");                           // 지방소득세
    		String GUBUN3 = (String)bodyInfo.get("GUBUN3");                                         // 징수환급구분
    		String AGSPT = (String)bodyInfo.get("AGSPT");                                           // 농특세
    		String EXCCLC_BEFORE_WORK_CNT = (String)bodyInfo.get("EXCCLC_BEFORE_WORK_CNT");         // 종전근무지 카운트
    		
    		
    		buffer.append(StringUtil.rpad("C", ' ', 1));		      // 1   영문대문자 'A'
        	buffer.append(StringUtil.rpad("20", ' ', 2));		      // 3   근로소득 - 숫자 '20'
        	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
        	buffer.append(StringUtil.lpad(COUNT1, '0', 6));	          // 12  일련번호
        	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 22  사업자등록번호
        	
        	buffer.append(StringUtil.lpad(EXCCLC_BEFORE_WORK_CNT, '0', 2));	          // 종전근무처수
        	buffer.append(StringUtil.rpad("1", ' ', 1));	          // 거주자
        	buffer.append(StringUtil.rpad("", ' ', 2));	              // 비거주자 국적코드
        	buffer.append(StringUtil.lpad("2", ' ', 1));	          // 외국인단일세율
        	buffer.append(StringUtil.lpad("2", ' ', 1));	          // 외국법인소속 파견근로자여부
        	
        	buffer.append(blank(empnm, 1, 30));			  // 소득자성명
        	buffer.append(StringUtil.lpad("1", '0', 1));	          // 내외국인구분코드
        	buffer.append(StringUtil.rpad(ihidnum, ' ', 13));		  // C12 주민등록번호
        	buffer.append(StringUtil.rpad("", ' ', 2));	        	  // C13 국적코드 공란
        	buffer.append(StringUtil.rpad(hshldr_at, ' ', 1));	      // C14 세대주여부
        	buffer.append(StringUtil.rpad("1", ' ', 1));	          // C15 계속근로
        	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // C16 사업자등록번호
        	buffer.append(blank("화성도시공사", 1, 40));              // C17 상호
        	buffer.append(StringUtil.lpad(bgnde, '0', 8));            // C18 근무시작일자
        	buffer.append(StringUtil.lpad(endde, '0', 8));            // C19 근무종료일자
        	buffer.append(StringUtil.lpad("", '0', 8));               // C20 감면시작일자
        	buffer.append(StringUtil.lpad("", '0', 8));               // C21 감면종료일자
        	buffer.append(StringUtil.lpad(NOW_WORK_SALARY_AMOUNT, '0', 11));    // C22 주현근무지 급여총액
        	buffer.append(StringUtil.lpad(NOW_WORK_BNS_AMOUNT, '0', 11));       // C23 주현근무지 상여총액
        	buffer.append(StringUtil.lpad(NOW_WORK_RCOGN_BNS_AMOUNT, '0', 11)); // C24 주현근무지 인정상여총액
        	buffer.append(StringUtil.lpad("", '0', 11));              // C25 주식매수선택권이익행사
        	buffer.append(StringUtil.lpad("", '0', 11));              // C26 우리사주조합인출금
        	buffer.append(StringUtil.lpad("", '0', 11));              // C27 임원퇴직소득금액 한도초과액
        	buffer.append(StringUtil.lpad("", '0', 21));              // C28 공란
        	buffer.append(StringUtil.lpad(AMOUNT, '0', 11));          // C29 급여총액
        	
        	buffer.append(StringUtil.lpad("", '0', 10));              // C30 비과세학자금
        	buffer.append(StringUtil.lpad("", '0', 10));              // C31 무보수위원수당
        	buffer.append(StringUtil.lpad("", '0', 10));              // C32 경호승선수당
        	buffer.append(StringUtil.lpad("", '0', 10));              // C33 유아초중등
        	buffer.append(StringUtil.lpad("", '0', 10));              // C34 고등교육법
        	buffer.append(StringUtil.lpad("", '0', 10));              // C35 특별법
        	buffer.append(StringUtil.lpad("", '0', 10));              // C36 연구기관등
        	buffer.append(StringUtil.lpad("", '0', 10));              // C37 기업부설연구소
        	buffer.append(StringUtil.lpad("", '0', 10));              // C38 보육교사근무환경개선비
        	buffer.append(StringUtil.lpad("", '0', 10));              // C39 사립유치원수석교사교사의 인건비
        	buffer.append(StringUtil.lpad("", '0', 10));              // C40 취재수당
        	buffer.append(StringUtil.lpad("", '0', 10));              // C41 벽지수당
        	buffer.append(StringUtil.lpad("", '0', 10));              // C42 재해관련급여
        	buffer.append(StringUtil.lpad("", '0', 10));              // C43 이주수당
        	buffer.append(StringUtil.lpad("", '0', 10));              // C44 외국정부등근무자
        	buffer.append(StringUtil.lpad("", '0', 10));              // C45 외국주둔군인등
        	buffer.append(StringUtil.lpad("", '0', 10));              // C46 국외근로100만월
        	buffer.append(StringUtil.lpad("", '0', 10));              // C47 국외근로300만원
        	buffer.append(StringUtil.lpad("", '0', 10));              // C48 국외근로
        	buffer.append(StringUtil.lpad("", '0', 10));              // C49 야간근로수당
        	buffer.append(StringUtil.lpad("", '0', 10));              // C50 출산보육수당
        	buffer.append(StringUtil.lpad("", '0', 10));              // C51 근로장학금
        	buffer.append(StringUtil.lpad("", '0', 10));              // C52 주식매수선택권
        	buffer.append(StringUtil.lpad("", '0', 10));              // C53 외국인기술자
        	buffer.append(StringUtil.lpad("", '0', 10));              // C54 우리사주조합인출금50
        	buffer.append(StringUtil.lpad("", '0', 10));              // C55 우리사주조합인출금75
        	buffer.append(StringUtil.lpad("", '0', 10));              // C55-a 우리사주조합인출금100
        	buffer.append(StringUtil.lpad("", '0', 10));              // C56 중소기업취업
        	buffer.append(StringUtil.lpad("", '0', 10));              // C57 전공의수련보조수당
        	buffer.append(StringUtil.lpad("", '0', 10));              // C58 중소기업취업청년소득세감면 100
        	buffer.append(StringUtil.lpad("", '0', 10));              // C58-a 중소기업취업청년소득세감면 50
        	buffer.append(StringUtil.lpad("", '0', 10));              // C58-b 중소기업취업청년소득세감면 70
        	buffer.append(StringUtil.lpad("", '0', 10));              // C59 조세조약상교직자감면
        	buffer.append(StringUtil.lpad("", '0', 10));              // C60 비과세계
        	buffer.append(StringUtil.lpad("", '0', 10));              // C61 감면소득계
        	//buffer.append(StringUtil.lpad("", '0', 10));              // C62 공란 (삭제)
        	
        	buffer.append(StringUtil.lpad(SALARY_TOT_AMOUNT, '0', 11));    // C63 총급여
        	buffer.append(StringUtil.lpad(ERNM_DDC, '0', 10));             // C64 근로소득공제
        	buffer.append(StringUtil.lpad(ERNM_AMOUNT, '0', 11));          // C65 근로소득금액
        	// 기본공제
        	buffer.append(StringUtil.lpad(BSIS_DDC, '0', 8));              // C66 본인공제금액1,500,000
        	buffer.append(StringUtil.lpad(SPOUSE_DDC, '0', 8));            // C67 배우자공제금액
        	buffer.append(StringUtil.lpad(SUPORTR, '0', 2));               // C68 부양가족공제인원
        	buffer.append(StringUtil.lpad(DNTMY_DDC, '0', 8));             // C69 부양가족공제금액
        	buffer.append(StringUtil.lpad(COURS_PVLTRT_70, '0', 2));       // C70 경로우대공제인원
        	buffer.append(StringUtil.lpad(COURS_PVLTRT_DDC_70, '0', 8));   // C71 경로우대공제금액
        	buffer.append(StringUtil.lpad(DSPSN_CO, '0', 2));              // C72 장애인공제인원
        	buffer.append(StringUtil.lpad(DSPSN_DDC, '0', 8));             // C73 장애인공제금액
        	buffer.append(StringUtil.lpad(LADY_HSHLDR_DDC, '0', 8));       // C74 부녀자공제금액
        	buffer.append(StringUtil.lpad(PARNTS_1_DDC, '0', 10));         // C75 한부모공제금액
        	// 연금보험료공제
        	buffer.append(StringUtil.lpad(NPN, '0', 10));                  // C76 국민연금보험료
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C77 공무원연금
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C78 군인연금
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C79 사립학교교직원연금
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C80 별정우체국연금
        	// 특별소득공제
        	buffer.append(StringUtil.lpad(HLTHINS, '0', 10));              // C81 건강보험료
        	buffer.append(StringUtil.lpad(EMPLYMINSRNC, '0', 10));         // C82 고용보험료
        	buffer.append(StringUtil.lpad(PNINT_RPAY_FNNC, '0', 8));  // C83 주택임차차임금원리금상환_대출기관
        	buffer.append(StringUtil.lpad(PNINT_RPAY_RESIDNT, '0', 8));    // C84 주택임차차임금원리금상환_거주자
        	buffer.append(StringUtil.lpad(HOUSE_MRTG_BRRW_INTR_14, '0', 8));  // C85 장기주택저장차입금이자15미만
        	buffer.append(StringUtil.lpad(HOUSE_MRTG_BRRW_INTR_29, '0', 8));  // C86 장기주택저장차입금이자15-29
        	buffer.append(StringUtil.lpad(HOUSE_MRTG_BRRW_INTR_30, '0', 8));  // C87 장기주택저장차입금이자30
        	buffer.append(StringUtil.lpad(HOUSE_MRTG_BRRW_INTR_FIXING, '0', 8));  // C88 고정비거치상환대출
        	buffer.append(StringUtil.lpad(HOUSE_MRTG_BRRW_INTR_ETC, '0', 8));  // C89 기타대출
        	buffer.append(StringUtil.lpad(HOUSE_MRTG_BRRW_INTR_15Y_15_1, '0', 8));                    // C90 2015년이후 고정금리 and 비거치상환
        	buffer.append(StringUtil.lpad(HOUSE_MRTG_BRRW_INTR_15Y_15_2, '0', 8));                    // C91 2015년이후 고정금리 or 비거치상환
        	buffer.append(StringUtil.lpad(HOUSE_MRTG_BRRW_INTR_15Y_15_3, '0', 8));                    // C92 2015년이후 기타대출
        	buffer.append(StringUtil.lpad(HOUSE_MRTG_BRRW_INTR_15Y_10, '0', 8));                      // C93 2015년이후 차입분 10이상 고정금리 or 비거치
        	buffer.append(StringUtil.lpad(CNTR_CYFD, '0', 11));                   // C94 기부금이월분
        	//buffer.append(StringUtil.lpad("", '0', 20));                 // C95 공란 (삭제)
        	buffer.append(StringUtil.lpad(SPECL_INCOME_DDC, '0', 11));     // C96 특별소득공제계
        	buffer.append(StringUtil.lpad(DDCT_INCOME_AMOUNT, '0', 11));   // C97 차감소득금액
        	// 그밖의 소득공제
        	buffer.append(StringUtil.lpad(INDVDL_ANNTY_SVINGS_INCOME_DDC, '0', 8));   // C98 개인연금저축소득공제
        	buffer.append(StringUtil.lpad(SMALL_CRNTY_DDC, '0', 10));      // C99 소기업소상공인공제부금
        	buffer.append(StringUtil.lpad(SUBSCRPT_SVINGS, '0', 10));      // C100 청약저축
        	buffer.append(StringUtil.lpad(HOUSE_SUBSCRPT_GNRLZ, '0', 10)); // C101 주택청약종합
        	buffer.append(StringUtil.lpad(LABRR_HOUSE_PREPRTN, '0', 10));  // C102 근로자주택마련
        	buffer.append(StringUtil.lpad(INVT_MXTR_INCOME_DDC, '0', 10)); // C103 투자조합출자소득공제
        	buffer.append(StringUtil.lpad(CREDTCARD_DDC, '0', 8));         // C104 신용카드등소득공제
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C105 우리사주조합출연금
        	//buffer.append(StringUtil.lpad("", '0', 11));                   // C106 우리사주조합기부금 (삭제)
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C107 고용유지기업근로자소득공제
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C108 목돈안드는 전세이자상환액공제 (2016년 무조건 0)
        	buffer.append(StringUtil.lpad(INORG_STOCK_SVINGS, '0', 10));   // C109 장기집합투자증권저축
        	buffer.append(StringUtil.lpad(ETC_INCOME_DDC_SM, '0', 11));    // C110 그밖의 소득공제계
        	buffer.append(StringUtil.lpad(GNRLZ_LMT_EXCESS_AMOUNT, '0', 11));    // C111 소득공제종합한도 초과액
        	buffer.append(StringUtil.lpad(GNRLZ_STDTAX, '0', 11));         // C112 종합소득과세표준
        	buffer.append(StringUtil.lpad(COMPUT_TAXAMT, '0', 10));        // C113 산출세액
        	// 세액감면
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C114 소득세법
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C115 조특법
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C116 소득세법30조
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C117 조세조약
        	//buffer.append(StringUtil.lpad("", '0', 10));                   // C118 공란 (삭제)
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C119세액감면계
        	// 세액공제
        	buffer.append(StringUtil.lpad(ERNM_TAXAMT_DDC_AMOUNT, '0', 10));  // C120 근로소득세액공제
        	buffer.append(StringUtil.lpad(MNYCH, '0', 2));                // C121 자녀세액공제인원
        	buffer.append(StringUtil.lpad(MNYCH_DDC, '0', 10));            // C122 자녀세액공제
        	buffer.append(StringUtil.lpad(CHLDRN_6_BELOW, '0', 2));        // C123 6세이하세액공제인원수
        	buffer.append(StringUtil.lpad(TAXAMT_DDC_6_BELOW, '0', 10));   // C124 6세이하세액공제
        	buffer.append(StringUtil.lpad(CHLDBRTH_ADP_CHLDRN, '0', 2));   // C125 출산입양세액공제인원
        	buffer.append(StringUtil.lpad(CHLDBRTH_ADP_DDC, '0', 10));     // C126 출산입양세액공제
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C127 연금계좌과학기술인공제
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C128 연금계좌과학기술인세액공제
        	buffer.append(StringUtil.lpad(RETIRE_ANNTY, '0', 10));         // C129 연금계좌퇴직급여
        	buffer.append(StringUtil.lpad(RETIRE_ANNTY_DDC, '0', 10));     // C130 연금계좌퇴직급여공제
        	buffer.append(StringUtil.lpad(ANNTY_SVINGS_INCOME_DDC, '0', 10));  // C131 연금저축
        	buffer.append(StringUtil.lpad(ANNTY_SVINGS_TAXAMT, '0', 10));  // C132 연금저축세액공제
        	buffer.append(StringUtil.lpad(GRNT_IRNCF, '0', 10));           // C133 보장성보험
        	buffer.append(StringUtil.lpad(IRNCF_TAXAMT, '0', 10));         // C134 보장성보험세액공제
        	buffer.append(StringUtil.lpad(DSPSN_GRNT_INSRNC, '0', 10));    // C135 장애인보장성보험
        	buffer.append(StringUtil.lpad(DSPSN_GRNT_INSRNC_DDC, '0', 10));// C136 장애인보장성보험세액공제
        	buffer.append(StringUtil.lpad(MCP_DDC, '0', 10));              // C137 의료비공제액
        	buffer.append(StringUtil.lpad(MCP_TAXAMT, '0', 10));           // C138 의료비세액공제액
        	buffer.append(StringUtil.lpad(EDCCT_DDC, '0', 10));            // C139 교육비공제액
        	buffer.append(StringUtil.lpad(EDCCT_TAXAMT, '0', 10));         // C140 교육비세액공제액
        	buffer.append(StringUtil.lpad(CNTR_POLITC_CPTAL, '0', 10));    // C141 정치자금기부금10만원이하
        	buffer.append(StringUtil.lpad(CNTR_POLITC_TAXAMT, '0', 10));   // C142 정치자금기부금10만원이하세액공제
        	buffer.append(StringUtil.lpad(CNTR_POLITC_UP, '0', 11));       // C143 정치자금기부금10만원초과
        	buffer.append(StringUtil.lpad(CNTR_POLITC_UP_TAXAMT, '0', 10)); // C144 정치자금기부금10만원초과세액공제
        	buffer.append(StringUtil.lpad(LEGAL_CNTR, '0', 11));           // C145 법정기부금공제대상금액
        	buffer.append(StringUtil.lpad(LEGAL_CNTR_TAXAMT, '0', 10));    // C146 법정기부금세액공제
        	buffer.append(StringUtil.lpad("", '0', 11));                   // C147 우리사주조합기부금공제대상금액
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C148 우리사주조합기부금세액공제
        	buffer.append(StringUtil.lpad(APPN_CNTR, '0', 11));            // C149 지정기부금공제대상금액
        	buffer.append(StringUtil.lpad(APPN_CNTR_TAXAMT, '0', 10));     // C150 지정기부금세액공제
        	buffer.append(StringUtil.lpad(END_CNTR, '0', 11));            // C150-a 지정기부금(종교단체)공제대상금액
        	buffer.append(StringUtil.lpad(END_CNTR_TAXAMT, '0', 10));     // C150-b 지정기부금(종교단체)세액공제
        	buffer.append(StringUtil.lpad(SPECL_TAXAMT_DDC_SM, '0', 10));  // C151 특별세액공제계
        	buffer.append(StringUtil.lpad(STD_DDC, '0', 10));              // C152 표준세액공제
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C153 납세조합공제
        	buffer.append(StringUtil.lpad(HOUSE_BRRW_AMOUNT, '0', 10));    // C154 주택차입금
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C155 외국납부
        	buffer.append(StringUtil.lpad(MTHT_AM, '0', 10));              // C156 월세공제대상금액
        	buffer.append(StringUtil.lpad(MTHT_AM_TAXXAMT, '0', 8));       // C157 월세세액공제액
        	buffer.append(StringUtil.lpad(TAXAMT_DDC_SM, '0', 10));         // C158 세액공제계
        	buffer.append(StringUtil.lpad(DECSN_TAXAMT_INCMTAX, '0', 10)); // C159 결정소득세
        	buffer.append(StringUtil.lpad(DECSN_TAXAMT_LCLTY_INCMTAX, '0', 10)); // C160 결정지방소득세
        	buffer.append(StringUtil.lpad(DECSN_TAXAMT_AGSPT, '0', 10));   // C161 결정농특세
        	buffer.append(StringUtil.lpad(NOW_LEV_RESULT_INCMTAX, '0', 10)); // C162 기납부소득세
        	buffer.append(StringUtil.lpad(NOW_LEV_RESULT_LCLTY_INCMTAX, '0', 10)); // C163 기납부지방소득세
        	buffer.append(StringUtil.lpad(NOW_LEV_RESULT_AGSPT, '0', 10));   // C164 기납부농특세
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C165 특례소득세
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C166 특례지방소득세
        	buffer.append(StringUtil.lpad("", '0', 10));                   // C167 특례농특세
        	buffer.append(StringUtil.lpad(GUBUN1, '0', 1));                // C168 징수환급구분
        	buffer.append(StringUtil.lpad(INCMTAX, '0', 10));              // C168 소득세
        	buffer.append(StringUtil.lpad(GUBUN2, '0', 1));                // C169 징수환급구분
        	buffer.append(StringUtil.lpad(LCLTY_INCMTAX, '0', 10));        // C169 지방소득세
        	buffer.append(StringUtil.lpad(GUBUN3, '0', 1));                // C170 징수환급구분
        	buffer.append(StringUtil.lpad(AGSPT, '0', 10));                // C170 농특세
        	buffer.append(blank("", 1, 15));    	               // 공란
    	
        	// D레코드(종전근무처)
        	String EXCCLC_YEAR = (String)bodyInfo.get("EXCCLC_YEAR");
        	String EXCCLC_SE = (String)bodyInfo.get("EXCCLC_SE");
        	String EMPNO = (String)bodyInfo.get("EMPNO");
        	
        	inMap.put("EXCCLC_YEAR", EXCCLC_YEAR);
        	inMap.put("EXCCLC_SE", EXCCLC_SE);
        	inMap.put("EMPNO", EMPNO);
        	
        	@SuppressWarnings("unchecked")
			List<Map> bodyList2 = (List<Map>)baseDao.list("SAL050207DAO.selectYndResult2List", inMap);
        	
        	int listSize2 = (bodyList2 == null? 0 : bodyList2.size());
    	  	for(int i2 = 0; i2 < listSize2; i2++){
        		
        		Map bodyInfo2 = (Map)bodyList2.get(i2); 
        	    
        		buffer.append(CRLF);
        		String WRKPLC_NM = (String)bodyInfo2.get("WRKPLC_NM");
        		String BIZRNO = (String)bodyInfo2.get("BIZRNO");
        		String WORK_BEGIN_DE = (String)bodyInfo2.get("WORK_BEGIN_DE");
        		String WORK_ENDDE = (String)bodyInfo2.get("WORK_ENDDE");
        		String SALARY_TOTAMT2 = (String)bodyInfo2.get("SALARY_TOTAMT");
        		String BNS_TOTAMT2 = (String)bodyInfo2.get("BNS_TOTAMT");
        		String TOT1 = (String)bodyInfo2.get("TOT1");
        		String TAXXMPT_OUTNATN_ERNM = (String)bodyInfo2.get("TAXXMPT_OUTNATN_ERNM");
        		String TAXXMPT_NIGHT_ERNM = (String)bodyInfo2.get("TAXXMPT_NIGHT_ERNM");
        		String TAXXMPT = (String)bodyInfo2.get("TAXXMPT");
        		String INCMTAX2 = (String)bodyInfo2.get("INCMTAX");        		
        		String LCLTY_INCMTAX2 = (String)bodyInfo2.get("LCLTY_INCMTAX");
        		String AGSPT2 = (String)bodyInfo2.get("AGSPT");
        		String COUNT2 = (String)bodyInfo2.get("COUNT2");
        		
        		
        		buffer.append(StringUtil.rpad("D", ' ', 1));		      // 1   영문대문자 'D'
            	buffer.append(StringUtil.rpad("20", ' ', 2));		      // 3   근로소득 - 숫자 '20'
            	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
            	buffer.append(StringUtil.lpad(COUNT1, '0', 6));	          // 12  일련번호
            	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 22  사업자등록번호
            	buffer.append(blank("", 1, 50));	          // 72  공란

            	buffer.append(StringUtil.rpad(ihidnum, ' ', 13));		  // 주민등록번호
            	buffer.append(StringUtil.rpad("2", ' ', 1));	          // 납세조합구분
            	buffer.append(blank(WRKPLC_NM, 1, 40));	      // 상호
            	buffer.append(StringUtil.rpad(BIZRNO, ' ', 10));	      // 사업자번호
            	buffer.append(StringUtil.lpad(WORK_BEGIN_DE, '0', 8));	  // 근무시작일자
            	buffer.append(StringUtil.lpad(WORK_ENDDE, '0', 8));	      // 근무종료일자
            	buffer.append(StringUtil.lpad("", '0', 8));	              // 감면시작일자
            	buffer.append(StringUtil.lpad("", '0', 8));	              // 감면종료일자
            	buffer.append(StringUtil.lpad(SALARY_TOTAMT2, '0', 11));  // 급여총액
            	buffer.append(StringUtil.lpad(BNS_TOTAMT2, '0', 11));     // 상여총액
            	buffer.append(StringUtil.lpad("", '0', 11));              // 인정상여총액
            	buffer.append(StringUtil.lpad("", '0', 11));              // 주식매수선택권행사이익
            	buffer.append(StringUtil.lpad("", '0', 11));              // 우리사주조합인출금
            	buffer.append(StringUtil.lpad("", '0', 11));              // 임원퇴직소득한도초과액
            	buffer.append(StringUtil.lpad("", '0', 22));              // 공란
            	buffer.append(StringUtil.lpad(TOT1, '0', 11));            // 계
            	
            	buffer.append(StringUtil.lpad("", '0', 10));              // 비과세학자금
            	buffer.append(StringUtil.lpad("", '0', 10));              // 무보수위원수당
            	buffer.append(StringUtil.lpad("", '0', 10));              // 경호승선수당
            	buffer.append(StringUtil.lpad("", '0', 10));              // 유아초중등
            	buffer.append(StringUtil.lpad("", '0', 10));              // 고등교육법
            	buffer.append(StringUtil.lpad("", '0', 10));              // 특별법
            	buffer.append(StringUtil.lpad("", '0', 10));              // 연구기관
            	buffer.append(StringUtil.lpad("", '0', 10));              // 기업부설연구소
            	buffer.append(StringUtil.lpad("", '0', 10));              // 보육교사
            	buffer.append(StringUtil.lpad("", '0', 10));              // 사립유치원
            	buffer.append(StringUtil.lpad("", '0', 10));              // 취재수당
            	buffer.append(StringUtil.lpad("", '0', 10));              // 벽지수당
            	buffer.append(StringUtil.lpad("", '0', 10));              // 재해관련급여
            	buffer.append(StringUtil.lpad("", '0', 10));              // 지방이전이주비
            	buffer.append(StringUtil.lpad("", '0', 10));              // 외국정부등근무자
            	buffer.append(StringUtil.lpad("", '0', 10));              // 외국주둔군인등
            	buffer.append(StringUtil.lpad("", '0', 10));              // 국외근로100
            	buffer.append(StringUtil.lpad("", '0', 10));              // 국외근로300
            	buffer.append(StringUtil.lpad(TAXXMPT_OUTNATN_ERNM, '0', 10)); // 국외근로
            	buffer.append(StringUtil.lpad(TAXXMPT_NIGHT_ERNM, '0', 10));   // 야간근로
            	buffer.append(StringUtil.lpad("", '0', 10));              // 출산보육
            	buffer.append(StringUtil.lpad("", '0', 10));              // 근로장학금
            	buffer.append(StringUtil.lpad("", '0', 10));              // 주식매수선택
            	buffer.append(StringUtil.lpad("", '0', 10));              // 외국인기술자
            	buffer.append(StringUtil.lpad("", '0', 10));              // 우리사주조합인출50
            	buffer.append(StringUtil.lpad("", '0', 10));              // 우리사주조합인출75
            	buffer.append(StringUtil.lpad("", '0', 10));              // 우리사주조합인출100
            	buffer.append(StringUtil.lpad("", '0', 10));              // 중소기업취업
            	buffer.append(StringUtil.lpad("", '0', 10));              // 전공의수련보조
            	buffer.append(StringUtil.lpad("", '0', 10));              // 청년소득세감면
            	buffer.append(StringUtil.lpad("", '0', 10));              // 청년소득세감면50
            	buffer.append(StringUtil.lpad("", '0', 10));              // 청년소득세감면70
            	buffer.append(StringUtil.lpad("", '0', 10));              // 교직자감면
            	buffer.append(StringUtil.lpad(TAXXMPT, '0', 10));         // 비과세계
            	buffer.append(StringUtil.lpad("", '0', 10));              // 감면소득계
            	buffer.append(StringUtil.lpad("", '0', 10));              // 공란
            	
            	buffer.append(StringUtil.lpad(INCMTAX2, '0', 10));        // 소득세
            	buffer.append(StringUtil.lpad(LCLTY_INCMTAX2, '0', 10));  // 지방소득세
            	buffer.append(StringUtil.lpad(AGSPT2, '0', 10));          // 농특세
            	buffer.append(StringUtil.lpad(COUNT2, '0', 2));           // 일련번호
            	buffer.append(blank("", 1, 961));	          // 공란
            	
        	}
    	  	
    	  	// E레코드(소득공제명세)
            List<Map> bodyList3 = (List<Map>)baseDao.list("SAL050207DAO.selectYndResult3List", inMap);
        	
        	int listSize3 = (bodyList3 == null? 0 : bodyList3.size());
        	System.out.println("[BEGIN]--------------" + listSize3);
        	int COUNT3 = 0;
        	int i3 = 0;
    	  	for(i3 = 0; i3 < listSize3; i3++){
        		
        		Map bodyInfo3 = (Map)bodyList3.get(i3); 
        		if(i3 == 0 || i3 % 5 == 0 ){
        		    buffer.append(CRLF);
        	    }
        		String FAMILY_RELATE3 = (String)bodyInfo3.get("FAMILY_RELATE");
        		String ISE_FRGNR_SE3 = (String)bodyInfo3.get("ISE_FRGNR_SE");
        		String FAMILY_NM = (String)bodyInfo3.get("FAMILY_NM");
        		String FAMILY_IHIDNUM_ENCPT = (String)bodyInfo3.get("FAMILY_IHIDNUM_ENCPT");
        		String DDC_AT = (String)bodyInfo3.get("DDC_AT");
        		String TROBL_AT = (String)bodyInfo3.get("TROBL_AT");
        		String LADY_AT = (String)bodyInfo3.get("LADY_AT");
        		String COURS_PVLTRT_AT = (String)bodyInfo3.get("COURS_PVLTRT_AT");
        		String PARNTS_1_AT = (String)bodyInfo3.get("PARNTS_1_AT");
        		String CHLDBRTH_ADP_AT = (String)bodyInfo3.get("CHLDBRTH_ADP_AT");
        		String BELOW_6_AT = (String)bodyInfo3.get("BELOW_6_AT");
        		String HLTHINS2 = (String)bodyInfo3.get("HLTHINS");
        		String GRNT_INSRNC = (String)bodyInfo3.get("GRNT_INSRNC");
        		String DSPSN_INSRNC = (String)bodyInfo3.get("DSPSN_INSRNC");
        		String MCP_DTA = (String)bodyInfo3.get("MCP_DTA");
        		String EDCCT_DTA = (String)bodyInfo3.get("EDCCT_DTA");
        		String CREDTCARD_DTA = (String)bodyInfo3.get("CREDTCARD_DTA");
        		String DBCD_PRPAY_DTA = (String)bodyInfo3.get("DBCD_PRPAY_DTA");
        		String CASH_RCIPT_DTA = (String)bodyInfo3.get("CASH_RCIPT_DTA");
        		String TRDIT_MRKT_DTA = (String)bodyInfo3.get("TRDIT_MRKT_DTA");
        		String PBTRNSP_TRNSPORT_USE_DTA = (String)bodyInfo3.get("PBTRNSP_TRNSPORT_USE_DTA");
        		String CTBNY_DTA = (String)bodyInfo3.get("CTBNY_DTA");
        		String HLTHINS_ETC2 = (String)bodyInfo3.get("HLTHINS_ETC");
        		
        		String GRNT_INSRNC_ETC = (String)bodyInfo3.get("GRNT_INSRNC_ETC");
        		String DSPSN_INSRNC_ETC = (String)bodyInfo3.get("DSPSN_INSRNC_ETC");
        		String MCP_ETC = (String)bodyInfo3.get("MCP_ETC");
        		String EDCCT_ETC = (String)bodyInfo3.get("EDCCT_ETC");
        		String CREDTCARD_ETC = (String)bodyInfo3.get("CREDTCARD_ETC");
        		String DBCD_PRPAY_ETC = (String)bodyInfo3.get("DBCD_PRPAY_ETC");        	
        		String TRDIT_MRKT_ETC = (String)bodyInfo3.get("TRDIT_MRKT_ETC");
        		String PBTRNSP_USE_ETC = (String)bodyInfo3.get("PBTRNSP_USE_ETC");
        		String CTBNY_ETC = (String)bodyInfo3.get("CTBNY_ETC");
        		
        		if(i3 == 0 || i3 % 5 == 0 ){
	        		buffer.append(StringUtil.rpad("E", ' ', 1));		      // 1   영문대문자 'D'
	            	buffer.append(StringUtil.rpad("20", ' ', 2));		      // 3   근로소득 - 숫자 '20'
	            	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
	            	buffer.append(StringUtil.lpad(COUNT1, '0', 6));	          // 12  일련번호
	            	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 22  사업자등록번호            	
	            	buffer.append(StringUtil.rpad(ihidnum, ' ', 13));		  // 주민등록번호
        		}
            	buffer.append(StringUtil.rpad(FAMILY_RELATE3, ' ', 1));	  // 관계
            	buffer.append(StringUtil.rpad(ISE_FRGNR_SE3, ' ', 1));	  // 내외국인구분
            	buffer.append(blank(FAMILY_NM, 1, 20));	      // 성명1
            	buffer.append(StringUtil.rpad(FAMILY_IHIDNUM_ENCPT, ' ', 13));	// 주민번호
            	buffer.append(StringUtil.rpad(DDC_AT, ' ', 1));	          // 기본공제
            	buffer.append(StringUtil.rpad(TROBL_AT, ' ', 1));	      // 장애인공제
            	buffer.append(StringUtil.rpad(LADY_AT, ' ', 1));	      // 부녀자공제
            	buffer.append(StringUtil.rpad(COURS_PVLTRT_AT, ' ', 1));  // 경로우대
            	buffer.append(StringUtil.rpad(PARNTS_1_AT, ' ', 1));	  // 한부모
            	buffer.append(StringUtil.rpad(CHLDBRTH_ADP_AT, ' ', 1));  // 출산입양
            	buffer.append(StringUtil.rpad(BELOW_6_AT, ' ', 1));       // 6세이하
            	buffer.append(StringUtil.lpad(HLTHINS2, '0', 10));         // 건강보험고용보험
            	buffer.append(StringUtil.lpad(GRNT_INSRNC, '0', 10));     // 보장성보험료
            	buffer.append(StringUtil.lpad(DSPSN_INSRNC, '0', 10));    // 장애인보장성보험료
            	buffer.append(StringUtil.lpad(MCP_DTA, '0', 10));         // 의료비
            	buffer.append(StringUtil.lpad(EDCCT_DTA, '0', 10));       // 교육비
            	buffer.append(StringUtil.lpad(CREDTCARD_DTA, '0', 10));       // 신용카드
            	buffer.append(StringUtil.lpad(DBCD_PRPAY_DTA, '0', 10));       // 직불선불
            	buffer.append(StringUtil.lpad(CASH_RCIPT_DTA, '0', 10));       // 현금영수증
            	buffer.append(StringUtil.lpad(TRDIT_MRKT_DTA, '0', 10));       // 전통시장
            	buffer.append(StringUtil.lpad(PBTRNSP_TRNSPORT_USE_DTA, '0', 10));       // 대중교통
            	buffer.append(StringUtil.lpad(CTBNY_DTA, '0', 13));       // 기부금
            	
            	buffer.append(StringUtil.lpad(HLTHINS_ETC2, '0', 10));    // 건강고용기타
            	buffer.append(StringUtil.lpad(GRNT_INSRNC_ETC, '0', 10)); // 보장성보험기타
            	buffer.append(StringUtil.lpad(DSPSN_INSRNC_ETC, '0', 10));// 장애인보장성기타
            	buffer.append(StringUtil.lpad(MCP_ETC, '0', 10));         // 의료비기타
            	buffer.append(StringUtil.lpad(EDCCT_ETC, '0', 10));       // 교육비기타
            	buffer.append(StringUtil.lpad(CREDTCARD_ETC, '0', 10));   // 신용카드기타
            	buffer.append(StringUtil.lpad(DBCD_PRPAY_ETC, '0', 10));  // 직불선불기타
            	buffer.append(StringUtil.lpad(TRDIT_MRKT_ETC, '0', 10));  // 전통시장기타
            	buffer.append(StringUtil.lpad(PBTRNSP_USE_ETC, '0', 10)); // 대중교통기타
            	buffer.append(StringUtil.lpad(CTBNY_ETC, '0', 13));       // 기부금기타
            	
            	/*if(i3 == listSize3-1 && listSize3 == 1){
            		buffer.append(blank("", 1, 1317));   // 공란
            	} else if(i3 == listSize3-1 && listSize3 == 2){
            		buffer.append(blank("", 1, 1059));   // 공란
            	} else if(i3 == listSize3-1 && listSize3 == 3){
            		buffer.append(blank("", 1, 801));    // 공란
            	} else if(i3 == listSize3-1 && listSize3 == 4){
            		buffer.append(blank("", 1, 543));    // 공란
            	} else if(i3 == listSize3-1 && listSize3 == 5){
            		buffer.append(StringUtil.lpad("1", '0', 2));       // 일련번호
            		buffer.append(blank("", 1, 293));    // 공란
            	}*/
            	
            	if((i3+1) % 5 == 0 && i3 > 0){
            		COUNT3++;
            		buffer.append(StringUtil.lpad(String.valueOf(COUNT3), '0', 2));       // 일련번호
            		buffer.append(blank("", 1, 293));    // 공란
            	}
    	  	}
    	  	if(i3 % 5 != 0){
    	  		int itemCnt = 5 - (i3 % 5);
    	  		buffer.append(blank("", 1, itemCnt*258));
    	  		COUNT3++;
    	  		buffer.append(StringUtil.lpad(String.valueOf(COUNT3), '0', 2));       // 일련번호
        		buffer.append(blank("", 1, 293));    // 공란
    	  	}
    	  	
    	  	
    	  	
    	 // F레코드(연금저축소득공제명세)
    	  	inMap.put("FORMAT_CODE", "E102Y");
            List<Map> bodyList4 = (List<Map>)baseDao.list("SAL050207DAO.selectYndResult4List", inMap);
        	
        	int listSize4 = (bodyList4 == null? 0 : bodyList4.size());
        	int i4 = 0;
    	  	for(i4 = 0; i4 < listSize4; i4++){
    	  		
    	  		Map bodyInfo4 = (Map)bodyList4.get(i4); 
    	  		
    	  		if(i4 == 0 || i4 % 15 == 0 ){
        		    buffer.append(CRLF);
        	    }
        	    
    	  		String FORMAT_CODE = (String)bodyInfo4.get("FORMAT_CODE");
    	  		String DETAIL_KND = (String)bodyInfo4.get("DETAIL_KND");
    	  		String MTLTY = (String)bodyInfo4.get("MTLTY");
    	  		String ESNTL_NO = (String)bodyInfo4.get("ESNTL_NO");
    	  		String PAY_AMOUNT2 = (String)bodyInfo4.get("PAY_AMOUNT");
    	  		String DDC_AMOUNT = (String)bodyInfo4.get("DDC_AMOUNT");
    	  		
    	  		if(i4 == 0 || i4 % 15 == 0 ){
	    	  		buffer.append(StringUtil.rpad("F", ' ', 1));		      // 1   영문대문자 'D'
	            	buffer.append(StringUtil.rpad("20", ' ', 2));		      // 3   근로소득 - 숫자 '20'
	            	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
	            	buffer.append(StringUtil.lpad(COUNT1, '0', 6));	          // 12  일련번호
	            	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 22  사업자등록번호            	
	            	buffer.append(StringUtil.rpad(ihidnum, ' ', 13));		  // 주민등록번호
    	  		}
            	buffer.append(StringUtil.rpad(FORMAT_CODE, ' ', 2));	  // 공제구분
            	buffer.append(StringUtil.rpad(DETAIL_KND, ' ', 3));	      // 금융기관코드
            	buffer.append(blank(MTLTY, 1, 50));	          // 금융기관상호
            	buffer.append(StringUtil.rpad(ESNTL_NO, ' ', 20));	      // 계좌번호
            	buffer.append(StringUtil.lpad(PAY_AMOUNT2, '0', 10));	  // 납입금액
            	buffer.append(StringUtil.lpad(DDC_AMOUNT, '0', 10));	  // 공제금액
    	  		
            	if((i4+1) % 15 == 0 && i4 > 0){
            		buffer.append(blank("", 1, 160));    // 공란
            	}
    	  	}
    	  	
    	  	if(i4 % 15 != 0){
    	  		int itemCnt = 15 - (i4 % 15);
    	  		buffer.append(blank("", 1, itemCnt*95));
        		buffer.append(blank("", 1, 160));    // 공란
    	  	}
    	  	
    	 // G레코드(월세거주자간 주택임차차입금 원리금 상환액)
            List<Map> bodyList5 = (List<Map>)baseDao.list("SAL050207DAO.selectYndResult5List", inMap);
        	
        	int listSize5 = (bodyList5 == null? 0 : bodyList5.size());
        	int COUNT5 = 0;
        	int i5 = 0;
    	  	for(i5 = 0; i5 < listSize5; i5++){
    	  		
    	  		Map bodyInfo5 = (Map)bodyList5.get(i5); 
        	    if(i5 == 0 || i5 % 3 == 0 ){
        		    buffer.append(CRLF);
        	    }
        	    
        	    
    	  		String RNTAGNT_NM = (String)bodyInfo5.get("RNTAGNT_NM");
    	  		String RNTAGNT_NO = (String)bodyInfo5.get("RNTAGNT_NO");
    	  		String LS_HOUSE_TY = (String)bodyInfo5.get("LS_HOUSE_TY");
    	  		String LS_HOUSE_AR = (String)bodyInfo5.get("LS_HOUSE_AR");
    	  		String CTRTC_ADRES = (String)bodyInfo5.get("CTRTC_ADRES");
    	  		String CNTRCT_BGNDE = (String)bodyInfo5.get("CNTRCT_BGNDE");
    	  		String CNTRCT_ENDDE = (String)bodyInfo5.get("CNTRCT_ENDDE");
    	  		String MTHT_AM2 = (String)bodyInfo5.get("MTHT_AM");
    	  		String DDC_AMOUNT2 = (String)bodyInfo5.get("DDC_AMOUNT");
    	  		String LENDR_NM = (String)bodyInfo5.get("LENDR_NM");
    	  		String LENDR_IHIDNUM_ENCPT = (String)bodyInfo5.get("LENDR_IHIDNUM_ENCPT");
    	  		String CNTRCT_BGNDE_2 = (String)bodyInfo5.get("CNTRCT_BGNDE_2");
    	  		String CNTRCT_ENDDE_2 = (String)bodyInfo5.get("CNTRCT_ENDDE_2");
    	  		String BRRW_INTR_RT = (String)bodyInfo5.get("BRRW_INTR_RT");
    	  		String PNINT_RPAY_AMOUNT = (String)bodyInfo5.get("PNINT_RPAY_AMOUNT");
    	  		String PRNCPAL = (String)bodyInfo5.get("PRNCPAL");
    	  		String INTR_AMOUNT = (String)bodyInfo5.get("INTR_AMOUNT");
    	  		String DDC_AMOUNT_2 = (String)bodyInfo5.get("DDC_AMOUNT_2");
    	  		String RNTAGNT_NM_2 = (String)bodyInfo5.get("RNTAGNT_NM_2");
    	  		String RNTAGNT_IHIDNUM_ENCPT_2 = (String)bodyInfo5.get("RNTAGNT_IHIDNUM_ENCPT_2");
    	  		String CRRNCY_CNSMP_HOUSE_TY = (String)bodyInfo5.get("CRRNCY_CNSMP_HOUSE_TY");
    	  		String CRRNCY_CNSMP_HOUSE_AR = (String)bodyInfo5.get("CRRNCY_CNSMP_HOUSE_AR");
    	  		String CTRTC_ADRES_2 = (String)bodyInfo5.get("CTRTC_ADRES_2");
    	  		String CRRNCY_CNSMP_BEGIN_DE = (String)bodyInfo5.get("CRRNCY_CNSMP_BEGIN_DE");
    	  		String CRRNCY_CNSMP_END_DE = (String)bodyInfo5.get("CRRNCY_CNSMP_END_DE");
    	  		String LFSTS_GTN = (String)bodyInfo5.get("LFSTS_GTN");
    	  		
    	  		if(i5 == 0 || i5 % 3 == 0 ){
	    	  		buffer.append(StringUtil.rpad("G", ' ', 1));		      // 1   영문대문자 'D'
	            	buffer.append(StringUtil.rpad("20", ' ', 2));		      // 3   근로소득 - 숫자 '20'
	            	buffer.append(StringUtil.rpad("504", ' ', 3));	          // 6   세무서코드 - '504'
	            	buffer.append(StringUtil.lpad(COUNT1, '0', 6));	          // 12  일련번호
	            	buffer.append(StringUtil.rpad("5048206254", ' ', 10));	  // 22  사업자등록번호            	
	            	buffer.append(StringUtil.rpad(ihidnum, ' ', 13));		  // 주민등록번호
    	  		}
            	buffer.append(blank(RNTAGNT_NM, 1, 20));	  // 임대자성명
            	buffer.append(StringUtil.rpad(RNTAGNT_NO, ' ', 13));	  // 주민번호사업자번호
            	
            	buffer.append(StringUtil.rpad(LS_HOUSE_TY, ' ', 1));	  // 임대차주택유형
            	buffer.append(StringUtil.lpad(LS_HOUSE_AR, '0', 5));	  // 임대차주택면적
            	buffer.append(blank(CTRTC_ADRES, 1, 100));	  // 임대차주소지
            	buffer.append(StringUtil.lpad(CNTRCT_BGNDE, '0', 8));	  // 임대차시작일자
            	buffer.append(StringUtil.lpad(CNTRCT_ENDDE, '0', 8));	  // 임대차종료일자
            	buffer.append(StringUtil.lpad(MTHT_AM2, '0', 10));	      // 월세액
            	buffer.append(StringUtil.lpad(DDC_AMOUNT2, '0', 10));	  // 공제금액
            	buffer.append(blank(LENDR_NM, 1, 20));	      // 대주성명
            	buffer.append(StringUtil.rpad(LENDR_IHIDNUM_ENCPT, ' ', 13));  // 대주주민번호
            	buffer.append(StringUtil.lpad(CRRNCY_CNSMP_BEGIN_DE, '0', 8));	  // 임대차개시일
            	buffer.append(StringUtil.lpad(CRRNCY_CNSMP_END_DE, '0', 8));	  // 임대차종료일
            	buffer.append(StringUtil.lpad(BRRW_INTR_RT, '0', 4));	  // 차입금이자율
            	buffer.append(StringUtil.lpad(PNINT_RPAY_AMOUNT, '0', 10));	  // 원리금상환액
            	buffer.append(StringUtil.lpad(PRNCPAL, '0', 10));	      // 원금
            	buffer.append(StringUtil.lpad(INTR_AMOUNT, '0', 10));	  // 이자
            	buffer.append(StringUtil.lpad(DDC_AMOUNT_2, '0', 10));	  // 공제금액
            	buffer.append(blank(RNTAGNT_NM_2, 1, 20));	  // 임대인성명
            	buffer.append(StringUtil.rpad(RNTAGNT_IHIDNUM_ENCPT_2, ' ', 13));	  // 주민번호
            	buffer.append(StringUtil.rpad(CRRNCY_CNSMP_HOUSE_TY, ' ', 1));	  // 금전소비주택유형
            	buffer.append(StringUtil.lpad(CRRNCY_CNSMP_HOUSE_AR, '0', 5));	  // 금전소비주택면적
            	buffer.append(blank(CTRTC_ADRES_2, 1, 100));	  // 주소지
            	buffer.append(StringUtil.lpad(CNTRCT_BGNDE_2, '0', 8));	  // 계약시작일자
            	buffer.append(StringUtil.lpad(CNTRCT_ENDDE_2, '0', 8));	  // 계약차종료일자
            	buffer.append(StringUtil.lpad(LFSTS_GTN, '0', 10));	  // 전세보증금
            	
            	if((i5+1) % 3 == 0 && i5 > 0){
            		COUNT5++;
            		buffer.append(StringUtil.lpad(String.valueOf(COUNT5), '0', 2));       // 일련번호
            		buffer.append(blank("", 1, 284));    // 공란
            	}
    	  	}
    	  	
    	  	if(i5 % 3 != 0){
    	  		int itemCnt = 3 - (i5 % 3);
    	  		buffer.append(blank("", 1, itemCnt*433));
    	  		COUNT5++;
    	  		buffer.append(StringUtil.lpad(String.valueOf(COUNT5), '0', 2));       // 일련번호
        		buffer.append(blank("", 1, 284));    // 공란
    	  	}
    	  	
    	  	
        	
        	buffer.append(CRLF);
    	}
    	
    	buffer.append(CRLF);
    	
    	System.out.println("[ END ] 전산매체생성 - 근로소득매체생성 =================");
    	
    	return buffer.toString();
    }
}
