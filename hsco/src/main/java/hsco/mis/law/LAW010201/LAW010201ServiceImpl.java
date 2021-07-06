package hsco.mis.law.LAW010201;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.dao.BaseDao;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : LAW010201ServiceImpl.java
 * @Description     : 법률자문신청 목록을 관리하는 서비스 구현체 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 13.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 13.      김병진             최초생성
 * </pre>  
 */
@Service("LAW010201Service")
public class LAW010201ServiceImpl extends BaseService implements LAW010201Service {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
     * 법률자문신청목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLawCnsutReqst( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
        
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records = (List<Map>)baseDao.list("LAW010201DAO.selectLawCnsutReqst", inMap);
        
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output01", outDsMap);
        
    }
    
    /**
     * 법률자문신청목록 등록, 수정, 삭제
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return int
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    
    public int lawCnsutReqstCUD( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        
        int iRow = 0;
        
        DataSetMap list = (DataSetMap) inDataset.get("input02");
        
        int listSize = (list == null) ? 0 : list.size();
        
        for (int x = 0; x < listSize; x++) {
                
            Map map = list.get(x);
            
            int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
            
            switch(rowType) {
                case DataSet.ROW_TYPE_INSERTED :
                    baseDao.insert("LAW010201DAO.lawCnsutReqstC", map);
                    break;
                case DataSet.ROW_TYPE_UPDATED :
                    iRow += baseDao.update("LAW010201DAO.lawCnsutReqstU", map);
                    break;
                case DataSet.ROW_TYPE_DELETED :
                    iRow += baseDao.delete("LAW010201DAO.lawCnsutReqstD", map);
                    break;
            
            }   
            
        }
        
        return iRow;
    }        
    
    /**
     * 법률자문결과 목록을 조회한다.
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void selectLawCnsutResult( DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
        
        DataSetMap inDsMap = (DataSetMap)inDataset.get("input03");
        Map inMap = null;
        
        if (inDsMap != null)
            inMap = inDsMap.get(0);
        
        List <Map> records = (List<Map>)baseDao.list("LAW010201DAO.selectLawCnsutResult", inMap);

        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output03", outDsMap);
        
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
            records = (List<Map>)baseDao.list("LAW010201DAO.innerSanctnUbiDataset", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010201DAO.innerSanctnUbiDataset", inVar);
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
            records = (List<Map>)baseDao.list("LAW010201DAO.selectInnerSanctnMasterCheck", inMap);
        } else {
            records = (List<Map>)baseDao.list("LAW010201DAO.selectInnerSanctnMasterCheck", inVar);
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
    }
    
    /**
     * 내부결재 번호 업데이트 
     * @param (Map sanctnInfo) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes" })
    public void innerSanctU(DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
        Map inMap = null;
        
        if(inDsMap != null){
        	inMap = inDsMap.get(0);
        	
        	System.out.println("saldjsdkjfl : "+ inMap.get("REQST_NO"));
        	baseDao.update("LAW010201DAO.innerSanctU", inMap);
        }
    }
    
    /**
     * 내부결재 후처리 메소드 
     * @param (Map sanctnInfo) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({  })
    public void postProcess(BaseDao baseDao, DataSetMap tranInfo, Map<String, Object> inVar,
            Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
            Map<String, DataSetMap> outDataset) throws NexaServiceException {
          log.info("postProcess called!");
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
