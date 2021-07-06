package hsco.mis.ctr.CTR060600;

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
 * @Class Name   	: CTR060600Service.java
 * @Description  	: 계약변경현황 조회하는 ServiceImpl 클래스 
 * @author       	: 김형태
 * @since        	: 2017. 08. 14.
 * @version      	: 1.0
 * @see          	: 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 08. 14.                  김형태              최초생성
 * </pre>  
 */
@Service("CTR060600Service")
public class CTR060600ServiceImpl extends BaseService implements CTR060600Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 계약변경현황
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectChangeSttusList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		// 계약변경현황
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("CTR060600DAO.cntrctChangeSttusList", inMap));
		outDataset.put("output1", outDsMap1);
		
		// 업체별변경현황
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("CTR060600DAO.entrpsChangeSttusList", inMap));
		outDataset.put("output2", outDsMap2);
		
		// 업체별계약보증변경현황
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("CTR060600DAO.selectEntrpsCntrctAssrncCha", inMap));
		outDataset.put("output3", outDsMap3);
	}
}