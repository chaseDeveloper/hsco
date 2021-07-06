package hsco.mis.hrm.HRM010302;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM010302ServiceImpl.java
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
@Service("HRM010302Service")
public class HRM010302ServiceImpl extends BaseService implements HRM010302Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

    
    /**
	 * 개정일자 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPsncpaGrp( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		DataSetMap outDsMap = new DataSetMap();

		outDsMap.setRowMaps((List<Map>)baseDao.list("HRM010302DAO.selectPsncpaGrp",  inMap));
		
		outDataset.put("output1", outDsMap);

	}  
    
    /**
	 * 정현원대비표 직종부서/직종직급별 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPsncpaList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	Map<String, Object> commCodeMap = new HashMap<String, Object>();
    	Map<String, Object> commCodeMap2 = new HashMap<String, Object>();
    	
    	// 직종
    	commCodeMap.put("GRP_CODE", "HRM001");
    	commCodeMap2.put("jssfcList", baseDao.list("cmmCodeDAO.cmmCodeList", commCodeMap, false));

		// 직급
		commCodeMap.put("GRP_CODE", "HRM002");
		commCodeMap2.put("hrClsfList", baseDao.list("cmmCodeDAO.cmmCodeList", commCodeMap, false));
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		DataSetMap outDsMap = new DataSetMap();
		DataSetMap outDsMap1 = new DataSetMap();
		
		inMap.putAll(commCodeMap2);
		
		outDsMap.setRowMaps((List<Map>)baseDao.list("HRM010302DAO.selectPsncpaJssfcDeptList",  inMap));
		outDsMap1.setRowMaps((List<Map>)baseDao.list("HRM010302DAO.selectPsncpaJssfcHrClsfList", inMap));
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap1);
		
	}    

}