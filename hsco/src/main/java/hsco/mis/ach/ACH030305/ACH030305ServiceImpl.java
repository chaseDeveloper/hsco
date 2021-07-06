package hsco.mis.ach.ACH030305;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACH030305ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 9. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 02.	박병일		최초생성
 * </pre>  
 */
@Service("ACH030305Service")
public class ACH030305ServiceImpl extends BaseService implements ACH030305Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH030305ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
  
    /**
	 * 조직별 평가내역 집계 정보를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListMst( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("selectListMst Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("ACH030305DAO.selectListMst", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	} 
    
    /**
	 * 조직/지표/평가자렵  평가내역 상세 정보를 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectListDtl( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		records = (List<Map>)baseDao.list("ACH030305DAO.selectListDtl", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	}    
	 
	 /**
	  * 첨부파일 조회
	  * @param tranInfo
	  * @param inVar
	  * @param inDataset
	  * @param outVar
	  * @param outDataset
	  * @return
	  * @throws NexaServiceException
	  */
	 @SuppressWarnings({ "rawtypes", "unchecked" })
	 public void selectFileList(DataSetMap tranInfo, Map<String, Object> inVar,
	         Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
	         Map<String, DataSetMap> outDataset) throws NexaServiceException {
	     Map inMap = null;
	     DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
	     if (inDsMap != null) {
	         inMap = inDsMap.get(0);
	     }
	     DataSetMap outDsMap = new DataSetMap();
	     outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList", inMap));
	     outDataset.put("output1", outDsMap);
	 }	

}
