package hsco.cmm.controller;

import hsco.cmm.Runner.LogFasade;
import hsco.cmm.author.service.impl.AuthorServiceImpl;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.service.BaseService;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ControlAspect.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 8. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 7.					정윤원				최초생성
 * </pre>
 */
public class ControlAspect extends BaseService  {
	
	@Resource(name="AuthorService")
	AuthorServiceImpl authoService;
	
	private static final String USER_MSG = "-1";
	private static final String SYSTEM_MSG = "-2";
	
	LogFasade logSvc = LogFasade.getInstance();
	
	LogFasade dbSync = LogFasade.getInstance();
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:Controller AOP
	 * @param joinPoint : *Controller
	 * @return : ModelAndView
	 * @throws Throwable
	 * 2015. 9. 24.
	 * </pre>
	 */
	
	@SuppressWarnings({ "unchecked", "rawtypes"})
	public Object controlRequest(ProceedingJoinPoint joinPoint) throws Throwable {
		
		// 1. 반환 객체 설정
		Object proceedObj = null;
		Map logMap = new HashMap();
		Map logMenuMap = new HashMap();

		
		long beforeTime = System.currentTimeMillis();
		
		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		HttpServletRequest request = attr.getRequest();
		boolean menuUseLogYn = false;

		
		
//		debugRequest(request);
		

		try {
			
			
			if( !createRequestAttr(request, joinPoint) ) {
				proceedObj = getMsgModel(USER_MSG, "err.서비스요청.무효");
				return proceedObj;
			}
			
			String requestClass =  (String)request.getAttribute("SVC_ID");
			String requestMethod =  (String)request.getAttribute("OPRTIN_NM");
			String menuId =  "";
			if(request.getAttribute("MENU_ID") != null)
				menuId = (String)request.getAttribute("MENU_ID");
			String formUrl = (String)request.getAttribute("FORM_URL");
			String menuAt = (String)request.getAttribute("POPUP_AT");
			
			

			/*
			* 권한체크 ( authoService )
			* requestURI 에 대해 차단 method 인지 검사 
			*/
			Map<String, Object> paramMap = new HashMap<String, Object>();
			paramMap.put("REQUEST_CLASS", requestClass);
			paramMap.put("REQUEST_METHOD", requestMethod);
			paramMap.put("MENU_ID", menuId);
			paramMap.put("FORM_URL", formUrl);
			
			// REQUEST URL이 /web/hsco/frame/WorkFrameDiv.xfdl.js 이면 메뉴 요청으로 식별하고 현황처리.
			
			String reqUri = (String)request.getRequestURI();
			
			if("/hsco/cmm/author/controller/AuthorController/getAuthBtnList.do".equals(reqUri)){


				if(!"".equals(menuId)){
					menuUseLogYn = true;
					logMenuMap.put("MENU_ID", menuId);

				}
					
				if("1".equals(menuAt)){
					menuUseLogYn = false;	
					logMenuMap.clear();
				}										
				
				
			}						
				
			// 차후 최초 로그인시 USER_ID 가 SSO 로 넘어오면 태우고, 그전까진 태우기 어려움.
			if( !ignoreGrant(request) ) {
				
				if ("".equals((String)request.getSession().getAttribute("S_USER_ID"))|| (String)request.getSession().getAttribute("S_USER_ID") == null){
					proceedObj = getMsgModel(USER_MSG, "err.세션단절.사용자정보없음");
					return proceedObj;
				} 				
				if(!authoService.isGrantUser(paramMap) ) {
					proceedObj = getMsgModel(USER_MSG, "err.메뉴.권한없음");					
					//권한없음
					return proceedObj;
				} 
			}
			
			
			 
			// Controller 호출
			proceedObj = joinPoint.proceed();
			
			long afterTime = System.currentTimeMillis();			
			long processTime = afterTime - beforeTime;

			if( proceedObj instanceof ModelAndView )
			{
				String msg = null;
				ModelAndView mav = (ModelAndView)proceedObj;

				Map<String, Object> modelMap = mav.getModel();

				Object obj = modelMap.get(NexacroConstant.ERROR_MSG);

				if( obj != null) { 
					msg =  (String)obj;
				}

				mav.addObject(NexacroConstant.ERROR_MSG , msg);

				proceedObj = mav;
				
				logMap.put("RSPNS_CODE", 0 );
				logMap.put("ERROR_MSSAGE", modelMap.get(NexacroConstant.ERROR_MSG) );
			}
			//else {
				// Controller의 return 이 ModelAndView 가 아닌경우(추후 호환성)
			//}
			
			logMap.put("PROCESS_TIME", Long.valueOf(processTime) );
			
			
		}
		catch(Throwable ex) {
			
			long afterTime = System.currentTimeMillis();
			long processTime = afterTime - beforeTime;
			
			logMap.put("PROCESS_TIME", Long.valueOf(processTime) );
			
			Throwable e = ExceptionUtils.getRootCause(ex);
			
			if( e == null ) e = ex;
			
			e.printStackTrace();
			
			if( e instanceof NexaServiceException) {

				String msg = e.getMessage();				
				proceedObj = getMsgModel(USER_MSG, msg);
				
				logMap.put("RSPNS_CODE", "0");
				logMap.put("ERROR_MSSAGE", msg );
			}
			else
			{	
				String msg = "err.예외상황.발생" + "®®"+ ExceptionUtils.getStackTrace(e);
				proceedObj = getMsgModel(SYSTEM_MSG, msg);
				
				logMap.put("RSPNS_CODE", SYSTEM_MSG);
				logMap.put("ERROR_MSSAGE", msg );
				
				try { 
					logSvc.putLog( ex); 
				} catch(Exception ie) {
					log.error(ExceptionUtils.getStackTrace(ie));					
				} // ignore
				
			}
			
		}	// end of catch(
		

		try {
			
			if(! ignoreSysLog(request))
				logSvc.putLog(baseDao.getDao(), logMap);
			if(menuUseLogYn){
				dbSync.putMenuUseLog(baseDao.getDao(), logMenuMap);   
			}
			
		} catch(Exception ie) {
			log.error(ExceptionUtils.getStackTrace(ie));
		}	// ignore         

		return proceedObj;
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION: 필요한 정보를 Attribute로 넘긴다.(LogSvc 에서 사용)
	 * @param request
	 * @param joinPoint
	 * @return
	 * 2015. 9. 24.
	 * </pre>
	 */
	@SuppressWarnings("rawtypes")
	private boolean createRequestAttr(HttpServletRequest request, ProceedingJoinPoint joinPoint) {
		
		request.getSession().setAttribute("S_USER_IP", 	getRemoteAddr());		
		
		// 화면에서 넘어오는 변수들 설정
		NexacroMapDTO xpDto = null;
		Object o[] = joinPoint.getArgs();
		for(int i=0; i<o.length; i++) {
			if( o[i] instanceof NexacroMapDTO) {
				xpDto =  (NexacroMapDTO)o[i];
				
				Map <String, Object> inVar = xpDto.getInVariableMap();				
				if( inVar != null ) {
					
					request.setAttribute("MENU_ID", inVar.get("MENU_ID"));
					request.setAttribute("SYS_ID", inVar.get("SYS_ID"));
					request.setAttribute("FORM_URL", inVar.get("FORM_URL"));
				}
				
				Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
				DataSetMap inDsMap = null;
				if( inDataset != null) {
					inDsMap = (DataSetMap)inDataset.get("gds_form");
					
					if(inDsMap != null) {
						Map inMap = inDsMap.get(0);					
						request.setAttribute("FORM_URL", inMap.get("FORM_URL"));
					}
				}			
				
				break;
			}
		}
		
		
		// 시스템 UUID 설정 (DB로그와 같은 값을 가짐: INSTN_ID)
		UUID uuid = UUID.randomUUID();
		request.setAttribute("UUID", uuid);
		
		
		Signature sig = joinPoint.getSignature();

		if( sig == null ) {			
			return false;
		}

		String requestMethod =  sig.getName();
		String requestClass =  sig.getDeclaringTypeName();
		
		request.setAttribute("SVC_ID", requestClass);
		request.setAttribute("OPRTIN_NM", requestMethod);
		
		return true;		
	} 


	/**
	 * Model 에 메시지 설정
	 * @param err_code
	 * @param err_msg
	 * @return
	 */
	private ModelAndView getMsgModel(String err_code, String err_msg) {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		// 
		mav.addObject(NexacroConstant.ERROR_CODE, err_code);
		mav.addObject(NexacroConstant.ERROR_MSG, err_msg);
		
		return mav;		
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:권한체크에서 제외할 로직
	 * @param request
	 * @return : true(권한제외), false(권한)
	 * 2015. 9. 21.
	 * </pre>
	 */
	private boolean ignoreGrant( HttpServletRequest request) {
		
		// UA 체크는 헤더 변조의 우려가 있으므로 위험함.(Runtime 개발)
		String user_agent = request.getHeader("user-agent");
		if( user_agent.indexOf("nexacroplatform14") >= 0)
			return true;
		
		// 최초 로그인
		if( "/login.do".equals(request.getRequestURI()) )
			return true;
		if( "/loginFail.do".equals(request.getRequestURI()) )
			return true;

		if( "/loginDuplicate.do".equals(request.getRequestURI()) )
			return true;
		if( "/sessionTimeout.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/loginSuccess.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/loginCheck.do".equals(request.getRequestURI()) )
			return true;
		
		// 콤보 코드 조회
		if( request.getRequestURI().indexOf("/hsco/cmm/cmmCode") >= 0 )
			return true;
		
		// 버튼권한 제외
		if( "/hsco/cmm/author/controller/AuthorController/getAuthBtnList.do".equals(request.getRequestURI()) )
			return true;
		
		// 마이메뉴 조회
		if( "/hsco/cmm/myMenu/MyMenuList.do".equals(request.getRequestURI()) )
			return true;
		// left menu에서 mymenu 삭제
		if( "/hsco/cmm/myMenu/removeMyMenu.do".equals(request.getRequestURI()) )
				return true;
		
		if( "/hsco/cmm/download/viewImage.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/hsco/cmm/download/downloadFile.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/hsco/cmm/file/uploadFile.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/hsco/cmm/file/fileUpload.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/hsco/cmm/download/downloadElectricSanctnAttachIni.do".equals(request.getRequestURI()) )
			return true;
			
		
		// 개인정보조회로그
		if("/hsco/cmm/log/insertIndInfoLog.do".equals(request.getRequestURI()))
			return true;
		
		
		// 최초 로그인
		if( "/logout.do".equals(request.getRequestURI()) )
			return true;
		
		
		if( "/hsco/cmm/download/excel.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/tokenLogin.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/tokenLoginLink.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/getLoginToken.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/hsco/cmm/sanc/result.do".equals(request.getRequestURI()) )
			return true;
		
		// 익명게시판 목록 조회
		if( "/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsList.do".equals(request.getRequestURI()) )
			return true;
		
		// 익명게시판 상세 조회
		if( "/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsView.do".equals(request.getRequestURI()) )
			return true;
		
		// 익명게시판 등록화면 조회
		if( "/hsco/com/sym/bbs/BBS010101/writeAnonymousBbs.do".equals(request.getRequestURI()) )
			return true;
		
		// 익명게시판 등록
		if( "/hsco/com/sym/bbs/BBS010101/insertAnonymousBbs.do".equals(request.getRequestURI()) )
			return true;
		
		// 익명게시판 투표 등록
		if( "/hsco/com/sym/bbs/BBS010101/insertAnonymousBbsVote.do".equals(request.getRequestURI()) )
			return true;
		
		// 익명게시판 투표 삭제
		if( "/hsco/com/sym/bbs/BBS010101/deleteAnonymousBbsVote.do".equals(request.getRequestURI()) )
			return true;
		
		// 익명게시판 댓글 등록
		if( "/hsco/com/sym/bbs/BBS010101/insertAnonymousBbsReply.do".equals(request.getRequestURI()) )
			return true;
		// 익명게시판 댓글 삭제
		if( "/hsco/com/sym/bbs/BBS010101/deleteAnonymousBbsReply.do".equals(request.getRequestURI()) )
			return true;
		// 익명게시판 댓글 수정
		if( "/hsco/com/sym/bbs/BBS010101/updateAnonymousBbsReply.do".equals(request.getRequestURI()) )
			return true;
		
		// 익명게시판 댓글 투표 등록
		if( "/hsco/com/sym/bbs/BBS010101/insertAnonymousBbsReplyVote.do".equals(request.getRequestURI()) )
			return true;
		
		// 익명게시판 댓글 투표 삭제
		if( "/hsco/com/sym/bbs/BBS010101/deleteAnonymousBbsReplyVote.do".equals(request.getRequestURI()) )
			return true;

		// 제안 게시판 목록 조회
		if( "/hsco/com/sym/bbs/BBS020101/selectProposalBbsList.do".equals(request.getRequestURI()) )
			return true;
		
		// 제안 게시판 상세 조회
		if( "/hsco/com/sym/bbs/BBS020101/selectProposeBbsDetailView.do".equals(request.getRequestURI()) )
			return true;
		
		// 제안 게시판 등록 페이지 조회
		if( "/hsco/com/sym/bbs/BBS020101/selectProposeBbsWriteView.do".equals(request.getRequestURI()) )
			return true;
		
		// 제안 게시판 공동사용자로 등록할 회원목록 조회
		if( "/hsco/com/sym/bbs/BBS020101/selectProposeUserList.do".equals(request.getRequestURI()) )
			return true;

		// 제안  등록
		if( "/hsco/com/sym/bbs/BBS020101/insertPropose.do".equals(request.getRequestURI()) )
			return true;
		
		// 제안  등록
		if( "/hsco/com/sym/bbs/BBS020101/deletePropose.do".equals(request.getRequestURI()) )
			return true;
		
		// 제안 투표 등록
		if( "/hsco/com/sym/bbs/BBS020101/insertProposeBbsVote.do".equals(request.getRequestURI()) )
			return true;
		
		// 제안 투표 삭제
		if( "/hsco/com/sym/bbs/BBS020101/deleteProposeBbsVote.do".equals(request.getRequestURI()) )
			return true;

		// 제안 댓글 등록
		if( "/hsco/com/sym/bbs/BBS020101/insertProposeBbsReply.do".equals(request.getRequestURI()) )
			return true;

		// 제안 댓글 삭제
		if( "/hsco/com/sym/bbs/BBS020101/deleteProposeBbsReply.do".equals(request.getRequestURI()) )
			return true;

		// 제안 댓글 수정
		if( "/hsco/com/sym/bbs/BBS020101/updateProposeBbsReply.do".equals(request.getRequestURI()) )
			return true;

		// 제안 투표 등록
		if( "/hsco/com/sym/bbs/BBS020101/insertProposeBbsReplyVote.do".equals(request.getRequestURI()) )
			return true;

		// 제안 투표 삭제
		if( "/hsco/com/sym/bbs/BBS020101/deleteProposeBbsReplyVote.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/hsco/cmm/fms/selectFileInfs.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/hsco/cmm/fms/FileDown.do".equals(request.getRequestURI()) )
			return true;
		
		if( "/web/hsco/proposeBbsView.jsp".equals(request.getRequestURI()) )
			return true;
		
		return false;
	}
	
	/**
	 * 
	 * <pre>
	 * @DESCRIPTION:System Log 에서 제외할 로직
	 * @param request
	 * @return : true(로그제외), false( 로그 남김)
	 * 2015. 9. 21.
	 * </pre>
	 */
	private boolean ignoreSysLog( HttpServletRequest request) {
		
		// 시스템 공통코드 제외
		if( request.getRequestURI().indexOf("/hsco/cmm/cmmCode") >= 0 )
			return true;
		
		// 개발용 코드제너레이터 제외
		if( request.getRequestURI().indexOf("/hsco/dev/codegen") >= 0 )
			return true;
		
		// 시스템관리 로그관리 제외
		if( request.getRequestURI().indexOf("/hsco/com/sym/lgm") >= 0 )
			return true;
		
		// 버튼권한 제외
		if( "/hsco/cmm/author/controller/AuthorController/getAuthBtnList.do".equals(request.getRequestURI()) )
			return true;
		// 개인정보조회로그
		if("/hsco/cmm/log/insertIndInfoLog.do".equals(request.getRequestURI()))
			return true;
		
		return false;
	}
	/*
	@SuppressWarnings({ "rawtypes", "unused" })
	private void debugRequest(HttpServletRequest request)
	{

		HttpSession ss = request.getSession();
		Enumeration sd = ss.getAttributeNames();
		while(sd.hasMoreElements()) {
			String name = (String)sd.nextElement();				
		}
		
		Enumeration hd = request.getHeaderNames();			
		while(hd.hasMoreElements()) {
			String name = (String)hd.nextElement();				
		}
		
		Enumeration en = request.getAttributeNames();			
		while(en.hasMoreElements()) {
			String name = (String)en.nextElement();				
		}
		
		Enumeration pd = request.getAttributeNames();			
		while(pd.hasMoreElements()) {
			String name = (String)pd.nextElement();				
		}
	}
	*/
	
	

}
