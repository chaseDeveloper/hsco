package hsco.pms.fms.FMS020111;

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

@Service("FMS020111Service")
public class FMS020111ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 간담회목록 조회
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
		outDsMap.setRowMaps((List<Map>) baseDao.list("FMS020111DAO.selectIfmgthdcs", inMap));
		outDataset.put("output1", outDsMap);
	}


    /**
     * 간담회참여자목록 조회
     * 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDetail(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        Map inMap = null;
        DataSetMap inDsMap1 = (DataSetMap) inDataset.get("input1");
        if (inDsMap1 != null) {
            inMap = inDsMap1.get(0);
        }

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("FMS020111DAO.selectIfmgthdcsPrtcpnt", inMap));
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
	@SuppressWarnings({ "rawtypes" })
	@Transactional
	public void save(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		// 간담회 목록
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                baseDao.insert("FMS020111DAO.ifmgthdcsC", map);
            case DataSet.ROW_TYPE_UPDATED :
                baseDao.insert("FMS020111DAO.ifmgthdcsU", map);
                break;
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("FMS020111DAO.ifmgthdcsPrtcpntD", map);
                baseDao.delete("FMS020111DAO.ifmgthdcsD", map);
                break;
			}
		}
		
		//간담회 참여자 목록
        DataSetMap list2 = (DataSetMap) inDataset.get("input2");
        for (int x = 0; x < list2.size(); x++) {
            Map map2 = list2.get(x);
            int rowType = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch (rowType) {
            case DataSet.ROW_TYPE_INSERTED :
                baseDao.insert("FMS020111DAO.ifmgthdcsPrtcpntC", map2);
                break;
            case DataSet.ROW_TYPE_UPDATED :
                baseDao.insert("FMS020111DAO.ifmgthdcsPrtcpntU", map2);
                break;
            case DataSet.ROW_TYPE_DELETED :
                baseDao.delete("FMS020111DAO.ifmgthdcsPrtcpntD", map2);
                break;
            }
        }
	}
}