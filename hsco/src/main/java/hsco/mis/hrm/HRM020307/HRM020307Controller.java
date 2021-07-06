package hsco.mis.hrm.HRM020307;

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
 * &#64;Class Name   	: HRM020307Controller.java
 * &#64;Description  	: 
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 12. 23
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일				작성자			내용
 * ------------------------------------------------------------------
 *2017. 12. 23			정 민			최초생성
 * </pre>
 */

@Controller
public class HRM020307Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "HRM020307Service")
	HRM020307ServiceImpl HRM020307Service;

	/** 대상자 목록 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020307/selectIntrvwEvl.do")
	public ModelAndView selectIntrvwEvl(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020307Service, "selectIntrvwEvl", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/** 평가집계 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020307/selectIntrvwEvlDetail.do")
	public ModelAndView selectIntrvwEvlDetail(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020307Service, "selectIntrvwEvlDetail", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/** 대상자 목록 저장 */
	@RequestMapping("/hsco/mis/hrm/HRM020307/intrvwEvlCU.do")
	public ModelAndView intrvwEvlCU(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020307Service, "intrvwEvlCU", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

}