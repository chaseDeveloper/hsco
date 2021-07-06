package hsco.mis.bdg.BDG010201;

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
 * &#64;Class Name   	: BDG010201Controller.java
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
public class BDG010201Controller extends BaseContoller {
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "BDG010201Service")
	BDG010201ServiceImpl BDG010201Service;

	/**
	 * 지시사항관리 목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG010201/selectDrctMatterList.do")
	public ModelAndView selectDrctMatterList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG010201Service, "selectDrctMatterList", xpDto, mav);

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
	@RequestMapping("/hsco/mis/bdg/BDG010201/selectDrctMatterFlflList.do")
	public ModelAndView selectDrctMatterFlflList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG010201Service, "selectDrctMatterFlflList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 지시사항관리, 지시사항이행내역 저장
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG010201/saveDrctMatterList.do")
	public ModelAndView saveDrctMatterList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG010201Service, "saveDrctMatterList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}
}