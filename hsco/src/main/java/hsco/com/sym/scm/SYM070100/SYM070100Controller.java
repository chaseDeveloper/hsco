package hsco.com.sym.scm.SYM070100;

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
 * @Class Name   	: SYM090100Controller.java
 * @Description  	: 연계기관/시스템/서비스를 관리하는 컨트롤러 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *
 * </pre>  
 */

@Controller
public class SYM070100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM070100Controller.class);	

	@Resource(name="SYM070100Service")
	SYM070100ServiceImpl SYM070100Service;
	
	/**
	 * 시스템연계  목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/scm/SYM070100/SYM070100List.do") 
	public ModelAndView SYM070100List(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled())
		    log.info("SYM070100List called");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM070100Service, "sysCntcList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 시스템연계  내부결재용 보고서 정보를 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/scm/SYM070100/SYM070101List.do") 
	public ModelAndView SYM070101List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM070100Service, "sysCntcReport", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
		
	/**
	 * 시스템연계 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/scm/SYM070100/SYM070100CUD.do")
	public ModelAndView SYM070100CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("시스템연계 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM070100Service, "SYM070100CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	
	
	/**
	 * 내부결재ID 수정
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/scm/SYM070100/SYM070101U.do")
	public ModelAndView SYM070101U(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("내부결재ID 수정 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM070100Service, "SYM070101U", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/**
	 * (팝업용) 연계서비스 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/scm/SYM070100/SYM070102List.do") 
	public ModelAndView SYM070102List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM070100Service, "cntcSvcList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
}