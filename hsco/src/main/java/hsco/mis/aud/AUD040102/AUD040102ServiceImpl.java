package hsco.mis.aud.AUD040102;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD040102ServiceImpl.java
 * @Description     : 청렴마일리지 테이블을 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 17.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 17.      김병진              최초생성
 * </pre>  
 */

@Service("AUD040102Service")
public class AUD040102ServiceImpl extends BaseService implements AUD040102Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 
    /**
     * 개인별 청렴마일리지 메인 목록 화면에서 저장버튼 클릭시 (삭제)
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int MlgRegistListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input02");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
            Map map = list.get(x);
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
            switch(rowType) {
            	case DataSet.ROW_TYPE_INSERTED:
            		baseDao.insert("AUD040102DAO.mlgRegistListC", map);
            		break;
            	case DataSet.ROW_TYPE_UPDATED:
            		baseDao.update("AUD040102DAO.mlgRegistListU", map);
            		break;
            	case DataSet.ROW_TYPE_DELETED:
            		baseDao.delete("AUD040102DAO.MlgRegistListD", map);
            		break;
            }
                
        }
        return iRow;
    }
    
    
    /**
     * 개인별 청렴마일리지 목록조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectMlgRegistList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        records = (List<Map>)baseDao.list("AUD040102DAO.selectMlgRegistList", inMap);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
       

   /**
    * 개인별 청렴마일리지 저장/수정
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int mlgRegistListCU(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input02");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
           Map map = list.get(x);
           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
           
           if ( rowType == DataSet.ROW_TYPE_INSERTED ){
               
               baseDao.insert("AUD040102DAO.mlgRegistListC", map);
               
           }else if (rowType == DataSet.ROW_TYPE_UPDATED){
               
               baseDao.update("AUD040102DAO.mlgRegistListU", map);
           }
       }
       return iRow;
   }
   
   /**
    * 개인별 청렴마일리지 삭제
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int mlgRegistListD(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input08");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
           Map map = list.get(x);
           
           baseDao.delete("AUD040102DAO.mlgRegistListD", map);
           
       }
       return iRow;
   }
   
   /**
    * 개인별 청렴마일리지 상세조회
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void mlgRegistListR( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
       Map inMap = null;
       
       if (inDsMap != null)
           inMap = inDsMap.get(0);
       
       List <Map> records;

       records = (List<Map>)baseDao.list("AUD040102DAO.mlgRegistListR", inMap);
       
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.setRowMaps(records);
       
       outDataset.put("output03", outDsMap);
       
   }
   
   /**
    * 부서별 청렴마일리지 목록조회
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void selectMlgRegistDeptList( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       DataSetMap inDsMap = (DataSetMap)inDataset.get("input04");
       Map inMap = null;
       
       if (inDsMap != null)
           inMap = inDsMap.get(0);
       
       List <Map> records;

       if (inMap != null) {
           records = (List<Map>)baseDao.list("AUD040102DAO.selectMlgRegistDeptList", inMap);
       } else {
           records = (List<Map>)baseDao.list("AUD040102DAO.selectMlgRegistDeptList", inVar);
       }
       
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.setRowMaps(records);
       
       outDataset.put("output04", outDsMap);
       
   }
      

  /**
   * 부서별 청렴마일리지 저장/수정
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return int
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes" })
  
  public int mlgRegistDeptCU(DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      
      int iRow = 0;
      
      DataSetMap list = (DataSetMap) inDataset.get("input05");
      
      int listSize = (list == null) ? 0 : list.size();
      
      for (int x = 0; x < listSize; x++) {
          Map map = list.get(x);
          int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
          
          if ( rowType == DataSet.ROW_TYPE_INSERTED ){
              
              baseDao.insert("AUD040102DAO.mlgRegistDeptC", map);
              
          }else if (rowType == DataSet.ROW_TYPE_UPDATED){
              
              baseDao.update("AUD040102DAO.mlgRegistDeptU", map);
          }
      }
      return iRow;
  }
  
  /**
   * 부서별 청렴마일리지 삭제
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return int
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes" })
  
  public int mlgRegistDeptD(DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      
      int iRow = 0;
      
      DataSetMap list = (DataSetMap) inDataset.get("input07");
      
      int listSize = (list == null) ? 0 : list.size();
      
      for (int x = 0; x < listSize; x++) {
          Map map = list.get(x);
          
          baseDao.delete("AUD040102DAO.mlgRegistDeptD", map);
          
      }
      return iRow;
  }
  
  /**
   * 부서별 청렴마일리지 상세조회
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return void
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes", "unchecked" })
  public void mlgRegistDeptListR( DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      
      DataSetMap inDsMap = (DataSetMap)inDataset.get("input06");
      Map inMap = null;
      
      if (inDsMap != null)
          inMap = inDsMap.get(0);
      
      List <Map> records;

      if (inMap != null) {
          records = (List<Map>)baseDao.list("AUD040102DAO.mlgRegistDeptListR", inMap);
      } else {
          records = (List<Map>)baseDao.list("AUD040102DAO.mlgRegistDeptListR", inVar);
      }
      
      DataSetMap outDsMap = new DataSetMap();
      outDsMap.setRowMaps(records);
      
      outDataset.put("output06", outDsMap);
      
  }

  /**
   * 부서별 개인 청렴마일리지 합계
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return void
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes", "unchecked" })
  public void getScoreIndvdl( DataSetMap tranInfo, Map<String, Object> inVar,
		  Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		  Map<String, DataSetMap> outDataset) throws NexaServiceException {
	  
	  DataSetMap inDsMap = (DataSetMap)inDataset.get("input08");
	  Map inMap = null;
	  
	  if (inDsMap != null)
		  inMap = inDsMap.get(0);
	  
	  List <Map> records;
	  
	  if (inMap != null) {
		  records = (List<Map>)baseDao.list("AUD040102DAO.getScoreIndvdl", inMap);
	  } else {
		  records = (List<Map>)baseDao.list("AUD040102DAO.getScoreIndvdl", inVar);
	  }
	  
	  DataSetMap outDsMap = new DataSetMap();
	  outDsMap.setRowMaps(records);
	  
	  outDataset.put("output08", outDsMap);
	  
  }
  
  /**
   * 부서별 청렴마일리지 저장/수정
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return int
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes" })
  
  public int insertMlgRegistOfTraing(DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      
      Map map = null;
      int iRow = 0;
      DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
      
      if (inDsMap != null)
    	  map = inDsMap.get(0);
      
      baseDao.insert("AUD040102DAO.insertMlgRegistOfTraing", map);
      
      return iRow;    
  }
  
  /**
   * 부서별 청렴마일리지 상세조회
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return void
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes", "unchecked" })
  public void selectMlgKnd( DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      
      DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
      Map inMap = null;
      
      if (inDsMap != null)
          inMap = inDsMap.get(0);
      
      List <Map> records;

      if (inMap != null) {
          records = (List<Map>)baseDao.list("AUD040102DAO.selectMlgKnd", inMap);
      } else {
          records = (List<Map>)baseDao.list("AUD040102DAO.selectMlgKnd", inVar);
      }
      
      DataSetMap outDsMap = new DataSetMap();
      outDsMap.setRowMaps(records);
      
      outDataset.put("output01", outDsMap);
      
  }
  
  /**
   * 기존 마일리지 점수의 합 조회(다건)
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return int
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes", "unchecked"})
  public void selectMlgScore(DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      
      DataSetMap list = (DataSetMap)inDataset.get("input1");
      List<Map> resultList = new ArrayList<Map>();		// 
      Map<String, Object> result;	// 

     
      for(int i = 0; i < list.size(); i++) {
    	  Map map = list.get(i);
    	  result = (Map) baseDao.select("AUD040102DAO.selectMlgScore", map);
    	  resultList.add(result);
      }
      
      
      DataSetMap outDsMap = new DataSetMap();
      outDsMap.setRowMaps(resultList);
      
      outDataset.put("output1", outDsMap); 
  }
  
  
  /**
   * 기존 마일리지 점수의 합 조회
   * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   * @return int
   * @throws NexaServiceException
   */
  @SuppressWarnings({ "rawtypes", "unchecked"})
  public void selectMlgScoreTot(DataSetMap tranInfo, Map<String, Object> inVar,
          Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
          Map<String, DataSetMap> outDataset) throws NexaServiceException {
      
      DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
      Map inMap = null;
      
      if (inDsMap != null)
          inMap = inDsMap.get(0);
      
      List <Map> records;

      records = (List<Map>)baseDao.list("AUD040102DAO.selectMlgScoreTot", inMap);
      
      DataSetMap outDsMap = new DataSetMap();
      outDsMap.setRowMaps(records);
      
      outDataset.put("output1", outDsMap);
  }
  
}
