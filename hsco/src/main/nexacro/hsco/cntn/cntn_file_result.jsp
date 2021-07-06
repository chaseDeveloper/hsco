<%@page contentType = "text/html; charset=utf-8" %>
<%@page import="java.util.*" %>
<%@page import="javax.servlet.http.*" %>
<!--[if gt IE 8]><!DOCTYPE html><!--<![endif]-->
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UFT-8">
	<title>화성도시공사 DUCOS</title>
</head>
<script type="text/javascript">
var redirectUrl= '<%=request.getParameter("redirectUrl")%>';
var isErr= '<%=request.getParameter("isErr")%>';
alert(isErr);
if("N"==isErr){
	location.href=redirectUrl;
}else{
	alert("전자결재 증빙파일연동시 오류가 발생하였습니다.");
	window.close();
}
</script>
<body>
</body>
</html>