package hsco.com.sym.cdm.deptCode;

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
 * @Class Name   	: DeptCodeServiceImpl.java
 * @Description  	: 사원조회
 * @author       	: 이동석
 * @since        	: 2015. 6. 23.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 14.                   정윤원                최초생성
 * </pre>
 */

@Service("DeptCodeService")
public class DeptCodeServiceImpl extends BaseService implements DeptCodeService {
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public void selectDeptCode(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map<String, Object> inMap = null;
		DataSetMap inDsMap = inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		List<Map> records = (List<Map>) baseDao.list("DeptCodeDAO.selectDeptCode", inMap);
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}
