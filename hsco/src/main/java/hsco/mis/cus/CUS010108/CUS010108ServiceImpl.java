package hsco.mis.cus.CUS010108;

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
 * @Class Name      : CUS010108ServiceImpl.java
 * @Description     : 고객모니터단지출을 관리하는 서비스 구현체 클래스
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
 *  2015. 10. 22.      김병진              최초생성
 * </pre>  
 */
@Service("CUS010108Service")
public class CUS010108ServiceImpl extends BaseService implements CUS010108Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 
    /**
     * 고객평가지출목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCstmrMntgStgExpndtrList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010108DAO.selectCstmrMntgStgExpndtrList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010108DAO.selectCstmrMntgStgExpndtrList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    /**
     * 고객방문평가 지출 대상 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCstmrVisitEvlCardList01( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010108DAO.selectCstmrVisitEvlCardList01", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010108DAO.selectCstmrVisitEvlCardList01", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }  
    
    /**
     * 지출에 해당하는 고객방문평가 상세목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCstmrVisitEvlCardList02( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010108DAO.selectCstmrVisitEvlCardList02", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010108DAO.selectCstmrVisitEvlCardList02", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }    

   /**
    * 고객평가 지출목록을 저장/수정 한다.
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int cstmrMntgStgExpndtrListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       int iRow = 0;
       DataSetMap list = (DataSetMap) inDataset.get("input01");
       DataSetMap list2 = (DataSetMap) inDataset.get("input02");
       
       int listSize = (list == null) ? 0 : list.size();
       int listSize2 = (list2 == null) ? 0 : list2.size();
       
       for (int x = 0; x < listSize; x++) {
           Map map = list.get(x);
           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
           if ( rowType == DataSet.ROW_TYPE_INSERTED ){
        	   String pymntSn = (String) baseDao.select("CUS010108DAO.selectPymntSn", null);
        	   
        	   map.put("PYMNT_SN", pymntSn);
        	   
               baseDao.update("CUS010108DAO.cstmrMntgStgExpndtrListCU", map);
               
               /*고객활동관리에 지출일련번호 업데이트*/							
               for (int y = 0; y < listSize2; y++) {
				  Map map2 = list2.get(y);
				  
				  map2.put("PYMNT_SN", pymntSn);
				  baseDao.update("CUS010108DAO.cstmrVisitEvlCardU", map2);
               }
               
           }else if (rowType == DataSet.ROW_TYPE_UPDATED){
               baseDao.update("CUS010108DAO.cstmrMntgStgExpndtrListCU", map);
           }else if (rowType == DataSet.ROW_TYPE_DELETED){
        	   baseDao.delete("CUS010108DAO.cstmrMntgStgExpndtrListD", map);
               baseDao.update("CUS010108DAO.cstmrVisitEvlCardU2", map);
           }
       }
       return iRow;
   }
   
   /**
    * 지출결의번호저장
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
       public int updateExpndtrDecsnNo(DataSetMap tranInfo, Map<String, Object> inVar,
               Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
               Map<String, DataSetMap> outDataset) throws NexaServiceException {
           
           int iRow = 0;
           
           DataSetMap list = (DataSetMap) inDataset.get("input01");
           
           int listSize = (list == null) ? 0 : list.size();
           
           for (int x = 0; x < listSize; x++) {
                   
               Map map = list.get(x);
               baseDao.insert("CUS010108DAO.updateExpndtrDecsnNo", map);
           }
       return iRow;
   }
   
   /**
    * 내부결재 데이터셋을 조회한다.
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void innerSanctnUbiDataset( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
       Map inMap = null;
       
       if (inDsMap != null)
           inMap = inDsMap.get(0);
       
       List <Map> records;

       if (inMap != null) {
           records = (List<Map>)baseDao.list("CUS010108DAO.innerSanctnUbiDataset", inMap);
       } else {
           records = (List<Map>)baseDao.list("CUS010108DAO.innerSanctnUbiDataset", inVar);
       }
       
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.setRowMaps(records);
       
       outDataset.put("output1", outDsMap);
       
   }
   
   /**
    * 최초내부결재진행여부체크
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void selectInnerSanctnMasterCheck( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
       Map inMap = null;
       
       if (inDsMap != null)
           inMap = inDsMap.get(0);
       
       List <Map> records;

       if (inMap != null) {
           records = (List<Map>)baseDao.list("CUS010108DAO.selectInnerSanctnMasterCheck", inMap);
       } else {
           records = (List<Map>)baseDao.list("CUS010108DAO.selectInnerSanctnMasterCheck", inVar);
       }
       
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.setRowMaps(records);
       
       outDataset.put("output1", outDsMap);
       
   }
   
   /**전자결재 */
   @SuppressWarnings({ "rawtypes" })
   public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {   
	   
       DataSetMap list = (DataSetMap) inDataset.get("input1");
       
       Map map = list.get(0);
       
    // 전자결재번호 조회
//       String sanctnNO= (String) baseDao.select("CUS010108DAO.selectSanctnNO", map);			
//       map.put("SANCTN_NO", sanctnNO);
       
       baseDao.update("CUS010108DAO.approveU", map);
       
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.add(map);
       outDataset.put("output1", outDsMap);     
   }
   
}
