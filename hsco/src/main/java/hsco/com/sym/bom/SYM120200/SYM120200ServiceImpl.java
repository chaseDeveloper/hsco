package hsco.com.sym.bom.SYM120200;

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
 * @Class Name   	: SYM110200ServiceImpl.java
 * @Description  	: 배치결과관리
 * @author       	: 김지훈
 * @since        	: 2016. 03. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 03. 16.					김지훈			최초생성
 * </pre>  
 */
@Service("SYM120200Service")
public class SYM120200ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(SYM120200ServiceImpl.class);
	
	/**
	 * 배치결과 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */ 
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectBatchRsltList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		if(log.isInfoEnabled())
		    log.info("selectBatchRsltList called!");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
//		System.out.println("===============================================");
//		System.out.println(inMap);
//		System.out.println("===============================================");
		
		List <Map> records = (List<Map>)baseDao.list("SYM120200DAO.selectBatchRsltList", inMap);
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
}
