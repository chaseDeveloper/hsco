package hsco.mis.cus.CUS030104;

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
 * @Class Name      : CUS030104ServiceImpl.java
 * @Description     : 안내정보메세지목록을 조회하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 12. 11.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 11.      김병진              최초생성
 * </pre>  
 */
@Service("CUS030104Service")
public class CUS030104ServiceImpl extends BaseService implements CUS030104Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 

    /**
     * 안내정보메세지목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCstmrList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS030104DAO.selectCstmrList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS030104DAO.selectCstmrList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }

    /**
     * 문자발송 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSmsSendList( DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
    	Map inMap = null;
    	
    	if (inDsMap != null)
    		inMap = inDsMap.get(0);
    	
    	List <Map> records;
    	
    	if (inMap != null) {
    		records = (List<Map>)baseDao.list("CUS030104DAO.selectSmsSendList", inMap);
    	} else {
    		records = (List<Map>)baseDao.list("CUS030104DAO.selectSmsSendList", inVar);
    	}
    	
    	DataSetMap outDsMap = new DataSetMap();
    	outDsMap.setRowMaps(records);
    	
    	outDataset.put("output01", outDsMap);
    	
    }
}
