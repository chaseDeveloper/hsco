package hsco.mis.sal.SAL030112;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL030112ServiceImpl.java
 * @Description  	: 월급여기본자료조회
 * @author       	: 이상명
 * @since        	: 2016. 3. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 31.					이상명				최초생성
 * </pre>  
 */

@Service("SAL030112Service")
public class SAL030112ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    
    /**
     * 지급공제항목 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPymntDdcIem( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
    	
    	if (inDsMap != null)
            inMap  = inDsMap.get(0);
       
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>)baseDao.list("SAL030112DAO.selectPymntDdcIem", inMap));
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**
	 * 월급여기본자료 목록조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMtSalaryPymntList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = new HashMap();
	    Map pymntDdcIemMap = new HashMap();
        
        if (inDsMap != null) {
            inMap.putAll(inDsMap.get(0));
        }
        
        pymntDdcIemMap.put("pymntDdcIemList", (List<Map>)baseDao.list("SAL030112DAO.selectPymntDdcIem", inMap));
		inMap.putAll(pymntDdcIemMap);
        
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL030112DAO.selectMtSalaryPymntList", inMap));
		
		outDataset.put("output1", outDsMap);
	}

}
