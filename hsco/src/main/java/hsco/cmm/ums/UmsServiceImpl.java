package hsco.cmm.ums;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.DateUtil;
import hsco.cmm.util.ObjectUtil;

/**
 * 
 *<pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : UmsService.java
 * @Description     : SMS 메시지관리
 * @author          : 이동석
 * @since           : 2016. 3. 14.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 3. 14.					이동석				최초생성
 * </pre>
 */ 

@Service("UmsService")
public class UmsServiceImpl extends BaseService implements UmsService {
    
    protected Logger log = LoggerFactory.getLogger(UmsServiceImpl.class);
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    @Resource(name="javaMailSender")
    private JavaMailSenderImpl javaMailSender;
    
    /** 
     * SMS 메시지 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectSmstranList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("selectSmstranList called!");
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("UmsDAO.selectSmstranList", inMap);
        } else {
            records = (List<Map>)baseDao.list("UmsDAO.selectSmstranList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);    
        
    }
    
    /**
     * 부서정보 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectDeptcodeList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("UmsDAO.selectDeptcodeList", inMap);
        } else {
            records = (List<Map>)baseDao.list("UmsDAO.selectDeptcodeList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);    
        
    }
    
    
    /**
     * 맟춤문자 등록
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public int CustomMessageReg( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
            
    	DataSetMap list = (DataSetMap) inDataset.get("input1"); 
    	int listSize = (list == null) ? 0 : list.size();    	
    	
    	String MSSAGE_ID = "";
    	for (int x = 0; x < listSize; x++) {
    		Map map = list.get(x);
    		
            // 맞춤문자 max값     
    		MSSAGE_ID = (String)baseDao.select("UmsDAO.selectCustomMessgeList");                      
            map.put("MSSAGE_ID",MSSAGE_ID);
     		    		
    		baseDao.insert("UmsDAO.CustomMessageReg", map);
    	} 
                      
        return 0;
        
    }
    
    
    /**
     * 맟춤문자 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public int CustomMessge_D( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
            
    	DataSetMap list = (DataSetMap) inDataset.get("input1"); 

		Map map = list.get(0);
		
		baseDao.insert("UmsDAO.CustomMessge_D", map); 
                      
        return 0;
        
    }    
    
    /** 
     * 맟춤문자 수정
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public int CustomMessge_U( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
            
    	DataSetMap list = (DataSetMap) inDataset.get("input1"); 

		Map map = list.get(0);
		
		baseDao.insert("UmsDAO.CustomMessge_U", map); 
                      
        return 0;
        
    }    

    
    /**
     * SMS 메시지관리 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public int smstranCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
            
    	DataSetMap list = (DataSetMap) inDataset.get("input1"); 
    	int listSize = (list == null) ? 0 : list.size();
    	String SEND_DATE = DateUtil.getFormatString("yyyyMMddHHmmss");//    	
    	
    	int SNDNG_ID = 0;
    	for (int x = 0; x < listSize; x++) {
    		Map map = list.get(x);
    		
            // 메시지고유일련번호 max값     
            SNDNG_ID = (Integer)baseDao.select("UmsDAO.selectMtprList");
            
            
            map.put("SNDNG_ID",SNDNG_ID);
    		map.put("SEND_DATE",SEND_DATE);
    		    		
    		baseDao.insert("UmsDAO.SmstranCre", map);
    		if(map.get("RECPTN_TELNO") != null && !"".equals(map.get("RECPTN_TELNO"))){
    			baseDao.insert("UmsDAO.SmstranC_M", map);
    		}
    	}  
                      
        return 0; 
        
    }
    
    /**
     * 내역삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int smstranC_D( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");     
        int listSize = (list == null) ? 0 : list.size();        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);          
           
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();             
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("UmsDAO.SmstranC_D", map);
                    baseDao.delete("UmsDAO.SmstranM_D", map);
                    break;
                default:
                	break;
            }               
        }       
        return iRow;
    }
   

    
    /**
	 * 메세지 목록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void mssageManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("UmsDAO.mssageInfoR", inMap);
		} else {
			records = (List<Map>)baseDao.list("UmsDAO.mssageInfoR", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records); 
		
		outDataset.put("output1", outDsMap);
    }    
    
    /**
	 * 시스템구분 코드 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectJobSeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("UmsDAO.selectJobSeList", inMap);
		} else {
			records = (List<Map>)baseDao.list("UmsDAO.selectJobSeList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records); 
		
		outDataset.put("output1", outDsMap);
    }      
    
    /**
	 * 메시지 구분 코드 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMessageSeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("UmsDAO.selectMessageSeList", inMap);
		} else {
			records = (List<Map>)baseDao.list("UmsDAO.selectMessageSeList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records); 
		
		outDataset.put("output1", outDsMap);
    }
    
    
    /**
     * 메시지구분 등록
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public int CmmnCode_I( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
            
    	DataSetMap list = (DataSetMap) inDataset.get("input1"); 
    	int listSize = (list == null) ? 0 : list.size();    	
    	
    	String MSSAGE_ID = "";
    	for (int x = 0; x < listSize; x++) {
    		Map map = list.get(x);
    		
            // 맞춤문자 max값     
    		MSSAGE_ID = (String)baseDao.select("UmsDAO.selectCustomMessgeList");                      
            map.put("MSSAGE_ID",MSSAGE_ID);
     		    		
    		baseDao.insert("UmsDAO.CmmnCode_I", map);
    	} 
                      
        return 0;
        
    }
    
     
    /**
     * 메시지구분 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public int CmmnCode_D( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
            
    	DataSetMap list = (DataSetMap) inDataset.get("input1"); 

		Map map = list.get(0);
		
		baseDao.insert("UmsDAO.CmmnCode_D", map); 
                      
        return 0;
        
    }    
    
    /** 
     * 메시지구분 수정
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    
    public int CmmnCode_U( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       
            
    	DataSetMap list = (DataSetMap) inDataset.get("input1"); 

		Map map = list.get(0);
		
		baseDao.insert("UmsDAO.CmmnCode_U", map); 
                      
        return 0;
        
    }     
    @SuppressWarnings({ "rawtypes", "unchecked" })
   	public void getListMailSendLog(DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
   		Map inMap = null;
   		
   		if (inDsMap != null)
   			inMap = inDsMap.get(0);
   		
   		List <Map> records = (List<Map>)baseDao.list("UmsDAO.getListMailSendLog", inMap, false);
   		
   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		
   		outDataset.put("output1", outDsMap);
   		
   	}
    
}
