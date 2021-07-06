package hsco.mis.ass.ASS040500;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SAL010101ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 23.	       이혜선		    최초생성
 * </pre>  
 */
@Service("ass040500Service")
public class ASS040500ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void atldManageList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null && inDsMap.size() > 0)
			inMap = inDsMap.get(0);
		
		List <Map> records1 = (List<Map>)baseDao.list("ASS040500DAO.atldManageList", inMap);	// 처분자산현황
		List <Map> records2 = (List<Map>)baseDao.list("ASS040500DAO.notAtldList", inMap);		// 미처분자산현황
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
	}
	
	
	
	
	
}
