package hsco.mis.ach.ACH030203;


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
 * @Class Name   	: ACH030203ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 11. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 03.	박병일				최초생성
 * </pre>  
 */
@Service("ACH030203Service")
public class ACH030203ServiceImpl extends BaseService implements ACH030203Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH030203ServiceImpl.class);
	
	 /**
     * 
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    public void selectList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("selectList Started!");
    }
}
