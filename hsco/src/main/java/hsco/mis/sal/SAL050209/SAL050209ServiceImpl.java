package hsco.mis.sal.SAL050209;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL050209ServiceImpl.java
 * @Description  	: 연말정산결과조회
 * @author       	: 이상명
 * @since        	: 2015. 10. 29.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 29.					이상명				최초생성
 * </pre>  
 */

@Service("SAL050209Service")
public class SAL050209ServiceImpl extends BaseService implements SAL050209Service {
	
    protected Logger log = LoggerFactory.getLogger(this.getClass());   
	
    /**
	 * 연말정산결과 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectYndResultList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL050209DAO.selectYndResultList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL050209DAO.selectYndResultList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}
    
    
    
    
}
