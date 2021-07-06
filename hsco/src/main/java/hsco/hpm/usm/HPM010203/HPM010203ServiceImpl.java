package hsco.hpm.usm.HPM010203;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: HPM010203Controller.java
 * &#64;Description  	: 사업소사원관리
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 08. 07.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 08. 07.					정 민			최초생성
 * </pre>
 */

@Service("HPM010203Service")
public class HPM010203ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(HPM010203ServiceImpl.class);

	/**
	 * 사업소사원관리 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBizplcEmpnoManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM010203DAO.selectBizplcEmpnoManageList", inMap));

		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 전체사원 목록 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEmpList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map<String, Object> inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM010203DAO.selectEmpList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 사업소사원관리 목록 저장
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void bizplcEmpnoManageCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HPM010203DAO.bizplcEmpnoManageC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HPM010203DAO.bizplcEmpnoManageU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.update("HPM010203DAO.bizplcEmpnoManageD", map);
				break;
			}
		}
	}
	
	/**
	 * 사업소사원관리 코드 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBizplcList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM010203DAO.selectBizplcList", inMap));

		outDataset.put("output1", outDsMap);
	}
}