package hsco.pms.rnt.lrm.RNT040308;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.file.FileUploadServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;
import hsco.cmm.util.StringUtil;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT040308ServiceImpl.java
 * @Description  	: 장기수선관리
 * @author       	: 김선진
 * @since        	: 2016. 12. 01.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  
 * </pre>  
 */

@Service("RNT040308Service")
public class RNT040308ServiceImpl extends BaseService implements RNT040308Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
 
    @SuppressWarnings("rawtypes")
	public void selectRequest(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}		
		
		List <Map> records;

		
		
		records = (List<Map>)baseDao.list("RNT040308DAO.selectRequest", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    
    /** 장기수선관리를 신규,수정,삭제 */
	@SuppressWarnings({ "rawtypes" })
	public int requestCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("RNT040308DAO.requestC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("RNT040308DAO.requestU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("RNT040308DAO.requestD", map);
					break;
			    default:
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
					baseDao.insert("RNT040308DAO.planC", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("RNT040308DAO.planD", map);
					break;
			    default:
			    	break;
				}	
			
			}
		
		
		list = (DataSetMap) inDataset.get("input3");
		
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("RNT040308DAO.exeC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("RNT040308DAO.exeU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("RNT040308DAO.exeD", map);
					break;
			    default:
			    	break;
				}	
			
			}
		

		
			return iRow;
	}
	
	
	@SuppressWarnings("rawtypes")
	public void selectPlan(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}		
		
		List <Map> records;

		
		
		records = (List<Map>)baseDao.list("RNT040308DAO.selectPlan", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	
	@SuppressWarnings("rawtypes")
	public void selectExecut(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}		
		
		List <Map> records;

		
		
		records = (List<Map>)baseDao.list("RNT040308DAO.selectExecut", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	
	@SuppressWarnings("rawtypes")
	public void getListP(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT040308DAO.getListP", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	
	@SuppressWarnings("rawtypes")
	public void houseDongP(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("RNT040308DAO.houseDongP", inMap);		
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	@SuppressWarnings("rawtypes")
	public void copyPlan(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.insert("RNT040308DAO.copyPlan", inMap);		
	
	}

	 /** 장기수선 실행 등록 */
		@SuppressWarnings({ "rawtypes" })
		
		public void executC(DataSetMap tranInfo, Map<String, Object> inVar,
				Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
				Map<String, DataSetMap> outDataset) throws NexaServiceException {
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);
				
				String cntrctr_no = (String)baseDao.select("RNT040308DAO.getCNTRCTRNO", map);
				map.put("CNTRCTR_NO", cntrctr_no);
				
				String bcnc_code = (String)baseDao.select("RNT040308DAO.getBcncCode", map);
				map.put("BCNC_CODE",  bcnc_code);				
				
				baseDao.insert("RNT040308DAO.exeC", map);
				}
	  
		}
	
}