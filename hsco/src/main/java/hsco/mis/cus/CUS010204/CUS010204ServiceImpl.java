package hsco.mis.cus.CUS010204;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS010204ServiceImpl.java
 * @Description     : 설문조사목록 게시여부를 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 15.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 15.       김병진            최초생성
 * </pre>  
 */
@Service("CUS010204Service")
public class CUS010204ServiceImpl extends BaseService implements CUS010204Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
       
   /**
    * 설문조사 목록 게시여부를 수정 한다.
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unused" })
   
   public int examinNtceAtListU(DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
       int iRow = 0;
       
       DataSetMap list = (DataSetMap) inDataset.get("input02");
       
       int listSize = (list == null) ? 0 : list.size();
       
       for (int x = 0; x < listSize; x++) {
               
           Map map = list.get(x);
                           
           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
           
               iRow += baseDao.update("CUS010204DAO.examinNtceAtListU", map);
       }
       return iRow;
   }
   

   /**
    * UBIREOPORT DATASET을 조회한다.
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return void
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void innerSanctnUbiDataset( DataSetMap tranInfo, Map<String, Object> inVar,
           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
           Map<String, DataSetMap> outDataset) throws NexaServiceException {
       
        Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        List <Map> records;
        
        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010204DAO.selectUbireport", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010204DAO.selectUbireport", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
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
    @SuppressWarnings({ "rawtypes" })
    public void saveInnerSanc( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");
        if(list.size()>0){
            Map map = list.get(0);
            baseDao.update("CUS010204DAO.saveInnerSanc", map);
        }
        
    }

    /**
     * 내부결재 번호 업데이트
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void innerSanctU( DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {       
    	
    	
    	DataSetMap list = (DataSetMap) inDataset.get("input01");
    	if(list.size()>0){
    		Map map = list.get(0);
    		baseDao.update("CUS010204DAO.innerSanctU", map);
    	}
    	
    }
}
