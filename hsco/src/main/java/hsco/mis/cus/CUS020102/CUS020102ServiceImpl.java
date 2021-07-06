package hsco.mis.cus.CUS020102;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CUS020102ServiceImpl.java
 * @Description  	: 오프라인민원을 관리하는 서비스 구현체 클래스
 * @author       	: 김병진
 * @since        	: 2015. 8. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 18.       김병진		      최초생성
 * </pre>  
 */
@Service("CUS020102Service")
public class CUS020102ServiceImpl extends BaseService implements CUS020102Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
 
    /**
	 * 오프라인민원 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectOfflineCvplList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("CUS020102DAO.selectOfflineCvplList", inMap);
		} else {
			records = (List<Map>)baseDao.list("CUS020102DAO.selectOfflineCvplList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output01", outDsMap);
		
	}

	/**
	 * 오프라인민원목록을 등록/수정/삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int offlineCvplListCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
				baseDao.insert("CUS020102DAO.offlineCvplListC", map);
				baseDao.insert("CUS020102DAO.offlineCvplDstbC", map);
				//baseDao.insert("CUS010101DAO.hmpgCstmrInfoC",map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("CUS020102DAO.offlineCvplListU", map);
				iRow += baseDao.update("CUS020102DAO.offlineCvplDstbU", map);
				//baseDao.insert("CUS010101DAO.hmpgCstmrInfoC",map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("CUS020102DAO.offlineCvplListD", map);
				iRow += baseDao.delete("CUS020102DAO.offlineCvplDstbD", map);
				break;
		
			}	
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
            records = (List<Map>)baseDao.list("CUS020102DAO.innerSanctnUbiDataset", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS020102DAO.innerSanctnUbiDataset", inVar);
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
            records = (List<Map>)baseDao.list("CUS020102DAO.selectInnerSanctnMasterCheck", inMap);
        } else {
            records = (List<Map>)baseDao.list("CUS020102DAO.selectInnerSanctnMasterCheck", inVar);
        }
        
        int lsize = (records == null) ? 0 : records.size();
        if(lsize > 0){
        	
        	Map recordMap = null; 
        	
        	recordMap = (Map)records.get(0);
        	
        	int cnt = Integer.parseInt(recordMap.get("CHK").toString()) ;
        	
        	if(cnt>0){
        	
        		baseDao.update("CUS020102DAO.drftInfoU", inMap);		// 민원 테이블에 내부결재 id 업데이트
        	}
        }
        
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.setRowMaps(records);
        
        outDataset.put("output1", outDsMap);
        
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
          DataSetMap dsSetMap = inDataset.get("input1");  
          List<Map> list = dsSetMap.getRowMaps();
          
          int lsize = (list == null) ? 0 : list.size();
          if(lsize > 0){
                  sanctnInfo = (Map)list.get(0);
          }
          
          String currSanctionSttus = (String)sanctnInfo.get("LAST_SANCTN_STTUS"); // 최종결재상태
        	  
    	  List <Map> records;
        
    	  records = (List<Map>)baseDao.list("CUS020102DAO.selectExpDsnMtr", sanctnInfo);
        
    	  Map recordMap = null; 
      	
    	  int recordsize = (records == null) ? 0 : records.size();
    	  if(recordsize > 0){
    		  recordMap = (Map)records.get(0);
    	  }else{
    		  StringTokenizer st = new StringTokenizer(sanctnInfo.get("JOB_KEY").toString(),"^");
    		  if(st.hasMoreTokens()){
    			  recordMap = new HashMap<String, String>();
    			  recordMap.put("RCEPT_NO", st.nextToken());
    			  recordMap.put("CVPL_NO", st.nextToken());       			  
    		  }
    	  }
    	  
    	  if("T12".equals(currSanctionSttus)){ // 전결 완료
    		  recordMap.put("CVPL_STTUS", "5");     	  
          }else if("S02".equals(currSanctionSttus) || "T05".equals(currSanctionSttus) || "T07".equals(currSanctionSttus) || "T11".equals(currSanctionSttus) || "T15".equals(currSanctionSttus)) {
        	  recordMap.put("CVPL_STTUS", "3");
          }else {
        	  recordMap.put("CVPL_STTUS", "4");
          }
    	  
    	  baseDao.update("CUS020102DAO.cvplSttusU", recordMap);	// 민원처리상태 업데이트
        
          log.info("hsco.mis.cus.CUS020102.CUS020102ServiceImpl.postProcess processed!");

	}
    
	/**
	 * 업로드 파일 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void atchmnFileList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap1 = (DataSetMap)inDataset.get("input1");
		DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap1 != null)
			inMap = inDsMap1.get(0);
		
		List <Map> records1 = new ArrayList<Map>();
		List <Map> records2 = new ArrayList<Map>();

		if (inMap != null) {
			records1 = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);	// 접수 첨부파일 조회
		} 
		
		if (inDsMap2 != null)
			inMap = inDsMap2.get(0);
		
		if (inMap != null) {
			records2 = (List<Map>)baseDao.list("selectAtchmnFileList", inMap);	// 처리 첨부파일 조회
		}
			
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output1", outDsMap1);
		outDataset.put("output2", outDsMap2);
		
	}

    /**
     * 내부결재 번호 업데이트
     * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
     * @return void
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes"})
    public void innerSanctU( DataSetMap tranInfo, Map<String, Object> inVar,
    		Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
    		Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input01");
    	Map inMap = null;
    	
    	if (inDsMap != null){
    		inMap = inDsMap.get(0);
    		
    		baseDao.update("CUS020102DAO.innerSanctU", inMap);
    	}
    	
    	
    }
}
