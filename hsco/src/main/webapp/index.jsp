<%@page contentType = "text/html; charset=utf-8" %>
<%@page import="java.util.*" %>
<%@page import="javax.servlet.http.*" %>

<%!
	public String generateCSRFToken() {
		return UUID.randomUUID().toString();
}
%>
<%
	String hscos_csrfToken = generateCSRFToken();
	session.setAttribute("hscos_csrfToken", hscos_csrfToken);
	String portalDomain = "http://192.168.10.222";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="content-type" content="application/xhtml+xml; charset=UTF-8" /> 
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta http-equiv="Cache-Control" content="no-cache"/> 
<meta http-equiv="Content-Encoding" content="compress, gzip"/> 
<meta http-equiv="Accept-Encoding" content="gzip, deflate" />
<link rel="stylesheet" type="text/css" href="/login/css/login.css" />
<title>화성도시공사 통합경영정보시스템</title>
</head>
<body>
  <!-- 로그인 박스 -->
	<div class="hwaseong-login">
		<div class="container">
			<div class="login-wrap">
				<h1 class="title">통합경영정보시스템</h1>
				<div class="box">
					<div class="item logo">
						<img src="login/images/login/logo.png" alt="">
					</div>
					
					<div class="item login">
						<div class="login-form-wrap">
							<h3 class="title">로그인</h3>
							<p class="info">사용자 아이디와 비밀번호를 입력하십시오</p>
							<!-- 로그인 폼 -->
							<form  name="userLogin" id="userLogin" method="post">
								<div class="form-horizontal">
									<div class="form-row">
										<label class="form-label" for="">아이디</label>
										<div class="form-controls">
											<input id="id" class="input" type="text" name="id" value="" />
										</div>
									</div>
									<div class="form-row">
										<label class="form-label" for="">비밀번호</label>
										<div class="form-controls">
											<input type="password" id="V_USER_PWD" name="V_USER_PWD" class="input" autocomplete="off" onkeydown='javascript:onEnter()' value="1" />

										</div>
									</div>
								</div>

								<a class="login-button" href="javascript:void(0);" onclick="goLogin()">로그인</a> 
								<input type="hidden" id="sid" name="sid" value="DUCOS" /> 
								<input type="hidden" id="mid" name="mid" value="" /> 
								<input type="hidden" id="V_USER_ID" name="V_USER_ID" value="" /> 
								<input type="hidden" id="V_MODE" name="V_MODE" value="NONSSO" />
							</form>
						</div>
					</div>
				</div>
				<!-- Footer -->
				<p class="browser-notic">※ 통합경영정보시스템의 웹브라우저는 IE 10.0 이상의 버전에 최적화 되어있습니다. 하위버전의 사용자는 상위버전으로 업그레이드 후 이용하시기 바랍니다.</p>
			</div>
		</div>
	</div>


	<!-- //로그인 박스 -->
  </div>

</body>
<script type="text/javascript" src="/login/js/jquery-1.8.0.min.js" charset="utf-8"></script>
<script type="text/javascript">

	function onEnter() {
		if (event.keyCode == 13) {
			goLogin();
		}
	}

	function goLogin() {
		var id = $("#id").val();
		var len = id.length;
// 		if (len < 8) {
// 			alert("사용자ID는 최소 8자 이상이어야 합니다.");
// 			return false;
// 		}
		if (len > 12) {
			alert("사용자ID가 허용된 문자수를 초과하였습니다.");
			return false;
		}

		if ($("#V_USER_PWD").val().length == 0) {
			alert("비밀번호를 입력하십시오.");
			return false;
		}

		if (!test(id)) {
			alert("사용자ID에 허용되지 않는 문자가 있습니다!");
			return false;
		}
		$("#V_USER_ID").val(id);
		$("#userLogin").attr("action", "/web/hsco/index.jsp")
		$("#userLogin").submit();
	}

	function test(id) {
		var chk = false;
		var regSChar = /^[<>{}#$%/\"\']/; // 특수문자
		var regHangul = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힝]/; // 한글
		if (regSChar.test(id)) {
			chk = false;
		} else {
			chk = true;
		}
		if (chk && regHangul.test(id)) {
			chk = false;
		}

		return chk;
	}
</script>
</html>
