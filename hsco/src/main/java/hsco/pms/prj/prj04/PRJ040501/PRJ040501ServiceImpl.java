package hsco.pms.prj.prj04.PRJ040501;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("PRJ040501Service")
public class PRJ040501ServiceImpl extends BaseService {

	//  조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void mList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = (inDsMap == null) ? null : inDsMap.get(0);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ040501.mList", inMap));

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
		outDsMap.setRowMaps((List<Map>)baseDao.list("PRJ040501.rList", inMap));

		outDataset.put("output1", outDsMap);
	}

	//  저장
	
	public int save( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		int iRow = 0;
		iRow += mSave(tranInfo, inVar, inDataset, outVar, outDataset);
		iRow += rSave(tranInfo, inVar, inDataset, outVar, outDataset);
		return iRow;
	}

	//  저장
	@SuppressWarnings({ "rawtypes" })
	public int mSave( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("PRJ040501.mC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ040501.mU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("PRJ040501.rD", map);
					iRow += baseDao.delete("PRJ040501.mD", map);
					break;
			}
		}
		return iRow;
	}

	//  저장
	@SuppressWarnings({ "rawtypes" })
	public int rSave( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list = (DataSetMap) inDataset.get("input2");
		int listSize = (list == null) ? 0 : list.size();
		int iRow = 0;
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("PRJ040501.rC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("PRJ040501.rU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("PRJ040501.rD", map);
					break;
			}
		}
		return iRow;
	}
}
