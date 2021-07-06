package hsco.hpm.ctm.HPM070103;

import java.util.ArrayList;
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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HPM070103Controller.java
 * @Description  	: 실적현황
 * @author       	: 정 민
 * @since        	: 2017. 09. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 09. 08.					정 민			최초생성
 * </pre>  
 */

@Service("HPM070103Service")
public class HPM070103ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(HPM070103ServiceImpl.class);
	
	
    /**
	 * 실적현황 목록 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAcmsltSttusList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM070103DAO.selectAcmsltSttusList", inMap));
		outDataset.put("output1", outDsMap);
	}
   
    
    /**
	 * 통계현황 - 검색조건 시설구분 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectFcltsSe( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM070103DAO.selectFcltsSe", inMap));
		outDataset.put("output1", outDsMap);
	}
    
    
    /**
	 * 실적현황 목록 조회 (탭2)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAcmsltSttusListT02( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = new HashMap();
	    Map fcltsMap = new HashMap();
	    List<Map> list = new ArrayList<Map>();
		
        if (inDsMap != null) {
            inMap.putAll(inDsMap.get(0));
        }
	
        DataSetMap outDsMap = new DataSetMap();
        
        list = (List<Map>) baseDao.list("HPM070103DAO.selectFcltsSn", inMap);
        
        fcltsMap.put("fcltsList", list);
		inMap.putAll(fcltsMap);
		outDsMap.setRowMaps(list);
		outDataset.put("output1", outDsMap);
		
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("HPM070103DAO.selectAcmsltSttusListT02", inMap));
		outDataset.put("output2", outDsMap);
	}
   
}