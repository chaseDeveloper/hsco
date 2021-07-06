package hsco.pms.rnt.prm.RNT02030300;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

@Service("RNT02030300Service")
public class RNT02030300ServiceImpl extends BaseService{

	/**
	 * 매입임대 재계약목록 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectPuchasReCntrctList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030300DAO.selectPuchasReCntrctList", inMap);		// 매입임대 재계약목록 조회
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 재계약 목록 건수
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void puchasReCntrctCnt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030300DAO.puchasReCntrctCnt", inMap);		// 재계약 목록 건수
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 매입임대 재계약 정보 생성
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })

	public void puchasReCntrctAllC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		try {
			if (inDsMap != null)
				inMap = inDsMap.get(0);

			ObjectUtil.setUserToMap(inMap);		// 세션정보 설정
			baseDao.insert("RNT02030300DAO.puchasReCntrctAllC", inMap);				// 매입임대 재계약 정보 생성
			baseDao.insert("RNT02030300DAO.puchasGtnAllC", inMap);					// 매입임대 보증금 정보 일괄생성(재계약 정보 일괄 생성시)
		}
		catch( Exception e) {
			throw new NexaServiceException(e);
		}
	}


	/**
	 * 매입임대 재계약일괄삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })

	public void puchasReCntrctAllD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		try {
			if (inDsMap != null)
				inMap = inDsMap.get(0);

			ObjectUtil.setUserToMap(inMap);		// 세션정보 설정

			baseDao.delete("RNT02030300DAO.vaBillAllD", inMap);						// 납부요청 정보 삭제(재계약 정보 일괄삭제시)
			baseDao.delete("RNT02030300DAO.puchasGtnAllD", inMap);					// 매입임대 보증금 정보 일괄삭제(재계약 정보 일괄삭제시)
			baseDao.delete("RNT02030300DAO.puchasReCntrctAllD", inMap);				// 매입임대 재계약일괄삭제
		}
		catch( Exception e) {
			throw new NexaServiceException(e);
		}
	}


	/**
	 * 매입임대 재계약 정보UD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })

	public void puchasReCntrctUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		try {
			for (int x = 0; x < list.size(); x++) {
				Map map = list.get(x);
				ObjectUtil.setUserToMap(map);		// 세션정보 설정

				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

				if(rowType == DataSet.ROW_TYPE_UPDATED ){
					String gtn       = (String)map.get("GTN");
					String gtn_bfchg = (String)map.get("GTN_BFCHG");

					baseDao.delete("RNT02030300DAO.vaBillD", map);					// 납부요청 정보 삭제
					baseDao.update("RNT02030300DAO.puchasReCntrctU", map);			// 매입임대 재계약 정보 수정

					if(gtn == null || gtn_bfchg == null)
						baseDao.delete("RNT02030300DAO.puchasGtnD", map);			// 매입임대 보증금 정보 삭제
					else{
						int i_gtn = Integer.valueOf(gtn);
						int i_gtn_bfchg = Integer.valueOf(gtn_bfchg);

						if(i_gtn - i_gtn_bfchg > 0)
							baseDao.update("RNT02030300DAO.puchasGtnU", map);		// 매입임대 보증금 정보 수정
						else
							baseDao.delete("RNT02030300DAO.puchasGtnD", map);		// 매입임대 보증금 정보 삭제
					}
				}
				else if(rowType == DataSet.ROW_TYPE_DELETED ){
					baseDao.delete("RNT02030300DAO.vaBillAllD", map);				        // 납부요청 정보 삭제(재계약 정보 일괄삭제시)
					baseDao.delete("RNT02030300DAO.puchasGtnD", map);				    // 매입임대 보증금 정보 삭제(재계약삭제시)
					baseDao.delete("RNT02030300DAO.puchasReCntrctD", map);			// 매입임대 재계약 정보 삭제
				}
			}
		}
		catch( Exception e) {
			throw new NexaServiceException(e);
		}
	}


	/**
	 * 매입임대 납입기한일괄변경
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })

	public void puchasReCntrctAllU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		try {
			if (inDsMap != null)
				inMap = inDsMap.get(0);

			ObjectUtil.setUserToMap(inMap);		// 세션정보 설정

			baseDao.delete("RNT02030300DAO.vaBillD", inMap);						// 납부요청 정보 삭제(재계약삭제시)
			//baseDao.delete("RNT02030300DAO.puchasGtnAllD", inMap);					// 매입임대 보증금 정보 일괄삭제(재계약 정보 일괄삭제시)
			baseDao.delete("RNT02030300DAO.puchasGtnAllU", inMap);					// 매입임대 보증금 납입기한 일괄변경
			baseDao.insert("RNT02030300DAO.puchasReCntrctAllU", inMap);				// 매입임대 납입기한일괄변경
			//baseDao.insert("RNT02030300DAO.puchasGtnAllC", inMap);					// 매입임대 보증금 정보 일괄생성(재계약 정보 일괄 생성시)
		}
		catch( Exception e) {
			throw new NexaServiceException(e);
		}
	}


	/**
	 * 매입임대 안내장 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectInfoDocList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030300DAO.selectInfoDocList", inMap);		// 매입임대 안내장 조회
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 매입임대 납부요청 프로시저
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })

	public void spVaBillUidAll( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		try {
			if (inDsMap != null)
				inMap = inDsMap.get(0);

			ObjectUtil.setUserToMap(inMap);		// 세션정보 설정
			baseDao.insert("RNT02030300DAO.spVaBillUidAll", inMap);					// 매입임대 납부요청 프로시저
		}
		catch( Exception e) {
			throw new NexaServiceException(e);
		}
	}


	/**
	 * 재계약정보 납부서
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })

	public void billPrintList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT02030300DAO.billPrintList", inMap);	// 재계약정보 납부서
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}
