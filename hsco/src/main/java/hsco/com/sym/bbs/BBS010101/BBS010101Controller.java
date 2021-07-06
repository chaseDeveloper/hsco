package hsco.com.sym.bbs.BBS010101;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.security.cipher.sha.Sha256Cipher;
import hsco.cmm.util.StringUtil;

import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
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
import org.springframework.web.servlet.ModelAndView;

import egovframework.rte.fdl.cmmn.exception.EgovBizException;
import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: BBS010101.java
 * @Description  	: 익명게시판을 관리하는 컨트롤러 클래스
 * @author       	: 김형태
 * @since        	: 2020.06.16
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020.06.16					김형태				최초생성
 *  2020.06.17					권재만				실기능 작업진행
 * </pre>  
 */

@Controller
public class BBS010101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(BBS010101Controller.class);	
	
	@Resource(name="BBS010101Service")
	BBS010101ServiceImpl BBS010101Service;
	
	/**
	 * 익명게시판 목록 조회
	 * @param mapReqData
	 * @param request
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsList.do")
	public ModelAndView selectAnonymousBbsList(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request) throws Exception {
		String vUserId = "";
		vUserId = (String) request.getSession().getAttribute("V_USER_ID"); //그룹웨어서 넘겨받은 유저 식별값(근태기번호)
		if(StringUtil.isNull(vUserId)){ //세션에 값이 없을경우(초기진입)
			String encVUserId = "";
			vUserId = (String)mapReqData.get("V_USER_ID");
			if(StringUtil.isNull(vUserId)){
				throw new EgovBizException("잘못된 접근입니다.");
			} else if (!StringUtil.isNull(vUserId)){
				try {
					encVUserId = Sha256Cipher.encrypt(vUserId, null);
				} catch (UnsupportedEncodingException e) {
					e.printStackTrace();
				}
				request.getSession().setAttribute("V_USER_ID", encVUserId); //유저 식별번호
			}
		}
		
		ModelAndView mav = new ModelAndView();
		
		PaginationInfo paginationInfo = new PaginationInfo();
		
		if(mapReqData.get("pageIndex") == null || mapReqData.get("pageIndex") == ""){
			mapReqData.put("pageIndex", 1);
		}
		//페이징 설정
		paginationInfo.setCurrentPageNo(Integer.parseInt(mapReqData.get("pageIndex").toString()));
		paginationInfo.setRecordCountPerPage(10); //페이지당 건수
		paginationInfo.setPageSize(5); //페이지버튼 갯수
		mapReqData.put("firstIndex", paginationInfo.getFirstRecordIndex());
		mapReqData.put("lastIndex", paginationInfo.getLastRecordIndex());
		mapReqData.put("recordCountPerPage", paginationInfo.getRecordCountPerPage());
		
		//총건수 조회
		int totCnt = BBS010101Service.selectAnonymousBbsListCnt(mapReqData);
		paginationInfo.setTotalRecordCount(totCnt);
		//목록조회
		List<HashMap<String, Object>> anonymousBbsList = BBS010101Service.selectAnonymousBbsList(mapReqData);
		
		
		
		
		mav.addObject("REPARAM", mapReqData);
		mav.addObject("anonymousBbsList", anonymousBbsList);
		mav.addObject("paginationInfo", paginationInfo);
		mav.setViewName("AnonymousBbsList");
		
		return mav;
		
	}
	
	/**
	 * 익명게시판 상세 조회
	 * @param mapReqData
	 * @param request
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/bbs/BBS010101/selectAnonymousBbsView.do")
	public ModelAndView selectAnonymousBbsView(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		
		String vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("discValue", vUserId);
		
		BBS010101Service.updateAnonymousBbsInqireCo(mapReqData); //조회수 증가
		
		HashMap<String, Object> anonymousBbsMap = BBS010101Service.selectAnonymousBbsView(mapReqData); //게시판 상세조회
		List<HashMap<String, Object>> anonymousBbsReplyList = BBS010101Service.selectAnonymousBbsReplyList(mapReqData); //덧글 목록조회
		
		mav.addObject("REPARAM", mapReqData);
		mav.addObject("anonymousBbsMap", anonymousBbsMap);
		mav.addObject("anonymousBbsReplyList", anonymousBbsReplyList);
		mav.setViewName("AnonymousBbsView");
		
		return mav;
		
	}
	
	/**
	 * 익명게시판 등록 화면 바로가기
	 * @param mapReqData
	 * @param request
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/bbs/BBS010101/writeAnonymousBbs.do")
	public ModelAndView writeAnonymousBbs(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		mav.addObject("REPARAM", mapReqData);
		mav.setViewName("AnonymousBbsWrite");
		
		return mav;
		
	}
	
	/**
	 * 익명게시판 등록
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS010101/insertAnonymousBbs.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void insertAnonymousBbs(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		BBS010101Service.insertAnonymousBbs(mapReqData);
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 익명게시판 투표 등록
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS010101/insertAnonymousBbsVote.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void insertAnonymousBbsVote(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		BBS010101Service.insertAnonymousBbsVote(mapReqData);
		JSONObject json = new JSONObject();
		HashMap<String, Object> anonymousBbsMap = BBS010101Service.selectAnonymousBbsView(mapReqData); //게시판 상세조회
		json.put("result", "Y");
		json.put("LIKE_CNT", anonymousBbsMap.get("LIKE_CNT"));
		json.put("HATE_CNT", anonymousBbsMap.get("HATE_CNT"));
		json.put("VOTE_SE", anonymousBbsMap.get("VOTE_SE"));
		
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 익명게시판 투표 삭제
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS010101/deleteAnonymousBbsVote.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void deleteAnonymousBbsVote(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		BBS010101Service.deleteAnonymousBbsVote(mapReqData);
		JSONObject json = new JSONObject();
		HashMap<String, Object> anonymousBbsMap = BBS010101Service.selectAnonymousBbsView(mapReqData); //게시판 상세조회
		json.put("result", "Y");
		json.put("LIKE_CNT", anonymousBbsMap.get("LIKE_CNT"));
		json.put("HATE_CNT", anonymousBbsMap.get("HATE_CNT"));
		json.put("VOTE_SE", anonymousBbsMap.get("VOTE_SE"));
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 익명게시판 댓글 등록
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS010101/insertAnonymousBbsReply.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void insertAnonymousBbsReply(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		BBS010101Service.insertAnonymousBbsReply(mapReqData);
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 익명게시판 댓글 삭제
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS010101/deleteAnonymousBbsReply.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void deleteAnonymousBbsReply(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		
		//하위테이블(투표) 상위테이블(댓글) 삭제
		BBS010101Service.deleteAnonymousBbsReplyVoteAll(mapReqData); //익명게시판 댓글 투표 전체삭제
		BBS010101Service.deleteAnonymousBbsReply(mapReqData); // 익명게시판 댓글 삭제
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 익명게시판 댓글 수정
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS010101/updateAnonymousBbsReply.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void updateAnonymousBbsReply(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		BBS010101Service.updateAnonymousBbsReply(mapReqData); // 익명게시판 댓글 삭제
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 익명게시판 댓글 투표 등록
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS010101/insertAnonymousBbsReplyVote.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void insertAnonymousBbsReplyVote(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		String vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("discValue", vUserId);
		
		BBS010101Service.insertAnonymousBbsReplyVote(mapReqData);
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		
		
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
	/**
	 * 익명게시판 댓글 투표 삭제
	 * @param mapReqData
	 * @param request
	 * @param response
	 * @return ModelAndView
	 * @throws Exception
	 */
	@ResponseBody
	@RequestMapping(value = "/hsco/com/sym/bbs/BBS010101/deleteAnonymousBbsReplyVote.do", method=RequestMethod.POST, produces = "application/text; charset=utf8")
	public void deleteAnonymousBbsReplyVote(@RequestParam Map<String, Object> mapReqData, HttpServletRequest request, HttpServletResponse response, ModelMap model) throws Exception {
		String vUserId = (String) request.getSession().getAttribute("V_USER_ID");
		mapReqData.put("discValue", vUserId);
		
		BBS010101Service.deleteAnonymousBbsReplyVote(mapReqData);
		JSONObject json = new JSONObject();
		json.put("result", "Y");
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
}
