package hsco.mis.ass.ASS010800;

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
 * @Class Name   	: SSA010400ServiceImpl.java
 * @Description  	: 
 * @author       	: 박태혁
 * @since        	: 2016. 9. 8.
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
@Service("ASS010800Service")
public class ASS010800ServiceImpl extends BaseService {
	
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
			

			records = (List<Map>)baseDao.list("ASS010800DAO.thngReciptPlanAcList", inMap);		
			
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
			

			records = (List<Map>)baseDao.list("ASS010800DAO.thngReciptPlanDetail", inMap);	
			records1 = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);	
			
			DataSetMap outDsMap = new DataSetMap();
			DataSetMap outDsMap1 = new DataSetMap();
			outDsMap.setRowMaps(records);
			outDsMap1.setRowMaps(records1);
			
			outDataset.put("output1", outDsMap);
			outDataset.put("output2", outDsMap1);
			
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
		public void thngReciptPlanExec(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			
				
			DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
			
			Map inMap = null;
			
			if (inDsMap != null)
				inMap = inDsMap.get(0);
			
			List <Map> records;
			List <Map> records1;
			

			records = (List<Map>)baseDao.list("ASS010800DAO.thngReciptPlanExec", inMap);	
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
			
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
		 * 물품수급계획 실행 CUD
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */
		@SuppressWarnings("rawtypes")
		public int thngReciptExecCUD(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
						
			int iRow = 0;
			
			// 물품수급계획 목록 CUD
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			int listSize = (list == null) ? 0 : list.size();
						
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("ASS010800DAO.thngReciptPlanExecC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ASS010800DAO.thngReciptPlanExecU", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("ASS010800DAO.thngReciptPlanExecD", map);
						break;				
				}					
			}						
			return iRow;		
		}
		
		/**
		 * 첨부파일 일련번호 생성 및 저장
		 * @param tranInfo
		 * @param inVar
		 * @param inDataset
		 * @param outVar
		 * @param outDataset
		 * @return
		 * @throws NexaServiceException
		 */	
	    @SuppressWarnings({ "rawtypes", "unchecked" })
	    
	    public void saveNewFileSn( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    	
	        // input Map get
	        DataSetMap list = (DataSetMap) inDataset.get("input1");
	        Map map = list.get(0);

	        // date get
	        SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMdd");
	        long curentTime = System.currentTimeMillis();

	        // FileSn calculate
	        String todayStr = sDateFormat.format(curentTime);
	        BigDecimal seqFileSn = (BigDecimal) baseDao.select("selectFileSn");
	        String strFileSn = todayStr + "" + seqFileSn;

	        // input FileSn
	        BigDecimal fileSn = new BigDecimal(strFileSn);
	        map.put("FILE_SN", fileSn);

	        // insert into File Master
	        baseDao.insert("insertAtchmnFileMast", map);

	        // update to Contract Master
	        baseDao.update("ASS010800DAO.updateNewFileSn", map);

	        // return Result Data (with FileSn)
	        DataSetMap outDsMap = new DataSetMap();
	        outDsMap.add(map);
	        outDataset.put("output1", outDsMap);
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
			
			List <Map> records = (List<Map>)baseDao.list("ASS010800DAO.atldManageList", inMap);		
			
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
			
			List <Map> records = (List<Map>)baseDao.list("ASS010800DAO.atldManageDetail", inMap);		
			
			DataSetMap outDsMap = new DataSetMap();
			outDsMap.setRowMaps(records);
			
			outDataset.put("output1", outDsMap);
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
			
			List <Map> records = (List<Map>)baseDao.list("ASS010800DAO.atldTrgetList", inMap);		
			
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
		@SuppressWarnings({ "rawtypes" })
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
						baseDao.insert("ASS010800DAO.atldManageC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ASS010800DAO.atldManageU", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("ASS010800DAO.atldManageD01", map);
						baseDao.delete("ASS010800DAO.atldManageD02", map);
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
						baseDao.insert("ASS010800DAO.atldManageDetailC", map);	
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ASS010800DAO.atldManageDetailU", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("ASS010800DAO.atldManageDetailD", map);
						break;
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
		@SuppressWarnings({ "rawtypes", "unchecked" })
		
		public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException { 					
		
			//int iRow = 0;
			
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			Map map = list.get(0);
			
			// 전자결재번호 조회
			String sanctnNO= (String) baseDao.select("ASS010800DAO.selectSanctnNO", map);			
			map.put("SANCTN_NO", sanctnNO);
			
			String se = (String)map.get("SE");
			
			if(se.equals("tpg1")){
				// 물품수급계획 전자결재번호 업데이트
				baseDao.update("ASS010800DAO.approveU01", map);
			} 
			else {
				// 불용계획 전자결재번호 업데이트
				baseDao.update("ASS010800DAO.approveU02", map);	
			}
			
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
	           //int cnt = Integer.parseInt((String)map.get("QY"));
	           //for (int y = 0; y < cnt; y++) {	        	   
	           //    baseDao.insert("ASS010800DAO.insertAssetsMastr", map);	// 자산대장 등록
	           //}
	           baseDao.insert("ASS010800DAO.insertAssetsMastr", map);	// 자산대장 등록
	           System.out.println("########## ASS010800DAO.registAtU start");
	           iRow += baseDao.update("ASS010800DAO.registAtU", map);	// 자산대장 등록여부 업데이트
	           System.out.println("########## ASS010800DAO.registAtU end");
	       }
	       return iRow;	
		
		}		
		
}
