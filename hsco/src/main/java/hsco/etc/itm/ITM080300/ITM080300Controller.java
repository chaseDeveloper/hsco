package hsco.etc.itm.ITM080300;

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
 * @Class Name   	: ITM080300Controller.java
 * @Description  	: 회의록을 관리하는 컨트롤러 클래스
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
public class ITM080300Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM080300Controller.class);	
	
	@Resource(name="ITM080300Service")
	ITM080300ServiceImpl ITM080300Service;
	
	/** 회의록관리 목록  조회 */
	@RequestMapping("/hsco/etc/itm/ITM080300/ITM080300List.do") 
	public ModelAndView ITM080300List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("회의록관리 목록  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM080300Service, "ITM080300List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/** 회의록관리 신규,수정,삭제 */
	@RequestMapping("/hsco/etc/itm/ITM080300/ITM080300CUD.do")
	public ModelAndView ITM080300CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("회의록관리 신규,수정,삭제 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM080300Service, "ITM080300CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}

}
