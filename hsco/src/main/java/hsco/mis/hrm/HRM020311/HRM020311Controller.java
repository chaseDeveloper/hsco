package hsco.mis.hrm.HRM020311;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * <pre>
 * &#64;Project Name 	: 화성도시공사 차세대정보시스템
 * &#64;Class Name   	: HRM020311Controller.java
 * &#64;Description  	: 
 * &#64;author       	: 이수지
 * &#64;since        	: 2017. 07. 13.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 07. 13.		  이수지			최초생성
 * </pre>
 */

@Controller
public class HRM020311Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "HRM020311Service")
	HRM020311ServiceImpl HRM020311Service;

	/** 필기전형결과 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020311/wrtngScrproList.do")
	public ModelAndView wrtngScrproList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020311Service, "wrtngScrproList", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/** 필기전형결과 저장 */
	@RequestMapping("/hsco/mis/hrm/HRM020311/wrtngScrproCUD.do")
	public ModelAndView wrtngScrproCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020311Service, "wrtngScrproCUD", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/** 엑셀업로드 */
	@RequestMapping("/hsco/mis/hrm/HRM020311/excelUpload.do")
	public ModelAndView excelUpload(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020311Service, "excelUpload", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
}