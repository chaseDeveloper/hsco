package hsco.mis.hrm.HRM080304;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM080304
 * @Description     : 
 * @author          : 이수지
 * @since           : 2017. 06. 09.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2017 NanumIct, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 06. 09.         이수지            최초생성
 * </pre>  
 */

@Service("HRM080304Service")
public class HRM080304ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 전문위탁교육순위 목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEdcTargetRank(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080304DAO.selectEdcTargetRank", inMap));
		outDataset.put("output1", outDsMap);
	}

}
