package hsco.cmm.log;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("Log2Service")
public class Log2ServiceImpl extends BaseService implements Log2Service {
	protected Logger log = LoggerFactory.getLogger(Log2ServiceImpl.class);

	@SuppressWarnings({ "rawtypes" })
	public int saveIndivisualInfoLog(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		if (log.isInfoEnabled()) {
			log.info("saveIndivisualInfoLog started!");
		}

		int iRow = 0;
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			baseDao.insert("LOG.insertindvdlLog", map);
		}

		return iRow;
	}


	/**
	 * 화면 사용이력 추가
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void savePageUseLog(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			
			baseDao.insert("LOG.insertPageUseLog", map);
		}
	}
}