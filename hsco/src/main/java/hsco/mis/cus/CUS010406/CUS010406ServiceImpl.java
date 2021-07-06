package hsco.mis.cus.CUS010406;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS010406ServiceImpl.java
 * @Description     : 고객동향보고서를 조회하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 30.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 30.       김병진             최초생성
 * </pre>  
 */
@Service("CUS010406Service")
public class CUS010406ServiceImpl extends BaseService implements CUS010406Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
 

    /**
     * 고객동향보고서를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectOnlineCvplList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
          Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input01");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        DataSetMap outDsMap3 = new DataSetMap();
        DataSetMap outDsMap4 = new DataSetMap();
        DataSetMap outDsMap5 = new DataSetMap();
        DataSetMap outDsMap6 = new DataSetMap();
        
        outDsMap1.setRowMaps((List<Map>) baseDao.list("CUS010406DAO.selectOnlineCvplList", inMap));
        outDsMap2.setRowMaps((List<Map>) baseDao.list("CUS010406DAO.selectCstmrVisitCard", inMap));
        outDsMap3.setRowMaps((List<Map>) baseDao.list("CUS010406DAO.selectOfflineCvplList", inMap));
        outDsMap4.setRowMaps((List<Map>) baseDao.list("CUS010406DAO.selectCllrInqryList", inMap));
        outDsMap5.setRowMaps((List<Map>) baseDao.list("CUS010406DAO.selectCstmrTrend", inMap));
        outDsMap6.setRowMaps((List<Map>) baseDao.list("CUS010406DAO.selectcvplPoint", inMap));
        
        outDataset.put("output01", outDsMap1);
        outDataset.put("output02", outDsMap2);
        outDataset.put("output03", outDsMap3);
        outDataset.put("output04", outDsMap4);
        outDataset.put("output05", outDsMap5);
        outDataset.put("output06", outDsMap6);
        
    }
    
    /**
     * 고객동향보고서(보고서출력에 필요한 데이터)를 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectUbiOnlineCvpl( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
          Map inMap = null;
        DataSetMap inDsMap = (DataSetMap) inDataset.get("input02");
        if (inDsMap != null) {
            inMap = inDsMap.get(0);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        DataSetMap outDsMap3 = new DataSetMap();
        
        outDsMap1.setRowMaps((List<Map>) baseDao.list("CUS010406DAO.selectUbiOnlineCvpl", inMap));
        outDsMap2.setRowMaps((List<Map>) baseDao.list("CUS010406DAO.selectUbiOfflineCvpl", inMap));
        outDsMap3.setRowMaps((List<Map>) baseDao.list("CUS010406DAO.selectUbiCstmrVisit", inMap));
        
        outDataset.put("output05", outDsMap1);
        outDataset.put("output06", outDsMap2);
        outDataset.put("output07", outDsMap3); 
    }
    
    /*고객동향 등록/수정*/
	 @SuppressWarnings({ "rawtypes" })
	  
	   public int cstmrTrendCU(DataSetMap tranInfo, Map<String, Object> inVar,
	           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	           Map<String, DataSetMap> outDataset) throws NexaServiceException {
	       
	       int iRow = 0;
	       
	       DataSetMap list = (DataSetMap) inDataset.get("input03");
	       
	       int listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	               
	           Map map = list.get(x);
	                           
               baseDao.update("CUS010406DAO.cstmrTrendCU", map);
	       }
	       
	       list = (DataSetMap) inDataset.get("input04");
	       
	       listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	               
	           Map map = list.get(x);
	                           
               baseDao.update("CUS010406DAO.cstmrTrend01CU", map);
	       }
	       
	       list = (DataSetMap) inDataset.get("input05");
	       
	       listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	               
	           Map map = list.get(x);
	                           
               baseDao.update("CUS010406DAO.cstmrTrend02CU", map);
	       }
	       
	       return iRow;
	       
	       
	   }
	 
    
}
