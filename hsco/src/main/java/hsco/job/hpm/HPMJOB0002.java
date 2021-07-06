package hsco.job.hpm;

import java.net.InetAddress;
import java.net.UnknownHostException;
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
import hsco.cmm.dao.HscoHomePageDao;
import hsco.cmm.util.BatchJobUtil;

public class HPMJOB0002 implements Job {

	protected Logger logger = LoggerFactory.getLogger(this.getClass());

	// 배치 등록 시 파라미터
	private String paramtr;

	/**
	 * 배치 파라미터를 설정한다.
	 * 
	 * @param paramtr
	 */

	public void setParamtr(String paramtr) {
		this.paramtr = paramtr;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
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
		
		try {
			//String[] serverIpAddr = {"10", "50", "10"};
			InetAddress ip = InetAddress.getLocalHost();
			String ipAddr = ip.getHostAddress();

			// 서버 확인
			if("10.50.10.140".equals(ipAddr) || "10.50.10.141".equals(ipAddr)) {
				
				Date d = new Date();
		        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
				String today = sdf.format(d);
				map.put("BATCH_OPERT_DE", today);
				
				BatchDao batchDao = (BatchDao) context.getJobDetail().getJobDataMap().get("batchDao");
				HscoHomePageDao hscoHomePageDao = (HscoHomePageDao) context.getJobDetail().getJobDataMap().get("hscoHomePageDao");

				// 배치가 한번 돌았는지 CNT 체크
				int cnt = (int) batchDao.select("HPMJOB0002DAO.selectBatchChk", map);
					
				if (cnt < 1) {

					System.out.println("1. 당일이 결제기한일인 신청정보 조회");

					List<Map<String, Object>> setleCloseList = (List<Map<String, Object>>) batchDao.list("HPMJOB0002DAO.selectSetleCloseList");

					if (setleCloseList != null) {

						System.out.println("[HPMJOB0002 당일이 결제기한일인 신청정보 조회 태스크 결과]" + setleCloseList.size() + "건의 데이터를 조회하였습니다.");

						Map mberId = null;
						Map smsSendInfo = null;
						String mberNm = "";
						String mbtlnum = "";
						String mmsMsg = "";
						String destInfo = "";
						String fcltsNm = "";
						String useDe = "";
						String setleTmlmtDe = "";

						boolean result = false;

						System.out.println("2. 결제기한 초과 대관취소 알림 SMS 발송(MS-SQL)");
						for (Map<String, Object> setleClose : setleCloseList) {

							// 신청정보에 휴대폰번호가 없는 회원은 mberId로 회원정보를 조회하여 등록된 휴대폰번호를 셋팅한다.
							if (setleClose.get("MBTLNUM") == null || "".equals(setleClose.get("MBTLNUM"))) {
								if (setleClose.get("MBER_ID") != null && !"".equals(setleClose.get("MBER_ID"))) {
									mberId = new HashMap<>();
									mberId.put("MBER_ID", setleClose.get("MBER_ID"));

									smsSendInfo = (Map) hscoHomePageDao.select("HomepageDAO.selectMberInfo", mberId);

									if (smsSendInfo != null) {
										setleClose.put("MBER_NM", smsSendInfo.get("MBER_NM"));
										setleClose.put("MBTLNUM", smsSendInfo.get("MBTLNUM"));
										result = true;
									}
								}
							} else {
								result = true;
							}

							// 문자 정보 셋팅
							if (result) {
								mberNm = (String) setleClose.get("MBER_NM");
								mbtlnum = (String) setleClose.get("MBTLNUM");
								useDe = (String) setleClose.get("USE_DE");
								fcltsNm = (String) setleClose.get("FCLTS_NM");
								setleTmlmtDe = (String) setleClose.get("SETLE_TMLMT_DE");
								String deptCode = (String) setleClose.get("DEPT_CODE");
								String bizplcCode = (String) setleClose.get("BIZPLC_CODE");
								String telNo = "03180127799";
								String userId = "hsuco7765";
								
								// [화성도시공사] #시설명# #사용일자# 결제마감알림멘트
								mmsMsg = "[화성도시공사] " + fcltsNm + " " + useDe + ", 결제기한 " + setleTmlmtDe + " 결제 마감일입니다. 금일내로 결제 바랍니다.";
								destInfo = mberNm + "^" + mbtlnum;

								if("050200".equals(deptCode) && "C006".equals(bizplcCode)) {
									telNo = "0313551292";
									userId = "hssports355";
								}else if("050200".equals(deptCode) && "B001".equals(bizplcCode)) {
									telNo = "0313519027";
									userId = "hssports355";
								}else if("040100".equals(deptCode)) {
									telNo = "0313710011";
									userId = "hsstown";
								}
								
								setleClose.put("USER_ID"      , userId);
								setleClose.put("SCHEDULE_TYPE", "0");
								setleClose.put("SUBJECT"      , "화성도시공사 결제마감알림");
								setleClose.put("CALLBACK"     , telNo);
								setleClose.put("DEST_COUNT"   , "1");
								setleClose.put("MSG_TYPE"     , "0");
								setleClose.put("DEST_INFO"    , destInfo);
								setleClose.put("MMS_MSG"      , mmsMsg);
								setleClose.put("CONTENT_COUNT", "0");
								setleClose.put("CONTENT_DATA" , "");

								// 오픈 전 테스트
								// setleClose.put("DEST_INFO" , "정민^01099665863");
								hscoHomePageDao.insert("HomepageDAO.sendMssage", setleClose);
							}
						}
						if(map != null && !"".equals(map) && map.size() > 0) {
							System.out.println("  ================ 파라메터 ================ ");
							for (String mapkey : map.keySet()){
								System.out.println("[ key : "+mapkey+", value : "+map.get(mapkey)+" ]");
							}
						}
						// 배치가 돌았으면 TBCOM_BATCH_DAIL_COMPT 테이블 CNT 증가
						batchDao.insert("HPMJOB0002DAO.updateBatchIncrease", map);

					}
				} // end batch check

				context.setResult(0); // Job 정상처리 상태(0) 반드시 넣어주세요. 논리적인 메시지는 if 문으로
										// 분기하고, 텍스트를 설정하세요.

			System.out.println("##### Job HPMJOB0001[{}] {}.execute() finished! " + jobName + "  :  " + jobClass);
			}
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			System.out.println(e);     
		} 
		
   
	}
}
