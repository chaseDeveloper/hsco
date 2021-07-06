package hsco.mis.cus.CUS010301;

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
 * @Class Name      : CUS010301ServiceImpl.java
 * @Description     : 고객관리목록을 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 07.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 07.      김병진             최초생성
 * </pre>  
 */

@Service("CUS010301Service")
public class CUS010301ServiceImpl extends BaseService implements CUS010301Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    

    /*고객목록 조회*/
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectCstmrList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
         
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records1;

        if (inMap != null) {
            records1 = (List<Map>)baseDao.list("CUS010301DAO.selectCvplCstmrList", inMap);
        } else {
            records1 = (List<Map>)baseDao.list("CUS010301DAO.selectCvplCstmrList", inVar);
        }
        
        List <Map> records2;

        if (inMap != null) {
            records2 = (List<Map>)baseDao.list("CUS010301DAO.selectEtcCstmrList", inMap);
        } else {
            records2 = (List<Map>)baseDao.list("CUS010301DAO.selectEtcCstmrList", inVar);
        }
        
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap1.setRowMaps(records1);
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output01", outDsMap1);
        outDataset.put("output02", outDsMap2);
        
    }
    
    /*고객관리목록 등록/수정/삭제 */
	 @SuppressWarnings({ "rawtypes" })
	  
	   public int cstmrListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
	           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	           Map<String, DataSetMap> outDataset) throws NexaServiceException {
	       
	       int iRow = 0;
	       
	       // 민원고객
	       DataSetMap list = (DataSetMap) inDataset.get("input01");
	       
	       int listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	               
	           Map map = list.get(x);
	                           
	           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	           
	           switch(rowType) {
		           case DataSet.ROW_TYPE_UPDATED :
		               baseDao.update("CUS010301DAO.cvplCstmrListU", map);
	               break;
	           }   
	       }
	       
	       // 기타고객
	       list = (DataSetMap) inDataset.get("input02");
	       
	       listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	               
	           Map map = list.get(x);
	                           
	           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	           
	           switch(rowType) {
		           case DataSet.ROW_TYPE_INSERTED :
		               baseDao.insert("CUS010301DAO.cstmrListC", map);
	               break;
		           case DataSet.ROW_TYPE_UPDATED :
		               baseDao.update("CUS010301DAO.cstmrListU", map);
	               break;
	
		           case DataSet.ROW_TYPE_DELETED :
	                   baseDao.update("CUS010301DAO.cstmrListD", map);
	               break;
	           }   
	       }
	       return iRow;
	   }
	 
	 /*고객목록 조회*/
	    @SuppressWarnings({ "unchecked", "rawtypes" })
	    public void selectGetSe(DataSetMap tranInfo, Map<String, Object> inVar,
	            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
	         
	        List <Map> records1;

	        records1 = (List<Map>)baseDao.list("CUS010301DAO.selectGetSe");
	        	        
	        DataSetMap outDsMap1 = new DataSetMap();
	        outDsMap1.setRowMaps(records1);

	        outDataset.put("output01", outDsMap1);

	    }
}
