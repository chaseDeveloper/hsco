package hsco.mis.sal.SAL010115;

import java.util.ArrayList;
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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL010115ServiceImpl.java
 * @Description  	: 건강보험산출내역관리
 * @author       	: 정 민
 * @since        	: 2017. 12. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자				내용
 * ------------------------------------------------------------------
 *  2017. 12. 08.					정 민				최초생성
 * </pre>  
 */

@Service("SAL010115Service")
public class SAL010115ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());


	/**
	 * 산출내역 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectComputDtlsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records  = (List<Map>) baseDao.list("SAL010115DAO.selectIndiComputDtlsList", inMap);
		List<Map> records2 = (List<Map>) baseDao.list("SAL010115DAO.selectDeptComputDtlsList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records2);
		outDataset.put("output2", outDsMap);
	}


	/**
	 * 산출내역 엑셀 업로드
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void saveComputDtlsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
				
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					// 저장
					baseDao.insert("SAL010115DAO.computDtlsCU", map);
					break;
			}
		}
	}
	

	/**
	 * 산출내역 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes"})
	@Transactional
	public void computDtlsListD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		baseDao.delete("SAL010115DAO.computDtlsD", inMap);

	}

}