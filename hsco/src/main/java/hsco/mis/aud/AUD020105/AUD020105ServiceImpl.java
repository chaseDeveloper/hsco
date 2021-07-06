package hsco.mis.aud.AUD020105;

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
 * @Class Name      : AUD020105ServiceImpl.java
 * @Description     : 거래내역모니터링을 조회하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 06.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 06.      김병진              최초생성
 *  2016. 04. 25.      이수지              하도급지급내역 추가
 * </pre>  
 */
@Service("AUD020105Service")
public class AUD020105ServiceImpl extends BaseService implements AUD020105Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 사업현황목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectBsnsSttusList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD020105DAO.selectBsnsSttusList", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD020105DAO.selectBsnsSttusList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output01", outDsMap);
        
    }
    
    /**
     * 사업비목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectWctList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input02");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;
        List <Map> records2;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD020105DAO.selectWctList", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD020105DAO.selectWctList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output02", outDsMap);

    }
    
    
    /**
     * 사업비목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEntrpsAcctoSubcntrCnt( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input02");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD020105DAO.selectEntrpsAcctoSubcntrCnt", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD020105DAO.selectEntrpsAcctoSubcntrCnt", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output03", outDsMap);
        
    }
    
    
    /**
     * 하도급 기성금 지급내역을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEntrpsPxcondDtls( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD020105DAO.selectEntrpsPxcondDtls", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD020105DAO.selectEntrpsPxcondDtls", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        outDataset.put("output04", outDsMap);
        
    }
}
