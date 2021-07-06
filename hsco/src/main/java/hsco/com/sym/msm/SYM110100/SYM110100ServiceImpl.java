package hsco.com.sym.msm.SYM110100;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLEncoder;
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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM090200Service.java
 * @Description  	: 알림발송 관리 서비스 구현 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 04.
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

@Service("SYM110100Service")
public class SYM110100ServiceImpl extends BaseService implements SYM110100Service {
    private Logger log = LoggerFactory.getLogger(SYM110100ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    //private String messangerUrl;
    
    /**
     * 사원 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectempList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("selectempList called!");
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("SYM110100DAO.selectempList", inMap);
        } else {
            records = (List<Map>)baseDao.list("SYM110100DAO.selectempList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
        List <Map> records2;

        if (inMap != null) {
            records2 = (List<Map>)baseDao.list("SYM110100DAO.NtcnSndngList", inMap);
        } else {
            records2 = (List<Map>)baseDao.list("SYM110100DAO.NtcnSndngList", inVar);
        }
        
        DataSetMap outDsMap2 = new DataSetMap();
        outDsMap2.setRowMaps(records2);
        
        outDataset.put("output2", outDsMap2);
        
    }
    
    /**
     * 알림 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     * @throws IOException 
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int ntcnSndngCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException, IOException {       
        
        String ntcnUrl = "";
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input1");     
        Map map = list.get(0);
         
        // 알림저장
        baseDao.insert("SYM110100DAO.NtcnSndngC",map); 
        
        String message1 = (String)map.get("RCVER_USER_ID");
        String message2 = (String)map.get("SENDER_USER_NM");
        String message3 = (String)map.get("NTCN_CN");
        String message4 = (String)map.get("LINK_ADRES");
        String message5 = (String)map.get("NTCN_SJ");
                
        
        ntcnUrl = ntcnUrl + "?message1=" + message1;
        ntcnUrl = ntcnUrl + "&message2=" + encodeToUtf8(message2);
        ntcnUrl = ntcnUrl + "&message3=" + encodeToUtf8(message3);
        ntcnUrl = ntcnUrl + "&message4=" + message4;
        ntcnUrl = ntcnUrl + "&message5=" + encodeToUtf8(message5);
        
        /*
        http://포털IP/AtMessengerCommunicator.do?message1=사번&message2=보내는사람이름&message3=알리미내용&message4=링크주소&message5=알람창일뜰때제목
        * */
        
        String apiUrl = "http://192.168.10.222:9000/"+ntcnUrl;     // 포털주소 입력        
     
        //System.out.println("messangerUrl :" + apiUrl);
       
        InputStream in = null;
        
        try {
            URL url = new URL(apiUrl);
            
            in = url.openStream();
        }
        catch(Exception e)  { e.printStackTrace(); }
        finally {
        	if(in != null)
                in.close();            
        }
               
        return iRow;
    }	
	
    
    /**
     * 알리미내용 엔코드
     * @param 
     * @return 
     * @throws 
     * @throws 
     */
	private String encodeToUtf8(String str) {
		 String utf8Str = "";
		try{		     
		    utf8Str = URLEncoder.encode(str,"UTF-8");
		    //System.out.println(str);	   		   
		    
		} catch (Exception e) {
		    e.printStackTrace();
		}
		return utf8Str;
	}
	
	//메신저 발송 로그조회
	  @SuppressWarnings({ "rawtypes", "unchecked" })
	   	public void getListMessengerSendLog(DataSetMap tranInfo, Map<String, Object> inVar,
	   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	   			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	    	
	   		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
	   		Map inMap = null;
	   		
	   		if (inDsMap != null)
	   			inMap = inDsMap.get(0);
	   		
	   		List <Map> records = (List<Map>)baseDao.list("SYM110100DAO.getListMessengerSendLog", inMap, false);
	   		
	   		DataSetMap outDsMap = new DataSetMap();
	   		outDsMap.setRowMaps(records);
	   		
	   		outDataset.put("output1", outDsMap);
	   		
	   	}
	
}
    