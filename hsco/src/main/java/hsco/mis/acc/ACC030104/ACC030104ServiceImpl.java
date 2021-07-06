package hsco.mis.acc.ACC030104;

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
 * @Class Name   	: ACC030104ServiceImpl.java
 * @Description  	: 세금계산서합계표를 조회하는 서비스 구현체 클래스
 * @author       	: 이수지
 * @since        	: 2015. 12. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 24.			이수지				최초생성
 * </pre>  
 */
@Service("ACC030104Service")
public class ACC030104ServiceImpl extends BaseService {

    protected Logger log = LoggerFactory.getLogger(ACC030104ServiceImpl.class);
    
    
    /**
     * 세금관리서
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void taxbilSum( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("taxbilSum Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
		}
		
		List <Map> records = (List<Map>)baseDao.list("ACC030104DAO.taxbilSum", inMap);		
		outDsMap1.setRowMaps(records);
		outDataset.put("output1", outDsMap1);
		
		List <Map> records2 = (List<Map>)baseDao.list("ACC030104DAO.taxbilDt", inMap);		
		outDsMap2.setRowMaps(records2);
		outDataset.put("output2", outDsMap2);
		
		List <Map> records3 = (List<Map>)baseDao.list("ACC030104DAO.paperTaxbilDt", inMap);		
		outDsMap3.setRowMaps(records3);
		outDataset.put("output3", outDsMap3);
	}
}