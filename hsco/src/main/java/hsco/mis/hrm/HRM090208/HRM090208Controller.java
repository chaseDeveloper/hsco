package hsco.mis.hrm.HRM090208;


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
 * @Class Name   	: HRM090208Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 7. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 7. 15.			  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM090208Controller extends BaseContoller  {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM090208Service")
	HRM090208ServiceImpl HRM090208Service;
	
	
	
	/** 이용내역조회 */
	@RequestMapping("/hsco/mis/hrm/HRM090208/tbhrmAdministinfoList.do")
	public ModelAndView tbhrmAdministinfoList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM090208Service, "tbhrmAdministinfoList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	


	
	@RequestMapping("/hsco/mis/hrm/HRM090208/tbhrmAdministinfoCUD.do")
	public ModelAndView tbhrmAdministinfoCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
	       ModelAndView mav = new ModelAndView("nexacroMapView");
	        execService(HRM090208Service, "tbhrmAdministinfoCUD", xpDto, mav);
	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

	        return mav;
	}
		
}