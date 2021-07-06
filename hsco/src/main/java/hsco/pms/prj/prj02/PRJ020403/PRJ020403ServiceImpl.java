package hsco.pms.prj.prj02.PRJ020403;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ020403Service")
public class PRJ020403ServiceImpl extends BaseService {

	// 임대가산정 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void calcList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020403.calcList", inMap));

		outDataset.put("output1", outDsMap);
	}

	// 임대가변경 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void chngList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ020403.chngList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  저장
	
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;

		// 임대가상한
		iRow += saveBySqlID("PRJ020104.tot_U", "input_tot", inDataset);
		// 임대가산정
		iRow += saveBySqlID("PRJ020403.calc_U", "input_calc", inDataset);

		// 분양가변경
		iRow += save_chng(tranInfo, inVar, inDataset, outVar, outDataset);

		// 보증금
		iRow += saveBySqlID("PRJ020104.gtn_U", "input_gtn", inDataset);
		// 월임대료
		iRow += saveBySqlID("PRJ020104.rent_U", "input_rent", inDataset);

		return iRow;
	}

	// 임대가변경 저장
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
					baseDao.insert("PRJ020403.chng_C", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ020403.chng_U", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("PRJ020403.chng_D", map);
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
