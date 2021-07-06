package hsco.mis.hrm.HRM020309;


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
 * @Class Name   	: HRM020309Controller.java
 * @Description  	: 
 * @author          : 정 민
 * @since           : 2017. 12. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일						작성자			내용
 * ------------------------------------------------------------------
 *  2017. 12. 20.				정 민			최초생성
 * </pre>  
 */

@Controller
public class HRM020309Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020309Service")
	HRM020309ServiceImpl HRM020309Service;
	
	
	/** 모집분야 목록 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020309/selectEmpmnRcritRealmList.do")
	public ModelAndView selectEmpmnRcritRealmList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM020309Service, "selectEmpmnRcritRealmList", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/** 서류전형관리 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020309/selectPapersScrproList.do")
	public ModelAndView selectPapersScrproList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020309Service, "selectPapersScrproList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	
	@RequestMapping("/hsco/mis/hrm/HRM020309/papersScrproListCU.do")
	public ModelAndView tbhrmPapersScrproCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020309Service, "papersScrproListCU", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}
		
}