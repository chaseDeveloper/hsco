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

public class AUDJOB0001 implements Job {

	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	
    public void setParamtr(String paramtr){
    }
	
	@SuppressWarnings("unchecked")
	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		String jobName = context.getJobDetail().getKey().getName();
    	String jobClass = context.getJobDetail().getJobClass().getName();
    	logger.debug("##### job[{}] {}.execute() started!", jobName, jobClass);

    	BatchDao batchDao = (BatchDao)context.getJobDetail().getJobDataMap().get("batchDao");
    	
    	// 출장, 근태, 휴가 중복사례 조회
		Map<String,Object> dupMap = (Map<String, Object>) batchDao.select("AUDJOB0001.dupCnt");
		if(dupMap != null) {
			
			int cnt = ((BigDecimal)dupMap.get("CNT")).intValue();
			if(cnt > 0) {
				// 발송대상 목록
				List<Map<String,Object>> list = (List<Map<String, Object>>) batchDao.list("AUDJOB0001.trgetEmpList");
				for(Map<String,Object> map : list) {
					
					StringBuffer sb = new StringBuffer();
					sb.append("http://192.168.10.222/AtMessengerCommunicator.do");
					if(map.containsKey("EMPNO")){
					    String msgEmpno = (String) batchDao.select("AUDJOB0001.msgEmpno", map);
    					sb.append("?message1="+ msgEmpno);
    					sb.append("&message2="+StringUtil.encodeToUtf8("시스템"));
    					sb.append("&message3="+StringUtil.encodeToUtf8((String)dupMap.get("MSG")));
    					sb.append("&message5="+StringUtil.encodeToUtf8("출장, 근태, 휴가 중복사례 알림"));
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
