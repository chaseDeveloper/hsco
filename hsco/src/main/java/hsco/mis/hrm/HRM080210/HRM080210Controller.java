package hsco.mis.hrm.HRM080210;

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
 * @Class Name   	: HRM080210Controller.java
 * @Description  	: 교육이수시간조정관리 컨트롤러 클래스
 * @author       	: 양성모
 * @since        	: 2017. 06. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 06. 14.				   양성모				최초생성
 * </pre>   
 */

@Controller
public class HRM080210Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM080210Service")
	HRM080210ServiceImpl HRM080210Service;
	
	/**
	 * 교육이수시간조정 현황 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM080210/selectEdcComplChangeList.do") 
	public ModelAndView selectEdcComplChangeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("교육이수시간조정 현황 조회 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM080210Service, "selectEdcComplChangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 교육이수시간조정CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception 
	 */
	@RequestMapping("/hsco/mis/hrm/HRM080210/saveEdcComplChangeCUD.do")
	public ModelAndView saveEdcComplChangeCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("교육이수시간조정 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM080210Service, "saveEdcComplChangeCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 발령정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM080210/selectGnfdDtlsList.do") 
	public ModelAndView selectGnfdDtlsList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("발령정보 조회 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM080210Service, "selectGnfdDtlsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 입력 사원의 적용년도 기준 사원정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM080210/selectEmpnoInfo.do") 
	public ModelAndView selectEmpnoInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("입력 사원의 적용년도 기준 사원정보 조회 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM080210Service, "selectEmpnoInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 발령정보팝업 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM080210/selectGnfdDtlsPopList.do") 
	public ModelAndView selectGnfdDtlsPopList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("발령정보팝업 조회 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM080210Service, "selectGnfdDtlsPopList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
}
