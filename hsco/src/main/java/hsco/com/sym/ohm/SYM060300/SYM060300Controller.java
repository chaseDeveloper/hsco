package hsco.com.sym.ohm.SYM060300;

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
 * @Class Name   	: SYM060300Controller.java
 * @Description  	: Q&A 관리하는 컨트롤러 클래스
 * @author       	: 고진호
 * @since        	: 2016. 1. 04.
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
public class SYM060300Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM060300Controller.class);	

	@Resource(name="SYM060300Service")
	SYM060300ServiceImpl SYM060300Service;
	
	/**
	 * Q&A 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060300/SYM060300List.do") 
	public ModelAndView SYM060300List(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled())
		    log.info("SYM060300List called");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM060300Service, "SYM060300List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 삭제할 Q&A 에 걸린 답변이 있는지 확인한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060300/HpcmQnaCnt.do") 
	public ModelAndView hpcmQnaCnt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM060300Service, "hpcmQnaCnt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

	/**
	 * Q&A 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060300/SYM060300CUD.do")
	public ModelAndView SYM060300CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Q&A CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM060300Service, "SYM060300CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
}