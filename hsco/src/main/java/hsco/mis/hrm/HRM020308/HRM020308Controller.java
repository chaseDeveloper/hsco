package hsco.mis.hrm.HRM020308;


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
 * @Class Name   	: HRM020308Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 08.05.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 08.05.			  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM020308Controller extends BaseContoller  {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020308Service")
	HRM020308ServiceImpl HRM020308Service;
	

	/** 전형결과관리 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020308/scrproResultList.do")
	public ModelAndView scrproResultList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020308Service, "scrproResultList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	


	@RequestMapping("/hsco/mis/hrm/HRM020308/scrproResultR.do")
	public ModelAndView scrproResultR(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020308Service, "scrproResultR", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	

	/** 전형결과관리 채용년도 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020308/empmnYearComboList.do")
	public ModelAndView empmnYearComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020308Service, "empmnYearComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 전형결과관리 차수 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020308/odrSeComboList.do")
	public ModelAndView odrSeComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020308Service, "odrSeComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 전형결과관리 채용공고명 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020308/pblancNmComboList.do")
	public ModelAndView pblancNmComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020308Service, "pblancNmComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	


	@RequestMapping("/hsco/mis/hrm/HRM020308/scrproResultDetailCUD.do")
	public ModelAndView scrproResultDetailCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020308Service, "scrproResultDetailCUD", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}
		
}