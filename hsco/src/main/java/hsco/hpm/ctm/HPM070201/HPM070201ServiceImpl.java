package hsco.hpm.ctm.HPM070201;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: HPM070201Controller.java
 * &#64;Description  	: 대관신청관리
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

@Service("HPM070201Service")
public class HPM070201ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(HPM070201ServiceImpl.class);

	/**
	 * 대관신청관리 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentReqstManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070201DAO.selectRentReqstManageList", inMap));

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 거래처생성
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void insertBcncZ1(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
        DataSetMap outDsMap = new DataSetMap();

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			if(!map.containsKey("BCNC_CODE")){
				
				// 거래처마스터 중복 확인(거래처구분 상관없이)
				int bcncCnt = Integer.parseInt((String) baseDao.select("HPM070201DAO.selectBcncMastr", map));
				if(bcncCnt == 0) {
					String bcnc = (String)baseDao.select("HPM070201DAO.selectBcncCode");
					map.put("BCNC_CODE", bcnc);
					baseDao.insert("HPM070201DAO.insertBcncZ1", map);
				}
			}
			outDsMap.add(map);
		}

        outDataset.put("output1", outDsMap);
	}

	/**
	 * 신청정보 이관
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void trnsferReqstInfoList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// 기존정보 삭제
		baseDao.delete("HPM070201DAO.rentReqstManageAllD", inMap);

		// 화성도시공사 홈페이지 시설 정보 조회
		List<Map<String, Object>> homePageReqstInfoList = (List<Map<String, Object>>) hscoHomePageDao
				.list("HomepageDAO.reqstInfoList", inMap);

		// 대관시설관리 테이블에 데이터 입력
		for (Map<String, Object> homePageReqstInfoMap : homePageReqstInfoList) {
			baseDao.insert("HPM070201DAO.rentReqstManageC", homePageReqstInfoMap);
		}
	}

	/**
	 * 대사관리(입금내역) 목록 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRcpmnyDtlsList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070201DAO.selectRcpmnyDtlsList", inMap));

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 예약가능시간 조회
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectResvePosblTime(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070201DAO.selectResveTimeList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 결제정보취소
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cancelRcpmnyDtlsMapping(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		// 입금내역 삭제
		baseDao.delete("HPM070201DAO.rcpmnyDtlsManageD", inMap);

		// 신청정보 수정
		inMap.put("RCPMNY_DTLS_SN", null);
		baseDao.update("HPM070201DAO.rentReqstManageU", inMap);
	}

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
		List<Map<String, Object>> homePageMberList = (List<Map<String, Object>>) hscoHomePageDao
				.list("HomepageDAO.mberList", inMap);

		// 2. MIS 회원부가정보 SELECT
		List mberList = baseDao.list("HPM010101DAO.selectMberList", inMap);

		// List<Map> resultList = new ArrayList<>();

		for (int i = 0; i < mberList.size(); i++) {

			Map<String, Object> mberMap = (Map<String, Object>) mberList.get(i);

			String mberId = (String) mberMap.get("MBER_ID"); // MIS ID

			for (Map<String, Object> homePageMberMap : homePageMberList) {

				String homePageMberId = (String) homePageMberMap.get("MBER_ID"); // homepage

				if (mberId.equals(homePageMberId)) {

					mberMap.put("MBER_NM", homePageMberMap.get("MBER_NM"));
					mberMap.put("GRP_NM", homePageMberMap.get("GRP_NM"));
					mberMap.put("ADRES", homePageMberMap.get("ADRES"));
					mberMap.put("TELNO", homePageMberMap.get("TELNO"));
					mberMap.put("MBTLNUM", homePageMberMap.get("MBTLNUM"));
				}
			}
		}
		outDsMap.setRowMaps(mberList);
		outDataset.put("output1", outDsMap);

	}

	/**
	 * 대관신청관리 목록 조회 (엑셀)
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectExcelRentReqstManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");

		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070201DAO.selectExcelRentReqstManageList", inMap));

		outDataset.put("output1", outDsMap);
	}

    /**
     * 계좌정합성여부 판단 프로시저호출
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    @Transactional
    public void procedureAcnutStblt(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);

        baseDao.update("HPM070201DAO.callProcedure", inMap);
    }
}