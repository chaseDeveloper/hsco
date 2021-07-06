package hsco.etc.itm.ITM020401;

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
 * @Class Name   	: ITM020401Controller.java
 * @Description  	: OA현황을 조회하는 컨트롤러 클래스
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
public class ITM020401Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM020401Controller.class);	
	
	@Resource(name="ITM020401Service")
	ITM020401ServiceImpl ITM020401Service;
	
	/** 총괄현황을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020401/ITM020401List.do") 
	public ModelAndView ITM020401List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("총괄현황을  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM020401Service, "ITM020401List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 사용자별현황을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020401/ITM020401Tab2List.do") 
	public ModelAndView ITM020401Tab2List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자별현황을  조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020401Service, "ITM020401Tab2List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/** 사용자별예상교체현황(년도별교체현황)을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020401/ITM020401Tab3List.do") 
	public ModelAndView ITM020401Tab3List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자별예상교체현황(년도별교체현황)을  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020401Service, "ITM020401Tab3List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	

	/** 사용자별예상교체현황(부서/사용자)를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020401/ITM020401Tab32List.do") 
	public ModelAndView ITM020401Tab32List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자별예상교체현황(부서/사용자)를  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020401Service, "ITM020401Tab32List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 노트북관리대장을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM020401/ITM020401Tab4List.do") 
	public ModelAndView ITM020401Tab4List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("노트북관리대장을  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM020401Service, "ITM020401Tab4List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	

}
