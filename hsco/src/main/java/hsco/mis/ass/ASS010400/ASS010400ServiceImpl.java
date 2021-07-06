package hsco.mis.ass.ASS010400;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

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
@Service("ass010400Service")
public class ASS010400ServiceImpl extends BaseService {
	
	  protected Logger log = LoggerFactory.getLogger(this.getClass());
				
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
			
			List <Map> records = (List<Map>)baseDao.list("ASS010400DAO.atldManageList", inMap);		
			
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
			
			List <Map> records = (List<Map>)baseDao.list("ASS010400DAO.atldManageDetail", inMap);		
			
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
			
			List <Map> records = (List<Map>)baseDao.list("ASS010400DAO.atldTrgetList", inMap);		
			
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
						baseDao.insert("ASS010400DAO.atldManageC", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ASS010400DAO.atldManageU", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("ASS010400DAO.atldManageD01", map);
						baseDao.delete("ASS010400DAO.atldManageD02", map);
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
						baseDao.insert("ASS010400DAO.atldManageDetailC", map);	
						break;
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ASS010400DAO.atldManageDetailU", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("ASS010400DAO.atldManageDetailD", map);
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
			String sanctnNO= (String) baseDao.select("ASS010400DAO.selectSanctnNO", map);			
			map.put("SANCTN_NO", sanctnNO);
			
			String se = (String)map.get("SE");
			
			if(se.equals("tpg1")){
				// 물품수급계획 전자결재번호 업데이트
				baseDao.update("ASS010400DAO.approveU01", map);
			} 
			else {
				// 불용계획 전자결재번호 업데이트
				baseDao.update("ASS010400DAO.approveU02", map);	
			}
			
	        DataSetMap outDsMap = new DataSetMap();
	        outDsMap.add(map);
	        outDataset.put("output1", outDsMap);
	        
		}	    
		
}
