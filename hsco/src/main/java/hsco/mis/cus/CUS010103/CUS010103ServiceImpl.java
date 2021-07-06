package hsco.mis.cus.CUS010103;

import java.util.HashMap;
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
 * @Class Name      : CUS010103ServiceImpl.java
 * @Description     : 담당지지정테이블을 관리하는 서비스 구현체 클래스 
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
 *  2015. 08. 11.      김병진               최초생성
 * </pre>  
 */

@Service("CUS010103Service")
public class CUS010103ServiceImpl extends BaseService implements CUS010103Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    

    /*고객정보 조회*/
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEmpList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010103DAO.selectEmpList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010103DAO.selectEmpList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
	
	/*담당자지정관리목록 조회*/
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void selectChargerAppnList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010103DAO.selectChargerAppnList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010103DAO.selectChargerAppnList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
	
    
    /*담당자지정관리 등록/수정/삭제*/ 
	 @SuppressWarnings({ "rawtypes" })
	  
	   public int chargerAppnListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
	           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	           Map<String, DataSetMap> outDataset) throws NexaServiceException {
	       
	       int iRow = 0;
	       
	       DataSetMap list = (DataSetMap) inDataset.get("input02");
	       
	       int listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	               
	           Map map = list.get(x);
	                           
	           int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
	           
	           Map logmap = new HashMap();
	           switch(rowType) {
	           case DataSet.ROW_TYPE_INSERTED :
	        	   baseDao.insert("CUS010103DAO.chargerAppnListC", map);
	        	   
	        	   logmap.put("USER_ID", map.get("EMPNO"));
	        	   logmap.put("BFCHG_GRP_ID", null);
	        	   if(map.get("CHARGER_SE").equals("1")){		//고객 담당자 코드 : CUS_USER 
	        		   map.put("AUTH_GRP_ID", "CUS_USER");
	        		   logmap.put("AFTCH_GRP_ID", "CUS_USER");
	        	   }else if(map.get("CHARGER_SE").equals("2")){	//부서 담당자 코드 : CUS_DEPT
	        		   map.put("AUTH_GRP_ID", "CUS_DEPT");
	        		   logmap.put("AFTCH_GRP_ID", "CUS_DEPT");	
	        	   }
	        	   
	        	   baseDao.insert("CUS010103DAO.TBCOM_USER_GRPC", map);	//시스템 그룹권한 insert
					
				   baseDao.insert("SYM020200DAO.insertUserChg", logmap);	//권한 변경 로그
					
	           break;
	           case DataSet.ROW_TYPE_UPDATED :
	               baseDao.update("CUS010103DAO.chargerAppnListU", map);
	           break;
	           case DataSet.ROW_TYPE_DELETED :
	               baseDao.delete("CUS010103DAO.chargerAppnListD", map);
	               
	               logmap.put("USER_ID", map.get("EMPNO"));
	               logmap.put("AFTCH_GRP_ID", null);	
	        	   if(map.get("CHARGER_SE").equals("1")){		//고객 담당자 코드 : CUS_USER 
	        		   map.put("AUTH_GRP_ID", "CUS_USER");
	        		   logmap.put("BFCHG_GRP_ID", "CUS_USER");
	        	   }else if(map.get("CHARGER_SE").equals("2")){	//부서 담당자 코드 : CUS_DEPT
	        		   map.put("AUTH_GRP_ID", "CUS_DEPT");
	        		   logmap.put("BFCHG_GRP_ID", "CUS_DEPT");
	        	   }
	        	   
	        	   baseDao.insert("CUS010103DAO.TBCOM_USER_GRPD", map);	//시스템 그룹권한 insert
					
				   baseDao.insert("SYM020200DAO.insertUserChg", logmap);	//권한 변경 로그
	           break;
	           }   
	       }
	       return iRow;
	   }
	
	/*시스템그룹 권한 사용자 조회*/
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void authuserList( DataSetMap tranInfo, Map<String, Object> inVar,
	            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	            Map<String, DataSetMap> outDataset) throws NexaServiceException {

		List <Map> records;
		
		records = (List<Map>)baseDao.list("CUS010103DAO.authuserList", inVar);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output01", outDsMap);
	}
}
