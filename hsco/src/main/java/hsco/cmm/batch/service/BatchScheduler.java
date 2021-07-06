package hsco.cmm.batch.service;



import static org.quartz.CronScheduleBuilder.cronSchedule;
import static org.quartz.TriggerBuilder.newTrigger;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.quartz.CronTrigger;
import org.quartz.Job;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SchedulerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

import hsco.cmm.batch.service.impl.BatchSchdulServiceImpl;
import hsco.cmm.batch.vo.BatchSchdul;


/**
 * Quartz Scheduler를 실행하는 스케줄러 클래스를 정의한다.
 *
 * @author 정윤원
 * @see
 * <pre>
 * == 개정이력(Modification Information) ==
 *
 *   수정일       수정자           수정내용
 *  -------     --------    ---------------------------
 *  2010.08.30   정윤원     최초 생성
 *  2016.03.17   정윤원    porting
 *  2016.04.22   정윤원  [기존]JobDetail jobDetail = newJob(BatchShellScriptJob.class).withIdentity(batchSchdul.getBatchSchdulId()).build();
 *                    ===>[변경 후] 
 *                    Class<? extends Job> claz = (Class<? extends Job>)Class.forName(batchSchdul.getBatchProgrm());
 *		              JobDetail jobDetail = JobBuilder.newJob(claz).withIdentity(batchSchdul.getBatchSchdulId()).build();
 *                    [변경사유]BatchShellScriptJob은 쉘 프로그램 실행이 많을 경우에만 적용이 타당함(실행타입을 테이블에 추가하여 배치 등록 시에 지정된 경우에만, 사용하도록 추후 분기하여 구현할 것.)
 *                    현재는 쉘 프로그램 실행 요건이 거의 없으므로 JobBuilder로 변경함. 쉘 프로그램 실행이 필요하면, Job 프로그램에서 ProcessBuilder르 사용하는 방안으로 대체함(2016.04.22 by Jongdae Kim)
 * </pre>
 */
//@Component("batchScheduler")
public class BatchScheduler {
	
	
	@Resource(name = "batchSchdulService")
	private BatchSchdulServiceImpl batchSchdulService;


	/** Quartz 스케줄러 */
	private Scheduler sched;

	private static final Logger LOGGER = LoggerFactory.getLogger(BatchScheduler.class);

	// 실행 대상을 읽기위한 페이지 크기
	private static final int RECORD_COUNT_PER_PAGE = 10000;
	

    
	@Autowired
    private ApplicationContext applicationContext;
	

	public BatchScheduler(){}
	


	/**
	 * 배치스케줄러에 batchSchdul 파라미터를 이용하여 Job , Trigger를 Add 한다.
	 *
	 * @param batchSchdul  배치스케줄러에 등록할 스케줄정보
	 * @exception Exception Exception
	 */
	@SuppressWarnings("unchecked")
	public void insertBatchSchdul(BatchSchdul batchSchdul) throws Exception {
		// Job 만들기 
		// BatchShellScriptJob은 쉘 프로그램 실행이 많을 경우에만 적용이 타당함(실행타입을 테이블에 추가하여 배치 등록 시에 지정된 경우에만, 사용하도록 추후 분기하여 구현할 것.)
		////JobDetail jobDetail = newJob(BatchShellScriptJob.class).withIdentity(batchSchdul.getBatchSchdulId()).build();  // (미사용)
		
		
		Class<? extends Job> claz = (Class<? extends Job>)Class.forName(batchSchdul.getBatchProgrm());
		JobDetail jobDetail = JobBuilder.newJob(claz).withIdentity(batchSchdul.getBatchSchdulId()).build();
		// Trigger 만들기
		CronTrigger trigger = newTrigger().withIdentity(batchSchdul.getBatchSchdulId()).withSchedule(cronSchedule(batchSchdul.toCronExpression())).forJob(jobDetail.getKey().getName()).build();

		LOGGER.debug("배치스케줄을 등록합니다. 배치스케줄ID : {}", batchSchdul.getBatchSchdulId());
		LOGGER.debug("{} - cronexpression : {}", batchSchdul.getBatchSchdulId(), 	trigger.getCronExpression());
//		BatchJobListener listener = new BatchJobListener();
//
//		listener.setBatchSchdulService(batchSchdulService);
//
//		sched.getListenerManager().addJobListener(listener);

		// 데이터 전달
		jobDetail.getJobDataMap().put("batchOpertId", batchSchdul.getBatchOpertId());
		jobDetail.getJobDataMap().put("batchSchdulId", batchSchdul.getBatchSchdulId());
		jobDetail.getJobDataMap().put("batchProgrm", batchSchdul.getBatchProgrm());
		jobDetail.getJobDataMap().put("paramtr", batchSchdul.getParamtr());
		
		jobDetail.getJobDataMap().put("hscoHomePageDao", batchSchdulService.getHscoHomePageDao());
		jobDetail.getJobDataMap().put("batchDao", batchSchdulService.getBatchDao());
		jobDetail.getJobDataMap().put("baseDao", batchSchdulService.getBaseDao());
		jobDetail.getJobDataMap().put("bioStarDao", batchSchdulService.getBioStarDao());

		// 항목추가
		
		try {
			// 스케줄러에 추가하기
			sched.scheduleJob(jobDetail, trigger);
		} catch (SchedulerException e) {
			// SchedulerException 이 발생하면 로그를 출력하고 다음 배치작업으로 넘어간다.
			// 트리거의 실행시각이 현재 시각보다 이전이면 SchedulerException이 발생한다.
			LOGGER.error("스케줄러에 배치작업추가할때 에러가 발생했습니다. 배치스케줄ID : {}, 배치작업ID : {}", batchSchdul.getBatchSchdulId(), batchSchdul.getBatchOpertId());
			LOGGER.error("에러내용 : {}", e.getMessage());
			LOGGER.debug(e.getMessage(), e);
		}
	}
	
	
	public void deleteBatchSchdul(String batchOpertId, String batchSchdulId) throws Exception{
	
		try {
			// 스케줄러에서 기존Job, Trigger 삭제하기
			LOGGER.debug("배치스케줄을 삭제합니다. 배치스케줄ID : {}", batchSchdulId);
			sched.deleteJob(JobKey.jobKey(batchSchdulId));
		} catch (SchedulerException e) {
			// SchedulerException 이 발생하면 로그를 출력하고 다음 배치작업으로 넘어간다.
			// 트리거의 실행시각이 현재 시각보다 이전이면 SchedulerException이 발생한다.
			LOGGER.error("스케줄러에 배치작업을 삭제할때 에러가 발생했습니다. 배치스케줄ID : {}, 배치작업ID : ", batchSchdulId, batchOpertId);
			LOGGER.error("에러내용 : {}", e.getMessage());
			LOGGER.debug(e.getMessage(), e);
		}
		
	}

	/**
	 * 배치스케줄러에 batchSchdul 파라미터를 이용하여 Job , Trigger를 갱신 한다.
	 *
	 * @param batchSchdul  배치스케줄러에 갱신할 스케줄정보
	 * @exception Exception Exception
	 */
	@SuppressWarnings("unchecked")
	public void updateBatchSchdul(BatchSchdul batchSchdul) throws Exception {
		// Job 만들기
		Class<? extends Job> claz = (Class<? extends Job>)Class.forName(batchSchdul.getBatchProgrm());
		JobDetail jobDetail = JobBuilder.newJob(claz).withIdentity(batchSchdul.getBatchSchdulId()).build();
		////JobDetail jobDetail = newJob(BatchShellScriptJob.class).withIdentity(batchSchdul.getBatchSchdulId()).build(); // (미사용)
		
		// Trigger 만들기
		CronTrigger trigger = newTrigger().withIdentity(batchSchdul.getBatchSchdulId()).withSchedule(cronSchedule(batchSchdul.toCronExpression())).forJob(jobDetail.getKey().getName()).build();

		LOGGER.debug("배치스케줄을 갱신합니다. 배치스케줄ID : {}", batchSchdul.getBatchSchdulId());
		LOGGER.debug("{} - cronexpression : {}", batchSchdul.getBatchSchdulId(), trigger.getCronExpression());

		BatchJobListener listener = new BatchJobListener();

		listener.setBatchSchdulService(batchSchdulService);

		sched.getListenerManager().addJobListener(listener);

		// 데이터 전달
		jobDetail.getJobDataMap().put("batchOpertId", batchSchdul.getBatchOpertId());
		jobDetail.getJobDataMap().put("batchSchdulId", batchSchdul.getBatchSchdulId());
		jobDetail.getJobDataMap().put("batchProgrm", batchSchdul.getBatchProgrm());
		jobDetail.getJobDataMap().put("paramtr", batchSchdul.getParamtr());

		try {
			// 스케줄러에서 기존Job, Trigger 삭제하기
			sched.deleteJob(JobKey.jobKey(batchSchdul.getBatchSchdulId()));
			// 스케줄러에 추가하기
			sched.scheduleJob(jobDetail, trigger);
		} catch (SchedulerException e) {
			// SchedulerException 이 발생하면 로그를 출력하고 다음 배치작업으로 넘어간다.
			// 트리거의 실행시각이 현재 시각보다 이전이면 SchedulerException이 발생한다.
			LOGGER.error("스케줄러에 배치작업갱신할때 에러가 발생했습니다. 배치스케줄ID : {}, 배치작업ID : {}", batchSchdul.getBatchSchdulId(), batchSchdul.getBatchOpertId());
			LOGGER.error("에러내용 : {}", e.getMessage());
			LOGGER.debug(e.getMessage(), e);
		}
	}

	/**
	 * 배치스케줄러에 batchSchdul 파라미터를 이용하여 Job , Trigger를 삭제한다.
	 *
	 * @param batchSchdul  배치스케줄러에 삭제할 스케줄정보
	 * @exception Exception Exception
	 */
	public void deleteBatchSchdul(BatchSchdul batchSchdul) throws Exception {

		try {
			// 스케줄러에서 기존Job, Trigger 삭제하기
			LOGGER.debug("배치스케줄을 삭제합니다. 배치스케줄ID : {}", batchSchdul.getBatchSchdulId());
			sched.deleteJob(JobKey.jobKey(batchSchdul.getBatchSchdulId()));
		} catch (SchedulerException e) {
			// SchedulerException 이 발생하면 로그를 출력하고 다음 배치작업으로 넘어간다.
			// 트리거의 실행시각이 현재 시각보다 이전이면 SchedulerException이 발생한다.
			LOGGER.error("스케줄러에 배치작업을 삭제할때 에러가 발생했습니다. 배치스케줄ID : {}, 배치작업ID : ", batchSchdul.getBatchSchdulId(), batchSchdul.getBatchOpertId());
			LOGGER.error("에러내용 : {}", e.getMessage());
			LOGGER.debug(e.getMessage(), e);
		}
	}

	/**
	 * 클래스 초기화메소드.
	 * 배치스케줄테이블을 읽어서 Quartz 스케줄러를 초기화한다.
	 *
	 */
	@SuppressWarnings("unchecked")
	public void init() throws Exception {
		// 모니터링 대상 정보 읽어들이기~~~
		List<BatchSchdul> targetList = null;
		BatchSchdul searchVO = new BatchSchdul();
		// 모니터링 대상 검색 조건 초기화
		searchVO.setPageIndex(1);
		searchVO.setFirstIndex(0);
		searchVO.setRecordCountPerPage(RECORD_COUNT_PER_PAGE);
		Map<String, Object> srchVo = new HashMap<String, Object>();
		srchVo.put("BATCH_OPERT_NM", "");
		srchVo.put("BATCH_PROGRM", "");
		srchVo.put("FIRST_INDEX", 0);
		srchVo.put("RECORD_COUNT_PER_PAGE", 10000);
		targetList = (List<BatchSchdul>) batchSchdulService.selectBatchSchdulList(srchVo);
		LOGGER.debug("조회조건 {}", searchVO);
		LOGGER.debug("Result 건수 : {}", targetList.size());

		// 스케줄러 생성하기
		SchedulerFactory schedFact = new org.quartz.impl.StdSchedulerFactory();
		sched = schedFact.getScheduler();
		
		// Set up the listener
		BatchJobListener listener = new BatchJobListener();

		listener.setBatchSchdulService(batchSchdulService);

		//sched.addGlobalJobListener(listener);
		sched.getListenerManager().addJobListener(listener);

		// 스케줄러에 Job, Trigger 등록하기
		BatchSchdul target = null;
		for (int i = 0; i < targetList.size(); i++) {
			target = targetList.get(i);
			LOGGER.debug("Data : {}", target);

			insertBatchSchdul(target);
		}
		sched.start();
	}

	/**
	 * 클래스 destroy메소드.
	 * Quartz 스케줄러를 shutdown한다.
	 *
	 */
	public void destroy() throws Exception {
		sched.shutdown();
	}

	/**
	 * 배치스케줄 서비스 리턴
	 * @return the batchSchdulService
	 */
	public BatchSchdulService getBatchSchdulService() {
		return batchSchdulService;
	}

	/**
	 * 배치스케줄 서비스 저장.
	 * @param batchSchdulService the batchSchdulService to set
	 */
	public void setBatchSchdulService(BatchSchdulServiceImpl batchSchdulService) {
		this.batchSchdulService = batchSchdulService;
	}

}
