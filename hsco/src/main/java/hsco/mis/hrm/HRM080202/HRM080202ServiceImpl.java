package hsco.mis.hrm.HRM080202;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : HRM080202Service.java
 * @Description     : 인사교육관리 서비스 클래스
 * @author          : 김형태
 * @since           : 2017. 05. 31.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017.05. 31.                    김형태              최초생성
 * </pre>  
 */

@Service("HRM080202Service")
public class HRM080202ServiceImpl extends BaseService implements HRM080202Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	/**
	 * 수요조사 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDmandExaminList( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HRM080202DAO.selectDmandExaminList", inMap));
		outDataset.put("output1", outDsMap);
	}
	
	/**
	 * 수요조사의견(TAB 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectDmandExaminOpinion( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		if (inDsMap != null) {
			inMap = inDsMap.get(0);
		}
		
		// 운영방안의견
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps((List<Map>) baseDao.list("HRM080202DAO.selectOperMethodOpinion", inMap));
		outDataset.put("output1", outDsMap1);
		
		// 희망신규교육
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps((List<Map>) baseDao.list("HRM080202DAO.selectHopeNewEdc", inMap));
		outDataset.put("output2", outDsMap2);
		
		// 희망위탁교육
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps((List<Map>) baseDao.list("HRM080202DAO.selectHopeTruedu", inMap));
		outDataset.put("output3", outDsMap3);
		
		// 환경개선의견
		DataSetMap outDsMap4 = new DataSetMap();
		outDsMap4.setRowMaps((List<Map>) baseDao.list("HRM080202DAO.selectEnvrnImprvmOpinion", inMap));
		outDataset.put("output4", outDsMap4);
		
		// 희망위탁교육기관
		DataSetMap outDsMap5 = new DataSetMap();
		outDsMap5.setRowMaps((List<Map>) baseDao.list("HRM080202DAO.selectHopeTrueduInstt", inMap));
		outDataset.put("output5", outDsMap5);
		
		// 희망강사
		DataSetMap outDsMap6 = new DataSetMap();
		outDsMap6.setRowMaps((List<Map>) baseDao.list("HRM080202DAO.selectHopeInstrctr", inMap));
		outDataset.put("output6", outDsMap6);
		
		// 집단교육계획
		DataSetMap outDsMap7 = new DataSetMap();
		outDsMap7.setRowMaps((List<Map>) baseDao.list("HRM080202DAO.selectGrupEdcPlan", inMap));
		outDataset.put("output7", outDsMap7);
	}
	
	/**
	 * 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public void save( DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		// 운영방안의견
		DataSetMap list1 = (DataSetMap) inDataset.get("input1");	
		for (int x = 0; x < list1.size(); x++) {
			Map map = list1.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM080202DAO.updateOperMethodOpinion", map);
					break;
			}	
		}
		
		// 희망신규교육
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");	
		for (int x = 0; x < list2.size(); x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					baseDao.insert("HRM080202DAO.insertHopeNewEdc", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HRM080202DAO.updateHopeNewEdc", map);
					break;
				case DataSet.ROW_TYPE_DELETED:
					baseDao.delete("HRM080202DAO.deleteHopeNewEdc", map);
					break;
			}
		}
		
		// 희망위탁교육
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");	
		for (int x = 0; x < list3.size(); x++) {
			Map map = list3.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM080202DAO.insertHopeTruedu", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("HRM080202DAO.updateHopeTruedu", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("HRM080202DAO.deleteHopeTruedu", map);
				break;
			}
		}
		
		// 환경개선의견
		DataSetMap list4 = (DataSetMap) inDataset.get("input4");	
		for (int x = 0; x < list4.size(); x++) {
			Map map = list4.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM080202DAO.insertEnvrnImprvmOpinion", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("HRM080202DAO.updateEnvrnImprvmOpinion", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("HRM080202DAO.deleteEnvrnImprvmOpinion", map);
				break;
			}
		}
		
		// 희망위탁교육기관
		DataSetMap list5 = (DataSetMap) inDataset.get("input5");	
		for (int x = 0; x < list5.size(); x++) {
			Map map = list5.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM080202DAO.insertHopeTrueduInstt", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("HRM080202DAO.updateHopeTrueduInstt", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("HRM080202DAO.deleteHopeTrueduInstt", map);
				break;
			}
		}
		
		// 희망강사
		DataSetMap list6 = (DataSetMap) inDataset.get("input6");	
		for (int x = 0; x < list6.size(); x++) {
			Map map = list6.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM080202DAO.insertHopeInstrctr", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("HRM080202DAO.updateHopeInstrctr", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("HRM080202DAO.deleteHopeInstrctr", map);
				break;
			}
		}
		
		// 집단교육계획
		DataSetMap list7 = (DataSetMap) inDataset.get("input7");	
		for (int x = 0; x < list7.size(); x++) {
			Map map = list7.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
			case DataSet.ROW_TYPE_INSERTED:
				baseDao.insert("HRM080202DAO.insertGrupEdcPlan", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				baseDao.update("HRM080202DAO.updateGrupEdcPlan", map);
				break;
			case DataSet.ROW_TYPE_DELETED:
				baseDao.delete("HRM080202DAO.deleteGrupEdcPlan", map);
				break;
			}
		}
		
	}

}
