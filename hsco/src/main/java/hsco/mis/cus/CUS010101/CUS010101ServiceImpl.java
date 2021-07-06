package hsco.mis.cus.CUS010101;

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
 * @Class Name      : CUS010101ServiceImpl.java
 * @Description     : 민원형황을 조회하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 12. 08.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 08.      김병진              최초생성
 * </pre>  
 */

@Service("CUS010101Service")
public class CUS010101ServiceImpl extends BaseService implements CUS010101Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    

    /*민원현황 조회*/
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCvplSttusList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        //온라인민원
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps((List<Map>) baseDao.list("CUS010101DAO.selectOnlineCvplList", inMap));
        
        //오프라인민원
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("CUS010101DAO.selectOfflineCvplList", inMap));
        
        //고객방문평가카드
        DataSetMap outDsMap3 = new DataSetMap();
        outDsMap3.setRowMaps((List<Map>) baseDao.list("CUS010101DAO.selectCstmrVisitCard", inMap));
        
        //콜센터상담
        DataSetMap outDsMap4 = new DataSetMap();
        outDsMap4.setRowMaps((List<Map>) baseDao.list("CUS010101DAO.selectCllrInqryList", inMap));
        
        outDataset.put("output01", outDsMap1);
        outDataset.put("output02", outDsMap2);
        outDataset.put("output03", outDsMap3);  
        outDataset.put("output04", outDsMap4);
        
    }
}
