package hsco.mis.cus.CUS020101;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;


/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS020101ServiceImpl.java
 * @Description     : 우리팀 민원분배를 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 13.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 13.      김병진              최초생성
 *  2016. 04. 20.      이수지              SMS발송
 * </pre>  
 */

@Service("CUS020101Service")
public class CUS020101ServiceImpl extends BaseService implements CUS020101Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    

    /*온/오프라인민원목록 조회*/
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectTeamCvplDstbList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
         
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS020101DAO.selectTeamCvplDstbList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS020101DAO.selectTeamCvplDstbList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    /*우리팀 민원분배관리 등록/수정/삭제 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	  
	   public int teamCvplDstbListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
	           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	           Map<String, DataSetMap> outDataset) throws NexaServiceException {
	       
	       int iRow = 0;
           
	       DataSetMap list = (DataSetMap) inDataset.get("input03");
	       
	       int listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	               
	           Map map = list.get(x);
	           String sttus = (String) map.get("CVPL_STTUS");
	           
	           //부서분배[2/6] , 처리중[3/6]
	           if((sttus.equals("3") && map.containsKey("APPN_CHARGER")) || (sttus.equals("2") && map.containsKey("HELP_APPN_CHARGER_NM"))){
	        	   baseDao.update("CUS020101DAO.teamCvplDstbListCUD", map);
//	        	   baseDao.update("CUS020101DAO.teamCvplRceptDtU", map);  	   
	           } else if(sttus.equals("7")){	//부서반려[1/6]
	        	   baseDao.insert("CUS020101DAO.returnCVPLC", map);
	        	   baseDao.update("CUS020101DAO.returnCVPLU", map);
	           }
	           
	           
	           Map<String, String> mapUserInfo = (Map<String, String>) inVar.get(NexacroConstant.SESSION_USER_MAP_NAME);
	           //담당자가 있으면 문자메세지 발송
	           if(map.containsKey("APPN_CHARGER")||map.containsKey("HELP_APPN_CHARGER")){
	        	   String appn;
					appn = (String)baseDao.select("CUS020101DAO.selectChargerAppnInfo", map);	//담당자 정보
					//담당자의 전화 번호가 있을 때 문자발송
					if(appn != null){
						//문자발송 호출
						map.put("SEND_DEPT_CODE", mapUserInfo.get("DEPT_CODE"));		//발송부서코드
						map.put("ANSW_TEL", "0533500301");								//회신번호
		    	        map.put("BROAD_MSSAGE_ID", "0000000027");						//맞춤문자 ([민원]담당자민원분배안내)
		    	        
		    	        if(map.get("MAIN_HELP_SE").equals("1")){	//주부서
		    	        	map.put("CHANG_WORD1", map.get("APPN_CHARGER_NM"));				//맞춤문자1(주부서 담당자명)
		    	        	map.put("RCVER_NM", map.get("APPN_CHARGER_NM"));				//수신자명
		    	        }else{
		    	        	map.put("CHANG_WORD1", map.get("HELP_APPN_CHARGER_NM"));		//맞춤문자1(협조부서 담당자명)
		    	        	map.put("RCVER_NM", map.get("HELP_APPN_CHARGER_NM"));			//수신자명
		    	        }
		    	        
		    	        map.put("CHANG_WORD2", map.get("CVPL_NO"));						//맞춤문자2(민원번호)
		    	        map.put("CHANG_WORD3", map.get("CSTMR_REGIST_DT").toString().substring(0, 4) + "-" +
				        					   map.get("CSTMR_REGIST_DT").toString().substring(4, 6) + "-" +
				        					   map.get("CSTMR_REGIST_DT").toString().substring(6, 8)
		    	        		);				//맞춤문자3(민원일자)
		    	        map.put("CHANG_WORD4", map.get("NM"));							//맞춤문자4(민원인)
		    	        map.put("CHANG_WORD5", map.get("PROCESS_TMLMT") + "일");		    //맞춤문자5(처리기한)
		    	        
		    	        
		    	        map.put("RECIPIENT_NUM", appn);									//수신자번호
		    	        map.put("SENDER_ID", map.get("S_USER_ID"));						//발신자아이디
		    	        
		    	        baseDao.insert("CUS020101DAO.messeageProcedure", map);
					}
					
					//메신저 발송
					map.put("MSG_CODE", "CUS002");							//맞춤메세지 ([민원]담당자민원분배안내)
	    	        map.put("INS_USER_ID", map.get("S_USER_ID"));			//등록자ID
	    	        map.put("FROM_USER_ID", map.get("S_USER_ID"));			//송신자ID
	    	        if(map.get("MAIN_HELP_SE").equals("1")){	//주부서
	    	        	map.put("TO_USER_ID", map.get("APPN_CHARGER"));				//주부서 수신자ID
	    	        	map.put("CHANGEWORD1", map.get("APPN_CHARGER_NM"));			//주부서 담당자명
	    	        }else{
	    	        	map.put("TO_USER_ID", map.get("HELP_APPN_CHARGER"));		//혐조부서 수신자ID
	    	        	map.put("CHANGEWORD1", map.get("HELP_APPN_CHARGER_NM"));	//협조부서 담당자명
	    	        }
	    	        map.put("CHANGEWORD2", map.get("CVPL_NO"));						//민원번호
	    	        map.put("CHANGEWORD3", map.get("CSTMR_REGIST_DT").toString().substring(0, 4) + "-" +
				     					   map.get("CSTMR_REGIST_DT").toString().substring(4, 6) + "-" +
				     					   map.get("CSTMR_REGIST_DT").toString().substring(6, 8)
     					   );				//민원일자
	    	        map.put("CHANGEWORD4", map.get("NM"));					//민원인명
	    	        map.put("CHANGEWORD5", map.get("PROCESS_TMLMT") + "일");					//처리기한
	    	        
	    	        baseDao.insert("CUS020101DAO.sendMsgrProcedure", map);
	    	        
//	               Map smsMap = null;
//	               String sendMsgTime;
//	               
//	               Map msgInfoInput = new HashMap<String, String>();
//	               msgInfoInput.put("MSSAGE_ID", "MSG0000005");
//                   smsMap = (Map)baseDao.select("CUS020107DAO.mssageInfoR", msgInfoInput);
//                   if(smsMap.size()>0){
//                       //민원메세지 조회가 됬을 때
//                       smsMap.put("RCEPT_NO",map.get("RCEPT_NO"));
//                       smsMap.put("TELNO", baseDao.select("CUS020101DAO.selectEmpnoTelno", map)); //담당자 연락처
//                       sendMsgTime = (String) baseDao.select("CUS010102DAO.selectSendTime", msgInfoInput);
//                       smsMap.put("SEND_MSG_TIME", sendMsgTime);
//                       if("1".equals(map.get("MAIN_HELP_SE"))){
//                           //주무부서 여부
//                           smsMap.put("CHRG_AT", "1");
//                           smsMap.put("SMS_EMPNO",map.get("APPN_CHARGER_NM"));
//                       }else{
//                           smsMap.put("CHRG_AT", "0");
//                           smsMap.put("SMS_EMPNO",map.get("HELP_APPN_CHARGER_NM"));
//                       }
//                       
//                       smsMap.put("MXTR_WRD1",map.get("RCEPT_DT"));
//                       smsMap.put("MXTR_WRD2",map.get("CVPL_NO"));
//                       smsMap.put("MXTR_WRD3",map.get("PROCESS_TMLMT"));
//                       
//                       baseDao.list("CUS020101DAO.messeageProcedure", smsMap);
////                       try {
////                        sendMsg(map, 0, smsMap);
////                       } catch (Exception e) {
////                           // TODO Auto-generated catch block
////                           e.printStackTrace();
////                       }
//                   }
	           }else if(map.containsKey("RETURN_SE")){
	               //반려구분이 있으면 반려메세지 전송
	        	   List <Map> appn;
					appn = (List <Map>)baseDao.list("CUS020101DAO.selectChargerVOC", map);	//부서분배담당자 정보(고객담당자VOC)
					
					for(int i = 0; i < appn.size(); i++){
						Map appnVal = appn.get(i);
						//부서분배받은 담당자의 전화번호가 있을시에 문자발송
						if(appnVal.get("TELNO") != null){
							//문자발송 호출
							map.put("SEND_DEPT_CODE", mapUserInfo.get("DEPT_CODE"));		//발송부서코드
							map.put("ANSW_TEL", "0533500301");								//회신번호
			    	        map.put("BROAD_MSSAGE_ID", "0000000028");							//맞춤문자 ([민원]담당자민원분배안내)
			    	        map.put("CHANG_WORD1", appnVal.get("EMPNM"));				//맞춤문자1(담당자명)
			    	        map.put("CHANG_WORD2", map.get("CVPL_NO"));						//맞춤문자2(민원번호)
			    	        map.put("CHANG_WORD3", map.get("CHRG_DEPT_NM"));				//맞춤문자3(부서)
			    	        map.put("CHANG_WORD4", map.get("NM"));							//맞춤문자4(민원인)
			    	        
			    	        map.put("RECIPIENT_NUM", appnVal.get("TELNO"));					//수진자번호
			    	        map.put("RCVER_NM", appnVal.get("EMPNM"));				//수신자명
			    	        map.put("SENDER_ID", map.get("S_USER_ID"));						//발신자아이디
			    	        
			    	        baseDao.insert("CUS020101DAO.messeageProcedure", map);
						}
						
						//메신저 발송
						map.put("MSG_CODE", "CUS003");							//맞춤메세지 ([민원]담당자민원분배안내)
		    	        map.put("INS_USER_ID", map.get("S_USER_ID"));			//등록자ID
		    	        map.put("FROM_USER_ID", map.get("S_USER_ID"));			//송신자ID
		    	        map.put("TO_USER_ID", appnVal.get("EMPNO"));			//수신자ID
		    	        map.put("CHANGEWORD1", appnVal.get("EMPNM"));			//담당자명
		    	        map.put("CHANGEWORD2", map.get("CVPL_NO"));						//민원번호
		    	        map.put("CHANGEWORD3", map.get("CHRG_DEPT_NM"));		//부서
		    	        map.put("CHANGEWORD4", map.get("NM"));					//민원인명
		    	        
		    	        baseDao.insert("CUS020101DAO.sendMsgrProcedure", map);
					}
//	               List <Map> CmrChargerInfo = null;
//	               CmrChargerInfo = (List<Map>) baseDao.list("CUS020101DAO.selectCmrCharger");
//	               for(int i = 0; i < CmrChargerInfo.size(); i++){
//	                   //고객담당자 수를 먼저 확인하고 고객담당자의 수만큼 반복
//	                   Map smsMap = null;
//	                   String sendMsgTime;
//	                   Map msgInfoInput = new HashMap<String, String>();
//	                   msgInfoInput.put("MSSAGE_ID", "MSG0000004");
//	                   
//	                   smsMap = (Map)baseDao.select("CUS020107DAO.mssageInfoR", msgInfoInput);
//                       sendMsgTime = (String) baseDao.select("CUS010102DAO.selectSendTime", msgInfoInput);
//                       smsMap.put("SEND_MSG_TIME", sendMsgTime);
//                       
//	                   if(smsMap.size()>0){
//	                       //민원메세지 조회가 됬을 때
//	                       smsMap.put("RCEPT_NO",map.get("RCEPT_NO"));
//	                       smsMap.put("TELNO", CmrChargerInfo.get(i).get("TELNO"));     //고객담당자 연락처
//	                       smsMap.put("SMS_EMPNO", CmrChargerInfo.get(i).get("EMPNO")); //고객담당자
//	                       smsMap.put("SMS_EMPNM", CmrChargerInfo.get(i).get("EMPNM")); //고객담당자명
//	                       
//	                       smsMap.put("MXTR_WRD1",map.get("CVPL_NO"));
//	                       smsMap.put("MXTR_WRD2",map.get("CHRG_DEPT_NM"));
//	                       
//	                       baseDao.list("CUS020101DAO.returnMesseageProcedure", smsMap);
////	                       try {
////	                           sendMsg(map, 1, smsMap);
////	                       } catch (Exception e) {
////	                           // TODO Auto-generated catch block
////	                           e.printStackTrace();
////	                       }
//	                   }
//	               }
	           }
	       }
	       return iRow;
	   }
	 
	 /**
		 * 부서별 접수반려 처리 .
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return int
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes"})
		
		public int returnCVPLU(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			int iRow = 0;
			
			DataSetMap list = (DataSetMap) inDataset.get("input03");
			
			int listSize = (list == null) ? 0 : list.size();
			
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);
				baseDao.insert("CUS020101DAO.returnCVPLC", map);
				baseDao.update("CUS020101DAO.returnCVPLU", map);
			}
			return iRow;
			
		}

	    /**
	     * 메신저발송
	     * @param inMap
	     * @throws Exception
	     */
//	    @SuppressWarnings({ "rawtypes", "unchecked"})
//	    public void sendMsg(Map inMap, int returnAT, Map cnMap) throws Exception{
//	        Map inputMap = inMap;
//	        Map smsCnMap = cnMap;
//	        Map msgSendMap = new HashMap<String, String>();
//	        
//            String msgCn = cnMap.get("MSSAGE_CN").toString();
//            String msgCnResult;                                        //최종 메세지내용
//            
//	        if(returnAT == 0){
//	            SimpleDateFormat dateFormat = new SimpleDateFormat ("yyyy.MM.dd");
//	            msgCnResult = msgCn.replaceFirst("%CHANGEWORD%",       dateFormat.format(smsCnMap.get("MXTR_WRD1")));
//	            msgCnResult = msgCnResult.replaceFirst("%CHANGEWORD%", smsCnMap.get("MXTR_WRD2").toString());
//                msgCnResult = msgCnResult.replaceFirst("%CHANGEWORD%", smsCnMap.get("MXTR_WRD3").toString());
//                if("1".equals(inputMap.get("MAIN_HELP_SE"))){
//                    //주무부서
//                    msgSendMap.put( "SENDER_USER_ID", inputMap.get("CHARGER_EMPNO"));        // 발신자사번
//                    msgSendMap.put( "SENDER_USER_NM", inputMap.get("CHARGER_NM"));           // 발신자명
//                    msgSendMap.put( "RCVER_USER_ID",  inputMap.get("APPN_CHARGER"));         // 수신자사번
//                }else{
//                    msgSendMap.put( "SENDER_USER_ID", inputMap.get("HELP_CHARGER_EMPNO"));   // 발신자사번
//                    msgSendMap.put( "SENDER_USER_NM", inputMap.get("HELP_CHARGER_NM"));      // 발신자명
//                    msgSendMap.put( "RCVER_USER_ID",  inputMap.get("HELP_APPN_CHARGER"));    // 수신자사번
//                }
//                msgSendMap.put( "NTCN_SJ",        "민원 담당자로 지정되셨습니다.");      // 제목
//            
//	        }else{ //반려건
//                msgCnResult = msgCn.replaceFirst("%CHANGEWORD%",       smsCnMap.get("MXTR_WRD1").toString());
//                msgCnResult = msgCnResult.replaceFirst("%CHANGEWORD%", smsCnMap.get("MXTR_WRD2").toString());
//                if("1".equals(inputMap.get("MAIN_HELP_SE"))){
//                    //주무부서
//                    msgSendMap.put( "SENDER_USER_ID", inputMap.get("CHARGER_EMPNO"));        // 발신자사번
//                    msgSendMap.put( "SENDER_USER_NM", inputMap.get("CHARGER_NM"));           // 발신자명
//                }else{
//                    msgSendMap.put( "SENDER_USER_ID", inputMap.get("HELP_CHARGER_EMPNO"));   // 발신자사번
//                    msgSendMap.put( "SENDER_USER_NM", inputMap.get("HELP_CHARGER_NM"));      // 발신자명
//                }
//                msgSendMap.put( "RCVER_USER_ID", smsCnMap.get("SMS_EMPNO"));         // 수신자사번
//                msgSendMap.put( "NTCN_SJ",       smsCnMap.get("MXTR_WRD2").toString()+"에서 고객민원을 반려하였습니다.");        // 제목
//	        }
//
//            msgSendMap.put( "LINK_ADRES",     "");                                         // 링크주소
//            msgSendMap.put( "NTCN_CN",        msgCnResult);                                // 내용
//	        String ntcnUrl = "";
//
//	        // 알림저장
//	        baseDao.insert("SYM110100DAO.NtcnSndngC",msgSendMap); 
//	        
//	        //메세지정보
//	        String message1 = (String)baseDao.select("MIS000000DAO.msgEmpno", msgSendMap);
//	        String message2 = (String)msgSendMap.get("SENDER_USER_NM");
//	        String message3 = (String)msgSendMap.get("NTCN_CN");
//	        String message4 = (String)msgSendMap.get("LINK_ADRES");
//	        String message5 = (String)msgSendMap.get("NTCN_SJ");
//	                
//	        
//	        ntcnUrl = ntcnUrl + "?message1=" + message1;
//	        ntcnUrl = ntcnUrl + "&message2=" + StringUtil.encodeToUtf8(message2);
//	        ntcnUrl = ntcnUrl + "&message3=" + StringUtil.encodeToUtf8(message3);
//	        ntcnUrl = ntcnUrl + "&message4=" + message4;
//	        ntcnUrl = ntcnUrl + "&message5=" + StringUtil.encodeToUtf8(message5);
//	        
//	        /*
//	        http://포털IP/AtMessengerCommunicator.do?message1=사번&message2=보내는사람이름&message3=알리미내용&message4=링크주소&message5=알람창일뜰때제목
//	        * */
//	        
//	        String apiUrl = "http://192.168.10.222/AtMessengerCommunicator.do"+ntcnUrl;     // 포털주소 입력
//	        //System.out.println("messangerUrl :" + apiUrl);
//
//	        try {
//	            InputStream in = new URL(apiUrl).openConnection().getInputStream();
//	            if(in != null){
//	                in.close();
//	            }
//	        }
//	        catch(Exception e)  {/*문자발송 후 오류무시*/}
//	        
//	    }
}
