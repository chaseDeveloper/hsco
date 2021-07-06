package hsco.etc.itm.ITM070100;

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
 * @Class Name   	: ITM070100Controller.java
 * @Description  	: SLA항목을 관리하는 컨트롤러 클래스
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
public class ITM070100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM070100Controller.class);	
	
	@Resource(name="ITM070100Service")
	ITM070100ServiceImpl ITM070100Service;
	
	/** SLA평가 기준  조회 */
	@RequestMapping("/hsco/etc/itm/ITM070100/ITM070100List.do") 
	public ModelAndView ITM070100List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SLA평가 기준  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM070100Service, "ITM070100List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** SLA 단위 조회 */
	@RequestMapping("/hsco/etc/itm/ITM070100/ITM070100Tab2List.do") 
	public ModelAndView ITM070100Tab2List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SLA 단위 조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070100Service, "ITM070100Tab2List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/**SLA평가 내역  조회 */
	@RequestMapping("/hsco/etc/itm/ITM070100/ITM070100Tab3List.do") 
	public ModelAndView ITM070100Tab3List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SLA평가 내역  조회  ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070100Service, "ITM070100Tab3List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/** SLA 평가 기준 수정 */
	@RequestMapping("/hsco/etc/itm/ITM070100/ITM070100CUD.do")
	public ModelAndView ITM070100CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SLA 평가 기준 수정 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM070100Service, "ITM070100CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/** SLA 단위 수정 */
	@RequestMapping("/hsco/etc/itm/ITM070100/ITM070100Tab2CUD.do")
	public ModelAndView ITM070100Tab2CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SLA 단위 수정----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM070100Service, "ITM070100Tab2CUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	
	
	/** SLA 평가상세내역을 수정 */
	@RequestMapping("/hsco/etc/itm/ITM070100/ITM070100Tab3CUD.do")
	public ModelAndView ITM070100Tab3CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SLA 평가상세내역을 수정----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM070100Service, "ITM070100Tab3CUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	
	
	/** SLA 평가상세내역을 복사 */
	@RequestMapping("/hsco/etc/itm/ITM070100/ITM070100Tab3P.do")
	public ModelAndView ITM070100Tab3P(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SLA 평가상세내역을 복사----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM070100Service, "ITM070100Tab3P", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}	
	
	

}
