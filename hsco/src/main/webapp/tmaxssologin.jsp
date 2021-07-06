<%@page contentType = "text/html; charset=utf-8" %>

<%@page import="java.util.*" %>
<%@page import="javax.servlet.http.*" %>

<%@page import="com.tmax.sso.common.Common" %>
<%@page import="com.tmax.sso.common.CommonUtil" %>
<%@page import="com.tmax.sso.common.SSOUtil" %>
<%@page import="com.tmax.sso.token.TmaxSSOToken" %>
<%@page import="com.tmax.sso.agent.TmaxSSOSession" %>
<%@page import="com.tmax.sso.token.TokenValidator" %>
<%@page import="com.tmax.sso.logger.SSOAuditLogger" %>
<%@page import="com.tmax.sso.logger.SSOAuditLog" %>
<%@page import="com.tmax.sso.agent.EAMFilter" %>
<%@page import="com.tmax.sso.configuration.SSOAgentConf" %>
<%@page import="com.tmax.sso.token.TokenEncoderUtil" %>

<%
	
	/*********************** tmax eam 을 위한 코드 ************************/
	String tokenStr = (String)request.getParameter(Common.PARAM_TOKEN);
	String nextPage = (String)request.getParameter(Common.PARAM_NEXTURL);
	
	/*********************** ServiceURL을 가져옮 ***********************/
	String fullUrl = javax.servlet.http.HttpUtils.getRequestURL(request).toString(); 
	String serviceServletPath = request.getServletPath();
	int i = fullUrl.indexOf(serviceServletPath);
	String serviceURL = fullUrl.substring(0,i) + "/";
	/*********************** ServiceURL을 가져옮 ***********************/
 
	
	if (null == nextPage) {
		nextPage = "/index.jsp";
	} else {
		nextPage = CommonUtil.decodeFromHex(nextPage);
	}
	
	TmaxSSOToken token = null;

	if (null == tokenStr) {
		System.out.println("tokenStr is null");
		response.sendRedirect(SSOAgentConf.getLoginInputURL());
		return ;
	}

	try {
		token = EAMFilter.decodeTokenStr(tokenStr);
	} catch (Exception e) {
		System.out.println(e.getMessage());
		e.printStackTrace();
		response.sendRedirect("/index.jsp");
		return ;
	}

	//성공적으로 SSO 서버로부터 토큰을 받았으면. 
	String password = token.getPassword();
	String cmm = token.getCommon();
	
	if(TmaxSSOSession.login(request, token)){	
			response.sendRedirect(nextPage);
	} else {
		response.sendRedirect(nextPage);
		
	}
%>

