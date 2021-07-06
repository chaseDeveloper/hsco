package hsco.pms.frm.FRM02040200;

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
 * @Class Name   	: FRM02040200ServiceImpl.java
 * @Description  	: 조정분개
 * @author       	: 김지훈
 * @since        	: 2016. 02. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 02. 18.					김지훈			최초생성
 * </pre>  
 */
@Service("FRM02040200Service")
public class FRM02040200ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 전표내역조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectendwChitList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02040200DAO.selectendwChitList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 전표기본조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectChitMain( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02040200DAO.selectChitMain", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 전표상세조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectChitDetail( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("FRM02040200DAO.selectChitDetail", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	

/**
 * 전표 저장
 * @param tranInfo
 * @param inVar
 * @param inDataset
 * @param outVar
 * @param outDataset
 * @throws NexaServiceException
 */ 
@SuppressWarnings({ "rawtypes" })

public void saveChitList(DataSetMap tranInfo, Map<String, Object> inVar,
		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		Map<String, DataSetMap> outDataset) {
	
	DataSetMap list1 = (DataSetMap) inDataset.get("input1");   // 전표기본
	DataSetMap list2 = (DataSetMap) inDataset.get("input2");   // 전표상세


	String chitNo  = "0"; // 전표번호
	int    inRow = 0;     // 분개로우수 
	
	
	
	// 전표기본
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
			
			List <Map> records = (List<Map>)baseDao.list("FRM02040200DAO.selectChitNo", map); // 전표번호 채번
			chitNo = records.get(0).get("CHIT_NO").toString();
			
			map.put("CHIT_NO", chitNo);
			
			baseDao.insert("FRM02040200DAO.insertFrmEndwChit", map);
		}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
			//baseDao.update("FRM02040200DAO.updateFrmEndwChit", map);
		}else if(rowType == DataSet.ROW_TYPE_DELETED ){
			//baseDao.delete("FRM02040200DAO.deleteFrmEndwChit", map);
			
		}
	 }
	 
	     // 0 : 변경무    1:추가    2:변경    3:삭제  inRow ROW_TYPE_NORMAL
	    
	     for(int x = 0; x < list2.size(); x++){
	        Map map = list2.get(x);
	        int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
	        if(rowType != DataSet.ROW_TYPE_DELETED) inRow = inRow + 1;
	     }
	     
		    System.out.println("=====================================================");
 		    System.out.println(inRow);
 		    System.out.println("=====================================================");
 		    
 	 // 신규일경우 삭제하지않음
 		    
 	 if(chitNo.equals("0"))
 	   {   Map delmap = list2.get(0);
	    	 // 전표상세삭제
	       baseDao.delete("FRM02040200DAO.deleteFrmEndwChitDetail", delmap);
 	   }
 	 
 	  if(inRow > 0){
	    	 
	    	 for(int x = 0; x < list2.size(); x++)
	    	 {
	    		 Map map = list2.get(x);
		 		    
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
	 				
	 		    	 baseDao.insert("FRM02040200DAO.insertFrmEndwChitDetail", map);
	 		    	 
	 			   }
	    	   }
	        }
       }

}
