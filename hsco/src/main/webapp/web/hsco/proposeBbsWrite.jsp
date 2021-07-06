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
	<script type="text/javascript" src="<c:url value='/web/hsco/etc/js/EgovMultiFile.js'/>" ></script>
	
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

	<!-- 제안 신청 폼 -------->
	<form method="post" id="propsalRequestFrm" name="propsalRequestFrm" enctype="multipart/form-data">
		<input type="hidden" name="posblAtchFileNumber" value="1" /> <!-- 최대 등록가능파일숫자 -->
	<div class="proposer_wrap">
		<!-- 제안자 정보 ---------->
		<section class="proposer_box">
			<p class="pro_tit bgtit">제안자 정보</p>
			<ul class="info_box">
				<li>
					<label for="USER_NM" class="blind">이름</label>
					<input type="name" id="USER_NM" name="USER_NM" value="${userInfo.USER_NM}" disabled="disabled" readonly="readonly">
				</li>
				<li>
					<label for="DEPT_NM" class="blind">부서</label>
					<input type="text" id="DEPT_NM" name="DEPT_NM" value="${userInfo.DEPT_NM}" disabled="disabled" readonly="readonly">
				</li>
				<li>
					<label for="OFCPS_SE_NM" class="blind">직급</label>
					<input type="text" id="OFCPS_SE_NM" name="OFCPS_SE_NM" value="${userInfo.OFCPS_SE_NM}" disabled="disabled" readonly="readonly">
				</li>
				<li>
					<label for="CNTRBT_RATE" class="blind">기여도(%)</label>
					<input type="tel" id="CNTRBT_RATE" name="CNTRBT_RATE" placeholder="기여도(숫자만 입력)" maxlength="3" data-reqmsg="제안자 기여도">
				</li>
			</ul>

			<p class="pro_tit_sub">&#8251; 제안과 동일내용으로 표창&middot;상금 수여 및 특허 등 출원&middot;등록 년도</p>
			<label for="SAMENSS_PROPSE_REGIST_YEAR" class="blind">년도</label>
			<input type="tel" name="SAMENSS_PROPSE_REGIST_YEAR" id="SAMENSS_PROPSE_REGIST_YEAR" placeholder="년" maxlength="4">

			<p class="pro_tit">공동제안자 정보</p>
			<div class="button_box add_btn">
				<button type="button" id="addCopertnBtn"><i class="xi-plus-min"></i></button>
				<button type="button" id="delCopertnBtn"><i class="xi-minus-min"></i></button>
			</div>
			
			<div id="copertnList">
				<ul class="info_box">
					<li class="search_name">
						<label for="coperUserNm1" class="blind">이름</label>
						<input type="name" id="coperUserNm1" name="coperUserNm1" placeholder="성명" disabled="disabled" readonly="readonly">
						<input type="hidden" id="coperUserId1" name="COPERTN_USER_ID">
						<button type="button" class="search_copertn" data-coperidx="1"><i class="xi-search"></i><span class="blind">제안자 검색</span></button>
					</li>
					<li>
						<label for="coperDeptNm1" class="blind">부서</label>
						<input type="text" id="coperDeptNm1" name="coperDeptNm1" placeholder="부서" disabled="disabled" readonly="readonly">
					</li>
					<li>
						<label for="coperofcpsSeNm1" class="blind">직급</label>
						<input type="text" id="coperofcpsSeNm1" name="coperofcpsSeNm1" placeholder="직급" disabled="disabled" readonly="readonly">
					</li>
					<li>
						<label for="cntrbtRate1" class="blind">기여도(%)</label>
						<input type="tel" id="cntrbtRate1" name="COPERTN_CNTRBT_RATE" placeholder="기여도(숫자만 입력)" maxlength="3" data-reqmsg="공동제안자 기여도">
					</li>
				</ul>
			</div>

			<p class="pro_tit">첨부파일</p>
			<%-- 
			<div class="button_box file_btn">
				<label for="egovComFileUploader" class="file_btn_label"><img src="/proposal/images/proposal/ic_link.png" alt="파일아이콘">파일첨부</label>
				
			</div>
			--%>
			<div class="file_box">
				<!-- 파일 첨부 전 ------->
				<p class="file_prev">제안내용 설명서, 예산절감 및 국고&middot;조세수입 증대액 산출내역서, 실시제안의 경우 개선 아이디어를 담당업무에 적용한 근거자료, 기타 참고자료를 <b style="color:#004f9b">압축하여 첨부</b>해 주세요.</p>
				<!------- 파일 첨부 전 -->

				<!-- 파일 첨부 전 ------->
				
				<!-- 파일 첨부 후 ------->
				<%-- 
				<input name="file_1" class="" id="egovComFileUploader" type="file"/>
				<div id="egovComFileList"></div>
				--%>
				
				<div class="filebox">
					<input class="form-file" id="file_route" type="text" value="" disabled="disabled">
					<label for="ex_filename"><img src="/propose/images/proposal/ic_link.png" alt="파일아이콘">파일첨부</label> 
					<input type="file" id="ex_filename" name="files" class="upload-hidden" onchange="javascript:document.getElementById('file_route').value=this.value">
				</div>
				
				
			</div>
		</section>
		<!--------- 제안자 정보 -->

		<!-- 작성요령 확인하기 --------->
		<section>
			<button type="button" class="txt_down_btn"><p>작성요령 확인하기 <span><i class="xi-angle-down"></i></span></p></button>
			<div class="proposal_txt">
				<p><b>① 제안제목</b>：제안내용을 함축적으로 표현</p>
				<p><b>② 제안종류</b>：아이디어 제안, 실시제안 및 공모제안 중 해당되는 사항을 기재</p>
				<p><b>③ 개요</b>：전체 제안내용을 쉽게 알 수 있도록 요약하여 기술</p>
				<p><b>④ 현황 및 문제점</b>：현행제도 등의 현황 및 문제점을 구체적으로 기술</p>
				<p><b>⑤ 개선방안(개선내용)</b>：아이디어&middot;공모제안&rarr;개선방안, 실시제안&rarr;개선내용 기술</p>
				<p class="txt_sub">- 당해 제안의 내용으로 문제 점을 해결하는 방법 및 해결한 내용을 기술</p>
				<p><b>⑥ 기대효과(개선성과)</b>：아이디어&middot;공모제안&rarr;기대효과, 실시제안&rarr;개선성과 기술</p>
				<p class="txt_sub">- 아이디어제안은 제안의 실시로 얻을 수 있는 효과를, 실시제안은 개선성과가 나타난 일자와 그 성과내용을 상세히 기재하되, 그 효과가 금액으로 표시될 수 있는 경우는 그 금액을 기재</p>
				<p><b>⑦ 조치사항</b>：당해 제안을 실시할 때 조치할(한) 사항을 예시에서 선택하고, 기타사항이 있을 경우에는 그 내용을 기술</p>
			</div>
		</section>
		<!--------- 작성요령 확인하기 -->

		<!-- 제안 상세 입력폼 --------->
		<section class="pro_detail">
			<p class="pro_tit">제안제목</p>
			<label for="PROPSE_SJ_NM" class="blind">제안제목</label>
			<input type="text" name="PROPSE_SJ_NM" id="PROPSE_SJ_NM" class="in_required" maxlength="60" data-reqmsg="제안제목">

			<p class="pro_tit">제안종류</p>
			<ul class="check_box" id="propsalKndChk">
<c:forEach items="${propseSeCodeList}" var="list">
				<li>
					<input type="radio" name="PROPSE_KND_CODE" id="propseSeCode_${list.CODE}" value="${list.CODE}">
					<label for="propseSeCode_${list.CODE}"><span><i class="xi-check"></i>${list.CODE_NM}</span></label>
				</li>
</c:forEach>
			</ul>

			<p class="pro_tit"><label for="pro_txt01">개요</label></p>
			<textarea id="pro_txt01" name="PROPSE_SUMRY_CN" rows="5" class="in_required" maxlength="1300" data-reqmsg="개요"></textarea>

			<p class="pro_tit"><label for="pro_txt02">현황 및 문제점</label></p>
			<textarea id="pro_txt02" name="PROPSE_STUS_CN" rows="5" class="in_required" maxlength="1300" data-reqmsg="현황 및 문제점"></textarea>

			<p class="pro_tit"><label for="pro_txt03">개선방안</label></p>
			<textarea id="pro_txt03" name="PROPSE_METHOD_CN" rows="5" class="in_required" maxlength="1300" data-reqmsg="개선방안"></textarea>

			<p class="pro_tit"><label for="pro_txt04">기대효과</label></p>
			<textarea id="pro_txt04" name="EXPC_EFFECT_CN" rows="5" class="in_required" maxlength="1300" data-reqmsg="기대효과"></textarea>

			<p class="pro_tit">조치사항</p>
			<ul class="check_box" id="propsalManageChk">
				<li>
					<input type="checkbox" name="RELATE_REGLTN_REFORM_AT" id="RELATE_REGLTN_REFORM_AT" value="1">
					<label for="RELATE_REGLTN_REFORM_AT"><span><i class="xi-check"></i>관련규정 개정</span></label>
				</li>
				<li>
					<input type="checkbox" name="HNF_ADIT_SPORT_AT" id="HNF_ADIT_SPORT_AT" value="1">
					<label for="HNF_ADIT_SPORT_AT"><span><i class="xi-check"></i>인력추가 지원</span></label>
				</li>
				<li>
					<input type="checkbox" name="BUDGET_ENSURE_SPORT_AT" id="BUDGET_ENSURE_SPORT_AT" value="1">
					<label for="BUDGET_ENSURE_SPORT_AT"><span><i class="xi-check"></i>예산확보 지원</span></label>
				</li>
				<li>
					<input type="checkbox" name="JOB_PROCS_MDAT_AT" id="JOB_PROCS_MDAT_AT" value="1">
					<label for="JOB_PROCS_MDAT_AT"><span><i class="xi-check"></i>업무프로세스 조정</span></label>
				</li>
				<li>
					<input type="checkbox" name="RELATE_INSTT_DSCSS_AT" id="RELATE_INSTT_DSCSS_AT" value="1">
					<label for="RELATE_INSTT_DSCSS_AT"><span><i class="xi-check"></i>관련기관 협의</span></label>
				</li>
				<li>
					<input type="checkbox" name="ETC_AT" id="ETC_AT" value="1">
					<label for="ETC_AT"><span><i class="xi-check"></i>기타</span></label>
				</li>
			</ul>

			<label for="ETC_CN" class="blind">조치사항 기타 내용</label>
			<input type="text" name="ETC_CN" id="ETC_CN" placeholder="기타 내용 입력" data-reqmsg="조치사항 기타 상세내용" disabled="disabled" readonly="readonly">
		</section>
		<!--------- 제안 상세 입력폼 -->

		<div class="btn_wrap">
			<button type="button" id="listBtn">목록</a>
			<button type="button" id="requestBtn">신청하기</button>
		</div>

	</div>
	</form>
	<!---------- 제안 신청 폼 -->


	<!-- 검색 레이어 팝업 --------->
	<div class="search_info_wrap">
		<div class="search_info_tbl">
			<div class="search_info_cell">
				<div class="search_info_box">

					<!-- 팝업 타이틀 ------->
					<div class="search_info_tit">
						<p>검색</p>
						<button type="button" class="close_btn"><i class="xi-close"></i><span class="blind">팝업닫기</span></button>
					</div>
					<!------- 팝업 타이틀 -->

					<!-- 검색 ------------->
					<div class="search_info_content">
						<div class="search_form" id="copertnSearchFrm">
							<label for="search_cate" class="blind">검색 카테고리</label>
							<select name="searchCondition" id="searchCondition">
								<option value="01">이름</option>
								<option value="02">부서</option>
							</select>
							<label for="search_txt" class="blind">검색어입력</label>
							<input type="text" id="searchKeyword" name="searchKeyword">
							<button type="button" class="search_btn" id="copertnSearchBtn"><i class="xi-search"></i><span class="blind">검색</span></button>
						</div>
					</div>
					<!------------- 검색 -->

					<!-- result ------------->
					<div class="search_info_list" style="overflow-y: auto;height: 300px;">
						<div class="tbl_st_box">
							<table class="tbl_st" id="searchUserListTbl" data-coperidx="">
								<caption>이름, 부서, 직급이 있는 테이블</caption>
								<colgroup>
									<col style="width: 30">
									<col style="width: auto">
									<col style="width: 30%">
								</colgroup>
								<thead class="blind">
									<tr>
										<th scope="col">이름</th>
										<th scope="col">부서</th>
										<th scope="col">직급</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colspan="3">검색 결과가 존재하지 않습니다.</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!------------- result -->
				</div>
			</div>
		</div>
	</div>
	<!---------- 검색 레이어 팝업 -->
</div>

<script type="text/html" id="addCopertn">
<ul class="info_box">
	<li class="search_name">
		<label for="coperUserNm{idx}" class="blind">이름</label>
		<input type="name" id="coperUserNm{idx}" name="coperUserNm{idx}" placeholder="성명" disabled="disabled" readonly="readonly">
		<input type="hidden" id="coperUserId{idx}" name="COPERTN_USER_ID" class="in_required">
		<button type="button" class="search_copertn" data-coperidx="{idx}"><i class="xi-search"></i><span class="blind">제안자 검색</span></button>
	</li>
	<li>
		<label for="coperDeptNm{idx}" class="blind">부서</label>
		<input type="text" id="coperDeptNm{idx}" name="coperDeptNm{idx}" placeholder="부서" disabled="disabled" readonly="readonly">
	</li>
	<li>
		<label for="coperofcpsSeNm{idx}" class="blind">직급</label>
		<input type="text" id="coperofcpsSeNm{idx}" name="coperofcpsSeNm{idx}" placeholder="직급" disabled="disabled" readonly="readonly">
	</li>
	<li>
		<label for="cntrbtRate{idx}" class="blind">기여도(%)</label>
		<input type="tel" id="cntrbtRate{idx}" name="COPERTN_CNTRBT_RATE" placeholder="기여도(숫자만 입력)" data-reqmsg="공동제안자 기여도" onkeyup="checkNumber($(this))">
	</li>
</ul>
</script>

<script type="text/javascript" src="/docs/jquery/jquery-1.12.4.js"></script>
<script type="text/javascript" src="/docs/jquery/jquery-ui-1.12.1.js"></script>
<script>
	<%-- 입력값이 null에 해당하는 경우 모두 체크 --%>
	function gfn_isNull(val) {
		if (new String(val).valueOf() == "undefined") {
			return true;
		}
		if (val == null) {
			return true;
		}
		if (("x" + val == "xNaN") && (new String(val.length).valueOf() == "undefined")) {
			return true;
		}
		if (val.length == 0) {
			return true;
		}
	
		return false;
	}
	
	<%-- input value 숫자만 입력되도록 --%>
	function checkNumber(iptComp){
		if (!iptComp) {
			throw "유효성을 검사할 컨트롤을 지정해주십시오."; 
		}
		
		e = event || window.event;
		
		if ((48 <= e.keyCode && e.keyCode <=57) || (96 <= e.keyCode && e.keyCode <=105)) {
			
		} else {
			eval(iptComp).val(eval(iptComp).val().replace(/[^0-9]/g, ""));
		}
	};
	
	<%-- 공동제안자 추가 --%>
	function addCopertn() {
		var htmls = $("#addCopertn").html();
		var index = $('#copertnList ul').length + 1;
		
		htmls = htmls.split('{idx}').join(index);
		$('#copertnList').append(htmls);
	};
	
	<%-- 등록 --%>
	function savePropse() {
		<%-- 필수 입력정보 빈값체크 --%>
		if(gfn_isNull($('#ex_filename').val())){
			alert("필수 입력값을 확인해주세요 [첨부파일]");
			flag = false;
			$('#ex_filename').focus();
			return false;
		}
		var flag = true;
		$('.in_required').each(function() {
			if ( gfn_isNull(this.value) ) {
				alert("[" + $(this).attr('data-reqmsg') + "]은 필수 입력값입니다.");
				flag = false;
				$(this).focus();
				return false;
			}
		});
		if (flag == false) {
			return;
		}
		
		if ($('#propsalKndChk input[name="PROPSE_KND_CODE"]:checked').length == 0) {
			alert("필수 입력값을 확인해주세요 [제안종류]");
			$('#propsalKndChk label:first').trigger('blur');
			return;
		}
		
		if ($('#propsalManageChk input[type="checkbox"]:checked').length == 0) {
			alert("필수 입력값을 확인해주세요 [조치사항]");
			$('#propsalManageChk radio:first').focus();
			return;
		}
		
		if ($('input[name="COPERTN_USER_ID"]').length == 1 && gfn_isNull($('input[name="COPERTN_USER_ID"]').val())) {
			$('input[name="COPERTN_USER_ID"]').remove();
		}
		
		$('#propsalRequestFrm').attr('action', '/hsco/com/sym/bbs/BBS020101/insertPropose.do').submit();
	}
	
	<%-- 공동제안자 검색결과 테이블 그리기 --%>
	function makeSearchCopertnResult(userList) {
		$('#searchUserListTbl tbody').empty();
		
		if (userList == null || userList.length === 0) {
			var tr = $('<tr/>');
			tr.append( $('<td/>', {text:'검색 결과가 존재하지 않습니다.', 'colspan':3}) );
			$('#searchUserListTbl tbody').append(tr);
		}
		
		$.each(userList, function() {
			var tr = $('<tr/>', {'data-usernm':this.USER_NM, 'data-userid':this.USER_ID, 'data-deptnm':this.DEPT_NM, 'data-ofcpssenm':this.OFCPS_SE_NM});
			tr.append( $('<td/>', {text:this.USER_NM}) );
			tr.append( $('<td/>', {text:this.DEPT_NM}) );
			tr.append( $('<td/>', {text:this.OFCPS_SE_NM}) );
			$('#searchUserListTbl tbody').append(tr);
		});
	}

	<%-- 공동 제안자 검색팝업 clean --%>
	function resetSearchPop() {
		$('#searchKeyword').val('');
		$('#searchUserListTbl tbody').empty();
		var tr = $('<tr/>');
		tr.append( $('<td/>', {text:'검색 결과가 존재하지 않습니다.', 'colspan':3}) );
		$('#searchUserListTbl tbody').append(tr);
	}
	
	<%-- 공동 제안자 검색 ajax --%>
	function copertnSearch() {
		var formData = {
				 searchCondition : $('#searchCondition').val()
				,searchKeyword : $('#searchKeyword').val()
		}
		
		$.ajax({
			type: "POST",
			url: "<c:url value='/hsco/com/sym/bbs/BBS020101/selectProposeUserList.do'/>",
			data: formData,
			dataType: "JSON",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: false,
			success: function (response) {
				makeSearchCopertnResult(response.userInfoList);
			},
			error: function (response, textStatus, errorThrown) {
				alert("요청 처리에 실패하였습니다.");
			}
		});
	}
	
	$(document).ready(function() {
		//공동제안자 정보 행추가
		$('#addCopertnBtn').click(function() {
			addCopertn();
		});
		//공동제안자 행삭제
		$('#delCopertnBtn').click(function() {
			if ($('#copertnList ul').length != 1) {
				$('#copertnList ul').last().remove();
			}
		});
		
		//작성요령 확인하기
		$(".txt_down_btn").click(function() {
			$(".proposal_txt").stop(true, true).slideToggle();
			$(".txt_down_btn .xi-angle-down").stop(true, true).toggleClass("xi-rotate-180");
		});
		
		//조치사항 선택 이벤트(기타 선택시 기타내용 입력)
		$('#ETC_AT').on('change', function() {
			if ($(this).is(":checked") == true) {
				$('#ETC_CN').prop('disabled', false).prop('readonly', false);
				$('#ETC_CN').removeAttr('disabled').removeAttr('readonly');
				$('#ETC_CN').addClass('in_required');
			}
			else {
				$('#ETC_CN').prop('disabled', true).prop('readonly', true);
				$('#ETC_CN').removeClass('in_required');
			}
		});

		//공동제안자 정보 검색팝업 in
		$("#copertnList").on('click', '.search_copertn', function() {
			$(".search_info_wrap").fadeIn();
			$('#searchUserListTbl').attr('data-coperidx', $(this).attr('data-coperidx'));
		});

		//공동제안자 정보 검색팝업 out
		$(".close_btn").click(function() {
			$(".search_info_wrap").fadeOut();
			resetSearchPop();
		});
		
		//공동제안자 검색 ajax
		$('#copertnSearchBtn').click(function() {
			copertnSearch()
		});
		
		//공동제안자 선택
		$('#searchUserListTbl').on('click', 'tr', function() {
			var idx = $('#searchUserListTbl').attr('data-coperidx');
			//검색결과가 존재할때 실행
			if ( !gfn_isNull($(this).attr('data-userid')) ) {
				$('#coperUserNm' + idx).val($(this).attr('data-usernm'));
				$('#coperUserId' + idx).val($(this).attr('data-userid'));
				$('#coperDeptNm' + idx).val($(this).attr('data-deptnm'));
				$('#coperofcpsSeNm' + idx).val($(this).attr('data-ofcpssenm'));
				
				$(".search_info_wrap").fadeOut();
				
				resetSearchPop();
			}
		});
		//목록
		$('#listBtn').click(function() {
			if(confirm("작성을 취소하고 목록으로 돌아가시겠습니까?")){
				$('#propsalRequestFrm').attr("action" , "/hsco/com/sym/bbs/BBS020101/selectProposalBbsList.do").submit();
			}
		});
		//등록
		$('#requestBtn').click(function() {
			savePropse();
		});
		
		//숫자 입력값들 숫자만 입력되도록
		$('input[type="tel"]').keyup(function() {
			checkNumber($(this));
		});
		
		$("#searchKeyword").keyup(function(key) {
			if (key.keyCode == 13) {
				copertnSearch();
			}
		});
	});
</script>

<script type="text/javascript">
	var maxFileNum = document.propsalRequestFrm.posblAtchFileNumber.value;
	if(maxFileNum==null || maxFileNum==""){
		maxFileNum = 1;
	}
	var multi_selector = new MultiSelector( document.getElementById( 'egovComFileList' ), maxFileNum );
	multi_selector.addElement( document.getElementById( 'egovComFileUploader' ) );			
</script>  

</body>
</html>