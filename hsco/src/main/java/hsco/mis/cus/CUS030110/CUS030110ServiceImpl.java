package hsco.mis.cus.CUS030110;

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
 * @Class Name      : CUS030110ServiceImpl.java
 * @Description     : 고객상담 시간대별 실적을 조회하는 서비스 구현체 클래스
 * @author          : 최현식
 * @since           : 2016. 9. 12.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 9. 12.       최현식            최초생성
 * </pre>  
 */
@Service("CUS030110Service")
public class CUS030110ServiceImpl extends BaseService {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 시간대별 상담 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectTmzonList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        List <Map> records2;
        List <Map> records3;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS030110DAO.selectTmzonList", inMap);
            records2 = (List<Map>)baseDao.list("CUS030110DAO.selectTmzonList2", inMap);
            records3 = (List<Map>)baseDao.list("CUS030110DAO.selectTot", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS030110DAO.selectTmzonList", inVar);
            records2 = (List<Map>)baseDao.list("CUS030110DAO.selectTmzonList2", inVar);
            records3 = (List<Map>)baseDao.list("CUS030110DAO.selectTot", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);

        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output02", outDsMap2);
        
        DataSetMap outDsMap3 = new DataSetMap();
        outDsMap3.setRowMaps(records3);
        
        outDataset.put("output03", outDsMap3);
    }
}
