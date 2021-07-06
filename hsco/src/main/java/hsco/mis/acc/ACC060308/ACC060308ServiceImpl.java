package hsco.mis.acc.ACC060308;

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
 * @Class Name   	: ACC060308ServiceImpl.java
 * @Description  	: 구분회계 현금흐름표 서비스 구현체 클래스
 * @author       	: 이수지
 * @since        	: 2016. 05. 24
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 05. 24.					이수지				최초생성
 * </pre>  
 */
@Service("ACC060308Service")
public class ACC060308ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC060308ServiceImpl.class);
    
    
    /**
	 * 구분회계 손익계산서
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void select( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("select Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records1;
        List <Map> records2;

        records1 = (List<Map>)baseDao.list("ACC060305DAO.selectSe", inMap); 
        if(inMap != null)
            inMap.put("seList", records1);
        records2 = (List<Map>)baseDao.list("ACC060308DAO.select", inMap);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records2);
        
        outDataset.put("output1", outDsMap);
		
	}
    
}
