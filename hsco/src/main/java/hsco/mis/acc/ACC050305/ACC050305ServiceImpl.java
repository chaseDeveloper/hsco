package hsco.mis.acc.ACC050305;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : ACC050305ServiceImpl.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 11. 25.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 25.                  정윤원                최초생성
 * </pre>
 */
@Service("ACC050305Service")
public class ACC050305ServiceImpl extends BaseService {

    protected Logger     log = LoggerFactory.getLogger(ACC050305ServiceImpl.class);

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void select(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
    	if(log.isInfoEnabled()) log.info("select Started!");
    	
    	Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>) baseDao.list("ACC050305DAO.select", inMap));
        outDataset.put("output1", outDsMap);
    }
}
