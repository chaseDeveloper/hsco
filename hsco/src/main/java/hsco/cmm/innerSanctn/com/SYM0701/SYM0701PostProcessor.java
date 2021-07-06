package hsco.cmm.innerSanctn.com.SYM0701;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: COM0001PostProcessor.java
 * @Description  	: 시스템연계내부결재 후처리 테스트  클래스
 * @author       	: 정윤원
 * @since        	: 2015. 11. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------

 * </pre>  
 */
public class SYM0701PostProcessor {
	protected Logger log = LoggerFactory.getLogger(SYM0701PostProcessor.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    /**
	 * 내부결재 후처리 메소드
	 * @param (Map sanctnInfo) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({"rawtypes" })
	public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
          log.info("postProcess called!");
          Map sanctnInfo = null; 
          DataSetMap dsSetMap = inDataset.get("input99");  
          List<Map> list = dsSetMap.getRowMaps();
          
          int lsize = (list == null) ? 0 : list.size();
          if(lsize > 0){
            	  sanctnInfo = (Map)list.get(0);
          }
//          String mdlId = (String)sanctnInfo.get("INNER_SANCTN_MDL_ID");       
//          String posProcClass = (String)sanctnInfo.get("POSPROC_CLASS");
//          String posProcMethod = (String)sanctnInfo.get("POSPROC_OPRTIN_NM");
//          String pageUrl = (String)sanctnInfo.get("REQUEST_SCRIN_URL");        
//          String innerSantnId = (String)sanctnInfo.get("INNER_SANCTN_ID");
//          String userId = (String)sanctnInfo.get("USER_ID"); // 기안자 사번
//          String deptCode = (String)sanctnInfo.get("DEPT_CODE");  // 기안자 부서
//          String santnSj = (String)sanctnInfo.get("SANCTN_SJ"); // 내부결재제목
//          String currSanctionStep = (String)sanctnInfo.get("LAST_SANCTN_STEP"); // 최종결재단계
          String currSanctionSttus = "";
          if(sanctnInfo != null){
        	  if(sanctnInfo.get("LAST_SANCTN_STTUS")!= null)
                  currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
          }
          
//          String currSanctionerId = (String)sanctnInfo.get("LAST_SANCTNER_ID"); // 최종결재자ID
//          String sanctnDt = (String)sanctnInfo.get("LAST_SANCTN_DT"); // 최종결재일시
//          String nextSactionStep = (String)sanctnInfo.get("NEXT_SANCTN_STEP"); // 다음결재단계
//          String nextSactionerId = (String)sanctnInfo.get("NEXT_SANCTNER_ID"); // 다음결재자ID
//          String opinion = "";
//          String opinion2 = (String)sanctnInfo.get("OPINION"); // 다음결재자ID
        
          
          
          if("S01".equals(currSanctionSttus)){  // 기안중
        	  log.info("[기안중(S01)] 후처리 : PostProcessSysCntcSanctn()");
          	  postProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else if("S03".equals(currSanctionSttus)){  // 기안 완료
        	  log.info("[기안 완료(S03)] 후처리");
          	  //PostProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else if("T03".equals(currSanctionSttus)){ // 상신 완료
        	  log.info("[상신 완료(T03)] 후처리");
        	  //PostProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else if("T04".equals(currSanctionSttus)){ // 중결재 대기
        	  log.info("[중결재 대기(T04)] 후처리");
          	  //PostProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else if("T07".equals(currSanctionSttus)){ // 중결재 반려
        	  log.info("[중결재 반려(T07)] 후처리");
          	  //PostProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else if("T08".equals(currSanctionSttus)){ // 중결재 완료
        	  log.info("[중결재 완료(T08)] 후처리");
          	  //PostProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else if("T09".equals(currSanctionSttus)){ // 전결 대기
        	  log.info("[전결 대기(T09)] 후처리");
          	  //PostProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else if("T11".equals(currSanctionSttus)){ // 전결 반려
        	  log.info("[전결 반려(T11)] 후처리");
          	  //PostProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else if("T12".equals(currSanctionSttus)){ // 전결 완료        
        	  
        	  log.info("[전결 완료(T12)] 후처리 : PostProcessSysCntcSanctn()");
          	  postProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          	  
          } else if("T13".equals(currSanctionSttus)){ // 접수대기
        	  log.info("[접수대기(T13)] 후처리");
          	  //PostProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else if("T15".equals(currSanctionSttus)){ // 접수반려
        	  log.info("[접수반려(T15)] 후처리");
          	  //PostProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else if("T16".equals(currSanctionSttus)){ // 접수완료
        	  log.info("[접수반려(T16)] 접수완료");
          	  //PostProcessSysCntcSanctn(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          } else {
        	  log.info("후처리가 case가 아닙니다.");
          } 
        
    
     	log.info("hsco.cmm.innerSanctn.com.SYM0701.SYM0701PostProcessor.postProcess processed!");

        
    }
	
	/**
	 * 후처리 테스트용
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void postProcessSysCntcSanctn(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		//log.info("RUNNNING...PostProcessSysCntcSanctn()");
		if(baseDao == null) log.info("SYM0701PostProcessor : baseDao is null");
		
        Map sanctnInfo = null;
        DataSetMap list = (DataSetMap)inDataset.get("input99");
        int listSize = (list == null) ? 0 : list.size();
        //log.info("listSize==="+listSize);
		if (listSize > 0){
			sanctnInfo = list.get(0);
			String sanctionId = (String)sanctnInfo.get("INNER_SANCTN_ID");
			String currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
			if(sanctionId == null || "".equals(sanctionId)) 
				//log.info("SYM0701PostProcessor : INNER_SANCTN_ID is null");
			if("T12".equals(currSanctionSttus)){
				//log.info("T12T12T12T12T12");
				sanctnInfo.put("CONFM_AT", "1");
				baseDao.update("SYM070100DAO.SysCntcSanctnU", sanctnInfo);
			} else if("S01".equals(currSanctionSttus)){
				//log.info("S01S01S01S01S01S01");
				sanctnInfo.put("CONFM_AT", "0");
				baseDao.update("SYM070100DAO.SysCntcSanctnIdU", sanctnInfo);
			} else {
				//log.info("Other....");
			}
			//log.info("End:::"+iRow);
		} else{
			log.info("listSize === 0");
		}
		
		
	}
	
}