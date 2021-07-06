﻿<%@page import="com.tmax.sso.agent.TmaxSSOSession"%>
<%@page import="com.tmax.sso.token.TmaxSSOToken"%>
<%@page contentType = "text/html; charset=utf-8" %>

<%@page import="java.util.*" %>
<%@page import="javax.servlet.http.*" %>
<%@page import="org.apache.commons.lang.StringEscapeUtils" %>
<%!
	public String escapeParam(String param){
		return StringEscapeUtils.escapeSql((StringEscapeUtils.escapeHtml(param)));
	}
%>
<%
	String id = escapeParam(request.getParameter("V_USER_ID"));
	String password = escapeParam(request.getParameter("V_USER_PWD"));
	String mid = escapeParam(request.getParameter("mid"));
	String sid = escapeParam(request.getParameter("sid"));
	String pid = escapeParam(request.getParameter("pid"));
	 	
	boolean isChecked = false;
	
	TmaxSSOToken token = TmaxSSOSession.getTmaxSSOToken(request);
	if(token != null && token.getCommon() != null && token.getPassword() != null){ 
		id = token.getCommon(); 
		password = token.getPassword();
	} 
	if( id == null || id.length() <= 0 || "".equals(id)
		|| password == null || password.length() <= 0 || "".equals(password) ){
		response.sendRedirect("/index.jsp");	
		return ;
	} else { 
		isChecked = true;
	} 
%>
<!--[if gt IE 8]><!DOCTYPE html><!--<![endif]-->
<html xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
	<meta http-equiv="content-type" content="application/xhtml+xml; charset=UTF-8" />
	<meta http-equiv="Cache-Control" content="no-cache"/> 
	<meta http-equiv="Content-Encoding" content="compress, gzip"/> 
	<meta http-equiv="Accept-Encoding" content="gzip, deflate" />
	<title>화성도시공사 통합경영정보시스템</title> 
	<style type="text/css">
	div {-moz-user-select:-moz-none; -webkit-user-select:none; -webkit-touch-callout:none; -webkit-appearance:none; -webkit-tap-highlight-color:rgba(0,0,0,0); outline:none;} v\:shape{ behavior:url(#default#VML); display:inline-block;} v\:fill{ behavior:url(#default#VML); display:inline-block;} v\:path{ behavior:url(#default#VML); display:inline-block;} v\:line{ behavior:url(#default#VML); display:inline-block;} v\:textpath{ behavior:url(#default#VML); display:inline-block;} o\:opacity2{ behavior:url(#default#VML);} input::-ms-clear{ display:none;} input::-ms-reveal{ display:none;}
	</style>
</head>
<body style="margin:0;border:none;-ms-touch-action:none;" onload="oninitframework()">
<script type="text/javascript">
function oninitframework(){ 
	nexacro._initHTMLSysEvent(window, document); 
	nexacro._prepareManagerFrame();
	application.addVariable("gv_userId",  "<%=id%>");
	application.addVariable("gv_openMenuId",  "<%=mid%>");
	application.addVariable("gv_pid",  "<%=pid%>");
	var bool1 = application.setVariable("gv_userId", "<%=id%>");
	var bool2 = application.setVariable("gv_openMenuId", "<%=mid%>"); 

	<%
	if(isChecked){
		session.setAttribute("V_USER_ID", id);  
		session.setAttribute("V_USER_PWD", password);
		session.setAttribute("V_USER_SYS_ID", sid);   
	%> 
		application.load("hsco", "hsco.xadl.js");  
	<%
	}else {
		response.sendRedirect("/index.jsp");
		return;
	}
	%>
}
function replacePage(pageUrl){window.location.replace(pageUrl);}
</script>
</body>
<script type="text/javascript" src="./nexacro14lib/framework/Framework.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/LoadNexacro14lib.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/LoadNexacroExtlib.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/UbiViewer.js"></script>
</html>