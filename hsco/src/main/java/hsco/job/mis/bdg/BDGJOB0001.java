package hsco.job.mis.bdg;

import hsco.cmm.dao.BatchDao;
import hsco.cmm.util.BatchJobUtil;

import java.util.Map;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BDGJOB0001 implements Job {

	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	
	// 배치 등록 시 파라미터 
    private String paramtr;
    
    /**
     * 배치 파라미터를 설정한다.
     * @param paramtr
     */
    public void setParamtr(String paramtr){
        this.paramtr = paramtr;
    }
	
	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		
		String jobName = context.getJobDetail().getKey().getName();
    	String jobClass = context.getJobDetail().getJobClass().getName();
    	logger.debug("##### job[{}] {}.execute() started!", jobName, jobClass);
    	
    	// 파라메터설정
    	Map<String, Object> map = null;
    	if (this.paramtr != null) {
    		map = BatchJobUtil.parseParameter(this.paramtr);
    	}

    	BatchDao batchDao = (BatchDao)context.getJobDetail().getJobDataMap().get("batchDao");
    	
    	// 메시지 전송
        int updateCnt = batchDao.update("BDGJOB0001.blceCyfd", map);
		
    	System.out.println("[BDGJOB0001 잔액이월 결과]" + updateCnt + "건의 데이터가 업데이트 되었습니다.");
  
        context.setResult(0); // Job 정상처리 상태(0) 반드시 넣어주세요.  논리적인 메시지는 if 문으로 분기하고, 텍스트를 설정하세요.
        
        System.out.println("##### Job BDGJOB0001[{}] {}.execute() finished! " + jobName + "  :  " + jobClass);
    	
	}
	
}
