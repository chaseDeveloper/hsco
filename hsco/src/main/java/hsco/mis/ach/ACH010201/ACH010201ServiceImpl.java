package hsco.mis.ach.ACH010201;

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
 * @Class Name   	: ACH010201ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.		박병일			최초생성
 *  2015.10.28.     박병일                   표준적용    
 * </pre>  
 */
@Service("ACH010201Service")
public class ACH010201ServiceImpl extends BaseService implements ACH010201Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH010201ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;   
    
    /**
	 * 평가대상조직을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void mainSearchList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	if(log.isInfoEnabled()) log.info("mainSearchList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		List <Map> records;
		
		records = (List<Map>)baseDao.list("ACH010201DAO.mainSearchList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}    
    
    /**
	 * 평가대상조직 신규,수정,삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int mainCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		int iRow = 0;
		int iSize = inDataset.size();
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");			
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :	
					baseDao.insert("ACH010201DAO.mainC", map);	
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ACH010201DAO.mainU", map);		
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					//Dtl 전체삭제
					baseDao.delete("ACH010201DAO.detailD", map);
					baseDao.delete("ACH010201DAO.mainD", map);
					break;
				default:
					break;
			}				
		}
		
		if (iSize > 1) {
			
		}
			DataSetMap list2 = (DataSetMap) inDataset.get("input2");			
			int listSize2 = (list2 == null) ? 0 : list2.size();
			
			for (int x = 0; x < listSize2; x++) {
					
				Map map2 = list2.get(x);
				
				int rowType = ((Integer) map2.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
				
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :	
						baseDao.insert("ACH010201DAO.detailC", map2);	
						break;
						
					case DataSet.ROW_TYPE_UPDATED :
						baseDao.update("ACH010201DAO.detailU", map2);		
						break;
						
					case DataSet.ROW_TYPE_DELETED :
						baseDao.delete("ACH010201DAO.detailD", map2);
						break;	
					default:
						break;
				}
		}
		
		return iRow;		
	}
	
    /**
	 * 평가대상조직 연결부서를  조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void detailR( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 

    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");    	
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
        
		List <Map> records;
		
		records = (List<Map>)baseDao.list("ACH010201DAO.detailR", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 평가대상조직 연결부서 신규,수정,삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
		
	public int detailCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ACH010201DAO.detailC", map);	
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ACH010201DAO.detailU", map);		
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("ACH010201DAO.detailD", map);
					break;
				default:
					break;
			}				
		}		
		return iRow;		
	}    

}