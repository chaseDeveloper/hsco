package hsco.mis.ctr.CTR060800;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CTR060800Service.java
 * @Description  	: 계약통계현황을 조회하는 ServiceImpl 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 16
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
 *  2015. 10. 16	이수지		최초생성
 * </pre>
 */
@Service("CTR060800Service")
public class CTR060800ServiceImpl extends BaseService implements CTR060800Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 계약통계현황 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void CntDataStateList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 계약현황(총괄)
		DataSetMap output_all = new DataSetMap();
		output_all.setRowMaps((List<Map>) baseDao.list("CTR060800DAO.allSelect", inMap));
		outDataset.put("output_all", output_all);

		// 계약현황(사업별)
		DataSetMap output_bns = new DataSetMap();
		output_bns.setRowMaps((List<Map>) baseDao.list("CTR060800DAO.businessSelect", inMap));
		outDataset.put("output_bns", output_bns);

		// 진행중&완료 계약현황
		DataSetMap output_ong = new DataSetMap();
		DataSetMap output_cmp = new DataSetMap();
		inMap.put("PROGRS_STTUS_SE", "002");
		output_cmp.setRowMaps((List<Map>) baseDao.list("CTR060800DAO.ongoingSelect", inMap));	// 완료
		inMap.put("PROGRS_STTUS_SE", "001");
		output_ong.setRowMaps((List<Map>) baseDao.list("CTR060800DAO.ongoingSelect", inMap));	// 진행
		outDataset.put("output_cmp", output_cmp);
		outDataset.put("output_ong", output_ong);
		

		// 계약현황(부서별)
		DataSetMap output_dept = new DataSetMap();
		output_dept.setRowMaps((List<Map>) baseDao.list("CTR060800DAO.deptSelect", inMap));
		outDataset.put("output_dept", output_dept);
	}

	/**
	 * 사업별 계약현황 상세
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void businessSelectDetail(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		inMap.put("PROGRS_STTUS_SE", "002");
		outDsMap1.setRowMaps((List<Map>) baseDao.list("CTR060800DAO.businessSelectDetail", inMap));	// 완료
		inMap.put("PROGRS_STTUS_SE", "001");
		outDsMap2.setRowMaps((List<Map>) baseDao.list("CTR060800DAO.businessSelectDetail", inMap));	// 진행
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}

}