package hsco.mis.cus.CUS020103;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.support.WebApplicationContextUtils;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.mis.mis.service.MisMailSendServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CUS020103ServiceImpl.java
 * @Description  	: 민원처리결과를 관리하는 서비스 구현체 클래스
 * @author       	: 김병진
 * @since        	: 2015. 8. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 17.       김병진		      최초생성
 * </pre>  
 */
@Service("CUS020103Service")
public class CUS020103ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    @Resource(name="misMailSendService")
    MisMailSendServiceImpl mailSendService;
 
    /**
	 * 민원처리결과 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCvplPrcResltmangList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("CUS020103DAO.selectCvplPrcResltmangList", inMap);
		} else {
			records = (List<Map>)baseDao.list("CUS020103DAO.selectCvplPrcResltmangList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output01", outDsMap);
		
	}

	/**
	 * 민원처리결과를 수정 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes"})
	
	public int cvplPrcResltmangListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input02");
		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			if(map.get("INDPND_CHK").equals("1"))		//자주묻는 질문 등록 체크시
			{
				iRow += baseDao.update("CUS020103DAO.cvplPrcResltmangListU", map);
				baseDao.insert("CUS020103DAO.indpndQestnC", map);	
			}else{
				iRow += baseDao.update("CUS020103DAO.cvplPrcResltmangListU", map);
			}
			
		}
		return iRow;
		
	}
	
	/**
	 * 개인별 접수반려 처리 .
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked"})
	
	public int returnCVPLU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map<String, String> mapUserInfo = (Map<String, String>) inVar.get(NexacroConstant.SESSION_USER_MAP_NAME);
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input03");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			baseDao.insert("CUS020103DAO.returnCVPLC", map);
			baseDao.update("CUS020103DAO.returnCVPLU", map);
			
			/*반려 문자메세지*/
			List <Map> CmrChargerInfo = null;
			//부서담당자 정보
            CmrChargerInfo = (List<Map>) baseDao.list("CUS020103DAO.selectCmrCharger", map);
            for(int i = 0; i < CmrChargerInfo.size(); i++){
            	//부서담당자 수를 먼저 확인하고 담당자의 수만큼 반복
            	Map appnVal = CmrChargerInfo.get(i);
            	
            	//담당자의 전화번호가 존재할 때
            	if(appnVal.get("TELNO") != null){
            		//문자발송 호출
					map.put("SEND_DEPT_CODE", mapUserInfo.get("DEPT_CODE"));		//발송부서코드
					map.put("ANSW_TEL", "0533500301");								//회신번호
	    	        map.put("BROAD_MSSAGE_ID", "0000000028");						//맞춤문자 ([민원]담당자민원분배안내)
	    	        map.put("CHANG_WORD1", appnVal.get("EMPNM"));					//맞춤문자1(담당자명)
	    	        map.put("CHANG_WORD2", map.get("CVPL_NO"));						//맞춤문자2(민원번호)
	    	        map.put("CHANG_WORD3", map.get("CHRG_DEPT_NM"));				//맞춤문자3(부서)
	    	        map.put("CHANG_WORD4", map.get("NM"));							//맞춤문자4(민원인)
	    	        
	    	        map.put("RECIPIENT_NUM", appnVal.get("TELNO"));					//수진자번호
	    	        map.put("RCVER_NM", appnVal.get("EMPNM"));						//수신자명
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
            
            
            
            
//            List <Map> CmrChargerInfo = null;
//            CmrChargerInfo = (List<Map>) baseDao.list("CUS020101DAO.selectCmrCharger");
//            for(int i = 0; i < CmrChargerInfo.size(); i++){
//                //고객담당자 수를 먼저 확인하고 고객담당자의 수만큼 반복
//                Map smsMap = null;
//                String sendMsgTime;
//                Map msgInfoInput = new HashMap<String, String>();
//                msgInfoInput.put("MSSAGE_ID", "MSG0000004");
//                
//                smsMap = (Map)baseDao.select("CUS020107DAO.mssageInfoR", msgInfoInput);
//                sendMsgTime = (String) baseDao.select("CUS010102DAO.selectSendTime", msgInfoInput);
//                smsMap.put("SEND_MSG_TIME", sendMsgTime);
//                if(smsMap.size()>0){
//                    //민원메세지 조회가 됬을 때
//                    smsMap.put("RCEPT_NO",map.get("RCEPT_NO"));
//                    smsMap.put("TELNO", CmrChargerInfo.get(i).get("TELNO"));     //고객담당자 연락처
//                    smsMap.put("SMS_EMPNO", CmrChargerInfo.get(i).get("EMPNO")); //고객담당자명
//                    smsMap.put("SMS_EMPNM", CmrChargerInfo.get(i).get("EMPNM")); //고객담당자명
//                    
//                    smsMap.put("MXTR_WRD1",map.get("CVPL_NO"));
//                    smsMap.put("MXTR_WRD2",map.get("CHRG_DEPT_NM"));
//                    
//                    baseDao.list("CUS020101DAO.returnMesseageProcedure", smsMap);
//                    
////                    try {
////                        sendMsg(map, smsMap);
////                    } catch (Exception e) {
////                        // TODO Auto-generated catch block
////                        e.printStackTrace();
////                    }
//                }
//            }
		}
		return iRow;
		
	}
	
    /**
     * 메신저발송
     * @param inMap
     * @throws Exception
     */
//    @SuppressWarnings({ "rawtypes", "unchecked"})
//    public void sendMsg(Map inMap, Map cnMap) throws Exception{
//        Map inputMap = inMap;
//        Map smsCnMap = cnMap;
//        Map msgSendMap = new HashMap<String, String>();
//        
//        String msgCn = cnMap.get("MSSAGE_CN").toString();
//        String msgCnResult;                                        //최종 메세지내용
//        msgCnResult = msgCn.replaceFirst("%CHANGEWORD%",       smsCnMap.get("MXTR_WRD1").toString());
//        msgCnResult = msgCnResult.replaceFirst("%CHANGEWORD%", smsCnMap.get("MXTR_WRD2").toString());
//        msgSendMap.put( "SENDER_USER_ID", inputMap.get("APPN_CHARGER"));     // 발신자사번
//        msgSendMap.put( "SENDER_USER_NM", inputMap.get("APPN_CHARGER_NM"));  // 발신자명
//        msgSendMap.put( "RCVER_USER_ID", smsCnMap.get("SMS_EMPNO"));         // 수신자사번
//        msgSendMap.put( "NTCN_SJ",       smsCnMap.get("MXTR_WRD2").toString()+"에서 고객민원을 반려하였습니다.");        // 제목
//        msgSendMap.put( "LINK_ADRES",     "");                               // 링크주소
//        msgSendMap.put( "NTCN_CN",        msgCnResult);                      // 내용
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
//        try {
//            InputStream in = new URL(apiUrl).openConnection().getInputStream();
//            if(in != null){
//                in.close();
//            }
//        }
//        catch(Exception e)  {/*문자발송 후 오류무시*/}
//        
//    }
	
	/**
     * UBIREOPORT DATASET을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void innerSanctnUbiDataset( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS020103DAO.innerSanctnUbiDataset", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS020103DAO.innerSanctnUbiDataset", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    
    /**
     * 최초내부결재진행여부체크
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectInnerSanctnMasterCheck( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS020103DAO.selectInnerSanctnMasterCheck", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS020103DAO.selectInnerSanctnMasterCheck", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    

    /**
     * 전자결재 처리완료 메소드 
     * @param (Map sanctnInfo) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void sancComp(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	Map<String, String> mapUserInfo = (Map<String, String>) inVar.get(NexacroConstant.SESSION_USER_MAP_NAME);
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        //민원메세지 정보가 조회 됐을 때
        if(inMap!=null && inMap.get("MBTLNO") != null){
	  		inMap.put("SEND_DEPT_CODE", mapUserInfo.get("DEPT_CODE"));		//발송부서코드
	  		inMap.put("ANSW_TEL", "0533500301");							//회신번호
	  		inMap.put("BROAD_MSSAGE_ID", "0000000022");					    //맞춤문자 ([민원]민원결과안내)
	  		inMap.put("CHANG_WORD1", inMap.get("CSTMR_NM"));				//맞춤문자1(고객명)
	  		inMap.put("CHANG_WORD2", inMap.get("CVPL_NO"));					//맞춤문자2(민원번호)
	  		inMap.put("CHANG_WORD3", inMap.get("CSTMR_REGIST_DT").toString().substring(0, 4) + "-" +
					  				 inMap.get("CSTMR_REGIST_DT").toString().substring(4, 6) + "-" +
					  				 inMap.get("CSTMR_REGIST_DT").toString().substring(6, 8) );			//맞춤문자3(등록일자)
	  	        
	  		inMap.put("RECIPIENT_NUM", inMap.get("MBTLNO"));				//수진자번호
	  		inMap.put("RCVER_NM", inMap.get("CSTMR_NM"));					//수신자명
	  		inMap.put("SENDER_ID", mapUserInfo.get("USER_ID"));					//발신자아이디
  	        
  		    baseDao.insert("CUS020103DAO.messeageProcedure", inMap);
  		    
  		  //민원인 정보 
    	  Map mailInfo = (Map) baseDao.select("CUS020103DAO.selectSmsInfo", inMap);	//민원인 정보
    		  
    		//메일발송
  		  if(mailInfo.get("EMAIL") != null){
  			  Map mailDs = new HashMap<String, DataSetMap>();
  			  Map mInfo =  new HashMap<String, String>();
  			  DataSetMap mailMap = new DataSetMap();
  			  mInfo = mailInfo;
      		  
  			  mailMap.add(mInfo);
  			  mailDs.put("input1", mailMap);
  			  
  			  sendMailMet(tranInfo, inVar, mailDs, outVar, outDataset);
  		  }
  	  	}
        
        inMap.put("CVPL_STTUS", "5");	//처리상태 5 : 처리완료[5/6]
        baseDao.update("CUS020103DAO.cvplSttusU", inMap);	// 민원처리상태 업데이트
    }
    
    /**
     * 내부결재 후처리 메소드 
     * @param (Map sanctnInfo) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
          log.info("postProcess called!");
          
          Map sanctnInfo = null; 
          DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");  
          List<Map> list = dsSetMap.getRowMaps();
          
          int lsize = (list == null) ? 0 : list.size();
          if(lsize > 0){
                  sanctnInfo = (Map)list.get(0);
          }
          
          String currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태

          List <Map> records;
          
          //결재번호로 CVPL_NO/RCEPT_NO 키값 찾기
          records = (List<Map>)baseDao.list("CUS020103DAO.selectExpDsnMtr", sanctnInfo);
          
          Map recordMap = null;
          
    	  int recordsize = (records == null) ? 0 : records.size();
    	  if(recordsize > 0){
    		  recordMap = (Map)records.get(0);
    	  }else{
    		  StringTokenizer st = new StringTokenizer(sanctnInfo.get("JOB_KEY").toString(),"^");
    		  if(st.hasMoreTokens()){
    			  recordMap = new HashMap<String, String>();
    			  recordMap.put("CVPL_NO", st.nextToken());    
    			  recordMap.put("RCEPT_NO", st.nextToken());   			  
    		  }
    	  }
          
          if("S01".equals(currSanctionSttus)){ // 완료시 민원인에게 SMS 알림
        	  
        	  recordMap.put("CVPL_STTUS", "5");		//민원상태 : 처리완료[5/6]
        	  
        	  Map<String, String> mapUserInfo = (Map<String, String>) inVar.get(NexacroConstant.SESSION_USER_MAP_NAME);

        	  
        	  Map smsMap = new HashMap<String, String>();
        	  Map smsInfo = (Map) baseDao.select("CUS020103DAO.selectSmsInfo", recordMap);	//민원인 정보
        	  
        	  //민원메세지 정보가 조회 됐을 때
        	  if(smsInfo!=null && smsInfo.size()>0){
        		  smsMap.put("SEND_DEPT_CODE", mapUserInfo.get("DEPT_CODE"));		//발송부서코드
        		  smsMap.put("ANSW_TEL", "0533500301");								//회신번호
					smsMap.put("BROAD_MSSAGE_ID", "0000000022");					//맞춤문자 ([민원]민원결과안내)
	    	        smsMap.put("CHANG_WORD1", smsInfo.get("CSTMR_NM"));				//맞춤문자1(고객명)
	    	        smsMap.put("CHANG_WORD2", smsInfo.get("CVPL_NO"));					//맞춤문자2(민원번호)
	    	        smsMap.put("CHANG_WORD3", smsInfo.get("CSTMR_REGIST_DT"));				//맞춤문자3(등록일자)
	    	        smsMap.put("RECIPIENT_NUM", smsInfo.get("MBTLNO"));					//수진자번호
	    	        smsMap.put("RCVER_NM", smsInfo.get("CSTMR_NM"));				//수신자명
	    	        smsMap.put("SENDER_ID", smsInfo.get("EMPNO"));						//발신자아이디
	    	        
        		  baseDao.insert("CUS020103DAO.messeageProcedure", smsMap);
        		  
        		  //메일발송 
        		  if(smsInfo.get("EMAIL") != null){
        			  Map mailDs = new HashMap<String, DataSetMap>();
        			  Map mInfo =  new HashMap<String, String>();
        			  DataSetMap mailMap = new DataSetMap();
	        		  
        			  mInfo = smsInfo;
        			  mailMap.add(mInfo);
        			  mailDs.put("input1", mailMap);
        			  
        			  sendMailMet(tranInfo, inVar, mailDs, outVar, outDataset);
        		  }
        	  }
              /*민원처리결과 MSG0000006 문자메세지*/
              
//              String sendMsgTime;
//              
//              Map msgInfoInput = new HashMap<String, String>();
//              msgInfoInput.put("MSSAGE_ID", "MSG0000006");
//              
//              Map smsMap  = (Map) baseDao.select("CUS020107DAO.mssageInfoR", msgInfoInput);
//              Map smsInfo = (Map) baseDao.select("CUS020103DAO.selectSmsInfo", recordMap);
//              
//              sendMsgTime = (String) baseDao.select("CUS010102DAO.selectSendTime", msgInfoInput);
//              smsMap.put("SEND_MSG_TIME", sendMsgTime);
//              
//              if(smsInfo!=null && smsInfo.size()>0){
//                  //민원메세지 정보가 조회 됬을 때
//                  
//                  smsMap.put("TELNO", smsInfo.get("MBTLNO"));       //민원인휴대폰
//                  smsMap.put("SMS_EMPNO", smsInfo.get("CSTMR_NM")); //민원인명
//                  
//                  smsMap.put("MXTR_WRD1",smsInfo.get("CSTMR_REGIST_DT"));
//                  smsMap.put("MXTR_WRD2",recordMap.get("CVPL_NO"));
//                  
//                  baseDao.list("CUS020103DAO.messeageProcedure", smsMap);
//              }
              
          }else if("S02".equals(currSanctionSttus) || "T05".equals(currSanctionSttus) || "T07".equals(currSanctionSttus) || "T11".equals(currSanctionSttus) || "T15".equals(currSanctionSttus)) {
        	  recordMap.put("CVPL_STTUS", "4");
          }else if("S08".equals(currSanctionSttus) || "S09".equals(currSanctionSttus)){
        	  recordMap.put("CVPL_STTUS", "3");
          }else {
        	  recordMap.put("CVPL_STTUS", "5");
          }          
    	  
    	  baseDao.update("CUS020103DAO.cvplSttusU", recordMap);	// 민원처리상태 업데이트
        
          log.info("hsco.mis.cus.CUS020103.CUS020103ServiceImpl.postProcess processed!");

	}
    
    /**
     * 내부결재 후처리 메소드 
     * @param (Map sanctnInfo) 
     * @return void
     * @throws NexaServiceException
     */
  //내부결재 완료 (LAST_SANCTN_STTUS : S01)
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void postProcess_S01_bak(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
		log.info("postProcess_S01!");
		
		
		System.out.println("== 민원 내부결재 후처리 =postProcess_S01===============>");
		
		Map<String, String> sanctnInfo = null;
		DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");
		
		if(dsSetMap != null) sanctnInfo	= (HashMap<String, String>)dsSetMap.get(0);
		
		String INNER_SANCTN_ID		= sanctnInfo.get("INNER_SANCTN_ID");		//내부결재ID
		String INNER_SANCTN_MDL_ID	= sanctnInfo.get("INNER_SANCTN_MDL_ID");	//내부결재모형ID
		//String INNER_SANCTN_MDL_NM	= sanctnInfo.get("INNER_SANCTN_MDL_NM");	//결재모형명칭
		//String SYS_SE_CODE			= sanctnInfo.get("SYS_SE_CODE");			//시스템구분코드
		//String JOB_SE				= sanctnInfo.get("JOB_SE");					//업무구분
		String JOB_KEY				= sanctnInfo.get("JOB_KEY");				//업무KEY
		//String USER_ID				= sanctnInfo.get("USER_ID");				//상신자ID
		String LAST_SANCTN_STTUS	= sanctnInfo.get("LAST_SANCTN_STTUS");		//최종결재상태
		//String LAST_SANCTNER_ID		= sanctnInfo.get("LAST_SANCTNER_ID");		//최종결재자ID
		
		System.out.println("== 민원 내부결재 후처리 =postProcess_S01=INNER_SANCTN_MDL_ID==============>" + INNER_SANCTN_MDL_ID);
		System.out.println("== 민원 내부결재 후처리 =postProcess_S01=INNER_SANCTN_ID==============>" + INNER_SANCTN_ID);
		System.out.println("== 민원 내부결재 후처리 =postProcess_S01=LAST_SANCTN_STTUS==============>" + LAST_SANCTN_STTUS);
		
		StringTokenizer token = new StringTokenizer(JOB_KEY,"^");   
		if(token.hasMoreTokens()) sanctnInfo.put("RCEPT_NO", token.nextToken());
		if(token.hasMoreTokens()) sanctnInfo.put("CVPL_NO", token.nextToken());

        /*민원처리결과 MSG0000006 문자메세지*/
        
        String sendMsgTime;
        
        Map msgInfoInput = new HashMap<String, String>();
        msgInfoInput.put("MSSAGE_ID", "MSG0000006");
        
        Map smsMap  = (Map) baseDao.select("CUS020107DAO.mssageInfoR", msgInfoInput);
        Map smsInfo = (Map) baseDao.select("CUS020103DAO.selectSmsInfo", sanctnInfo);
        
        sendMsgTime = (String) baseDao.select("CUS010102DAO.selectSendTime", msgInfoInput);
        smsMap.put("SEND_MSG_TIME", sendMsgTime);
        
        if(smsInfo.size()>0){
            //민원메세지 정보가 조회 됬을 때
            
            smsMap.put("TELNO", smsInfo.get("MBTLNO"));       //민원인휴대폰
            smsMap.put("SMS_EMPNO", smsInfo.get("CSTMR_NM")); //민원인명
            
            smsMap.put("MXTR_WRD1",smsInfo.get("CSTMR_REGIST_DT"));
            smsMap.put("MXTR_WRD2",sanctnInfo.get("CVPL_NO"));
            
            //baseDao.list("CUS020103DAO.messeageProcedure", smsMap);
        }
        
        sanctnInfo.put("CVPL_STTUS", "5");
		baseDao.update("CUS020103DAO.cvplSttusU", sanctnInfo);	// 민원처리상태 업데이트
		
		log.info("hsco.mis.cus.CUS020103.CUS020103ServiceImpl.postProcess processed!");
	}
    
    @SuppressWarnings("rawtypes")
	public void sendMailMet( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
    	
        String sendMailTitle = "화성도시공사 메일링 서비스";
		String sendMailSubject = "[화성도시공사] 민원처리결과 알림";
		String sendMailContent = "[화성도시공사] 민원처리결과 <br/>"+
				  inMap.get("CSTMR_NM") + " 고객님께서 "+
				  inMap.get("CSTMR_REGIST_DT") +
					    	      "신청하신 민원(번호: "+(String)inMap.get("CVPL_NO")+")에 대한 답변이 등록되었습니다. <br/><br/><br/>" +
					    	      "민원 번호 : " + (String)inMap.get("CVPL_NO")+"<br/>"+
					    	      "민원 신청일 : " + inMap.get("CSTMR_REGIST_DT") + "<br/>" +
								  "처리결과 : " + inMap.get("PROCESS_CN") + "<br/><br/><br/><br/>" +
								  "첨부파일을 열수 없는경우에는 화성도시공사 홈페이지(<a href=\"http://www.hsco.or.kr\" target=\"_blank\">http://www.hsco.or.kr</a>)를 이용하여 주십시오.<br/>" + 
								  "- 홈페이지에서 답변을 확인하신 후에 만족도 평가를 해 주십시오.<br/>" +
								  "* 고객님께서 평가하신 소중한 자료는 담당직원 평가 및 서비스 재고를 위한 기초자료로 활용됩니다";
		  
		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		HttpServletRequest request = attr.getRequest();  
		WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(request.getServletContext());				
		MisMailSendServiceImpl bean = (MisMailSendServiceImpl)context.getBean("misMailSendService");		  
		  
    	String result = (String)bean.sendMail(
				  (String)inMap.get("EMAIL")  			//수신자메일주소(필수) 
				  , (String)inMap.get("CSTMR_NM")			//수신자명(필수)
				  , (String)inMap.get("SEND_EMAIL")		//송신자메일주소(필수)
				  , (String)inMap.get("SEND_NAME")		//송신자명(필수)
				  , sendMailSubject							//메일 제목(필수)
				  , "defaultMailContents"
				  , new String[] {sendMailTitle, sendMailSubject, sendMailContent.replaceAll("\n", "<BR/>")}
				  , (String)inMap.get("FILE_SN"));
    
    	inMap.put("SUBJECT", sendMailSubject);		
    	inMap.put("CONTENTS", sendMailContent);		
    	inMap.put("RECEIVE_NM", " ");		//민원인 ID 없어서 공란
    	inMap.put("RECV_NM", inMap.get("CSTMR_NM"));		
    	inMap.put("RECV_EMAIL", inMap.get("EMAIL"));
    	
    	
    	if(result != null) 
    		inMap.put("RSLT_EMAIL", "오류"); 
    	else
    		inMap.put("RSLT_EMAIL", "정상");
     	inMap.put("ATCHMNFL_SN", inMap.get("FILE_SN"));
     	
     	BaseDao bean2 = (BaseDao)context.getBean("BaseDao");
     	
     	bean2.insert("UmsDAO.EmailsendCUD",inMap);//이메일 전송내역 저장

		  if(result != null) {
			  throw new NexaServiceException("fail.정보등록.실패", "메일발송을 실패하였습니다. " + result);
		  }
    }
    
    @SuppressWarnings("rawtypes")
	public void sendMail_bak( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        
        Map emailMap = (Map) baseDao.select("CUS020103DAO.emailReceiver", inMap);
        if(emailMap != null) {
      	// 메일발송
      	String[] strCntn = new String[5];
        	strCntn[0] = (String)emailMap.get("CVPL_NO");				// 민원번호
    		strCntn[1] = (String)emailMap.get("RECEIVE_NM");			// 민원인 성명
    		strCntn[2] = (String)emailMap.get("CSTMR_REGIST_DE");		// 민원신청일자
    		strCntn[3] = (String)emailMap.get("SEND_NAME");				// 처리자
    		strCntn[4] = ((String)emailMap.get("PROCESS_CN")).replaceAll("\n", "<BR/>");		// 처리결과
      	  
      	//String sendMailTitle	= messageSource.getMessage("minwonResultMailSubject", new String[] {(String)emailMap.get("CVPL_NO")}, Locale.getDefault());
    		String sendMailTitle	= "[화성도시공사] 고객님께서 신청하신 민원(번호: "+(String)emailMap.get("CVPL_NO")+")에 대한 답변이 등록되었습니다.";
    		String errMsg = mailSendService.sendMail(
    						   (String)emailMap.get("RECEIVE_EMAIL") 
    						   , (String)emailMap.get("RECEIVE_NM")
    						   , (String)emailMap.get("SEND_EMAIL")
    						   , (String)emailMap.get("SEND_NAME")
    						   , sendMailTitle
    						   , "minwonResultMailContents"
    						   , strCntn
    						   , (String)emailMap.get("FILE_SN"));
    		
    		if(errMsg != null) {
				throw new NexaServiceException("fail.정보등록.실패", "메일발송을 실패하였습니다. " + errMsg);
			}
        }
        
    }
    

    /**
     * 전자결재번호 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */ 
    @SuppressWarnings({ "rawtypes" })
    public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        if(list!=null){
            Map map = list.get(0);
            
            //오프라인민원 접수
            if("1".equals(map.get("RCEPT_SANC_AT"))){
                baseDao.update("CUS020103DAO.receptApproveU", map);
            }
            //오프라인민원 처리결과
            else{
                baseDao.update("CUS020103DAO.approveU", map);
            }
            
            DataSetMap outDsMap = new DataSetMap();
            outDsMap.add(map);
            outDataset.put("output1", outDsMap);
        }
    }
    


    /**
     * 전자결재완료문서  조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void viewSanction( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records = new ArrayList<Map>();
        List <Map> records2;

        if (inMap != null){
            
            records2 = (List<Map>)baseDao.list("CUS020103DAO.viewSanction", inMap);

            if(records2 != null && records2.size() > 0){
                Map outMap = records2.get(0);
                String param1 = (String)outMap.get("DUCOS_USER_ID");
                String param2 = (String)outMap.get("APPRID");
                String param3 = (String)outMap.get("ORGDRAFTERDEPTID");
                //String esHost = super.getESanctionUrl();
                //String esUrl = esHost + "sso/loginFromDuco.jsp?EMPID=";
                String esUrl = "http://192.168.10.229/sso/loginFromDuco.jsp?EMPID=";
                esUrl += param1 + "&APPRIDLIST=" + param2 + "&APPRDEPTID=" + param3;
                Map outMap2 = new HashMap<String, String>();
                outMap2.put("ES_URL", esUrl);
                records.add(outMap2);
            }
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
     }
    
        
    /**
     * 내부결재번호 업데이트
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */ 
    @SuppressWarnings({ "rawtypes" })
    public int innerSanctU( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        int iRow = 0;
        if(list!=null){
            Map map = list.get(0);
          
            iRow = baseDao.update("CUS020103DAO.innerSanctU", map);
        }
        
        return iRow;
    }

    /**
     * 문자 / 메일 발송 후 처리상태 업데이트
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */ 
    @SuppressWarnings({ "rawtypes" })
    public int cvplSttusU( DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {       
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
    	int iRow = 0;
    	if(list!=null){
    		Map map = list.get(0);
    		
    		iRow = baseDao.update("CUS020103DAO.cvplSttusU2", map);
    	}
    	
    	return iRow;
    }

    /**
     * 민원 접수 처리
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */ 
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public int rceptProcU( DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {       
    	DataSetMap list = (DataSetMap) inDataset.get("input1");
    	Map<String, String> smsInfo = new HashMap<String, String>();
    	Map<String, String> mapUserInfo = (Map<String, String>) inVar.get(NexacroConstant.SESSION_USER_MAP_NAME);
    	int iRow = 0;
    	if(list!=null){
    		Map map = list.get(0);
    		
    		iRow = baseDao.update("CUS020103DAO.rceptProcU", map);	//cvplU 홈페이지 고객민원 접수일자 업데이트
    		iRow += baseDao.update("CUS020103DAO.appndtProcU", map);	//cvplU 홈페이지 민원분배 지정일시 계산

    		//고객 문자 발송
    		
    		//민원메세지 정보가 조회 됐을 때
	      	  if(map!=null && map.get("MBTLNO") != null){
	      		  smsInfo.put("SEND_DEPT_CODE", mapUserInfo.get("DEPT_CODE"));		//발송부서코드
	      		  smsInfo.put("ANSW_TEL", "0533500301");							//회신번호
	      		  smsInfo.put("BROAD_MSSAGE_ID", "0000000036");						//맞춤문자 (CUS009 : [민원]민원접수안내)
	      		  smsInfo.put("CHANG_WORD1", map.get("CSTMR_NM").toString());		//맞춤문자1(고객명)
	      		  smsInfo.put("CHANG_WORD2", map.get("CVPL_NO").toString());		//맞춤문자2(민원번호)
		    	        
	      		  smsInfo.put("RECIPIENT_NUM", map.get("MBTLNO").toString());		//수진자번호
	      		  smsInfo.put("RCVER_NM", map.get("CSTMR_NM").toString());			//수신자명
	      		  smsInfo.put("SENDER_ID", mapUserInfo.get("USER_ID"));				//발신자아이디
		    	        
	      		  baseDao.insert("CUS020103DAO.messeageProcedure", smsInfo);
	      	  }
    	}
    	return iRow;
    }
}
