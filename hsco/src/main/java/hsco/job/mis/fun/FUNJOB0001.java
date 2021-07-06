package hsco.job.mis.fun;

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

public class FUNJOB0001 implements Job {

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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		String jobName = context.getJobDetail().getKey().getName();
    	String jobClass = context.getJobDetail().getJobClass().getName();
    	logger.debug("##### job[{}] {}.execute() started!", jobName, jobClass);
    	
    	System.out.println("차입금 상환 알림 배치서비스 시작!!!");
    	
    	// 파라메터설정
    	Map<String, Object> map = null;
    	if (this.paramtr != null) {
    		map = BatchJobUtil.parseParameter(this.paramtr);
    	}
    	
    	BatchDao batchDao = (BatchDao)context.getJobDetail().getJobDataMap().get("batchDao");
    	HscoHomePageDao hscoHomePageDao = (HscoHomePageDao) context.getJobDetail().getJobDataMap().get("hscoHomePageDao");
    	
    	for(int i=0; i < 2; i++){

            List <Map> funCharger = (List <Map>) batchDao.list("FUNJOB0001.selectFunCharger");
            List <Map> ntcnList;
            if(i==0){
            	//
                ntcnList = (List <Map>) batchDao.list("FUNJOB0001.cntNtcnBeffat");	// 차입금 상환예정일 3일전 공사채권
            }else{
                ntcnList = (List <Map>) batchDao.list("FUNJOB0001.cntNtcnToday");	// 차입금 상환예정일 당일 공사채권
            }
            
            //자산담당자 수를 먼저 확인하고 담당자의 수만큼 반복
            for(int j = 0; j < funCharger.size(); j++){
                
            	String destInfo = "";
            	String userName = "";
            	String phoneNum = "";
            	String msgCnResult = "";
            	
                if(ntcnList.size()<1){
                    //데이터가 없으면 실행하지 않음
                    continue;
                }
                
                Map msgInfoInput = new HashMap<String, String>();
                
                String ntcnSe;
                
                if(i==0){
                    ntcnSe = ntcnList.get(0).get("RPAY_DE").toString();
                }else{
	                    ntcnSe = "당일";
                }
	
                msgCnResult = "차입금 상환예정일이 "+ntcnSe+"인 공사채권은 다음과 같습니다.\r\n\n";
                

                for(int k = 0; k < ntcnList.size(); k++){
                    Map ntcnMap = ntcnList.get(k);
                    if("1".equals(ntcnMap.get("DS").toString())){
                        msgCnResult+="(이자) ";
                    }else{
                        msgCnResult+="(원금) ";
                    }
                    msgCnResult+=ntcnMap.get("CNT").toString() + "건";
                    msgCnResult+="\r\n";
                }
                
                userName = funCharger.get(j).get("EMPNM").toString();     // 수신자사번
                phoneNum = funCharger.get(j).get("PHONE_NUM").toString();     // 수신자성명
                
                // 핸드폰 번호가 등록된 담당자에게 문자 전송 처리
    			if(!phoneNum.isEmpty()) {
    				destInfo = userName+"^"+phoneNum;
    				
    				msgInfoInput.put("USER_ID"		 , "hsuco7765");
    				msgInfoInput.put("SCHEDULE_TYPE" , "1");
    				msgInfoInput.put("SUBJECT"		 , "화성도시공사 차입금 상환알림");	// 제목
    				msgInfoInput.put("CALLBACK"		 , "03180127799");	//발신번호
    				msgInfoInput.put("DEST_COUNT"	 , "1");
    				msgInfoInput.put("MSG_TYPE"		 , "0");
    				msgInfoInput.put("DEST_INFO"	 , destInfo);	// 수신자 이름/번호
    				msgInfoInput.put("MMS_MSG"		 , msgCnResult);	// 본분
    				msgInfoInput.put("CONTENT_COUNT" , "0");
    				msgInfoInput.put("CONTENT_DATA"	 , "");
    				
    				hscoHomePageDao.insert("HomepageDAO.sendMssage", msgInfoInput);
    			}
            }
    	}
    	System.out.println("차입금 상환 알림 배치서비스 시작!!!");
    	
    	context.setResult(0); // Job 정상처리 상태(0) 반드시 넣어주세요.  논리적인 메시지는 if 문으로 분기하고, 텍스트를 설정하세요.
		logger.debug("##### job[{}] {}.execute() finished! ", jobName, jobClass);		
	}

}
