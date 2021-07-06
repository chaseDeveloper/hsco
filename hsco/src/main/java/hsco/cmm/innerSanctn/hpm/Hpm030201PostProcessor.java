package hsco.cmm.innerSanctn.hpm;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.innerSanctn.AbstractPostProcessor;
import hsco.cmm.ria.nexacro.map.DataSetMap;

public class Hpm030201PostProcessor extends AbstractPostProcessor {
	protected Logger log = LoggerFactory.getLogger(Hpm050201PostProcessor.class);
	
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
	@SuppressWarnings("unchecked")
	public void postProcess_S01(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		
		log.info("postProcess_S01!");

		Map<String, String> sanctnInfo = null;
		DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");
		
		if(dsSetMap != null) sanctnInfo	= (HashMap<String, String>)dsSetMap.get(0);
		String JOB_KEY = sanctnInfo.get("JOB_KEY");				//업무KEY
		Map<String, String> map = new HashMap<String, String>();
		String[] boardIdx = JOB_KEY.split("\\^");
		map.put("BOARD_CONFIRM", "1");
		map.put("BOARD_IDX", boardIdx[1]);
		baseDao.update("HPM030201DAO.updateConfirmYn", map);//내부결재가 완료되면 승인플래그값을 업데이트 한다.
	}
	
	//내부결재 취소 (LAST_SANCTN_STTUS : S08)
	public void postProcess_S08(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("postProcess_S08!");
	}
	
	//내부결재 반송 (LAST_SANCTN_STTUS : S09)
	public void postProcess_S09(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException{
		log.info("postProcess_S09!");
	}
}