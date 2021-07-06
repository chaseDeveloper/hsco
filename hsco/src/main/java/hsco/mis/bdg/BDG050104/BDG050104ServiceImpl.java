package hsco.mis.bdg.BDG050104;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : BDG050104ServiceImpl.java
 * @Description     : 
 * @author          : 김형태
 * @since           : 2018. 03. 16.
 * @version         : 1.0
 * @see             :
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 03. 16.                  김형태                최초생성
 * </pre>
 */
@Service("BDG050104Service")
public class BDG050104ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAcctoElpdExcutSttus(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		// 부서별조기집행현황
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG050104DAO.selectDeptAcctoElpdExcutSttus", inMap));
		outDataset.put("output1", outDsMap1);
		
		// 부서별조기집행현황
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG050104DAO.selectBsnsAcctoElpdExcutSttus", inMap));
		outDataset.put("output2", outDsMap2);
	}
}
