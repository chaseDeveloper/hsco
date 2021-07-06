package hsco.hpm.ctm.HPM050101;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HPM050101ServiceImpl.java
 * @Description  	: 웹진관리
 * @author       	: 김지훈
 * @since        	: 2016. 04. 27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 04. 27.					김지훈			최초생성
 * </pre>  
 */
@Service("HPM050101Service")
public class HPM050101ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(HPM050101ServiceImpl.class);
	
	/**
	 * 웹진정보 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHpmWebzinList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("selectHpmWebzinList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("HPM050101DAO.selectHpmWebzinList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 웹진커버파일조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectHpmWebzinFile( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("HPM050101DAO.selectHpmWebzinFile", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	

		
	/**
	 * 웹진정보저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes" })
	
	public void saveHpmWebzinList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");   // 게시파 정보
		
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			} 
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				//System.out.println(map);
				baseDao.insert("HPM050101DAO.insertHpmWebzinList", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("HPM050101DAO.updateHpmWebzinList", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				
				baseDao.delete("HPM050101DAO.deleteHpmWebzinList", map);	
				
			}
		}
	
	}
	
	/**
	 * 웹진등록관리 내부결재번호 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	@SuppressWarnings({ "rawtypes" })
	
	public void saveInnerSanctionId(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");   

		
			Map map = list1.get(0);
			    
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			} 
						
	        baseDao.update("HPM050101DAO.updateInnerSanctionId", map);
	  }
	
	/**
	 * UBIREOPORT DATASET을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void innerSanctnUbiDataset( DataSetMap tranInfo, Map<String, Object> inVar,
	        Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	        Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    
	    DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
	    Map inMap = null;
	    if (inDsMap != null){
	        inMap = inDsMap.get(0);
	    }
	    
	    List <Map> returnRecode = (List <Map>) baseDao.list("HPM050101DAO.innerSanctnUbiDataset", inMap);
		
	    DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(returnRecode);
		outDataset.put("output1", outDsMap);
	  }
	
	/**
	 * 내부결재 후처리 메소드 (결재상태 저장)
	 * @param (Map sanctnInfo) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
	      log.info("postProcess called!");
	      Map sanctnInfo = null; 
	      DataSetMap dsSetMap = inDataset.get("input99");  
	      List<Map> list = dsSetMap.getRowMaps();
	      String currSanctionSttus = "";
	      int lsize = (list == null) ? 0 : list.size();
	      if(lsize > 0){
	        	  sanctnInfo = (Map)list.get(0);
	        	  currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
	      }
	       
	      	
	      	Map recordMap = null; 
	      	String jobKey = "";
	      	if(sanctnInfo != null){
	      		if(sanctnInfo.get("JOB_KEY") != null)
	      		    jobKey = (String)sanctnInfo.get("JOB_KEY");
	      	}
	      	StringTokenizer token = new StringTokenizer(jobKey,"^");
	      	recordMap = new HashMap<String, String>();
			if(token.hasMoreTokens()){
				recordMap.put("POPUP_ID", token.nextToken());
			}
	      	
			recordMap.put("SANCTN_STTUS", currSanctionSttus);
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(recordMap);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			}
			
			if("T12".equals(currSanctionSttus))
			{
				baseDao.update("HPM050101DAO.updateSanctnSttus", recordMap); 	
			}
	    
	}

}