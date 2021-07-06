package hsco.com.sym.not.SYM100101;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: SYM100101Controller.java
 * &#64;Description  	: 공지 관리하는 컨트롤러 클래스
 * &#64;author       	: 정 민
 * &#64;since        	: 2018. 3. 16.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *
 * </pre>
 */

@Controller
public class SYM100101Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(SYM100101Controller.class);

	@Resource(name = "SYM100101Service")
	SYM100101ServiceImpl SYM100101Service;

	/**
	 * 공지목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/not/SYM100101/selectNoticeList.do")
	public ModelAndView selectNoticeList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM100101Service, "selectNoticeList", xpDto, mav);

		return mav;

	}

	/**
	 * 공지 저장
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/not/SYM100101/noticeCUD.do")
	public ModelAndView noticeCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM100101Service, "noticeCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;

	}

}