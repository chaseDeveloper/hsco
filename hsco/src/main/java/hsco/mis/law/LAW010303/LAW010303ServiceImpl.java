package hsco.mis.law.LAW010303;

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
 * @Class Name      : LAW010303ServiceImpl.java
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
@Service("LAW010303Service")
public class LAW010303ServiceImpl extends BaseService implements LAW010303Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 소송일정목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectFxList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        List <Map> records;
        if (inMap != null) {
            records = (List<Map>)baseDao.list("LAW010303DAO.selectFxList", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010303DAO.selectFxList", inVar);
        }
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output01", outDsMap);
    }
    
    /**
     * 소송일정등록팝업 콤보박스를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectComboList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        List <Map> records1;
        List <Map> records2;
        if (inMap != null) {
            records1 = (List<Map>)baseDao.list("LAW010303DAO.selectCombo1List", inMap);
        } else {
            records1 = (List<Map>)baseDao.list("LAW010303DAO.selectCombo1List", inVar);
        }
        if (inMap != null) {
            records2 = (List<Map>)baseDao.list("LAW010303DAO.selectCombo2List", inMap);
        } else {
            records2 = (List<Map>)baseDao.list("LAW010303DAO.selectCombo2List", inVar);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps(records1);
        outDataset.put("output01", outDsMap1);
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        outDataset.put("output02", outDsMap2);
    }
    
    /**
     * 소송일정 저장
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public void fxInfoC(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
         DataSetMap list1 = (DataSetMap) inDataset.get("input01");
         for (int x = 0; x < list1.size(); x++) {
             Map map = list1.get(x);
             baseDao.insert("LAW010303DAO.fxInfoC", map);
         }
    }
    /**
     * 소송일정등록팝업 콤보박스를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDetailFxInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        List <Map> records1;
        if (inMap != null) {
            records1 = (List<Map>)baseDao.list("LAW010303DAO.selectDetailFxInfo", inMap);
        } else {
            records1 = (List<Map>)baseDao.list("LAW010303DAO.selectDetailFxInfo", inVar);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps(records1);
        outDataset.put("output01", outDsMap1);
    }
    
    /**
     * 소송일정 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public void detailFxInfoD(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
         DataSetMap list1 = (DataSetMap) inDataset.get("input01");
         for (int x = 0; x < list1.size(); x++) {
             Map map = list1.get(x);
             baseDao.insert("LAW010303DAO.detailFxInfoD", map);
         }
    }
}
