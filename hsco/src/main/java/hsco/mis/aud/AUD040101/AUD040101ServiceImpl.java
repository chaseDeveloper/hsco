package hsco.mis.aud.AUD040101;

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
 * @Class Name      : AUD040101ServiceImpl.java
 * @Description     : 청렴마일리지 설정 테이블을 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 10.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 10.         김병진               최초생성
 * </pre>  
 */

@Service("AUD040101Service")
public class AUD040101ServiceImpl extends BaseService implements AUD040101Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 
    /**
     * 청렴마일리지설정 목록 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMlgList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("AUD040101DAO.selectMlgList", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD040101DAO.selectMlgList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
    }

   /**
    * 청렴마일리지설정 목록 저장/수정/삭제
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int MlgListListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input02");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
           Map map = list.get(x);
           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
           
           if ( rowType == DataSet.ROW_TYPE_INSERTED ){
               
               baseDao.insert("AUD040101DAO.MlgListListC", map);
               
           }else if (rowType == DataSet.ROW_TYPE_UPDATED){
               
               baseDao.update("AUD040101DAO.MlgListListU", map);
               
           }else if (rowType == DataSet.ROW_TYPE_DELETED){
               
               baseDao.delete("AUD040101DAO.MlgListListD", map);
               
           }
       }
       return iRow;
   }
   
   /**
    * 청렴마일리지설정 년도복사 조회
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void selectMlgListCopy( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
       Map inMap = null;
       
       if (inDsMap != null)
           inMap = inDsMap.get(0);
       
       List <Map> records;

       if (inMap != null) {
           records = (List<Map>)baseDao.list("AUD040101DAO.selectMlgListCopy", inMap);
       } else {
           records = (List<Map>)baseDao.list("AUD040101DAO.selectMlgListCopy", inVar);
       }
       
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.setRowMaps(records);
       
       outDataset.put("output03", outDsMap);
       
   }

  /**
   * 청렴마일리지설정_복사 목록 저장
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return int
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes" })
  
  public int MlgListCOPYListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      
      int iRow = 0;
      
      DataSetMap list = (DataSetMap) inDataset.get("input04");
      
      int listSize = (list == null) ? 0 : list.size();
      
      for (int x = 0; x < listSize; x++) {
          Map map = list.get(x);
              
          baseDao.update("AUD040101DAO.MlgListCOPYListCUD", map);
      }
      return iRow;
  }
  
  
  /**
   * 삭제여부조회
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return void
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes", "unchecked" })
  public void deleteData( DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      DataSetMap inDsMap = (DataSetMap)inDataset.get("input05");
      Map inMap = null;
      if (inDsMap != null)
          inMap = inDsMap.get(0);
      List <Map> records;
      if (inMap != null) {
          records = (List<Map>)baseDao.list("AUD040101DAO.deleteData", inMap);
      } else {
          records = (List<Map>)baseDao.list("AUD040101DAO.deleteData", inVar);
      }
      DataSetMap outDsMap = new DataSetMap();
      outDsMap.setRowMaps(records);
      outDataset.put("output05", outDsMap);
  }
}
