package hsco.hpm.ctm.HPM060108;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HPM060107ServiceImpl.java
 * @Description  	: 프로그램 관리하는 서비스 구현체 클래스
 * @author       	: 정 민
 * @since        	: 2017. 10. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 10. 13.				   정 민				최초생성
 * </pre>  
 */
@Service("HPM060108Service")
public class HPM060108ServiceImpl extends BaseService {

protected Logger log = LoggerFactory.getLogger(HPM060108ServiceImpl.class);
	
    
    /**
     * 테니스장이용관리 목록
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectTnncrtUseManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	 
	    DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
		    inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM060108DAO.selectCentralparkTnncrtManageList", inMap));
		outDataset.put("output1", outDsMap);
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM060108DAO.selectDolmoruTnncrtManageList", inMap));
		outDataset.put("output2", outDsMap);
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM060108DAO.selectDongtanBadmcrtManageList", inMap));
		outDataset.put("output3", outDsMap);
		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM060108DAO.selectParkGlcrsManageList", inMap));
		outDataset.put("output4", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM060108DAO.selecthyangnamParkGlcrsManageList", inMap));
		outDataset.put("output5", outDsMap);

		outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>) baseDao.list("HPM060108DAO.selectAchsteManageList", inMap));
		outDataset.put("output6", outDsMap);
	
	}

    

	/**
	 * 테니스장이용관리 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings("rawtypes")
	public void saveTnncrtUseManageCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

		DataSetMap list1 = (DataSetMap) inDataset.get("input1");	// 센트럴파크테니스장
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");	// 돌모루테니스장
		DataSetMap list3 = (DataSetMap) inDataset.get("input3");	// 동탄배드민턴장
		DataSetMap list4 = (DataSetMap) inDataset.get("input4");	// 동탄파크골프장
		DataSetMap list5 = (DataSetMap) inDataset.get("input5");	// 향남파크골프장
		DataSetMap list6 = (DataSetMap) inDataset.get("input6");	// 화성정궁도장
		
		// 센트럴파크테니스장
		int listSize1 = (list1 == null) ? 0 : list1.size();
		
		for (int x = 0; x < listSize1; x++) {
				
			Map map = list1.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060108DAO.centralparkTnncrtManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060108DAO.centralparkTnncrtManageU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060108DAO.centralparkTnncrtManageD", map);
					break;
			}	
			
		}
		
		// 돌모루테니스장
		int listSize2 = (list2 == null) ? 0 : list2.size();
		
		for (int x = 0; x < listSize2; x++) {
				
			Map map = list2.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060108DAO.dolmoruTnncrtManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060108DAO.dolmoruTnncrtManageU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060108DAO.dolmoruTnncrtManageD", map);
					break;
			}	
			
		}
		
		// 동탄배드민턴장
		int listSize3 = (list3 == null) ? 0 : list3.size();
		
		for (int x = 0; x < listSize3; x++) {
				
			Map map = list3.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060108DAO.dongtanBadmcrtManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060108DAO.dongtanBadmcrtManageU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060108DAO.dongtanBadmcrtManageD", map);
					break;
			}	
			
		}
		
		// 동탄파크골프장
		int listSize4 = (list4 == null) ? 0 : list4.size();
		
		for (int x = 0; x < listSize4; x++) {
				
			Map map = list4.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060108DAO.parkGlcrsManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060108DAO.parkGlcrsManageU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060108DAO.parkGlcrsManageD", map);
					break;
			}	
			
		}
		
		// 향남파크골프장
		int listSize5 = (list5 == null) ? 0 : list5.size();
		
		for (int x = 0; x < listSize5; x++) {
				
			Map map = list5.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060108DAO.hyangnamParkGlcrsManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060108DAO.hyangnamParkGlcrsManageU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060108DAO.hyangnamParkGlcrsManageD", map);
					break;
			}	
		}
		
		// 화성정궁도장
		int listSize6 = (list6 == null) ? 0 : list6.size();
		
		for (int x = 0; x < listSize6; x++) {
				
			Map map = list6.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060108DAO.achsteManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060108DAO.achsteManageU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060108DAO.achsteManageD", map);
					break;
			}	
		}
	}
}
