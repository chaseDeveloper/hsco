package hsco.pms.prj.prj02.PRJ020702;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ020702Service")
@SuppressWarnings({ "rawtypes", "unchecked" })
public class PRJ020702ServiceImpl extends BaseService {

	/**
	 * 연차별투자계획 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void mList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020702.mList", inMap));

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 연차별투자계획 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		String colIdArr[] = {		// 월 colId 배열
				"M01", "M02", "M03", "M04",
				"M05", "M06", "M07", "M08",
				"M09", "M10", "M11", "M12"};
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			Map user = (Map)map.get("USER");
			String userId   = (String)user.get("S_USER_ID");
			String bsnsCode = (String)map.get("BSNS_CODE");
			String cd3      = (String)map.get("CD3");
			int stdrYear    = new Integer((String)map.get("STDR_YEAR")).intValue();
			int rowType     = ((Integer)map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();

			if(cd3 == null)
				continue;

			if(rowType == DataSet.ROW_TYPE_DELETED){
				map.put("STD_PRMPC_CODE", cd3);
				baseDao.delete("PRJ020702.mD", map);						// 연차별투자계획 삭제
			}
			else if(rowType == DataSet.ROW_TYPE_INSERTED || rowType == DataSet.ROW_TYPE_UPDATED){
				for(int i = 0; i < colIdArr.length; i++){
					String colId = colIdArr[i];

					Map saveMap = new HashMap();
					saveMap.put("BSNS_CODE",		bsnsCode);				// 사업코드
					saveMap.put("STDR_YEAR",		stdrYear);				// 기준년도
					saveMap.put("STDR_MT",			colId.substring(1));	// 기준월
					saveMap.put("STD_PRMPC_CODE",	cd3);					// 원가코드
					saveMap.put("INVT_PLAN_AMOUNT",	map.get(colId));		// 투자계획
					saveMap.put("S_USER_ID",		userId);				// 등록자ID

					baseDao.update("PRJ020702.mCU", saveMap);				// 연차별투자계획 등록, 수정
				}
			}
		}
	}


	/**
	 * 원가코드 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void prmpcCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020702.prmpcCodeList", null));

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 양식 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	public void sampleList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020702.sampleList", null));

		outDataset.put("output1", outDsMap);
	}
}
