package hsco.pms.rnt.prm.RNT02031100;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   		: RNT02031100Controller.java
 * @Description  		: 사회보장정보
 * @author       			: 변승우
 * @since        			: 2015. 11. 11.
 * @version      			: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 11.					변승우				최초생성
 * </pre>  
 */


@Controller
public class RNT02031100Controller extends BaseContoller{
	@Resource(name="RNT02031100Service")
	RNT02031100ServiceImpl RNT02031100Service;

	/**
	 * 사회보장신청대상자 목록 - 계약자
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02031100/reqstList1.do")
	public ModelAndView reqstList1(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02031100Service, "reqstList1", xpDto, mav);		// 사회보장신청대상자 목록 - 계약자

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 사회보장신청대상자 목록 - 재계약자
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02031100/reqstList2.do")
	public ModelAndView reqstList2(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02031100Service, "reqstList2", xpDto, mav);		// 사회보장신청대상자 목록 - 재계약자

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 사회보장신청대상자 목록 - 대기자
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02031100/reqstList3.do")
	public ModelAndView reqstList3(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02031100Service, "reqstList3", xpDto, mav);		// 사회보장신청대상자 목록 - 대기자

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
}
