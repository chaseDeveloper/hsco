package hsco.mis.hrm.HRM020203;


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
 * @Class Name   	: HRM020203Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 07.30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 07.30.			  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM020203Controller extends BaseContoller{
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020203Service")
	HRM020203ServiceImpl HRM020203Service;
	

	/** 입사지원통계 */
	@RequestMapping("/hsco/mis/hrm/HRM020203/selecttbhrmEcnyStats.do")
	public ModelAndView selecttbhrmEcnyStats(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020203Service, "selecttbhrmEcnyStats", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	

	/** 평가기준관리 채용년도 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020203/empmnYearComboList.do")
	public ModelAndView empmnYearComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020203Service, "empmnYearComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 평가기준관리 차수 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020203/odrSeComboList.do")
	public ModelAndView odrSeComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020203Service, "odrSeComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 평가기준관리 채용공고명 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020203/pblancNmComboList.do")
	public ModelAndView pblancNmComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020203Service, "pblancNmComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	

	
}