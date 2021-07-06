<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1">
<meta name="format-detection" content="telephone=no">
<link rel="stylesheet" type="text/css" href="/anonymous/css/anonymous.css" />
<title익명게시판 - 상세보기</title>
</head>


<script type="text/javascript" src="/login/js/jquery-1.8.0.min.js" charset="utf-8"></script>
<script type="text/javascript">

//전역변수 선언
var GVoteSe = '${anonymousBbsMap.VOTE_SE}'; //기존 본문 투표구분

window.onload = function(){
	likeHateCssControl(GVoteSe); //[본문]좋아요,싫어요 css 제어
	
	var replyVoteSelist = new Array();
	<c:forEach var="item" items="${anonymousBbsReplyList}" varStatus="status">
		replyVoteSelist.push('${item.REPLY_VOTE_SE}');
	</c:forEach>
	
	for(var i = 0 ; i < replyVoteSelist.length ; i++){
		likeHateReplyCssControl(replyVoteSelist[i], i); //[댓글] 좋아요,싫어요 상태에 따른 버튼css 제어
	}
	
};

//목록 바로가기
function moveList(){
	$('#frm').attr("action" , "/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsList.do").submit();
}

//[본문] 좋아요,싫어요 상태에 따른 버튼css 제어
function likeHateCssControl(paramVoteSe){
	if(paramVoteSe == "1"){
		$('.view_state > .good').addClass('active');
	}else if (paramVoteSe == "2"){
		$('.view_state > .bad').addClass('active');
	}else{//좋아요투표값 없음
		$('.view_state > .good').removeClass('active');
		$('.view_state > .bad').removeClass('active');
	}
}

//[댓글] 좋아요,싫어요 상태에 따른 버튼css 제어
function likeHateReplyCssControl(paramReplyVoteSe, index){
	if(paramReplyVoteSe == "1"){
		$(".comment_btn").eq(index).find(".good").addClass('active');
	}else if (paramReplyVoteSe == "2"){
		$(".comment_btn").eq(index).find(".bad").addClass('active');
	}else{//좋아요투표값 없음
		$(".comment_btn").eq(index).find(".good").removeClass('active');
		$(".comment_btn").eq(index).find(".bad").removeClass('active');
	}
}

//[본문] 좋아요/싫어요 투표
function saveAnonymousBbsVote(voteSe){
	if(GVoteSe != "0"){ //기투표한 상태
		if(GVoteSe == voteSe){  //취소
			if(confirm("취소 하시겠습니까?")){
				$("#voteSe").val(GVoteSe);
				var formURL = "<c:url value='/hsco/com/sym/bbs/BBS010101/deleteAnonymousBbsVote.do'/>";
				var formData = $('#frm').serialize();
				
				$.ajax({
					type: "POST",
					url: formURL,
					data: formData,
					dataType: "JSON",
					async: true,
					success: function (data) {
						if(data['result'] == "Y"){
							$('.view_state > .good span').text(data['LIKE_CNT']);
							$('.view_state > .bad span').text(data['HATE_CNT']);
							GVoteSe = data['VOTE_SE'];
							likeHateCssControl(GVoteSe);
						}
					},
					error:function(response, textStatus, errorThrown){
						alert("ajax 통신실패");
					}
				});
			}
		}else{
			alert("이미 투표에 참여했습니다.\n취소 후 진행하여 주십시오.");
		}
	}else{ //신규투표
		$("#voteSe").val(voteSe);
		var formURL = "<c:url value='/hsco/com/sym/bbs/BBS010101/insertAnonymousBbsVote.do'/>";
		var formData = $('#frm').serialize();
		
		$.ajax({
			type: "POST",
			url: formURL,
			data: formData,
			dataType: "JSON",
			async: true,
			success: function (data) {
				if(data['result'] == "Y"){
					$('.view_state > .good span').text(data['LIKE_CNT']);
					$('.view_state > .bad span').text(data['HATE_CNT']);
					GVoteSe = data['VOTE_SE'];
					likeHateCssControl(GVoteSe);
				}
			},
			error:function(response, textStatus, errorThrown){
				alert("ajax 통신실패");
			}
		});
	}
}

//[댓글] 좋아요/싫어요 투표
function saveAnonymousBbsReplyVote(voteSe, orgVoteSe, sn, replySn){
	if(orgVoteSe != "0"){ //기투표한 상태
		if(orgVoteSe == voteSe){  //취소
			if(confirm("취소 하시겠습니까?")){
				var formURL = "<c:url value='/hsco/com/sym/bbs/BBS010101/deleteAnonymousBbsReplyVote.do'/>";
				$.ajax({
					type: "POST",
					url: formURL,
					data: {"sn": sn,
						   "replySn" : replySn},
					dataType: "JSON",
					async: true,
					success: function (data) {
						if(data['result'] == "Y"){
							console.log("댓글 투표 취소완료");
							//익스플로러 환경 location.reload 팝업 문제로인한 임시수정
							$('#frm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsView.do"/>').submit();
						}
					},
					error:function(response, textStatus, errorThrown){
						alert("ajax 통신실패");
					}
				});
			}
		}else{
			alert("이미 투표에 참여했습니다.\n취소 후 진행하여 주십시오.");
		}
	}else{ //신규투표
		var formURL = "<c:url value='/hsco/com/sym/bbs/BBS010101/insertAnonymousBbsReplyVote.do'/>";		
		$.ajax({
			type: "POST",
			url: formURL,
			data: {"sn": sn,
				   "replySn" : replySn,
				   "voteSe" : voteSe},
			dataType: "JSON",
			async: true,
			success: function (data) {
				if(data['result'] == "Y"){
					console.log("댓글 투표 완료");
					//익스플로러 환경 location.reload 팝업 문제로인한 임시수정
					$('#frm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsView.do"/>').submit();
				}
			},
			error:function(response, textStatus, errorThrown){
				alert("ajax 통신실패");
			}
		});
	}
}
//[댓글] 등록
function insertAnonymousBbsReply(){
	
	if ($("#replyCn").val() == "") {
		alert("댓글 내용을 입력하세요.");
		$("#replyCn").focus();
		return false;
	}
	if(confirm("등록 하시겠습니까?")){
		var formURL = "<c:url value='/hsco/com/sym/bbs/BBS010101/insertAnonymousBbsReply.do'/>";
		var formData = $('#frm').serialize();
		$.ajax({
			type: "POST",
			url: formURL,
			data: formData,
			dataType: "JSON",
			async: true,
			success: function (data) {
				if(data['result'] == "Y"){
					console.log("댓글 등록완료");
					//익스플로러 환경 location.reload 팝업 문제로인한 임시수정
					$('#frm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsView.do"/>').submit();
				}
			},
			error:function(response, textStatus, errorThrown){
				alert("ajax 통신실패");
			}
		});
	}
}

//[댓글] 삭제
function deleteAnonymousBbsReply(sn, replySn){
	if(confirm("삭제 하시겠습니까?")){
		var formURL = "<c:url value='/hsco/com/sym/bbs/BBS010101/deleteAnonymousBbsReply.do'/>";
		$.ajax({
			type: "POST",
			url: formURL,
			data: {"sn": sn,
				   "replySn" : replySn},
			dataType: "JSON",
			async: true,
			success: function (data) {
				if(data['result'] == "Y"){
					console.log("댓글 삭제완료");
					//익스플로러 환경 location.reload 팝업 문제로인한 임시수정
					$('#frm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsView.do"/>').submit();
				}
			},
			error:function(response, textStatus, errorThrown){
				alert("ajax 통신실패");
			}
		});
	}
}

//[댓글] 수정
function modifyAnonymousBbsReply(sn, replySn, obj){
	var cn = $(obj).parents(".comment_btn").siblings('p').children('textarea').val();
	if(confirm("수정 하시겠습니까?")){
		var formURL = "<c:url value='/hsco/com/sym/bbs/BBS010101/updateAnonymousBbsReply.do'/>";
		$.ajax({
			type: "POST",
			url: formURL,
			data: {"sn": sn,
				   "replySn" : replySn,
				   "cn" : cn},
			dataType: "JSON",
			async: true,
			success: function (data) {
				if(data['result'] == "Y"){
					console.log("댓글 수정완료");
					//익스플로러 환경 location.reload 팝업 문제로인한 임시수정
					$('#frm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsView.do"/>').submit();
				}
			},
			error:function(response, textStatus, errorThrown){
				alert("ajax 통신실패");
			}
		});
	}
}

//[댓글] 수정버튼 클릭시 화면제어
function onClickModify(sn, replySn, obj){
	var orgText = $(obj).parents(".comment_btn").siblings('p').text();
	$(obj).parents(".comment_btn").siblings('p').html("<textarea>"+ orgText +"</textarea>");
	$(obj).parents(".comment_btn").siblings('textarea').focus();
	
	//저장, 취소버튼 
	var li1 = $("<li/>", {});
	var li2 = $("<li/>", {});
	var button1 = $("<button/>", {"class" : "save", text:"저장", "onClick" : "modifyAnonymousBbsReply('"+ sn + "', '" + replySn + "', this)"});
	var button2 = $("<button/>", {"class" : "cancel", text:"취소", "onClick" : "onClickCancel('"+ sn + "', '" + replySn + "', '"+ orgText +"', this)"});
	
	li1.append(button1);
	li2.append(button2);
	$(obj).parents(".comment_btn").children('ul').prepend(li1, li2);
	
	//기존버튼 삭제
	$(obj).parents(".comment_btn").children("ul").children("li").eq(3).remove(); 
	$(obj).parents(".comment_btn").children("ul").children("li").eq(2).remove();
	 
}

//[댓글] 취소버튼 클릭시 화면제어
function onClickCancel(sn, replySn, orgText, obj){
	$(obj).parents(".comment_btn").siblings('p').empty();
	$(obj).parents(".comment_btn").siblings('p').text(orgText);
	
	//수정, 삭제버튼 
	var li1 = $("<li/>", {});
	var li2 = $("<li/>", {});
	var button1 = $("<button/>", {"class" : "modify", text:"수정", "onClick" : "onClickModify('"+ sn + "', '" + replySn + "', this)"});
	var button2 = $("<button/>", {"class" : "remove", text:"삭제", "onClick" : "deleteAnonymousBbsReply('"+ sn + "', '" + replySn + "')"});
	
	li1.append(button1);
	li2.append(button2);
	$(obj).parents(".comment_btn").children('ul').prepend(li1, li2);
	
	//기존버튼 삭제
	$(obj).parents(".comment_btn").children("ul").children("li").eq(2).remove(); 
	$(obj).parents(".comment_btn").children("ul").children("li").eq(2).remove();
	
}
</script>

<body>
	
	<form id="frm" name="frm" method="post">
		<input type="hidden" id="sn" name="sn" value="${anonymousBbsMap.SN}"/>
		<input type="hidden" id="discValue" name="discValue" value="${REPARAM.discValue}"/>
		<input type="hidden" id="voteSe" name="voteSe" value=""/>
		<input type="hidden" id="inqireCoFlag" name="inqireCoFlag"  value="N"/>
		
		<div class="anonymous_board">
			<div class="copy_box">
				<h3>만사소통(萬事疏通)</h3>
				<h4>본 게시판은 익명 게시판으로 비밀이 철저히 보장됩니다 (글 수정, 삭제 불가)</h4>
				<h4>특정인의 비방, 비난, 욕설, 비속어 사용시 임의로 삭제됩니다</h4>
			</div>
	
			<div class="anonymous_box">
				<div class="view_wrap">
					<div class="view_box">
						<div class="view_title">
							<h5>${anonymousBbsMap.SJ}</h5>
							<ul class="view_list">
								<li><b>조회</b><span>${anonymousBbsMap.INQIRE_CO}</span></li>
								<li><b>작성일</b><span>${anonymousBbsMap.REGIST_DE}</span></li>
							</ul>
						</div>
						<div class="view_state">
							<button type="button" class="good" onclick="javascript:saveAnonymousBbsVote('1');">좋아요 <span>${anonymousBbsMap.LIKE_CNT}</span></button>
							<button type="button" class="bad" onclick="javascript:saveAnonymousBbsVote('2');">싫어요 <span>${anonymousBbsMap.HATE_CNT}</span></button>
						</div>
					</div>
					<% pageContext.setAttribute("newLineChar", "\n"); %>
					<div class="view_content">
						<p>${fn:replace(anonymousBbsMap.CN, newLineChar, "<br/>")}</p>
					</div>
					<div class="comment_wrap">
						<div class="comment_write">
							<label for="comment" class="blind">댓글을 입력해 주세요.</label>
							<input type="text" id="replyCn" name="replyCn"/>
							<button type="button" onclick="javascript:insertAnonymousBbsReply();"><i class="xi-pen"></i>댓글작성</button>
							
						</div>
						<div class="comment_list">
							<c:forEach var="anonymousBbsReplyList" items="${anonymousBbsReplyList}" varStatus="status">
								<div class="comment">
									<div class="comment_btn">
										<span class="date">${anonymousBbsReplyList.REGIST_DE}</span>
										<ul>
											<c:if test = "${REPARAM.discValue == anonymousBbsReplyList.REPLY_DISC_VALUE}">
											<li><button type="button" class="modity" onclick="javascript:onClickModify('${anonymousBbsReplyList.SN}', '${anonymousBbsReplyList.REPLY_SN}', this);">수정</button></li>
											<li><button type="button" class="remove" onclick="javascript:deleteAnonymousBbsReply('${anonymousBbsReplyList.SN}', '${anonymousBbsReplyList.REPLY_SN}');">삭제</button></li>
											</c:if>
											<li><button type="button" class="good" onclick="javascript:saveAnonymousBbsReplyVote('1', '${anonymousBbsReplyList.REPLY_VOTE_SE}','${anonymousBbsReplyList.SN}', '${anonymousBbsReplyList.REPLY_SN}');"><span class="blind">좋아요</span><span>${anonymousBbsReplyList.REPLY_LIKE_CNT}</span></button></li>
											<li><button type="button" class="bad" onclick="javascript:saveAnonymousBbsReplyVote('2', '${anonymousBbsReplyList.REPLY_VOTE_SE}','${anonymousBbsReplyList.SN}', '${anonymousBbsReplyList.REPLY_SN}');" ><span class="blind">싫어요</span><span>${anonymousBbsReplyList.REPLY_HATE_CNT}</span></button></li>
										</ul>
									</div>
									
									<p>${anonymousBbsReplyList.REPLY_CN}</p>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="btn_box">
						<a href="javascript:moveList();" class="btn_submit" role="button">목록</a>
					</div>
				</div>
			</div>
		</div>
		
	</form>
</body>
