package hsco.job.eis.eis.EISJOB0103;

import java.util.HashMap;
import java.util.Map;


import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.dao.BatchDao;
import hsco.cmm.util.BatchJobUtil;

public class EISJOB0103Job implements Job {
	
	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	
    
    private String paramtr;
    
    public void setParamtr(String paramtr){
        this.paramtr = paramtr;
    }
    
	@Override
	public void execute(JobExecutionContext context)
			throws JobExecutionException {
		
		String jobName = context.getJobDetail().getKey().getName();
    	String jobClass = context.getJobDetail().getJobClass().getName();
    	logger.debug("##### job[{}] {}.execute() started!", jobName, jobClass);
    	BatchDao batchDao = (BatchDao)context.getJobDetail().getJobDataMap().get("batchDao");
    	
		Map<String, Object> paramMap = BatchJobUtil.parseParameter(this.paramtr);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("IN_INSERT_ID", (String)paramMap.get("IN_INSERT_ID"));
		map.put("OUT_RESULT_CD", "");
		map.put("OUT_RESULT_MSG", "");
    	batchDao.insert("EIS001BATDAO.SP_EIS_GET_CASHFLOWSHEET", paramMap);
		context.setResult(0);
		
		logger.debug("##### job[{}] {}.execute() finished! ", jobName, jobClass);
		
	}
	
}