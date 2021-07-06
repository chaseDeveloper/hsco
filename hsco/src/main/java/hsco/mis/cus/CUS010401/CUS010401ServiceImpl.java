package hsco.mis.cus.CUS010401;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS010401ServiceImpl.java
 * @Description     : 고객통계를 조회하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 05.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 05.      김병진              최초생성
 * </pre>  
 */
@Service("CUS010401Service")
public class CUS010401ServiceImpl extends BaseService implements CUS010401Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 

    /**
     * 고객통계를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCstmrGradList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
          Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        
        outDsMap1.setRowMaps((List<Map>) baseDao.list("CUS010401DAO.selectCstmrGradList", inMap));
        
        outDataset.put("output01", outDsMap1);
        
    }
   
}