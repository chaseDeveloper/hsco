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
	
		<!-- 제안 내역조회 --------->
		<div class="proposer_wrap">
			<section class="pro_detail_view">
				<form method="post" id="propsalSearchFrm">
					<div class="pro_search">
						<div class="search_sel">
							<div class="search_date">
								<label for="bgnDe" class="blind">접수일자</label>
								<input type="text" id="bgnDe" name="bgnDe" value="${REPARAM.bgnDe}" placeholder="접수일자">
								<span>~</span>
								<label for="endDe" class="blind">접수일자</label>
								<input type="text" id="endDe" name="endDe" value="${REPARAM.endDe}" placeholder="접수일자">
							</div>
							<div class="search_option">
								<label for="propseKndCode" class="blind">제안종류</label>
								<select id="propseKndCode" name="propseKndCode">
									<option value="">제안종류</option>
<c:forEach items="${propseSeCodeList}" var="list">
									<option value="${list.CODE}" <c:if test="${REPARAM.propseKndCode eq list.CODE}">selected="seleted"</c:if>>${list.CODE_NM}</option>
</c:forEach>
<%-- 									<option value="10" <c:if test="${REPARAM.propseKndCode eq '10'}">selected="seleted"</c:if>>아이디어 제안</option> --%>
<%-- 									<option value="20" <c:if test="${REPARAM.propseKndCode eq '20'}">selected="seleted"</c:if>>실시 제안</option> --%>
<%-- 									<option value="30" <c:if test="${REPARAM.propseKndCode eq '30'}">selected="seleted"</c:if>>공모 제안</option> --%>
								</select>
								<label for="reprsntPropseSlctnAt" class="blind">대표제안 선정여부</label>
								<select id="reprsntPropseSlctnAt" name="reprsntPropseSlctnAt">
									<option value="">대표제안 선정여부</option>
									<option value="1" <c:if test="${REPARAM.reprsntPropseSlctnAt eq '1'}">selected="seleted"</c:if>>O</option>
									<option value="0" <c:if test="${REPARAM.reprsntPropseSlctnAt eq '0'}">selected="seleted"</c:if>>X</option>
								</select>
							</div>
						</div>
						<div class="search_txt">
							<label for="searchCondition" class="blind">검색타입 선택</label>
							<select id="searchCondition" name="searchCondition">
								<option value="">선택</option>
								<option value="01" <c:if test="${REPARAM.searchCondition eq '01'}">selected="seleted"</c:if>>제목+내용</option>
								<option value="02" <c:if test="${REPARAM.searchCondition eq '03'}">selected="seleted"</c:if>>제안자</option>
								<option value="03" <c:if test="${REPARAM.searchCondition eq '03'}">selected="seleted"</c:if>>실무부서명</option>
							</select>
							<label for="searchKeyword" class="blind">검색어 입력</label>
							<input type="text" id="searchKeyword" name="searchKeyword" value="${REPARAM.searchKeyword}">
							<button type="button" class="search_btn" id="propsalSearchBtn"><i class="xi-search"></i><span class="blind">검색하기</span></button>
						</div>
					</div>
				</form>
				
				<div class="tbl_st_box th_tbl tbl_scroll">
					<table class="tbl_st">
						<caption>연번, 접수일, 제안내용, 제안자, 대표제안 선정여부, 실무부서가 있는 테이블</caption>
						<colgroup>
							<col style="width: 8%">
							<col style="width: 13%">
							<col style="width: 10%">
							<col style="width: auto">
							<col style="width: 8%">
							<col style="width: 10%">
							<col class="anony_state" style="width:7%">
							<col class="anony_state" style="width:7%">
							<col style="width: 15%">
						</colgroup>
						<thead>
							<tr>
								<th scope="col">연번	</th>
								<th scope="col">접수일</th>
								<th scope="col">제안종류</th>
								<th scope="col">제안제목</th>
								<th scope="col">제안자</th>
								<th scope="col">대표제안 선정여부</th>
								<th scope="col" class="anony_state good_col"><img src="/propose/images/ic_good.png" alt="좋아요 아이콘" /></th>
								<th scope="col" class="anony_state"><img src="/propose/images/ic_bad.png" alt="싫어요 아이콘" /></th>
								<th scope="col">실무부서</th>
							</tr>
						</thead>
						<tbody>
<c:choose>
	<c:when test="${not empty proposeList}">
		<c:forEach items="${proposeList}" var="list">
							<tr>
								<td><c:out value="${list.PROPSE_SN}"/></td>
								<td><c:out value="${list.RCEPT_DE}"/></td>
								<td><c:out value="${list.PROPSE_KND_CODE_NM}"/></td>
								<td title="${list.PROPSE_SJ_NM}">
									<a href="javascript:void(0);" class="txt_cut" data-userid="<c:out value="${list.USER_ID}"/>" data-propsesn="<c:out value="${list.PROPSE_SN}"/>"><c:out value="${list.PROPSE_SJ_NM}"/></a>
								</td>
								<td><c:out value="${list.USER_NM}"/></td>
								<td><c:out value="${list.REPRSNT_PROPSE_SLCTN_AT}"/></td>
								<td class="good"><span>${list.LIKE_CNT}</span></td>
								<td class="bad"><span>${list.HATE_CNT}</span></td>
								<td class="txt_cut" title="${list.PRCAFS_DEPT_NM}"><c:out value="${list.PRCAFS_DEPT_NM}"/></td>
							</tr>
		</c:forEach>
	</c:when>
	<c:otherwise>
							<tr>
								<td colspan="9">검색 결과가 존재하지 않습니다.</td>
							</tr>
	</c:otherwise>
</c:choose>
						</tbody>
					</table>
					
					<div class="btn_wrap">
						<a href="#a" id="propseWriteBtn">등록</a>
					</div>
					
					<div class="paging_wrap">
						<div class="pageview">
							<ui:pagination paginationInfo="${paginationInfo}" type="image" jsFunction="searchPorsal"/>
						</div>
					</div>
				</div>
			</section>
		</div>
		<!--------- 제안 내역조회 -->
	</div>
<form method="post" id="proposeDetailFrm">
	<input type="hidden" name="PROPSE_SN" value=""/>
	<input type="hidden" name="USER_ID" value=""/>
</form>
<script type="text/javascript" src="/docs/jquery/jquery-1.12.4.js"></script>
<script type="text/javascript" src="/docs/jquery/jquery-ui-1.12.1.js"></script>
<script>
	<%-- 지정한 문자열이 yyyyMMdd 패턴의 날짜 데이터인지 여부를 반환합니다. --%>
	function isDate(dateString) {
		var regex = /^[0-9]{8}$/g;
		if (!dateString || !regex.test(dateString)) {
			return false;
		}

		var year  = parseInt(dateString.substr(0, 4), 10);
		var month = parseInt(dateString.substr(4, 2), 10);
		var day   = parseInt(dateString.substr(6, 2), 10);

		if (year < 1900 || year > 2999) {
			return false;
		}

		if (month < 1 || month > 12) {
			return false;
		}

		var lastdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			lastdays[1] = 29;
		}

		return (day >= 1 && day <= lastdays[month - 1]);
	}
	
	<%-- 검색 --%>
	function searchPorsal(pageIndex) {
		var $searchFrm = $('#propsalSearchFrm');
		var bgnDe = $('#bgnDe').val().replace(/-/gi, "");
		var endDe = $('#endDe').val().replace(/-/gi, "");
		var propseKndCode = $('#propseKndCode option:selected').val();
		var reprsntPropseSlctnAt = $('#reprsntPropseSlctnAt option:selected').val();
		
		//접수일자 기간 확인
		if (!isDate(bgnDe) || !isDate(endDe)) {
			alert('접수일자 검색 기간의 날짜 형식이 올바르지 않습니다.\n캘린더를 이용하여 날짜를 선택해주세요.');
			return;
		}
		if (bgnDe > endDe) {
			alert('접수일자 검색 기간의 시작일자가 종료일자보다 작을 수 없습니다.');
			return;
		}
		
		$searchFrm.append($('<input/>', {type:'hidden', name:'pageIndex', value:pageIndex}));
		$searchFrm.attr('action', '<c:url value="/hsco/com/sym/bbs/BBS020101/selectProposalBbsList.do"/>').submit();
	}
	
	<%-- 상세조회 --%>
	function selectProposeDetailView(obj) {
		$('#proposeDetailFrm input[name="PROPSE_SN"]').val($(obj).data('propsesn'));
		$('#proposeDetailFrm input[name="USER_ID"]').val($(obj).data('userid'));
		
		$('#proposeDetailFrm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS020101/selectProposeBbsDetailView.do"/>').submit();
	}
	
	$(function() {
		$('#propsalSearchBtn').click(function() {
			searchPorsal(1);
		});
		
		$('.proposal_wrap table tr').on('click', 'a', function() {
			selectProposeDetailView(this);
		});
		
		$('#propseWriteBtn').click(function() {
			$('#proposeDetailFrm').attr('action', '<c:url value="/hsco/com/sym/bbs/BBS020101/selectProposeBbsWriteView.do"/>').submit();
		});
		
		$("#bgnDe").datepicker({
			changeMonth: true,
			changeYear: true,
			minDate: '-100y',
			nextText: '다음 달',
			prevText: '이전 달',
			showButtonPanel: true,
			currentText: '오늘 날짜' ,
			closeText: '닫기', 
			dateFormat: "yy-mm-dd",
			showMonthAfterYear: true ,
			dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
		});

		$("#endDe").datepicker({
			changeMonth: true,
			changeYear: true,
			minDate: '-100y',
			nextText: '다음 달',
			prevText: '이전 달',
			showButtonPanel: true,
			currentText: '오늘 날짜' ,
			closeText: '닫기', 
			dateFormat: "yy-mm-dd",
			showMonthAfterYear: true ,
			dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
		});
	});
</script>
</body>
</html>