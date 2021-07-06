package hsco.mis.ach.ACH030202;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACH030202ServiceImpl.java
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
@Service("ACH030202Service")
public class ACH030202ServiceImpl extends BaseService implements ACH030202Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH030202ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
  
    /**
	 * 계량지표목록을 조회한다.
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

		records = (List<Map>)baseDao.list("ACH030202DAO.selectListMst", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /**
	 * 계량지표 월별 실적 & 첩무실적정보를 조회한다.
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

		records = (List<Map>)baseDao.list("ACH030202DAO.selectListDtl", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);		
	} 
	
	
	/**
	 * 계량지표 월별실적 & 첨부실적 정보를  저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int dtlCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;  
        //input1
		DataSetMap listKey = (DataSetMap) inDataset.get("input1");
		
		Map mapKey = listKey.get(0);
		
		String strAcmsltMt = "";
		if(mapKey != null){
			if(mapKey.get("ACMSLT_MT") != null)
				strAcmsltMt =(String)mapKey.get("ACMSLT_MT");
		}
		
  
		DataSetMap list = (DataSetMap) inDataset.get("input2");
		
		int listSize = (list == null) ? 0 : list.size();
				
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
							
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
//				case DataSet.ROW_TYPE_INSERTED :
//					break;
					
				case DataSet.ROW_TYPE_UPDATED :  
					map.put("ACMSLT_MT",strAcmsltMt);
					baseDao.update("ACH030202DAO.dtlU", map); 		// 계량지표배정실적 update
					baseDao.update("ACH030202DAO.resultU", map);    // 계량지표결과 - 합계(최종)실적치 update
					baseDao.update("ACH030202DAO.resultWithU", map);// 계량지표결과 - 최종결과점수 및 누적달성율 update					
					break;
					
//				case DataSet.ROW_TYPE_DELETED :
//					break;	
				default:
					break;
			}
		
		}
		return iRow;		
	}
	
	/**
	 * 첨부파일
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
   
   @SuppressWarnings({ "rawtypes", "unchecked" })
   public void selectAtchFile(DataSetMap tranInfo, Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar, Map<String, DataSetMap> outDataset) throws NexaServiceException {

       Map inMap = null;
       DataSetMap inDsMap = (DataSetMap) inDataset.get("input1");
       if (inDsMap != null) {
           inMap = inDsMap.get(0);
       }
       
       DataSetMap outDsMap = new DataSetMap();
       outDsMap.setRowMaps((List<Map>) baseDao.list("selectAtchmnFileList",  inMap));
       outDataset.put("output1", outDsMap);
   }
   
}
