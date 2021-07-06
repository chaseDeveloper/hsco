package hsco.mis.cus.CUS010102;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS010102ServiceImpl.java
 * @Description     : 민원분배를 관리하는 서비스구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 08. 05.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 03.  김병진             최초생성
 *  2016. 04. 19.  이수지             SMS발송
 * </pre>  
 */
@Service("CUS010102Service")
public class CUS010102ServiceImpl extends BaseService implements CUS010102Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    

	/*부서코드조회*/
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDeptCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input5");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        List <Map> records2;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010102DAO.selectDeptCodeList", inMap);
            records2 = (List<Map>)baseDao.list("CUS010102DAO.selectPermList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010102DAO.selectDeptCodeList", inVar);
            records2 = (List<Map>)baseDao.list("CUS010102DAO.selectPermList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        
        outDsMap.setRowMaps(records);
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output1", outDsMap);
        outDataset.put("output2", outDsMap2);
        
    }
    
	/*온/오프라인민원목록 조회*/
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCvplList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010102DAO.selectCvplList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010102DAO.selectCvplList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
	
	/*부서담당자정보 조회*/
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectChargerAppnInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input02");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010102DAO.selectChargerAppnInfo", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010102DAO.selectChargerAppnInfo", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output02", outDsMap);
        
    }
	
    /*고객정보 조회*/
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectHmpgCstmrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            
         // 홈페이지 회원 테이블 조회
            records = (List<Map>)baseDao.list("CUS010102DAO.selectHmpgCstmrInfo01", inMap);
            
            // 기타고객 테이블 조회
            if(records.size() < 1){
            	records = (List<Map>)baseDao.list("CUS010102DAO.selectHmpgCstmrInfo", inMap);
            }
        } else {
            records = (List<Map>)baseDao.list("CUS010102DAO.selectHmpgCstmrInfo", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output03", outDsMap);
        
    }
    
	/*민원분배관리 등록/수정/삭제 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	  
	   public int hmpgCvplDstbListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
	           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	           Map<String, DataSetMap> outDataset) throws NexaServiceException {
		   
		   Map<String, String> mapUserInfo = (Map<String, String>) inVar.get(NexacroConstant.SESSION_USER_MAP_NAME);
	       
	       int iRow = 0;
	       String parentKey = null;
	       
	       DataSetMap list = (DataSetMap) inDataset.get("input04");
	       
	       int listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	               
	           Map map = list.get(x);
	                           
	           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	           
	           switch(rowType) {
	           case DataSet.ROW_TYPE_INSERTED :
	        	   parentKey = (String) baseDao.select("CUS010102DAO.selectRceptNo", map); // 민원접수번호 채번
	               map.put("RCEPT_NO", parentKey);
	               baseDao.insert("CUS010102DAO.hmpgCvplListC", map); //cvpl 저장 (고객민원)
	               baseDao.insert("CUS010102DAO.hmpgCvplDstbListCU", map); //dstb저장 (민원분배)
                  // baseDao.insert("CUS010102DAO.hmpgCstmrInfoC", map); //고객정보저장
	               
	               //오프라인 고객 문자발송 
		           if(map.get("MBTLNO") != null){
		        	   Map<String, String> cusInfoMap = new HashMap<String, String>();
		        	   
		        	   cusInfoMap.put("SEND_DEPT_CODE", mapUserInfo.get("DEPT_CODE"));		//발송부서코드
		        	   cusInfoMap.put("ANSW_TEL", "0533500301");							//회신번호
		        	   cusInfoMap.put("BROAD_MSSAGE_ID", "0000000021");						//맞춤문자 (CUS001 : [민원]민원등록안내)
		        	   cusInfoMap.put("CHANG_WORD1", map.get("NM").toString());				//맞춤문자1(고객명)
		        	   cusInfoMap.put("CHANG_WORD2", parentKey);							//맞춤문자2(민원번호)
		        	   
		        	   cusInfoMap.put("RECIPIENT_NUM", map.get("MBTLNO").toString());		//수진자번호
		        	   cusInfoMap.put("RCVER_NM", map.get("NM").toString());				//수신자명
		        	   cusInfoMap.put("SENDER_ID", map.get("S_USER_ID").toString());		//발신자아이디
		    	        
		        	   baseDao.insert("CUS010102DAO.messeageProcedure", cusInfoMap);
		           }
                   
               break;
	           case DataSet.ROW_TYPE_UPDATED :
	        	   parentKey = (String)map.get("CVPL_NO");
	              // baseDao.insert("CUS010102DAO.hmpgCstmrInfoC", map); //고객정보저장
	               baseDao.update("CUS010102DAO.hmpgCvplAtchFileU", map); //cvpl 저장(고객민원)
	               baseDao.insert("CUS010102DAO.hmpgCvplDstbListCU", map); //dstb 업데이트(민원분배)
               break;
	           }
	           
	           //주부서 / 협조부서 
        	   if(map.containsKey("CHRG_DEPT_CODE")||map.containsKey("HELP_DEPT_CODE")){
                   try {
						List <Map> appn;
						appn = (List <Map>)baseDao.list("CUS010102DAO.selectChargerAppn", map);	//담당자 정보
						if(appn.size() > 0){
							for(int i=0; i < appn.size(); i++){
								Map appnVal = appn.get(i);
								//부서분배받은 담당자의 전화번호가 있을시에 문자발송
								if(appnVal.get("TELNO") != null){
									//부서 담당자문자발송 호출
									map.put("SEND_DEPT_CODE", mapUserInfo.get("DEPT_CODE"));		//발송부서코드
									map.put("ANSW_TEL", "0533500301");								//회신번호
					    	        map.put("BROAD_MSSAGE_ID", "0000000026");						//맞춤문자 (CUS006 : [민원]민원부서분배안내)
					    	        map.put("CHANG_WORD1", appnVal.get("EMPNM"));					//맞춤문자1(담당자명)
					    	        map.put("CHANG_WORD2", parentKey);								//맞춤문자2(민원번호)
					    	        map.put("CHANG_WORD3", map.get("CSTMR_REGIST_DT").toString().substring(0, 4) + "-" +
					    	        					   map.get("CSTMR_REGIST_DT").toString().substring(4, 6) + "-" +
					    	        					   map.get("CSTMR_REGIST_DT").toString().substring(6, 8)
					    	        		);				//맞춤문자3(민원일자)
					    	        map.put("CHANG_WORD4", map.get("NM"));							//맞춤문자4(민원인)
					    	        
					    	        
					    	        map.put("RECIPIENT_NUM", appnVal.get("TELNO"));					//수진자번호
					    	        map.put("RCVER_NM", appnVal.get("EMPNM"));						//수신자명
					    	        map.put("SENDER_ID", map.get("S_USER_ID"));						//발신자아이디
					    	        
					    	        baseDao.insert("CUS010102DAO.messeageProcedure", map);
								}
								
				    	        //메신저발송 호출
				    	        map.put("MSG_CODE", "CUS001");							//맞춤메세지 ([민원]민원부서분배안내)
				    	        map.put("INS_USER_ID", map.get("S_USER_ID"));			//등록자ID
				    	        map.put("FROM_USER_ID", map.get("S_USER_ID"));			//송신자ID
				    	        map.put("TO_USER_ID", appnVal.get("EMPNO"));			//수신자ID
				    	        map.put("CHANGEWORD1", appnVal.get("EMPNM"));			//담당자명
				    	        map.put("CHANGEWORD2", parentKey);						//민원번호
				    	        map.put("CHANGEWORD3", map.get("CSTMR_REGIST_DT").toString().substring(0, 4) + "-" +
				    	        					   map.get("CSTMR_REGIST_DT").toString().substring(4, 6) + "-" +
				    	        					   map.get("CSTMR_REGIST_DT").toString().substring(6, 8)
				    	        		);				//민원일자
				    	        map.put("CHANGEWORD4", map.get("NM"));					//민원인명
				    	        
				    	        baseDao.insert("CUS010102DAO.sendMsgrProcedure", map);
				    	        
//				    	        System.out.println(
//				    	        					"BROAD_MSSAGE_ID : "+map.get("BROAD_MSSAGE_ID")+ " " +
//				    	        					"SEND_DEPT_CODE : "+map.get("SEND_DEPT_CODE")+ " " +
//				    	        					"ANSW_TEL : "+map.get("ANSW_TEL")+ " " +
//				    	        					"RECIPIENT_NUM : "+map.get("RECIPIENT_NUM")+ " " +
//				    	        					"RCVER_NM : "+map.get("RCVER_NM")+ " " +
//				    	        					"SENDER_ID : "+map.get("SENDER_ID")+ " " +
//				    	        					"CHANG_WORD1 : "+map.get("CHANG_WORD1")+ " " +
//				    	        					"CHANG_WORD2 : "+map.get("CHANG_WORD2")+ " " +
//				    	        					"CHANG_WORD3 : "+map.get("CHANG_WORD3")+ " " +
//				    	        					"CHANG_WORD4 : "+map.get("CHANG_WORD4")+ " " +
//				    	        					"MSG_CODE : "+map.get("MSG_CODE")+ " " +
//				    	        					"INS_USER_ID : "+map.get("INS_USER_ID")+ " " +
//				    	        					"FROM_USER_ID : "+map.get("FROM_USER_ID")+ " " +
//				    	        					"TO_USER_ID : "+map.get("TO_USER_ID")+ " " +
//				    	        					"CHANGEWORD1 : "+map.get("CHANGEWORD1")+ " " +
//				    	        					"CHANGEWORD2 : "+map.get("CHANGEWORD2")+ " " +
//				    	        					"CHANGEWORD3 : "+map.get("CHANGEWORD3")+ " " +
//				    	        					"CHANGEWORD4 : "+map.get("CHANGEWORD4")
//				    	        );
							}
						}
                   } catch (Exception e) {
                       // TODO Auto-generated catch block
                       e.printStackTrace();
                   }
               }  

	          
	       }
	       return iRow;
	   }
	 
	    @SuppressWarnings({ "rawtypes", "unchecked"})
	    public void sendSMS(Map inMap, int chrgAT) throws Exception{
	        Map inputMap = inMap;
	        Map<String, String> smsMap = null;
            List <Map> records = null;
            //주무부서, 협조부서 둘 다 있는경우 1로 받음
	        int loopFlag = chrgAT;
            //String sendMsgTime;
            
	        //주무부서 협조부서 여부
	        //주무부서 1 , 협조부서 0
	        do{
    	        inputMap.put("ANSW_TEL", "0533500301");		//회신번호
    	        inputMap.put("BROAD_MSSAGE_ID", "CUS006");	//맞춤문자 ([민원]민원부서분배안내)
    	        //sendMsgTime = (String) baseDao.select("CUS010102DAO.selectSendTime", inputMap);
    	        //inputMap.put("SEND_MSG_TIME", sendMsgTime);
    	        
    	        if(inputMap.containsKey("CHRG_DEPT_CODE")){              //주무부서
    	            inputMap.put("CHRG_AT", "1");
                    inputMap.put("SMS_EMPNO", inMap.get("CHARGER_EMPNO").toString());
                    inputMap.put("SMS_EMPNM", inMap.get("CHARGER_NM").toString());
                    inputMap.remove("CHRG_DEPT_CODE");
                    inputMap.put("TELNO", inMap.get("CHARGER_TELNO").toString());
    	        }else if(inputMap.containsKey("HELP_DEPT_CODE")){       //협조부서
    	            inputMap.put("CHRG_AT", "0");
                    inputMap.put("SMS_EMPNO", inMap.get("HELP_CHARGER_EMPNO").toString());
                    inputMap.put("SMS_EMPNM", inMap.get("HELP_CHARGER_NM").toString());
                    inputMap.remove("HELP_DEPT_CODE");
                    inputMap.put("TELNO", inMap.get("HELP_TELNO").toString());
                    loopFlag = 0;
    	        }
	            if (inputMap != null) {
	                Map map = (Map)baseDao.select("CUS020107DAO.mssageInfoR", inputMap);
	                inputMap.put("MSG", map);
	                records = (List<Map>)baseDao.list("CUS020107DAO.mssageMinwonInfoR", inputMap);
	            }
    	            
    	        smsMap = records.get(0);
    	        smsMap.putAll(inputMap);
    	        baseDao.list("CUS010102DAO.messeageProcedure", smsMap);
	        }while(loopFlag == 1);
           // sendMsg(inMap, chrgAT, smsMap);   //메신저
	    }
	    
    /**
     * 메신저발송
     * @param inMap
     * @throws Exception
     */
//    @SuppressWarnings({ "rawtypes", "unchecked"})
//    public void sendMsg(Map inMap, int chrgAT, Map cnMap) throws Exception{
//        Map inputMap = inMap;
//        Map smsCnMap = cnMap;
//        Map msgSendMap = new HashMap<String, String>();
//        //주무부서, 협조부서 둘 다 있는경우 1로 받음
//        int loopFlag = chrgAT;
//        
//        //주무부서 협조부서 여부
//        //주무부서 1 , 협조부서 0
//        do{
//        
//        String msgCn = cnMap.get("MSSAGE_CN").toString();
//        String msgCnResult;                                        //최종 메세지내용
//        msgCnResult = msgCn.replaceFirst("%CHANGEWORD%", smsCnMap.get("MXTR_WRD1").toString());
//        msgCnResult = msgCnResult.replaceFirst("%CHANGEWORD%", smsCnMap.get("MXTR_WRD2").toString());
//        msgCnResult = msgCnResult.replaceFirst("%CHANGEWORD%", smsCnMap.get("MXTR_WRD3").toString());
//        
//        msgSendMap.put( "SENDER_USER_ID", inMap.get("RCEPT_EMPNO")); // 발신자사번
//        msgSendMap.put( "SENDER_USER_NM", inMap.get("RCEPT_EMPNM")); // 발신자명
//        msgSendMap.put( "NTCN_SJ",        "부서민원분배 알림");    // 제목
//        msgSendMap.put( "LINK_ADRES",     "");                     // 링크주소
//        msgSendMap.put( "NTCN_CN",        msgCnResult);            // 내용
//        
//        
//        if(inMap.containsKey("CHARGER_TELNO")){                   //주무부서
//            msgSendMap.put( "RCVER_USER_ID",  inputMap.get("CHARGER_EMPNO").toString());       // 수신자사번
//            msgSendMap.put( "RCVER_USER_NM",  inputMap.get("CHARGER_NM").toString());          // 수신자명
//            inMap.remove("CHARGER_TELNO");
//        }else if(inMap.containsKey("HELP_TELNO")){       //협조부서
//            msgSendMap.put( "RCVER_USER_ID",  inputMap.get("HELP_CHARGER_EMPNO").toString());  // 수신자사번
//            msgSendMap.put( "RCVER_USER_NM",  inputMap.get("HELP_CHARGER_NM").toString());     // 수신자명
//            inMap.remove("HELP_TELNO");
//            loopFlag = 0;
//        }
//        
//        String ntcnUrl = "";
//
//        // 알림저장
//        baseDao.insert("SYM110100DAO.NtcnSndngC",msgSendMap); 
//        
//        //메세지정보
//        String message1 = (String)baseDao.select("MIS000000DAO.msgEmpno", msgSendMap);
//        String message2 = (String)msgSendMap.get("SENDER_USER_NM");
//        String message3 = (String)msgSendMap.get("NTCN_CN");
//        String message4 = (String)msgSendMap.get("LINK_ADRES");
//        String message5 = (String)msgSendMap.get("NTCN_SJ");
//                
//        
//        ntcnUrl = ntcnUrl + "?message1=" + message1;
//        ntcnUrl = ntcnUrl + "&message2=" + StringUtil.encodeToUtf8(message2);
//        ntcnUrl = ntcnUrl + "&message3=" + StringUtil.encodeToUtf8(message3);
//        ntcnUrl = ntcnUrl + "&message4=" + message4;
//        ntcnUrl = ntcnUrl + "&message5=" + StringUtil.encodeToUtf8(message5);
//        
//        /*
//        http://포털IP/AtMessengerCommunicator.do?message1=사번&message2=보내는사람이름&message3=알리미내용&message4=링크주소&message5=알람창일뜰때제목
//        * */
//        
//        String apiUrl = "http://192.168.10.222/AtMessengerCommunicator.do"+ntcnUrl;     // 포털주소 입력
//        //System.out.println("messangerUrl :" + apiUrl);
//
//        InputStream in = null;
//
//        try {
//            in = new URL(apiUrl).openConnection().getInputStream();
//            if(in != null){
//                in.close();
//            }
//        }
//        catch(Exception e)  {/*문자발송 후 오류무시*/}
//        
//        }while(loopFlag == 1);
//    }
}
