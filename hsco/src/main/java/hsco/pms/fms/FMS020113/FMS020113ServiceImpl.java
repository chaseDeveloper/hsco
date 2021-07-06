package hsco.pms.fms.FMS020113;

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
 * @Class Name   	: FMS020113Controller.java
 * @Description  	: 유지보수관리대장
 * @author       	: 정 민
 * @since        	: 2017. 11. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 11. 24.					정 민			최초생성
 * </pre>  
 */

@Service("FMS020113Service")
public class FMS020113ServiceImpl extends BaseService{
	
	protected Logger log = LoggerFactory.getLogger(FMS020113ServiceImpl.class);
	
	
    /**
	 * 유지보수관리대장 목록 조회 
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMntmgtRegstrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("FMS020113DAO.selectMntmgtRegstrList", inMap));
		outDataset.put("output1", outDsMap);	
	}
    
    /**
	 * 유지보수작업자 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void selectMntnceOpertorManageList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	    	
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps((List<Map>)baseDao.list("FMS020113DAO.selectMntnceOpertorManageList", inMap));
		outDataset.put("output1", outDsMap);	
	}
    
    
    /**
	 * 유지보수관리대장, 유지보수작업자 목록 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Transactional
	public void saveMntmgtRegstrList( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		DataSetMap list2 = (DataSetMap) inDataset.get("input2");

		int listSize = (list == null) ? 0 : list.size();	
		int key = 0;
		
		for (int x = 0; x < listSize; x++) {				
			Map map = list.get(x);			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					key =  (int) baseDao.insert("FMS020113DAO.mntmgtRegstrC", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("FMS020113DAO.mntmgtRegstrU", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("FMS020113DAO.mntnceOpertorManageAllD", map);
					baseDao.delete("FMS020113DAO.mntmgtRegstrD", map);
					break;	
			}				
		}	
		

		int listSize2 = (list2 == null) ? 0 : list2.size();
			
		
		for (int x = 0; x < listSize2; x++) {				
			Map map = list2.get(x);	
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();	
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					if(map.get("MNTMGT_SN") == null || "".equals(map.get("MNTMGT_SN"))) {
						map.put("MNTMGT_SN", key);
					}
					baseDao.insert("FMS020113DAO.mntnceOpertorManageC", map);	
					break;
				case DataSet.ROW_TYPE_UPDATED :
					baseDao.update("FMS020113DAO.mntnceOpertorManageU", map);		
					break;
				case DataSet.ROW_TYPE_DELETED :
					baseDao.delete("FMS020113DAO.mntnceOpertorManageD", map);
					break;	
			}				
		}
	}
	
}