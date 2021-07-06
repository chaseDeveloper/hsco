package hsco.hpm.ctm.HPM050601;

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
 * @Class Name   	: HPM050601Controller.java
 * @Description  	: 
 * @author       	: 최경운
 * @since        	: 2016. 09. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 09. 23.	   최경운	    최초생성
 * </pre>  
 */

@Controller
public class HPM050601Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM050601Controller.class);
	@Resource(name="HPM050601Service")
	HPM050601ServiceImpl HPM050601Service;
	
	/**
	 * 지구개요관리 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM050601/selectOutlineList.do")
	public ModelAndView selectOutlineList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectOutlineList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM050601Service, "selectOutlineList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 실내이미지관리 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM050601/selectVrimgList.do")
	public ModelAndView selectVrimgList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectVrimgList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM050601Service, "selectVrimgList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 실내이미지관리 신규,수정
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM050601/saveVrimgList.do")
	public ModelAndView saveVrimgList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM050601Service, "saveVrimgList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}	
}