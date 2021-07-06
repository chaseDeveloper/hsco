package hsco.job.mis.hrm;

import java.util.List;
import java.util.Map;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.dao.BatchDao;
import hsco.cmm.dao.BioStarDao;
import hsco.cmm.util.BatchJobUtil;

public class HRMJOB0001 implements Job {

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
    
	@SuppressWarnings({"unchecked"})
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
    	
    	BatchDao batchDao     = (BatchDao)context.getJobDetail().getJobDataMap().get("batchDao"); 	
    	BioStarDao bioStarDao = (BioStarDao)context.getJobDetail().getJobDataMap().get("bioStarDao");
    	
    	System.out.println("기존 근태기DB정보 삭제");
    	
    	// 기존 근태기DB정보 삭제
		batchDao.delete("JOB001DAO.dclzDBInfoD", map);
		
		System.out.println("====>  실제 근태기DB정보 조회");
		
		// 실제 근태기DB정보 조회
		List<Map<String, Object>> dclzDBInfoList = (List<Map<String, Object>>) bioStarDao.list("biostarDAO.selectDclzDBInfoList", map);
    	if(dclzDBInfoList != null) {
    		System.out.println("[HRMJOB0001 조회 태스크 결과]" + dclzDBInfoList.size() + "건의 데이터를 조회하였습니다.");
    	}
    	
		// 근태기DB정보 테이블 입력
		batchDao.insert("JOB001DAO.dclzDBInfoC", dclzDBInfoList);
  
        context.setResult(0); // Job 정상처리 상태(0) 반드시 넣어주세요.  논리적인 메시지는 if 문으로 분기하고, 텍스트를 설정하세요.
        
        System.out.println("##### Job HRMJOB0001[{}] {}.execute() finished! " + jobName + "  :  " + jobClass);
	}
}
