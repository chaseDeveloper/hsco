package hsco.pms.sls.hou.rci.SLS040306;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS040306ServiceImpl.java
 * @Description  	: 잔금 납부일자 일괄등록
 * @author       	: 최인석
 * @since        	: 2016. 8.27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        	작성자                	내용
 * ------------------------------------------------------------------
 *  2016. 8.27.		최인석			최초생성
 * </pre>
 */
@Service("SLS040306Service")
public class SLS040306ServiceImpl extends BaseService implements SLS040306Service {

protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
	
    /**
     * 잔금 납부일자 일괄등록
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
	@SuppressWarnings("rawtypes")
	public int saveTmlmtDe ( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
		
		Map inMap = null;

	    if (inDsMap != null) {
	    	inMap = inDsMap.get(0);
	    }
	    
	    log.debug("start query ====> ");	    	  						
		iRow += baseDao.update("SLS040306DAO.saveTmlmtDe", inMap);
		log.debug("end query ====> ");	    	  
		return iRow;
	}

}
