package hsco.com.sym.scm.SYM070100;

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
 
/*
* <pre>
* @Project Name 	: 화성도시공사 차세대정보시스템
* @Class Name   	: SYM070100ServiceImpl.java
* @Description  	: 연계기관/시스템/서비스를 관리하는 서비스 구현체 클래스
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

@Service("SYM070100Service")
public class SYM070100ServiceImpl extends BaseService implements SYM070100Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM070100ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;	
    
    
    /**
	 * 시스템연계 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void sysCntcList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	if(log.isInfoEnabled())
		    log.info("sysCntcList called");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM070100DAO.SysCntcList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
    
    /**
	 * 시스템연계 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM070100CUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();

        if(listSize > 0) {
        	for (int x = 0; x < listSize; x++) {
				
    			Map map = list.get(x);
    			
    			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
    			
    			
    			switch(rowType) {
    				case DataSet.ROW_TYPE_INSERTED :
    					baseDao.insert("SYM070100DAO.SysCntcC", map);
    					break;
    				case DataSet.ROW_TYPE_UPDATED :
    					iRow += baseDao.update("SYM070100DAO.SysCntcU", map);
    					break;
    				case DataSet.ROW_TYPE_DELETED :
    					iRow += baseDao.delete("SYM070100DAO.SysCntcD", map);
    					break;
    			    default:
    			    	break;
    			}	
    			
    		}
        }
        
		return iRow;
		
	}
	
	/**
	 * 내부결재ID 수정
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int SYM070101U( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();

        if(listSize > 0) {
        	for (int x = 0; x < listSize; x++) {
    			Map map = list.get(x);
    		    iRow += baseDao.update("SYM070100DAO.SysCntcSanctnIdU", map);
    		}
        }
        
		return iRow;
		
	}
	
	
	/**
	 * 시스템연계  내부결재용 보고서 정보를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void sysCntcReport( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		if(inMap != null){
		    List <Map> records;
            
		    records = (List<Map>)baseDao.list("SYM070100DAO.SysCntcList", inMap);
		    DataSetMap outDsMap = new DataSetMap();
		    outDsMap.setRowMaps(records);
		    outDataset.put("output1", outDsMap);
		    
		    
		    // 제공측 송신 메시지
		    Map<String, String> srchMap = new HashMap<String, String>();
		    String cntcInsttId = "";
		    String cntcSysId = "";
		    String cntcSvcId = "";
		    if(inMap.get("PROVD_INSTT_ID") != null)
		        cntcInsttId =(String)inMap.get("PROVD_INSTT_ID"); //제공기관ID
		    if(inMap.get("PROVD_SYS_ID") != null)
		        cntcSysId = (String)inMap.get("PROVD_SYS_ID"); //제공시스템ID
		    if(inMap.get("PROVD_SVC_ID") != null)
		        cntcSvcId = (String)inMap.get("PROVD_SVC_ID"); //제공서비스ID
		    srchMap.put("INSTT_ID", cntcInsttId);
		    srchMap.put("SYS_ID", cntcSysId);
		    srchMap.put("SVC_ID", cntcSvcId);
		    List <Map> records2 = (List<Map>)baseDao.list("SYM070101DAO.SvcMessageList", srchMap);	// output2
		    	
		    DataSetMap outDsMap2 = new DataSetMap();
		    outDsMap2.setRowMaps(records2);
		    outDataset.put("output2", outDsMap2);
		    
		    // 제공측 수신 메시지
		    List <Map> records4 = (List<Map>)baseDao.list("SYM070101DAO.SvcMessageRecvList", srchMap);	// output4
		    DataSetMap outDsMap4 = new DataSetMap();
		    outDsMap4.setRowMaps(records4);
		    outDataset.put("output4", outDsMap4);
		    
		    // 요청측 송신메시지
		    Map<String, String> srchMap2 = new HashMap<String, String>();
		    String insttId = (String)inMap.get("REQUST_INSTT_ID"); //요청기관ID
		    String sysId = (String)inMap.get("REQUST_SYS_ID"); //요청시스템ID
		    String svcId = (String)inMap.get("REQUST_SVC_ID"); //요청서비스ID
		    srchMap2.put("INSTT_ID", insttId);
		    srchMap2.put("SYS_ID", sysId);
		    srchMap2.put("SVC_ID", svcId);
		    List <Map> records3 = (List<Map>)baseDao.list("SYM070101DAO.SvcMessageList", srchMap2);	//output3
            
		    DataSetMap outDsMap3 = new DataSetMap();  
		    outDsMap3.setRowMaps(records3);
		    outDataset.put("output3", outDsMap3);
		    
		    // 요청측 수신메시지
		    srchMap2.put("INSTT_ID", insttId);
		    srchMap2.put("SYS_ID", sysId);
		    srchMap2.put("SVC_ID", svcId);
		    List <Map> records5 = (List<Map>)baseDao.list("SYM070101DAO.SvcMessageRecvList", srchMap2);	//output5
            
		    DataSetMap outDsMap5 = new DataSetMap();  
		    outDsMap5.setRowMaps(records5);
		    outDataset.put("output5", outDsMap5);
        } 
	}
    
    //
    /**
	 * (팝업용) 연계서비스 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void cntcSvcList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("SYM070102DAO.CntcSvcList", inMap);

		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		outDataset.put("output1", outDsMap);
	}
	
}