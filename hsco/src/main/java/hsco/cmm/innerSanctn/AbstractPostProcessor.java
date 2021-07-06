package hsco.cmm.innerSanctn;

import java.util.HashMap;
import java.util.Map;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;

public abstract class AbstractPostProcessor {
	/**
	 * 내부결재 후처리 메소드
	 * @param (Map sanctnInfo) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"unchecked", "unused" })
	public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
							Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
							Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		Map<String, String> sanctnInfo = null; 
		DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");
		if(dsSetMap != null){
			sanctnInfo = (HashMap<String, String>)dsSetMap.get(0);
		}else{
			return;
		}
		
		String INNER_SANCTN_MDL_ID	= sanctnInfo.get("INNER_SANCTN_MDL_ID");	//내부결재모형ID
		String INNER_SANCTN_MDL_NM	= sanctnInfo.get("INNER_SANCTN_MDL_NM");	//결재모형명칭
		String SYS_SE_CODE			= sanctnInfo.get("SYS_SE_CODE");			//시스템구분코드
		String JOB_SE				= sanctnInfo.get("JOB_SE");					//업무구분
		String JOB_KEY				= sanctnInfo.get("JOB_KEY");				//업무KEY
		String USER_ID				= sanctnInfo.get("USER_ID");				//상신자ID
		String LAST_SANCTN_STTUS	= sanctnInfo.get("LAST_SANCTN_STTUS");		//최종결재상태
		String LAST_SANCTNER_ID		= sanctnInfo.get("LAST_SANCTNER_ID");		//최종결재자ID
		
		/*
		LAST_SANCTN_STTUS
		S00	대기	COM034
		S01	완료	COM034
		S02	결재중	COM034
		S08	취소	COM034
		S09	반송	COM034 
		*/
		switch(LAST_SANCTN_STTUS){
			case "S01" :
				postProcess_S01(baseDao, tranInfo, inVar, inDataset);
				break;
			case "S08" :
				postProcess_S08(baseDao, tranInfo, inVar, inDataset);
				break;
			case "S09" :
				postProcess_S09(baseDao, tranInfo, inVar, inDataset);
				break;
		}
	}
	
	public abstract void postProcess_S01(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException;
	
	public abstract void postProcess_S08(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException;
	
	public abstract void postProcess_S09(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
								Map<String, DataSetMap> inDataset) throws NexaServiceException;
}
