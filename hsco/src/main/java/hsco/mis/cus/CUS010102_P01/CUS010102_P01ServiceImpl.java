package hsco.mis.cus.CUS010102_P01;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS010102_P01ServiceImpl.java
 * @Description     : 고객상세정보 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 11.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 11.      김병진              최초생성
 * </pre>  
 */
@Service("CUS010102_P01Service")
public class CUS010102_P01ServiceImpl extends BaseService implements CUS010102_P01Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    

    /*고객상세정보 조회*/
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectCstmrInfo( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
        	// 홈페이지 회원 테이블 조회
            records = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCstmrInfo01", inMap);
            
            // 기타고객 테이블 조회
            if(records.size() < 1){
            	records = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCstmrInfo", inMap);
            }
            
        } else {
            records = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCstmrInfo", inVar);
        }

        List <Map> records2;

        if (inMap != null) {
            records2 = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCvplList", inMap);
        } else {
            records2 = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCvplList", inVar);
        }
        DataSetMap outDsMap1 = new DataSetMap();
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap1.setRowMaps(records);
        outDsMap2.setRowMaps(records2);
        outDataset.put("output01", outDsMap1);
        outDataset.put("output02", outDsMap2);
        
    }

 
    
	/*고객상세정보 수정*/
	 @SuppressWarnings({ "rawtypes" })
	  
	   public int cstmrInfoU(DataSetMap tranInfo, Map<String, Object> inVar,
	           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	           Map<String, DataSetMap> outDataset) throws NexaServiceException {
	       
	       int iRow = 0;
	       
	       DataSetMap list = (DataSetMap) inDataset.get("input01");
	       
	       int listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	               
	           Map map = list.get(x);
	           baseDao.update("CUS010102_P01DAO.cstmrInfoU", map);
	       }
	       return iRow;
	   }
	
	    /*고객정보조회*/
		@SuppressWarnings({ "rawtypes", "unchecked" })
	    public void selectCstmrList( DataSetMap tranInfo, Map<String, Object> inVar,
	            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	            Map<String, DataSetMap> outDataset) throws NexaServiceException {
	        
	        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
	        Map inMap = null;
	        
	        if (inDsMap != null)
	            inMap = inDsMap.get(0);
	        
	        List <Map> records;
	        
	        // 고객목록 조회
	        if (inMap != null) {
	        	// 홈페이지 회원 테이블 조회
	            records = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCstmrList", inMap);
	            
	        } else {
	            records = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCstmrList", inVar);
	        }

	        List <Map> records2;
	        
	        // 고객민원목록 조회
	        if (inMap != null) {
	            records2 = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCvplList", inMap);
	        } else {
	            records2 = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCvplList", inVar);
	        }
	        
	        List <Map> records3;
	        
	        // 고객등급 조회
	        if (inMap != null) {
	        	records3 = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCstmrGrad", inMap);
	        } else {
	        	records3 = (List<Map>)baseDao.list("CUS010102_P01DAO.selectCstmrGrad", inVar);
	        }
	        DataSetMap outDsMap1 = new DataSetMap();
	        DataSetMap outDsMap2 = new DataSetMap();
	        DataSetMap outDsMap3 = new DataSetMap();
	        outDsMap1.setRowMaps(records);
	        outDsMap2.setRowMaps(records2);
	        outDsMap3.setRowMaps(records3);
	        outDataset.put("output01", outDsMap1);
	        outDataset.put("output02", outDsMap2);
	        outDataset.put("output03", outDsMap3);
	        
	    }	 
	 
}
