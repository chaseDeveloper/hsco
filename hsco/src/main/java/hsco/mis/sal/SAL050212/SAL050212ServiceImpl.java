package hsco.mis.sal.SAL050212;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL050212ServiceImpl.java
 * @Description  	: 연말정산급여관리
 * @author       	: 정윤원
 * @since        	: 2018. 01. 03.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2018 NANUMICT, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 01. 03.					정윤원				최초생성
 * </pre>
 */

@Service("SAL050212Service")
public class SAL050212ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 년도별 연말정산급여를 조회한다
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		} else {
			inMap = inVar;
		}

		List<Map> stdrCodeList = (List<Map>) baseDao.list("SAL050212DAO.selectPymntDdcStdrCode", inMap);
		String[] codeList = new String[stdrCodeList.size()];
		for (int cRow = 0; cRow < stdrCodeList.size(); cRow++) {
			Map codeMap = stdrCodeList.get(cRow);
			String codeVal = (String) codeMap.get("PYMNT_DDC_CODE");
			codeList[cRow] = codeVal;
		}
		inMap.put("PYMNT_CODE", codeList);

		List<Map> records1 = (List<Map>) baseDao.list("SAL050212DAO.selectYndExcclcSalary", inMap);

		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDataset.put("output1", outDsMap1);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(stdrCodeList);
		outDataset.put("output2", outDsMap2);
	}

	/**
	 * 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < (list == null ? 0 : list.size()); x++) {
			Map map = list.get(x);
			int rowType2 = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType2) {
				case DataSet.ROW_TYPE_INSERTED:
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("SAL050212DAO.mergeYndExcclcSalary", map);		// TODO : u
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("SAL050212DAO.deleteYndExcclcSalary", map);
					break;
			}
		}
	}

	/**
	 * 자동계산
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void saveAutoCalc(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
			baseDao.delete("SAL050212DAO.deleteYndExcclcSalary", inMap);
			baseDao.insert("SAL050212DAO.calcAutoCalcData", inMap);
		}
	}
}
