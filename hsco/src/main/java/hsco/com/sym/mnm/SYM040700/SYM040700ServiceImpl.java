package hsco.com.sym.mnm.SYM040700;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
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
import hsco.cmm.security.cipher.sha.Sha256Cipher;
import hsco.cmm.service.BaseService;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM040700ServiceImpl.java
 * @Description  	: 발령자를 조회하여 권한그룹을 복사하는 컨트롤러 클래스
 * @author       	: 조진연
 * @since        	: 2016. 7. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * </pre>
 */

@Service("SYM040700Service")
public class SYM040700ServiceImpl extends BaseService implements SYM040700Service {
	
    private Logger log = LoggerFactory.getLogger(SYM040700ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /**
	 * 사용자정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListUser(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("getListUser called"); 
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SYM040700DAO.getListUser", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
			
	}
       
    /*고객정보 조회*/
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectEmpUserList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SYM040700DAO.selectEmpUserList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SYM040700DAO.selectEmpUserList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
        
    }
    /*고객정보에 대한 최종저장된 권한그룹조회*/
 	@SuppressWarnings({ "rawtypes", "unchecked" })
     public void getTranUserGrp( DataSetMap tranInfo, Map<String, Object> inVar,
             Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
             Map<String, DataSetMap> outDataset) throws NexaServiceException {
         
         DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
         Map inMap = null;
         
         if (inDsMap != null)
             inMap = inDsMap.get(0);
         
         List <Map> records;

         if (inMap != null) {
             records = (List<Map>)baseDao.list("SYM040700DAO.getTranUserGrp", inMap);
         } else {
             records = (List<Map>)baseDao.list("SYM040700DAO.getTranUserGrp", inVar);
         }
         
         DataSetMap outDsMap = new DataSetMap();
         outDsMap.setRowMaps(records);
         
         outDataset.put("output1", outDsMap);
         
     }
    /**
     * 사용자 삭제 시 사용자 관련 자식 데이터 현황을 조회한다
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public void checkUserGrp( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SYM040700DAO.checkUserGrp", inMap);
        } else {
            records = (List<Map>)baseDao.list("SYM040700DAO.checkUserGrp", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
		
	}
    /**
     * 사용자 삭제 시 사용자 관련 자식 데이터 현황을 조회한다
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public int savefnUserGrp( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {

    	int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
				
		Map logmap = new HashMap();
	
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);	
			
	    	String strMod = (String)map.get("MOD");				
			   		
			if(strMod.equals("D"))
			{
				baseDao.delete("SYM040700DAO.SYM040700D", map);
			
				logmap.put("USER_ID", map.get("USER_ID"));
				logmap.put("BFCHG_GRP_ID", map.get("AUTH_GRP_ID"));
				logmap.put("AFTCH_GRP_ID", null);
				logmap.put("TRANSFER_ID", map.get("TRAN_USER_ID"));
					
				baseDao.insert("SYM040700DAO.insertUserChg", logmap);
			}
			else if (strMod.equals("I"))
			{
				baseDao.insert("SYM040700DAO.SYM040700C", map);					
				
				logmap.put("USER_ID", map.get("USER_ID"));
				logmap.put("BFCHG_GRP_ID", null);
				logmap.put("AFTCH_GRP_ID", map.get("AUTH_GRP_ID"));
				logmap.put("TRANSFER_ID", map.get("TRAN_USER_ID"));
				
				baseDao.insert("SYM040700DAO.insertUserChg", logmap);	
			}	
		}	// end of for (int x = 0; ...
		
		return iRow;
		
    }
}
