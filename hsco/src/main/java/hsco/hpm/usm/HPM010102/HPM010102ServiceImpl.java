package hsco.hpm.usm.HPM010102;

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

@Service("HPM010102Service")
public class HPM010102ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(HPM010102ServiceImpl.class);

	/**
	 * 회원 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);


		DataSetMap outDsMap = new DataSetMap();
		// select
		List mberList = (List) baseDao.list("HPM010102DAO.select", inMap);
		
		// 1. 화성도시공사 홈페이지 회원 정보 SELECT
		List homePageMberList = hscoHomePageDao.list("HomepageDAO.mberList", inMap);
		
		// 2. MIS 회원부가정보 SELECT
		
		for (int j = 0; j < mberList.size(); j++) {
			Map<String, Object> mber = (Map<String, Object>) mberList.get(j);
			
			String mberId = (String) mber.get("MBER_ID");				// MIS 회원부가정보의 ID

			for(int i = 0; i < homePageMberList.size(); i ++) {
				Map<String, Object> h_mber = (Map<String, Object>) homePageMberList.get(i);
				// 화성도시공사 홈페이지 정보 기준으로, MIS 회원부가정보 테이블에 있을 경우만
				if (mberId.equals(h_mber.get("MBER_ID"))) {
					mber.put("MBER_NM"  , h_mber.get("MBER_NM"));	
					mber.put("OLD_GRP_NM", h_mber.get("GRP_NM")); 
				}
			}
		}
		outDsMap.setRowMaps(mberList);
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
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
				case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HPM010102DAO.save", map);
			}
			
/*			// save, delete
			if("1".equals(map.get("EXPSR_AT"))) {
				baseDao.update("HPM010102DAO.save", map);
			}else {
				baseDao.delete("HPM010102DAO.delete", map);
			}*/
		}
	}
}