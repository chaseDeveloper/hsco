package hsco.etc.itm.ITM050600;

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
 * @Class Name   	: ITM050600Controller.java
 * @Description  	: 개인정보파일대장을 관리하는 컨트롤러 클래스
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
public class ITM050600Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM050600Controller.class);	
	
	@Resource(name="ITM050600Service")
	ITM050600ServiceImpl ITM050600Service;
	
	/** 개인정보파일대장 목록을  조회 */
	@RequestMapping("/hsco/etc/itm/ITM050600/ITM050600List.do") 
	public ModelAndView ITM050600List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("개인정보파일대장 목록을  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM050600Service, "ITM050600List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 개인정보파일대장을 신규,수정,삭제*/
	@RequestMapping("/hsco/etc/itm/ITM050600/ITM050600CUD.do")
	public ModelAndView ITM050600CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("개인정보파일대장을 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM050600Service, "ITM050600CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
		
	/** 프로그램목록 팝업을 조회 */
	@RequestMapping("/hsco/etc/itm/ITM050600/ITM050600List_P.do") 
	public ModelAndView ITM050600List_P(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("프로그램목록 팝업을 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM050600Service, "ITM050600List_P", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	/*월임대료 프로시저 호출 */
	@RequestMapping("/hsco/etc/itm/ITM050600/ITM050600SaveAll.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model) throws Exception {
	    log.debug("신규,수정,삭제----------------------------------------------------!");
	    ModelAndView mav = new ModelAndView("nexacroMapView");
	    
	    execService(ITM050600Service, "ITM050600SaveAll", xpDto, mav);

	    mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
	    
	    return mav;
	    }
}
