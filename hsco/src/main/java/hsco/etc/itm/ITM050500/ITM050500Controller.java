package hsco.etc.itm.ITM050500;

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
 * @Class Name   	: ITM050500Controller.java
 * @Description  	: 표준절차서를 관리하는 컨트롤러 클래스
 * @author       	: 이호준
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.			  이호준			최초생성
 * </pre>  
 */


@Controller
public class ITM050500Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM050500Controller.class);	
	
	@Resource(name="ITM050500Service")
	ITM050500ServiceImpl ITM050500Service;
	
	/** 표준절차서 목록을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM050500/ITM050500List.do") 
	public ModelAndView ITM050500List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("표준절차서 목록을  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM050500Service, "ITM050500List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 표준절차서 신규,수정*/
	@RequestMapping("/hsco/etc/itm/ITM050500/ITM050500CU.do")
	public ModelAndView ITM050500CU(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("표준절차서 신규,수정----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM050500Service, "ITM050500CU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	
	/** 표준절차서 삭제*/
	@RequestMapping("/hsco/etc/itm/ITM050500/ITM050500D.do")
	public ModelAndView ITM050500D(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("표준절차서 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM050500Service, "ITM050500D", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}

	/**
	 * 표준절차서 첨부파일 정보 수정(삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/etc/itm/ITM050500/ITM050500DFILE.do") 
	public ModelAndView ITM050500DFILE(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM050500Service, "ITM050500DFILE", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}
}
