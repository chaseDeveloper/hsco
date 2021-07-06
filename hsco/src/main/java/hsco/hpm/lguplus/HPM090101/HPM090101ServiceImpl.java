package hsco.hpm.lguplus.HPM090101;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.DateUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HPM090101Controller.java
 * @Description  	: LG U+ 정산내역
 * @author       	: 이수지
 * @since        	: 2018. 01. 29.
 * @version      	: 1.0
 * @see          	:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2018. 01. 29.					이수지			최초생성
 * </pre>
 */

@Service("HPM090101Service")
public class HPM090101ServiceImpl extends BaseService {

    protected Logger log = LoggerFactory.getLogger(HPM090101ServiceImpl.class);

    private final String USER_AGENT = "Mozilla/5.0";
    private static String LG_URL = "http://pgweb.uplus.co.kr/pg/wmp/outerpage/trxdown.jsp";
    

    /**
	 * LG U+ 상점 ID 조회
	 * */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectStoreIdList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
                
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>)baseDao.list("HPM090101DAO.selectStoreIdList"));
        outDataset.put("output1", outDsMap);        
    }
    
    /**
     * LG U+ 정산내역 조회
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void lgExcclcDataList( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
                
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps((List<Map>)baseDao.list("HPM090101DAO.lgExcclcDataList", inMap));
        outDataset.put("output1", outDsMap);        
    }
    
    /**
     * LG U+ 정산내역 목록 조회
     * @param date
     * @throws ParseException 
     * @throws Exception
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
        public void makeUplusData( DataSetMap tranInfo, Map<String, Object> inVar,
                Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
                Map<String, DataSetMap> outDataset) throws NexaServiceException, ParseException {

        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        String bgnDe = inMap.get("SELNG_BGNDE").toString();
        String endDe = inMap.get("SELNG_ENDDE").toString();

        // TODO 대상일자의 거래데이터 삭제
        baseDao.delete("HPM090101DAO.deleteStoreIdData", inMap);
        
        //baseDao.delete("HPM090101DAO.deleteStoreIdList", inMap);
        
        // TODO 상점아이디목록 조회
        //inMap.put("STORE_ID_GRP_AT", "1");		// 상점아이디 그룹여부
        List<Map> sList = (List<Map>) baseDao.list("HPM090101DAO.selectStoreIdList");
       
        if(sList != null && sList.size() > 0) {
	      
        	// 기간
	    	while(bgnDe.compareTo(endDe) < 1) {
	        	
	    		for(Map<String, Object> map : sList) {
	    			
	    			// STORE_ID 상점ID, RM : key 값
	    			this.setTrxData((String)map.get("STORE_ID"), (String)map.get("RM"), bgnDe);
	    		}
	        	bgnDe = DateUtil.addDays(bgnDe, 1);
	        }
        }
    }
    
    /**
     * 상점ID별 거래내역정보 저장처리
     * 
     * @param id 상점아이디
     * @param key 상점Key값
     * @param date 대상일자
     */
    @Transactional
	private void setAdjData(String storeId, String key, String date) {
        
        BufferedReader in = null;
        try {
            
            StringBuilder sb = new StringBuilder();
            sb.append(LG_URL);
            sb.append("?mertid=");
            sb.append(storeId);
            
            // 서비스코드가 ADJ - 정산데이터, TRX - 거래데이터
            sb.append("&servicecode=ADJ&trxdate=");
            sb.append(date);
            sb.append("&key=");
            sb.append(this.getEncMD5(storeId + key));
            
            System.out.println("URL 정보 ===> " + sb.toString() );
            sb.toString();
            
            URL url = new URL(sb.toString());
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("User-Agent", USER_AGENT);
            
            in = new BufferedReader(new InputStreamReader(con.getInputStream() ,"EUC-KR"));
            String inputLine;
            
            int cnt = 0;
            while ((inputLine = in.readLine()) != null) {
                
                // 헤더정보 제거 후 실데이터만 취득 해야 함(ADJ)
            	if(cnt > 0) {
	                Map<String, Object> data = new HashMap<String, Object>();
	                String[] line = inputLine.split(";");
                
	                data.put("MID", 		line[2]);     // 상점ID
	                data.put("OID", 		line[3]);     // 주문번호
	                data.put("ORDER_DE", 	line[4]);     // 주문일자 
	                data.put("PAYTYPE", 	line[5]);     // 결제수단 
	                data.put("DELNG_TY", 	line[6]);     // 거래유형 
	                data.put("AMOUNT", 		line[7]);     // 거래금액 
	                data.put("FEE_SM", 		line[8]);     // 수수료계
	                data.put("SELNG_DE", 	line[9]);     // 매출일자
	                data.put("PYMNT_DE", 	line[10]);    // 지급일자
	                
	                // TODO 상점ID별 데이터 저장처리
	                baseDao.insert("HPM090101DAO.insertStoreIdData", data);
                }
                
                cnt ++;
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            
            try {
                in.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    
    
    /**
     * 상점ID별 거래내역정보 저장처리
     * 
     * @param id 상점아이디
     * @param key 상점Key값
     * @param date 대상일자
     */
    private void setTrxData(String storeId, String key, String date) {
        
    		
    	   BufferedReader in = null;
           try {
        	   int costValue = 0; 
        	   int cnt       = 0;
        	   String[] serviceCodeList = {"TRX", "REV"};
               
        	   for(String serviceCode : serviceCodeList) {
	               StringBuilder sb = new StringBuilder();
	               sb.append(LG_URL);
	               sb.append("?mertid=");
	               sb.append(storeId);
	               
	               sb.append("&servicecode="+serviceCode+"&trxdate=");
	               sb.append(date);
	               sb.append("&key=");
	               sb.append(this.getEncMD5(storeId + key));
	               
	               System.out.println("URL  ===> " + sb.toString() );
	               sb.toString();
	               
	               URL url = new URL(sb.toString());
	               HttpURLConnection con = (HttpURLConnection) url.openConnection();
	               con.setRequestMethod("GET");
	               con.setRequestProperty("User-Agent", USER_AGENT);
	               
	               in = new BufferedReader(new InputStreamReader(con.getInputStream() ,"EUC-KR"));
	               String inputLine;
	               
	               while ((inputLine = in.readLine()) != null) {
	                   
                       Map<String, Object> data = new HashMap<String, Object>();
                       String[] line = inputLine.split(";");
                       
                       data.put("MID", line[0]);           
                       data.put("PAYTYPE", line[1]);       
                       data.put("TRANSACTION", line[2]);   
                       data.put("OID", line[3]);           
                       data.put("FINANCECODE", line[4]);   
                       data.put("FINANCENAME", line[5]);   
                       data.put("BUYERID", line[6]);       
                       data.put("AMOUNT", line[7]);        
                       data.put("USEESCROW", line[8]);     
                       data.put("REFUNDDATE", line[9]);    
                       data.put("AUTHNUMBER", line[10]);   
                       data.put("STATUS", line[11]);       
                       
                       if(serviceCode == "TRX") {
                    	   costValue += Integer.parseInt(line[7]);
                       
                       }else if(serviceCode == "REV") {
                    	   costValue -= Integer.parseInt(line[7]);
                       }
                       //list.add(data);
                       
                       baseDao.insert("HPM090101DAO.insertStoreIdData", data);
	                   
	                   cnt++;
	               }
        	   }
	               
	               if (cnt > 0) {
	                   Map<String, Object> uMap = new HashMap<String, Object>();
	                   uMap.put("INCME_DE", date);
	                   uMap.put("STORE_ID", storeId);
	                   switch(storeId){
	                   case "bahssf_s":
	                       uMap.put("CENTRALPARK_AMOUNT", costValue);
	                       break;
	                   case "bahssf_d":
	                       uMap.put("DOLMORU_TNNCRT_AMOUNT", costValue);
	                       break;
	                   case "bahssf_b":
	                       uMap.put("DONGTAN_BADMCRT_AMOUNT" ,costValue);
	                       break;
	                   case "bahssf_hp":
	                       uMap.put("HYANGNAM_PARK_GLCRS_AMOUNT", costValue);
	                       break;
	                   case "bahssf_p":
	                       uMap.put("PARK_GLCRS_MANAGE_AMOUNT", costValue);
	                       break;
	                   case "bahssf_k":
	                       uMap.put("ACHSTE_AMOUNT", costValue);
	                       break;
	                   case "bahssf_c":
	                       uMap.put("ENERGE_BADMCRT_AMOUNT", costValue);
	                       break;
	                   case "bahssf_mg":
	                	   uMap.put("MG_AMOUNT", costValue);
	                	   break;
	                   case "pos_hs3":
	                	   uMap.put("BB_INSIDE_PARK_AMOUNT", costValue);
	                	   break;	                	   
	                   }
	                   
	                   baseDao.update("HPM090101DAO.updateStoreIdList", uMap);
	               }
        	   
           } catch (Exception e) {
               e.printStackTrace();
           } finally {
               
               try {
                   in.close();
               } catch (IOException e) {
                   e.printStackTrace();
               }
           }
    }
    /**
     * LG U플러스 파라메터 MD5처리
     * @param txt
     * @return
     * @throws Exception
     */
    private String getEncMD5(String txt) throws Exception {
        String md5 = "";
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(txt.getBytes());

            byte byteData[] = md.digest();
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < byteData.length; i++) {
                sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
            }
            md5 = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            md5 = null;
            e.printStackTrace();
        }
        return md5;
    }

}