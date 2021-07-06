package hsco.com.sym.mnm.SYM040500;

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
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM040500ServiceImpl.java
 * @Description  	: 서비스 / 오퍼레이션 관리
 * @author       	: 정윤원
 * @since        	: 2015. 9. 2.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 2.					정윤원				최초생성
 * </pre>
 */

@Service("SYM040500Service")
public class SYM040500ServiceImpl extends BaseService implements SYM040500Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM040500ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /**
	 * 서비스 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getSvcList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	if(log.isInfoEnabled())
		    log.info("getSvcList called!");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0); 
		
		 List<Map> records = (List)baseDao.list("SYM040500DAO.getSvcList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
     * 오퍼레이션 목록 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getOprtinList(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0); 
		
		 List<Map> records = (List)baseDao.list("SYM040500DAO.getOprtinList", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

    /**
	 * 서비스 저장 / 수정 / 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int execSvc(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
			int iRow = 0;
			
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			int listSize = (list==null) ? 0 : list.size();
			
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);						
					
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();				
				
				switch(rowType) {
				
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SYM040500DAO.insertSvc", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						iRow += baseDao.update("SYM040500DAO.updateSvc", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						iRow += baseDao.delete("SYM040500DAO.deleteSvc", map);
						break;
					default :
						
				}
				
				
		} // end of for (int x = 0 ...
			
		return iRow;
			
	}
	
	/**
	 * 오퍼레이션 저장 / 수정 / 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int execOprtin(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
			int iRow = 0;
			
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			int listSize = (list==null) ? 0 : list.size();
			
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);						
					
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();				
				
				switch(rowType) {
				
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SYM040500DAO.insertOprtin", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						iRow += baseDao.update("SYM040500DAO.updateOprtin", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						iRow += baseDao.delete("SYM040500DAO.deleteOprtin", map);
						break;
					default :
						
				}
				
				
		} // end of for (int x = 0 ...
			
		return iRow;
			
	}
		
	

}
