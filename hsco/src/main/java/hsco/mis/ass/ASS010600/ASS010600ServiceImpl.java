package hsco.mis.ass.ASS010600;

import java.util.List;
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


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SSA010600ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 15.	       이혜선		    최초생성
 * </pre>  
 */
@Service("ass010600Service")
public class ASS010600ServiceImpl extends BaseService {
	
	  protected Logger log = LoggerFactory.getLogger(this.getClass());
				
    
	    /**
		 * 물품수급계획결재 목록 조회
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void sanctnList(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
				
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			

			records = (List<Map>)baseDao.list("ASS010600DAO.sanctnList", inMap);		
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
		}

		/**
		 * 취득계획 결재 상세 목록 조회
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void thngReciptPlanDetail(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
				
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			List <Map> records1;
			

			records = (List<Map>)baseDao.list("ASS010600DAO.thngReciptPlanDetail", inMap);	
			records1 = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);	
			
			DataSetMap outDsMap = new DataSetMap();
			DataSetMap outDsMap1 = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDsMap1.setRowMaps(records1);
			
			outDataset.put("output1", outDsMap);
			outDataset.put("output2", outDsMap1);
			
		}	
		
		/**
		 * 취득계획 결재 상세 대상 목록 조회
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void sanctnList3(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
				
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			List <Map> records1;
			

			records = (List<Map>)baseDao.list("ASS010600DAO.thngReciptPlanDetail2", inMap);	
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
		}			
		
	    /**
		 * 취득계획 결재 목록 저장
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */
		@SuppressWarnings("rawtypes")
		public int sanctnListCUD1(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			
	       int iRow = 0;
	       DataSetMap list = (DataSetMap) inDataset.get("input1");
	       DataSetMap list2 = (DataSetMap) inDataset.get("input2");
	       
	       int listSize = (list == null) ? 0 : list.size();
	       int listSize2 = (list2 == null) ? 0 : list2.size();
	       
	       for (int y = 0; y < listSize2; y++) {
			  Map map2 = list2.get(y);
			  int rowType2 = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			  if(rowType2 == DataSet.ROW_TYPE_UPDATED) {
				  baseDao.update("ASS010600DAO.thngReciptPlanDetailU", map2);
			  }
           }
	       
	       for (int x = 0; x < listSize; x++) {
	           Map map = list.get(x);
	           
	           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
	           
	           if ( rowType == DataSet.ROW_TYPE_INSERTED ){
	        	   String pymntSn = (String) baseDao.select("ASS010600DAO.selectPymntSn", null);
	        	   
	        	   map.put("PLAN_SANCTN_SN", pymntSn);
	        	   
	               baseDao.update("ASS010600DAO.reciptPlanSanctnCU", map);
	               
	               /*물품수급상세 계획결재일련번호 업데이트*/							
	               for (int y = 0; y < listSize2; y++) {
					  Map map2 = list2.get(y);
					  
					  map2.put("PLAN_SANCTN_SN", pymntSn);
					  baseDao.update("ASS010600DAO.thngReciptPlanDetailU", map2);
	               }
	               
	           }else if (rowType == DataSet.ROW_TYPE_UPDATED){
	               baseDao.update("ASS010600DAO.reciptPlanSanctnCU", map);
	           }else if (rowType == DataSet.ROW_TYPE_DELETED){
	        	   baseDao.delete("ASS010600DAO.reciptPlanSanctnD", map);
	               baseDao.update("ASS010600DAO.thngReciptPlanDetailU2", map);
	           }else {
	        	   
	           }
	       }
	       
	       return iRow;	
		
		}
		
	    /**
		 * 불용품관리상세 목록을 조회한다.
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return void
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "unchecked", "rawtypes" })
		public void atldManageDetailList(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {			
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			List <Map> records1;
			

			records = (List<Map>)baseDao.list("ASS010600DAO.atldManageDetailList", inMap);	
			records1 = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);	
			
			DataSetMap outDsMap = new DataSetMap();
			DataSetMap outDsMap1 = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDsMap1.setRowMaps(records1);
			
			outDataset.put("output1", outDsMap);
			outDataset.put("output2", outDsMap1);			
		}	
		
	    /**
		 * 불용품관리상세 대상 목록을 조회한다.
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return void
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "unchecked", "rawtypes" })
		public void sanctnList4(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {			
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			

			records = (List<Map>)baseDao.list("ASS010600DAO.atldManageDetailList2", inMap);
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);	
		}			
		
		/**
		 *  불용계획 결재목록 CUD
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return int
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public int sanctnListCUD2(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
	       int iRow = 0;
	       DataSetMap list = (DataSetMap) inDataset.get("input1");
	       DataSetMap list2 = (DataSetMap) inDataset.get("input2");
	       
	       int listSize = (list == null) ? 0 : list.size();
	       int listSize2 = (list2 == null) ? 0 : list2.size();
	       
	       for (int x = 0; x < listSize; x++) {
	           Map map = list.get(x);
	           
	           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
	           
	           if ( rowType == DataSet.ROW_TYPE_INSERTED ){
	        	   String pymntSn = (String) baseDao.select("ASS010600DAO.selectPymntSn", null);
	        	   
	        	   map.put("PLAN_SANCTN_SN", pymntSn);
	        	   
	               baseDao.update("ASS010600DAO.reciptPlanSanctnCU", map);
	               
	               /*물품수급상세 계획결재일련번호 업데이트*/							
	               for (int y = 0; y < listSize2; y++) {
					  Map map2 = list2.get(y);
					  
					  map2.put("PLAN_SANCTN_SN", pymntSn);
					  baseDao.update("ASS010600DAO.atldManageDetailU", map2);
	               }
	               
	           }else if (rowType == DataSet.ROW_TYPE_UPDATED){
	               baseDao.update("ASS010600DAO.reciptPlanSanctnCU", map);
	               
	           }else if (rowType == DataSet.ROW_TYPE_DELETED){
	        	   baseDao.delete("ASS010600DAO.reciptPlanSanctnD", map);
	               baseDao.update("ASS010600DAO.atldManageDetailU2", map);
	           }
	       }
	       return iRow;	
		
		}

		/**
		 * 전자결재번호 저장
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */	
		@SuppressWarnings({ "rawtypes" })
		
		public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException { 					
		
			int iRow = 0;
			
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			Map map = list.get(0);
			
			// 전자결재번호 조회
			String sanctnNO= (String) baseDao.select("ASS010600DAO.selectSanctnNO", map);			
			map.put("SANCTN_NO", sanctnNO);
			
			String se = (String)map.get("SE");
			
			baseDao.update("ASS010600DAO.approveU01", map);
			
	        DataSetMap outDsMap = new DataSetMap();
	        outDsMap.add(map);
	        outDataset.put("output1", outDsMap);
	        
		}
		
		/**
		 * 자산대장 등록
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */
		@SuppressWarnings("rawtypes")
		public int insertAssetsMastr(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
	       int iRow = 0;
	       DataSetMap list = (DataSetMap) inDataset.get("input1");
	       
	       int listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	           Map map = list.get(x);
	           baseDao.insert("ASS010600DAO.insertAssetsMastr", map);	// 자산대장 등록
	           iRow += baseDao.update("ASS010600DAO.registAtU", map);	// 자산대장 등록여부 업데이트
	       }
	       return iRow;	
		
		}
}
