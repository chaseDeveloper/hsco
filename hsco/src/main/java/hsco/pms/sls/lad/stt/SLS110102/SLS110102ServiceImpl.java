package hsco.pms.sls.lad.stt.SLS110102;

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
 * @Class Name   	: SLS000100ServiceImpl.java
 * @Description  	: 토지공급현황 조회를 위한 Service
 * @author       	: 이인성
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2015. 6.11.		이인성			최초생성
 *  2015.09.24		이상준			Rework
 * </pre>  
 */

@Service("SLS110102Service")
public class SLS110102ServiceImpl extends BaseService implements SLS110102Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
		
    /**
     * 토지공급현황(분양/임대) 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
	public void selectLadSuplySttusList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		// 분양현황 목록
		List<Map> lttotList = (List<Map>)baseDao.list("SLS110102DAO.selectLadLttotSttusList", inMap);
		DataSetMap outLttotMap = new DataSetMap();
		outLttotMap.setRowMaps(lttotList);
		
		// 임대현황 목록
		List<Map> rentList = (List<Map>)baseDao.list("SLS110102DAO.selectLadRentSttusList", inMap);
		DataSetMap outRentMap = new DataSetMap();
		outRentMap.setRowMaps(rentList);

		outDataset.put("lttotList", outLttotMap);
		outDataset.put("rentList", outRentMap);
	}
    
    /**
     * 토지공급현황(분양/임대)상세 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({"unchecked","rawtypes"})
	public void selectLadSuplySttusDetailList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
    	Map inMap = null;
		if (inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		// 분양현황 목록
		List<Map> detailList = (List<Map>)baseDao.list("SLS110102DAO.selectLadSuplySttusDetailList", inMap);
		DataSetMap outDetailMap = new DataSetMap();
		outDetailMap.setRowMaps(detailList);

		outDataset.put("detailList", outDetailMap);
	}
}
