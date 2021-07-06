package hsco.mis.acc.ACC050507;

import java.util.List;
import java.util.Map;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC050507Service.java
 * @Description  	: 수선충당부채명세서를  조회하는 ServiceImpl 클래스 
 * @author       	: 
 * @since        	: 2019. 07. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2019 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2019. 07. 10.			최초생성
 * </pre>  
 */

@Service("ACC050507Service")
public class ACC050507ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(ACC050507ServiceImpl.class);
	
	/**
	 * 수선충당부채명세서 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void repSupDebtList(DataSetMap tranInfo, Map<String, Object> inVar, 
		    Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		    Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("repSupDebtList Started!");
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
	    outDsMap.setRowMaps((List<Map>) baseDao.list("ACC050507DAO.repSupDebtList", inMap));
	    outDataset.put("output1", outDsMap);
	    
	}

}//end ServiceImpl
