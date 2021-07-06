package hsco.com.sym.bbs.BBS020101;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.util.DateUtil;
import hsco.cmm.util.StringUtil;

import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import egovframework.rte.fdl.cmmn.exception.EgovBizException;
import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BBS020101.java
 * @Description  	: 제안게시판을 관리하는 컨트롤러 클래스
 * @author       	: 이유리
 * @since        	: 2020.06.16
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일						 작성자				내용
 * ------------------------------------------------------------------
 *  2020.08.25					이유리				최초생성
 * </pre>  
 */

@Controller
public class BBS020101Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(BBS020101Controller.class);
	
	@Resource
	MappingJackson2JsonView ajaxMainView;
	
	@Resource(name="BBS020101Service")
	BBS020101ServiceImpl BBS020101Service;
	
	/**
	 * 제안 게시판 목록 조회
	 * @param mapReqData
	 * @param request
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/bbs/BBS020101/selectProposalBbsList.do")
	public ModelAndView selectProposalBbsList(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request) throws Exception {
		String vUserId = "";
		vUserId = (String) request.getSession().getAttribute("V_USER_ID"); //그룹웨어서 넘겨받은 유저 식별값(근태기번호)
		if(StringUtil.isNull(vUserId)){ //세션에 값이 없을경우(초기진입)
			String dclzId = (String)mapReqData.get("V_USER_ID");
			if(StringUtil.isNull(dclzId)) {
				throw new EgovBizException("잘못된 접근입니다.");
			}
			
			mapReqData.put("dclzId", dclzId);
			Map<String,Object> userInfo = BBS020101Service.selectUserInfo(mapReqData);
			
			if (userInfo == null || userInfo.isEmpty()) {
				mapReqData.put("userId", dclzId);
				List<Map<String, Object>> userInfoList = BBS020101Service.selectUserInfoList(mapReqData);
				
				if (userInfoList != null && userInfoList.size() != 0) {
					userInfo = userInfoList.get(0);
					mapReqData.put("deptCode", userInfo.get("DEPT_CODE"));
				} else {
					throw new EgovBizException("MIS 계정이 존재하지 않습니다.");
				}
			}
			
			vUserId = (String) userInfo.get("USER_ID");
			request.getSession().setAttribute("V_USER_ID", vUserId); //유저 식별번호
			mapReqData.put("deptCode", userInfo.get("DEPT_CODE"));
		}
		else {
			//사용자 정보 조회
			mapReqData.put("userId", vUserId);
			List<Map<String, Object>> userInfoList = BBS020101Service.selectUserInfoList(mapReqData);
			Map<String, Object> userInfo = new HashMap<String, Object>();
			if (userInfoList.size() != 0) {
				userInfo = userInfoList.get(0);
				mapReqData.put("deptCode", userInfo.get("DEPT_CODE"));
			}
		}
		
		
		ModelAndView mav = new ModelAndView();
		
		PaginationInfo paginationInfo = new PaginationInfo();
		
		if(mapReqData.get("pageIndex") == null || mapReqData.get("pageIndex") == ""){
			mapReqData.put("pageIndex", 1);
		}
		
		//검색조건 날짜 유효성 검사 및 기본값 현재날짜로부터 과거 1개월 셋팅
		String bgnDe = (String) mapReqData.get("bgnDe");
		String endDe = (String) mapReqData.get("endDe");
		if(StringUtil.isNull(bgnDe) || StringUtil.isNull(endDe)) {
			SimpleDateFormat fmt1 = new SimpleDateFormat ("yyyyMMdd");
			Calendar cal = Calendar.getInstance();
			String nowDate = fmt1.format(cal.getTime());
			String before3MonthDate = DateUtil.addMonths(nowDate, -1, "yyyyMMdd");
			
			mapReqData.put("bgnDe", before3MonthDate);
			mapReqData.put("endDe", nowDate);
		}
		else {
			if (!StringUtil.isNull(bgnDe) && DateUtil.isValid(bgnDe.replaceAll("-", ""))) {
				mapReqData.put("bgnDe", bgnDe.replaceAll("-", ""));
			}
			else {
				throw new EgovBizException("검색조건 일자가 유효하지 않은 날짜 입니다.");
			}
			
			if (!StringUtil.isNull(endDe) && DateUtil.isValid(endDe.replaceAll("-", ""))) {
				mapReqData.put("endDe", endDe.replaceAll("-", ""));
			}
			else {
				throw new EgovBizException("검색조건 일자가 유효하지 않은 날짜 입니다.");
			}
		}
		
		//페이징 설정
		paginationInfo.setCurrentPageNo(Integer.parseInt(mapReqData.get("pageIndex").toString()));
		paginationInfo.setRecordCountPerPage(10); //페이지당 건수
		paginationInfo.setPageSize(5); //페이지버튼 갯수
		mapReqData.put("firstIndex", paginationInfo.getFirstRecordIndex());
		mapReqData.put("lastIndex", paginationInfo.getLastRecordIndex());
		mapReqData.put("recordCountPerPage", paginationInfo.getRecordCountPerPage());
		
		//총건수 조회
		int totCnt = BBS020101Service.selectProposeListCnt(mapReqData);
		paginationInfo.setTotalRecordCount(totCnt);
		//목록조회
		List<Map<String, Object>> ProposeList = BBS020101Service.selectProposeList(mapReqData);
		//제안종류코드조회
		mapReqData.put("grpCode", "BDG031");
		List<Map<String, Object>> propseSeCodeList = BBS020101Service.selectCmmnCodeList(mapReqData);
		
		mav.addObject("REPARAM", mapReqData);
		mav.addObject("proposeList", ProposeList);
		mav.addObject("paginationInfo", paginationInfo);
		mav.addObject("propseSeCodeList", propseSeCodeList);
		mav.setViewName("proposeBbsList");
		
		return mav;
	}
	
	/**
	 * 제안 게시판 상세 조회
	 * @param mapReqData
	 * @param request
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/bbs/BBS020101/selectProposeBbsDetailView.do")
	public ModelAndView selectProposeBbsDetailView(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request) throws Exception {
		
		ModelAndView mav = new ModelAndView();
		String vUserId = "";
		vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("USER_ID", vUserId);
		
		//제안 상세조회
		Map<String, Object> ProposeDetail = BBS020101Service.selectProposeDetail(mapReqData);
		//공동제안자 목록 조회
		List<Map<String, Object>> copertnPropseList = BBS020101Service.selectCopertnPropseList(mapReqData);
		//게시판 댓글목록 조회
		List<Map<String, Object>> replyList = BBS020101Service.selectProposeBbsReplyList(mapReqData);
		
		mav.addObject("REPARAM", mapReqData);
		mav.addObject("proposeDetail", ProposeDetail);
		mav.addObject("copertnPropseList", copertnPropseList);
		mav.addObject("replyList", replyList);
		mav.setViewName("proposeBbsView");
		
		return mav;
	}
	
	/**
	 * 제안 게시판 등록 페이지 조회
	 * @param mapReqData
	 * @param request
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/bbs/BBS020101/selectProposeBbsWriteView.do")
	public ModelAndView selectProposeBbsWriteView(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request) throws Exception {
		String vUserId = "";
		vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("userId", vUserId);
		
		//사용자 정보 조회
		List<Map<String, Object>> userInfoList = BBS020101Service.selectUserInfoList(mapReqData);
		Map<String, Object> userInfo = new HashMap<String, Object>();
		if (userInfoList.size() != 0) {
			userInfo = userInfoList.get(0);
		}
		
		//제안종류코드조회
		mapReqData.put("grpCode", "BDG031");
		List<Map<String, Object>> propseSeCodeList = BBS020101Service.selectCmmnCodeList(mapReqData);
		
		//조치사항코드조회
		mapReqData.put("grpCode", "BDG032");
		List<Map<String, Object>> managtMatterCodeList = BBS020101Service.selectCmmnCodeList(mapReqData);
		
		ModelAndView mav = new ModelAndView();
		
		mav.addObject("REPARAM", mapReqData);
		mav.addObject("userInfo", userInfo);
		mav.setViewName("proposeBbsWrite");
		mav.addObject("propseSeCodeList", propseSeCodeList);
		mav.addObject("managtMatterCodeList", managtMatterCodeList);
		
		return mav;
	}
	
	/**
	 * 공동사용자로 등록할 회원목록 조회
	 * @param mapReqData
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/hsco/com/sym/bbs/BBS020101/selectProposeUserList.do", produces = "application/text; charset=utf8")
	@ResponseBody
	public void selectProposeUserList(@RequestParam Map<String,Object> mapReqData, HttpServletResponse response) throws Exception {
		
		//사용자 정보 조회
		List<Map<String, Object>> userInfoList = BBS020101Service.selectUserInfoList(mapReqData);
		
		JSONObject json = new JSONObject();
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");

		json.put("userInfoList", userInfoList);
		
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 제안 등록
	 * @param mapReqData
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/hsco/com/sym/bbs/BBS020101/insertPropose.do", method=RequestMethod.POST)
	public ModelAndView insertPropose(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, MultipartHttpServletRequest multiRequest) throws Exception {
		String vUserId = "";
		vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("USER_ID", vUserId);
		
		//공동제안자정보
		String[] copertnIdArr = request.getParameterValues("COPERTN_USER_ID");
		String[] copertnRateArr = request.getParameterValues("COPERTN_CNTRBT_RATE");
		
		mapReqData.put("copertnIdArr", copertnIdArr);
		mapReqData.put("copertnRateArr", copertnRateArr);
		
		BBS020101Service.insertPropose(mapReqData, multiRequest);
		
		return new ModelAndView("redirect:/hsco/com/sym/bbs/BBS020101/selectProposalBbsList.do");
	}
	
	/**
	 * 제안 삭제
	 * @param mapReqData
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/hsco/com/sym/bbs/BBS020101/deletePropose.do", method=RequestMethod.POST)
	public ModelAndView deletePropose(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request) throws Exception {
		String vUserId = "";
		vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("USER_ID", vUserId);
		
		BBS020101Service.deletePropose(mapReqData);
		
		return new ModelAndView("redirect:/hsco/com/sym/bbs/BBS020101/selectProposalBbsList.do");
	}
	
	/**
	 * 제안게시판 투표 등록
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS020101/insertProposeBbsVote.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void insertProposeBbsVote(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		String vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("USER_ID", vUserId);
		
		BBS020101Service.insertProposeBbsVote(mapReqData);
		JSONObject json = new JSONObject();
		Map<String, Object> ProposeBbsMap = BBS020101Service.selectProposeDetail(mapReqData); //게시판 상세조회
		json.put("result", "Y");
		json.put("LIKE_CNT", ProposeBbsMap.get("LIKE_CNT"));
		json.put("HATE_CNT", ProposeBbsMap.get("HATE_CNT"));
		json.put("VOTE_SE", ProposeBbsMap.get("VOTE_SE"));
		
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 제안게시판 투표 삭제
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS020101/deleteProposeBbsVote.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void deleteProposeBbsVote(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		String vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("USER_ID", vUserId);
		
		BBS020101Service.deleteProposeBbsVote(mapReqData);
		JSONObject json = new JSONObject();
		Map<String, Object> ProposeBbsMap = BBS020101Service.selectProposeDetail(mapReqData); //게시판 상세조회
		json.put("result", "Y");
		json.put("LIKE_CNT", ProposeBbsMap.get("LIKE_CNT"));
		json.put("HATE_CNT", ProposeBbsMap.get("HATE_CNT"));
		json.put("VOTE_SE", ProposeBbsMap.get("VOTE_SE"));
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 제안게시판 댓글 등록
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS020101/insertProposeBbsReply.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void insertProposeBbsReply(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		String vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("USER_ID", vUserId);
		
		BBS020101Service.insertProposeBbsReply(mapReqData);
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 제안게시판 댓글 삭제
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS020101/deleteProposeBbsReply.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void deleteProposeBbsReply(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		String vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("USER_ID", vUserId);
		
		//하위테이블(투표) 상위테이블(댓글) 삭제
		BBS020101Service.deleteProposeBbsReplyVoteAll(mapReqData); //제안게시판 댓글 투표 전체삭제
		BBS020101Service.deleteProposeBbsReply(mapReqData); // 제안게시판 댓글 삭제
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 제안게시판 댓글 수정
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS020101/updateProposeBbsReply.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void updateProposeBbsReply(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		String vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("USER_ID", vUserId);
		
		BBS020101Service.updateProposeBbsReply(mapReqData); // 제안게시판 댓글 삭제
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 제안게시판 댓글 투표 등록
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS020101/insertProposeBbsReplyVote.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void insertProposeBbsReplyVote(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		String vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("USER_ID", vUserId);
		
		BBS020101Service.insertProposeBbsReplyVote(mapReqData);
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		
		
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 제안게시판 댓글 투표 삭제
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS020101/deleteProposeBbsReplyVote.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void deleteProposeBbsReplyVote(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		String vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("USER_ID", vUserId);
		
		BBS020101Service.deleteProposeBbsReplyVote(mapReqData);
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
}
