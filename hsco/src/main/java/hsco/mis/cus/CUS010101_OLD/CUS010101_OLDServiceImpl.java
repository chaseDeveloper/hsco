package hsco.mis.cus.CUS010101_OLD;

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
 * @Class Name      : CUS010101ServiceImpl.java
 * @Description     : 오프라인민원목록을 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 03.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 03.  김병진             최초생성
 * </pre>  
 */

@Service("CUS010101_OLDService")
public class CUS010101_OLDServiceImpl extends BaseService implements CUS010101_OLDService {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    

    /*오프라인민원목록 조회*/
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectHmpgCvplList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010101_OLDDAO.selectHmpgCvplList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010101_OLDDAO.selectHmpgCvplList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }

    
    /*고객정보 조회*/
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectHmpgCstmrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010101_OLDDAO.selectHmpgCstmrInfo", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010101_OLDDAO.selectHmpgCstmrInfo", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output03", outDsMap);
        
    }
 
    
     /*오프라인민원목록 등록/수정/삭제 */
     @SuppressWarnings({ "rawtypes" })
      
       public int hmpgCvplListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
                   baseDao.insert("CUS010101_OLDDAO.hmpgCvplListC", map);
                   baseDao.insert("CUS010101_OLDDAO.hmpgCstmrInfoC", map);
                   baseDao.insert("CUS010101_OLDDAO.cvplDstbListC", map);
               break;
               case DataSet.ROW_TYPE_UPDATED :

                   baseDao.update("CUS010101_OLDDAO.hmpgCvplListU", map);
                   baseDao.insert("CUS010101_OLDDAO.hmpgCstmrInfoC", map);
                   baseDao.update("CUS010101_OLDDAO.cvplDstbListU", map);
               break;
               
               case DataSet.ROW_TYPE_DELETED :
                   baseDao.delete("CUS010101_OLDDAO.hmpgCvplListD", map);
               }   
           }
           return iRow;
       }
    
}
