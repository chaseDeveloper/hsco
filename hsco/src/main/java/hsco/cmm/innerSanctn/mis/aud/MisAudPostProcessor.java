package hsco.cmm.innerSanctn.mis.aud;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.innerSanctn.AbstractPostProcessor;
import hsco.cmm.ria.nexacro.map.DataSetMap;

public class MisAudPostProcessor extends AbstractPostProcessor{
	protected Logger log = LoggerFactory.getLogger(MisAudPostProcessor.class);
	
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
	 */
	
	//내부결재 완료 (LAST_SANCTN_STTUS : S01)
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void postProcess_S01(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("postProcess_S01!");
		
		
		System.out.println("== 회계 내부결재 후처리 =postProcess_S01===============>");
		
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
		
		System.out.println("== 회계 내부결재 후처리 =postProcess_S01=INNER_SANCTN_MDL_ID==============>" + INNER_SANCTN_MDL_ID);
		System.out.println("== 회계 내부결재 후처리 =postProcess_S01=INNER_SANCTN_ID==============>" + INNER_SANCTN_ID);
		System.out.println("== 회계 내부결재 후처리 =postProcess_S01=LAST_SANCTN_STTUS==============>" + LAST_SANCTN_STTUS);
		
		//지출결의서 관련
		if( ("AUD-100048".equals(INNER_SANCTN_MDL_ID)) && "S01".equals(LAST_SANCTN_STTUS) ){ // 승인
          	
			List <Map> records;
			List <Map> record;
			
          	records = (List<Map>)baseDao.list("AUD010203DAO.selectEdayAuditResult", sanctnInfo);
          	
          	Map recordMap = null; 
          	
          	int recordsize = (records == null) ? 0 : records.size();
          	if(recordsize > 0){
          		recordMap = (Map)records.get(0);
          	}
          	
          	baseDao.update("AUD010203DAO.updateRceptNo", recordMap);			// 일상감사결과 접수번호 채번
          	record = (List<Map>)baseDao.list("AUD010203DAO.selectEdayAuditRceptNo", recordMap); 
          	
          	recordsize = (record == null) ? 0 : record.size();
          	if(recordsize > 0){
          		recordMap = (Map)record.get(0);
          		recordMap.put("INNER_SANCTN_ID", INNER_SANCTN_ID);
          	}
          	
          	baseDao.update("AUD010203DAO.updateInnerSanctnData",recordMap);	// 내부결재데어터 수정
          }
	}
	
	//내부결재 취소 (LAST_SANCTN_STTUS : S08)
	public void postProcess_S08(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("postProcess_S08!");
//		baseDao.select("cmmCodeDAO.cmmServerDate");
//		Map<String, String> hm = (HashMap<String, String>)baseDao.select("cmmCodeDAO.cmmServerDate");
//		for(String s : hm.keySet()){
//			log.debug(s +" :: "+hm.get(s));
//		}
	}
	
	//내부결재 반송 (LAST_SANCTN_STTUS : S09)
	public void postProcess_S09(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("postProcess_S09!");
//		Map<String, String> hm = (HashMap<String, String>)baseDao.select("cmmCodeDAO.cmmServerDate");
//		for(String s : hm.keySet()){
//			log.debug(s +" :: "+hm.get(s));
//		}
	}
}
