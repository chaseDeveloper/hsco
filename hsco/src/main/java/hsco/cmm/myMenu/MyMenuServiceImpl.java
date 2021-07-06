package hsco.cmm.myMenu;

import java.math.BigDecimal;
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
 * @Class Name   	: MyMenuServiceImpl.java
 * @Description  	: 바로가기메뉴 서비스 클래스
 * @author       	: 
 * @since        	: 2015. 10. 06.
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

@Service("MyMenuService")
public class MyMenuServiceImpl extends BaseService implements MyMenuService {
	protected Logger log = LoggerFactory.getLogger(MyMenuServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;
    
    /**
   	 * 바로가기메뉴 목록을 조회한다
   	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
   	 * @return void
   	 * @throws NexaServiceException
   	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
   	public void myMenuList( DataSetMap tranInfo, Map<String, Object> inVar,
   			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
   			Map<String, DataSetMap> outDataset) throws NexaServiceException {		
    	if(log.isInfoEnabled())
			log.info("myMenuList started!");
   		Map inMap = new HashMap<String, String>();
   		
   		inMap.put("V_USER_ID", (String)inVar.get("V_USER_ID"));
   		
   		List <Map> records;
   		records = (List<Map>)baseDao.list("MyMenuDAO.selectMyMenuList", inMap);		

   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		outDataset.put("gds_myMenu", outDsMap);
   		
   	}
    
    /**
	 * 바로가기메뉴 등록, 수정, 삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes" })
	
	public int myMenuCUD( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("MyMenuCUD");
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {
			if(log.isInfoEnabled()) log.info("MyMenuCUD-2");	
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			if(log.isInfoEnabled()) log.info("rowType === " + rowType );
			switch(rowType) {
				case DataSet.ROW_TYPE_INSERTED :
					//if(log.isInfoEnabled()) log.info("MyMenuCUD-3");	
					baseDao.insert("MyMenuDAO.insertMyMenu", map);
					break;
				case DataSet.ROW_TYPE_UPDATED :
					iRow += baseDao.update("MyMenuDAO.updateMyMenu", map);
					break;
				case DataSet.ROW_TYPE_DELETED :
					//if(log.isInfoEnabled()) log.info("MyMenuCUD-4");	
					iRow += baseDao.delete("MyMenuDAO.deleteMyMenu", map);
					break;
			    default:
			    	break;
			}	
			
		}
			
		
		return iRow;
		
	}
	
	/**
	 * 바로가기메뉴 등록
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int insertMyMenu( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		if(log.isInfoEnabled()) log.info("insertMyMenu");
		int iRow = 0;
		
		Map<String, Object> inMap = new HashMap<String, Object>();
   		
   		inMap.put("V_USER_ID", (String)inVar.get("V_USER_ID"));
   		String mid = (String)inVar.get("MENU_ID");
   		BigDecimal menuId = null;
   		if(mid != null && !"".equals(mid))
   			menuId = new BigDecimal(mid);
   	   		
   		inMap.put("MENU_ID", menuId);
   		
        //if(log.isInfoEnabled()) log.info("sort===========================" + (String)inVar.get("SORT"));
   		if(inVar.get("SORT") == null){
   			//if(log.isInfoEnabled()) log.info("null===========================");
   			inMap.put("SORT", 1);
   		} else if ("".equals((String)inVar.get("SORT")) || "0".equals((String)inVar.get("SORT"))){
   			//if(log.isInfoEnabled()) log.info("===========================1111");
   			inMap.put("SORT", 1);
   		} else {
   			//if(log.isInfoEnabled()) log.info("===========================1111");
   			BigDecimal sortOrdr = new BigDecimal((String)inVar.get("SORT"));
   			inMap.put("SORT", sortOrdr);
   		}
   			
   		
   		if(menuId != null)
   		    baseDao.insert("MyMenuDAO.insertMyMenu", inMap);
			
   		
   		List <Map> records;
   		records = (List<Map>)baseDao.list("MyMenuDAO.selectMyMenuList", inMap);		

   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		outDataset.put("gds_myMenu", outDsMap);
   		
		return iRow;
		
	}
	
	/**
	 * 바로가기메뉴  삭제
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	
	public int deleteMyMenu( DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		int iRow = 0;
		
		String userId = "";
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		int listSize = (list == null) ? 0 : list.size();
		for (int x = 0; x < listSize; x++) {
			Map map = list.get(x);
			if(x==0)
			    userId = (String)map.get("USER_ID");
			
			iRow += baseDao.delete("MyMenuDAO.deleteMyMenu", map);
		}
		
		Map<String, Object> inMap = new HashMap<String, Object>();
		
		inMap.put("V_USER_ID", userId);
		
		List <Map> records;
   		records = (List<Map>)baseDao.list("MyMenuDAO.selectMyMenuList", inMap);		

   		DataSetMap outDsMap = new DataSetMap();
   		outDsMap.setRowMaps(records);
   		outDataset.put("gds_myMenu", outDsMap);
		
		return iRow;
		
	}
	
	
    
	
}