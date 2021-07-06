package hsco.hpm.ctm.HPM060109;

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
 * &#64;Class Name   	: HPM060107ServiceImpl.java
 * &#64;Description  	: 프로그램 관리하는 서비스 구현체 클래스
 * &#64;author       	: 정 민
 * &#64;since        	: 2018. 01. 12.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 10. 13.				   정 민				최초생성
 * </pre>
 */
@Service("HPM060109Service")
public class HPM060109ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(HPM060109ServiceImpl.class);

	/**
	 * 테니스장이용관리 목록
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectTnncrtDailIncmeSttusList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM060109DAO.selectTnncrtDailIncmeSttusList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 테니스장이용관리 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */

	@SuppressWarnings("rawtypes")
	@Transactional
	public void saveTnncrtDailIncmeSttusListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		int listSize1 = (list1 == null) ? 0 : list1.size();

		for (int x = 0; x < listSize1; x++) {

			Map map = list1.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HPM060109DAO.tnncrtDailIncmeSttusManageCU", map);
				break;

			}

		}
	}

	/**
	 * 이용금액 셋팅
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void setting(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List<Map<String, Object>> list = (List<Map<String, Object>>) baseDao.list("HPM060109DAO.selectExcclcData",
				inMap);

		if (list != null && list.size() > 0) {
			for (Map<String, Object> imap : list) {

				String storeId = (String) imap.get("STORE_ID");
				String amt = (String) imap.get("AMOUNT").toString();

				switch (storeId) {
				case "bahssf_s":
					// 센트롤파크 테니스장
					imap.put("CENTRALPARK_AMOUNT", amt);
					break;
				case "bahssf_d":
					// 돌모루테니스장
					imap.put("DOLMORU_TNNCRT_AMOUNT", amt);
					break;
				case "bahssf_b":
					// 동탄배드민턴장
					imap.put("DONGTAN_BADMCRT_AMOUNT", amt);
					break;
				case "bahssf_hp":
					// 향남파크골프장
					imap.put("HYANGNAM_PARK_GLCRS_AMOUNT", amt);
					break;
				case "bahssf_p":
					// 동탄파크골프장
					imap.put("PARK_GLCRS_MANAGE_AMOUNT", amt);
					break;
				case "bahssf_k":
					// 향남파크골프장
					imap.put("ACHSTE_AMOUNT", amt);
					break;
				}

				// TODO 상점별 컬럼 찾아서 업데이트(테이블구조상 merge)
				baseDao.update("HPM060109DAO.updateDailIncme", imap);
			}
		}
	}
}
