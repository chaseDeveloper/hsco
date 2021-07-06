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
window.name = "hscos_cntn_file";
var file1= '<%=request.getParameter("fileurl")%>';
var file2= '<%=request.getParameter("extrSantn")%>';

var agent = navigator.userAgent.toLowerCase();
if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
	//var myWindow = window.open('fdc://'+file1+'?redirectUrl='+file2 , "file_name").close();
	//myWindow.close();
	//window.close();
	//location.href=file2;
}else {
	//location.href='fdc://'+file1;
}


</script>
<body onload="self.close()">
	<iframe id="fdc_target" name="fdc_target" frameborder="0" width="0" height="0" src='fdc://<%=request.getParameter("fileurl")%>?redirectUrl=<%=request.getParameter("extrSantn")%>'>
	</iframe>
</body>
</html>