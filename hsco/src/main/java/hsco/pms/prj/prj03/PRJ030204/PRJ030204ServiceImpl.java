package hsco.pms.prj.prj03.PRJ030204;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ030204Service")
public class PRJ030204ServiceImpl extends BaseService {

	//  조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ030204.mList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ030204.rList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void r2List( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ030204.r2List", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  생성
	@SuppressWarnings({ "rawtypes" })
	public int make( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {

			Map map = list.get(x);

			baseDao.delete("PRJ030204.rD", map);
			baseDao.delete("PRJ030204.r2D", map);
			baseDao.insert("PRJ030204.make1", map);
			baseDao.insert("PRJ030204.make2", map);
		}
		return iRow;
	}
}
