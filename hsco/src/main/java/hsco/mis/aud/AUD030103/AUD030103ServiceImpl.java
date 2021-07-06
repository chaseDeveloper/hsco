package hsco.mis.aud.AUD030103;

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
 * @Class Name      : AUD030103ServiceImpl.java
 * @Description     : 온라인신고결과를 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 07.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 07.         김병진               최초생성
 *  2016. 04. 12.         이수지               내부결재
 * </pre>  
 */

@Service("AUD030103Service")
public class AUD030103ServiceImpl extends BaseService implements AUD030103Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 
    /**
     * 온라인 신고 결과 관리 목록 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectOnCvpResultlist( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD030103DAO.selectOnCvpResultlist", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD030103DAO.selectOnCvpResultlist", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }

   /**
    * 온라인신고 결과 관리 목록 저장/수정/삭제
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int rceptOnCvplResultU(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input02");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
           Map map = list.get(x);
           
               baseDao.update("AUD030103DAO.rceptOnCvplResultU", map);
               
       }
       return iRow;
   }
   
   /**
    * UBIREOPORT DATASET을 조회한다.
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "unchecked", "rawtypes" })
   public void innerSanctnUbiDataset( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       
       Map inMap = null;
       DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
       if (inDsMap != null) {
           inMap = inDsMap.get(0);
       }
       
       DataSetMap outDsMap = new DataSetMap();
       
       List <Map> records = null;

       if (inMap != null) {
           records = (List<Map>) baseDao.list("AUD030103DAO.innerSanctnUbiSelect", inMap);
       }
       outDsMap.setRowMaps(records);
       outDataset.put("output1", outDsMap);
       
        
   }

     /**
     * 내부결재
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
     @SuppressWarnings({ "rawtypes", "unchecked" })
     public void saveInnerSanc( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        if(list.size()>0){
            Map map = list.get(0);
            map.put("INNER_SANCTN_MDL_ID","AUD-100065");
            baseDao.update("AUD030103DAO.saveInnerSanc", map);
        }
        
     }
     
     /**
      * 승인여부(결재여부) 변경저장
      * @param tranInfo
      * @param inVar
      * @param inDataset
      * @param outVar
      * @param outDataset
      * @throws NexaServiceException
      */
      @SuppressWarnings({ "rawtypes" })
      public void confmU( DataSetMap tranInfo, Map<String, Object> inVar,
             Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
             Map<String, DataSetMap> outDataset) throws NexaServiceException {
         
         DataSetMap list = (DataSetMap) inDataset.get("input1");
         if(list.size()>0){
             Map map = list.get(0);
             baseDao.update("AUD030103DAO.confmU", map);
         }
      }
      
}
