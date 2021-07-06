package hsco.pms.rnt.pra.RNT01030300;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("RNT01030300Service")
@SuppressWarnings({ "rawtypes", "unchecked" })
public class RNT01030300ServiceImpl extends BaseService{
	/**
	 * 재계약 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void rentReCntrctList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT01030300DAO.rentReCntrctList", inMap);		// 재계약 목록
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
	public void rentReCntrctCnt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records = (List<Map>)baseDao.list("RNT01030300DAO.rentReCntrctCnt", inMap);		// 재계약 목록 건수
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 자격변경 임대료기준 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void chrgStdr( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030300DAO.chrgStdr", inMap);		// 자격변경 임대료기준 조회
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}


	/**
	 * 재계약 정보 일괄 생성
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void rentReCntrctAllC(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map map = list.get(0);

		String houseSe = (String) map.get("houseSe");		// 주택구분
		if(houseSe.equals("R1")){
			baseDao.insert("RNT01030300DAO.rentReCntrctAllC", map);					// 재계약 정보(영구) 일괄 생성
		}
		else if(houseSe.equals("R3")){
			baseDao.insert("RNT01030300DAO.rentStoreReCntrctAllC", map);			// 재계약 정보(상가) 일괄 생성
		}

		baseDao.insert("RNT01030300DAO.rentGtnAllC", map);				// 영구임대 보증금 정보 일괄생성(재계약 정보 일괄 생성시)
	}


	/**
	 * 재계약 정보 일괄 삭제
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void rentReCntrctAllD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map map = list.get(0);

		baseDao.delete("RNT01030300DAO.vaBillAllD", map);				// 납부요청 정보 삭제(재계약 정보 일괄삭제시)

		baseDao.delete("RNT01030300DAO.rentGtnAllD", map);				// 영구임대 보증금 정보 일괄삭제(재계약 정보 일괄삭제시)
		baseDao.delete("RNT01030300DAO.rentReCntrctAllD", map);			// 재계약 정보 일괄 삭제
	}


	/**
	 * 재계약 정보 저장 [그리드 저장]
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void rentReCntrctCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");

		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 

			if(rowType == DataSet.ROW_TYPE_UPDATED ) {
				String gtn       = (String)map.get("GTN");
				String gtn_bfchg = (String)map.get("GTN_BFCHG");

				baseDao.delete("RNT01030300DAO.vaBillD", map);				// 납부요청 정보 삭제
				baseDao.update("RNT01030300DAO.rentReCntrctU", map);		// 재계약 정보 수정

				if(gtn == null || gtn_bfchg == null){
					baseDao.delete("RNT01030300DAO.rentGtnD", map);			// 영구임대 보증금 정보 삭제
				}
				else{
					int i_gtn = Integer.valueOf(gtn);
					int i_gtn_bfchg = Integer.valueOf(gtn_bfchg);

					if(i_gtn - i_gtn_bfchg > 0)
						baseDao.update("RNT01030300DAO.rentGtnU", map);		// 영구임대 보증금 정보 수정
					else
						baseDao.delete("RNT01030300DAO.rentGtnD", map);		// 영구임대 보증금 정보 삭제
				}
			}
			else if(rowType == DataSet.ROW_TYPE_DELETED ) {
				baseDao.delete("RNT01030300DAO.vaBillAllD", map);			// 납부요청 정보 삭제(재계약 정보 일괄삭제시)
				baseDao.delete("RNT01030300DAO.rentGtnD", map);				// 영구임대 보증금 정보 삭제(재계약삭제시)
				baseDao.delete("RNT01030300DAO.rentReCntrctD", map);		// 재계약 정보 삭제
			}
		}
	}


	/**
	 * 납부기한일괄변경
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void rentReCntrctAllU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map map = list.get(0);
		baseDao.delete("RNT01030300DAO.vaBillD", map);				// 납부요청 정보 삭제(재계약삭제시)
	//baseDao.delete("RNT01030300DAO.rentGtnAllD", map);			// 영구임대 보증금 정보 일괄삭제 
		baseDao.delete("RNT01030300DAO.rentGtnAllU", map);			// 영구임대 보증금 납부기한일괄변경		
		baseDao.update("RNT01030300DAO.rentReCntrctAllU", map);		// 납부기한일괄변경

	//baseDao.insert("RNT01030300DAO.rentGtnAllC", map);			// 영구임대 보증금 정보 일괄생성
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
	public void billPrintList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030300DAO.billPrintList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}
