package hsco.dev.codegen;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("CodegenService")
public class CodegenServiceImpl extends BaseService implements CodegenService {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	

	public void listTBL( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		if(log.isInfoEnabled())
		    log.info("listTbl called");
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CodegenDAO.listTbls", inMap);		

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	public void listColums( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CodegenDAO.listCols", inMap);		

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	public void listTBLPrefix( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("CodegenDAO.gbList", inMap);		

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	

//	@SuppressWarnings({ "rawtypes", "unchecked" })
//	public int save(DataSetMap tranInfo, Map<String, Object> inVar,Map<String, DataSetMap> inDataset, 
//			Map<String, Object> outVar,Map<String, DataSetMap> outDataset, String qryId) throws Exception {
//
//		int iRow = 0;
//		
//		DataSetMap list = (DataSetMap) inDataset.get("input1");
//
//		for (int x = 0; x < list.size(); x++) {
//
//			Map map = list.get(x);
//			ObjectUtil.setUserToMap(map);
//
//			//DataSet에 Parameter를 추가
//			Iterator<String> keys = inVar.keySet().iterator();
//			while( keys.hasNext() ){
//				String key = keys.next();
//				map.put(key, inVar.get(key));
//			}
//
//			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
//			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
//				dao.insert(qryId+'C', map);
//			}else if (rowType == DataSet.ROW_TYPE_UPDATED){
//				iRow += dao.update(qryId+'U', map);
//			}else if (rowType == DataSet.ROW_TYPE_DELETED){
//				iRow += dao.delete(qryId+'D', map);
//			}
//		}
//		return iRow;
//	}
}
