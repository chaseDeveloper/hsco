package hsco.mis.law.LAW010304;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : LAW010304ServiceImpl.java
 * @Description     : 소송판결목록을 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 22.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 22.      김병진             최초생성
 * </pre>  
 */
@Service("LAW010304Service")
public class LAW010304ServiceImpl extends BaseService implements LAW010304Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 소송판결목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
  /*  @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLwstResultList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records = (List<Map>)baseDao.list("LAW010304DAO.selectLwstResultList", inMap);
        
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }*/     
    
    /**
     * 관할법원목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCmptncCourtList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input02");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records = (List<Map>)baseDao.list("LAW010304DAO.selectCmptncCourtList", inMap);

        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output02", outDsMap);
        
    }
    
    /**
     * 소송판결목록 수정
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int lwstResultListU( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input03");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            iRow += baseDao.update("LAW010304DAO.lwstResultListU", map);
        }
        DataSetMap list2 = (DataSetMap) inDataset.get("input04");
        
        int listSize2 = (list == null) ? 0 : list2.size();
        
        for (int x = 0; x < listSize2; x++) {
                
            Map map = list2.get(x);
            
            iRow += baseDao.update("LAW010304DAO.incdntListU", map);
        }
        return iRow;
    }      
}
