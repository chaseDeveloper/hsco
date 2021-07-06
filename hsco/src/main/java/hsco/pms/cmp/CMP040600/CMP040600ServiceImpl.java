package hsco.pms.cmp.CMP040600;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CMP040600ServiceImpl.java
 * @Description  	: 보상협의내역
 * @author       	: 지효정
 * @since        	: 2015. 7. 17.
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
@Repository("CMP040600Service")
public class CMP040600ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(CMP040600ServiceImpl.class);
			
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void thingWtnncList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException{
		
		if(log.isInfoEnabled()) log.info("thingWtnncList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		if(inMap != null){
			String sParam = (String)inMap.get("THING_CL");
			inMap.put("ARR_THING_CL", sParam.split(","));
		}

		records = (List<Map>)baseDao.list("CMP040600DAO.thingWtnncList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void thingTotalList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		if(inMap != null){
			String sParam = (String)inMap.get("THING_CL");
			inMap.put("ARR_THING_CL", sParam.split(","));
		}

		records = (List<Map>)baseDao.list("CMP040600DAO.thingTotalList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
}
