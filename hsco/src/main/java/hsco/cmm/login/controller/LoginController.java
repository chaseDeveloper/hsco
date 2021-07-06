package hsco.cmm.login.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.tmax.sso.agent.SSOTokenManager;
import com.tmax.sso.agent.TmaxSSOSession;
import com.tmax.sso.token.TmaxSSOToken;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.login.service.impl.LoginServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.util.StringUtil;
/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: LoginController.java
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
@Controller
public class LoginController extends BaseContoller {
	
	/** Log Factory */
	@SuppressWarnings("unused")
	private final Logger log = LoggerFactory.getLogger(LoginController.class);

	/** Service Call */
	@Resource(name = "loginService")
	protected LoginServiceImpl loginService;
	private String checkRedirectUrl = "";
	
	/**
	 * 로그인 (임시)
	 * @param HttpServletRequest req
	 * @param HttpServletResponse res
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping(value = { "/login.do" })
	public ModelAndView login(HttpServletRequest req, HttpServletResponse res ) throws Exception {
		RedirectView rv = new RedirectView("/web/hsco/index.jsp");
		rv.setExposeModelAttributes(false);
		ModelAndView mav = new ModelAndView(rv);    	
		String user_id = (String)req.getParameter("V_USER_ID");
		
		if(user_id == null) throw new Exception("Invalid User");
		Map paramMap = new HashMap();
		paramMap.put("USER_ID", user_id);
		
		checkHttpLogin(req, res);
		Map <String, DataSetMap> resultDataSet = new HashMap<String, DataSetMap>();
		Map <String, DataSetMap> outDataset = loginService.authorChk(req, paramMap, resultDataSet);
		mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, 	outDataset);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private void checkHttpLogin(HttpServletRequest req, HttpServletResponse res) throws Exception {

		String user_id = (String)req.getAttribute("V_USER_ID");
		if(user_id == null) throw new Exception("Invalid User");
		
		Map paramMap = new HashMap();
		paramMap.put("USER_ID", user_id);
		String password = (String)req.getAttribute("V_USER_PWD");
		if("".equals(user_id) || "".equals(password) || password == null){
			res.sendRedirect("/default.html");
		} else {
			paramMap.put("PWD", password);
			int checkCount = loginService.loginUser(paramMap);
			if(checkCount != 1){
				res.sendRedirect("/default.html");
			}
		}
	}

	/**
	 * 로그인 
	 * @param HttpServletRequest req
	 * @param HttpServletResponse res
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping(value = { "/loginCheck.do" })
	public ModelAndView loginCheck(HttpServletRequest req, HttpServletResponse res,NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		Map <String, Object> inVar 			= xpDto.getInVariableMap();
		Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
		String menuId = (String)inVar.get("MENU_ID");
		boolean passed = true;
		passed = checkLogin(req, res, inVar, mav); // 부하테스트를 위해 주석처리
		
		if(passed){
			String sUserId = (String)inVar.get("V_USER_ID");
			
			if(("").equals(sUserId)){
				mav.addObject(NexacroConstant.ERROR_CODE, "-1");
				mav.addObject(NexacroConstant.ERROR_MSG, "ERROR");
				return mav;
			}
			
			Map paramMap = new HashMap();
			paramMap.put("USER_ID", sUserId);
			paramMap.put("MENU_ID", menuId);
			
			loginService.loginCheck(mav, paramMap, req, outDataset);
			
			mav.addObject(NexacroConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
			mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, 	outDataset);
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		} 
		return mav;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	private boolean checkLogin(HttpServletRequest req, HttpServletResponse res, Map <String, Object> inVar, ModelAndView mav) throws Exception {
		boolean passed = false;
		String user_id = (String)inVar.get("V_USER_ID");
		if(user_id == null) throw new Exception("Invalid User");
		
		Map paramMap = new HashMap();
		paramMap.put("USER_ID", user_id);
		
		String password = (String)req.getSession().getAttribute("V_USER_PWD");
		if(password == null) password = (String)req.getAttribute("V_USER_PWD");
		if("".equals(password)) password = (String)req.getAttribute("V_USER_PWD");
		if("".equals(user_id) || "".equals(password) || password == null){
			
			checkRedirectUrl = "/index.jsp";
			mav.addObject(NexacroConstant.ERROR_CODE, "-1");
			mav.addObject(NexacroConstant.ERROR_MSG, "err.서비스요청.무효");
			mav.addObject(NexacroConstant.PAGE_REDIRECT_URL, checkRedirectUrl);
			passed = false;
		} else {
			paramMap.put("PWD", password);
			int checkCount = loginService.loginUser(paramMap);
			if(checkCount != 1){
				req.getSession().setAttribute("V_USER_PWD", "");
				passed = false;
				checkRedirectUrl = "/index.jsp";
				mav.addObject(NexacroConstant.ERROR_CODE, "-1");
				mav.addObject(NexacroConstant.ERROR_MSG, "err.로그인.실패");
				mav.addObject(NexacroConstant.PAGE_REDIRECT_URL, checkRedirectUrl);
			} else { 
				passed = true; 
			} 
		}
		
		return passed;
	}
	
	/**
	 * 로그아웃 
	 * @param HttpServletRequest req
	 * @param HttpServletResponse res
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("deprecation")
	@RequestMapping(value = { "/logout.do" })
	public ModelAndView loout(HttpServletRequest req, HttpServletResponse res) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		HttpSession session = req.getSession();
		String checkRedirectUrl = "";
		
		TmaxSSOToken token = TmaxSSOSession.getTmaxSSOToken(req);
		if(token != null){
			
			checkRedirectUrl = super.getPortalLogoutUrl();
			String fullUrl = javax.servlet.http.HttpUtils.getRequestURL(req).toString();
			String serviceServletPath = req.getServletPath();
			int i = fullUrl.indexOf(serviceServletPath);
			String serviceURL = fullUrl.substring(0,i) + "/";
			
			/*********************** tmax eam 을 위한 코드 ************************/
			String returnURL = serviceURL + "index.jsp";
			try {
				
				if (SSOTokenManager.allLogout(req, res, returnURL)) {	
					session.invalidate();
					mav.addObject(NexacroConstant.ERROR_CODE, "0");
					mav.addObject(NexacroConstant.ERROR_MSG, "success.로그아웃.성공");
					mav.addObject(NexacroConstant.PAGE_REDIRECT_URL, checkRedirectUrl);
				} else {			
					session.invalidate();
					mav.addObject(NexacroConstant.ERROR_CODE, "-1");
					mav.addObject(NexacroConstant.ERROR_MSG, "err.SSO로그아웃.실패");
					mav.addObject(NexacroConstant.PAGE_REDIRECT_URL, checkRedirectUrl);
				}
			} catch (Exception e) {
				session.invalidate();
				e.printStackTrace();
				mav.addObject(NexacroConstant.ERROR_CODE, "-1");
				mav.addObject(NexacroConstant.ERROR_MSG, "err.예외상황.발생");
				mav.addObject(NexacroConstant.PAGE_REDIRECT_URL, checkRedirectUrl);
			}
		} else {
			session.invalidate();
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.로그아웃.성공");
		}
		return mav;
	}
	
	
	@RequestMapping(value = "/getLoginToken.do")
	public String token(HttpServletRequest req, Model model, @RequestParam(value="V_USER_ID", required=true) String dclzId) throws Exception {
		/* 그룹웨어 IP가 아닐 경우 token을 반환하지 않음
		String ip = req.getRemoteAddr();
		if(!ip.startsWith("10.50.10.")  &&
		   !ip.startsWith("172.16.0.2") &&
		   !ip.startsWith("172.16.0.3") &&
		   !ip.startsWith("172.16.0.4") &&
		   !ip.startsWith("172.16.0.5")
		  ) {
			model.addAttribute("token", "");
			return "token";
		}
		*/
		
		String userId = loginService.selectUserId(dclzId);
		
		if(StringUtil.isNull(userId)) {
			throw new Exception();
		}
		
		String token = UUID.randomUUID().toString();
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("USER_ID", userId);
		map.put("TOKEN", token);
		
		loginService.insertLoginToken(map);
		model.addAttribute("token", token);
        return "token";
	}
	
	@RequestMapping(value = { "/tokenLogin.do" })
	public ModelAndView test(HttpServletRequest req, @RequestParam(value="V_TOKEN", required=true) String token) throws Exception {
		
		HttpSession session = req.getSession();
		session.invalidate();
		
		Map<String,Object> map = loginService.getUserIdByToken(token);
		if(map != null) {
			String userId = (String)map.get("USER_ID");
			String pwd    = (String)map.get("PWD");
			if(userId != null && !"".equals(userId) && pwd != null && !"".equals(pwd)) {
				// Create a new session for the user.
				session = req.getSession(true);
				
				req.getSession().setAttribute("V_TOKEN_USER", userId);
				req.getSession().setAttribute("V_TOKEN_PWD" , pwd);
			}
		}
		
        RedirectView rv = new RedirectView("/web/hsco/index.jsp");
		rv.setExposeModelAttributes(false);
		ModelAndView mav = new ModelAndView(rv);
		return mav;
	}

	@RequestMapping(value = { "/tokenLoginLink.do" })
	public ModelAndView tokenLoginLink(HttpServletRequest req, @RequestParam(value="V_TOKEN", required=true) String token, @RequestParam(value="V_MENU_NO", required=true) String menuNo) throws Exception {
	   
		HttpSession session = req.getSession();
		session.invalidate();
		
		Map<String,Object> map = loginService.getUserIdByToken(token);
		if(map != null) {
			String userId = (String)map.get("USER_ID");
			String pwd    = (String)map.get("PWD");
			if(userId != null && !"".equals(userId) && pwd != null && !"".equals(pwd)) {
				// Create a new session for the user.
				session = req.getSession(true);
				
				req.getSession().setAttribute("V_TOKEN_USER", userId);
				req.getSession().setAttribute("V_TOKEN_PWD" , pwd);
				req.getSession().setAttribute("V_MENU_NO"   , menuNo);
			}
		}
		
		RedirectView rv = new RedirectView("/web/hsco/index.jsp");
		rv.setExposeModelAttributes(false);
		ModelAndView mav = new ModelAndView(rv);
		return mav;
	}
	
}
