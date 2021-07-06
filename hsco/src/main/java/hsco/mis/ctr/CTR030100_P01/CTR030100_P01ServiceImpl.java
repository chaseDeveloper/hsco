package hsco.mis.ctr.CTR030100_P01;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("CTR030100_P01Service")
public class CTR030100_P01ServiceImpl extends BaseService implements CTR030100_P01Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 계약변경내역 목록
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntrctChangeList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("CTR030100_P01DAO.cntrctChangeList", inMap));
		outDataset.put("output1", outDsMap);
	}

	/**
	 * 계약변경내역 저장
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void cntrctChangeCUD(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");
		int listSize = (list1 == null) ? 0 : list1.size();
		for (int x = 0; x < listSize; x++) {
			Map map1 = list1.get(x);
			int rowType = ((Integer) map1.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					String insOdr = (String) baseDao.select("CTR030100_P01DAO.selectCntrctChangeOdr", map1);
					map1.put("CNTRCT_CHANGE_ODR", insOdr);

					baseDao.insert("CTR030100_P01DAO.cntrctChangeC", map1);     // 변경계약 추가
					baseDao.update("CTR030100_P01DAO.updateCntrct", map1);      // 계약 갱신
					break;
				case DataSet.ROW_TYPE_UPDATED:
					baseDao.update("CTR030100_P01DAO.cntrctChangeU", map1);
					baseDao.update("CTR030100_P01DAO.updateCntrct", map1);      // 계약 갱신
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("CTR030100_P01DAO.cntrctChangeD", map1);
					baseDao.update("CTR030100_P01DAO.updateCntrct", map1);      // 계약 갱신
					break;
			}
		}
	}
}