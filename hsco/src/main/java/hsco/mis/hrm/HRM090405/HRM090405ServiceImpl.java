package hsco.mis.hrm.HRM090405;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

@Service("HRM090405Service")
public class HRM090405ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090405DAO.selectOpratDiaryList", inMap));
		outDataset.put("output1", outDsMap);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSub(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM090405DAO.selectOpratDiary", inMap));
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM090405DAO.selectOpratDtls", inMap));
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}

	@SuppressWarnings({ "rawtypes", "unchecked"})
	public int save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		
		if(list1.size() > 0) {
			Map mastrMap = list1.get(0);
			int mastrRowType = ((Integer) mastrMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(mastrRowType) {
				case DataSet.ROW_TYPE_INSERTED:
					String opratSn = (String) baseDao.select("HRM090405DAO.selectOpratSn", mastrMap);
					mastrMap.put("OPRAT_SN", opratSn);
					baseDao.insert("HRM090405DAO.insertOpratDiary", mastrMap);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					iRow += baseDao.update("HRM090405DAO.updateOpratDiary", mastrMap);
					break;
				default:
					break;
			}
			
			for(Map map : list2.getRowMaps()) {
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED:
						map.put("OPRAT_SN", (String)mastrMap.get("OPRAT_SN"));
						baseDao.insert("HRM090405DAO.insertOpratDtls", map);
						break;
					case DataSet.ROW_TYPE_UPDATED:
						baseDao.update("HRM090405DAO.updateOpratDtls", map);
						break;
					case DataSet.ROW_TYPE_DELETED:
						baseDao.delete("HRM090405DAO.deleteOpratDtls", map);
						break;
					default:
						break;
				}
			}
			
			switch(mastrRowType) {
				case DataSet.ROW_TYPE_DELETED:
					iRow += baseDao.delete("HRM090405DAO.deleteOpratDiary", mastrMap);
					break;
				default:
					break;
			}
			
		}
		
		return iRow;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectVhcleList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM090405DAO.selectVhcleList", inMap));
		outDataset.put("output1", outDsMap);
	}
}