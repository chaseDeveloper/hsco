package hsco.com.sym.aum.SYM020600;

import java.util.HashMap;
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
 * @Class Name   	: SYM020600ServiceImpl.java
 * @Description  	: 권한에 대한 버튼 차단
 * @author       	: 정윤원
 * @since        	: 2015. 9. 1.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 1.					정윤원				최초생성
 * </pre>
 */

@Service("SYM020600Service")
public class SYM020600ServiceImpl extends BaseService implements SYM020600Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM020600ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    



	/**
	 * 권한에 대한 화면 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void getListPage(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	if(log.isDebugEnabled())
    	    log.debug(" getListPage ----------------------------------------------------!");
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0); 
		
		 List<Map> records = (List)baseDao.list("SYM020600DAO.getListPage", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
     * 화면에 대한 버튼 조회
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public void getListButton(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
		DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		Map inMap = null;
		
		if (inDsMap != null)
			inMap = inDsMap.get(0); 
		
		 List<Map> records = (List)baseDao.list("SYM020600DAO.getListButton", inMap);
		
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}

    /**
	 * 버튼 차단 정보를 관리
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int execCUD(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
			int iRow = 0;
			
			DataSetMap list = (DataSetMap) inDataset.get("input1");
			
			int listSize = (list==null) ? 0 : list.size();
			
			Map logmap = new HashMap();
			Map tempMap;
			logmap.put("EVENT_FNCT", "권한별버튼관리");
			logmap.put("CHANGE_AUTH_KND_CODE", "BA");
			for (int x = 0; x < listSize; x++) {
					
				Map map = list.get(x);						
					
				int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();				
				
				switch(rowType) {
				
					case DataSet.ROW_TYPE_INSERTED :
						baseDao.insert("SYM020600DAO.SYM020600C", map);
						break;
					case DataSet.ROW_TYPE_UPDATED :
						iRow += baseDao.update("SYM020600DAO.SYM020600U", map);
						break;
					case DataSet.ROW_TYPE_DELETED :
						iRow += baseDao.delete("SYM020600DAO.SYM020600D", map);
						break;
					default :
						break;
				}
				
				//해당 page_id, button_id 에대해서 사용자별 적용
				switch(rowType) {
					case DataSet.ROW_TYPE_INSERTED :
					case DataSet.ROW_TYPE_UPDATED :
					case DataSet.ROW_TYPE_DELETED :
						List<Map> userChangeList = (List)baseDao.list("SYM020600DAO.getListUserChangeButton", map);
	
						for (int i = 0 ; i < userChangeList.size() ; i++) {
							tempMap = userChangeList.get(i);
							if (tempMap.get("FLAG").equals("I")) {
								baseDao.update("SYM020600DAO.saveUserButton", tempMap);
							} else if (tempMap.get("FLAG").equals("U")){
								baseDao.update("SYM020600DAO.updateUserButton", tempMap);
							}
							
							//로그 남김
							if (tempMap.get("FLAG").equals("I") || tempMap.get("FLAG").equals("U")) {
								logmap.put("CHANG_AUTH_TRGET_ID", tempMap.get("BUTTON_ID"));
								logmap.put("AFTCH_AUTH_STTUS_CODE",  (String)tempMap.get("INTRCP_AT"));
								logmap.put("BFCHG_AUTH_STTUS_CODE", (String)tempMap.get("ORG_INTRCP_AT"));
								logmap.put("USER_ID", (String)tempMap.get("USER_ID"));
								baseDao.insert("SYM020600DAO.saveLog", logmap);
							}
						}
						break;
					default :
						break;
				}
				
		} // end of for (int x = 0 ...
			
		return iRow;
			
	}

}



