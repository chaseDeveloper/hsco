package hsco.cmm.umsSndng;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.DateUtil;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;

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

@Service("UmsSndngService")
public class UmsSndngServiceImpl extends BaseService implements UmsSndngService {
    
    protected Logger log = LoggerFactory.getLogger(UmsSndngServiceImpl.class);
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    @Resource(name="javaMailSender")
    private JavaMailSenderImpl javaMailSender;
    
    /**
     * SMS 메시지발송
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
            SNDNG_ID = (Integer)baseDao.select("UmsSndngDAO.selectMtprList");
            
            
            map.put("SNDNG_ID",SNDNG_ID);
    		map.put("SEND_DATE",SEND_DATE);
    		    		
    		baseDao.insert("UmsSndngDAO.SmstranCre", map);
    	}  
                      
        return 0; 
        
    }
}
