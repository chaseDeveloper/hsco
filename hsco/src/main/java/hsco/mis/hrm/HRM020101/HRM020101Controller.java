package hsco.mis.hrm.HRM020101;


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
 * @Class Name   	: HRM020101Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 07.21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 07.21.			  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM020101Controller extends BaseContoller{
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020101Service")
	HRM020101ServiceImpl HRM020101Service;
	

	/** 채용기초정보관리조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020101/tbhrmEmpmnBsisList.do")
	public ModelAndView tbhrmEmpmnBsisList(NexacroMapDTO xpDto, Model model) throws Exception {
        
	    ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020101Service, "tbhrmEmpmnBsisList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}
	
	/** 채용기초정보관리 상세조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020101/tbhrmEmpmnBsisR.do")
	public ModelAndView tbhrmEmpmnBsisR(NexacroMapDTO xpDto, Model model) throws Exception {
        
	    ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020101Service, "tbhrmEmpmnBsisR", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 채용기초정보관리 저장 */
	@RequestMapping("/hsco/mis/hrm/HRM020101/tbhrmEmpmnBsisCUD.do")
	public ModelAndView tbhrmEmpmnBsisCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020101Service, "tbhrmEmpmnBsisCUD", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
	}
	
	@RequestMapping("/hsco/mis/hrm/HRM020101/tbhrmEmpmnBsisDeleteData.do")
	public ModelAndView tbhrmEmpmnBsisDeleteData(NexacroMapDTO xpDto, Model model) throws Exception {
        
	    ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020101Service, "tbhrmEmpmnBsisDeleteData", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
	}	
		
}