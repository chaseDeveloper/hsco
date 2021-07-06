package hsco.hpm.ctm.HPM060102;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HPM060102ServiceImpl.java
 * @Description  	: 휴일관리
 * @author       	: 정 민
 * @since        	: 2017. 08. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 08. 23.					정 민			최초생성
 * </pre>  
 */

@Service("HPM060102Service")
public class HPM060102ServiceImpl extends BaseService {
	
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
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("HPM060102DAO.tbhrmHvofInfoList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
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
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.insert("HPM060102DAO.tbhrmHvofInfoC", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("HPM060102DAO.tbhrmHvofInfoOneDayDel", map);
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
		baseDao.delete("HPM060102DAO.tbhrmHvofInfoD", inMap);
		
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
		baseDao.delete("HPM060102DAO.tbhrmHvofInfoOneDayDel", inMap);
		
		return iRow;
	}
	
    /**
	 * 휴일정보 이관
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void trnsferHvofInfo( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
			
		// 기존정보 삭제
		baseDao.delete("HPM060102DAO.tbhrmHvofInfoAllD", inMap);	
		
		// 화성도시공사 홈페이지 시설 정보 조회
		List<Map<String, Object>> hvofInfoList = (List<Map<String, Object>>) hscoHomePageDao.list("HomepageDAO.selectHvofInfoList", inMap);	
		
		// 대관시설관리 테이블에 데이터 입력
		for(Map<String, Object> hvofInfoMap : hvofInfoList) {
			hvofInfoMap.put("DEPT_CODE", inMap.get("DEPT_CODE"));
			baseDao.insert("HPM060102DAO.tbhrmHvofInfoC", hvofInfoMap);				
		}
	}
}