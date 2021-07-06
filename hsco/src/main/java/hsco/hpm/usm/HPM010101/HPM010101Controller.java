package hsco.hpm.usm.HPM010101;

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
 * @Class Name   	: HPM010101Controller.java
 * @Description  	: 회원관리
 * @author       	: 정 민
 * @since        	: 2017. 08. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *	작성일							작성자				내용
 * ------------------------------------------------------------------
 *	2017. 08. 04.					정 민				최초생성
 * </pre>  
 */

@Controller
public class HPM010101Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM010101Controller.class);
	@Resource(name="HPM010101Service")
	HPM010101ServiceImpl HPM010101Service;
	
	/**
	 * 회원 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010101/selectMberList.do")
	public ModelAndView selectMberList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectMemberList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM010101Service, "selectMberList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 회원 목록 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010101/saveMberList.do")
	public ModelAndView saveMberList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM010101Service, "saveMberList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}
	
	/**
	 * 체육시설팀 회원부가정보 초기화 실행
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010101/initMberInfoU4Sports.do")
	public ModelAndView initMberInfoU4Sports(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM010101Service, "initMberCU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}
	
	/**
	 * 회원 로그인 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010101/selectLoginLog.do")
	public ModelAndView selectLoginLog(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectLoginLog Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM010101Service, "selectLoginLog", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 사업소 코드 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010101/bizplcSearchList.do")
	public ModelAndView bizplcSearchList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectLoginLog Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM010101Service, "bizplcSearchList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}