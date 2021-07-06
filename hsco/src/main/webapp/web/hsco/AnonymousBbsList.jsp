<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1">
<meta name="format-detection" content="telephone=no">
<link rel="stylesheet" type="text/css" href="/anonymous/css/anonymous.css" />
<title익명게시판 - 리스트</title>
</head>

<script type="text/javascript" src="/login/js/jquery-1.8.0.min.js" charset="utf-8"></script>
<script type="text/javascript">

//페이징 조회
function searchPageList(pageIndex) {
	if (pageIndex == null || pageIndex == '' || pageIndex == 0) {
		pageIndex = 1;
	}
	$('#frm').find('input[name=pageIndex]').val(pageIndex);
	$('#frm').attr("action" , "/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsList.do").submit();  
}

//익명게시판 상세보기
function goViewPage(sn){
	
	$("#sn").val(sn);
	$("#frm").attr("action" , "/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsView.do").submit();  
}

//익명게시판 등록하기 화면 바로가기
function goWritePage(){
	$("#frm").attr("action" , "/hsco/com/sym/bbs/BBS010101/writeAnonymousBbs.do").submit();  
}
</script>

<body>
	<div class="anonymous_board">
		<div class="copy_box">
			<h3>만사소통(萬事疏通)</h3>
			<h4>본 게시판은 익명 게시판으로 비밀이 철저히 보장됩니다 (글 수정, 삭제 불가)</h4>
			<h4>특정인의 비방, 비난, 욕설, 비속어 사용시 임의로 삭제됩니다</h4>
		</div>

		<div class="anonymous_box">
			<div class="list_box">
				<div class="btn_box">
					<a href="javascript:goWritePage();" class="btn_write">글쓰기</a>
				</div>
				<form id="frm" name="frm" method="post">
					<input type="hidden" id="sn" name="sn" value=""/>
					<input type="hidden" id="pageIndex" name="pageIndex"  value="${REPARAM.pageIndex}"/>
					<table class="tbl_st">
						<caption>제목, 좋아요 갯수, 싫어요 갯수, 조회, 작성일이 나타나있는 테이블</caption>
						<colgroup>
							<col style="width:auto">
							<col style="width:13%">
							<col class="anony_state" style="width:13%">
							<col class="anony_state" style="width:13%">
							<col style="width:15%">
						</colgroup>
						<thead>
							<tr>
								<th scope="col">제목</th>
								<th scope="col" class="anony_state good_col"><img src="/anonymous/images/ic_good.png" alt="좋아요 아이콘" />좋아요</th>
								<th scope="col" class="anony_state"><img src="/anonymous/images/ic_bad.png" alt="싫어요 아이콘" />싫어요</th>
								<th scope="col">조회</th>
								<th scope="col">작성일</th>
							</tr>
						</thead>
						<tbody>
							<c:choose>
								<c:when test="${not empty anonymousBbsList}">
									<c:forEach var="anonymousBbsList" items="${anonymousBbsList}" varStatus="status">
										<tr>
										<td class="subject"><a href="javascript:goViewPage('${anonymousBbsList.SN}');" class="cut_txt">${anonymousBbsList.SJ} (${anonymousBbsList.REPLY_CNT})</a></td>
										<td class="good"><span>${anonymousBbsList.LIKE_CNT}</span></td>
										<td class="bad"><span>${anonymousBbsList.HATE_CNT}</span></td>
										<td>${anonymousBbsList.INQIRE_CO}</td>
										<td>${anonymousBbsList.REGIST_DE}</td>
										</tr>
									</c:forEach>
								</c:when>
								<c:otherwise>
									<tr>
										<td colspan="5">게시글 내역이 없습니다.</td>
									</tr>
								</c:otherwise>
							</c:choose>
						</tbody>
					</table>
					
					<div class="paging_wrap">
						<div class="pageview">
							<ui:pagination paginationInfo="${paginationInfo}" type="image" jsFunction="searchPageList"/>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
