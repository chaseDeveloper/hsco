package hsco.cmm.batch.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import javax.annotation.Resource;

import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.JobListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.batch.service.impl.BatchSchdulServiceImpl;
import hsco.cmm.batch.vo.BatchResult;

/**
 * 배치작업의 실행시작, 완료를 저장하는 Quartz JobListener 클래스를 정의한다.
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
 * </pre>
 */

public class BatchJobListener implements JobListener {

	
	@Resource(name = "batchSchdulService")
	private BatchSchdulServiceImpl batchSchdulService;

	/** logger */
	private static final Logger LOGGER = LoggerFactory.getLogger(BatchJobListener.class);

	/**
	 * 배치스케줄 서비스를 설정한다.
	 *
	 * @param batchSchdulService the batchSchdulService to set
	 */
	public void setBatchSchdulService(BatchSchdulServiceImpl batchSchdulService) {
		this.batchSchdulService = batchSchdulService;
	}

	public BatchJobListener(){}

	/**
	 * Job Listener 이름을 리턴한다.
	 * @see org.quartz.JobListener#getName()
	 */
	@Override
	public String getName() {
		return this.getClass().getName();
	}

	/**
	 * Batch 작업을 실행하기전에 Batch결과 '수행중'상태로 저장한다.
	 *
	 * @param jobContext JobExecutionContext
	 * @see org.quartz.JobListener#jobToBeExecuted(JobExecutionContext jobContext)
	 */
	@Override
	public void jobToBeExecuted(JobExecutionContext jobContext) {
		LOGGER.debug("job[{}] jobToBeExecuted ", jobContext.getJobDetail().getKey().getName());
		BatchResult batchResult = new BatchResult();
		JobDataMap dataMap = jobContext.getJobDetail().getJobDataMap();
		try {
			// 결과 값 세팅.
			
			batchResult.setBatchResultId(batchSchdulService.selectBatchResultId());
			batchResult.setBatchSchdulId(dataMap.getString("batchSchdulId"));
			batchResult.setBatchOpertId(dataMap.getString("batchOpertId"));
			batchResult.setParamtr(dataMap.getString("paramtr"));
			batchResult.setSttus("03"); // 상태는 수행중
			batchResult.setErrorInfo("");

			String executBeginTimeStr = null;
			Date executBeginTime = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss", Locale.getDefault());
			executBeginTimeStr = formatter.format(executBeginTime);
			batchResult.setExecutBeginTime(executBeginTimeStr);

			batchResult.setLastUpdusrId("SYSTEM");
			batchResult.setFrstRegisterId("SYSTEM");

			batchSchdulService.insertBatchResult(batchResult);

			// 저장이 이상없이 완료되면  datamap에 배치결과ID를 저장한다.
			dataMap.put("batchResultId", batchResult.getBatchResultId());
		} catch (Exception e) {
			LOGGER.error("배치스케줄ID : {}, 배치작업ID : {}, 배치결과저장(insert) 에러 : {}", batchResult.getBatchSchdulId(), batchResult.getBatchOpertId(), e.getMessage());
			LOGGER.debug(e.getMessage(), e);
		}

	}

	/**
	 * Batch 작업을 완료한후 Batch결과 '완료'상태로 저장한다.
	 *
	 * @param jobContext JobExecutionContext
	 * @see org.quartz.JobListener#jobWasExecuted(JobExecutionContext jobContext)
	 */
	@Override
	public void jobWasExecuted(JobExecutionContext jobContext, JobExecutionException jee) {
		LOGGER.debug("job[{}] jobWasExecuted", jobContext.getJobDetail().getKey().getName());
		LOGGER.debug("job[{}] 수행시간 : {}, {}", jobContext.getJobDetail().getKey().getName(), jobContext.getFireTime(), jobContext.getJobRunTime());

		int jobResult = 99;
		BatchResult batchResult = new BatchResult();
		JobDataMap dataMap = jobContext.getJobDetail().getJobDataMap();
		try {
			// 결과 값 세팅.
			batchResult.setBatchResultId(dataMap.getString("batchResultId"));
			batchResult.setBatchSchdulId(dataMap.getString("batchSchdulId"));
			batchResult.setBatchOpertId(dataMap.getString("batchOpertId"));
			batchResult.setParamtr(dataMap.getString("paramtr"));
			if (jobContext.getResult() != null) {
				jobResult = (Integer) jobContext.getResult();
			}
			if (jobResult == 0) {
				// 배치작업 성공.
				batchResult.setSttus("01");
				batchResult.setErrorInfo("");
			} else {
				// 배치작업이 0이 아닌값을 리턴하면 에러 상황임.
				batchResult.setSttus("02");
				batchResult.setErrorInfo("배치작업이 결과값 [" + jobResult + "]를 리턴했습니다. \n" + "배치프로그램 [" + dataMap.getString("batchProgrm") + "]의 로그를 확인하세요");
			}
			// 수행중 exception이 발생한 경우
			if (jee != null) {
				LOGGER.error("JobExecutionException 발생 : {}", jee);
				batchResult.setSttus("02");
				String errorInfo = batchResult.getErrorInfo();
				//batchResult.setErrorInfo(errorInfo + "\n" + "JobExecutionException 발생 : " + jee);
				batchResult.setErrorInfo(errorInfo + "\n" + "JobExecutionException 발생 : " + jee.getMessage());
			}

			String executEndTimeStr = null;
			Date executEndTime = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss", Locale.getDefault());
			executEndTimeStr = formatter.format(executEndTime);
			batchResult.setExecutEndTime(executEndTimeStr);

			batchResult.setLastUpdusrId("SYSTEM");

			batchSchdulService.updateBatchResult(batchResult);

			// 저장이 이상없이 완료되면  datamap에 배치결과ID를 저장한다.
			dataMap.put("batchResultId", batchResult.getBatchResultId());
		} catch (Exception e) {
			LOGGER.error("배치결과ID : {}, 배치스케줄ID : {}, 배치작업ID : {}, 배치결과저장(update) 에러 : {}", batchResult.getBatchResultId(), batchResult.getBatchSchdulId(),
					batchResult.getBatchOpertId(), e.getMessage());
			LOGGER.debug(e.getMessage(), e);
		}
	}

	/**
	 * Batch 작업을 실행한 후에 Batch결과 '에러'상태로 저장한다.
	 *
	 * @param jobContext JobExecutionContext
	 *
	 * @see org.quartz.JobListener#jobExecutionVetoed(JobExecutionContext jobContext)
	 */
	@Override
	public void jobExecutionVetoed(JobExecutionContext jobContext) {
		LOGGER.debug("job[{}] jobExecutionVetoed", jobContext.getJobDetail().getKey().getName());

		BatchResult batchResult = new BatchResult();
		JobDataMap dataMap = jobContext.getJobDetail().getJobDataMap();
		try {
			// 결과 값 세팅.
			batchResult.setBatchResultId(dataMap.getString("batchResultId"));
			batchResult.setBatchSchdulId(dataMap.getString("batchSchdulId"));
			batchResult.setBatchOpertId(dataMap.getString("batchOpertId"));
			batchResult.setParamtr(dataMap.getString("paramtr"));
			// 스케줄러가 배치작업을 실행하지 않음.
			batchResult.setSttus("02");
			batchResult.setErrorInfo("스케줄러가 배치작업을 실행하지 않았습니다(jobExecutionVetoed 이벤트). 스케줄러 로그를 확인하세요");

			String executEndTimeStr = null;
			Date executEndTime = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss", Locale.getDefault());
			executEndTimeStr = formatter.format(executEndTime);
			batchResult.setExecutEndTime(executEndTimeStr);

			batchResult.setLastUpdusrId("SYSTEM");

			batchSchdulService.updateBatchResult(batchResult);

			// 저장이 이상없이 완료되면  datamap에 배치결과ID를 저장한다.
			dataMap.put("batchResultId", batchResult.getBatchResultId());
		} catch (Exception e) {
			LOGGER.error("배치결과ID : {}, 배치스케줄ID : {}, 배치작업ID : {}, 배치결과저장(update) 에러 : {}", batchResult.getBatchResultId(), batchResult.getBatchSchdulId(),
					batchResult.getBatchOpertId(), e.getMessage());
			LOGGER.debug(e.getMessage(), e);
		}

	}

}
