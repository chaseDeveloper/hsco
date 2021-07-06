package hsco.mis.hrm.HRM060101;


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
 * @Class Name   	: HRM060101Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 9. 22.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 9. 22.         이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM060101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM060101Service")
	HRM060101ServiceImpl HRM060101Service;
	
	/**
	 * 평가항목 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060101/tbhrmPerevaIemList.do") 
	public ModelAndView tbhrmEdcDtyTraingList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가항목 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM060101Service, "tbhrmPerevaIemList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 평가항목별배점 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060101/tbhrmPerevaAllotList.do") 
	public ModelAndView tbhrmPerevaAllotList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가항목별배점 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM060101Service, "tbhrmPerevaAllotList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	

	/**
	 * 평정설문 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060101/tbhrmPerevaQustnrList.do") 
	public ModelAndView tbhrmPerevaQustnrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평정설문 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM060101Service, "tbhrmPerevaQustnrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	/**
	 * 평정설문답변조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060101/tbhrmPerevaQustnrR.do") 
	public ModelAndView tbhrmPerevaQustnrR(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평정설문답변 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM060101Service, "tbhrmPerevaQustnrR", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060101/tbhrmPerevaCUD.do")
	public ModelAndView tbhrmPerevaCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("근무평정CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM060101Service, "tbhrmPerevaCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
	/**
	 * 평가항목 직전차수 복사
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060101/copyTbhrmPerevaIemList.do")
	public ModelAndView copyTbhrmPerevaIemList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가항목 직전차수 복사 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM060101Service, "copyTbhrmPerevaIemList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
	/**
	 * 평정설문 직전차수 복사
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060101/copyTbhrmPerevaQustnrList.do")
	public ModelAndView copyTbhrmPerevaQustnrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평정설문 직전차수 복사 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM060101Service, "copyTbhrmPerevaQustnrList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
}
