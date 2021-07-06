package hsco.com.sym.cdm.SYM030700;

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
import hsco.cmm.util.ObjectUtil;

/**
 * 
 *<pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : SYM030700Service.java
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

@Service("SYM030700Service")
public class SYM030700ServiceImpl extends BaseService implements SYM030700Service {
    
    protected Logger log = LoggerFactory.getLogger(SYM030700ServiceImpl.class);
    
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
            records = (List<Map>)baseDao.list("SYM030700DAO.selectSmstranList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SYM030700DAO.selectSmstranList", inVar);
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
            records = (List<Map>)baseDao.list("SYM030700DAO.selectDeptcodeList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SYM030700DAO.selectDeptcodeList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);    
        
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
        
        // SMS 마스터 입력
        DataSetMap list = (DataSetMap) inDataset.get("input1"); 
        Map map = list.get(0);
        // SMS:0, MMS:2
        String SERVICE_TYPE = (String)map.get("SERVICE_TYPE");
        String CHANGE_WORD1 = (String)map.get("CHANGE_WORD1");
        String CHANGE_WORD2 = (String)map.get("CHANGE_WORD2");
        String CHANGE_WORD3 = (String)map.get("CHANGE_WORD3");
        String CHANGE_WORD4 = (String)map.get("CHANGE_WORD4");
        
        baseDao.insert("SYM030700DAO.SmstranC_M",map); 
        
        
        // 메시지고유일련번호 max값     
        Integer MT_PR = (Integer)baseDao.select("SYM030700DAO.selectMtprList", map);  
        
        int iRow = 0;
        
        // 수신자 번호 리스트 
        DataSetMap list2 = (DataSetMap) inDataset.get("input2");     
        int listSize = (list2 == null) ? 0 : list2.size();               
                
        for (int x = 0; x < listSize; x++) {
                
            Map map2 = list2.get(x);
            map2.put("MT_PR" , MT_PR);
            map2.put("SERVICE_TYPE" , SERVICE_TYPE);
            map2.put("CHANGE_WORD1" , CHANGE_WORD1);
            map2.put("CHANGE_WORD2" , CHANGE_WORD2);
            map2.put("CHANGE_WORD3" , CHANGE_WORD3);
            map2.put("CHANGE_WORD4" , CHANGE_WORD4);
            baseDao.insert("SYM030700DAO.SmstranCre", map2);
        } 
        
        map.put("MT_PR" , MT_PR);
        baseDao.insert("SYM030700DAO.SmstranC_U",map); 
        
        return iRow;
        
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
                    iRow += baseDao.delete("SYM030700DAO.SmstranC_D", map);
                    baseDao.delete("SYM030700DAO.SmstranM_D", map);
                    break;
                default:
                	break;
            }               
        }       
        return iRow;
    }
   
    /**
     * 이메일관리 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int emailsendCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {       

        int iRow = 0;
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map map = null;
		
		if (inDsMap != null)
			map = inDsMap.get(0);
        
        // 세션정보 설정
//        try {
//            ObjectUtil.setUserToMap(map);
//        }
//        catch( Exception e) {
//            throw new NexaServiceException(e); 
//        }
		
		if(map == null){
			iRow = 0;
		} else {
	        //System.out.println("BEFORE SYM030700DAO.EmailsendCUD");       
	        baseDao.insert("SYM030700DAO.EmailsendCUD",map); 
	        //System.out.println("AFTER SYM030700DAO.EmailsendCUD");
	        
	        // Spring의 메일 발신 클래스를 하나 선언하고 서버 정보를 설정한다.

//	        javaMailSender.setHost("210.105.102.139");
//	        javaMailSender.setPort(25);
//	        javaMailSender.setUsername("hscos");
//	        javaMailSender.setPassword("hscos123");
	        
	        String from1    = (String)map.get("SENDER_EMAIL");
	        String to1      = (String)map.get("RCVER_EMAIL");
	        String subject1 = (String)map.get("EMAIL_CJ");
	        String text1    = (String)map.get("EMAIL_CN");
	        
	        // 메일 내용을 작성한다
	        SimpleMailMessage msg = new SimpleMailMessage();
	        msg.setFrom(from1);
	        msg.setTo(to1);
	        msg.setSubject(subject1);
	        msg.setText(text1);
	         
	        try {
	        	//System.out.println("BEFORE javaMailSender.send"); 
	        	javaMailSender.send(msg);
	        	//System.out.println("AFTER javaMailSender.send"); 
	        } catch (MailException ex) {
	            // 적절히 처리
	        	//System.out.println("CATCH MailException: " + ex.getMessage()); 
	        	ex.printStackTrace(System.err);
	        	throw new NexaServiceException("err.이메일전송.실패");
	        }
		}
        return iRow;
        
    } 
    
 
    
}
