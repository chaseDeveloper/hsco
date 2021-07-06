package hsco.mis.cus.CUS010205;

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
 * @Class Name      : CUS010205ServiceImpl.java
 * @Description     : 고객모니터단을 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 03.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 03.          김병진            최초생성
 * </pre>  
 */
@Service("CUS010205Service")
public class CUS010205ServiceImpl extends BaseService implements CUS010205Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 
    /**
     * 고객모니터단목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCstmrMntrStgList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010205DAO.selectCstmrMntrStgList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010205DAO.selectCstmrMntrStgList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }

   /**
    * 고객모니터단 목록을 저장/수정/삭제 한다.
    * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
    * @return int
    * @throws NexaServiceException
    */
   @SuppressWarnings({ "rawtypes" })
   
   public int cstmrMntrStgListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
               baseDao.insert("CUS010205DAO.cstmrMntrStgListC", map);
               baseDao.update("CUS010205DAO.cstmrMntrActU", map);	//활동여부는 기수 상관없이 해당 고객 전체 수정
               baseDao.update("CUS010205DAO.cstmrStgHpgU", map);	//홈페이지 청아람 알리미 수정
               break;
           case DataSet.ROW_TYPE_UPDATED :
               iRow += baseDao.update("CUS010205DAO.cstmrMntrStgListU", map);
               baseDao.update("CUS010205DAO.cstmrMntrActU", map);	//활동여부는 기수 상관없이 해당 고객 전체 수정
               baseDao.update("CUS010205DAO.cstmrStgHpgU", map);	//홈페이지 청아람 알리미 수정
               break;
           case DataSet.ROW_TYPE_DELETED :
               iRow += baseDao.delete("CUS010205DAO.cstmrMntrStgListD", map);
               String actAt = (String)baseDao.select("CUS010205DAO.cstmrMntrStgGetMember", map);//삭제 후 해당 고객의 현재 활동여부 찾아서 홈페이지 수정
               
               if(actAt != null){
            	   	map.put("ACT_AT", actAt);
               }else{
            	   	map.put("ACT_AT", "0");
            	   	map.put("MNTR_HRSMN", "");
            	   	map.put("MNTR_SE", "");
               }
               baseDao.update("CUS010205DAO.cstmrStgHpgU", map);	//홈페이지 청아람 알리미 수정
               break;
           }   
       }
       return iRow;
   }
}
