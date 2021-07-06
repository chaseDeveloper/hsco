package hsco.job.hpm;

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

public class HPMJOB0001 implements Job {

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
    	
    	BatchDao batchDao = (BatchDao)context.getJobDetail().getJobDataMap().get("batchDao"); 	
    	HscoHomePageDao hscoHomePageDao = (HscoHomePageDao) context.getJobDetail().getJobDataMap().get("hscoHomePageDao");
    	 
    	System.out.println("1. 결제기한 초과 대관취소할 데이터 조회");
    	
		List<Map<String, Object>> rentFcltsCncleList = (List<Map<String, Object>>) batchDao.list("HPMJOB0001DAO.selectRentFcltsCncleList", map);
    	if(rentFcltsCncleList != null) {
    		
    		System.out.println("[HPMJOB0001 결제기한 초과 대관취소할 조회 태스크 결과]" + rentFcltsCncleList.size() + "건의 데이터를 조회하였습니다.");
    		
    		System.out.println("2. 결제기한 초과 대관취소 업데이트");
    		batchDao.update("HPMJOB0001DAO.rentFcltsCncleListU", map);
    		
    		
    		/* 문자 보내지 않아도 된다고 함
    		 	
    		Map mberId      = null;
    		Map smsSendInfo = null;
    		String mberNm   = "";
    		String mbtlnum  = "";
    		String mmsMsg   = "";
    		String destInfo = "";
    		String fcltsNm  = "";
    		String useDe    = "";
    		boolean result  = false;
    		
    			
    		System.out.println("3. 결제기한 초과 대관취소 알림 SMS 발송(MS-SQL)");
    		for(Map<String, Object> rentFcltsCncle : rentFcltsCncleList) {
    			
    			// 신청정보에 휴대폰번호가 없는 회원은 mberId로 회원정보를 조회하여 등록된 휴대폰번호를 셋팅한다.
    			if(rentFcltsCncle.get("MBTLNUM")  == null || "".equals(rentFcltsCncle.get("MBTLNUM"))) {
    				if(rentFcltsCncle.get("MBER_ID") != null && !"".equals(rentFcltsCncle.get("MBER_ID"))) {
    					mberId = new HashMap<>();
    					mberId.put("MBER_ID", rentFcltsCncle.get("MBER_ID"));
    					
    					smsSendInfo = (Map) hscoHomePageDao.select("HomepageDAO.selectMberInfo", mberId);	
    					
    					if(smsSendInfo != null) {
	    					rentFcltsCncle.put("MBER_NM", smsSendInfo.get("MBER_NM"));
	    					rentFcltsCncle.put("MBTLNUM", smsSendInfo.get("MBTLNUM"));
	    					result = true;	
    					}
    				}
    			}else {
    				result = true;
    			}
    			
    			// 문자 정보 셋팅
    			if(result) {
    	    		
    				mberNm  = (String) rentFcltsCncle.get("MBER_NM");
    				mbtlnum = (String) rentFcltsCncle.get("MBTLNUM");
    				useDe   = (String) rentFcltsCncle.get("USE_DE");
    				fcltsNm = (String) rentFcltsCncle.get("FCLTS_NM");
    				
    				// [화성도시공사] #시설명# #사용일자# 대관취소 (사유-결제기한 초과)
    				mmsMsg   = "[화성도시공사] "+fcltsNm+" "+useDe+" 대관취소 (사유-결제기한 초과)";
    				destInfo = mberNm+"^"+mbtlnum;
    				
    				rentFcltsCncle.put("USER_ID"		, "hssports355");
    				rentFcltsCncle.put("SCHEDULE_TYPE"	, "0");
    				rentFcltsCncle.put("SUBJECT"		, "화성도시공사 대관취소");
    				rentFcltsCncle.put("CALLBACK"		, "0313551292");
    				rentFcltsCncle.put("DEST_COUNT"		, "1");
    				rentFcltsCncle.put("MSG_TYPE"		, "0");
    				rentFcltsCncle.put("DEST_INFO"		, destInfo);
    				rentFcltsCncle.put("MMS_MSG"		, mmsMsg);
    				rentFcltsCncle.put("CONTENT_COUNT"	, "0");
    				rentFcltsCncle.put("CONTENT_DATA"	, "");
    				
    				// 오픈 전 테스트
    				//rentFcltsCncle.put("DEST_INFO"		, "정민^01099665863");
    				
    				hscoHomePageDao.insert("HomepageDAO.sendMssage", rentFcltsCncle);
    			}
    		}*/
    	}
		context.setResult(0); // Job 정상처리 상태(0) 반드시 넣어주세요.  논리적인 메시지는 if 문으로 분기하고, 텍스트를 설정하세요.
		
		System.out.println("##### Job HPMJOB0001[{}] {}.execute() finished! " + jobName + "  :  " + jobClass);    	
	}
}
