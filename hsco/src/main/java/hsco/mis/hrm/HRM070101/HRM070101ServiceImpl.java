package hsco.mis.hrm.HRM070101;

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
 * @Class Name   	: HRM070101ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 9. 8.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 8.	이혜선			최초생성
 * </pre>  
 */

@Service("HRM070101Service")
public class HRM070101ServiceImpl extends BaseService implements HRM070101Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 휴무정보를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmHvofInfoList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		// 등록된 휴무 정보 조회
		List <Map> records;
		records = (List<Map>)baseDao.list("HRM070101DAO.tbhrmHvofInfoList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		// 검색조건에 해당하는 년도의 명절 조회
		List <Map> records1;
		records1 = (List<Map>)baseDao.list("HRM070101DAO.selectSolarList", inMap);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap1);
		
	}
    
  
    
	/**
	 * 휴무정보CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int tbhrmHvofInfoCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input2");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					baseDao.insert("HRM070101DAO.tbhrmHvofInfoC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					break;
				case DataSet.ROW_TYPE_DELETED :
					//baseDao.delete("HRM070101DAO.tbhrmHvofInfoOneDayDel", map);
					break;
			}	
		}
		
		return iRow;
		
	}
	
	/**
	 * 휴무정보 초기화CUD
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return 
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int tbhrmHvofInfoD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input3");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		baseDao.delete("HRM070101DAO.tbhrmHvofInfoD", inMap);
		
		return iRow;
	}
	
	/**
	 * 해당 날짜의 일정 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return 
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int tbhrmHvofInfoOneDayDel( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input4");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		log.debug(">>>>>>>>> HVOF_DE = " + inMap.get("HVOF_DE"));
		baseDao.delete("HRM070101DAO.tbhrmHvofInfoOneDayDel", inMap);
		
		return iRow;
	}
	
}