package hsco.etc.itm.ITM070400;

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
 * @Class Name   	: ITM070400Controller.java
 * @Description  	: 상주인원근태상항을 관리하는 컨트롤러 클래스
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
public class ITM070400Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM070400Controller.class);	
	
	@Resource(name="ITM070400Service")
	ITM070400ServiceImpl ITM070400Service;
	
	/** 업체목록  조회 */
	@RequestMapping("/hsco/etc/itm/ITM070400/ITM070400ListCode.do") 
	public ModelAndView ITM070400ListCode(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업체목록  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM070400Service, "ITM070400ListCode", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 업체별 직원 목록 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070400/ITM070400ListDetailCode.do") 
	public ModelAndView ITM070400ListDetailCode(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업체별 직원 목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM070400Service, "ITM070400ListDetailCode", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 상주인원 근태 목록 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070400/ITM070400List.do") 
	public ModelAndView ITM070400List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("상주인원 근태 목록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM070400Service, "ITM070400List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/** 상주인원 근태 내역을 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM070400/ITM070400CUD.do")
	public ModelAndView ITM070400CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("상주인원 근태 내역을 신규,수정,삭제 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070400Service, "ITM070400CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	


}
