package hsco.cmm.innerSanctn.mis.acc;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.innerSanctn.AbstractPostProcessor;
import hsco.cmm.ria.nexacro.map.DataSetMap;

public class MisAccPostProcessor extends AbstractPostProcessor {
	protected Logger log = LoggerFactory.getLogger(MisAccPostProcessor.class);
	
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
		if( ("ACC-100027".equals(INNER_SANCTN_MDL_ID) 
			|| "ACC-100032".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100033".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100034".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100035".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100036".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100037".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100038".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100040".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100041".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100042".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100043".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100044".equals(INNER_SANCTN_MDL_ID)
			) && "S01".equals(LAST_SANCTN_STTUS) ){ // 승인
          	
			List <Map> records;
          	
          	records = (List<Map>)baseDao.list("ACC020203DAO.selectExpDsnMtr", sanctnInfo);
          	
          	Map recordMap = null; 
          	
          	int recordsize = (records == null) ? 0 : records.size();
          	if(recordsize > 0){
          		recordMap = (Map)records.get(0);
          	}
          	else{
          		
          		StringTokenizer st = new StringTokenizer(JOB_KEY,"^");
          		
          		if(st.hasMoreTokens()){
          			recordMap = new HashMap<String, String>();
          			recordMap.put("DECSN_NO", st.nextToken());
          			recordMap.put("DECSN_YEAR", st.nextToken());
          		}
          	}

          	if("ACC-100027".equals(INNER_SANCTN_MDL_ID) || "ACC-100041".equals(INNER_SANCTN_MDL_ID)){	//지출결의서의 경우
          		baseDao.update("ACC020203DAO.exrChkYnU", recordMap);				//법인카드 지출확인
          	}
          	
          	baseDao.update("ACC020203DAO.expndtrCnfirmAtU", recordMap);			//지출결의서 지출확인
          	
          	baseDao.update("ACC020203DAO.expndtrCnfirmU", recordMap);			//지출확인 승인/취소 (주간계획)
          	
          	if(recordMap.get("CHI_AT") != null && "1".equals(recordMap.get("CHI_AT")) && recordMap.get("PARTNT_TIMHDER_CONFM") != null && "1".equals(recordMap.get("PARTNT_TIMHDER_CONFM")) ){
          		baseDao.update("ACC020405DAO.expndtrSlipI", recordMap);
          	}
          }
		
		
		//지출결의서 관련 채무확정건의 경우 결제 완료시 전표 생성
		if( ("ACC-100055".equals(INNER_SANCTN_MDL_ID) 
			|| "ACC-100056".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100057".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100058".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100059".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100060".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100061".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100062".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100063".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100064".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100065".equals(INNER_SANCTN_MDL_ID)
			|| "ACC-100066".equals(INNER_SANCTN_MDL_ID)
			) && "S01".equals(LAST_SANCTN_STTUS) ){ // 승인
			
			List <Map> records;
			
			records = (List<Map>)baseDao.list("ACC020203DAO.selectExpDsnMtr", sanctnInfo);
			
			Map recordMap = null; 
			
			int recordsize = (records == null) ? 0 : records.size();
			if(recordsize > 0){
				recordMap = (Map)records.get(0);
			}
			else{
				
				StringTokenizer st = new StringTokenizer(JOB_KEY,"^");
			
				if(st.hasMoreTokens()){
					recordMap = new HashMap<String, String>();
					recordMap.put("DECSN_NO", st.nextToken());
					recordMap.put("DECSN_YEAR", st.nextToken());
				}
			}
			
			baseDao.update("ACC020405DAO.expndtrSlipI", recordMap);
		}
		
		//ACC-100039 수입지출외 현금 지출결의서내부결재 
		// ACC-100039 는 임시로 주석처리함. 주거복지처는 자금확정 안되는것으로 처리. 김승호 2016.09.12
		if( (/*"ACC-100039".equals(INNER_SANCTN_MDL_ID) ||*/ "ACC-100054".equals(INNER_SANCTN_MDL_ID)) && "S01".equals(LAST_SANCTN_STTUS) ){ // 승인
            
			if(sanctnInfo.containsKey("JOB_KEY")){
                
				StringTokenizer token = new StringTokenizer(JOB_KEY,"^");                
				if(token.hasMoreTokens()){
                    sanctnInfo.put("INNER_SANCTN_MDL_ID", token.nextToken());
                    sanctnInfo.put("OPERT_DE", token.nextToken());
                    sanctnInfo.put("SN", token.nextToken());
                }				
            }
			sanctnInfo.put("INNER_SANCTN_ID", INNER_SANCTN_ID);
			
            baseDao.update("ACC020503DAO.expndtrConfmU", sanctnInfo);
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