package hsco.com.sym.scm.SYM070300;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
 
/*
* <pre>
* @Project Name 	: 화성도시공사 차세대정보시스템
* @Class Name   	: SYM070300ServiceImpl.java
* @Description  	: 연계기관/시스템/서비스를 관리하는 서비스 구현체 클래스
* @author       	: 정윤원
* @since        	: 2015. 9. 04.
* @version      	: 1.0
* @see          	: 
* @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
* <pre>
* ------------------------------------------------------------------
* Modification Information 
* ------------------------------------------------------------------
*   작성일                        작성자                내용
* ------------------------------------------------------------------

* </pre>  
*/

@Service("SYM070300Service")
public class SYM070300ServiceImpl extends BaseService implements SYM070300Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM070300ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
	 * 연계메시지 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntcInsttList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("cntcInsttList called");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM070300DAO.CntcInsttList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		int listSize = (records == null) ? 0 : records.size();
		if(listSize>0){
			Map inMap2 = records.get(0);
			List <Map> records2;
			records2 = (List<Map>)baseDao.list("SYM070301DAO.CntcSysList", inMap2);
			DataSetMap outDsMap2 = new DataSetMap();
			outDsMap2.setRowMaps(records2);
			outDataset.put("output2", outDsMap2);
			
			int listSize2 = (records2 == null) ? 0 : records2.size();
			if(listSize2>0){
				Map inMap3 = records2.get(0);
				List <Map> records3;
				records3 = (List<Map>)baseDao.list("SYM070302DAO.CntcSvcList", inMap3);
				DataSetMap outDsMap3 = new DataSetMap();
				outDsMap3.setRowMaps(records3);
				outDataset.put("output3", outDsMap3);
			}
		}
	}
    
    /**
	 * 연계기관/시스템/메시지등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM070300CUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");
		
		int listSize = (list == null) ? 0 : list.size();
		int listSize2 = (list2 == null) ? 0 : list2.size();
		int listSize3 = (list3 == null) ? 0 : list3.size();

        if(listSize > 0) {
        	for (int x = 0; x < listSize; x++) {
				
    			Map map = list.get(x);
    			
    			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			
    			
    			switch(rowType) {
    				case DataSet.ROW_TYPE_INSERTED :
    					baseDao.insert("SYM070300DAO.CntcInsttC", map);
    					break;
    				case DataSet.ROW_TYPE_UPDATED :
    					iRow += baseDao.update("SYM070300DAO.CntcInsttU", map);
    					break;
    				case DataSet.ROW_TYPE_DELETED :
    					iRow += baseDao.delete("SYM070300DAO.CntcInsttD", map);
    					break;
    			    default:
    			    	break;
    			}	
    			
    		}
        }
        if(listSize2 > 0) {
        	for (int y = 0; y < listSize2; y++) {
    			Map map2 = list2.get(y);
    			int rowType2 = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			switch(rowType2) {
    			    case DataSet.ROW_TYPE_INSERTED :
    			    	baseDao.insert("SYM070301DAO.CntcSysC", map2);
    			    	break;
    			    case DataSet.ROW_TYPE_UPDATED :
    			    	iRow += baseDao.update("SYM070301DAO.CntcSysU", map2);
    			    	break;
    			    case DataSet.ROW_TYPE_DELETED :
    			    	iRow += baseDao.delete("SYM070301DAO.CntcSysD", map2);
    			    	break;	
    			    default:
    			    	break;
    		    }	
    		}
        }
        
        if(listSize3 > 0) {
        	for (int z = 0; z < listSize3; z++) {
    			Map map3 = list3.get(z);
    			int rowType3 = ((Integer) map3.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			switch(rowType3) {
    			    case DataSet.ROW_TYPE_INSERTED :
    			    	baseDao.insert("SYM070302DAO.CntcSvcC", map3);
    			    	break;
    			    case DataSet.ROW_TYPE_UPDATED :
    			    	iRow += baseDao.update("SYM070302DAO.CntcSvcU", map3);
    			    	break;
    			    case DataSet.ROW_TYPE_DELETED :
    			    	iRow += baseDao.delete("SYM070302DAO.CntcSvcD", map3);
    			    	break;	
    			    default:
    			    	break;
    		    }	
    		}
        }
        
		return iRow;
		
	}
	
	/**
	 * 연계 시스템/메시지등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM070301CUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
			
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");
		
		int listSize2 = (list2 == null) ? 0 : list2.size();
		int listSize3 = (list3 == null) ? 0 : list3.size();
		
        if(listSize2 > 0) {
        	for (int y = 0; y < listSize2; y++) {
    			Map map2 = list2.get(y);
    			int rowType2 = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			switch(rowType2) {
    			    case DataSet.ROW_TYPE_INSERTED :
    			    	baseDao.insert("SYM070301DAO.CntcSysC", map2);
    			    	break;
    			    case DataSet.ROW_TYPE_UPDATED :
    			    	iRow += baseDao.update("SYM070301DAO.CntcSysU", map2);
    			    	break;
    			    case DataSet.ROW_TYPE_DELETED :
    			    	iRow += baseDao.delete("SYM070301DAO.CntcSysD", map2);
    			    	break;
    			    default:
    			    	break;
    		    }	
    		}
        }
        
        if(listSize3 > 0) {
        	for (int z = 0; z < listSize3; z++) {
    			Map map3 = list3.get(z);
    			int rowType3 = ((Integer) map3.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			switch(rowType3) {
    			    case DataSet.ROW_TYPE_INSERTED :
    			    	baseDao.insert("SYM070302DAO.CntcSvcC", map3);
    			    	break;
    			    case DataSet.ROW_TYPE_UPDATED :
    			    	iRow += baseDao.update("SYM070302DAO.CntcSvcU", map3);
    			    	break;
    			    case DataSet.ROW_TYPE_DELETED :
    			    	iRow += baseDao.delete("SYM070302DAO.CntcSvcD", map3);
    			    	break;	
    			    default:
    			    	break;
    		    }	
    		}
        }
		return iRow;
		
	}
	
	/**
	 * 시스템별 연계 메시지등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM070302CUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
			
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");
		
		int listSize3 = (list3 == null) ? 0 : list3.size();
        
        if(listSize3 > 0) {
        	for (int z = 0; z < listSize3; z++) {
    			Map map3 = list3.get(z);
    			int rowType3 = ((Integer) map3.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			switch(rowType3) {
    			    case DataSet.ROW_TYPE_INSERTED :
    			    	baseDao.insert("SYM070302DAO.CntcSvcC", map3);
    			    	break;
    			    case DataSet.ROW_TYPE_UPDATED :
    			    	iRow += baseDao.update("SYM070302DAO.CntcSvcU", map3);
    			    	break;
    			    case DataSet.ROW_TYPE_DELETED :
    			    	iRow += baseDao.delete("SYM070302DAO.CntcSvcD", map3);
    			    	break;
    			    default:
    			    	break;
    		    }	
    		}
        }
		return iRow;
		
	}
    
    
    /**
	 * 연계서비스 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntcSysList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records2;
		records2 = (List<Map>)baseDao.list("SYM070301DAO.CntcSysList", inMap);
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);
		
		int listSize2 = (records2 == null) ? 0 : records2.size();
		if(listSize2>0){
			Map inMap3 = records2.get(0);
			List <Map> records3;
			records3 = (List<Map>)baseDao.list("SYM070302DAO.CntcSvcList", inMap3);
			DataSetMap outDsMap3 = new DataSetMap();
			outDsMap3.setRowMaps(records3);
			outDataset.put("output3", outDsMap3);
		}
		
	}
    
    /**
	 * 연계서비스별 연계메시지 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntcSvcList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM070302DAO.CntcSvcList", inMap);		

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output3", outDsMap);
		
	}
}