package hsco.pms.sls.lad.stt.SLS110103;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("SLS110103Service")
public class SLS110103ServiceImpl extends BaseService implements SLS110103Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    //houseTyCodeList
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void dualList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		Map inMap = null;

		if (inDsMap != null)
			inMap = inDsMap.get(0);

		List <Map> records;

		records = (List<Map>)baseDao.list("SLS110103DAO.dualList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);

		outDataset.put("output1", outDsMap);
	}
}
