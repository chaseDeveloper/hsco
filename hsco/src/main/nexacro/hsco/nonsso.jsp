﻿<%@page contentType = "text/html; charset=utf-8" %>
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
	String vMode = escapeParam(request.getParameter("V_MODE"));
	String hscos_csrfToken = request.getParameter("_hscos_csrfToken");
	String s_hscos_csrfToken = (String)session.getAttribute("hscos_csrfToken");
	boolean isChecked = false;
	
	if(vMode == null || !"NONSSO".equals(vMode)
		|| s_hscos_csrfToken == null
		|| hscos_csrfToken == null
		|| !hscos_csrfToken.equals(s_hscos_csrfToken)){
	%>
	<script type="text/javascript">
		alert("유효하지 않은 로그인 요청입니다!");
		window.location.replace("/index.jsp");
	</script>
	<%
		return;
	}

	if( id == null || id.length() <= 0 || "".equals(id)
		|| password == null	|| password.length() <= 0 || "".equals(password) ){
		
	%>
		<script type="text/javascript">
			alert("아이디 또는 비밀번호를 잘못 입력하셨습니다.");
			window.location.replace("/index.jsp");
		</script>
	<%
		return;
	} else {
		String regExp = "[|ㄱ-ㅎ|ㅏ-ㅣ|가-힝 | < | > | ( | ) | ' | \" | / | \\ | # | $ | %]*";
		if(id.matches(regExp)){
			isChecked = false;
		%>
			<script type="text/javascript">
				alert("아이디 또는 비밀번호를 잘못 입력하셨습니다.");
				window.location.replace("/index.jsp");
			</script>
		<%
			return;
		} else {
			isChecked = true;
		}
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
	<title>화성도시공사 HUCOS</title> 
	<style type="text/css">
	div {-moz-user-select:-moz-none; -webkit-user-select:none; -webkit-touch-callout:none; -webkit-appearance:none; -webkit-tap-highlight-color:rgba(0,0,0,0); outline:none;} v\:shape{ behavior:url(#default#VML); display:inline-block;} v\:fill{ behavior:url(#default#VML); display:inline-block;} v\:path{ behavior:url(#default#VML); display:inline-block;} v\:line{ behavior:url(#default#VML); display:inline-block;} v\:textpath{ behavior:url(#default#VML); display:inline-block;} o\:opacity2{ behavior:url(#default#VML);} input::-ms-clear{ display:none;} input::-ms-reveal{ display:none;}
	</style>
</head>
<body style="margin:0;border:none;-ms-touch-action:none;" onload="oninitframework()">
  <script type="text/javascript">
function oninitframework(){
	nexacro._initHTMLSysEvent(window, document); nexacro._prepareManagerFrame();
	application.addVariable("gv_userId",  "<%=id%>");
	application.addVariable("gv_openMenuId",  "<%=mid%>");
	var bool1 = application.setVariable("gv_userId", "<%=id%>");
	var bool2 = application.setVariable("gv_openMenuId", "<%=mid%>");
	<%
	if(isChecked){
		session.setAttribute("V_USER_ID", id); 
		session.setAttribute("V_USER_PWD", password);
	%>
		application.load("hsco", "hsco.xadl.js");
	<%
	} else { response.sendRedirect("/index.jsp");return;}
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