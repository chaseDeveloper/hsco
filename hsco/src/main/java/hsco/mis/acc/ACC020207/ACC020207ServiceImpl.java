package hsco.mis.acc.ACC020207;

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
 * @Class Name   	: ACC020207ServiceImpl.java
 * @Description  	: 지출결의이력을 관리하는 ServiceImpl 클래스 
 * @author       	: 권재만
 * @since        	: 2020. 05. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020. 05. 26.	권재만		최초생성
 * </pre>  
 */
@Service("ACC020207Service")
public class ACC020207ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(ACC020207ServiceImpl.class);
	
	
	/**
	 * 지출결의 목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void wikCptalPlanList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC020207DAO.wikCptalPlanList", inMap));
        
        outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 지출결의 이력 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectExpDsnMastrHist(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        
        outDsMap1.setRowMaps((List<Map>) baseDao.list("ACC020207DAO.selectExpDsnMastrHist", inMap));  //지출결의 이력(마스터) 조회
        outDsMap2.setRowMaps((List<Map>) baseDao.list("ACC020207DAO.selectExpDsnMtrDetHist", inMap)); //지출결의 이력(디테일) 조회
        
        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
	}
	
}