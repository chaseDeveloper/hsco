<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1">
	<meta name="format-detection" content="telephone=no">

	<link href="/propose/css/vendors.min.css" rel="stylesheet">
	<link href="/propose/css/proposal.css" rel="stylesheet">

	<title>화성도시공사 - 아이디어 &middot; 실시 &middot; 공모</title>
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	
</head>
<body>
	<div class="proposal_wrap">
		<!-- 제안서 타이틀 -------->
		<div class="proposal_title">
			<div class="proposal_tit">
				<h2><span>아이디어 &middot; 실시 &middot; 공모</span><b>제안서</b></h2>
				<img src="/propose/images/proposal/title_img.png" alt="아이디어 비쥬얼 이미지">
			</div>
		</div>
		<!---------- 제안서 타이틀 -->
	
		<!-- 제안 상세 -------->
		<div class="proposer_wrap">
	
			<!-- 제안 상세 출력 --------->
			<section class="pro_detail_view">
	
				<p class="pro_tit">제안자 정보</p>
				<div class="tbl_st_box th_tbl">
					<table class="tbl_st">
						<caption>성명, 소속, 직급(직위), 기여도, 표창상금수여 및 특허 등 출원 등록 여부가 있는 테이블</caption>
						<colgroup>
							<col style="width: 20%">
							<col style="width: auto">
							<col style="width: 20%">
							<col style="width: auto">
						</colgroup>
						<tbody>
							<tr>
								<th>성명</th>
								<td><c:out value="${proposeDetail.USER_NM}"/></td>
								<th>소속</th>
								<td><c:out value="${proposeDetail.DEPT_NM}"/></td>
							</tr>
							<tr>
								<th>직급(직위)</th>
								<td><c:out value="${proposeDetail.OFCPS_SE_NM}"/></td>
								<th>기여도</th>
								<td><c:out value="${proposeDetail.CNTRBT_RATE}"/>%</td>
							</tr>
							<tr>
								<th colspan="1">표창&middot;상금 수여 및 특허 등 출원&middot;등록 년도</th>
								<td colspan="3"><c:out value="${proposeDetail.SAMENSS_PROPSE_REGIST_YEAR}"/></td>
							</tr>
						</tbody>
					</table>
				</div>
	
<c:if test="${not empty copertnPropseList}">
				<p class="pro_tit">공동 제안자 정보</p>
	<c:forEach items="${copertnPropseList}" var="list">
				<div class="tbl_st_box th_tbl">
					<table class="tbl_st">
						<caption>성명, 소속, 직급(직위), 기여도가 있는 테이블</caption>
						<colgroup>
							<col style="width: 20%">
							<col style="width: auto">
							<col style="width: 20%">
							<col style="width: auto">
						</colgroup>
						<tbody>
							<tr>
								<th>성명</th>
								<td><c:out value="${list.USER_NM}"/></td>
								<th>소속</th>
								<td><c:out value="${list.DEPT_NM}"/></td>
							</tr>
							<tr>
								<th>직급(직위)</th>
								<td><c:out value="${list.OFCPS_SE_NM}"/></td>
								<th>기여도</th>
								<td><c:out value="${list.CNTRBT_RATE}"/><c:if test="${not empty list.CNTRBT_RATE}">%</c:if></td>
							</tr>
						</tbody>
					</table>
				</div>
	</c:forEach>
</c:if>
				<p class="pro_tit">첨부파일</p>
				<div class="file_box">
<c:if test="${not empty proposeDetail.FILE_SN}">
					<c:import url="/hsco/cmm/fms/selectFileInfs.do" >
						<c:param name="param_atchFileId" value="${proposeDetail.FILE_SN}" />
					</c:import>
</c:if>
				</div>
	
				<p class="pro_tit">제안 정보</p>
				<div class="tbl_st_box th_tbl">
					<table class="tbl_st">
						<caption>제안제목, 제안종류, 개요, 현황 및 문제점, 개선방안, 기대효과, 조치사항이 있는 테이블</caption>
						<colgroup>
							<col style="width: 20%">
							<col style="width: auto">
						</colgroup>
						<tbody>
							<tr>
								<th>제안제목</th>
								<td><c:out value="${proposeDetail.PROPSE_SJ_NM}"/></td>
							</tr>
							<tr>
								<th>제안종류</th>
								<td><c:out value="${proposeDetail.PROPSE_KND_CODE_NM}"/></td>
							</tr>
							<tr>
								<th>개요</th>
								<td><c:out value="${proposeDetail.PROPSE_SUMRY_CN}"/></td>
							</tr>
							<tr>
								<th>현황 및 문제점</th>
								<td><c:out value="${proposeDetail.PROPSE_STUS_CN}"/></td>
							</tr>
							<tr>
								<th>개선방안</th>
								<td><c:out value="${proposeDetail.PROPSE_METHOD_CN}"/></td>
							</tr>
							<tr>
								<th>기대효과</th>
								<td><c:out value="${proposeDetail.EXPC_EFFECT_CN}"/></td>
							</tr>
							<tr>
								<th>조치사항</th>
								<td>
									<c:if test="${proposeDetail.RELATE_REGLTN_REFORM_AT eq '1'}"><p>관련규정 개정</p></c:if>
									<c:if test="${proposeDetail.HNF_ADIT_SPORT_AT eq '1'}"><p>인력추가 지원</p></c:if>
									<c:if test="${proposeDetail.BUDGET_ENSURE_SPORT_AT eq '1'}"><p>예산확보 지원</p></c:if>
									<c:if test="${proposeDetail.JOB_PROCS_MDAT_AT eq '1'}"><p>업무프로세스 조정</p></c:if>
									<c:if test="${proposeDetail.RELATE_INSTT_DSCSS_AT eq '1'}"><p>관련기관 협의</p></c:if>
									<c:if test="${proposeDetail.ETC_AT eq '1'}"><p>기타</p></c:if>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!--------- 제안 상세 출력 -->
	
			<div class="view_state">
				<button type="button" id="likeBtn" class="good <c:if test="${proposeDetail.VOTE_SE eq '1'}">active</c:if>" onclick="javascript:saveProposalBbsVote('1');">좋아요 <span><c:out value="${proposeDetail.LIKE_CNT}"/></span></button>
				<button type="button" id="hateBtn" class="bad <c:if test="${proposeDetail.VOTE_SE eq '2'}">active</c:if>" onclick="javascript:saveProposalBbsVote('2');">싫어요 <span><c:out value="${proposeDetail.HATE_CNT}"/></span></button>
			</div>
			
			<form method="post" id="proposeReplyFrm" name="proposeReplyFrm">
				<input type="hidden" name="PROPSE_SN" id="PROPSE_SN" value="<c:out value="${proposeDetail.PROPSE_SN}"/>"/>
				<input type="hidden" name="VOTE_SE" id="VOTE_SE" value="<c:out value="${proposeDetail.VOTE_SE}"/>"/>
		
				<div class="comment_wrap">
					<div class="comment_write">
						<label for="comment" class="blind">댓글을 입력해 주세요.</label>
						<input type="text" id="replyCn" maxlength="1000"/>
						<button type="button" onclick="javascript:insertProposalBbsReply();"><i class="xi-pen"></i>댓글작성</button>
					</div>
	<c:if test="${not empty replyList}">
					<div class="comment_list">
		<c:forEach items="${replyList}" var="list">
						<div class="comment">
							<div class="comment_btn">
								<span class="date"><c:out value="${list.REGIST_DE}"/></span>
								<ul>
			<c:if test="${list.USER_ID eq sessionScope.V_USER_ID}">
									<li><button type="button" class="modity" onclick="javascript:onClickModify('${list.PROPSE_SN}', '${list.REPLY_SN}', this);">수정</button></li>
									<li><button type="button" class="remove" onclick="javascript:deleteProposalBbsReply('${list.PROPSE_SN}', '${list.REPLY_SN}');">삭제</button></li>
			</c:if>
									<li><button type="button" class="good <c:if test="${list.REPLY_VOTE_SE eq '1'}">active</c:if>" onclick="javascript:saveProposalBbsReplyVote('1', '${list.REPLY_VOTE_SE}','${list.PROPSE_SN}', '${list.REPLY_SN}');"><span class="blind">좋아요</span><span><c:out value="${list.REPLY_LIKE_CNT}"/></span></button></li>
									<li><button type="button" class="bad <c:if test="${list.REPLY_VOTE_SE eq '2'}">active</c:if>" onclick="javascript:saveProposalBbsReplyVote('2', '${list.REPLY_VOTE_SE}','${list.PROPSE_SN}', '${list.REPLY_SN}');"><span class="blind">싫어요</span><span><c:out value="${list.REPLY_HATE_CNT}"/></span></button></li>
								</ul>
							</div>
							<p><c:out value="${list.REPLY_CN}"/></p>
						</div>
		</c:forEach>
					</div>
	</c:if>
				</div>
			</form>
	
			<div class="btn_wrap">
				<c:if test="${proposeDetail.DEL_AUTH_FLAG eq '1'}">
				<button type="button" id="propseDeleteBtn">삭제</button>
				</c:if>
				<button type="button" id="propseListBtn">확인</button>
			</div>
		</div>
		<!---------- 제안 상세 -->
	</div>
	
<form method="post" id="proposeListFrm">
	<input type="hidden" name="bgnDe" value="<c:out value="${proposeDetail.bgnDe}"/>"/>
	<input type="hidden" name="endDe" value="<c:out value="${proposeDetail.endDe}"/>"/>
	<input type="hidden" name="propseKndCode" value="<c:out value="${proposeDetail.propseKndCode}"/>"/>
	<input type="hidden" name="reprsntPropseSlctnAt" value="<c:out value="${proposeDetail.reprsntPropseSlctnAt}"/>"/>
	<input type="hidden" name="searchCondition" value="<c:out value="${proposeDetail.searchCondition}"/>"/>
	<input type="hidden" name="searchKeyword" value="<c:out value="${proposeDetail.searchKeyword}"/>"/>
	<input type="hidden" name="pageIndex" value="<c:out value="${proposeDetail.pageIndex}"/>"/>
</form>
<script type="text/javascript" src="/docs/jquery/jquery-1.12.4.js"></script>
<script type="text/javascript" src="/docs/jquery/jquery-ui-1.12.1.js"></script>


<script>
	<%-- 목록 조회 --%>
	function selectProposelist() {
		$('#proposeListFrm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS020101/selectProposalBbsList.do"/>').submit();
	}
	
	<%-- 제안공모 정보 삭제 --%>
	function deletePropse(){
		if(confirm("해당 제안공모 정보를 삭제하시겠습니까?")){
			$('#proposeReplyFrm').attr('action', '/hsco/com/sym/bbs/BBS020101/deletePropose.do').submit();
		}
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
	function saveProposalBbsVote(voteSe){
		var GVoteSe = $('#proposeReplyFrm input[name="VOTE_SE"]').val();
		if(GVoteSe == "1" || GVoteSe == "2"){ //기투표한 상태
			if(GVoteSe == voteSe){  //취소
				if(confirm("취소 하시겠습니까?")){
					var formURL = "<c:url value='/hsco/com/sym/bbs/BBS020101/deleteProposeBbsVote.do'/>";
					$.ajax({
						type: "POST",
						url: formURL,
						data: {
							 PROPSE_SN : $('#PROPSE_SN').val()
							,VOTE_SE : ''
						},
						dataType: "JSON",
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						async: true,
						success: function (data) {
							if(data['result'] == "Y"){
								$('.view_state > .good span').text(data['LIKE_CNT']);
								$('.view_state > .bad span').text(data['HATE_CNT']);
								$("#VOTE_SE").val("");
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
			var formURL = "<c:url value='/hsco/com/sym/bbs/BBS020101/insertProposeBbsVote.do'/>";
			$.ajax({
				type: "POST",
				url: formURL,
				data: {
					 PROPSE_SN : $('#PROPSE_SN').val()
					,VOTE_SE : voteSe
				},
				dataType: "JSON",
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				async: true,
				success: function (data) {
					if(data['result'] == "Y"){
						$('.view_state > .good span').text(data['LIKE_CNT']);
						$('.view_state > .bad span').text(data['HATE_CNT']);
						$("#VOTE_SE").val(voteSe);
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
	function saveProposalBbsReplyVote(voteSe, orgVoteSe, sn, replySn){
		if(orgVoteSe == "1" || orgVoteSe == "2"){ //기투표한 상태
			if(orgVoteSe == voteSe){  //취소
				if(confirm("취소 하시겠습니까?")){
					var formURL = "<c:url value='/hsco/com/sym/bbs/BBS020101/deleteProposeBbsReplyVote.do'/>";
					$.ajax({
						type: "POST",
						url: formURL,
						data: {"PROPSE_SN": sn,
							   "REPLY_SN" : replySn},
						dataType: "JSON",
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						async: true,
						success: function (data) {
							if(data['result'] == "Y"){
								//익스플로러 환경 location.reload 팝업 문제로인한 임시수정
								$('#proposeReplyFrm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS020101/selectProposeBbsDetailView.do"/>').submit();
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
			var formURL = "<c:url value='/hsco/com/sym/bbs/BBS020101/insertProposeBbsReplyVote.do'/>";		
			$.ajax({
				type: "POST",
				url: formURL,
				data: {"PROPSE_SN": sn,
					   "REPLY_SN" : replySn,
					   "VOTE_SE" : voteSe},
				dataType: "JSON",
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				async: true,
				success: function (data) {
					if(data['result'] == "Y"){
						//익스플로러 환경 location.reload 팝업 문제로인한 임시수정
						$('#proposeReplyFrm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS020101/selectProposeBbsDetailView.do"/>').submit();
					}
				},
				error:function(response, textStatus, errorThrown){
					alert("ajax 통신실패");
				}
			});
		}
	}
	//[댓글] 등록
	function insertProposalBbsReply(){
		
		if ($("#replyCn").val() == "") {
			alert("댓글 내용을 입력하세요.");
			$("#replyCn").focus();
			return false;
		}
		if(confirm("등록 하시겠습니까?")){
			var formURL = "<c:url value='/hsco/com/sym/bbs/BBS020101/insertProposeBbsReply.do'/>";
			var formData = $('#frm').serialize();
			$.ajax({
				type: "POST",
				url: formURL,
				data: {
					 PROPSE_SN : $('#PROPSE_SN').val()
					,CN : $('#replyCn').val()
				},
				dataType: "JSON",
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				async: true,
				success: function (data) {
					if(data['result'] == "Y"){
						//익스플로러 환경 location.reload 팝업 문제로인한 임시수정
						$('#proposeReplyFrm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS020101/selectProposeBbsDetailView.do"/>').submit();
					}
				},
				error:function(response, textStatus, errorThrown){
					alert("ajax 통신실패");
				}
			});
		}
	}
	
	//[댓글] 삭제
	function deleteProposalBbsReply(sn, replySn){
		if(confirm("삭제 하시겠습니까?")){
			var formURL = "<c:url value='/hsco/com/sym/bbs/BBS020101/deleteProposeBbsReply.do'/>";
			$.ajax({
				type: "POST",
				url: formURL,
				data: {"PROPSE_SN": sn,
					   "REPLY_SN" : replySn},
				dataType: "JSON",
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				async: true,
				success: function (data) {
					if(data['result'] == "Y"){
						//익스플로러 환경 location.reload 팝업 문제로인한 임시수정
						$('#proposeReplyFrm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS020101/selectProposeBbsDetailView.do"/>').submit();
					}
				},
				error:function(response, textStatus, errorThrown){
					alert("ajax 통신실패");
				}
			});
		}
	}

	//[댓글] 수정
	function modifyProposalBbsReply(sn, replySn, obj){
		var cn = $(obj).parents(".comment_btn").siblings('p').children('textarea').val();
		if(confirm("수정 하시겠습니까?")){
			var formURL = "<c:url value='/hsco/com/sym/bbs/BBS020101/updateProposeBbsReply.do'/>";
			$.ajax({
				type: "POST",
				url: formURL,
				data: {"PROPSE_SN": sn,
					   "REPLY_SN" : replySn,
					   "CN" : cn},
				dataType: "JSON",
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				async: true,
				success: function (data) {
					if(data['result'] == "Y"){
						//익스플로러 환경 location.reload 팝업 문제로인한 임시수정
						$('#proposeReplyFrm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS020101/selectProposeBbsDetailView.do"/>').submit();
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
		var button1 = $("<button/>", {"class" : "save", text:"저장", "onClick" : "modifyProposalBbsReply('"+ sn + "', '" + replySn + "', this)"});
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
		var button2 = $("<button/>", {"class" : "remove", text:"삭제", "onClick" : "deleteProposalBbsReply('"+ sn + "', '" + replySn + "')"});
		
		li1.append(button1);
		li2.append(button2);
		$(obj).parents(".comment_btn").children('ul').prepend(li1, li2);
		
		//기존버튼 삭제
		$(obj).parents(".comment_btn").children("ul").children("li").eq(2).remove(); 
		$(obj).parents(".comment_btn").children("ul").children("li").eq(2).remove();
		
	}
	
	$(function() {
		$('#propseListBtn').click(function() {
			selectProposelist();
		});
	});
	
	$(function() {
		$('#propseDeleteBtn').click(function() {
			deletePropse();
		});
	});
</script>
</body>
</html>