package hsco.cmm.cmmCode.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.cmmCode.service.CmmCodeService;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("cmmCodeService")
public class CmmCodeServiceImpl extends BaseService implements CmmCodeService {
	
	protected Logger log = LoggerFactory.getLogger(CmmCodeServiceImpl.class);
	

	@SuppressWarnings("rawtypes")
	public void cmmCodeList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception {
		if(log.isInfoEnabled())
			log.info("cmmCodeList started!");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List)baseDao.list("cmmCodeDAO.cmmCodeList", inMap, false);
		} else {
			records = (List)baseDao.list("cmmCodeDAO.cmmCodeList", inVar, false);
		}
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

	@SuppressWarnings("rawtypes")
	public void cmmCodeList2(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			//cmmCodeDAO.cmmCodeList2
			records = (List)baseDao.list("cmmCodeDAO.cmmCodeList2", inMap, false);
		} else {
			records = (List)baseDao.list("cmmCodeDAO.cmmCodeList2", inVar, false);
		}
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

	@SuppressWarnings({ "rawtypes" })
	public void cmmCodeList3(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		// cmmCodeDAO.cmmCodeList3		
		List <Map> records = (List)baseDao.list("cmmCodeDAO.cmmCodeList3", inDsMap.getRowMaps(), false);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void cmmServerDate(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws Exception {
		
		//DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		// cmmCodeDAO.cmmCodeList3		
		List <Map> records = (List)baseDao.list("cmmCodeDAO.cmmServerDate", false);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	
	public void cmmMenuList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset){
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
        Map<String, Object> inMap = new HashMap<String, Object>();
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		records = (List)baseDao.list("menuDAO.menuListByLevel", inMap, false);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
}
