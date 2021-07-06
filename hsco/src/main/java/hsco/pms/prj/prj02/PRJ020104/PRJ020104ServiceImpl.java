package hsco.pms.prj.prj02.PRJ020104;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ020104Service")
public class PRJ020104ServiceImpl extends BaseService {

	// 임대가상한 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void totList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020104.totList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 보증금상한 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void gtnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020104.gtnList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 임대료상한 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020104.rentList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  저장
	
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;

		// 분양가상한
		iRow += saveBySqlID("PRJ020104.tot_U", "input_tot", inDataset);

		// 상한가_대지비
		iRow += saveBySqlID("PRJ020103.land_U", "input_land", inDataset);
		// 상한가_건축비
		iRow += saveBySqlID("PRJ020103.bldg_U", "input_bldg", inDataset);

		// 보증금상한
		iRow += saveBySqlID("PRJ020104.gtn_U", "input_gtn", inDataset);
		// 임대료상한
		iRow += saveBySqlID("PRJ020104.rent_U", "input_rent", inDataset);

		return iRow;
	}

	@SuppressWarnings({ "rawtypes" })
	public int saveBySqlID(String sql_id, String sInput,
			Map<String, DataSetMap> inDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get(sInput);
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {
//			Map map = list.get(x);
			iRow += baseDao.update(sql_id, (Map)list.get(x));
		}
		return iRow;
	}
}
