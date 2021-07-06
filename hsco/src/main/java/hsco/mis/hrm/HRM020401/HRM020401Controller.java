package hsco.mis.hrm.HRM020401;

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
 * &#64;Class Name   	: HRM020401Controller.java
 * &#64;Description  	: 
 * &#64;author       	: 정 민
 * &#64;since        	: 2017. 12. 26.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일						작성자				내용
 * ------------------------------------------------------------------
 * 2017. 12. 26.				정 민				최초생성
 * </pre>
 */

@Controller
public class HRM020401Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "HRM020401Service")
	HRM020401ServiceImpl HRM020401Service;


	/** 모집분야 목록 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020401/selectEmpmnRcritRealmList.do")
	public ModelAndView selectEmpmnRcritRealmList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020401Service, "selectEmpmnRcritRealmList", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/** 최종결과관리 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020401/empmnLastResultR.do")
	public ModelAndView empmnLastResultR(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020401Service, "empmnLastResultR", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/** 최종결과관리 생성 및 수정 */
	@RequestMapping("/hsco/mis/hrm/HRM020401/empmnLastResultCU.do")
	public ModelAndView empmnLastResultCU(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020401Service, "empmnLastResultCU", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	@RequestMapping("/hsco/mis/hrm/HRM020401/empmnLastDtaCreatList.do")
	public ModelAndView empmnLastDtaCreatList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020401Service, "empmnLastDtaCreatList", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
}