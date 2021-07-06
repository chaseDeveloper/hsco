package hsco.mis.ach.ACH030202P3;

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
 * @Class Name   	: ACH030202P3ServiceImpl.java
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
@Service("ACH030202P3Service")
public class ACH030202P3ServiceImpl extends BaseService {
	
	protected Logger log = LoggerFactory.getLogger(ACH030202P3ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
  
    /**
	 * 복합지표 실적을 조회한다.
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
		List <Map> records1;
		

		records = (List<Map>)baseDao.list("ACH030202P3DAO.mainSearchList", inMap);		
		records1 = (List<Map>)baseDao.list("ACH030202DAO.selectListDtl", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		DataSetMap outDsMap1 = new DataSetMap();
		outDsMap1.setRowMaps(records1);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap1);
		
	}   
	
	
	/**
	 * 복합지표 실적 저장, 수정, 삭제 한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int mainCUD(DataSetMap tranInfo, Map<String, Object> inVar,
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
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ACH030202P3DAO.saveU", map);					
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					break;
			    default:
			    	break;
			}
		
		}
		
		list = (DataSetMap) inDataset.get("input2");
		listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
			
			Map map = list.get(x);
							
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					break;
					
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("ACH030202P3DAO.qyevalDstbAcmsltU", map);		// 	계량지표배정실적 테이블 업데이트
					baseDao.update("ACH030202P3DAO.qyevalResultU", map);			// 	계량지표결과 테이블 업데이트					
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					break;
			    default:
			    	break;
			}
		
		}
		return iRow;
		
	}
   
}
