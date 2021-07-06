package hsco.pms.prj.prj05.PRJ050502;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ050502Service")
@SuppressWarnings({ "rawtypes", "unchecked" })
public class PRJ050502ServiceImpl extends BaseService {

	/**
	 * 월간감리보고목록 조회
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
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ050502.mList", inMap));

		outDataset.put("output1", outDsMap);
	}


	/**
	 * 월간감리보고 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	public void save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();

		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);

			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
				baseDao.insert("PRJ050502.mC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("PRJ050502.mU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				baseDao.delete("PRJ050502.mD", map);
				break;
			}
		}
	}
}
