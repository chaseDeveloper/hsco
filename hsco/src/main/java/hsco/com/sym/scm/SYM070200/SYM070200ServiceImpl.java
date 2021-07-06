package hsco.com.sym.scm.SYM070200;

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
* @Class Name   	: SYM070200ServiceImpl.java
* @Description  	: 연계메시지를 관리하는 서비스 구현체 클래스
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

@Service("SYM070200Service")
public class SYM070200ServiceImpl extends BaseService implements SYM070200Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM070200ServiceImpl.class);
	
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
	public void mssageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("MssageList called");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		

		records = (List<Map>)baseDao.list("SYM070200DAO.CntcMessageList", inMap);		

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 연계메시지/연계메시지항목 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int SYM070200CUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		
		int listSize = (list == null) ? 0 : list.size();
		int listSize2 = (list2 == null) ? 0 : list2.size();
		String cntcMssageId = "";
        if(listSize > 0) {
        	for (int x = 0; x < listSize; x++) {
				
    			Map map = list.get(x);
    			
    			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			
    			
    			switch(rowType) {
    				case DataSet.ROW_TYPE_INSERTED :
    					Map sqMap = (Map)baseDao.select("SYM070200DAO.CntcMessgeId", map);
    					cntcMssageId = (String)sqMap.get("CNTC_MSSAGE_ID");
    					map.put("CNTC_MSSAGE_ID", cntcMssageId);
    					baseDao.insert("SYM070200DAO.CntcMessageC", map);
    					break;
    				case DataSet.ROW_TYPE_UPDATED :
    					iRow += baseDao.update("SYM070200DAO.CntcMessageU", map);
    					break;
    				case DataSet.ROW_TYPE_DELETED :
    					iRow += baseDao.delete("SYM070200DAO.CntcMessageD", map);
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
    			    	if("".equals(map2.get("CNTC_MSSAGE_ID"))){
    			    		map2.put("CNTC_MSSAGE_ID", cntcMssageId);
    			    	}
    			    	baseDao.insert("SYM070200DAO.CntcMessageItemC", map2);
    			    	break;
    			    case DataSet.ROW_TYPE_UPDATED :
    			    	iRow += baseDao.update("SYM070200DAO.CntcMessageItemU", map2);
    			    	break;
    			    case DataSet.ROW_TYPE_DELETED :
    			    	iRow += baseDao.delete("SYM070200DAO.CntcMessageItemD", map2);
    			    	break;	
    			    default:
    			    	break;
    		    }	
    		}
        }
        
		return iRow;
		
	}
	
	/**
	 * 연계메시지/연계메시지항목 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int mssageItemCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list2 = (DataSetMap) inDataset.get("input1");
		
		int listSize2 = (list2 == null) ? 0 : list2.size();

        if(listSize2 > 0) {
        	for (int y = 0; y < listSize2; y++) {
    			Map map2 = list2.get(y);
    			int rowType2 = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			switch(rowType2) {
    			    case DataSet.ROW_TYPE_INSERTED :
    			    	baseDao.insert("SYM070200DAO.CntcMessageItemC", map2);
    			    	break;
    			    case DataSet.ROW_TYPE_UPDATED :
    			    	iRow += baseDao.update("SYM070200DAO.CntcMessageItemU", map2);
    			    	break;
    			    case DataSet.ROW_TYPE_DELETED :
    			    	iRow += baseDao.delete("SYM070200DAO.CntcMessageItemD", map2);
    			    	break;	
    			    default:
    			    	break;
    		    }	
    		}
        }
		return iRow;
		
	}
    
    
    /**
	 * 연계메시지항목 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void mssageItemList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		

		records = (List<Map>)baseDao.list("SYM070200DAO.CntcMessageItemList", inMap);		

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
}