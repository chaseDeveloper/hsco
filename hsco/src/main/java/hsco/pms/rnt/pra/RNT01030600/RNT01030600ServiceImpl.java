package hsco.pms.rnt.pra.RNT01030600;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;

@Service("RNT01030600Service")
public class RNT01030600ServiceImpl extends BaseService{
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentNmchangeR( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01030600DAO.rentNmchangeR", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentNmchangeCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				map.put("mode", "CREATE");
				baseDao.insert("RNT01030600DAO.rentNmchangeC", map);
				
				Map map2 = new HashMap<String, Object>();
				
				map2.put("CNTRCTR_NO", map.get("CNTRCTR_NO"));
				map2.put("PRMANENT_CSTMR_NO", map.get("AF_PRMANENT_CSTMR_NO"));
				map2.put("FAMILY_RELATE", "000");
				
				baseDao.update("RNT01030600DAO.rentCstmrFamilyD", map2); // 변경후 세대주 Delete
				baseDao.update("RNT01030600DAO.prmanentRentCstmrU", map); // 연락처 Update
				
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				map.put("mode", "UPDATE");
				baseDao.update("RNT01030600DAO.rentNmchangeU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED){
				map.put("mode", "DELETE");
				
				String afCstmrNo = (String) map.get("AF_PRMANENT_CSTMR_NO");
				String bfCstmrNo = (String) map.get("BF_PRMANENT_CSTMR_NO");
				
				if(afCstmrNo.equals(bfCstmrNo)){
					//고객테이블 이름 수정
					Map tempMap = new HashMap<String, Object>();
					
					tempMap.put("AF_NM", map.get("BF_NM"));
					tempMap.put("AF_PRMANENT_CSTMR_NO", map.get("AF_PRMANENT_CSTMR_NO"));
					baseDao.update("RNT01030600DAO.prmanentRentCstmrU", tempMap); // 연락처 Update
				}else {
					Map map2 = new HashMap<String, Object>();
					
					map2.put("CNTRCTR_NO", map.get("CNTRCTR_NO"));
					map2.put("PRMANENT_CSTMR_NO", map.get("AF_PRMANENT_CSTMR_NO"));
					map2.put("FAMILY_RELATE", "");
					
					baseDao.update("rentCstmrDAO.rentCstmrFamilyC", map2); // 변경후 세대주 update
				}
				baseDao.delete("RNT01030600DAO.rentNmchangeD", map);
			}
			baseDao.update("RNT01030600DAO.rentCntrctU", map);
		}
	} 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentNmchangeCancel(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			map.put("mode", "CANCEL");
			baseDao.delete("RNT01030600DAO.rentNmchangeD", map);
			baseDao.update("RNT01030600DAO.rentCntrctU", map);
		}
	} 
}
