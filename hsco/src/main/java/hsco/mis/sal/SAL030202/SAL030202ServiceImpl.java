package hsco.mis.sal.SAL030202;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.mis.mis.MIS000000.MIS000000ServiceImpl;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL030102ServiceImpl.java
 * @Description  	: 사원별원별급여자료조회
 * @author       	: 정  민
 * @since        	: 2017. 4. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 4. 04.					정  민				최초생성
 * </pre>  
 */

@Service("SAL030202Service")
public class SAL030202ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    @Resource(name = "MIS000000Service")
    protected MIS000000ServiceImpl MIS000000Service;
    
    
    /**
     * 사원별월별급여집계 지급공제항목 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectPymntDdcIem( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = new HashMap();
    	
    	if (inDsMap != null)
            inMap  = inDsMap.get(0);
       
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>)baseDao.list("SAL030202DAO.selectPymntDdcIem", inMap));
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**
	 * 사원별월별급여집계 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmplMtSalarySmList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = new HashMap();
	    Map pymntDdcIemMap = new HashMap();

        if (inDsMap != null) {
            inMap.putAll(inDsMap.get(0));
        }
	
        pymntDdcIemMap.put("pymntDdcIemList", (List<Map>)baseDao.list("SAL030202DAO.selectPymntDdcIem", inMap));
		inMap.putAll(pymntDdcIemMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("SAL030202DAO.selectEmplMtSalarySmList", inMap));
		
		outDataset.put("output1", outDsMap);
		
	}
	
		
}
