package hsco.pms.rnt.pra.RNT01051501;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

@Service("RNT01051501Service")
public class RNT01051501ServiceImpl extends BaseService{
	
	//SMS발송내역 조회
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectRentHouseSmsList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01051501DAO.selectRentHouseSmsList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	//SMS발송내역 저장
	@SuppressWarnings({ "rawtypes" })
	
	public void saveRentHouseSmsList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list==null) ? 0 : list.size(); 
//System.out.println("listSize ====================" + listSize);		
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01051501DAO.insertRentHouseSmsList", map);
			}
			else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				
			}
			else if(rowType == DataSet.ROW_TYPE_DELETED ){
				
			}
		}
	} 
	
	
}
