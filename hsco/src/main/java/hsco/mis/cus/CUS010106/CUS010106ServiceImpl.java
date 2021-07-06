package hsco.mis.cus.CUS010106;

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
 * @Class Name      : CUS010106ServiceImpl.java
 * @Description     : 고객방문평가카드를 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 05.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 05.      김병진             최초생성
 * </pre>  
 */

@Service("CUS010106Service")
public class CUS010106ServiceImpl extends BaseService implements CUS010106Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    

    /*고객방문평가카드 목록 조회*/
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectVisitEvlCardList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
         
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010106DAO.selectVisitEvlCardList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010106DAO.selectVisitEvlCardList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    /*고객방문평가카드관리 등록/수정/삭제 */
	 @SuppressWarnings({ "rawtypes" })
	  
	   public int visitEvlCardListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
	               baseDao.insert("CUS010106DAO.visitEvlCardListC", map);
               break;
	           case DataSet.ROW_TYPE_UPDATED :
	               baseDao.update("CUS010106DAO.visitEvlCardListU", map);
               break;

	           case DataSet.ROW_TYPE_DELETED :
                   baseDao.update("CUS010106DAO.visitEvlCardListD", map);
               break;
	           }   
	       }
	       return iRow;
	   }
	 
	 
    /*사원번호 부서코드 조회*/
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectEmpNoDeptCode(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
         
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010106DAO.selectEmpNoDeptCode", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010106DAO.selectEmpNoDeptCode", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output03", outDsMap);
        
    }
}
