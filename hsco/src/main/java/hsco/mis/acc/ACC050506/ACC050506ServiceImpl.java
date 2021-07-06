package hsco.mis.acc.ACC050506;

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
 * @Class Name   	: ACC050506ServiceImpl.java
 * @Description  	: 미지급금명세서를  조회하는 ServiceImpl 클래스 
 * @author       	: 
 * @since        	: 2019. 07. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2019 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2019. 07. 08.			최초생성
 * </pre>  
 */


@Service("ACC050506Service")
public class ACC050506ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(ACC050506ServiceImpl.class);
	
	/**
	 * 미지급금 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
	
	@SuppressWarnings({"rawtypes","unchecked"})
	public void payableAmtList (DataSetMap tranInfo, Map<String, Object> inVar, 
		    Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		    Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("payableAmtList Started!");
		
		Map inMap = null;
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		if(inDsMap != null){
			inMap = inDsMap.get(0);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("ACC050506DAO.payableAmtList",inMap));
		outDataset.put("output1",outDsMap);
		
	}

}//end ServiceImpl
