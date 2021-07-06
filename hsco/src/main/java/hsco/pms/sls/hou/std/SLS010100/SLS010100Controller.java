package hsco.pms.sls.hou.std.SLS010100;

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
 * @Class Name   	: SLS010100Controller.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 7.25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 25.				   최승락				최초생성
 * </pre>  
 */
@Controller
public class SLS010100Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS010100Service")
	SLS010100ServiceImpl SLS010100Service;
	
	/**
	 * 주택기본정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010100/selectHouseList.do")
	public ModelAndView selectHouseList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택기본정보 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010100Service, "selectHouseList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	/**
	 * 증액이율정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010100/selectIntrtList.do")
	public ModelAndView selectIntrtList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("증액이율정보 조회 ----------------------------------------------------!");		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS010100Service, "selectIntrtList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	
	//  저장
	@RequestMapping("/hsco/pms/sls/hou/std/SLS010100/save.do")
	public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(SLS010100Service, "save", xpDto, mav);
		return mav;
	}	
		
}
