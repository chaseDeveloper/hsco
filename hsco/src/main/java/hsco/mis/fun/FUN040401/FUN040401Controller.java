package hsco.mis.fun.FUN040401;

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
 * @Class Name   	: FUN040401Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2015. 07. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 24.  				   양성모				최초생성
 * </pre>  
 */
@Controller
public class FUN040401Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="fun040401Service")
	FUN040401ServiceImpl fun040401Service;
	
	/**
	 * 집행금액 현황 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN040401/selectExcutctInfo.do")  
	public ModelAndView selectExcutctInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("집행금액 현황 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun040401Service, "selectExcutctInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 년월별 주 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN040401/selectWeekList.do")  
	public ModelAndView selectWeekList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("년월별 주 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun040401Service, "selectWeekList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}		

	/**
	 * 월간, 계획외지출 계획 현황 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN040401/selectMnthngCptalPlanList.do") 
	public ModelAndView selectMnthngCptalPlanList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("월간, 계획외지출 계획 현황 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun040401Service, "selectMnthngCptalPlanList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 주간 계획 등록 현황 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN040401/selectWikCptalPlanList.do") 
	public ModelAndView selectWikCptalPlanList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("주간 계획 등록 현황 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun040401Service, "selectWikCptalPlanList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	

	/**
	 * 수입/지출계획 CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/mis/fun/FUN040401/cptalPlanCUD.do")
	public ModelAndView cptalPlanCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("수입/지출계획 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(fun040401Service, "cptalPlanCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;		
		
	}
	
	/**
	 * 주간 수입/지출계획 CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/mis/fun/FUN040401/wikCptalPlanCUD.do")
	public ModelAndView wikCptalPlanCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주간 수입/지출계획 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(fun040401Service, "wikCptalPlanCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;		
		
	}
	
	/**
	 * 주간/계획 자금배정 팝업 CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/mis/fun/FUN040401/popUpCUD.do")
	public ModelAndView popUpCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주간/계획 자금배정 팝업 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(fun040401Service, "popUpCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;		
		
	}	

	
}