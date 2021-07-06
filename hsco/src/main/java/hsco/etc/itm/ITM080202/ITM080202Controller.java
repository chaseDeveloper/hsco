package hsco.etc.itm.ITM080202;

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
 * @Class Name   	: ITM080202Controller.java
 * @Description  	: 지원총괄목록을 조회하는 컨트롤러 클래스
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
public class ITM080202Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM080202Controller.class);	
	
	@Resource(name="ITM080202Service")
	ITM080202ServiceImpl ITM080202Service;
	
	/** HW지원목록  조회 */
	@RequestMapping("/hsco/etc/itm/ITM080202/ITM080202List.do") 
	public ModelAndView ITM080202List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW지원목록  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM080202Service, "ITM080202List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** SW지원목록 조회 */
	@RequestMapping("/hsco/etc/itm/ITM080202/ITM080202DetailList.do") 
	public ModelAndView ITM080202DetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("SW지원목록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM080202Service, "ITM080202DetailList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	


}
