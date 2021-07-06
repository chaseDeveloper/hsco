package hsco.mis.hrm.HRM010409T02;

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
 * @Class Name   	: HRM010409T02ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.		박병일			최초생성
 *  2015.10.28.     박병일                   표준적용    
 * </pre>  
 */
@Service("HRM010409T02Service")
public class HRM010409T02ServiceImpl extends BaseService implements HRM010409T02Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;   
    
    /**
	 * 미추천자을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void mainSearchList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		List <Map> records;
		
		records = (List<Map>)baseDao.list("HRM010409T02DAO.mainSearchList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /**
	 * 미추천자 신규,수정,삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int mainCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.insert("HRM010409T02DAO.mainC", map);		
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					break;			
			}				
		}		
		return iRow;		
	}
	
	/**
     * 직무지원 미신청자 추천
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return int
     * @throws NexaServiceException
     */
    
    @SuppressWarnings({ "rawtypes" })
    public void mainC(DataSetMap tranInfo, 
    		Map<String, Object> inVar, Map<String, DataSetMap> inDataset, 
    		Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			baseDao.update("HRM010409T02DAO.mainC", map);		
		}
    }
}