package hsco.hpm.usm.HPM010101;

import java.util.HashMap;
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
 * &#64;Class Name   	: HPM010101ServiceImpl.java
 * &#64;Description  	: 회원관리
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 08. 04.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *	작성일							작성자				내용
 * ------------------------------------------------------------------
 *	2017. 08. 04.					정 민				최초생성
 * </pre>
 */

@Service("HPM010101Service")
public class HPM010101ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(HPM010101ServiceImpl.class);

	/**
	 * 회원 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMberList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);


		DataSetMap outDsMap = new DataSetMap();

		// 1. 화성도시공사 홈페이지 회원 정보 SELECT
		List homePageMberList = hscoHomePageDao.list("HomepageDAO.mberList", inMap);
		
		// 2. MIS 회원부가정보 SELECT
		List<Map<String, Object>> mberList = (List<Map<String, Object>>) baseDao.list("HPM010101DAO.selectMberList", inMap);
		
		for (int i = 0; i < homePageMberList.size(); i++ ) {
			
			Map<String, Object> homePageMberMap = (Map<String, Object>) homePageMberList.get(i);
			
			String homePageMberId = (String) homePageMberMap.get("MBER_ID");	// 화성도시공사 홈페이지 ID

			for (Map<String, Object> mberMap : mberList) {
				
				String mberId = (String) mberMap.get("MBER_ID");				// MIS 회원부가정보의 ID

				// 화성도시공사 홈페이지 정보 기준으로, MIS 회원부가정보 테이블에 있을 경우만
				if (homePageMberId.equals(mberId)) {
					 if ("050200".equals(inMap.get("DEPT_CODE"))) {
						 
							homePageMberMap.put("MBER_SE", mberMap.get("MBER_SE")); 		/* 회원구분값 */
							homePageMberMap.put("CONFM_SE", mberMap.get("CONFM_SE")); 		/* 승인여부 */
					 }
						homePageMberMap.put("RDCXPT_AT"  , mberMap.get("RDCXPT_AT"));		/* 감면여부 */
						homePageMberMap.put("RDCXPT_RATE", mberMap.get("RDCXPT_RATE")); 	/* 감면비율 */
						homePageMberMap.put("DEPT_CODE"  , mberMap.get("DEPT_CODE"));
						
				}

			}
		}
		outDsMap.setRowMaps(homePageMberList);
		outDataset.put("output1", outDsMap);
		
	}

	/**
	 * 회원 목록 저장
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void saveMberList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		DataSetMap list = (DataSetMap) inDataset.get("input2");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				map.put("DEPT_CODE"  , inMap.get("DEPT_CODE"));
				map.put("BIZPLC_CODE", inMap.get("BIZPLC_CODE"));
				baseDao.insert("HPM010101DAO.mberCU", map);
				break;
			}
		}
	}

	/**
	 * 체육시설팀 부가정보(승인여부, 회원구분) 갱신
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void initMberCU(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap param = (DataSetMap) inDataset.get("input1");
		
		Map paramMap = new HashMap<>();
		
		if (param != null && param.size() > 0) {
			paramMap = param.get(0);
			baseDao.delete("HPM010101DAO.initDelMberCU", paramMap);
		}

		// 1. 화성도시공사 홈페이지 회원 정보 SELECT
		List<Map<String, Object>> homePageMberList = (List<Map<String, Object>>) hscoHomePageDao.list("HomepageDAO.mberList", paramMap);
		
		int listSize = (homePageMberList == null) ? 0 : homePageMberList.size();

		for (int x = 0; x < listSize; x++) {
			Map map = homePageMberList.get(x);
			map.put("DEPT_CODE"  , paramMap.get("DEPT_CODE"));
			map.put("BIZPLC_CODE", paramMap.get("BIZPLC_CODE"));
			baseDao.insert("HPM010101DAO.initMberCU", map);
		}
	}

	/**
	 * 회원 로그인 목록 조회
	 * 
	 * @param (DataSetMap,inVar,
	 *            inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectLoginLog(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		if (log.isInfoEnabled())
			log.info("selectLoginLog Started!");

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>) baseDao.list("HPM010101DAO.selectLoginLog", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 사업소 코드 조회
	 * 
	 * @param (DataSetMap,inVar,
	 *            inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void bizplcSearchList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List<Map> records;

		records = (List<Map>) baseDao.list("HPM010101DAO.bizplcSearchList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}