package hsco.mis.hrm.HRM070205;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070205ServiceImpl.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 10. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 13	이혜선			최초생성
 * </pre>  
 */

@Service("HRM070205Service")
public class HRM070205ServiceImpl extends BaseService implements HRM070205Service {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

    /** 외국시찰연수관리 목록조회 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void tbhrmFrntnInspnSdytrnList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		List <Map> records;
		

		records = (List<Map>)baseDao.list("HRM070205DAO.tbhrmFrntnInspnSdytrnList", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
	
	
	@SuppressWarnings({ "rawtypes" })
	public int tbhrmFrntnInspnSdytrnCUD( DataSetMap tranInfo, Map<String, Object> inVar,
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
				baseDao.insert("HRM070205DAO.tbhrmFrntnInspnSdytrnC", map);
				break;
			case DataSet.ROW_TYPE_UPDATED :
				iRow += baseDao.update("HRM070205DAO.tbhrmFrntnInspnSdytrnU", map);
				break;
			case DataSet.ROW_TYPE_DELETED :
				iRow += baseDao.delete("HRM070205DAO.tbhrmFrntnInspnSdytrnD", map);
				break;	
			}	
		}
		return iRow;
	}
	
	
	/**
	 * 전자결재번호 저장
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public void approveCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
	
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map map = list.get(0);
		
		// 전자결재번호 조회
		String sanctnNO= (String) baseDao.select("HRM070205DAO.selectSanctnNO", map);
		map.put("SANCTN_NO", sanctnNO);
		
		// 전자결재번호 업데이트
		baseDao.update("HRM070205DAO.approveU", map);
		
        DataSetMap outDsMap = new DataSetMap();
        outDsMap.add(map);
        outDataset.put("output1", outDsMap);
	}
}