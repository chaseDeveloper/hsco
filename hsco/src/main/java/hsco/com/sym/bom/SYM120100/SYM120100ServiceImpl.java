package hsco.com.sym.bom.SYM120100;

import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM110100ServiceImpl.java
 * @Description  	: 배치작업관리
 * @author       	: 김지훈
 * @since        	: 2016. 03. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 03. 14.					김지훈			최초생성
 * </pre>  
 */
@Service("SYM120100Service")
public class SYM120100ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(SYM120100ServiceImpl.class);
	
	/**
	 * 배치작업 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBatchProc( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
//		System.out.println("===============================================");
//		System.out.println(inMap);
//		System.out.println("===============================================");
//		
		List <Map> records = (List<Map>)baseDao.list("SYM120100DAO.selectBatchProc", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
/**
 * 배치작업 스케줄 조회
 * @param tranInfo
 * @param inVar
 * @param inDataset
 * @param outVar
 * @param outDataset
 * @throws NexaServiceException
 */ 
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBatchSchdulList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
//		System.out.println("===============================================");
//		System.out.println(inMap);
//		System.out.println("===============================================");
		
		List <Map> records = (List<Map>)baseDao.list("SYM120100DAO.selectBatchSchdulList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	
	
	
/**
 * 배치작업 저장
 * @param tranInfo
 * @param inVar
 * @param inDataset
 * @param outVar
 * @param outDataset
 * @throws NexaServiceException
 */ 
@SuppressWarnings({ "rawtypes", "unchecked" })

public void saveBatchProc(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) {
	
	DataSetMap list1 = (DataSetMap) inDataset.get("input1");   // 배치작업
	DataSetMap list2 = (DataSetMap) inDataset.get("input2");   // 배치스케줄

	String batchOpertId   = ""; // 배치작업아이디   
	String batchSchdulId  = ""; // 배치스케줄아이디

	
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
			
			List <Map> records = (List<Map>)baseDao.list("SYM120100DAO.selectBatchOpertId", map); // 배치작업아이디 채번
			
			batchOpertId = records.get(0).get("BATCH_OPERT_ID").toString();
			
			map.put("BATCH_OPERT_ID", batchOpertId);
			
			baseDao.insert("SYM120100DAO.insertBatchOpert", map);
			
		}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
			
			baseDao.update("SYM120100DAO.updateBatchOpert", map);
			
		}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			
		    // 배치스케줄요일삭제
		    baseDao.delete("SYM120100DAO.clearBatchSchdulDay", map);	
		    
		    // 배치스케쥴삭제
		    baseDao.delete("SYM120100DAO.clearBatchSchdul", map);
		    
		    // 배치작업삭제
			baseDao.delete("SYM120100DAO.deleteBatchOpert", map);
		}
	  }
	
	
	
	for (int x = 0; x < list2.size(); x++) {
		
		Map map = list2.get(x);
		  
//		System.out.println("===========================================");
//		System.out.println(map);
//		System.out.println("===========================================");
		
		ArrayList<String> dayList = new ArrayList<String>();
		
		String executCycle = map.get("EXECUT_CYCLE").toString(); // 실행주기
		
	    if(map.get("CHK_SUN").toString().equals("1")){        // 일요일 
	    	dayList.add("1");
	    }
	    if(map.get("CHK_MON").toString().equals("1")){  // 월요일 
	    	dayList.add("2");
	    }
	    if(map.get("CHK_TUE").toString().equals("1")){  // 화요일 
	    	dayList.add("3");
	    }
	    if(map.get("CHK_WED").toString().equals("1")){  // 수요일 
	    	dayList.add("4");
	    }
	    if(map.get("CHK_THU").toString().equals("1")){  // 목요일 
	    	dayList.add("5");
	    }
	    if(map.get("CHK_FRI").toString().equals("1")){  // 금요일 
	    	dayList.add("6");
	    }
	    if(map.get("CHK_SAT").toString().equals("1")){  // 토요일 
	    	dayList.add("7");
	    }

		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		} 
					
		int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
		
		
		if ( rowType == DataSet.ROW_TYPE_INSERTED ){
			
			if(map.get("BATCH_OPERT_ID") == null){
			   map.put("BATCH_OPERT_ID", batchOpertId);	
			}
			map.put("SN", x + 1);
			
			List <Map> records = (List<Map>)baseDao.list("SYM120100DAO.selectBatchSchdulId", map); // 배치스케줄번호채번
			
			batchSchdulId = records.get(0).get("BATCH_SCHDUL_ID").toString();
			
			map.put("BATCH_SCHDUL_ID", batchSchdulId);
			
			baseDao.insert("SYM120100DAO.insertBatchSchdul", map);    // 배치스케줄저장
			
		   if(executCycle.equals("02")){ // 실행주기가 매주 일때 요일저장
			   
			   for(int i = 0 ; i < dayList.size() ; i ++ ){
				 
				 Map<String,String> dayMap = new HashMap<String,String>();
				 
				 dayMap.put("BATCH_SCHDUL_ID", map.get("BATCH_SCHDUL_ID").toString());
				 dayMap.put("EXECUT_SCHDUL_DAYWEK_SE",dayList.get(i));
				 
				 baseDao.insert("SYM120100DAO.insertBatchSchdulDay", dayMap); // 배치스케줄요일저장
				
			  }
			}
			
		}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
			
			baseDao.update("SYM120100DAO.updateBatchSchdul", map);    // 배치스케줄 업데이트
			
			if(executCycle.equals("02")){ // 실행주기가 매주 일때 요일업데이트
				
				baseDao.delete("SYM120100DAO.deleteBatchSchdulDay", map);  // 배치스케줄요일삭제
				
				// 삭제후 요일 다시저장
				for(int i = 0 ; i < dayList.size() ; i ++ ){
					 
					 Map<String,String> dayMap = new HashMap<String,String>();
					 
					 dayMap.put("BATCH_SCHDUL_ID", map.get("BATCH_SCHDUL_ID").toString());
					 dayMap.put("EXECUT_SCHDUL_DAYWEK_SE",dayList.get(i));
					 
					 baseDao.insert("SYM120100DAO.insertBatchSchdulDay", dayMap); // 배치스케줄요일저장
					
				  }
			}else{
				
				baseDao.delete("SYM120100DAO.deleteBatchSchdulDay", map);  // 배치스케줄요일삭제
			}
			
		}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			
			baseDao.delete("SYM120100DAO.deleteBatchSchdulDay", map);  // 배치스케줄요일삭제
			baseDao.delete("SYM120100DAO.deleteBatchSchdul", map);     // 배치스케줄삭제 
			
		}
	 }
	 
	    if(!batchOpertId.equals("")){
	    	   
			     // 결의번호 리턴
			    Map schmap = list1.get(0);
			    
			    schmap.put("BATCH_OPERT_ID", batchOpertId);
			    
//			    System.out.println("=====================================================");
//	 		    System.out.println(schmap);
//	 		    System.out.println("=====================================================");
			    
			    List <Map> returnRecode = (List<Map>)baseDao.list("SYM120100DAO.returnBatchOpertId", schmap);
	            
//			    System.out.println("=====================================================");
//	 		    System.out.println(returnRecode);
//	 		    System.out.println("=====================================================");
		
				DataSetMap outDsMap = new DataSetMap();
				outDsMap.setRowMaps(returnRecode);
				outDataset.put("output1", outDsMap);
			      
	    }
    }

/**
 * 배치작업관리 내부결재번호 저장
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
//		System.out.println("=====999999999999990000000000000000000000000====================");
//		System.out.println(map);
//		System.out.println("=====999999999999990000000000000000000000000====================");
		    
		// 세션정보 설정
		try {
			ObjectUtil.setUserToMap(map);
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		} 
					
        baseDao.update("SYM120100DAO.updateInnerSanctionId", map);
	
	
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
		      
//	    System.out.println("============================================================");
//	    System.out.println("%%%%%%12345" + inMap);
//	    System.out.println("============================================================");
	    
	    List <Map> returnRecode = (List <Map>) baseDao.list("SYM120100DAO.innerSanctnUbiDataset", inMap);				// 수입결의마스터
		
	    DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(returnRecode);
		outDataset.put("output1", outDsMap);
	  }
}
