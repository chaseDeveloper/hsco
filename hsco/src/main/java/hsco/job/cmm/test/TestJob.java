package hsco.job.cmm.test;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.orm.ibatis.support.SqlMapClientDaoSupport;
import hsco.cmm.dao.BatchDao;
import hsco.cmm.util.BatchJobUtil;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: TestJob.java
 * @Description  	: Job 인터페이스를 구현하는 배치테스트용 구현 클래스
 * @author       	: 정윤원
 * @since        	: 2016.04.22
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2016.04.22     정윤원               최초작성
 * </pre>  
 */
public class TestJob implements Job {
	
	protected Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	//private BatchDao batchDao;
	
	// 배치 등록 시 파라미터 
    private String paramtr;
    /**
     * 배치 파라미터를 설정한다.
     * @param paramtr
     */
    public void setParamtr(String paramtr){
        this.paramtr = paramtr;
    }

    
    /**
     * Job Task를 실행한다
     * @param context JobExecutionContext 배치 Job 컨텍스트 정보 객체
     * @return N/A
     * @throws JobExecutionException
     */
    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {	
    	String jobName = context.getJobDetail().getKey().getName();
    	String jobClass = context.getJobDetail().getJobClass().getName();
    	logger.debug("##### job[{}] {}.execute() started!", jobName, jobClass);
    	//context.getJobDetail().getJobDataMap().put("applicationContextJobDataKey", "BatchDao");
    	
    	//System.out.println("[JOBNAME]" +context.getJobDetail().getKey().toString() + " :::: TestJob.execute()...... started@@@@@@@@@@@@@@@@@@@@@@@");
    	Map<String, Object> map = BatchJobUtil.parseParameter(this.paramtr);
        BatchDao batchDao = (BatchDao)context.getJobDetail().getJobDataMap().get("batchDao");
        if(batchDao == null){
        		System.out.println("BatchDao is null");
        } else {
        	batchDao.list("JobTestDAO.getMessageList", map);
        	
        	List<Map> records = (List<Map>)batchDao.list("JobTestDAO.getMessageList", map);
//        	if(records != null)
//          System.out.println("[TestJob 조회 태스크 결과]" + records.size() + "건의 데이터를 조회하였습니다.");
        }
        

        context.setResult(0); // Job 정상처리 상태(0) 반드시 넣어주세요.  논리적인 메시지는 if 문으로 분기하고, 텍스트를 설정하세요.
        
        logger.debug("##### job[{}] {}.execute() finished! ", jobName, jobClass);
         
    }

}