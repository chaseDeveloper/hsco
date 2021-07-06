package hsco.com.sym.qzm.SYM140300;

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
 * &#64;Project Name    : 화성도시공사 차세대정보시스템
 * &#64;Class Name      : SYM140300ServiceImpl.java
 * &#64;Description     : 
 * &#64;author          : 권재만
 * &#64;since           : 2020. 06. 02.
 * &#64;version         : 1.0
 * &#64;see             : 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020. 06. 02.      권재만              최초생성(AUD040203소스와 동일)
 * </pre>
 */

@Service("SYM140300Service")
public class SYM140300ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 참여율/정답율그래프, 문항별통계그래프, 사원목록, 부서별그래프, 부서별목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

//		DataSetMap outDsMap = new DataSetMap();
//		outDsMap.setRowMaps((List<Map>) baseDao.list("SYM140300DAO.selectGraph", inMap));
//		outDataset.put("output1", outDsMap);
//		
//		outDsMap = new DataSetMap();
//		outDsMap.setRowMaps((List<Map>) baseDao.list("SYM140300DAO.selectGraph2", inMap));
//		outDataset.put("output2", outDsMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("SYM140300DAO.selectEmpList", inMap));
		outDataset.put("output3", outDsMap);

//		outDsMap = new DataSetMap();
//		outDsMap.setRowMaps((List<Map>) baseDao.list("SYM140300DAO.selectGraph3", inMap));
//		outDataset.put("output4", outDsMap);
//		
//		outDsMap = new DataSetMap();
//		outDsMap.setRowMaps((List<Map>) baseDao.list("SYM140300DAO.selectDeptSmList", inMap));
//		outDataset.put("output%", outDsMap);
	}
}
