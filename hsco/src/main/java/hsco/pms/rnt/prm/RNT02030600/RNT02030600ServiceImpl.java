package hsco.pms.rnt.prm.RNT02030600;

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


@Service("RNT02030600Service")
public class RNT02030600ServiceImpl extends BaseService{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/**
	 * 매입임대 명의변경 상세정보
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectNmChangeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02030600DAO.selectNmChangeList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
	
	
	/**
	 * 매입임대 명의변경 처리
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void saveNmChange(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			if ( rowType == DataSet.ROW_TYPE_INSERTED ){
				map.put("mode", "CREATE");
				baseDao.insert("RNT02030600DAO.saveNmChangeC", map);
				
				Map map2 = new HashMap<String, Object>();
				
				map2.put("CNTRCTR_NO", map.get("CNTRCTR_NO"));
				map2.put("PUCHAS_CSTMR_NO", map.get("PUCHAS_CSTMR_NO_AFTCH"));
				map2.put("FAMILY_RELATE", "000");
				
				baseDao.update("RNT02030600DAO.puchasCstmrFamilyU", map2); // 변경후 세대주 update
				baseDao.update("RNT02030600DAO.savePuchasRentCstmrU", map); // 연락처 Update
				
			}else if(rowType == DataSet.ROW_TYPE_UPDATED ){
				map.put("mode", "UPDATE");
				baseDao.update("RNT02030600DAO.puchasNmchangeU", map);
			}else if(rowType == DataSet.ROW_TYPE_DELETED){
				map.put("mode", "DELETE");
				
				String afCstmrNo = (String) map.get("PUCHAS_CSTMR_NO_AFTCH");
				String bfCstmrNo = (String) map.get("PUCHAS_CSTMR_NO_BFCHG");
				
				if(afCstmrNo.equals(bfCstmrNo)){
					//고객테이블 이름 수정
					Map tempMap = new HashMap<String, Object>();
					
					tempMap.put("AF_NM", map.get("BF_NM"));
					tempMap.put("PUCHAS_CSTMR_NO_AFTCH", map.get("PUCHAS_CSTMR_NO_AFTCH"));
					baseDao.update("RNT02030600DAO.savePuchasRentCstmrU", tempMap); // 연락처 Update
				}else {
					Map map2 = new HashMap<String, Object>();
					
					map2.put("CNTRCTR_NO", map.get("CNTRCTR_NO"));
					map2.put("PUCHAS_CSTMR_NO", map.get("PUCHAS_CSTMR_NO_AFTCH"));
					map2.put("FAMILY_RELATE", "");
					
					baseDao.update("RNT02030600DAO.puchasCstmrFamilyU", map2); // 변경후 세대주 update
				}
				baseDao.delete("RNT02030600DAO.puchasNmchangeD", map);
			}
			baseDao.update("RNT02030600DAO.puchasCntrctU", map);
		}
		
	} 	
	
	
	
	/**
	 * 매입임대 명의변경 복원
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 */	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void puchasNmchangeCancel(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			
			// 세션정보 설정
			try {
				ObjectUtil.setUserToMap(map);
			}
			catch( Exception e) {
				throw new NexaServiceException(e); 
			}
			
			map.put("mode", "CANCEL");
			baseDao.delete("RNT02030600DAO.saveNmChangeD", map);
			baseDao.update("RNT02030600DAO.puchasCntrctU", map);
		}
	} 
	
	
	/**
	 * 매입임대 명의변경 레포트 정보
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectNmChangeRpt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("RNT02030600DAO.selectNmChangeRpt", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	} 
}
