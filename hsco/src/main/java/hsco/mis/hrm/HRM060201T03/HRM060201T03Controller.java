package hsco.mis.hrm.HRM060201T03;

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
 * @Class Name   	: HRM060201T03Controller.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 11. 03
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 03	박병일			최초생성
 * </pre>  
 */

@Controller
public class HRM060201T03Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM060201T03Service")
	HRM060201T03ServiceImpl HRM060201T03Service;
	
	/**
	 * 평정방법(MST) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060201T03/selectList.do") 
	public ModelAndView selectList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM060201T03Service, "selectList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		
	
	/**
	 * 평정방법(MST) 신규, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060201T03/mainCUD.do")
	public ModelAndView mainCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM060201T03Service, "mainCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}
	
	/**
	 * 부여기준내역(DTL)(표창) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060201T03/detailR01.do") 
	public ModelAndView detailR01(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM060201T03Service, "detailR01", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 부여기준내역(DTL)(제안입상) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060201T03/detailR02.do") 
	public ModelAndView detailR(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM060201T03Service, "detailR02", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 평정기준내역(DTL) 신규, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060201T03/detailCUD.do")
	public ModelAndView detailCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("dtl CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM060201T03Service, "detailCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}	

	/**
	 * 직전차수 경력평정 기준자료 생성
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM060201T03/bsisC.do")
	public ModelAndView bsisC(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("bsisC 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM060201T03Service, "bsisC", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}		
	
	
}