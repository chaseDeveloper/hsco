package hsco.pms.rnt.prm.puchasCyberAccount;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   		: PuchasCyberAccountServiceImpl.java
 * @Description  		: 가상계좌
 * @author       			: 변승우
 * @since        			: 2015. 11. 26.
 * @version      			: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 26.					변승우				최초생성
 * </pre>  
 */

@Service("PuchasCyberAccountService")
public class PuchasCyberAccountServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 미납 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void nonPaymentList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		String sParam = inMap.get("cortCode").toString();
		inMap.put("arr_cortCode", sParam.split(","));

		List <Map> records = (List<Map>)baseDao.list("puchasCyberAccountDAO.nonPaymentList", inMap);	// 미납 목록
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 


	/**
	 * 입금내역 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void receiptList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		String sParam = inMap.get("cortCode").toString();
		inMap.put("arr_cortCode", sParam.split(","));

		List <Map> records = (List<Map>)baseDao.list("puchasCyberAccountDAO.receiptList", inMap);	// 입금내역 목록
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 


	/**
	 * 가상계좌 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void vacctNoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("puchasCyberAccountDAO.vacctNoList", inMap);		// 가상계좌 목록
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 납부내역 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void billList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("puchasCyberAccountDAO.billList", inMap);		// 납부내역 목록
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 


	/**
	 * 납부내역 상세 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void billDetailList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("puchasCyberAccountDAO.billDetailList", inMap);	// 납부내역 상세 목록
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 납부요청
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void spVaBillUid( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = null;
		Map map = null;

		try {
			/* 1.기존에 저장되어 있던 청구내역을 삭제 */
			list = (DataSetMap) inDataset.get("input1");
			map = list.get(0);
			ObjectUtil.setUserToMap(map);			// 세션정보 설정
			baseDao.insert("puchasCyberAccountDAO.SP_VA_BILL_UID", map);		// 기존에 저장되어 있던 청구내역을 삭제

			/* 2.청구내역상세 등록 */
			list = (DataSetMap) inDataset.get("input2");
			for(int i = 0; i < list.size(); i++){
				map = list.get(i);
				ObjectUtil.setUserToMap(map);		// 세션정보 설정
				baseDao.insert("puchasCyberAccountDAO.SP_VA_BILL_UID", map);	// 청구내역상세 등록
			}

			/* 3.청구내역마스터 등록 */
			list = (DataSetMap) inDataset.get("input3");
			map = list.get(0);
			ObjectUtil.setUserToMap(map);			// 세션정보 설정
			baseDao.insert("puchasCyberAccountDAO.SP_VA_BILL_UID", map);		// 청구내역마스터 등록
		}
		catch( Exception e) {
			throw new NexaServiceException(e); 
		}
	}

	/**
	 * 납부서 출력물 조회 (임대료, 보증금, 소송비)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBillPrintList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = null;
		records = (List<Map>)baseDao.list("puchasCyberAccountDAO.selectBillPrintList", inMap);		// 납부서 출력물
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 납부서 출력물 조회 (관리비)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectManagectBillPrint( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = null;
		records = (List<Map>)baseDao.list("puchasCyberAccountDAO.selectManagectBillPrint", inMap);	// 납부서(관리비) 출력물
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}
