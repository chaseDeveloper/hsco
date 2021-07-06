package hsco.mis.hrm.HRM070118;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service("HRM070118Service")
public class HRM070118ServiceImpl extends BaseService {

	/**
	 * 보상전환 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOvtmwrkReword(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM070118DAO.selectOvtmwrkReword", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}

    /**
     * 보상전환 조회
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEmpReward(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        DataSetMap outDsMap = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        inMap.put("ASORT_CODE", "31");
        List<Map> records = (List<Map>) baseDao.list("HRM070118DAO.selectEmpReward", inMap);
        
        inMap.put("ASORT_CODE", "300");
        List<Map> records2 = (List<Map>) baseDao.list("HRM070118DAO.selectEmpReward", inMap);
        
        outDsMap.setRowMaps(records);
        outDataset.put("output1", outDsMap);
        
        outDsMap2.setRowMaps(records2);
        outDataset.put("output2", outDsMap2);
    }

    /**
     * 보상·대체휴가 팝업조회
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectRewordManage(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }

        List<Map> records = (List<Map>) baseDao.list("HRM070118DAO.selectRewordManage", inMap);

        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output1", outDsMap);
    }

    /**
     * 보상·대체휴가 추가
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void saveRewordManage(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
            String seq = (String) baseDao.select("HRM070102DAO.selectStrSeqNo", inMap);
            inMap.put("SEQ", seq);
            String rewardSeq = (String) baseDao.select("HRM070118DAO.selectStrSeqNo", inMap);
            inMap.put("REWARD_SEQ", rewardSeq);
            baseDao.insert("HRM070118DAO.tbhrmWrkcpC", inMap);
            baseDao.insert("HRM070118DAO.saveRewordManage", inMap);
        }
    }
    

    /**ss
     * 보상·대체휴가 삭제
     * 
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void deleteRewordManage(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
            inMap.put("SEQ", inMap.get("WRKCP_SEQ"));
            baseDao.delete("HRM070102DAO.tbhrmWrkcpD", inMap);
            baseDao.delete("HRM070118DAO.deleteRewordManage", inMap);
        }
    }
    
    /**
     * 휴무를 제외한 신청일자 확인
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void chkHolyDe(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}

		List<Map> records = (List<Map>) baseDao.list("HRM070118DAO.chkHolyDe", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
}
