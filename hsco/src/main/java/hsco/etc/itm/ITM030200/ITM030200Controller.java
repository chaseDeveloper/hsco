package hsco.etc.itm.ITM030200;

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
 * @Class Name   	: ITM030200Controller.java
 * @Description  	: Service Request를 조회하는 컨트롤러 클래스
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
public class ITM030200Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM030200Controller.class);	
	
	@Resource(name="ITM030200Service")
	ITM030200ServiceImpl ITM030200Service;
	
	/** 업무구분 리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM030200/ITM030200ListCode.do") 
	public ModelAndView ITM030200ListCode(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업무구분 리스트를  조회 함 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030200Service, "ITM030200ListCode", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		   
		return mav;
		
	}
	
	/** 업무구분 리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM030200/ITM030200ListCodeDetail.do") 
	public ModelAndView ITM030200ListCodeDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("업무구분 리스트를  조회 함 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030200Service, "ITM030200ListCodeDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		   
		return mav;
		
	}
	
	/**  Service Request(SR현황)을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM030200/ITM030200List.do") 
	public ModelAndView ITM030200List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Service Request(SR현황)을 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM030200Service, "ITM030200List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** Service Request(분석)을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM030200/ITM030200Tab2List.do") 
	public ModelAndView ITM030200Tab2List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Service Request(분석)을 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM030200Service, "ITM030200Tab2List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

	/** Service Request(미적기처리현황)을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM030200/ITM030200Tab3List.do") 
	public ModelAndView ITM030200Tab3List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Service Request(미적기처리현황)을 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM030200Service, "ITM030200Tab3List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/** Service Request 통계자료 출력물 조회 */
	@RequestMapping("/hsco/etc/itm/ITM030200/ITM030200ListUbi01.do") 
	public ModelAndView ITM030200ListUbi01(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Service Request 통계자료 출력물 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM030200Service, "ITM030200ListUbi01", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/** Service Request SR현황 출력물 조회 */
	@RequestMapping("/hsco/etc/itm/ITM030200/ITM030200ListUbi02.do") 
	public ModelAndView ITM030200ListUbi02(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Service Request SR현황 출력물 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM030200Service, "ITM030200ListUbi02", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	


}
