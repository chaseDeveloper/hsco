package hsco.mis.acc.ACC040109;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC040109Service.java
 * @Description  	: 부동산임대관리를 관리하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2017. 12. 09.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 09.	이수지		최초생성
 * </pre>  
 */
@Service("ACC040109Service")
public class ACC040109ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(ACC040109ServiceImpl.class);
	
    /**
	 * 부동산임대관리 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void estateRentList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	if(log.isInfoEnabled()) log.info("select Started!");
    	
    	Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC040109DAO.estateRentList", inMap));
//        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC040109DAO.createEH", inMap));
        outDataset.put("output1", outDsMap);
//        
//        DataSetMap outDsMap2 = new DataSetMap();
//        outDsMap2.setRowMaps((List<Map>) baseDao.list("ACC040109DAO.createED", inMap));
//        outDataset.put("output2", outDsMap2);
	}


    /**
     * 부동산임대관리 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings("rawtypes")
    public void estateRentCUD(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap input = inDataset.get("input1");
        for(Map map : input.getRowMaps()) {
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED:
                    baseDao.insert("ACC040109DAO.estateRentC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED:
                    baseDao.update("ACC040109DAO.estateRentU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED:
                    baseDao.delete("ACC040109DAO.estateRentD", map);
                    break;
                default:
                    break;
            }
        }
    }
    
/**
 * 파일생성
 * @param xpDto
 * @return
 * @throws NexaServiceException
 */
    @SuppressWarnings({"rawtypes"})
    public File getAtcngReqstFile(NexacroMapDTO xpDto) throws NexaServiceException {
    	System.out.println("[BEGIN] 부동산임대공급가액 - 홈택스전자신고용변환파일생성 =================");
    	try
    	{
	    	File atcngReqstFile = null;
	    	
	    	Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
	    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");	// 조회조건
	    	
	    	Map inMap = null;
			if (inDsMap != null){
				inMap = inDsMap.get(0);				
				
				// 다운로드 파일 내용을 구성한다.
				String contents = createBuffer(inMap);
				
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
	//반기구분
	private static final Map<String,String> MAP_OCCRRNC_QU = new HashMap<String,String>();
	static {
	  MAP_OCCRRNC_QU.put("1","1");
	  MAP_OCCRRNC_QU.put("2","1");
	  MAP_OCCRRNC_QU.put("3","2");
	  MAP_OCCRRNC_QU.put("4","2");
	};
	
	//반기내 월 구분
	private static final Map<String,String> MAP_STTEMNT_HRSMN = new HashMap<String,String>();
	static {
	  MAP_STTEMNT_HRSMN.put("1","3");
	  MAP_STTEMNT_HRSMN.put("2","6");
	  MAP_STTEMNT_HRSMN.put("3","3");
	  MAP_STTEMNT_HRSMN.put("4","6");
	};
	
	
	/**
	 * 파일생성
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws IOException 
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public String createBuffer(Map inMap) throws Exception{

        StringBuffer sb = new StringBuffer();
        String CRLF = "\r\n";
        
        //제출자인적사항(HEAD RECORD)
        Map mapEH = (Map) baseDao.select("ACC040109DAO.createEH", inMap);
        
        sb.append("EH");                                                  //레코드구분
        sb.append(blank(mapEH.get("STTEMNT_YEAR"), 1, 4));                        //귀속년도
        sb.append(MAP_OCCRRNC_QU.get(mapEH.get("STTEMNT_HRSMN")));            //반기구분
        sb.append(MAP_STTEMNT_HRSMN.get(mapEH.get("STTEMNT_HRSMN")));               //반기내 월 순번
        sb.append(blank(mapEH.get("BIZRNO"), 1, 10));                     //수취자(제출자)사업자등록번호
        sb.append(blank(mapEH.get("MTLTY"), 1, 60));                      //상호(법인명)
        sb.append(blank(mapEH.get("RPRSNTV"), 1, 30));                    //대표자
        sb.append(blank(mapEH.get("RPRSNTV_IHIDNUM"), 1, 13));            //주민(법인)등록번호
        sb.append(blank(mapEH.get("SUBMIT_DATE"), 1, 8));                 //제g출일자(오늘)
        sb.append(blank(mapEH.get("TELNO"),1,12));                        //수취자(제출자)전화번호
        sb.append(blank("", 1, 109));                                     //공란
        sb.append(CRLF);
        
        //부동산임대공급가액명세서(DATA RECORD)
        
        List<Map> mapED = (List<Map>) baseDao.list("ACC040109DAO.estateRentList", inMap);
        int listSize = (mapED == null) ? 0 : mapED.size();
        for (int x = 0; x < listSize; x++) {
        	sb.append("ED");                                                        //레코드구분
            sb.append(mapED.get(x).get("STTEMNT_YEAR"));                            //귀속년도
            sb.append(MAP_OCCRRNC_QU.get(mapED.get(x).get("STTEMNT_HRSMN")));     //반기구분
            sb.append(MAP_STTEMNT_HRSMN.get(mapED.get(x).get("STTEMNT_HRSMN"))); //반기내 월 순번
            sb.append(blank(mapEH.get("BIZRNO"), 1, 10));                  //수취자(제출자)사업자등록번호
            sb.append("000001");                                           //일련번호구분
            sb.append("000001");                                           //일련번호
            sb.append(blank(mapED.get(x).get("FLOOR"), 1, 10));            //층
            sb.append(blank(mapED.get(x).get("HO"), 1, 10));               //호수
            sb.append(blank(mapED.get(x).get("RENT_AR"), 1, 10));          //면적
            sb.append(blank(mapED.get(x).get("MTLTY"), 1, 30));            //임차인상호
            sb.append(blank(mapED.get(x).get("BIZRNO"), 1, 13));           //사업자등록번호
            
            sb.append(blank(mapED.get(x).get("MVN_DE"), 1, 8));            //임대계약입주일
            sb.append(blank(mapED.get(x).get("LVHS_DE"), 1, 8));           //임대계약퇴거일
            sb.append(blank(mapED.get(x).get("GTN"), 0, 13));              //임대계약내용보증금
            sb.append(blank(mapED.get(x).get("MT_RNTCHRG"), 0, 13));       //임대계약내용월임대료
            sb.append(blank(mapED.get(x).get("TOT_AMT"), 0, 13));          //17.임대계약수입금액계*
            sb.append(blank(mapED.get(x).get("GTN_INTR"), 0, 13));         //임대계약보증금이자
            sb.append(blank(mapED.get(x).get("MT_RNTCHRG_SM"), 0, 13));    //임대료수입금액월임대료
            sb.append(" ");
            sb.append("0000");
            sb.append(blank(mapED.get(x).get("DONG"), 1, 20));             //호수
            sb.append(blank(mapED.get(x).get("UPDT_DE"), 1, 8));           //갱신일
            sb.append(blank("", 1, 33));                                   //공란
            sb.append(CRLF);
            }
        
      //부동산임대공급가액명세서 합계(TAIL RECORD)
        Map mapET = (Map) baseDao.select("ACC040109DAO.createET", inMap);
        
        sb.append("ET");                                                //레코드구분
        sb.append(blank(mapEH.get("STTEMNT_YEAR"), 1, 4));                      //귀속년도
        sb.append(MAP_OCCRRNC_QU.get(mapEH.get("STTEMNT_HRSMN")));          //반기구분
        sb.append(MAP_STTEMNT_HRSMN.get(mapEH.get("STTEMNT_HRSMN")));             //반기내 월 순번
        sb.append(blank(mapEH.get("BIZRNO"), 1, 10));                   //수취자(제출자)사업자등록번호
        sb.append(blank(mapET.get("DATA_CNT_SUM"), 1, 7));              //DATA건수(임대건수와 동일)
        sb.append("000001");                                            //일련번호구분
        sb.append(blank(mapET.get("ADRES"), 1, 70));                    //부동산소재지(화성도시공사)
        sb.append(blank(mapET.get("GTN_SUM"), 0, 15));                  //임대계약내용보증금 합계
        sb.append(blank(mapET.get("SUPP_AMT_SUM"), 0, 15));             //임대계약내용월임대료 합계
        sb.append(blank(mapET.get("TOT_AMT_SUM"), 0, 15));              //임대계약수입금액계 합계
        sb.append(blank(mapET.get("REGARD_RNTCHRG_SUM"), 0, 15));       //임대계약보증금이자 합계
        sb.append(blank(mapET.get("SUPP_AMT_SUM_SUM"), 0, 15));         //임대료수입금액월임대료 합계
        sb.append(blank(mapET.get("DATA_CNT_SUM"), 1, 6));          //임대건수(DATA건수와 동일)
        sb.append("0000");                                              //종사업자일련번호
        sb.append(blank("", 1, 64));                                    //공란
        
        return sb.toString();
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
				StringBuffer sb = new StringBuffer();
				if(r_val.getBytes("ksc5601").length <length){
					sb.append(r_val + ' ');	   //// r_val += ' '; 을 StringBuffer Notation으로 변경함(code inspection: Performance 개선)
					
				}
				
				return sb.toString(); ///// return r_val;  을 StringBuffer Notation으로 변경함(code inspection: Performance 개선)
			}else{
				StringBuffer sb = new StringBuffer();
				sb.append(s);
				for(int i=s.getBytes("ksc5601").length; i<length; i++){
				    sb.append(' ');
				}
				s = sb.toString();
				return s;
			}
		}
	}
}