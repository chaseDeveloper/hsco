package hsco.com.sym.tbl.SYM100200;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM100200ServiceImpl.java
 * @Description  	: 
 * @author       	: 김호준
 * @since        	: 2017. 01. 12.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 10.					정윤원				최초생성
 * </pre>  
 */
@Service("SYM100200Service")
public class SYM100200ServiceImpl  extends BaseService{
	protected Logger log = LoggerFactory.getLogger(SYM100200ServiceImpl.class);	
	/**
	 * 테이블 정보 목록
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
   	public void searchMain(DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		if(log.isInfoEnabled())
		    log.info("searchMain called");
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);
   		
   		List <Map> records = (List<Map>)baseDao.list("SYM100200DAO.searchMain", inMap, false);
   		
   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		
   		outDataset.put("output1", outDsMap);
   	}
	
	/**
	 * 테이블 상세 정보
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
   	public void searchDetail(DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);
   		
   		List <Map> records = (List<Map>)baseDao.list("SYM100200DAO.searchDetail", inMap, false);
   		
   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		
   		outDataset.put("output1", outDsMap);
   	}
}
