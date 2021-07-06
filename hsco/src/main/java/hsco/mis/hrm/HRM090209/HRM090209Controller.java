package hsco.mis.hrm.HRM090209;


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
 * @Class Name   	: HRM090209Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 7. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 7. 16.			  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM090209Controller extends BaseContoller{
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM090209Service")
	HRM090209ServiceImpl HRM090209Service;
	
	
	
	/** 이의신청내역조회 */
	@RequestMapping("/hsco/mis/hrm/HRM090209/tbhrmObjcReqstList.do")
	public ModelAndView tbhrmObjcReqstList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM090209Service, "tbhrmObjcReqstList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	


	
	@RequestMapping("/hsco/mis/hrm/HRM090209/tbhrmObjcReqstCUD.do")
	public ModelAndView tbhrmObjcReqstCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM090209Service, "tbhrmObjcReqstCUD", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}
		
}