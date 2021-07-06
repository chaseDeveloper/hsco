package hsco.etc.itm.ITM080203;

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
 * @Class Name   	: ITM080203Controller.java
 * @Description  	: 지원(계획)내역을 조회하는 컨트롤러 클래스
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
public class ITM080203Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM080203Controller.class);	
	
	@Resource(name="ITM080203Service")
	ITM080203ServiceImpl ITM080203Service;
	
	/** 지원내역  조회 */
	@RequestMapping("/hsco/etc/itm/ITM080203/ITM080203List.do") 
	public ModelAndView ITM080203List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("지원내역  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM080203Service, "ITM080203List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 계획내역  조회 */
	@RequestMapping("/hsco/etc/itm/ITM080203/ITM080203DetailList.do") 
	public ModelAndView ITM080203DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("계획내역  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM080203Service, "ITM080203DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
}
