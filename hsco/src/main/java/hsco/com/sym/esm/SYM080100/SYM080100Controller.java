package hsco.com.sym.esm.SYM080100;

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
 * @Class Name   	: SYM080100Controller.java
 * @Description  	: 전지결재진행현황을 관리하는 컨트롤러 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 07.
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
public class SYM080100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM080100Controller.class);	
	
	@Resource(name="SYM080100Service")
	SYM080100ServiceImpl SYM080100Service;
	
	/**
	 * 전자결재진행현황을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/esm/SYM080100/SYM080100Info.do") 
	public ModelAndView SYM080100Info(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(SYM080100Service, "SYM080100Info", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	
	/**
	 * 전자결재현황을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/esm/SYM080100/SYM080100List.do") 
	public ModelAndView SYM080100List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM080100Service, "SYM080100List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 전자결재진행 이력을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
//	@RequestMapping("/hsco/com/sym/esm/SYM080100/SYM080100SanctnHist.do") 
//	public ModelAndView SYM080100SanctnHist(NexacroMapDTO xpDto, Model model) throws Exception {
//		
//		log.debug("코드 리스트 ----------------------------------------------------!");
//		ModelAndView mav = new ModelAndView("nexacroMapView");
//
//		execService(SYM080100Service, "SYM080100SanctnHist", xpDto, mav );
//
//		mav.addObject(NexacroConstant.ERROR_CODE, "0");
//		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
//		
//		return mav;
//		
//	}


}
