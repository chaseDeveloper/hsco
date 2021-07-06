package hsco.mis.fun.FUN040307;

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
 * @Class Name   	: FUN040307Controller.java
 * @Description  	: 
 * @author       	: 박세현
 * @since        	: 2017. 01. 03
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 01. 03.                  박세현				최초생성
 * </pre>  
 */
@Controller
public class FUN040307Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="FUN040307Service")
	FUN040307ServiceImpl FUN040307Service;
	
	/**
	 * 월간자금계획목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN040307/selectWeekCptalPlanList.do")  
	public ModelAndView selectWeekCptalPlanList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("월간자금계획목록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FUN040307Service, "selectWeekCptalPlanList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	
	/**
	 * 월간자금계획 CU
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/mis/fun/FUN040307/WeekCptalPlanCU.do")
	public ModelAndView WeekCptalPlanCU(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("월간자금계획 CU 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FUN040307Service, "WeekCptalPlanCU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;		
		
	}


	/**
	 * 승인
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/mis/fun/FUN040307/updateConfmAt.do")
	public ModelAndView updateConfmAt(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("승인 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FUN040307Service, "updateConfmAt", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
}