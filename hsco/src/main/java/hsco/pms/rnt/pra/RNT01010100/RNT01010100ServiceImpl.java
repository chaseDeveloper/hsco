package hsco.pms.rnt.pra.RNT01010100;

import java.util.HashMap;
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
import hsco.cmm.util.ObjectUtil;

@Service("RNT01010100Service")
public class RNT01010100ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 임대주택 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentHouseList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01010100DAO.rentHouseList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 임대주택 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentHouseCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
						
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01010100DAO.rentHouseC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01010100DAO.rentHouseU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("RNT01010100DAO.rentHouseD", map);
			}
		}
	} 
	
	/**
	 * 임대주택 동 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void rentHouseDongList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01010100DAO.rentHouseDongList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	/**
	 * 임대주택 동 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void rentHouseDongCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01010100DAO.rentHouseDongC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01010100DAO.rentHouseDongU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.update("RNT01010100DAO.rentHouseDongD", map);
			}
		}
	} 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void intrtInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT01010100DAO.intrtInfoList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	@SuppressWarnings({ "rawtypes" })
	
	public void intrtInfoCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01010100DAO.intrtInfoC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01010100DAO.intrtInfoU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT01010100DAO.intrtInfoD", map);
			}
		}
	}
	
	/**
	 * 임대주택 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void rentHouseAllCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		//임대주택정보
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				Map tempMap = new HashMap<String, Object>();
				tempMap.put("rentHouseCode", map.get("RENT_HOUSE_CODE"));
				tempMap.put("useAt", "%");
				
				List <Map> records = (List<Map>)baseDao.list("RNT01010100DAO.rentHouseList", tempMap);
				if(records.size() > 0){
					throw new NexaServiceException("info.항목.중복.재입력.요청", "주택코드");
				}
				
				baseDao.insert("RNT01010100DAO.rentHouseC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01010100DAO.rentHouseU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT01010100DAO.rentHouseDongD", map);
				baseDao.delete("RNT01010100DAO.rentHouseD", map);
			}
		}
		
		//임대주택동정보
		list = (DataSetMap) inDataset.get("input2");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				baseDao.insert("RNT01010100DAO.rentHouseDongC", map);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				baseDao.update("RNT01010100DAO.rentHouseDongU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED ){
				baseDao.delete("RNT01010100DAO.rentHouseDongD", map);
			}
		}
	} 
}
