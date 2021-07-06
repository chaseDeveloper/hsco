package hsco.mis.sal.SAL030113;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;


@Service("SAL030113Service")
public class SAL030113ServiceImpl extends BaseService {

	protected Logger log = LoggerFactory.getLogger(SAL030113ServiceImpl.class);
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSalaryPymntList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        List deptList = baseDao.list("SAL030113DAO.selectDeptList", inMap);
        inMap.put("deptList", deptList);
        
        List resultList = baseDao.list("SAL030113DAO.selectSalaryPymntList", inMap);
        
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps(deptList);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(resultList);
        
        
        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectSalaryDdcList(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
		Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        List ddcList = baseDao.list("SAL030113DAO.selectDdcList", inMap);
        inMap.put("ddcList", ddcList);
        
        List resultList = baseDao.list("SAL030113DAO.selectSalaryDdcList", inMap);
        
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps(ddcList);
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(resultList);
        
        
        outDataset.put("output1", outDsMap1);
        outDataset.put("output2", outDsMap2);
	}
	
}