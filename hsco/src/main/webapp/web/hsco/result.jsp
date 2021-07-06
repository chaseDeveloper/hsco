<%@ page import="java.util.*, org.apache.commons.logging.Log, org.apache.commons.logging.LogFactory" contentType="text/html;charset=utf-8" %>
<%!
public static Log LOG = LogFactory.getLog("result.jsp");
%>
<%

Enumeration er = request.getParameterNames();

while (er != null && er.hasMoreElements()) {
//   LOG.info("result.jsp22222 ");
   String key   = (String)er.nextElement();
   LOG.info("result.jsp "+key + " = "+request.getParameter(key));
   System.out.println("result.jsp "+key + " = "+request.getParameter(key));
}


%>
SUCCESS