package hsco.com.sym.aum.SYM020300;

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
 * @Class Name   	: SYM020300ServiceImpl.java
 * @Description  	: 권한 복사 및 교체
 * @author       	: 정윤원
 * @since        	: 2015. 8. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 28.					정윤원				최초생성
 * </pre>
 */
@Service("SYM020300Service")
public class SYM020300ServiceImpl extends BaseService implements SYM020300Service {
	
	protected Logger log = LoggerFactory.getLogger(SYM020300ServiceImpl.class);
	
	/** Properties Service */
    @Resource(name = "propertiesService")
    protected EgovPropertyServiceImpl propertiesService;


    /**
     * 권한그룹 대상자 리스트(사용안함)
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListUser(DataSetMap tranInfo,
			Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset)
			throws NexaServiceException {
    	log.debug(" getListUser ----------------------------------------------------!");
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SYM020300DAO.getListUser", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		

		DataSetMap inDsMap2 = (DataSetMap)inDataset.get("input2");
		
		Map inMap2 = inDsMap2.get(0);
		
		List <Map> records2 = (List<Map>)baseDao.list("SYM020300DAO.getListUser", inMap2);
		
		DataSetMap outDsMap2 = new DataSetMap();
		outDsMap2.setRowMaps(records2);
		
		outDataset.put("output2", outDsMap2);
		
	}
	
    /**
	 * 권한그룹 목록(사용안함)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListGrp(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);
		
		List <Map> records = (List<Map>)baseDao.list("SYM020300DAO.getListGrp", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	}
    
    /**
	 * 권한그룹 목록(사용자)
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListGrpByUser(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SYM020300DAO.getListGrpByUser2", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
	} 
    
    /**
	 * 사용자 권한에 따른 메뉴, 서비스, 버튼 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListAllByUser(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	//long implStartTime, implEndTime;
    	//implStartTime = CommonUtil.getCurrentTime();
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SYM020300DAO.getAuthGrpMenu", inMap);
		List <Map> records2 = (List<Map>)baseDao.list("SYM020300DAO.getAuthGrpOprtin", inMap);
		List <Map> records3 = (List<Map>)baseDao.list("SYM020300DAO.getAuthGrpButton", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		DataSetMap outDsMap2 = new DataSetMap();
		DataSetMap outDsMap3 = new DataSetMap();
		
		outDsMap.setRowMaps(records);
		outDsMap2.setRowMaps(records2);
		outDsMap3.setRowMaps(records3);
		
		outDataset.put("output1", outDsMap);
		outDataset.put("output2", outDsMap2);
		outDataset.put("output3", outDsMap3);
		
		
    	//implEndTime = CommonUtil.getCurrentTime();
		//System.out.println("메뉴, 서비스, 버튼 목록 조회(impl) " + CommonUtil.getElapsedTime(implStartTime, implEndTime));
		
	} 
    
    
    /**
	 * 사용자 권한에 따른 메뉴 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListMenuByUser(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SYM020300DAO.getAuthGrpMenu", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}
    

    /**
	 * 사용자 권한에 따른 서비스 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListSvcByUser(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SYM020300DAO.getAuthGrpOprtin", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
	}

    /**
	 * 사용자 권한에 따른 버튼 목록 조회
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return void
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public void getListBtnByUser(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
		
    	//long implStartTime,implEndTime;
		//implStartTime = CommonUtil.getCurrentTime();
		
    	DataSetMap inDsMap = (DataSetMap)inDataset.get("input1");
		
		Map inMap = inDsMap.get(0);
		List <Map> records = (List<Map>)baseDao.list("SYM020300DAO.getAuthGrpButton", inMap);
		
		DataSetMap outDsMap = new DataSetMap();
		
		outDsMap.setRowMaps(records);
		
		outDataset.put("output1", outDsMap);
		
		
		//implEndTime = CommonUtil.getCurrentTime();
		//System.out.println("버튼 목록 조회(impl) " + CommonUtil.getElapsedTime(implStartTime, implEndTime));
	}
    
   
   
    
    /**
     * 권한복사
     * @param tranInfo
     * @param inVar
     * @param inDataset
     * @param outVar
     * @param outDataset
     * @return
     * @throws NexaServiceException
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	
    public void copyAuth(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
    	
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		

		int listSize = (list == null) ? 0 : 1;
		if (list.size() == 0) {
			listSize = 0;
		}
		// 권한 복사 일때.	
		for (int x = 0 ; x < listSize ; x++) {
				
			Map map = (Map)list.get(x);
			
		    if(map.get("CRIT_USER_ID") == null){
		    	throw new NexaServiceException("comm.지정.요청.를", "기준사용자");
		    } else if("".equals((String)map.get("CRIT_USER_ID"))){
		    	throw new NexaServiceException("comm.지정.요청.를", "기준사용자");
		    } else if(map.get("GIVE_USER_ID") == null){
		    	throw new NexaServiceException("comm.지정.요청.를", "권한부여대상자");
		    } else if("".equals((String)map.get("GIVE_USER_ID"))){
		    	throw new NexaServiceException("comm.지정.요청.를", "권한부여대상자");
		    } else {
		    	
		    	List<Map> recordsGrp = (List<Map>)baseDao.list("SYM020300DAO.selectUserAuthGrpCopy", map);
		    	insertUtils("SYM020300DAO.copyAuthGrpUser",recordsGrp);
		    	insertUtils("SYM020300DAO.insertUserAuthChgHstLog",recordsGrp);
		        
		    	
			    List<Map> recordsMenu = (List<Map>)baseDao.list("SYM020300DAO.selectUserAuthMenuCopy", map);
			    insertUtils("SYM020300DAO.copyAuthUserMenu",recordsMenu);
		    	insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsMenu);
		    	
		    	List<Map> recordsButton = (List<Map>)baseDao.list("SYM020300DAO.selectUserAuthButtonCopy", map);
		    	insertUtils("SYM020300DAO.copyAuthUserButton",recordsButton);
		    	insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsButton);

		    	List<Map> recordsSvc = (List<Map>)baseDao.list("SYM020300DAO.selectUserAuthSvcCopy", map);
		    	insertUtils("SYM020300DAO.copyAuthUserSvc", recordsSvc);
		    	insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsSvc);
		    	
			    
		    }
		
		}	

	}
    
    /**
     * insert util 메소드
     * */
    @SuppressWarnings("rawtypes")
	private int insertUtils(String queryId, List<Map> records) {
		int iRow = 0;
		int size = 0;
		if(records == null){
			size = 0;
		} else {
			size = records.size();
			for (int x = 0 ; x < size ; x++) {
				Map map = (Map)records.get(x);
				
				baseDao.insert(queryId, map);
				iRow += 1;
			}
		}
		
		return iRow;
	}
    
    /**
	 * 권한그룹 교체
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
    @SuppressWarnings({ "unchecked", "rawtypes" })
	
	public void exchangeAuth(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
    	
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");		

		int listSize = (list == null) ? 0 : 1;
		if (list.size() == 0) {
			listSize = 0;
		}
		
		// 권한 교체 일때.	
		for (int x = 0 ; x < listSize ; x++) {
			Map map = (Map)list.get(x);
			Map mapX = new HashMap();
			Map mapY = new HashMap();
			
			
			
			if(map.get("CRIT_USER_ID") == null){
		    	throw new NexaServiceException("comm.지정.요청.를", "기준사용자");
		    } else if("".equals((String)map.get("CRIT_USER_ID"))){
		    	throw new NexaServiceException("comm.지정.요청.를", "기준사용자");
		    } else if(map.get("GIVE_USER_ID") == null){
		    	throw new NexaServiceException("comm.지정.요청.를", "권한부여대상자");
		    } else if("".equals((String)map.get("GIVE_USER_ID"))){
		    	throw new NexaServiceException("comm.지정.요청.를", "권한부여대상자");
		    } else {
		    	String critUserId		= (String)map.get("CRIT_USER_ID");
				String giveUserId 		= (String)map.get("GIVE_USER_ID");
				
				mapX.put("X_USER_ID", critUserId);
				mapX.put("Y_USER_ID", giveUserId);
				mapX.put("S_USER_ID", (String)map.get("S_USER_ID"));
				// 조건 스와핑
				mapY.put("X_USER_ID", giveUserId);
				mapY.put("Y_USER_ID", critUserId);
				mapY.put("S_USER_ID", (String)map.get("S_USER_ID"));
                // 권한그룹 스와핑 조회
				List <Map> recordsUserGrpAuthX = (List<Map>)baseDao.list("SYM020300DAO.selectListUserGrpAuth", mapX);
				List <Map> recordsUserGrpAuthY = (List<Map>)baseDao.list("SYM020300DAO.selectListUserGrpAuth", mapY);
				// 메뉴권한 스와핑 조회
				List <Map> recordsUserMenuAuthX = (List<Map>)baseDao.list("SYM020300DAO.selectListUserMenuAuth", mapX);
				List <Map> recordsUserMenuAuthY = (List<Map>)baseDao.list("SYM020300DAO.selectListUserMenuAuth", mapY);
				// 버튼권한 스와핑 조회
				List <Map> recordsUserButtonAuthX = (List<Map>)baseDao.list("SYM020300DAO.selectListUserButtonAuth", mapX);
				List <Map> recordsUserButtonAuthY = (List<Map>)baseDao.list("SYM020300DAO.selectListUserButtonAuth", mapY);
				
				// 서비스권한 스와핑 조회
				List <Map> recordsUserSvcAuthX = (List<Map>)baseDao.list("SYM020300DAO.selectListUserSvcAuth", mapX);
				List <Map> recordsUserSvcAuthY = (List<Map>)baseDao.list("SYM020300DAO.selectListUserSvcAuth", mapY);
				
				
				//2. 기준사용자, 권한부여대상자 권한 삭제
				// 권한교환을 위한 사용자서비스 권한 삭제
				baseDao.delete("SYM020300DAO.deleteUserSvcAuthExchg", mapX);
				// 권한교환을 위한 사용자 버튼 권한 삭제
				baseDao.delete("SYM020300DAO.deleteUserButtonAuthExchg", mapX);
				// 권한교환을 위한 사용자메뉴권한 삭제 
				baseDao.delete("SYM020300DAO.deleteUserMenuAuthExchg", mapX);
				// 권한교환을 위한 사용자그룹권한 삭제 
				baseDao.delete("SYM020300DAO.deleteUserGrpAuthExchg", mapX);
				
				// 변경권한 insert
				
				// 그룹사용자 추가
				insertUtils("SYM020300DAO.insertUserGrpAuthExchg", recordsUserGrpAuthX);
				insertUtils("SYM020300DAO.insertUserGrpAuthExchg", recordsUserGrpAuthY);
				// 로그 저장
				insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsUserGrpAuthX);
				insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsUserGrpAuthY);
				
				
				// 사용자 메뉴권한 추가
				insertUtils("SYM020300DAO.insertUserMenuAuthExchg", recordsUserMenuAuthX);
				insertUtils("SYM020300DAO.insertUserMenuAuthExchg", recordsUserMenuAuthY);
				// 로그 저장
				insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsUserMenuAuthX);
				insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsUserMenuAuthY);
				
				// 사용자버튼권한 추가
				insertUtils("SYM020300DAO.insertUserButtonAuthExchg", recordsUserButtonAuthX);
				insertUtils("SYM020300DAO.insertUserButtonAuthExchg", recordsUserButtonAuthY);
				// 로그 저장
				insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsUserButtonAuthX);
				insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsUserButtonAuthY);
				// 사용자오퍼레이션권한 추가
				insertUtils("SYM020300DAO.insertUserSvcAuthExchg", recordsUserSvcAuthX);
				insertUtils("SYM020300DAO.insertUserSvcAuthExchg", recordsUserSvcAuthY);
				
				// 사용자오퍼레이션권한 추가
				insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsUserSvcAuthX);
				insertUtils("SYM020300DAO.insertUserAuthChgHstLog", recordsUserSvcAuthY);

				
		    }
			
			
		}
	}
    
	
   
	
	
    /**
	 * 사용자 메뉴 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
    
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public int saveUserMenu(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map logmap = new HashMap();
		
		logmap.put("EVENT_FNCT", "개별저장");
		logmap.put("CHANGE_AUTH_KND_CODE", "MA");
		//메뉴
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :					
					baseDao.update("SYM020300DAO.mergeIndiUserMenu", map);
					String strIntrcpAt =(String) map.get("INTRCP_AT");
					String strInvertIntrcpAt = ("1".equals(strIntrcpAt)) ? "0" : "1";
					logmap.put("CHANG_AUTH_TRGET_ID", map.get("MENU_ID"));
					logmap.put("AFTCH_AUTH_STTUS_CODE", strIntrcpAt);
					logmap.put("BFCHG_AUTH_STTUS_CODE", strInvertIntrcpAt);
					logmap.put("USER_ID", (String)map.get("USER_ID"));
					baseDao.insert("SYM020300DAO.saveLog", logmap);
					break;
				default:
			}
		}	// end of for (int x = 0; ...
		
		return iRow;
		
	}    
    

    /**
	 * 사용자 서비스 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
    
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public int saveUserSvc(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		Map logmap = new HashMap();
		
		logmap.put("EVENT_FNCT", "개별저장");
		logmap.put("CHANGE_AUTH_KND_CODE", "SA");
		
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :					
					baseDao.update("SYM020300DAO.mergeUserOprtin", map);
					String strIntrcpAt =(String) map.get("INTRCP_AT");
					String strInvertIntrcpAt = ("1".equals(strIntrcpAt)) ? "0" : "1";
					logmap.put("CHANG_AUTH_TRGET_ID", map.get("OPRTIN_NM"));
					logmap.put("AFTCH_AUTH_STTUS_CODE", strIntrcpAt);
					logmap.put("BFCHG_AUTH_STTUS_CODE", strInvertIntrcpAt);
					logmap.put("USER_ID", (String)map.get("USER_ID"));
					baseDao.insert("SYM020300DAO.saveLog", logmap);
					break;
				default:
			}
		}	// end of for (int x = 0; ...
		
		return iRow;
		
	}
    
    /**
	 * 사용자 버튼 저장
	 * @param (DataSetMap, inVar, inDataset, outVar, outDataset) 
	 * @return int
	 * @throws NexaServiceException
	 */
    
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public int saveUserBtn(DataSetMap tranInfo, Map<String, Object> inVar,
			Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset) throws NexaServiceException {
				
		int iRow = 0;
		
		DataSetMap list = (DataSetMap) inDataset.get("input1");
		
		Map logmap = new HashMap();
		
		logmap.put("EVENT_FNCT", "개별저장");
		logmap.put("CHANGE_AUTH_KND_CODE", "BA");
		for (int x = 0; x < list.size(); x++) {
				
			Map map = list.get(x);
			
			int rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue(); 
			
			switch(rowType) {
				case DataSet.ROW_TYPE_UPDATED :					
					baseDao.update("SYM020300DAO.mergeUserBtn", map);
					String strIntrcpAt =(String) map.get("INTRCP_AT");
					String strInvertIntrcpAt = ("1".equals(strIntrcpAt)) ? "0" : "1";
					logmap.put("CHANG_AUTH_TRGET_ID", map.get("BUTTON_ID"));
					logmap.put("AFTCH_AUTH_STTUS_CODE", strIntrcpAt);
					logmap.put("BFCHG_AUTH_STTUS_CODE", strInvertIntrcpAt);
					logmap.put("USER_ID", (String)map.get("USER_ID"));
					baseDao.insert("SYM020300DAO.saveLog", logmap);
					break;
				default:
			}
		}	// end of for (int x = 0; ...
		
		return iRow;
		
	} 
    
  
}



