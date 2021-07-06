package hsco.mis.bdg.BDG010105;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BDG010105ServiceImpl.java
 * @Description  	: 예산사업코드를 관리하는 서비스 구현체 클래스
 * @author       	: 
 * @since        	: 
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  
 * </pre>  
 */
@Service("BDG010105Service")
public class BDG010105ServiceImpl extends BaseService {

protected Logger log = LoggerFactory.getLogger(BDG010105ServiceImpl.class);
	
    
    /**
     * 예산사업코드 목록
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void bsnsAcntCodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("bsnsAcntCodeList Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("BDG010105DAO.bsnsAcntCodeList", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
  
    /**
     * 예산사업코드 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
	@SuppressWarnings({ "rawtypes" })
	
	public int bsnsAcntCodeCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			iRow += baseDao.update("BDG010105DAO.bsnsAcntCodeU", map);
			if(map.get("CTNU_USE_AT").equals("1")){
				if(map.get("BSNS_TY").equals("11")){		// 사업유형 11 : 택지분양
					baseDao.insert("BDG010105DAO.insertCtnu", map);
				} else if(map.get("BSNS_TY").equals("13")){	// 사업유형 13 : 아파트분양
					baseDao.insert("BDG010105DAO.insertCtnu", map);
				}
			}
		}
		return iRow;
	}
	
    /**
     * 계속비 목록
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCtnu( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
    	if(log.isInfoEnabled()) log.info("selectCtnu Started!");
    	
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("BDG010105DAO.selectCtnu", inMap);		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
     * 계속비 저장
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
	@SuppressWarnings({ "rawtypes" })
	
	public int updateCtnu( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		
		for (int x = 0; x < listSize; x++) {
				
			Map map = list.get(x);
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();
			 switch (rowType) {
		        case DataSet.ROW_TYPE_INSERTED:
		            baseDao.insert("BDG010105DAO.insertCtnu1", map);
		            break;
		        case DataSet.ROW_TYPE_UPDATED:    
		        	iRow += baseDao.update("BDG010105DAO.updateCtnu", map);
		        	break;
		        case DataSet.ROW_TYPE_DELETED:
		        	 baseDao.delete("BDG010105DAO.deleteCtnu", map);
		        	break;
			
			
			 }
		}
		return iRow;
	}
	
	   /**
     * 전년도 예산사업코드 복사
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
	@SuppressWarnings({ "rawtypes" })
	
	public int bsnsAcntCopyC( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
			iRow = baseDao.update("BDG010105DAO.bsnsAcntCopyC", inMap);
			
		return iRow;
	}
}
