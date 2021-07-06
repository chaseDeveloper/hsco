package hsco.mis.hrm.HRM020306;


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
 * @Class Name   	: HRM020306Controller.java
 * @Description  	: 
 * @author       	: 정 민
 * @since        	: 2017. 12. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 12. 26		  				정 민				최초생성
 * </pre>  
 */

@Controller
public class HRM020306Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020306Service")
	HRM020306ServiceImpl HRM020306Service;
	
    
	/** 대상자 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020306/selectEcnySportGnrlList.do")
	public ModelAndView selectEcnySportGnrlList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020306Service, "selectEcnySportGnrlList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	

	/** 면접평가항목 상세조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020306/selectIntrvwEvlIEemList.do")
	public ModelAndView selectIntrvwEvlIEemList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020306Service, "selectIntrvwEvlIEemList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	
	/**  면접 평가내역 생성 및 수정 */
	@RequestMapping("/hsco/mis/hrm/HRM020306/intrvwEvlCU.do")
	public ModelAndView intrvwEvlCU(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020306Service, "intrvwEvlCU", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}
		
}