package hsco.pms.sls.lad.rci.SLS100204;

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

@Service("SLS100204Service")
public class SLS100204ServiceImpl extends BaseService implements SLS100204Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;

    //토지결의서 목록
  	@SuppressWarnings({ "unchecked", "rawtypes" })
  	public void selectLadDecsnList ( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;
  		
  		records = (List<Map>)baseDao.list("SLS100204DAO.selectLadDecsnList", inMap);
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  	}
  	
  	

  	
  	//토지 수입결의서 조회
  	@SuppressWarnings({ "unchecked", "rawtypes" })
  	public void selectLadIncmeDecsnList ( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;
  		
  		records = (List<Map>)baseDao.list("SLS100204DAO.selectLadIncmeDecsnList", inMap);
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  	}
  	
  	//토지 수입결의서 조회2
  	@SuppressWarnings({ "unchecked", "rawtypes" })
  	public void selectLadIncmeDecsnList2 ( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;
  		
  		records = (List<Map>)baseDao.list("SLS100204DAO.selectLadIncmeDecsnList2", inMap);
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  	}
  	
  	//토지 수입내역서 조회
  	@SuppressWarnings({ "unchecked", "rawtypes" })
  	public void selectLadIncmeDtstmnList ( DataSetMap tranInfo, Map<String, Object> inVar,
  			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
  			Map<String, DataSetMap> outDataset) throws NexaServiceException {
  		
  		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
  		Map inMap = null;
  		
  		if (inDsMap != null)
  			inMap = inDsMap.get(0);
  		
  		List <Map> records;
  		
  		records = (List<Map>)baseDao.list("SLS100204DAO.selectLadIncmeDtstmnList", inMap);
  		
  		DataSetMap outDsMap = new DataSetMap();
  		outDsMap.setRowMaps(records);
  		
  		outDataset.put("output1", outDsMap);
  	}
  	
}
