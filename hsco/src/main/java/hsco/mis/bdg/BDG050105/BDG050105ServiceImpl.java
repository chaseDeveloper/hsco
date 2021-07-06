package hsco.mis.bdg.BDG050105;

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
 * @Class Name      : BDG050105ServiceImpl.java
 * @Description     : 
 * @author          : 김형태
 * @since           : 2018. 04. 26.
 * @version         : 1.0
 * @see             :
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 04. 26.                  김형태                최초생성
 * </pre>
 */
@Service("BDG050105Service")
public class BDG050105ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectExcutTrgetSttus(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		// 집행대상부서
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("BDG050105DAO.selectDept", inMap));
		outDataset.put("output1", outDsMap1);
		
		// 집행대상현황
		int size = outDsMap1.size();
		String[] DEPT_LIST;
		DEPT_LIST = new String[size];
		for(int i = 0; i < size; i++) {
			Map dMap = outDsMap1.get(i);
			String deptCode = dMap.get("DEPT_CODE").toString();
			DEPT_LIST[i] = deptCode;
		}
		inMap.put("DEPT_LIST", DEPT_LIST);
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("BDG050105DAO.selectExcutTrgetSttus", inMap));
		outDataset.put("output2", outDsMap2);
	}
}
