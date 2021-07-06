package hsco.cmm.login.service.impl;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import egovframework.rte.fdl.property.impl.EgovPropertyServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.login.service.LoginService;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.security.cipher.sha.Sha256Cipher;
import hsco.cmm.service.BaseService;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: LoginServiceImpl.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 6. 4.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 4.					정윤원				최초생성
 * </pre>  
 */
 
@Service("loginService")
public class LoginServiceImpl extends BaseService implements LoginService {
	
	/** Properties Service */
	@Resource(name = "propertiesService")
	protected EgovPropertyServiceImpl propertiesService;

	/** Log 생성*/
	@SuppressWarnings("unused")
	private final Logger log = LoggerFactory.getLogger(LoginServiceImpl.class);

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Map<String, DataSetMap> authorChk(HttpServletRequest req, Map userMap,
											Map<String, DataSetMap> outDataset ) throws NexaServiceException {
		
		// ID는 먼저 설정
		req.getSession().setAttribute("S_USER_ID", 	userMap.get("USER_ID"));
		Map loginMap = (Map)baseDao.select("loginDAO.loginChk",userMap);

		HttpSession session = req.getSession();
		session.invalidate();
		
		// Create a new session for the user.
		session = req.getSession(true);
		
		if(loginMap == null) throw new NexaServiceException("info.로그인.실패");
		// ip 담아 보내기
		loginMap.put("REMOTE_ADDR", getRemoteAddr());
		// 세션 설정
		req.getSession().setAttribute("S_USER_ID", 	loginMap.get("USER_ID"));
		req.getSession().setAttribute("S_DEPT_CODE", 	loginMap.get("DEPT_CODE"));
		req.getSession().setAttribute("S_USER_NM", 	loginMap.get("USER_NM"));
		
		List grantList = baseDao.list("loginDao.authGrp", loginMap);
		if( grantList == null || grantList.size() == 0) {
			throw new NexaServiceException("info.권한.허가목록.없음");
		}
		
		//추가 로직
		//String[] grantArray = (String[])grantList.toArray();
		loginMap.put("AUTH_GRP", grantList);
		List menuList = baseDao.list("loginDAO.loginMenu", loginMap);
		loginMap.remove("AUTH_GRP");
		//추가 로직 끝

		//기존 로직
		//List menuList = baseDao.list("loginDAO.loginMenu", grantList);
		List listMessage = baseDao.list("loginDAO.loginMessage");
		DataSetMap outUserDsMap = new DataSetMap();    	
		List<Map> listUser = new ArrayList<Map>();
		listUser.add(loginMap);
		outUserDsMap.setRowMaps(listUser);
		outDataset.put("userInfo", outUserDsMap);
		
		//[DataSet] Auth List
		DataSetMap outAuthDsMap = new DataSetMap();
		outAuthDsMap.setRowMaps(grantList);
		outDataset.put("gds_auth", outAuthDsMap);
				
		//[DataSet] Login User Menu
		DataSetMap outMenuDsMap = new DataSetMap();
		outMenuDsMap.setRowMaps(menuList);
		outDataset.put("gds_menu", outMenuDsMap);
		
		//[DataSet] Message
		DataSetMap outMessageDsMap = new DataSetMap();
		outMessageDsMap.setRowMaps(listMessage);
		outDataset.put("gds_message", outMessageDsMap);
		
		//[Dataset] MyMenu
		Map inMyMenuMap = new HashMap<String, String>();
		inMyMenuMap.put("V_USER_ID", (String)userMap.get("USER_ID"));
		
		List <Map> MyMenuRecords = new ArrayList<Map>();
		MyMenuRecords = (List<Map>)baseDao.list("MyMenuDAO.selectMyMenuList", inMyMenuMap);
		
		DataSetMap outMyMenuDsMap = new DataSetMap();
		outMyMenuDsMap.setRowMaps(MyMenuRecords);
		outDataset.put("gds_myMenu", outMyMenuDsMap);

		// [Dataset] MyMenu
		Map inMenuTree = new HashMap<String, String>();
		if(userMap.get("MENU_ID") == null){
			inMenuTree.put("MENU_ID", -1);	
		} else {
			inMenuTree.put("MENU_ID", (String)userMap.get("MENU_ID"));
		}
		//String menuId = (String)userMap.get("MENU_ID");
		List <Map> menuTreeRecords;     
		menuTreeRecords = (List<Map>)baseDao.list("menuDAO.menuTreeList", inMenuTree);
		
		DataSetMap outMenuTreeDsMap = new DataSetMap();
		outMenuTreeDsMap.setRowMaps(menuTreeRecords);
		outDataset.put("gds_menutree", outMenuTreeDsMap);
		
		return outDataset;
	}

	@SuppressWarnings("rawtypes")
	public void loginCheck(ModelAndView mav, Map paramMap,
			HttpServletRequest req, Map<String, DataSetMap> outDataset)
			throws Exception {
		authorChk(req, paramMap, outDataset );
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int loginUser(Map paramMap) throws Exception {
		int checkCnt = 0;
		String reqUserId = (String)paramMap.get("USER_ID");
		
		// PWD 암호화
		String pwd = (String)paramMap.get("PWD");
		if (!StringUtil.isNull(pwd)) {
			String encPwd = pwd;
			/*
			try {
				encPwd = Sha256Cipher.encrypt(pwd, null);
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
			*/
			paramMap.put("PWD", encPwd);
		}
		
		Map checkedMap = (Map)baseDao.select("loginDAO.CheckUserlogin",paramMap);
		String checkedUserId = "";
		if(checkedMap != null){
			checkedUserId = (String)checkedMap.get("USER_ID");
		} else {
			checkedUserId = "";
		}
		
		if(checkedUserId == null){
			checkCnt = 0;
		} else {
			if("".equals(checkedUserId)){
				checkCnt = 0;
			} else {
				if(reqUserId.equals(checkedUserId)){ 
					checkCnt = 1;
				}
			}
		}
		return checkCnt;
	}
	
	public String selectUserId(String value) throws Exception {
		return (String) baseDao.select("loginDAO.selectUserId", value);
	}
	
	public void insertLoginToken(Map<String,Object> map) throws Exception {
		baseDao.insert("loginDAO.insertLoginToken", map);
	}
	
	@SuppressWarnings("unchecked")
	public Map<String,Object> getUserIdByToken(String token) throws Exception {
		return (Map<String, Object>) baseDao.select("loginDAO.getUserIdByToken", token);
	}
	
	public void deleteToken(String userId) throws Exception {
		baseDao.delete(userId);
	}
	
	public void addUser() throws Exception {
		try {
			
			List<Map> list = (List<Map>) baseDao.list("loginDAO.userAddList");
			
			for(Map map : list) {
				String encPwd = Sha256Cipher.encrypt((String)map.get("PWD"), null);
				map.put("PWD", encPwd);
				baseDao.insert("loginDAO.userAdd", map);
			}
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}
	
}
