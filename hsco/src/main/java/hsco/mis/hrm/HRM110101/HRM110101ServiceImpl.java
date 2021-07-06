package hsco.mis.hrm.HRM110101;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

@Service("HRM110101Service")
public class HRM110101ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 일용직근로자 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDylrr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap1 = null;
		Map inMap2 = new HashMap();
		
		if (inDsMap != null) {
			inMap1 = inDsMap.get(0);
		}
		
		inMap2.put("USE_AT", "1");
		
		List<Map> records1 = (List<Map>) baseDao.list("HRM110101DAO.selectDylrr", inMap1);
		List<Map> records2 = (List<Map>) baseDao.list("HRM110101DAO.selectFnncInsttCodeList", inMap2);
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}
	
	/**
	 * 일용직근로자 계좌 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDylrrAcnut(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records = (List<Map>) baseDao.list("HRM110101DAO.selectDylrrAcnut", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 일용직근로자팝업 조회
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDylrrPopup(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;
        Map inMap2 = new HashMap();
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		List<Map> records1 = (List<Map>) baseDao.list("HRM110101DAO.selectDylrrPopup", inMap);
        
        inMap2.put("USE_AT", "1");
        List<Map> records2 = (List<Map>) baseDao.list("HRM110101DAO.selectFnncInsttCodeList", inMap2);
		
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap1.setRowMaps(records1);
        outDsMap2.setRowMaps(records2);
        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
	}
	
	/**
	 * 일용직근로자 저장
	 * 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset)
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void saveDylrr(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		int listSize1 = (list1 == null) ? 0 : list1.size();
		String dylrrSeq = null;
		for (int x = 0; x < listSize1; x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					dylrrSeq = (String) baseDao.select("HRM110101DAO.getDylrrSeq", map); // 부모Key에 대하여 미리 get(list2와 동시에 insert 하는 경우)
					map.put("DYLRR_NO", dylrrSeq);
					baseDao.insert("HRM110101DAO.insertDylrr", map);
                    baseDao.insert("HRM110101DAO.insertDylrrAcnut", map);
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("HRM110101DAO.updateDylrr", map);
                    baseDao.update("HRM110101DAO.updateDylrrAcnut", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					
					int cnt = Integer.parseInt((String) baseDao.select("HRM110101DAO.deleteChkDylrrNo", map));
					if(cnt > 0) {
						String nm = map.get("LABRR_NM").toString();
						String errMsg = nm+" 근로자는 일용직 상세내용에서 이미 사용 중입니다.";
						throw new NexaServiceException("info.처리불가", errMsg);
					}
						
					baseDao.delete("HRM110101DAO.deleteDylrrAcnut", map);
					baseDao.delete("HRM110101DAO.deleteDylrr", map);
					break;
			}
		}
	}
}