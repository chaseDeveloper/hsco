package hsco.mis.aud.AUD020101;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD020101ServiceImpl.java
 * @Description     : 법인카드/법인카드사용내역/법인카드특이사항 목록을 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 24.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 24.      김병진              최초생성
 * </pre>  
 */

@Service("AUD020101Service")
public class AUD020101ServiceImpl extends BaseService implements AUD020101Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 

    /**
     * 법인카드사용내역목록 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCatsTmpApprovalList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD020101DAO.selectCatsTmpApprovalList", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD020101DAO.selectCatsTmpApprovalList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
     
    /**
     * 특이사항목록 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCardPartclrMatterList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input02");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD020101DAO.selectCardPartclrMatterList", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD020101DAO.selectCardPartclrMatterList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output02", outDsMap);
        
    }
    

   /**
    * 특이사항관리 목록 저장/수정/삭제
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int cardPartclrMatterCUD(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input03");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
           Map map = list.get(x);
           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
           
           if ( rowType == DataSet.ROW_TYPE_INSERTED ){
               
               baseDao.insert("AUD020101DAO.cardPartclrMatterC", map);
               
           }else if (rowType == DataSet.ROW_TYPE_UPDATED){
               
               baseDao.update("AUD020101DAO.cardPartclrMatterU", map);
               
           }else if (rowType == DataSet.ROW_TYPE_DELETED){
               
               baseDao.delete("AUD020101DAO.cardPartclrMatterD", map);
               
           }
       }
       return iRow;
   }
   

   /**
    * 알림대상 목록을 조회한다.
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void selectNtcnTrget( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {

       List <Map> records;
       records = (List<Map>)baseDao.list("AUD020101DAO.selectNtcnTrget", inVar);
       
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.setRowMaps(records);
       
       outDataset.put("output1", outDsMap);
       
   }
   

   /**
    * 알림대상  저장/삭제
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int ntcnTrgetCUD(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input1");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
               
           Map map = list.get(x);
           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
           
           if ( rowType == DataSet.ROW_TYPE_INSERTED ){
               baseDao.insert("AUD020101DAO.ntcnTrgetC", map);
           }else if (rowType == DataSet.ROW_TYPE_DELETED){
               baseDao.delete("AUD020101DAO.ntcnTrgetD", map);
           }
       }
       return iRow;
   }
}
