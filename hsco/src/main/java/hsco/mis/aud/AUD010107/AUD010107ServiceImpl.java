package hsco.mis.aud.AUD010107;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD010107ServiceImpl.java
 * @Description     : 감사결과처분 목록을 관리하는 서비스 구현체 클래스  
 * @author          : 김병진
 * @since           : 2015. 06. 30.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 30.      김병진             최초생성
 * </pre>  
 */

@Service("AUD010107Service")
public class AUD010107ServiceImpl extends BaseService implements AUD010107Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /**
     * 내외부 감사관리 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectInExAdList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD010107DAO.selectInExAdList", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD010107DAO.selectInExAdList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    /**
     * 감사결과처분 목록 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectAuditResultList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input02");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD010107DAO.selectAuditResultList", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD010107DAO.selectAuditResultList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output02", outDsMap);
        
    }

   /**
    * 내외부감사목록 종결여부 수정
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int InexAuditListU(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input04");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
           Map map = list.get(x);
               
               baseDao.update("AUD010107DAO.InexAuditListU", map);
               
       }
       return iRow;
   }
}
