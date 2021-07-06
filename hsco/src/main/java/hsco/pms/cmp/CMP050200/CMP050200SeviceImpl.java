package hsco.pms.cmp.CMP050200;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaDaoException;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CMP050200SeviceImpl.java
 * @Description  	: 재결자료 테이블을 관리하는 서비스 구현체 클래스
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

@Service("CMP050200Service")
public class CMP050200SeviceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(CMP050200SeviceImpl.class);
    
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectAdjdcDataList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("selectAdjdcDataList Started!");
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map<String, Object> inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		if(inMap != null){
			String sParam = (String)inMap.get("THING_CL");
			inMap.put("ARR_THING_CL", sParam.split(","));
		}
		

		records = (List<Map>)baseDao.list("CMP050200DAO.selectAdjdcDataList", inMap);
				
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
	   
	@SuppressWarnings("rawtypes")
	public void adjdcDataU(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaDaoException {
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		for (int x = 0; x < list.size(); x++) {
			Map map = list.get(x);
			baseDao.update("CMP050200DAO.adjdcDataU", map);
		}			
	}
}
