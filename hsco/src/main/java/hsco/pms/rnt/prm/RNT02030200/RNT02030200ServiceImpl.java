package hsco.pms.rnt.prm.RNT02030200;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;


@Service("RNT02030200Service")
public class RNT02030200ServiceImpl extends BaseService{

	/**
	 * 매입임대 대기자 리스트 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectWaitrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030200DAO.selectWaitrList", inMap);			// 매입임대 대기자 리스트 조회

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 매입임대 계약가능 주택정보
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCntrctrPosblHouseList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030200DAO.selectCntrctrPosblHouseList", inMap);	// 매입임대 계약가능 주택정보

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 선수금계좌번호 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPrecdntAccount( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030200DAO.selectPrecdntAccount", inMap);			// 선수금계좌번호 조회

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 매입임대 대기자 가족목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPuchasRentCstmrFamilyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030200DAO.selectPuchasRentCstmrFamilyList", inMap);			// 매입임대 대기자 가족목록 조회

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 계약등록(매입)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void puchasCntrctC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		baseDao.insert("RNT02030200DAO.puchasCntrctC", inMap);										// 기존계약자 계약등록(매입)
		inMap.put("SUPLY_SE", "0");			// 주택 공급불가로 put

		outDataset.put("output1", inDsMap);
	}


	/**
	 * 기존계약자 계약등록(매입)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceExceptiont
	 */
	@SuppressWarnings({ "rawtypes", "unchecked", "deprecation" })
	
	public void puchasCntrctAllC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {

		DataSetMap list = (DataSetMap) inDataset.get("input1");

		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			ObjectUtil.setUserToMap(map);		// 세션정보 설정

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();		// rowType
			String cntrctPosblAt = (String) map.get("CNTRCT_POSBL_AT");							// 계약가능여부[1:계약가능]

			if (rowType == DataSet.ROW_TYPE_INSERTED && cntrctPosblAt.equals("1")){
				/* 0. 임대주택 공급가능여부 조회 */
				String suplySe = (String) baseDao.select("RNT02030200DAO.selectHouseCntrctrPosblAt", map);		// 임대주택 공급가능여부 조회[1:공급가능]
				if(suplySe.equals("0"))
					continue;

				/* 1. 매입임대 고객 등록 */
				baseDao.getDao().getSqlMapClientTemplate().insert("RNT02030200DAO.puchasRentCstmrC", map);		// 매입임대 고객 등록

				/* 2. 계약등록 : 계약등록 -> 임대주택정보 공급불가로 수정 -> 가상계좌등록 */
				baseDao.getDao().getSqlMapClientTemplate().insert("RNT02030200DAO.legacyCntrctrC", map);		// 계약등록

				map.put("CNTRCT_POSBL_AT", "0");		// 계약가능여부 ['0':불가] return
			}
		}

		outDataset.put("output1", list);
	}
}
