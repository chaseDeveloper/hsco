package hsco.pms.fms.FMS020109;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

@Service("FMS020109Service")
public class FMS020109ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 에너지관리대장목록 조회
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
		if (inDsMap1 != null) {
			inMap = inDsMap1.get(0);
		}

		DataSetMap outDsMap = new DataSetMap();		
		outDsMap.setRowMaps((List<Map>) baseDao.list("FMS020109DAO.selectEnergeManage", inMap));
		outDataset.put("output1", outDsMap);
		
		DataSetMap outDsMap2 = new DataSetMap();		
		outDsMap2.setRowMaps((List<Map>) baseDao.list("FMS020109DAO.selectGraphList", inMap));
		outDataset.put("output2", outDsMap2);
	}


	/**
	 * 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		// 에너지관리대장 목록
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                Map insertMap = list1.get(x);
                
                for(int i = 1 ; i <= 12; i++){
                    insertMap.put("USE_QY",     insertMap.get("USE_" + i)==null   ?"0":insertMap.get("USE_" + i).toString());
                    insertMap.put("USE_AMOUNT", insertMap.get("AMOUNT_" + i)==null?"0":insertMap.get("AMOUNT_" + i).toString());
                    insertMap.put("MANAGE_YM", i);
                    baseDao.insert("FMS020109DAO.energeManageC", insertMap);
                }
                break;
            case DataSet.ROW_TYPE_UPDATED :
                Map updateMap = list1.get(x);
                
                for(int i = 1 ; i <= 12; i++){
                    updateMap.put("USE_QY",     updateMap.get("USE_" + i)==null   ?"0":updateMap.get("USE_" + i).toString());
                    updateMap.put("USE_AMOUNT", updateMap.get("AMOUNT_" + i)==null?"0":updateMap.get("AMOUNT_" + i).toString());
                    updateMap.put("MANAGE_YM", i);
                    baseDao.update("FMS020109DAO.energeManageU", updateMap);
                }
                break;
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("FMS020109DAO.energeManageD", map);
                break;
			}
		}
	}
}