package hsco.com.sym.ohm.SYM060300;

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
 
/**
* <pre>
* @Project Name 	: 화성도시공사 차세대정보시스템
* @Class Name   	: SYM060300ServiceImpl.java
* @Description  	: Q&A를 관리하는 서비스 구현체 클래스
* @author       	: 고진호
* @since        	: 2015.  1. 04.
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

@Service("SYM060300Service")
public class SYM060300ServiceImpl extends BaseService implements SYM060300Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM060300ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    

    
    /**
	 * Q&A 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void SYM060300List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("SYM060300List called");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM060300.HpcmQnaList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    
    /**
	 * 삭제할 Q&A 에 걸린 답변이 있는지 확인한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void hpcmQnaCnt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM060300.HpcmQnaCnt", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /**
	 * Q&A 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM060300CUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();

        if(listSize > 0) {
        	for (int x = 0; x < listSize; x++) {
				
    			Map map = list.get(x);
    			
    			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			
    			
    			switch(rowType) {
    				case DataSet.ROW_TYPE_INSERTED :
    					baseDao.insert("SYM060300.HpcmQnaC", map);
    					break;
    				case DataSet.ROW_TYPE_UPDATED :
    					iRow += baseDao.update("SYM060300.HpcmQnaU", map);
    					break;
    				case DataSet.ROW_TYPE_DELETED :
    					iRow += baseDao.delete("SYM060300.HpcmQnaU2", map);
    					break;
    			    default:
    			    	break;
    			}	
    			
    		}
        }
        
		return iRow;
		
	}
	
}