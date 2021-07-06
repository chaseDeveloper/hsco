package hsco.mis.sal.SAL020115;

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
 * @Class Name   	: SAL020115ServiceImpl.java
 * @Description  	: 복리후생수당관리
 * @author       	: 이상명
 * @since        	: 2015. 7. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 20.					이상명				최초생성
 * </pre>  
 */

@Service("SAL020115Service")
public class SAL020115ServiceImpl extends BaseService implements SAL020115Service {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
    /**
	 * 복리후생수당정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectCmpnintwelfrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL020115DAO.selectCmpnintwelfrList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL020115DAO.selectCmpnintwelfrList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);	
   		
   	}		
	
    /**
	 * 복리후생수당코드정보 목록을 조회한다.
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectAllwncddccodeList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input2");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;

		if (inMap != null) {
			records = (List<Map>)baseDao.list("SAL020115DAO.selectAllwncddccodeList", inMap);
		} else {
			records = (List<Map>)baseDao.list("SAL020115DAO.selectAllwncddccodeList", inVar);
		}
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output2", outDsMap);	
   		
   	}		
		
	
    /**
 	 * 복리후생수당정보 등록, 수정, 삭제
 	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
 	 * @return int
 	 * @throws NexaServiceException
 	 */
 	@SuppressWarnings({ "rawtypes" })
 	
 	public int CmpnintwelfrCUD( DataSetMap tranInfo, Map<String, Object> inVar,
 			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
 			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
 		
 		int iRow = 0;
 		
 		DataSetMap list = (DataSetMap) inDataset.get("input3");		
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
 					baseDao.insert("SAL020115DAO.CmpnintwelfrC", map);
 					break;
 				case DataSet.ROW_TYPE_UPDATED :
 					iRow += baseDao.update("SAL020115DAO.CmpnintwelfrU", map);
 					break;
 				case DataSet.ROW_TYPE_DELETED :
 					iRow += baseDao.delete("SAL020115DAO.CmpnintwelfrD", map);
 					break;			
 			}				
 		}		
 		return iRow;
 	}	
	
}
