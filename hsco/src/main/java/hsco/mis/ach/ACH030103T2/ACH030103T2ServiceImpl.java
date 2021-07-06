package hsco.mis.ach.ACH030103T2;

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
 * @Class Name   	: ACH030103T2ServiceImpl.java
 * @Description  	: 
 * @author       	: 박병일
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
 *  2015. 8. 18.	박병일				최초생성
 * </pre>  
 */
@Service("ACH030103T2Service")
public class ACH030103T2ServiceImpl extends BaseService implements ACH030103T2Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH030103T2ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;    
    
    /**
	 * 비계량평가자 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException { 		

    	if(log.isInfoEnabled()) log.info("selectList Started!");
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		
		records = (List<Map>)baseDao.list("ACH030103T2DAO.selectList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}  
 
	
	/**
	 * 비계량평가자  등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	public int mainCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ACH030103T2DAO.mainC", map);
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ACH030103T2DAO.mainU", map);
					break;
					
				case DataSet.ROW_TYPE_DELETED :	
					iRow += baseDao.delete("ACH030103T2DAO.mainD", map);
					break;
			    default:
			    	break;
			}				
		}		
		return iRow;		
	}	
	
	/**
	 * 사용자정보를 저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int ACH030103T2CodeCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
					baseDao.insert("ACH030103T2DAO.ACH030103T2CodeC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("ACH030103T2DAO.ACH030103T2CodeU", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					iRow += baseDao.delete("ACH030103T2DAO.ACH030103T2CodeD", map);
					break;
			    default:
			    	break;
			}
		
		}
		return iRow;
		
	}

}
