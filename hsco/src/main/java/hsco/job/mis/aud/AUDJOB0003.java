package hsco.job.mis.aud;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.net.URL;
import java.util.List;
import java.util.Map;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.dao.BatchDao;
import hsco.cmm.util.StringUtil;

public class AUDJOB0003 implements Job {

	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@SuppressWarnings("unchecked")
	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		String jobName = context.getJobDetail().getKey().getName();
    	String jobClass = context.getJobDetail().getJobClass().getName();
    	logger.debug("##### job[{}] {}.execute() started!", jobName, jobClass);

    	BatchDao batchDao = (BatchDao)context.getJobDetail().getJobDataMap().get("batchDao");
    	
    	// 온라인신고건수 조회
		Map<String,Object> cntMap = (Map<String, Object>) batchDao.select("AUDJOB0003.selectCnt");
		if(cntMap != null) {
			
			int cnt1 = ((BigDecimal)cntMap.get("CNT1")).intValue();
			int cnt2 = ((BigDecimal)cntMap.get("CNT2")).intValue();
			int cnt3 = ((BigDecimal)cntMap.get("CNT3")).intValue();
			int cnt4 = ((BigDecimal)cntMap.get("CNT4")).intValue();
			if(cnt1 > 0 || cnt2 > 0 || cnt3 > 0 || cnt4 > 0) {
				// 발송대상 목록
				List<Map<String,Object>> list = (List<Map<String, Object>>) batchDao.list("AUDJOB0003.trgetEmpList");
				for(Map<String,Object> map : list) {
					
					StringBuffer sb = new StringBuffer();
					sb.append("http://192.168.10.222/AtMessengerCommunicator.do");
					if(map.containsKey("EMPNO")){
					    String msgEmpno = (String) batchDao.select("AUDJOB0003.msgEmpno", map);
					    String msgCn = "신규 온라인신고접수건이 다음과 같이 있습니다.\r\n\r\n";
					    if(cnt1 > 0){
					        msgCn += "부조리 신고 "+cnt1+"건\r\n";
					    }
                        if(cnt2 > 0){
                            msgCn += "불법하도급 신고 "+cnt2+"건\r\n";
                        }
                        if(cnt3 > 0){
                            msgCn += "공익 신고 "+cnt3+"건\r\n";
                        }
                        if(cnt4 > 0){
                            msgCn += "예산낭비 신고 "+cnt4+"건\r\n";
                        }
                        msgCn += "\r\n접수바랍니다.";
    					sb.append("?message1="+ msgEmpno);
    					sb.append("&message2="+StringUtil.encodeToUtf8("시스템"));
    					sb.append("&message3="+StringUtil.encodeToUtf8(msgCn));
    					sb.append("&message5="+StringUtil.encodeToUtf8("온라인신고접수 신규건 알림"));
    			        logger.debug("messangerUrl :" + sb.toString());
    					
    			        InputStream in = null;
    			        
    			        try {
    						URL url = new URL(sb.toString());
    						in = url.openStream();
    					} catch (Exception e) {
    						logger.error("메세지 발송 실패 ", e);
    					} finally {
    						if(in != null) {
    							try {
    								in.close();
    							} catch (IOException e) {
    								logger.error("메세지 발송 실패 ", e);
    							}
    						}
    					}
    				}
					
				}
			}
		}
		
		context.setResult(0);
		logger.debug("##### job[{}] {}.execute() finished! ", jobName, jobClass);		
	}
	
}
