package hsco.pms.frm.FRM02020200;

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
 * @Class Name   	: FRM02020200ServiceImpl.java
 * @Description  	: 기타수입결의
 * @author       	: 김지훈
 * @since        	: 2016. 01. 21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 01. 20.					김지훈			최초생성
 * </pre>  
 */
@Service("FRM02020200Service")
public class FRM02020200ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 기타수입결의 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFrmEndwInDecsn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02020200DAO.selectFrmEndwInDecsn", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	/**
	 * 기타수입결의 전표조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFrmEndwChit( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02020200DAO.selectFrmEndwChit", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 기타수입결의 전표상세조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFrmEndwChitDetail( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02020200DAO.selectFrmEndwChitDetail", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


/**
 * 기타수입결의 저장
 * @param tranInfo
 * @param inVar
 * @param inDataset
 * @param outVar
 * @param outDataset
 * @throws NexaServiceException
 */ 
@SuppressWarnings({ "rawtypes" })

public void saveFrmEndwInDecsn(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) {
	
	DataSetMap list1 = (DataSetMap) inDataset.get("input1");   // 기타수입결의
	DataSetMap list2 = (DataSetMap) inDataset.get("input2");   // 전표기본
	DataSetMap list3 = (DataSetMap) inDataset.get("input3");   // 전표상세
	
	String descnNo = "0"; // 수입결의번호   
	String chitNo  = "0"; // 전표번호
	int    inRow = 0;     // 분개로우수 
	int    upRow = 0;     // 분개변경로우수
	
	for (int x = 0; x < list1.size(); x++) {
		Map map = list1.get(x);
		
		    
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		} 
					
		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
		
		
		if ( rowType == DataSet.ROW_TYPE_INSERTED ){		
			
			List <Map> records = (List<Map>)baseDao.list("FRM02020200DAO.selectDecsnNo", map); // 수입결의번호 채번
			
			descnNo = records.get(0).get("ENDW_INCME_DECSN_NO").toString();
			
			map.put("ENDW_INCME_DECSN_NO", descnNo);
			
			baseDao.insert("FRM02020200DAO.insertFrmEndwInDecsn", map);
			
		}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
			baseDao.update("FRM02020200DAO.updateFrmEndwInDecsn", map);
		}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			
		    // 전표상세삭제
		    baseDao.delete("FRM02020200DAO.clearFrmEndwChitDetail", map);	
		    
		    // 전표삭제
		    baseDao.delete("FRM02020200DAO.clearFrmEndwChit", map);
		    
		    //수입결의 삭제
			baseDao.delete("FRM02020200DAO.deleteFrmEndwInDecsn", map);
			
	    }
	  }
	
	
	// 기타수입결의 전표
	for (int x = 0; x < list2.size(); x++) {
		Map map = list2.get(x);
		
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		} 
					
		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
		
		
		if ( rowType == DataSet.ROW_TYPE_INSERTED ){
			
			if(map.get("ENDW_INCME_DECSN_NO") == null){
			   map.put("ENDW_INCME_DECSN_NO", descnNo);	
			}
			
			List <Map> records = (List<Map>)baseDao.list("FRM02020200DAO.selectChitNo", map); // 전표번호 채번
			chitNo = records.get(0).get("CHIT_NO").toString();
			
			map.put("CHIT_NO", chitNo);
			
			baseDao.insert("FRM02020200DAO.insertFrmEndwChit", map);
		}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
			baseDao.update("FRM02020200DAO.updateFrmEndwChit", map);
		}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			baseDao.delete("FRM02020200DAO.deleteFrmEndwChit", map);
			
		}
	 }
	 
	     // 0 : 변경무    1:추가    2:변경    3:삭제  inRow ROW_TYPE_NORMAL
	    
	     for(int x = 0; x < list3.size(); x++){
	        Map map = list3.get(x);
	        int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
	        if(rowType != DataSet.ROW_TYPE_DELETED) inRow = inRow + 1;
	        if(rowType != DataSet.ROW_TYPE_NORMAL)  upRow = upRow + 1;
	     }
	     
		    System.out.println("=====================================================");
 		    System.out.println(inRow +" / " + upRow);
 		    System.out.println("=====================================================");
	     if(upRow > 0){
	    	 
	    	 Map delmap = list3.get(0);
	    	 // 전표상세삭제
	    	 baseDao.delete("FRM02020200DAO.deleteFrmEndwChitDetail", delmap);
	    	 
	    	 if(inRow == 0){
	    		 
	    	     // 전표삭제
	    		 Map chitmap = list3.get(0);
		    
		    	 baseDao.delete("FRM02020200DAO.deleteFrmEndwChit",chitmap); 
	    		 
	    	 }else{
	    		 
	    	   // 기타수입결의 전표상세
				 		for (int x = 0; x < list3.size(); x++) {
				 			Map map = list3.get(x);
				 		    
				 			// 세션정보 설정
				 			try {
				 				ObjectUtil.setUserToMap(map);
				 			}
				 			catch( Exception e) {
				 				throw new NexaServiceException(e); 
				 			} 
				 			
				           
				 						
				 			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
		
				 		    
				 			if ( rowType != DataSet.ROW_TYPE_DELETED ){
				 				
				 			  if(map.get("CHIT_NO") == null){
				 					   map.put("CHIT_NO", chitNo);	
				 					}
				 				baseDao.insert("FRM02020200DAO.insertFrmEndwChitDetail", map);
				 			}
				 			
				 			
				 		  }
	 		
	        }
	    	 
	    	 
	     }
	   
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
	      
    System.out.println("============================================================");
    System.out.println("%%%%%%12345" + inMap);
    System.out.println("============================================================");
    
    List <Map> returnRecode = (List <Map>) baseDao.list("FRM02020200DAO.innerSanctnUbiDataset", inMap);				// 수입결의마스터
	
    DataSetMap outDsMap = new DataSetMap();
	outDsMap.setRowMaps(returnRecode);
	outDataset.put("output1", outDsMap);
  }


/**
 * 기타수입결의 내부결재번호 저장
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
					
        baseDao.update("FRM02020200DAO.updateInnerSanctionId", map);
	
	
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
	          DataSetMap dsSetMap = inDataset.get("input1");  
	          List<Map> list = dsSetMap.getRowMaps();
	          
	          int lsize = (list == null) ? 0 : list.size();
	          if(lsize > 0){
	            	  sanctnInfo = (Map)list.get(0);
	          }

	           String currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
	          	
	          	Map recordMap = null; 
	          	
	          	StringTokenizer st = new StringTokenizer(sanctnInfo.get("JOB_KEY").toString(),"^");
	          	
        		if(st.hasMoreTokens()){
        			recordMap = new HashMap<String, String>();
        			recordMap.put("ACCNUT_YEAR", st.nextToken());
        			recordMap.put("ENDW_INCME_DECSN_NO", st.nextToken());
        		}
	          	
        		recordMap.put("SANCTN_STTUS", currSanctionSttus);
        		
        		
        		// 세션정보 설정
        		try {
        			ObjectUtil.setUserToMap(recordMap);
        		}
        		catch( Exception e) {
        			throw new NexaServiceException(e); 
        		} 
        		
        		System.out.println("====================== 후처리클래스 ==================================");
        		System.out.println(recordMap);
        		System.out.println("=================================================================");
        		
                baseDao.update("FRM02020200DAO.updateSanctnSttus", recordMap);				//결재상태 업데이트
	        
	    }


}
