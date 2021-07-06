package hsco.job.mis.cus;

import java.io.InputStream;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.dao.BatchDao;
import hsco.cmm.util.StringUtil;

public class CUSJOB0001 implements Job {

	protected Logger logger = LoggerFactory.getLogger(this.getClass());
    public void setParamtr(String paramtr){
    }
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		String jobName = context.getJobDetail().getKey().getName();
    	String jobClass = context.getJobDetail().getJobClass().getName();
    	logger.debug("##### job[{}] {}.execute() started!", jobName, jobClass);

    	BatchDao batchDao = (BatchDao)context.getJobDetail().getJobDataMap().get("batchDao");
    	
    	for(int i=1; i <=2; i++){

            List <Map> CmrChargerInfo = (List<Map>) batchDao.list("CUSJOB0001.selectCmrCharger");
            Map cntMap = (Map) batchDao.select("CUSJOB0001.cntUnprocess", i);
            for(int j = 0; j < CmrChargerInfo.size(); j++){
                //고객담당자 수를 먼저 확인하고 고객담당자의 수만큼 반복
                if("0".equals(cntMap.get("CNT").toString())){
                    continue;
                }
                
                Map msgInfoInput = new HashMap<String, String>();
                
                msgInfoInput.put( "SENDER_USER_ID", "SYSTEM"); // 발신자사번
                msgInfoInput.put( "SENDER_USER_NM", "SYSTEM"); // 발신자명
                
                String ntcnSe;
                if(i==1){
                    ntcnSe = "고객칭찬관리";
                }else{
                    ntcnSe = "고객제안관리";
                }
                msgInfoInput.put( "NTCN_SJ",        "["+ntcnSe+"]신규건 알림");    // 제목
                msgInfoInput.put( "LINK_ADRES",     "");                           // 링크주소
                
                String msgCnResult;
                msgCnResult = "신규 "+ntcnSe+"건이 "+cntMap.get("CNT")+"건 있습니다.\r\n";
                msgCnResult = msgCnResult+"현재 처리구분이 지정되지 않은 건은 "+cntMap.get("UNPROCESS_CNT")+"건 있습니다.\r\n";
                
                msgInfoInput.put( "NTCN_CN",        msgCnResult);                                       // 내용
                msgInfoInput.put( "RCVER_USER_ID",  CmrChargerInfo.get(j).get("EMPNO").toString());     // 수신자사번
                msgInfoInput.put( "RCVER_USER_NM",  CmrChargerInfo.get(j).get("EMPNM").toString());     // 수신자성명
                
                
                // 알림저장
                //batchDao.insert("CUSJOB0001.NtcnSndngC",msgInfoInput); 
                
                //메세지정보
                String message1 = (String)batchDao.select("CUSJOB0001.msgEmpno", msgInfoInput);
                String message2 = (String)msgInfoInput.get("SENDER_USER_NM");
                String message3 = (String)msgInfoInput.get("NTCN_CN");
                String message4 = (String)msgInfoInput.get("LINK_ADRES");
                String message5 = (String)msgInfoInput.get("NTCN_SJ");
                        
                String ntcnUrl = "";
                
                ntcnUrl = ntcnUrl + "?message1=" + message1;
                ntcnUrl = ntcnUrl + "&message2=" + StringUtil.encodeToUtf8(message2);
                ntcnUrl = ntcnUrl + "&message3=" + StringUtil.encodeToUtf8(message3);
                ntcnUrl = ntcnUrl + "&message4=" + message4;
                ntcnUrl = ntcnUrl + "&message5=" + StringUtil.encodeToUtf8(message5);
                

                String apiUrl = "http://192.168.10.222/AtMessengerCommunicator.do"+ntcnUrl;     // 포털주소 입력
                //System.out.println("messangerUrl :" + apiUrl);

                InputStream in = null;
                
                try {
                    in = new URL(apiUrl).openConnection().getInputStream();
                    if(in != null){
                        in.close();
                    }
                }
                catch(Exception e)  {/*문자발송 후 오류무시*/}
    	}
    }
		context.setResult(0);
		logger.debug("##### job[{}] {}.execute() finished! ", jobName, jobClass);		
	}
	
}
