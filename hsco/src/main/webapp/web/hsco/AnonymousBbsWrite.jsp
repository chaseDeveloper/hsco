<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<body>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1">
<meta name="format-detection" content="telephone=no">
<link rel="stylesheet" type="text/css" href="/anonymous/css/anonymous.css" />
<title익명게시판 - 작성화면</title>
</head>


<script type="text/javascript" src="/login/js/jquery-1.8.0.min.js" charset="utf-8"></script>
<script type="text/javascript">

//목록
function moveList(){
	if(confirm("작성을 취소하고 목록으로 돌아가시겠습니까?")){
		$('#frm').attr("action" , "/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsList.do").submit();
	}
}

//등록하기
function insertAnonymousBbs(){
	if ($("#sj").val() == "") {
		alert("제목을 입력하세요.");
		$("#sj").focus();
		return false;
	}
	if ($("#cn").val() == "") {
		alert("내용을 입력하세요.");
		$("#cn").focus();
		return false;
	}
	
	if ($("#sj").val().length > 200) {
		alert("제목이 200글자를 초과하였습니다.");
		$("#sj").focus();
		return false;
	} 
	if(confirm("등록 하시겠습니까?")){
		var formURL = "<c:url value='/hsco/com/sym/bbs/BBS010101/insertAnonymousBbs.do'/>";
		var formData = $('#frm').serialize();
		$.ajax({
			type: "POST",
			url: formURL,
			data: formData,
			dataType: "JSON",
			async: true,
			success: function (data) {
				if(data['result'] == "Y"){
					alert("등록되었습니다.");
				}
				location.href = "/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsList.do";
			},
			error:function(response, textStatus, errorThrown){
				alert("ajax 통신실패");
			}
		});
	}
}
</script>

<form id="frm" name="frm" method="post">
	
	<div class="anonymous_board">
		<div class="copy_box">
				<h3>만사소통(萬事疏通)</h3>
				<h4>본 게시판은 익명 게시판으로 비밀이 철저히 보장됩니다 (글 수정, 삭제 불가)</h4>
				<h4>특정인의 비방, 비난, 욕설, 비속어 사용시 임의로 삭제됩니다</h4>
		</div>
	
		<div class="anonymous_box">
			<div class="write_box">
				<table class="tbl_st">
					<caption>제목, 내용이 나와있는 테이블</caption>
					<colgroup>
						<col style="width:25%">
						<col style="width:auto">
					</colgroup>
				    <tbody>
			    		<tr>
			    			<th scope="row"><label for="sj">제목</label></th>
			    			<td><input type="text" id="sj" name="sj" value="${SJ}"/></td>
			    		</tr>
			    		<tr>
			    			<th scope="row"><label for="cn">내용</label></th>
			    			<td><textarea id="cn" name="cn" ></textarea>${CN}</td>
			    		</tr>
			    	</tbody>
				</table>
				<div class="btn_box">
					<a href="javascript:moveList();" class="btn_submit" role="button">목록</a>
					<button type="button" class="btn_submit" onclick="javascript:insertAnonymousBbs();">등록하기</button>
				</div>
			</div>
		</div>
	</div>
</form>
</body>
