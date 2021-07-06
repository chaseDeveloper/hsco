package hsco.mis.cus.CUS010203;

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
 * @Class Name      : CUS010203ServiceImpl.java
 * @Description     : 설문조사을 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 14.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 14.       김병진            최초생성
 * </pre>  
 */
@Service("CUS010203Service")
public class CUS010203ServiceImpl extends BaseService implements CUS010203Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    

    /**
     * 설문조사목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectExaminList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010203DAO.selectExaminList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010203DAO.selectExaminList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }

   /**
    * 설문조사 목록을 저장/수정/삭제 한다.
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int examinListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input02");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
               
           Map map = list.get(x);
                           
           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
           
           switch(rowType) {
           case DataSet.ROW_TYPE_INSERTED :
               baseDao.insert("CUS010203DAO.examinListC", map);
               break;
           case DataSet.ROW_TYPE_UPDATED :
               iRow += baseDao.update("CUS010203DAO.examinListU", map);
               break;
           case DataSet.ROW_TYPE_DELETED :
               iRow += baseDao.delete("CUS010203DAO.examinQesitmCnListD3", map);
               iRow += baseDao.delete("CUS010203DAO.examinQesitmListD3", map);
               iRow += baseDao.delete("CUS010203DAO.examinListD", map);
               break;
           }   
       }
       return iRow;
   }
   
   /**
    * 설문조사문항목록을 조회한다.
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void selectExaminQesitmList( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
       Map inMap = null;
       
       if (inDsMap != null)
           inMap = inDsMap.get(0);
       
       List <Map> records;

       if (inMap != null) {
           records = (List<Map>)baseDao.list("CUS010203DAO.selectExaminQesitmList", inMap);
       } else {
           records = (List<Map>)baseDao.list("CUS010203DAO.selectExaminQesitmList", inVar);
       }
       
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.setRowMaps(records);
       
       outDataset.put("output03", outDsMap);
       
   }

  /**
   * 설문조사문항목록을 저장/수정/삭제 한다.
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return int
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes" })
  
  public int examinQesitmListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      
      int iRow = 0;
      
      DataSetMap list = (DataSetMap) inDataset.get("input04");
      
      int listSize = (list == null) ? 0 : list.size();
      
      for (int x = 0; x < listSize; x++) {
              
          Map map = list.get(x);
                          
          int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
          
          switch(rowType) {
          case DataSet.ROW_TYPE_INSERTED :
              baseDao.insert("CUS010203DAO.examinQesitmListC", map);
              break;
          case DataSet.ROW_TYPE_UPDATED :
              iRow += baseDao.update("CUS010203DAO.examinQesitmListU", map);
              break;
          case DataSet.ROW_TYPE_DELETED :
              iRow += baseDao.delete("CUS010203DAO.examinQesitmCnListD2", map);
              iRow += baseDao.delete("CUS010203DAO.examinQesitmListD", map);
              break;
          }   
      }
      return iRow;
  }
  
  /**
   * 설문조사문항목록을 조회한다.
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return void
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes", "unchecked" })
  public void selectExaminQesitmCnList( DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      
      DataSetMap inDsMap = (DataSetMap)inDataset.get("input05");
      Map inMap = null;
      
      if (inDsMap != null)
          inMap = inDsMap.get(0);
      
      List <Map> records;

      if (inMap != null) {
          records = (List<Map>)baseDao.list("CUS010203DAO.selectExaminQesitmCnList", inMap);
      } else {
          records = (List<Map>)baseDao.list("CUS010203DAO.selectExaminQesitmCnList", inVar);
      }
      
      DataSetMap outDsMap = new DataSetMap();
      outDsMap.setRowMaps(records);
      
      outDataset.put("output05", outDsMap);
      
  }

 /**
  * 설문조사문항목록을 저장/수정/삭제 한다.
  * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
  * @return int
  * @throws NexaServiceException
  */
 @SuppressWarnings({ "rawtypes" })
 
 public int examinQesitmCnListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
         Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
         Map<String, DataSetMap> outDataset) throws NexaServiceException {
     
     int iRow = 0;
     
     DataSetMap list = (DataSetMap) inDataset.get("input06");
     
     int listSize = (list == null) ? 0 : list.size();
     
     for (int x = 0; x < listSize; x++) {
             
         Map map = list.get(x);
                         
         int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
         
         switch(rowType) {
         case DataSet.ROW_TYPE_INSERTED :
             baseDao.insert("CUS010203DAO.examinQesitmCnListC", map);
             break;
         case DataSet.ROW_TYPE_UPDATED :
             iRow += baseDao.update("CUS010203DAO.examinQesitmCnListU", map);
             break;
         case DataSet.ROW_TYPE_DELETED :
             iRow += baseDao.delete("CUS010203DAO.examinQesitmCnListD", map);
             break;
         }   
     }
     return iRow;
 }
}
