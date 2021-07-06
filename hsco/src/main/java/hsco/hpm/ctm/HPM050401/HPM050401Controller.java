package hsco.hpm.ctm.HPM050401;

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
 * @Class Name   	: HPM050401Controller.java
 * @Description  	: 
 * @author       	: 최경운
 * @since        	: 2016. 09. 21.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 09. 21.	   최경운	    최초생성
 * </pre>  
 */

@Controller
public class HPM050401Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM050401Controller.class);
	@Resource(name="HPM050401Service")
	HPM050401ServiceImpl HPM050401Service;
	
	/**
	 * 지구개요관리 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM050401/selectOutlineList.do")
	public ModelAndView selectOutlineList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectOutlineList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM050401Service, "selectOutlineList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 공급안내 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM050401/selectSupplyList.do")
	public ModelAndView selectSupplyList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectSupplyList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM050401Service, "selectSupplyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 공급안내 신규,수정
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM050401/saveSupplyList.do")
	public ModelAndView saveSupplyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM050401Service, "saveSupplyList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}	
}