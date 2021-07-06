package hsco.mis.sal.SAL020205;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.ObjectUtil;



/**
 * <pre>
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL020205ServiceImpl.java
 * @Description  	: 임크피크제관리
 * @author       	: 이상명
 * @since        	: 2016. 2. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 2. 18.					이상명				최초생성
 * </pre>  
 */

@Service("SAL020205Service")
public class SAL020205ServiceImpl extends BaseService implements SAL020205Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    /**
	 * 임크피크제정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectWagePeakList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		int cnt = Integer.parseInt((String) baseDao.select("SAL020205DAO.selectCheckBrthdy", inMap));
		if(cnt > 0) {
			throw new NexaServiceException("info.처리불가", "생년월일이 잘못 입력된 정보가 존재합니다.\n확인 후 다시 시도하여주십시오.");
		}
		
		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL020205DAO.selectWagePeakTrgList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL020205DAO.selectWagePeakTrgList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}	
    
    /**
	 * 임크피크제정보기준 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectwagepeakstdrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL020205DAO.selectwagepeakstdrList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL020205DAO.selectwagepeakstdrList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}
	
		
    /**
 	 * 임크피크제정보 등록, 수정, 삭제
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return int
 	 * @throws NexaServiceException
 	 */
 	@SuppressWarnings({ "rawtypes" })
 	
 	public int WagePeakCUD( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
 		
 		int iRow = 0;
 		
 		DataSetMap list = (DataSetMap) inDataset.get("input2");		
 		int listSize = (list == null) ? 0 : list.size();		
 		for (int x = 0; x < listSize; x++) {
 				
 			Map map = list.get(x);			
 			// 세션정보 설정
 			try {
 				ObjectUtil.setUserToMap(map);
 			}
 			catch( Exception e) {
 				throw new NexaServiceException(e); 
 			}	
 			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 			
 			switch(rowType) {
 				case DataSet.ROW_TYPE_INSERTED :
 					break;
 				case DataSet.ROW_TYPE_UPDATED :
 					iRow += baseDao.update("SAL020205DAO.mergeWagePeak", map);
 					break;
 				case DataSet.ROW_TYPE_DELETED :
 					break;			
 			}				
 		}		
 		return iRow;
 	}
 	
 	/**
 	 * 임크피크제정보기준 등록, 수정, 삭제
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return int
 	 * @throws NexaServiceException
 	 */
 	@SuppressWarnings({ "rawtypes" })
 	
 	public int wagepeakstdrCUD( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
 		
 		int iRow = 0;
 		
 		DataSetMap list = (DataSetMap) inDataset.get("input2");		
 		int listSize = (list == null) ? 0 : list.size();		
 		for (int x = 0; x < listSize; x++) {
 				
 			Map map = list.get(x);			
 			// 세션정보 설정
 			try {
 				ObjectUtil.setUserToMap(map);
 			}
 			catch( Exception e) {
 				throw new NexaServiceException(e); 
 			}	
 			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 			
 			switch(rowType) {
 				case DataSet.ROW_TYPE_INSERTED :
 					baseDao.insert("SAL020205DAO.wagepeakstdrC", map);
 					break;
 				case DataSet.ROW_TYPE_UPDATED :
 					iRow += baseDao.update("SAL020205DAO.wagepeakstdrU", map);
 					break;
 				case DataSet.ROW_TYPE_DELETED :
 					iRow += baseDao.delete("SAL020205DAO.wagepeakstdrD", map);
 					break;			
 			}				
 		}		
 		return iRow;
 	}
		
}
