package hsco.com.sym.cdm.empNo;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: EmpNoServiceImpl.java
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
 *  2015. 6. 23.					이동석				최초생성
 * </pre>
 */

@Service("empnoService")
public class EmpNoServiceImpl extends EgovAbstractServiceImpl implements EmpNoService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "EmpNoDAO")
	private EmpNoDAO EmpNoDAO;

	public void get(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		if (log.isInfoEnabled()) {
			log.info("get called!");
		}
		selectEmpnoList(tranInfo, inVar, inDataset, outVar, outDataset);
	}

	@SuppressWarnings("unchecked")
	@Override
	public void selectEmpnoList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = inDataset.get("input1");
		Map<String, Object> inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		@SuppressWarnings("rawtypes")
		List<Map> records;
		if (inMap != null) {
			records = EmpNoDAO.selectEmpnoList(inMap);
		} else {
			records = EmpNoDAO.selectEmpnoList(inVar);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}
}
