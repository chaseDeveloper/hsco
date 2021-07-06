package hsco.pms.cmp.CMP050400;

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
 * @Class Name   	: CMP050400ServiceImpl.java
 * @Description  	: 시행자제시정보 테이블을 관리하는 서비스 구현체 클래스
 * @author       	: 변승우
 * @since        	: 2015. 7. 8.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 8.					변승우				최초생성
 * </pre>  
 */

@Service("CMP050400Service")
public class CMP050400ServiceImpl extends BaseService{
    
	protected Logger log = LoggerFactory.getLogger(CMP050400ServiceImpl.class);
			
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectEnforcemenPrsentList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("selectEnforcemenPrsentList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		if(inMap !=null){
			String sParam = (String)inMap.get("THING_CL");
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		

		records = (List<Map>)baseDao.list("CMP050400DAO.selectEnforcemenPrsentList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
}
