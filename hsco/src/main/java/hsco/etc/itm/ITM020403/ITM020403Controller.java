package hsco.etc.itm.ITM020403;
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
 * @Class Name   	: ITM020403Controller.java
 * @Description  	: HW수리현황을 조회하는 컨트롤러 클래스
 * @author       	: 이호준
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.			  이호준			최초생성
 * </pre>  
 */

@Controller
public class ITM020403Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM020403Controller.class);	
	
	@Resource(name="ITM020403Service")
	ITM020403ServiceImpl ITM020403Service;
	
	/** HW수리현황을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020403/ITM020403List.do") 
	public ModelAndView ITM020403List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW수리현황을  조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020403Service, "ITM020403List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** HW수리 상세현황을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020403/ITM020403DetailList.do") 
	public ModelAndView ITM020403DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW수리 상세현황을  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020403Service, "ITM020403DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

}
