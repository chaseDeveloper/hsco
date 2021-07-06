package hsco.hpm.ctm.HPM060107;

import java.util.ArrayList;
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
@Service("HPM060107Service")
public class HPM060107ServiceImpl extends BaseService {

protected Logger log = LoggerFactory.getLogger(HPM060107ServiceImpl.class);
	
    
    /**
     * 프로그램 목록
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectProgrmManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	 
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("HPM060107DAO.selectProgrmManageList", inMap);		
		

		if(inMap != null){
			DataSetMap dsSetMap1 = selectProgrmTyList(inMap, "1");
			if(dsSetMap1 != null)
			    outDataset.put("output2", dsSetMap1);
			DataSetMap dsSetMap2 = selectProgrmTyList(inMap, "2");
			if(dsSetMap2 != null)
			    outDataset.put("output3", dsSetMap2);
			DataSetMap dsSetMap3 = selectProgrmTyList(inMap, "3");
			if(dsSetMap3 != null)
			    outDataset.put("output4", dsSetMap3);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
    	
		
	}
    
    /**
     * 프로그램유형 목록(전체)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings("rawtypes")
	public void selectProgrmTyList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		if(inMap != null){
			DataSetMap dsSetMap1 = selectProgrmTyList(inMap, "1");
			if(dsSetMap1 != null)
			    outDataset.put("output1", dsSetMap1);
			DataSetMap dsSetMap2 = selectProgrmTyList(inMap, "2");
			if(dsSetMap2 != null)
			    outDataset.put("output2", dsSetMap2);
			DataSetMap dsSetMap3 = selectProgrmTyList(inMap, "3");
			if(dsSetMap3 != null)
			    outDataset.put("output3", dsSetMap3);
		}
		
	}
    
	/**
	 * 프로그램유형 목록(유형별)
	 * @param inMap
	 * @param seAccCode
	 * @return
	 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	private DataSetMap selectProgrmTyList(Map inMap, String tyCode) {
    	inMap.put("TY_CODE", tyCode);
    	List <Map> records = (List<Map>)baseDao.list("HPM060107DAO.selectProgrmTyList", inMap);
    	DataSetMap outDsMap = new DataSetMap();
    	outDsMap.setRowMaps(records);
    	return outDsMap;
    }
    
    

	/**
	 * 프로그램유형 저장(전체)
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings("rawtypes")
	public int selectProgrmCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap input1 = (DataSetMap) inDataset.get("input1");
		DataSetMap input2 = (DataSetMap) inDataset.get("input2");
		DataSetMap input3 = (DataSetMap) inDataset.get("input3");
		
		iRow  = saveProgrmTyManageCUD(iRow, input1);
		iRow += saveProgrmTyManageCUD(iRow, input2);
		iRow += saveProgrmTyManageCUD(iRow, input3);
				
		DataSetMap list = (DataSetMap) inDataset.get("input4");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060107DAO.selectProgrmManageC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("HPM060107DAO.selectProgrmManageU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060107DAO.selectProgrmManageD", map);
					break;
			}	
			
		}
		
		return iRow;
		
	}

	/**
	 * 프로그램유형 저장(유형별)
	 * @param iRow
	 * @param input
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	private int saveProgrmTyManageCUD(int iRow, DataSetMap input) {
		int listSize = (input == null) ? 0 : input.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = input.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HPM060107DAO.selectProgrmTyC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("HPM060107DAO.selectProgrmTyU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("HPM060107DAO.selectProgrmTyD", map);
					break;
			}	
			
		}
		return iRow;
	}

    /**
	 * 프로그램유형 코드 조회(팝업)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectProgrmTyCode( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	

    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		records = (List<Map>)baseDao.list("HPM060107DAO.selectItemList", inMap);		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
		
		records = (List<Map>)baseDao.list("HPM060107DAO.selectBanList", inMap);		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output2", outDsMap);
		
		records = (List<Map>)baseDao.list("HPM060107DAO.selectGradList", inMap);		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output3", outDsMap);
		
		records = (List<Map>)baseDao.list("HPM060107DAO.selectFcltyList", inMap);		
		outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output4", outDsMap);
	}
}
