package hsco.mis.ach.ACH020202;

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
 * @Class Name   	: ACH020202ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 8. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8.17.		박병일			최초생성
 *  2015.10.28.     박병일                   표준적용    
 * </pre>  
 */
@Service("ACH020202Service")
public class ACH020202ServiceImpl extends BaseService implements ACH020202Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH020202ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService; 
    
    /** 관점별 가중치 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void mstList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	if(log.isInfoEnabled()) log.info("mstList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		List <Map> records;
		
		records = (List<Map>)baseDao.list("ACH020202DAO.mstList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /** 전략목표별 가중치 조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void mainSearchList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		List <Map> records;
		
		records = (List<Map>)baseDao.list("ACH020202DAO.mainSearchList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /** 관점별 가중치  기초자료 생성 */
	@SuppressWarnings({ "rawtypes" })
	
	public int bsisMstC( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			baseDao.update("ACH020202DAO.bsisMstC", map);
			
				
		}		
		return iRow;		
	}
	
	
	/** 전략목표 가중치  기초자료 생성 */
	@SuppressWarnings({ "rawtypes" })
	
	public int bsisDtlC( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;

		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			baseDao.update("ACH020202DAO.bsisDtlC", map);
			
				
		}		
		return iRow;		
	}
	
	/** 관점별&전략목표별 가중치 수정*/
	@SuppressWarnings({ "rawtypes" })
		
	public int mainCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
		log.debug("inDataset.size()=======" + inDataset.size());
		int iSize = inDataset.size();
		
		//input1
		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :	
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ACH020202DAO.mainU", map);		
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					break;
				default:
					break;
			}				
		}
		
		if (iSize > 1) {
			// input2
			list = (DataSetMap) inDataset.get("input2");
				
			for (int x = 0; x < list.size(); x++) {
					
				Map map = list.get(x);
				
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :	
						break;
						
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ACH020202DAO.dtlU", map);		
						break;
						
					case DataSet.ROW_TYPE_DELETED :
						break;			
				}						
				
			}
		
		}
		
		return iRow;		
	}	
	
	/** 마감여부  조회 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getClosAt( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		List <Map> records;
		
		records = (List<Map>)baseDao.list("ACH020202DAO.getClosAt", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

}