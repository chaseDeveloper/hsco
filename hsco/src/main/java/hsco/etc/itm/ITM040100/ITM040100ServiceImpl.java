package hsco.etc.itm.ITM040100;

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
 * @Class Name   	: ITM040100ServiceImpl.java
 * @Description  	: 월점검항목을 관리하는 컨트롤러 클래스
 * @author       	: 이호준
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
 *  2015. 6. 9.			  이호준			최초생성
 * </pre>  
 */

@Service("ITM040100Service")
public class ITM040100ServiceImpl extends BaseService implements ITM040100Service {
	
	protected Logger log = LoggerFactory.getLogger(ITM040100ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /** 월점검항목을 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked"})
	public void ITM040100List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("ITM040100List Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ITM040100DAO.ITM040100List", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}
    /** IT분류코드를 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked"})
    public void ITM040100ITList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        

        records = (List<Map>)baseDao.list("ITM040100DAO.ITM040100ITList", inMap);     
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);        
    }
    
    /** 월점검항목을 신규,수정,삭제 */
    @SuppressWarnings({ "rawtypes" })
    
    public int ITM040100CUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
                    baseDao.insert("ITM040100DAO.ITM040100C", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("ITM040100DAO.ITM040100U", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("ITM040100DAO.ITM040100D", map);
                    break;
			    default:
			    	break;
            }   
            
        }
        
        return iRow;
        
    }    

}
