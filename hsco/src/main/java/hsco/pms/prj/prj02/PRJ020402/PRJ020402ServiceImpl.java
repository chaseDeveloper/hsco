package hsco.pms.prj.prj02.PRJ020402;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ020402Service")
public class PRJ020402ServiceImpl extends BaseService {

	// 분양가산정 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void calcList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020402.calcList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 분양가변경 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void chngList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020402.chngList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  저장
	
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;

		// 분양가상한
		iRow += saveBySqlID("PRJ020103.ltot_U", "input_ltot", inDataset);
		// 분양가산정
		iRow += saveBySqlID("PRJ020402.calc_U", "input_calc", inDataset);

		// 분양가변경
		iRow += save_chng(tranInfo, inVar, inDataset, outVar, outDataset);

		// 상한가_대지비
		iRow += saveBySqlID("PRJ020103.land_U", "input_land", inDataset);
		// 상한가_건축비
		iRow += saveBySqlID("PRJ020103.bldg_U", "input_bldg", inDataset);

		return iRow;
	}

	// 분양가변경 저장
	@SuppressWarnings({ "rawtypes" })
	public int save_chng( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input_chng");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("PRJ020402.chng_C", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ020402.chng_U", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("PRJ020402.chng_D", map);
					break;
			}
		}
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
