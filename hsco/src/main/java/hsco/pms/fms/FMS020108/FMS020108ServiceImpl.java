package hsco.pms.fms.FMS020108;

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

@Service("FMS020108Service")
public class FMS020108ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 시설물목록 조회
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
        List<Map> plyList = (List<Map>) baseDao.list("FMS020108DAO.selectWaterPlyList");
        outDsMap.setRowMaps(plyList);
        outDataset.put("output1", outDsMap);

        if(inMap != null){
            inMap.put("plyList", plyList);
        }
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("FMS020108DAO.selectWaterPlyIpla", inMap));
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
		// 시설물 목록
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			List<Map> plyList = (List<Map>) baseDao.list("FMS020108DAO.selectWaterPlyList");
            
			switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                Map insertMap = list1.get(x);
                
                for(int i = 0 ; i < plyList.size(); i++){
                    insertMap.put("USER_CO", insertMap.get("STAT_" + plyList.get(i).get("CODE")));
                    insertMap.put("WATER_PLY_IPLA_SE", plyList.get(i).get("CODE"));
                    baseDao.insert("FMS020108DAO.waterPlyIplaC", insertMap);
                }
                break;
            case DataSet.ROW_TYPE_UPDATED :
                Map updateMap = list1.get(x);
                
                for(int i = 0 ; i < plyList.size(); i++){
                    updateMap.put("USER_CO", updateMap.get("STAT_" + plyList.get(i).get("CODE")));
                    updateMap.put("WATER_PLY_IPLA_SE", plyList.get(i).get("CODE"));
                    baseDao.insert("FMS020108DAO.waterPlyIplaU", updateMap);
                }
                break;
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("FMS020108DAO.waterPlyIplaD", map);
                break;
			}
		}
	}
}