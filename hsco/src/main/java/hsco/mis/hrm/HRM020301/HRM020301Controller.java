package hsco.mis.hrm.HRM020301;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM020301Controller.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2017. 07.  10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 07.  10.			  이수지			최초생성
 * </pre>  
 */

@Controller
public class HRM020301Controller extends BaseContoller{
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020301Service")
	HRM020301ServiceImpl HRM020301Service;
	

	/** 평가기준관리 채용년도 콤보데이터 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020301/empmnYearComboList.do")
	public ModelAndView empmnYearComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020301Service, "empmnYearComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	
	/** 평가기준관리 채용공고명 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020301/pblancNmComboList.do")
	public ModelAndView pblancNmComboList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020301Service, "pblancNmComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	


    /** 인적성결과  조회 */
    @RequestMapping("/hsco/mis/hrm/HRM020301/papersScrproList.do")
    public ModelAndView papersScrproList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020301Service, "papersScrproList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }   
    
    /** 인적성결과  저장 */
    @RequestMapping("/hsco/mis/hrm/HRM020301/papersScrproCUD.do")
    public ModelAndView papersScrproCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020301Service, "papersScrproCUD", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }   
    	
}