package hsco.mis.ach.ACH020102P1;

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
 * @Class Name   	: ACH020102P1ServiceImpl.java
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
@Service("ACH020102P1Service")
public class ACH020102P1ServiceImpl extends BaseService implements ACH020102P1Service {
	
	protected Logger log = LoggerFactory.getLogger(ACH020102P1ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
  
    /**
	 * 평가차수별 지표 상세 정보를 조회한다.
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
		

		records = (List<Map>)baseDao.list("ACH020102P1DAO.mainSearchList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
	/**
	 * 평가차수별 지표 상세  정보를  저장, 수정, 삭제 한다.
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
					baseDao.insert("ACH020102P1DAO.mainC", map);  					
					break;
					
				case DataSet.ROW_TYPE_UPDATED :                              
					baseDao.update("ACH020102P1DAO.mainU", map);                                  
					break;
					
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("ACH020102P1DAO.mainD", map);					
					break;
			    default:
			    	break;
			}
		
		}
		return iRow;
		
	}
	
    /** 지표 최초등록시 초기데이터 등록 */
	@SuppressWarnings({ "rawtypes" })
	
	public void firstInsert( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		

		DataSetMap list = (DataSetMap) inDataset.get("input1");		
		
		int listSize = (list == null) ? 0 : list.size();
		
		if(listSize>0){
			Map map = list.get(0);
			baseDao.insert("ACH020102P1DAO.firstInsert", map);
		}
	}

}
