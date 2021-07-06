package hsco.mis.sal.SAL040110;

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
 * @Class Name   	: SAL040110ServiceImpl.java
 * @Description  	: 퇴직급여추계액
 * @author       	: 정 민
 * @since        	: 2017. 12. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자				내용
 * ------------------------------------------------------------------
 *  2017. 12. 10.					정 민				최초생성
 * </pre>  
 */

@Service("SAL040110Service")
public class SAL040110ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());


	/**
	 * 퇴직급여 추계액 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectEstmatAmtList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		// 평균임금, 상여수당 급여코드 조회
		List<Map> avgList = (List<Map>) baseDao.list("SAL040110DAO.selectAvgCodeList");
		List<Map> bnsList = (List<Map>) baseDao.list("SAL040110DAO.selectBnsCodeList");
		
		inMap.put("avgList", avgList);
		inMap.put("bnsList", bnsList);
		
		// 평균임금 목록 조회
		List<Map> records1 = (List<Map>) baseDao.list("SAL040110DAO.selectAvgSalaryList", inMap);
		
		// 상여수당 목록 조회
		List<Map> records2 = (List<Map>) baseDao.list("SAL040110DAO.selectBnsSalaryList", inMap);
		
		// 추계액 목록 조회
		List<Map> records3 = (List<Map>) baseDao.list("SAL040110DAO.selectEstmatAmtList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(avgList);
		outDataset.put("output1", outDsMap);
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(bnsList);
		outDataset.put("output2", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records1);
		outDataset.put("output3", outDsMap);
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records2);
		outDataset.put("output4", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records3);
		outDataset.put("output5", outDsMap);
	}
}