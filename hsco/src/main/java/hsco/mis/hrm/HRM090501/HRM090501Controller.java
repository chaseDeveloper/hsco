package hsco.mis.hrm.HRM090501;

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
 * @Class Name   	: HRM090501Controller.java
 * @Description  	: 사우회비관리 컨트롤러 클래스
 * @author       	: 이수지
 * @since        	: 2017. 11. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 24.				   이수지				최초생성
 * </pre>   
 */

@Controller
public class HRM090501Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM090501Service")
	HRM090501ServiceImpl HRM090501Service;
	
	/**
	 * 사우회비 현황 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM090501/selectEmpAsscDuesList.do") 
	public ModelAndView selectEdcComplChangeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사우회비 현황 조회 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM090501Service, "selectEmpAsscDuesList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 사우회비CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception 
	 */
	@RequestMapping("/hsco/mis/hrm/HRM090501/saveEmpAsscDuesCUD.do")
	public ModelAndView saveEdcComplChangeCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사우회비 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM090501Service, "saveEmpAsscDuesCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 사우회비 상세 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM090501/selectEmpAsscDuesDtls.do") 
	public ModelAndView selectEmpAsscDuesDtls(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사우회비 상세 조회 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM090501Service, "selectEmpAsscDuesDtls", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
}
