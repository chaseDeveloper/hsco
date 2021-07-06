package hsco.mis.acc.ACC050407;

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
 * @Class Name   	: ACC050407Service.java
 * @Description  	: 가동설비자산명세서를 조회하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 11. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 11.	이수지		최초생성
 * </pre>  
 */
@Service("ACC050407Service")
public class ACC050407ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC050407ServiceImpl.class);
	
	
	/**
	 * 가동설비자산명세서 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void assAssetsMassterList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
		if(log.isInfoEnabled()) log.info("assAssetsMassterList Started!");
		
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC050407DAO.assAssetsMassterList", inMap));
        outDataset.put("output1", outDsMap);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("ACC050407DAO.assAssetsMassterList2", inMap));
        outDataset.put("output2", outDsMap2);
        
        DataSetMap outDsMap3 = new DataSetMap();
        outDsMap3.setRowMaps((List<Map>) baseDao.list("ACC050407DAO.assAssetsCLMassterList", inMap));
        outDataset.put("output3", outDsMap3);
        
        DataSetMap outDsMap4 = new DataSetMap();
        outDsMap4.setRowMaps((List<Map>) baseDao.list("ACC050407DAO.select", inMap));
        outDataset.put("output4", outDsMap4);
	}
}