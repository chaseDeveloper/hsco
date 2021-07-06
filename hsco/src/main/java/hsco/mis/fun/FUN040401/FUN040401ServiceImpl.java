package hsco.mis.fun.FUN040401;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.mis.fun.FUN030101.FUN030101Service;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: FUN040401ServiceImpl.java
 * @Description  	: 수입/지출계획등록 현황을 관리하는 서비스 구현체 클래스
 * @author       	: 양성모
 * @since        	: 2015. 07. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 24.				   양성모				최초생성
 * </pre>  
 */

@Service("fun040401Service")
public class FUN040401ServiceImpl extends BaseService implements FUN040401Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    /**
	 * 집행금액 현황 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectExcutctInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN040401DAO.selectExcutctInfo", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

    /**
	 * 년월별 주 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectWeekList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records   = (List<Map>)baseDao.list("FUN040401DAO.selectWeekList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	} 	
	
    /**
	 * 월간, 계획외지출 계획 현황 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectMnthngCptalPlanList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		List <Map> records2;

		records1 = (List<Map>)baseDao.list("FUN040401DAO.selectMnthngCptalPlanList", inMap);		
		records2 = (List<Map>)baseDao.list("FUN040401DAO.selectEtcCptalPlanList", inMap);
		
		
		DataSetMap outDsMap1 = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		
		outDsMap1.setRowMaps(records1);
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);		
	}
	
    /**
	 * 주간 계획 등록 현황 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings("rawtypes")
	public void selectWikCptalPlanList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("FUN040401DAO.selectWikCptalPlanList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 수입/지출계획 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int cptalPlanCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		String parentKey = null;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		// 월간계획 저장
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("FUN040401DAO.MnthngCptalPlanC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN040401DAO.MnthngCptalPlanU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN040401DAO.MnthngCptalPlanD", map);
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();
		
		// 주간계획 저장
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
                    parentKey = (String) baseDao.select("FUN040401DAO.selectSn", map); // 일련번호 조회
                    map.put("SN", parentKey);
					baseDao.insert("FUN040401DAO.WikCptalPlanC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN040401DAO.WikCptalPlanU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN040401DAO.WikCptalPlanD", map);
					break;
			}	
		}
		
		list = (DataSetMap) inDataset.get("input3");
		
		listSize = (list == null) ? 0 : list.size();
		
		// 계획외지출 저장
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
                    parentKey = (String) baseDao.select("FUN040401DAO.selectSn", map); // 일련번호 조회
                    map.put("SN", parentKey);
					baseDao.insert("FUN040401DAO.WikCptalPlanC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN040401DAO.WikCptalPlanU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN040401DAO.WikCptalPlanD", map);
					break;
			}	
		}		

		return iRow;	
	}

	
	/**
	 * 주간 수입/지출계획 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int wikCptalPlanCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		int iRow = 0;
		String parentKey = null;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
                    parentKey = (String) baseDao.select("FUN040401DAO.selectSn", map); // 일련번호 조회
                    map.put("SN", parentKey);
                    
					baseDao.insert("FUN040401DAO.WikCptalPlanC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("FUN040401DAO.WikCptalPlanU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("FUN040401DAO.WikCptalPlanD", map);
					break;
			}	
		}		

		return iRow;
	
	}
	
	
	/**
	 * 주간/계획 자금배정 팝업 CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public void popUpCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		String parentKey = null;
		
		List <Map> records = new ArrayList<Map>();
		DataSetMap outDsMap = new DataSetMap();
		Map map1 = new HashMap<String, String>();
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
                    parentKey = (String) baseDao.select("FUN040401DAO.selectSn", map); // 일련번호 조회
                    map.put("SN", parentKey);
                    
					baseDao.insert("FUN040401DAO.WikCptalPlanC", map);					
					records = (List<Map>) baseDao.list("FUN040401DAO.selectPopUpKey", map); // 팝업에서 수정된 정보의 키값 조회
					
					map1 = records.get(0);
					map1.put("TYPE", "C");
					records.set(0, map1);
					outDsMap.setRowMaps(records);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("FUN040401DAO.WikCptalPlanU", map);
					
					map1.put("TYPE", "U");
					records.add(0, map1);
					outDsMap.setRowMaps(records);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("FUN040401DAO.WikCptalPlanD", map);
					
					map1.put("TYPE", "D");
					records.add(0, map1);
					outDsMap.setRowMaps(records);					
					break;
			}	
		}	
		
		list = (DataSetMap) inDataset.get("input2");
		
		listSize = (list == null) ? 0 : list.size();
		

		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED :
                parentKey = (String) baseDao.select("FUN040401DAO.selectSn", map); // 일련번호 조회
                map.put("SN", parentKey);
                
				baseDao.insert("FUN040401DAO.WikCptalPlanC", map);
				records = (List<Map>)baseDao.list("FUN040401DAO.selectPopUpKey", map); // 팝업에서 생성된 정보의 키값 조회

				map1 = records.get(0);
				map1.put("TYPE", "C");
				records.set(0, map1);
				outDsMap.setRowMaps(records);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("FUN040401DAO.WikCptalPlanU", map);
				
				map1.put("TYPE", "U");
				records.add(0, map1);
				outDsMap.setRowMaps(records);				
				break;
			case DataSet.ROW_TYPE_DELETED :
				baseDao.delete("FUN040401DAO.WikCptalPlanD", map);
				
				map1.put("TYPE", "D");
				records.add(0, map1);
				outDsMap.setRowMaps(records);				
				break;
			}	
		}
		
		outDataset.put("output1", outDsMap);
	
	}	
	
}
