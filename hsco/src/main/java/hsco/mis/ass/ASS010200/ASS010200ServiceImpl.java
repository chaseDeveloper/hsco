package hsco.mis.ass.ASS010200;

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
 * @Class Name   	: SAL010101ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 8.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 8.	       이혜선		    최초생성
 * </pre>  
 */
@Service("ASS010200Service")
public class ASS010200ServiceImpl  extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 자산대장 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void assetsMastrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;	
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ASS010200DAO.assetsMastrList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
	

    /**
	 * 감가상각내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void assetsMastrR( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records1;
		List <Map> records2;
		List <Map> records3;
		

		records1 = (List<Map>)baseDao.list("ASS010200DAO.assetsMastrR", inMap);	
		records2 = (List<Map>)baseDao.list("ASS010200DAO.assetsMastrHist", inMap);
		records3 = (List<Map>)baseDao.list("ASS010200DAO.assetsEmpR", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		DataSetMap outDsMap3 = new DataSetMap();
		outDsMap3.setRowMaps(records3);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		
    }
    
    /**
	 * 소프트웨어 자산대장CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int assetsMastrCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ASS010200DAO.assetsSwU", map);
					break;
			}	
		}
		
		
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");
		
		int listSize2 = (list2 == null) ? 0 : list2.size();
		
		for (int x = 0; x < listSize2; x++) {
			Map map = list2.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ASS010200DAO.assetsSwEmpC", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("ASS010200DAO.assetsSwEmpD", map);
					break;
			}	
		}
				
		return iRow;
		
	}
	
    
    /**
	 * 소프트웨어 자산대장CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int assetsSwEmpCD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("ASS010200DAO.assetsSwEmpC", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("ASS010300DAO.assetsSwEmpD", map);
					break;
			}	
		}
		
		return iRow;
		
	}

	
	
	
}
