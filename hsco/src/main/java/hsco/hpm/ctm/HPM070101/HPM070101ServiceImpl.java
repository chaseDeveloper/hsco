package hsco.hpm.ctm.HPM070101;

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
 * &#64;Class Name   	: HPM070101Controller.java
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

@Service("HPM070101Service")
public class HPM070101ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(HPM070101ServiceImpl.class);

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
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070101DAO.selectRentReqstManageList", inMap));

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 대관신청관리 목록 저장
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void saveRentReqstManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HPM070101DAO.rentReqstManageC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				baseDao.update("HPM070101DAO.rentReqstManageU", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				map.put("DELETE_AT", "1");
				baseDao.update("HPM070101DAO.rentReqstManageU", map);
				break;
			}
		}

		DataSetMap list2 = (DataSetMap) inDataset.get("input2");

		int listSize2 = (list2 == null) ? 0 : list2.size();

		for (int x = 0; x < listSize2; x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			boolean result = false;
			String mberNm = "";
			String mbtlnum = "";
			Map mberId = null;
			Map mberInfo = null;
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				if (map.get("MBTLNUM") == null || "".equals(map.get("MBTLNUM"))) {
					if (map.get("MBER_ID") != null && !"".equals(map.get("MBER_ID"))) {
						mberId = new HashMap<>();
						mberInfo = new HashMap<>();
						mberId.put("MBER_ID", map.get("MBER_ID"));
						mberInfo = (Map) hscoHomePageDao.select("HomepageDAO.selectMberInfo", mberId);
						
						if(mberInfo != null) {
							mberNm = (String) mberInfo.get("MBER_NM");
							mbtlnum = (String) mberInfo.get("MBTLNUM");
							map.put("DEST_INFO", mberNm + "^" + mbtlnum);
							result = true;
						}
					}
				} else {
					result = true;
				}

				if (result) {

					map.put("SCHEDULE_TYPE", "0");
					map.put("SUBJECT"      , "화성도시공사 대관승인");
					map.put("DEST_COUNT"   , "1");
					map.put("MSG_TYPE"     , "0");
					map.put("CONTENT_COUNT", "0");
					map.put("CONTENT_DATA" , "");
					
					// 오픈 전 테스트
					//map.put("DEST_INFO" , "정민^01099665863");
					System.out.println("--- 대관승인 결제기한 알림 SMS --- " + map.get("DEST_INFO"));
					hscoHomePageDao.insert("HomepageDAO.sendMssage", map);
				}

				break;
			}
		}
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
		baseDao.delete("HPM070101DAO.rentReqstManageAllD", inMap);

		// 화성도시공사 홈페이지 시설 정보 조회
		List<Map<String, Object>> homePageReqstInfoList = (List<Map<String, Object>>) hscoHomePageDao
				.list("HomepageDAO.reqstInfoList", inMap);

		// 대관시설관리 테이블에 데이터 입력
		for (Map<String, Object> homePageReqstInfoMap : homePageReqstInfoList) {
			baseDao.insert("HPM070101DAO.rentReqstManageC", homePageReqstInfoMap);
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
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070101DAO.selectRcpmnyDtlsList", inMap));

		outDataset.put("output1", outDsMap);
	}

	/**
	 * 입금내역매핑
	 * 
	 * @param (DataSetMap,
	 *            inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rcpmnyDtlsMapping(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		int listSize = (list == null) ? 0 : list.size();
		String rcpmnyDtlsSn = "";

		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				// 입금내역관리 생성, 순번 get
				rcpmnyDtlsSn = (String) baseDao.insert("HPM070101DAO.rcpmnyDtlsManageC", map);
				break;
			}
		}

		DataSetMap list2 = (DataSetMap) inDataset.get("input2");

		int listSize2 = (list2 == null) ? 0 : list2.size();

		for (int x = 0; x < listSize2; x++) {

			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
			case DataSet.ROW_TYPE_INSERTED:
			case DataSet.ROW_TYPE_UPDATED:
				// 신청내역관리 update
				map.put("RCPMNY_DTLS_SN", rcpmnyDtlsSn);
				baseDao.update("HPM070101DAO.rentReqstManageU", map);
				break;
			}
		}
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
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070101DAO.selectResveTimeList", inMap));
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
		baseDao.delete("HPM070101DAO.rcpmnyDtlsManageD", inMap);

		// 신청정보 수정
		inMap.put("RCPMNY_DTLS_SN", null);
		baseDao.update("HPM070101DAO.rentReqstManageU", inMap);
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
		List mberList = null;
		if("040100".equals(inMap.get("DEPT_CODE"))) {
			mberList = homePageMberList;
		}else {
			mberList = baseDao.list("HPM010101DAO.selectMberList", inMap);
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
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM070101DAO.selectExcelRentReqstManageList", inMap));

		outDataset.put("output1", outDsMap);
	}

}