package hsco.pms.cmp.CMP070100;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CMP070100ServiceImpl.java
 * @Description  	: 보상현황
 * @author       	: 지효정
 * @since        	: 2015. 8. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * </pre>  
 */
@Service("CMP070100Service")
public class CMP070100ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(CMP070100ServiceImpl.class);
			
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingWtnnc00List(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaDaoException {
		
		if(log.isInfoEnabled()) log.info("thingWtnnc00List Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if(inMap != null){
			String sParam = (String)inMap.get("THING_CL");
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		
		
		records = (List<Map>)baseDao.list("CMP070100DAO.thingWtnnc00List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void thingWtnnc01List(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if(inMap != null){
			String sParam = (String)inMap.get("THING_CL");
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		
		
		records = (List<Map>)baseDao.list("CMP070100DAO.thingWtnnc01List", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
}
