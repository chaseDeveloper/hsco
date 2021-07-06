package hsco.etc.itm.ITM080100;

import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ITM080100Controller.java
 * @Description  	: 월간지원내역을 관리하는 컨트롤러 클래스
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
public class ITM080100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM080100Controller.class);	
	
	@Resource(name="ITM080100Service")
	ITM080100ServiceImpl ITM080100Service;
	
	/** 월간지원내역 조회 */
	@RequestMapping("/hsco/etc/itm/ITM080100/ITM080100List.do") 
	public ModelAndView ITM080100List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("월간지원내역 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM080100Service, "ITM080100List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 월간계획내역  조회 */
	@RequestMapping("/hsco/etc/itm/ITM080100/ITM080100DetailList.do") 
	public ModelAndView ITM080100DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("월간계획내역  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM080100Service, "ITM080100DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 월간지원내역 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM080100/ITM080100CUD.do")
	public ModelAndView ITM080100CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("월간지원내역 신규,수정,삭제 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM080100Service, "ITM080100CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/** 월간지원내역 복사 */
	@RequestMapping("/hsco/etc/itm/ITM080100/ITM080100P.do")
	public ModelAndView ITM080100P(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("월간지원내역복사 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM080100Service, "ITM080100P", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}	
	
	/** 월간계획내역 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM080100/ITM080100DetailCUD.do")
	public ModelAndView ITM080100DetailCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("월간계획내역 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM080100Service, "ITM080100DetailCUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	
	/** 월간계획내역 복사 */
	@RequestMapping("/hsco/etc/itm/ITM080100/ITM080100DetailP.do")
	public ModelAndView ITM080100DetailP(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("월간계획내역 복사----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM080100Service, "ITM080100DetailP", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}

}
