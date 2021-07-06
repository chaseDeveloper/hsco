package hsco.hpm.usm.HPM010202;

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
 * &#64;Class Name   	: HPM010202Controller.java
 * &#64;Description  	: 대관사업소관리
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

@Service("HPM010202Service")
public class HPM010202ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(HPM010202ServiceImpl.class);

	/**
	 * 대관사업소관리 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentBizplcManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM010202DAO.selectRentBizplcManageList", inMap));

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 대관사업소관리 목록 저장
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes"})
	@Transactional
	public void rentBizplcManageCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				
				int iCnt = Integer.parseInt((String) baseDao.select("HPM010202DAO.selectbizplcCodeCnt", map));
				if(iCnt > 0) {
					String bizplcCode = String.valueOf(map.get("BIZPLC_CODE"));
					String errMsg = "입력하신 사업소코드("+bizplcCode+") 는 이미 등록되어 있습니다.";
					errMsg += "\n검색조건을 초기화 하신 후, 재조회 바랍니다.";
					throw new NexaServiceException("info.처리불가", errMsg);
				}
				
				baseDao.insert("HPM010202DAO.rentBizplcManageListC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HPM010202DAO.rentBizplcManageListU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				
				int dCnt = Integer.parseInt((String) baseDao.select("HPM010202DAO.selectbizplcCodeUseCnt", map));
				if(dCnt > 0) {
					String bizplcCode = String.valueOf(map.get("BIZPLC_CODE"));
					String bizplcNm = String.valueOf(map.get("BIZPLC_NM"));
					
					String errMsg = bizplcNm+"("+bizplcCode+") 사업소로 등록된 데이터가 존재하여 삭제할 수 없습니다.";
					throw new NexaServiceException("info.처리불가", errMsg);
				}

				baseDao.update("HPM010202DAO.rentBizplcManageListD", map);
				break;
			}
		}
	}
	
	/**
	 * 대관사업소관리 목록 코드 조회
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
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM010202DAO.selectBizplcList", inMap));

		outDataset.put("output1", outDsMap);
	}
}