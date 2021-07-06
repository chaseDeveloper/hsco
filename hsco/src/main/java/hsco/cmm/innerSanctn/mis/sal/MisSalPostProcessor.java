package hsco.cmm.innerSanctn.mis.sal;

import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.innerSanctn.AbstractPostProcessor;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.util.DateUtil;

public class MisSalPostProcessor extends AbstractPostProcessor {
	protected Logger log = LoggerFactory.getLogger(MisSalPostProcessor.class);
	
	/*
	 * inDataset key : INNER_SANCTN_MASTR
	 * 
	 * Map<String, String> sanctnInfo = null;
	 * DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");
	 * if(dsSetMap != null) sanctnInfo	= (HashMap<String, String>)dsSetMap.get(0);
	 * String INNER_SANCTN_ID		= sanctnInfo.get("INNER_SANCTN_ID");		//내부결재ID
	 * String INNER_SANCTN_MDL_ID	= sanctnInfo.get("INNER_SANCTN_MDL_ID");	//내부결재모형ID
	 * String INNER_SANCTN_MDL_NM	= sanctnInfo.get("INNER_SANCTN_MDL_NM");	//결재모형명칭
	 * String SYS_SE_CODE			= sanctnInfo.get("SYS_SE_CODE");			//시스템구분코드
	 * String JOB_SE				= sanctnInfo.get("JOB_SE");					//업무구분
	 * String JOB_KEY				= sanctnInfo.get("JOB_KEY");				//업무KEY
	 * String USER_ID				= sanctnInfo.get("USER_ID");				//상신자ID
	 * String LAST_SANCTN_STTUS		= sanctnInfo.get("LAST_SANCTN_STTUS");		//최종결재상태
	 * String LAST_SANCTNER_ID		= sanctnInfo.get("LAST_SANCTNER_ID");		//최종결재자ID
	 * String LAST_OPINION			= sanctnInfo.get("LAST_OPINION");			//최종결재자의견
	 */
	
	//내부결재 완료 (LAST_SANCTN_STTUS : S01)
	@SuppressWarnings({ "unchecked" })
	public void postProcess_S01(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("postProcess_S01!");
		
		
		System.out.println("== 보수 내부결재 후처리 =postProcess_S01===============>");
		
		Map<String, String> sanctnInfo = null;
		DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");
		
		if(dsSetMap != null) sanctnInfo	= (HashMap<String, String>)dsSetMap.get(0);
		
		String INNER_SANCTN_ID		= sanctnInfo.get("INNER_SANCTN_ID");		//내부결재ID
		String INNER_SANCTN_MDL_ID	= sanctnInfo.get("INNER_SANCTN_MDL_ID");	//내부결재모형ID
		//String INNER_SANCTN_MDL_NM	= sanctnInfo.get("INNER_SANCTN_MDL_NM");	//결재모형명칭
		//String SYS_SE_CODE			= sanctnInfo.get("SYS_SE_CODE");			//시스템구분코드
		//String JOB_SE				= sanctnInfo.get("JOB_SE");					//업무구분
		String JOB_KEY				= sanctnInfo.get("JOB_KEY");				//업무KEY
		//String USER_ID				= sanctnInfo.get("USER_ID");				//상신자ID
		String LAST_SANCTN_STTUS	= sanctnInfo.get("LAST_SANCTN_STTUS");		//최종결재상태
		//String LAST_SANCTNER_ID		= sanctnInfo.get("LAST_SANCTNER_ID");		//최종결재자ID
		
		System.out.println("== 보수 내부결재 후처리 =postProcess_S01=INNER_SANCTN_MDL_ID==============>" + INNER_SANCTN_MDL_ID);
		System.out.println("== 보수 내부결재 후처리 =postProcess_S01=INNER_SANCTN_ID==============>" + INNER_SANCTN_ID);
		System.out.println("== 보수 내부결재 후처리 =postProcess_S01=LAST_SANCTN_STTUS==============>" + LAST_SANCTN_STTUS);
		
		//----------------------------
		//가족수당승인  : SAL020104 
		//----------------------------
		if( "SAL-100022".equals(INNER_SANCTN_MDL_ID) && "S01".equals(LAST_SANCTN_STTUS) ){ // 승인
            
			if(sanctnInfo.containsKey("JOB_KEY")){
                
				StringTokenizer token = new StringTokenizer(JOB_KEY,"^");                
				if(token.hasMoreTokens()){
					
                    sanctnInfo.put("REQST_DE", token.nextToken());
                    sanctnInfo.put("REQST_SE", token.nextToken());
                    sanctnInfo.put("EMPNO", token.nextToken());
                    sanctnInfo.put("REQST_SN", token.nextToken());
                }				
            }
			sanctnInfo.put("SANCTN_ID", INNER_SANCTN_ID);		                
			
			String SALARY_CONFM_DE = DateUtil.getFormatString("yyyyMMdd");
        	sanctnInfo.put("SALARY_CONFM_AT", "2"); //승인여부 => 2:승인, 3:반려
			sanctnInfo.put("SALARY_CONFM_DE", SALARY_CONFM_DE); //승인일자

			
			//취득
            if( "1".equals( sanctnInfo.get("REQST_SE").toString()) ){
	            
            	// 승인정보 업데이트
            	baseDao.update("SAL020103DAO.FamilyallwncU", sanctnInfo);	            
	            
            	// 취득(신규)인사마스터 가족사항 추가
	            baseDao.insert("SAL020103DAO.tbhrmHrFamilyC", sanctnInfo);
	            
	            // 취득(변경) : 인사마스터 가족사항 수정
	            baseDao.insert("SAL020103DAO.tbhrmHrFamilyU", sanctnInfo);
            }
            else if( "2".equals( sanctnInfo.get("REQST_SE").toString()) ){ //상실
            	
            	// 승인정보 업데이트
                baseDao.update("SAL020103DAO.FamilyallwncU", sanctnInfo);
                
                // 상실 : 인사마스터 가족사항 수정
                baseDao.update("SAL020103DAO.tbhrmHrFamilyU2", sanctnInfo);
            
            }
            
		}
		
		//----------------------------
		//기술수당승인  : SAL020106
		//----------------------------
		if( "SAL-100023".equals(INNER_SANCTN_MDL_ID) && "S01".equals(LAST_SANCTN_STTUS) ){ // 승인
            
			if(sanctnInfo.containsKey("JOB_KEY")){
                
				StringTokenizer token = new StringTokenizer(JOB_KEY,"^");                
				if(token.hasMoreTokens()){
					
                    sanctnInfo.put("REQST_DE", token.nextToken());
                    sanctnInfo.put("REQST_SE", token.nextToken());
                    sanctnInfo.put("EMPNO", token.nextToken());
                    sanctnInfo.put("CRQFC_NO", token.nextToken());
                    sanctnInfo.put("REQST_SN", token.nextToken());
                }				
            }
			sanctnInfo.put("SANCTN_ID", INNER_SANCTN_ID);		                
			
			String SALARY_CONFM_DE = DateUtil.getFormatString("yyyyMMdd");
        	sanctnInfo.put("SALARY_CONFM_AT", "2"); //승인여부 => 2:승인, 3:반려
			sanctnInfo.put("SALARY_CONFM_DE", SALARY_CONFM_DE); //승인일자
			
			//승인 정보 업데이트
			baseDao.update("SAL020105DAO.QualfallwncU2", sanctnInfo);
		        
	        // 자격증 수정 : 기존 자격증 수당여부 해제 신규 1건만 인정
	        //baseDao.update("SAL020105DAO.QUALFU2", sanctnInfo);
	        
	        // 자격증 입력
	        baseDao.insert("SAL020105DAO.QUALFU3", sanctnInfo);
            
		}
		
		//----------------------------
		//학자보조금승인  : SAL020109
		//----------------------------
		if( "SAL-100024".equals(INNER_SANCTN_MDL_ID) && "S01".equals(LAST_SANCTN_STTUS) ){ // 승인
            
			if(sanctnInfo.containsKey("JOB_KEY")){
                
				StringTokenizer token = new StringTokenizer(JOB_KEY,"^");                
				if(token.hasMoreTokens()){
					
                    sanctnInfo.put("REQST_YEAR", token.nextToken());
                    sanctnInfo.put("QU", token.nextToken());
                    sanctnInfo.put("EMPNO", token.nextToken());
                    sanctnInfo.put("FAMILY_NM", token.nextToken());
                    sanctnInfo.put("REQST_SN", token.nextToken());
                }				
            }
			sanctnInfo.put("SANCTN_ID", INNER_SANCTN_ID);		                
			
			String SALARY_CONFM_DE = DateUtil.getFormatString("yyyyMMdd");
        	sanctnInfo.put("SALARY_CONFM_AT", "2"); //승인여부 => 2:승인, 3:반려
			sanctnInfo.put("SALARY_CONFM_DE", SALARY_CONFM_DE); //승인일자
			
			//후처리
			baseDao.update("SAL020108DAO.saveSchxpnsbsidyListAppr", sanctnInfo);
            
		}
		
		
	}
	
	
	//============================================================================================================
	
	//내부결재 취소 (LAST_SANCTN_STTUS : S08)
	public void postProcess_S08(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("postProcess_S08!");

	}
	
	//============================================================================================================
	
	
	
	//내부결재 반송 (LAST_SANCTN_STTUS : S09)
	@SuppressWarnings("unchecked")
	public void postProcess_S09(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("postProcess_S09!");

System.out.println("== 보수 내부결재 반송 후처리 =postProcess_S09===============>");
		
		Map<String, String> sanctnInfo = null;
		DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");
		
		if(dsSetMap != null) sanctnInfo	= (HashMap<String, String>)dsSetMap.get(0);
		
		String INNER_SANCTN_ID		= sanctnInfo.get("INNER_SANCTN_ID");		//내부결재ID
		String INNER_SANCTN_MDL_ID	= sanctnInfo.get("INNER_SANCTN_MDL_ID");	//내부결재모형ID
		//String INNER_SANCTN_MDL_NM	= sanctnInfo.get("INNER_SANCTN_MDL_NM");	//결재모형명칭
		//String SYS_SE_CODE			= sanctnInfo.get("SYS_SE_CODE");			//시스템구분코드
		//String JOB_SE				= sanctnInfo.get("JOB_SE");					//업무구분
		String JOB_KEY				= sanctnInfo.get("JOB_KEY");				//업무KEY
		//String USER_ID				= sanctnInfo.get("USER_ID");				//상신자ID
		String LAST_SANCTN_STTUS	= sanctnInfo.get("LAST_SANCTN_STTUS");		//최종결재상태
		//String LAST_SANCTNER_ID		= sanctnInfo.get("LAST_SANCTNER_ID");		//최종결재자ID
		String LAST_OPINION			= sanctnInfo.get("LAST_OPINION");			//최종결재자의견
		
		System.out.println("== 보수 내부결재 반송 후처리 =sanctnInfo==============>" + sanctnInfo);
		
		System.out.println("== 보수 내부결재 반송 후처리 =postProcess_S09=INNER_SANCTN_MDL_ID==============>" + INNER_SANCTN_MDL_ID);
		System.out.println("== 보수 내부결재 반송 후처리 =postProcess_S09=INNER_SANCTN_ID==============>" + INNER_SANCTN_ID);
		System.out.println("== 보수 내부결재 반송 후처리 =postProcess_S09=LAST_SANCTN_STTUS==============>" + LAST_SANCTN_STTUS);
		
		//----------------------------
		//가족수당승인  : SAL020104
		//----------------------------
		if( "SAL-100022".equals(INNER_SANCTN_MDL_ID) && "S09".equals(LAST_SANCTN_STTUS) ){ // 반송
            
			if(sanctnInfo.containsKey("JOB_KEY")){
                
				StringTokenizer token = new StringTokenizer(JOB_KEY,"^");                
				if(token.hasMoreTokens()){
					
                    sanctnInfo.put("REQST_DE", token.nextToken());
                    sanctnInfo.put("REQST_SE", token.nextToken());
                    sanctnInfo.put("EMPNO", token.nextToken());
                    sanctnInfo.put("REQST_SN", token.nextToken());
                }				
            }
			sanctnInfo.put("SANCTN_ID", INNER_SANCTN_ID);		                
			
			//String SALARY_CONFM_DE = DateUtil.getFormatString("yyyyMMdd");
        	sanctnInfo.put("SALARY_CONFM_AT", "3"); //승인여부 => 2:승인, 3:반려
			sanctnInfo.put("RETURN_CN", LAST_OPINION); //반려내용

			
			//취득
            if( "1".equals( sanctnInfo.get("REQST_SE").toString()) ){
	            
            	//승인정보 업데이트
            	baseDao.update("SAL020103DAO.FamilyallwncReturn", sanctnInfo);
            }
            else if( "2".equals( sanctnInfo.get("REQST_SE").toString()) ){ //상실
            	
            	//승인정보 업데이트
            	baseDao.update("SAL020103DAO.FamilyallwncReturn", sanctnInfo);
            
            }            
		}
		
		//----------------------------
		//기술수당승인  : SAL020106
		//----------------------------
		if( "SAL-100023".equals(INNER_SANCTN_MDL_ID) && "S09".equals(LAST_SANCTN_STTUS) ){ // 반송
            
			if(sanctnInfo.containsKey("JOB_KEY")){
                
				StringTokenizer token = new StringTokenizer(JOB_KEY,"^");                
				if(token.hasMoreTokens()){
					
                    sanctnInfo.put("REQST_DE", token.nextToken());
                    sanctnInfo.put("REQST_SE", token.nextToken());
                    sanctnInfo.put("EMPNO", token.nextToken());
                    sanctnInfo.put("CRQFC_NO", token.nextToken());
                    sanctnInfo.put("REQST_SN", token.nextToken());
                }				
            }
			sanctnInfo.put("SANCTN_ID", INNER_SANCTN_ID);		                
			
			//String SALARY_CONFM_DE = DateUtil.getFormatString("yyyyMMdd");
        	sanctnInfo.put("SALARY_CONFM_AT", "3"); //승인여부 => 2:승인, 3:반려
			sanctnInfo.put("RETURN_CN", LAST_OPINION); //반려내용
			
			//반려 정보 업데이트
			baseDao.update("SAL020105DAO.saveQualfallwncReturnList", sanctnInfo);
			          
		}
		
		//----------------------------
		//학자보조금승인  : SAL020109
		//----------------------------
		if( "SAL-100024".equals(INNER_SANCTN_MDL_ID) && "S09".equals(LAST_SANCTN_STTUS) ){ // 반송
	        
			if(sanctnInfo.containsKey("JOB_KEY")){
	            
				StringTokenizer token = new StringTokenizer(JOB_KEY,"^");                
				if(token.hasMoreTokens()){
					
					sanctnInfo.put("REQST_YEAR", token.nextToken());
                    sanctnInfo.put("QU", token.nextToken());
                    sanctnInfo.put("EMPNO", token.nextToken());
                    sanctnInfo.put("FAMILY_NM", token.nextToken());
                    sanctnInfo.put("REQST_SN", token.nextToken());
	            }				
	        }
			sanctnInfo.put("SANCTN_ID", INNER_SANCTN_ID);		                
			
			//String SALARY_CONFM_DE = DateUtil.getFormatString("yyyyMMdd");
	    	sanctnInfo.put("SALARY_CONFM_AT", "3"); //승인여부 => 2:승인, 3:반려
			sanctnInfo.put("RETURN_PRVONSH", LAST_OPINION); //반려내용
	
			//후처리
			baseDao.update("SAL020108DAO.saveSchxpnsbsidyListAppr", sanctnInfo);
			          
		}		
		
		
	}
}