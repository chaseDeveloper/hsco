package hsco.mis.aud.AUD010105;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD010105ServiceImpl.java
 * @Description     : 내외부감사결과관리를 관리하는 서비스 구현체 클래스  
 * @author          : 김병진
 * @since           : 2015. 06. 22.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 22.      김병진             최초생성
 * </pre>  
 */

@Service("AUD010105Service")
public class AUD010105ServiceImpl extends BaseService implements AUD010105Service {
    
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
            records = (List<Map>)baseDao.list("AUD010105DAO.selectInExAdList", inMap);
        } else {
            records = (List<Map>)baseDao.list("AUD010105DAO.selectInExAdList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }

    /**
     * 감사결과관리_처분요구서 목록 조회
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDspsDmdList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        
        // 감사일지
        DataSetMap outDsMap1 = new DataSetMap();
        outDsMap1.setRowMaps((List<Map>) baseDao.list("AUD010105DAO.selectDspsDmdList", inMap));
        outDataset.put("output01", outDsMap1);
        
        // 감사대상부서
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps((List<Map>) baseDao.list("AUD010105DAO.selectAuditDept", inMap));
        outDataset.put("output02", outDsMap2);
        
        // 감사인
        DataSetMap outDsMap3 = new DataSetMap();
        outDsMap3.setRowMaps((List<Map>) baseDao.list("AUD010105DAO.selectAuditComposi", inMap));
        outDataset.put("output03", outDsMap3);
        
    }
   
   /**
    * 감사결과관리_처분요구서(문책) 목록 조회
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void selectDspsDmdCnsreList( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
       Map inMap = null;
       
       if (inDsMap != null)
           inMap = inDsMap.get(0);
       
       List <Map> records;

       if (inMap != null) {
           records = (List<Map>)baseDao.list("AUD010105DAO.selectDspsDmdCnsreList", inMap);
       } else {
           records = (List<Map>)baseDao.list("AUD010105DAO.selectDspsDmdCnsreList", inVar);
       }
       
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.setRowMaps(records);
       
       DataSetMap outDsMap2 = new DataSetMap();
       outDsMap2.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList",  inMap));
       
       outDataset.put("output01", outDsMap);
       outDataset.put("output02", outDsMap2);
       
   }

   /**
    * 감사결과관리_처분요구서 저장/수정/삭제
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int DspsDmdListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input01");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
           Map map = list.get(x);
           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
           
           if ( rowType == DataSet.ROW_TYPE_INSERTED ){
        	   baseDao.insert("AUD010105DAO.DspsDmdListC", map);
               
           }else if (rowType == DataSet.ROW_TYPE_UPDATED){
               baseDao.update("AUD010105DAO.DspsDmdListU", map);
               
           }else if (rowType == DataSet.ROW_TYPE_DELETED){
        	   baseDao.delete("AUD010105DAO.DspsDmdListD01", map);
               baseDao.delete("AUD010105DAO.DspsDmdListD02", map);
               
           }
       }
       
       list = (DataSetMap) inDataset.get("input02");
       
       listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
           Map map = list.get(x);
           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
           
           if ( rowType == DataSet.ROW_TYPE_INSERTED ){
               baseDao.insert("AUD010105DAO.DspsDmdCnsreListC", map);
               
           }else if (rowType == DataSet.ROW_TYPE_UPDATED){
               baseDao.update("AUD010105DAO.DspsDmdCnsreListU", map);
               
           }else if (rowType == DataSet.ROW_TYPE_DELETED){
               baseDao.delete("AUD010105DAO.DspsDmdCnsreListD", map);
               
           }
       }
       return iRow;
   }   
 
   /**
    * 현지조치요구서 가져오기
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void getAmdList( DataSetMap tranInfo, Map<String, Object> inVar,
		   Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
		   Map<String, DataSetMap> outDataset) throws NexaServiceException {
	   
	   DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
	   Map inMap = null;
	   
	   if (inDsMap != null)
		   inMap = inDsMap.get(0);
	   
	   List <Map> records;
	   
	   if (inMap != null) {
		   records = (List<Map>)baseDao.list("AUD010105DAO.getAmdList", inMap);
	   } else {
		   records = (List<Map>)baseDao.list("AUD010105DAO.getAmdList", inVar);
	   }
	   
	   DataSetMap outDsMap = new DataSetMap();
	   outDsMap.setRowMaps(records);
	   
	   outDataset.put("output01", outDsMap);
	   
   }
}
