package hsco.mis.bdg.BDG010202;

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
 * &#64;Class Name   	: BDG010202Controller.java
 * &#64;Description  	: 지시사항관리
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 12. 23.
 * &#64;version      	: 1.0
 * &#64;see          	:
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일					작성자			내용
 * ------------------------------------------------------------------
 *  2017. 12. 23.			정 민			최초생성
 * </pre>
 */
@Controller
public class BDG010202Controller extends BaseContoller {
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "BDG010202Service")
	BDG010202ServiceImpl BDG010202Service;

	
	/**
	 * 담당부서 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG010202/selectDeptCode.do")
	public ModelAndView selectDeptCode(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG010202Service, "selectDeptCode", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 지시사항관리 목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG010202/selectDrctMatterList.do")
	public ModelAndView selectDrctMatterList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG010202Service, "selectDrctMatterList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 지시사항이행등록 목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG010202/selectDrctMatterFlflList.do")
	public ModelAndView selectDrctMatterFlflList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG010202Service, "selectDrctMatterFlflList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 지시사항이행내역 저장
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG010202/saveDrctMatterFlflList.do")
	public ModelAndView saveDrctMatterFlflList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG010202Service, "saveDrctMatterFlflList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}
}