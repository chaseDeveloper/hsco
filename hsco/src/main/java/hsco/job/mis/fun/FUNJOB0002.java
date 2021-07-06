package hsco.job.mis.fun;

import java.io.InputStream;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Calendar;
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

public class FUNJOB0002 implements Job {

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
    	
    	for(int i=0; i < 2; i++){

            List <Map> funCharger = (List <Map>) batchDao.list("FUNJOB0002.selectFunCharger");
            List <Map> ntcnList;
            if(i==0){
                ntcnList = (List <Map>) batchDao.list("FUNJOB0002.cntExpRtnBeffat");
            }else{
                ntcnList = (List <Map>) batchDao.list("FUNJOB0002.cntExpRtnToday");
            }
            for(int j = 0; j < funCharger.size(); j++){
                //자산담당자 수를 먼저 확인하고 고객담당자의 수만큼 반복
                if(ntcnList.size()<1){
                    //데이터가 없으면 실행하지 않음
                    continue;
                }
                
                Map msgInfoInput = new HashMap<String, String>();
                
                msgInfoInput.put( "SENDER_USER_ID", "SYSTEM"); // 발신자사번
                msgInfoInput.put( "SENDER_USER_NM", "SYSTEM"); // 발신자명
                
                String ntcnSe;
                if(i==0){
                    Calendar cCal = Calendar.getInstance();
                    cCal.add(Calendar.DATE, 3);
                    SimpleDateFormat dateFormat = new SimpleDateFormat ("yyyy.MM.dd");
                    ntcnSe = dateFormat.format(cCal.getTime());
                }else{
                    ntcnSe = "당일";
                }
                msgInfoInput.put( "NTCN_SJ",        ntcnSe+" 만기예정일 예금계좌 알림");    // 제목
                msgInfoInput.put( "LINK_ADRES",     "");                           // 링크주소
                
                String msgCnResult;
                msgCnResult = ntcnSe+" 만기예정인 예금계좌가 ";
                
                Map ntcnMap = ntcnList.get(0);
                if("0".equals(ntcnMap.get("CNT").toString())){
                    continue;
                }
                msgCnResult+=ntcnMap.get("CNT");
                msgCnResult+="건 있습니다.";
                
                msgInfoInput.put( "NTCN_CN",        msgCnResult);                                   // 내용
                msgInfoInput.put( "RCVER_USER_ID",  funCharger.get(j).get("EMPNO").toString());     // 수신자사번
                msgInfoInput.put( "RCVER_USER_NM",  funCharger.get(j).get("EMPNM").toString());     // 수신자성명
                
                
                // 알림저장
                batchDao.insert("FUNJOB0002.NtcnSndngC",msgInfoInput); 
                
                //메세지정보
                String message1 = (String)batchDao.select("FUNJOB0002.msgEmpno", msgInfoInput);
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
                
                try {
                    InputStream in = new URL(apiUrl).openConnection().getInputStream();
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
