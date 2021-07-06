package hsco.cmm.innerSanctn.com.COM0001;

import java.util.HashMap;
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
 * @Description  	: 후처리 테스트  클래스
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
public class COM0001PostProcessor {
	protected Logger log = LoggerFactory.getLogger(COM0001PostProcessor.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    /**
	 * 내부결재 후처리 메소드
	 * @param (Map sanctnInfo) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		/*
		 public void postProcess(BaseDao baseDao, Map sanctionInfo, DataSetMap> outDataset) throws NexaServiceException {
		 */
          log.info("postProcess called!");
          Map sanctnInfo = new HashMap(); 
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
          if(sanctnInfo.get("LAST_SANCTN_STTUS")!= null)
              currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
//          String currSanctionerId = (String)sanctnInfo.get("LAST_SANCTNER_ID"); // 최종결재자ID
//          String sanctnDt = (String)sanctnInfo.get("LAST_SANCTN_DT"); // 최종결재일시
//          String nextSactionStep = (String)sanctnInfo.get("NEXT_SANCTN_STEP"); // 다음결재단계
//          String nextSactionerId = (String)sanctnInfo.get("NEXT_SANCTNER_ID"); // 다음결재자ID
//          String opinion = "";
//          String opinion2 = (String)sanctnInfo.get("OPINION"); // 다음결재자ID
        
          
          
          if("S03".equals(currSanctionSttus)){  // 기안 완료
          	log.info("[기안 완료(S03)] 후처리");
          	// 테스트 용 sql 처리 (cud를 조회로 대체) 
          	
          } else if("T03".equals(currSanctionSttus)){ // 상신 완료
          	log.info("[상신 완료(T03)] 후처리");
          } else if("T04".equals(currSanctionSttus)){ // 중결재 대기
          	log.info("[중결재 대기(T04)] 후처리");
//          	if(sanctnInfo == null) log.info("sanctnInfo is null");
//          	if(outDataset == null) log.info("outDataset is null");
//          	if(baseDao == null) log.info("baseDao is null");
          	
          	
          	postProcessTest(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
          	//PostProcessTest2(baseDao, sanctionInfo, outDataset);

        
          	
          	
          } else if("T07".equals(currSanctionSttus)){ // 중결재 반려
          	log.info("[중결재 반려(T07)] 후처리");
          	
          } else if("T08".equals(currSanctionSttus)){ // 중결재 완료
          	log.info("[중결재 완료(T08)] 후처리");
          	
          } else if("T09".equals(currSanctionSttus)){ // 전결 대기
          	log.info("[전결 대기(T09)] 후처리");
          	
          } else if("T11".equals(currSanctionSttus)){ // 전결 반려
          	log.info("[전결 반려(T11)] 후처리");
          	
          } else if("T12".equals(currSanctionSttus)){ // 전결 완료
          	 // 테스트 용 sql 처리 (cud를 조회로 대체)
        	  postProcessTest(baseDao, tranInfo, inVar, inDataset, outVar, outDataset);
        	//postProcessTest2(baseDao, sanctionInfo, outDataset);
         
          	log.info("[전결 완료(T11)] 후처리");
          	
          } else if("T13".equals(currSanctionSttus)){ // 접수대기
          	log.info("[접수대기(T13)] 후처리");
          	
          } else if("T15".equals(currSanctionSttus)){ // 접수반려
          	log.info("[접수반려(T15)] 후처리");
          	
          } else if("T16".equals(currSanctionSttus)){ // 접수완료
          	log.info("[접수반려(T16)] 접수완료");
          	
          } else {
          	log.info("후처리가 case가 아닙니다.");
          } 
        
    
     	log.info("hsco.cmm.innerSanctn.com.PostProcessCom001.postProcess processed!");

        
    }
	
	/**
	 * 후처리 테스트용
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void postProcessTest(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input99");
		Map sanctnInfo = null;
		
		if (inDsMap != null)
			sanctnInfo = inDsMap.get(0);

		List <Map> records99;
		if(sanctnInfo == null){
			throw new NexaServiceException("info.정보.없음", "결재정보");
		} else {
			records99 = (List<Map>) baseDao.list("SYM090201DAO.SanctionMasterInfo", sanctnInfo);
			DataSetMap outDsMap99 = new DataSetMap();
	     	outDsMap99.setRowMaps(records99);
	     	outDataset.put("output99", outDsMap99);
		}
     	
	}
	
	/**
	 * 후처리 테스트용
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void postProcessTest2(BaseDao baseDao, Map sanctnInfo, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
		List <Map> records9;
		//if(baseDao == null) log.info("SYM090200Test : baseDao is null");
		if(sanctnInfo == null){
			throw new NexaServiceException("info.정보.없음", "결재정보");
		} else {
			records9 = (List<Map>) baseDao.list("SYM090201DAO.SanctionMasterInfo", sanctnInfo);
	     	DataSetMap outDsMap9 = new DataSetMap();
	     	outDsMap9.setRowMaps(records9);
	     	outDataset.put("output9", outDsMap9);
		}
     	
	}
	
	
}