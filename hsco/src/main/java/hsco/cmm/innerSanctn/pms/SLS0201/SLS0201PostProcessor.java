package hsco.cmm.innerSanctn.pms.SLS0201;

import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.innerSanctn.AbstractPostProcessor;
import hsco.cmm.innerSanctn.sample.SamplePostProcessor;
import hsco.cmm.ria.nexacro.map.DataSetMap;

public class SLS0201PostProcessor extends AbstractPostProcessor {
	protected Logger log = LoggerFactory.getLogger(SamplePostProcessor.class);
	
	/*
	 * inDataset key : INNER_SANCTN_MASTR
	 * 
	 * Map<String, String> sanctnInfo = null;
	 * DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");
	 * if(dsSetMap != null) sanctnInfo	= (HashMap<String, String>)dsSetMap.get(0);
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
	public void postProcess_S01(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("PARKLOG postProcess_S01!");
		Map<String, String> sanctnInfo = null;
		DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");		
		if(dsSetMap != null) sanctnInfo	= (HashMap<String, String>)dsSetMap.get(0);		
		String JOB_KEY				= sanctnInfo.get("JOB_KEY");			//업무KEY
		
		System.out.println("########PARKLOG PostProcessor : JOB_KEY : " + JOB_KEY);
		
  		StringTokenizer st = new StringTokenizer(JOB_KEY,"^");  		
  		Map recordMap = null;
  		if(st.hasMoreTokens()){
  			recordMap = new HashMap<String, String>();
  			recordMap.put("CNTRCTR_NO", st.nextToken());
  			recordMap.put("CHANGE_SE", st.nextToken());
  			recordMap.put("CHANGE_SN", st.nextToken());
  			recordMap.put("APPLC_AT", "Y");
  			
  			System.out.println("######PARKLOG CNTRCTR_NO : " + recordMap.get("CNTRCTR_NO"));
  			
  			baseDao.update("SLS020201DAO.updateHcntrctrChangeSanctn" , recordMap);
  			baseDao.update("SLS020201DAO.updateHcntrctrSanctn" , recordMap);
  		}
	}
	
	//내부결재 취소 (LAST_SANCTN_STTUS : S08)
	public void postProcess_S08(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("PARKLOG postProcess_S08!");
//		baseDao.select("cmmCodeDAO.cmmServerDate");
//		Map<String, String> hm = (HashMap<String, String>)baseDao.select("cmmCodeDAO.cmmServerDate");
//		for(String s : hm.keySet()){
//			log.debug(s +" :: "+hm.get(s));
//		}
	}
	
	//내부결재 반송 (LAST_SANCTN_STTUS : S09)
	public void postProcess_S09(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("PARKLOG postProcess_S09!");
		Map<String, String> sanctnInfo = null;
		DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");		
		if(dsSetMap != null) sanctnInfo	= (HashMap<String, String>)dsSetMap.get(0);		
		String JOB_KEY	= sanctnInfo.get("JOB_KEY");			//업무KEY		
  		StringTokenizer st = new StringTokenizer(JOB_KEY,"^");  		
  		Map recordMap = null;
  		if(st.hasMoreTokens()){
  			recordMap = new HashMap<String, String>();
  			recordMap.put("CNTRCTR_NO", st.nextToken());
  			recordMap.put("CHANGE_SE", st.nextToken());
  			recordMap.put("CHANGE_SN", st.nextToken());
  			recordMap.put("APPLC_AT", "R");
  			baseDao.update("SLS020201DAO.updateHcntrctrChangeSanctn" , recordMap);
  		}
	}
}
