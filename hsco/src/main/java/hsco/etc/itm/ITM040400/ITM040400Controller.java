package hsco.etc.itm.ITM040400;
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
 * @Class Name   	: ITM040400Controller.java
 * @Description  	: 서버성능을 관리하는 컨트롤러 클래스
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
public class ITM040400Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM040400Controller.class);	
	
	@Resource(name="ITM040400Service")
	ITM040400ServiceImpl ITM040400Service;
	
	/** 서버성능  리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM040400/ITM040400List.do") 
	public ModelAndView ITM040400List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("서버성능  리스트를  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM040400Service, "ITM040400List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

	
	/** 서버성능 신규,수정 */
	@RequestMapping("/hsco/etc/itm/ITM040400/ITM040400CU.do")
	public ModelAndView ITM040400CU(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("서버성능 신규,수정----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM040400Service, "ITM040400CU", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}

	/** 서버성능 삭제 */
	@RequestMapping("/hsco/etc/itm/ITM040400/ITM040400D.do")
	public ModelAndView ITM040400D(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("서버성능 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM040400Service, "ITM040400D", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/**
	 * 서버성능 첨부파일을 삭제(삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/etc/itm/ITM040400/ITM040400DFILE.do") 
	public ModelAndView ITM040400DFILE(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM040400Service, "ITM040400DFILE", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상삭제");
		
		return mav;
	}
}
