package hsco.mis.cus.CUS010201;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS010201ServiceImpl.java
 * @Description     : 직원칭찬관리목록을 관리하는 서비스 구현체 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 06.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 06.      김병진             최초생성
 * </pre>  
 */

@Service("CUS010201Service")
public class CUS010201ServiceImpl extends BaseService implements CUS010201Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    

    /*직원칭찬관리목록 조회*/
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void selectCstmrPartcptnList(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,Map<String, DataSetMap> outDataset) throws NexaServiceException {
         
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010201DAO.selectCstmrPartcptnList", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010201DAO.selectCstmrPartcptnList", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    /*직원칭찬관리목록 수정 */
	 @SuppressWarnings({ "rawtypes" })
	  
	   public int cstmrPartcptnListU(DataSetMap tranInfo, Map<String, Object> inVar,
	           Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	           Map<String, DataSetMap> outDataset) throws NexaServiceException {
	       
	       int iRow = 0;
	       
	       DataSetMap list = (DataSetMap) inDataset.get("input02");
	       
	       int listSize = (list == null) ? 0 : list.size();
	       
	       for (int x = 0; x < listSize; x++) {
	               
	           Map map = list.get(x);
	                           
               baseDao.update("CUS010201DAO.cstmrPartcptnListU", map);
	       }
	       return iRow;
	   }
	 
 /**
     * UBIREOPORT DATASET을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void innerSanctnUbiDataset( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010201DAO.innerSanctnUbiDataset", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010201DAO.innerSanctnUbiDataset", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    
    /**
     * 최초내부결재진행여부체크
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectInnerSanctnMasterCheck( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records;

        if (inMap != null) {
            records = (List<Map>)baseDao.list("CUS010201DAO.selectInnerSanctnMasterCheck", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS010201DAO.selectInnerSanctnMasterCheck", inVar);
        }

        int lsize = (records == null) ? 0 : records.size();
        if(lsize > 0){
        	
        	Map recordMap = null; 
        	
        	recordMap = (Map)records.get(0);
        	
        	int cnt = Integer.parseInt(recordMap.get("CHK").toString()) ;
        	
        	if(cnt>0){
        	
        		baseDao.update("CUS010201DAO.drftInfoU", inMap);		// 테이블에 내부결재 id 업데이트
        	}
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }

    /**
     * 내부결재 번호 업데이트
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void saveInnerSanc( DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
    	Map inMap = null;
    	
    	if (inDsMap != null){
    		inMap = inDsMap.get(0);
    		baseDao.update("CUS010201DAO.saveInnerSanc", inMap);
    	}    	
    }
    
    /**
     * 내부결재 후처리 메소드 
     * @param (Map sanctnInfo) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
          log.info("postProcess called!");
          
          Map sanctnInfo = null; 
          DataSetMap dsSetMap = inDataset.get("INNER_SANCTN_MASTR");  
          List<Map> list = dsSetMap.getRowMaps();
          
          int lsize = (list == null) ? 0 : list.size();
          if(lsize > 0){
                  sanctnInfo = (Map)list.get(0);
          }
          
          String currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태

          List <Map> records;
          
          //결재번호로 제안자 정보 찾기
          records = (List<Map>)baseDao.list("CUS010201DAO.cstmrPartcptnInfo", sanctnInfo);
          
          Map recordMap = null;
          
    	  int recordsize = (records == null) ? 0 : records.size();
    	  Map smsMap = new HashMap<String, String>();
  
    	  if(recordsize > 0){
    		  recordMap = (Map)records.get(0);

    		  if("S01".equals(currSanctionSttus)){ // 완료시 제안자에게 SMS 알림
    			  if(recordMap.get("MBTLNO")!=null){
    				  smsMap.put("SEND_DEPT_CODE", recordMap.get("DEPT_CODE"));		//발송부서코드
            		  smsMap.put("ANSW_TEL", "0533500301");							//회신번호
            		  smsMap.put("BROAD_MSSAGE_ID", "0000000024");					//맞춤문자 ([고객]고객제안) CUS004
    	    	      smsMap.put("CHANG_WORD1", recordMap.get("CSTMR_NM"));			//맞춤문자1(고객명)
    	    	      smsMap.put("RECIPIENT_NUM", recordMap.get("MBTLNO"));			//수진자번호
    	    	      smsMap.put("RCVER_NM", recordMap.get("CSTMR_NM"));			//수신자명
    	    	      smsMap.put("SENDER_ID", recordMap.get("OPETR"));				//발신자아이디
    	    	        
            		  baseDao.insert("CUS010201DAO.messeageProcedure", smsMap);
    			  }
    		  }
    	  }
          
          
          
          
          
          
          
          /*Map sanctnInfo = null; 
          DataSetMap dsSetMap = inDataset.get("input1");  
          List<Map> list = dsSetMap.getRowMaps();
          int lsize = (list == null) ? 0 : list.size();
          if(lsize > 0){
                  sanctnInfo = (Map)list.get(0);
          }
          String currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
          if("T12".equals(currSanctionSttus)){ // 전결 완료
            List <Map> records;
            records = (List<Map>)baseDao.list("ACC020203DAO.selectExpDsnMtr", sanctnInfo);
            Map recordMap = null; 
            int recordsize = (records == null) ? 0 : records.size();
            if(recordsize > 0){
                recordMap = (Map)records.get(0);
            }else{
                StringTokenizer st = new StringTokenizer(sanctnInfo.get("JOB_KEY").toString(),"^");
                if(st.hasMoreTokens()){
                    recordMap = new HashMap<String, String>();
                    recordMap.put("DECSN_NO", st.nextToken());
                    recordMap.put("DECSN_YEAR", st.nextToken());
                }
            }

            if("ACC-100027".equals((String)sanctnInfo.get("INNER_SANCTN_MDL_ID")) 
                    || "ACC-100041".equals((String)sanctnInfo.get("INNER_SANCTN_MDL_ID"))){ //지출결의서의 경우
                baseDao.update("ACC020203DAO.exrChkYnU", recordMap);                //법인카드 지출확인
            }
            baseDao.update("ACC020203DAO.expndtrCnfirmAtU", recordMap);         //지출결의서 지출확인
            baseDao.update("ACC020203DAO.expndtrCnfirmU", recordMap);           //지출확인 승인/취소 (주간계획)
          }
 */       
    }
}
    