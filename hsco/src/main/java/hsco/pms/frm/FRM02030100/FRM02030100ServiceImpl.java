package hsco.pms.frm.FRM02030100;

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
 * @Class Name   	: FRM02030100ServiceImpl.java
 * @Description  	: 지출결의
 * @author       	: 김지훈
 * @since        	: 2016. 02. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 02. 02.					김지훈			최초생성
 * </pre>  
 */
@Service("FRM02030100Service")
public class FRM02030100ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 지출결의 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFrmEndwExpndtrDecsn( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02030100DAO.selectFrmEndwExpndtrDecsn", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	

/**
 * 지출결의 저장
 * @param tranInfo
 * @param inVar
 * @param inDataset
 * @param outVar
 * @param outDataset
 * @throws NexaServiceException
 */ 
@SuppressWarnings({ "rawtypes" })

public void saveFrmEndwExpndtrDecsn(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) {
	
	DataSetMap list1 = (DataSetMap) inDataset.get("input1");   // 지출결의
	DataSetMap list2 = (DataSetMap) inDataset.get("input2");   // 전표기본
	DataSetMap list3 = (DataSetMap) inDataset.get("input3");   // 전표상세
	
	String descnNo = "0"; // 지출결의번호   
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
			
			List <Map> records = (List<Map>)baseDao.list("FRM02030100DAO.selectDecsnNo", map); // 지출결의번호 채번
			
			descnNo = records.get(0).get("ENDW_EXPNDTR_DECSN_NO").toString();
			
			map.put("ENDW_EXPNDTR_DECSN_NO", descnNo);
			
			baseDao.insert("FRM02030100DAO.insertFrmEndwExpndtrDecsn", map);
			
		}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
			baseDao.update("FRM02030100DAO.updateFrmEndwExpndtrDecsn", map);
		}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			
		    // 전표상세삭제
		    baseDao.delete("FRM02030100DAO.clearFrmEndwChitDetail", map);	
		    
		    // 전표삭제
		    baseDao.delete("FRM02030100DAO.clearFrmEndwChit", map);
		    
		    //수입결의 삭제
			baseDao.delete("FRM02030100DAO.deleteFrmEndwExpndtrDecsn", map);
			
	    }
	  }
	
	
	// 지출결의 전표
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
			
			if(map.get("ENDW_EXPNDTR_DECSN_NO") == null){
			   map.put("ENDW_EXPNDTR_DECSN_NO", descnNo);	
			}
			
			List <Map> records = (List<Map>)baseDao.list("FRM02030100DAO.selectChitNo", map); // 전표번호 채번
			chitNo = records.get(0).get("CHIT_NO").toString();
			
			map.put("CHIT_NO", chitNo);
			
			baseDao.insert("FRM02030100DAO.insertFrmEndwChit", map);
		}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
			baseDao.update("FRM02030100DAO.updateFrmEndwChit", map);
		}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			baseDao.delete("FRM02030100DAO.deleteFrmEndwChit", map);
			
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
 		    System.out.println(inRow);
 		    System.out.println("=====================================================");
	     if(upRow > 0){
	    	 
	    	 Map delmap = list3.get(0);
	    	 // 전표상세삭제
	    	 baseDao.delete("FRM02030100DAO.deleteFrmEndwChitDetail", delmap);
	    	 
	    	 if(inRow == 0){
	    		 
	    	     // 전표삭제
	    		 Map chitmap = list3.get(0);
	    		 
	    		 baseDao.update("FRM02030100DAO.updateExpndtrDecsnDelngTyCd",chitmap); // 거래유형 초기화 
		    	 baseDao.delete("FRM02030100DAO.deleteFrmEndwChit",chitmap); 
	    		 
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
				 				baseDao.insert("FRM02030100DAO.insertFrmEndwChitDetail", map);
				 			}
				 			
				 			
				 		  }
	 		
	       }
	    	 
	    	 
	     }
	   
	    if(!descnNo.equals("0")){
	    	   
			     // 결의번호 리턴
			    Map schmap = list1.get(0);
			    
			    schmap.put("ENDW_EXPNDTR_DECSN_NO", descnNo);
			    
			    System.out.println("=====================================================");
	 		    System.out.println(schmap);
	 		    System.out.println("=====================================================");
			    
			    List <Map> returnRecode = (List<Map>)baseDao.list("FRM02030100DAO.returndescnNo", schmap);
	            
			    System.out.println("=====================================================");
	 		    System.out.println(returnRecode);
	 		    System.out.println("=====================================================");
		
				DataSetMap outDsMap = new DataSetMap();
				outDsMap.setRowMaps(returnRecode);
				outDataset.put("output1", outDsMap);
			      
	    }
    }

/**
 * 지출결의 전표조회
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
	List <Map> records = (List<Map>)baseDao.list("FRM02030100DAO.selectFrmEndwChit", inMap);
	DataSetMap outDsMap = new DataSetMap();
	outDsMap.setRowMaps(records);
	outDataset.put("output1", outDsMap);
  }

/**
 * 지출결의 전표상세조회
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
	List <Map> records = (List<Map>)baseDao.list("FRM02030100DAO.selectFrmEndwChitDetail", inMap);
	DataSetMap outDsMap = new DataSetMap();
	outDsMap.setRowMaps(records);
	outDataset.put("output1", outDsMap);
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
System.out.println("%%%%%%" + inMap);
System.out.println("============================================================");

List <Map> returnRecode = (List <Map>) baseDao.list("FRM02030100DAO.innerSanctnUbiDataset", inMap);				// 지출결의마스터

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
				
    baseDao.update("FRM02030100DAO.updateInnerSanctionId", map);


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
    			recordMap.put("ENDW_EXPNDTR_DECSN_NO", st.nextToken());
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
    		
            baseDao.update("FRM02030100DAO.updateSanctnSttus", recordMap);				//결재상태 업데이트
        
    }
	
}
