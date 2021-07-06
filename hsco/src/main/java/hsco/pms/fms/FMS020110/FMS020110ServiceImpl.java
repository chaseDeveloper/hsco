package hsco.pms.fms.FMS020110;

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

@Service("FMS020110Service")
public class FMS020110ServiceImpl extends BaseService {

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
		outDsMap.setRowMaps((List<Map>) baseDao.list("FMS020110DAO.selectIslndsUse", inMap));
		outDataset.put("output1", outDsMap);
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
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                Map insertMap = list.get(x);
                String[] useQyVal = {insertMap.get("CAR_QY").toString(),insertMap.get("MAN_QY").toString()};
                for(int i = 0; i < 2; i++){
                    insertMap.put("USE_QY", useQyVal[i]);
                    insertMap.put("USE_SE", "0"+ Integer.toString(i+1));
                    baseDao.insert("FMS020110DAO.islndsUseC", insertMap);
                }
                break;
            case DataSet.ROW_TYPE_UPDATED :
                Map updateMap = list.get(x);
                String[] useQyUdtVal = {updateMap.get("CAR_QY").toString(),updateMap.get("MAN_QY").toString()};
                for(int i = 0; i < 2; i++){
                    updateMap.put("USE_QY", useQyUdtVal[i]);
                    updateMap.put("USE_SE", "0"+ Integer.toString(i+1));
                    baseDao.insert("FMS020110DAO.islndsUseU", updateMap);
                }
                break;
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("FMS020110DAO.islndsUseD", map);
                break;
			}
		}
	}
}