package hsco.mis.acc.ACC020503;

import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC020503ServiceImpl.java
 * @Description  	: 지출내역통보 관리하는 서비스 구현체 클래스
 * @author       	: 이상명
 * @since        	: 2015. 8. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 25.					이상명				최초생성
 * </pre>  
 */
@Service("ACC020503Service")
public class ACC020503ServiceImpl extends BaseService {

    protected Logger log = LoggerFactory.getLogger(ACC020503ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
     * 지출내역통보 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void incExpElseCashMastrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("incExpElseCashMastrList Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap = new DataSetMap();
		//DataSetMap outDsMap2 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
            inMap.put("INNER_SANCTN_MDL_ID","ACC-10051");
		}
		
		List <Map> records = (List<Map>)baseDao.list("ACC020503DAO.incExpElseCashMastrList", inMap);
		//List <Map> records2 = (List<Map>)baseDao.list("ACC020503DAO.incExpElseCashPrintList", inMap);
		
		outDsMap.setRowMaps(records);
		//outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap);
		//outDataset.put("output2", outDsMap2);
		
        DataSetMap outDsMap3 = new DataSetMap();
        outDsMap3.setRowMaps((List<Map>) baseDao.list("ACC020405DAO.selectSancNo", inMap));
        outDataset.put("output3", outDsMap3);
	}
    
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void incExpElseCashMastrPrintList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("incExpElseCashMastrPrintList Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		DataSetMap outDsMap2 = new DataSetMap();
		
		Map inMap = null;
		if (inDsMap != null && inDsMap.size() > 0) {
			inMap = inDsMap.get(0);
           
		}

		List <Map> records2 = (List<Map>)baseDao.list("ACC020503DAO.incExpElseCashPrintList", inMap);
		
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output2", outDsMap2);

	}
    
}
