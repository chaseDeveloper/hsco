package hsco.job.mis.hrm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.dao.BatchDao;
import hsco.cmm.dao.BioStarDao;
import hsco.cmm.util.DateUtil;

public class HRMJOB0002 implements Job {

	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	
	// 배치 등록 시 파라미터 
    @SuppressWarnings("unused")
	private String paramtr;
    
    /**
     * 배치 파라미터를 설정한다.
     * @param paramtr
     */
    public void setParamtr(String paramtr){
        this.paramtr = paramtr;
    }
    
	@SuppressWarnings({"unchecked"})
	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		String jobName = context.getJobDetail().getKey().getName();
    	String jobClass = context.getJobDetail().getJobClass().getName();
    	logger.debug("##### job[{}] {}.execute() started!", jobName, jobClass);
    	
        BatchDao batchDao     = (BatchDao)context.getJobDetail().getJobDataMap().get("batchDao"); 	
    	BioStarDao bioStarDao = (BioStarDao)context.getJobDetail().getJobDataMap().get("bioStarDao");
    	
    	System.out.println("근태기내역 삭제");
    	
    	SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd", java.util.Locale.KOREA);
    	Map<String, Object> pramMap = new HashMap<String, Object>();
    	pramMap.put("WORK_DE", formatter.format(new Date()));
    	
    	// 근태기내역 삭제
		batchDao.delete("JOB002DAO.dclzDtlsD", pramMap);
		
		System.out.println("====>  실제 근태기내역 조회");
		
		// 실제 근태기내역 조회
		List<Map<String, Object>> dclzList = (List<Map<String, Object>>) bioStarDao.list("biostarDAO.selectDclzDtlsList", pramMap);
    	if(dclzList != null) {
    		System.out.println("[HRMJOB0001 조회 태스크 결과]" + dclzList.size() + "건의 데이터를 조회하였습니다.");
    	}
    	
		// 근태기내역 입력
		batchDao.insert("JOB002DAO.dclzDtlsC", dclzList);
  
        context.setResult(0); // Job 정상처리 상태(0) 반드시 넣어주세요.  논리적인 메시지는 if 문으로 분기하고, 텍스트를 설정하세요.
        
        System.out.println("##### Job HRMJOB0001[{}] {}.execute() finished! " + jobName + "  :  " + jobClass);
        
        
        
	}
}
