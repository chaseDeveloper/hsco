package hsco.mis.ass.ASS010500;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
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
 * @Class Name   	: ASS010500ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 18.	       이혜선		    최초생성
 * </pre>  
 */
@Service("ass010500Service")
public class ASS010500ServiceImpl extends BaseService {
	
	  protected Logger log = LoggerFactory.getLogger(this.getClass());
				
		
	    /**
		 * 취득물품(수급계획목록) 조회
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public void thngReciptPlanAcList(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
				
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			

			records = (List<Map>)baseDao.list("ASS010500DAO.thngReciptPlanAcList", inMap);		
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
		}

		/**
		 * 취득물품(수급계획상세) 조회
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
			

			records = (List<Map>)baseDao.list("ASS010500DAO.thngReciptPlanDetail", inMap);	
			records1 = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);	
			
			DataSetMap outDsMap = new DataSetMap();
			DataSetMap outDsMap1 = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDsMap1.setRowMaps(records1);
			
			outDataset.put("output1", outDsMap);
			outDataset.put("output2", outDsMap1);
			
		}
		
		/**
		 * 첨부파일 조회
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
	    public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
	        Map inMap = null;
	        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
	        if (inDsMap != null) {
	            inMap = inDsMap.get(0);
	        }
	        DataSetMap outDsMap = new DataSetMap();
	        outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
	        outDataset.put("output1", outDsMap);
	    }			

		/**
		 * 물품수급계획 CUD
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */
		@SuppressWarnings("rawtypes")
		public int thngReciptPlanCUD(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			
			int iRow = 0;
			
			// 물품수급계획 CUD
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			int listSize = (list == null) ? 0 : list.size();
			
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ASS010500DAO.thngReciptPlanDetailU", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						break;
				
				}	
				
			}
			
			list = (DataSetMap) inDataset.get("input2");
			
			listSize = (list == null) ? 0 : list.size();
			
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ASS010500DAO.thngReciptPlanU", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						break;
				
				}	
				
			}
			
			return iRow;
		
		}
		
		/**
		 * 불용품관리 목록을 조회한다.
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return void
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "unchecked", "rawtypes" })
		public void atldManageList(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null && inDsMap.size() > 0)
				inMap = inDsMap.get(0);
			
			List <Map> records = (List<Map>)baseDao.list("ASS010500DAO.atldManageList", inMap);		
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}
		
	    /**
		 * 불용품관리상세 목록을 조회한다.
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return void
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "unchecked", "rawtypes" })
		public void atldManageDetail(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null && inDsMap.size() > 0)
				inMap = inDsMap.get(0);
			
			List <Map> records = (List<Map>)baseDao.list("ASS010500DAO.atldManageDetail", inMap);		
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}		

		/**
		 *  불용품관리, 불용품관리상세 CUD
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return int
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "rawtypes", "unchecked" })
		public int atldManageCUD(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			int iRow = 0;
			
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			int listSize = (list == null) ? 0 : list.size();
			
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("ASS010500DAO.atldManageC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ASS010500DAO.atldManageU", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("ASS010500DAO.atldManageD01", map);
						baseDao.delete("ASS010500DAO.atldManageD02", map);
						break;
				}
			}
			
			list = (DataSetMap) inDataset.get("input2");
			
			listSize = (list == null) ? 0 : list.size();
			
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("ASS010500DAO.atldManageDetailC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ASS010500DAO.atldManageDetailU", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("ASS010500DAO.atldManageDetailD", map);
						break;
				}	
			}			
			return iRow;
		
		}
	
	    /**
		 * 불용품대상 목록을 조회한다.
		 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
		 * @return void
		 * @throws NexaServiceException
		 */
		@SuppressWarnings({ "unchecked", "rawtypes" })
		public void atldTrgetList(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null && inDsMap.size() > 0)
				inMap = inDsMap.get(0);
			
			List <Map> records = (List<Map>)baseDao.list("ASS010400DAO.atldTrgetList", inMap);		
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
		}		
}
