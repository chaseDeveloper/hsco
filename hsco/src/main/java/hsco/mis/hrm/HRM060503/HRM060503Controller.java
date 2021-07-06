package hsco.mis.hrm.HRM060503;

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
 * @Class Name   	: HRM060503Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2019. 09. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2019. 09. 23.  				   양성모				최초생성
 * </pre>  
 */
@Controller
public class HRM060503Controller extends BaseContoller{
	
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM060503Service")
	HRM060503ServiceImpl HRM060503Service;

	/**평가대상자 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM060503/selectEvlResult.do") 
	public ModelAndView selectEvlResult(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("다면평가 결과표 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(HRM060503Service, "selectEvlResult", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/mis/hrm/HRM060503/updateDcsnEvlGrad.do") 
	public ModelAndView updateDcsnEvlGrad(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(HRM060503Service, "updateDcsnEvlGrad", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
}
