package hsco.mis.hrm.HRM020310;


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
 * @Class Name   	: HRM020310Controller.java
 * @Description  	: 서류전형관리
 * @author       	: 정 민
 * @since        	: 2017. 06. 22.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 06. 22.					정 민				최초생성
 * </pre>  	
 */

@Controller
public class HRM020310Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020310Service")
	HRM020310ServiceImpl HRM020310Service;
	

	/** 서류전형관리 목록 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020310/selectEmpmnPapersScrproList.do")
	public ModelAndView selectEmpmnPapersScrproList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020310Service, "selectEmpmnPapersScrproList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 서류전형관리 저장 */
	@RequestMapping("/hsco/mis/hrm/HRM020310/saveEmpmnPapersScrproList.do")
	public ModelAndView saveEmpmnPapersScrproList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020310Service, "saveEmpmnPapersScrproList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}
}