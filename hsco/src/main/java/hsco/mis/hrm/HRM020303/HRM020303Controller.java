package hsco.mis.hrm.HRM020303;


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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM020303Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 08.03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 08.03.			  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM020303Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020303Service")
	HRM020303ServiceImpl HRM020303Service;
	

	/** 서류전형관리 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020303/tbhrmPapersScrproList.do")
	public ModelAndView tbhrmPapersScrproList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020303Service, "tbhrmPapersScrproList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	


	@RequestMapping("/hsco/mis/hrm/HRM020303/tbhrmPapersScrproR.do")
	public ModelAndView tbhrmPapersScrproR(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020303Service, "tbhrmPapersScrproR", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	

	/** 서류전형관리 채용년도 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020303/empmnYearComboList.do")
	public ModelAndView empmnYearComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020303Service, "empmnYearComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 서류전형관리 차수 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020303/odrSeComboList.do")
	public ModelAndView odrSeComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020303Service, "odrSeComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 서류전형관리 채용공고명 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020303/pblancNmComboList.do")
	public ModelAndView pblancNmComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020303Service, "pblancNmComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	

	/** 평가항목 콤보조회 */
/*	@RequestMapping("/hsco/mis/hrm/HRM020303/selectEvlIemCombo.do")
	public ModelAndView selectEvlIemCombo(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020303Service, "selectEvlIemCombo", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	*/
	
	@RequestMapping("/hsco/mis/hrm/HRM020303/tbhrmPapersScrproCUD.do")
	public ModelAndView tbhrmPapersScrproCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020303Service, "tbhrmPapersScrproCUD", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}
		
}