package hsco.mis.hrm.HRM070126;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.dao.BatchDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * 
 * @Project Name : 초과근무시간관리
 * @Class Name : HRM070126ServiceImpl.java
 * @Description : 초과근무시간관리
 * @author : 정 민
 * @since : 2017. 05. 15.
 * @version : 1.0
 * @see :
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 *            <pre>
 *            ------------------------------------------------------------------
 *            Modification Information
 *            ------------------------------------------------------------------
 *            작성일 작성자 내용
 *            ------------------------------------------------------------------
 *            2017. 05. 15. 정 민 최초생성
 */
@Service("HRM070126Service")
public class HRM070126ServiceImpl extends BaseService implements HRM070126Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 초과근무시간관리 목록조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOvtmwrkTmManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();

		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM070126DAO.selectOvtmwrkTmManageList", inMap));

		outDataset.put("output1", outDsMap);

	}

	/**
	 * 초과근무시간관리 수정
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "unchecked" })
	public int ovtmwrkTmManageU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		Map<String, Object> map = new HashMap<String, Object>();

		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {

			map = list.get(x);

			iRow += baseDao.update("HRM070126DAO.ovtmwrkTmManageU", map);

		}
		return iRow;
	}

}