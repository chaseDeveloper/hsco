package hsco.mis.acc.ACC060101;

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
 * @Class Name   	: ACC060101Controller.java
 * @Description  	: 초기이월자료(구분회계) 관리하는 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 08. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 25.	이상명		최초생성
 * </pre>  
 */
@Controller
public class ACC060101Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC060101Controller.class);
	
	@Resource(name="ACC060101Service")
	ACC060101ServiceImpl ACC060101Service;
	
	
	/**
	 * 결산자료이월관리(전체) 목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC060101/stacntCyfdSeAllList.do")
	public ModelAndView stacntCyfdSeAllList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("stacntCyfdSeAllList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC060101Service, "stacntCyfdSeAllList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 구분회계별 이월자료
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC060101/stacntCyfdSeList.do")
	public ModelAndView stacntCyfdSeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC060101Service, "stacntCyfdSeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 
	 * 결산자료이월관리 수정
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC060101/stacntCyfdSeU.do")
	public ModelAndView stacntCyfdSeU(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC060101Service, "stacntCyfdSeU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/**
	 * 결산자료이월 실행
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC060101/callSpaccSyfdSe.do")
	public ModelAndView callSpaccSyfdSe(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC060101Service, "callSpaccSyfdSe", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
}
