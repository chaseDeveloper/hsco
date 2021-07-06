package hsco.etc.itm.ITM040300;

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
 * @Class Name   	: ITM040300Controller.java
 * @Description  	: ... 관리하는 컨트롤러 클래스
 * @author       	: 박종혁
 * @since        	: 2015. 8. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                                  작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 18.	  박종혁	최초생성
 * </pre>  
 */

@Controller
public class ITM040300Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM040300Controller.class);	
	
	@Resource(name="ITM040300Service")
	ITM040300ServiceImpl ITM040300Service;
	
	/** HW목록 리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM040300/ITM040300ListCodeDetail.do") 
	public ModelAndView ITM040300ListCodeDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("HW목록 리스트를  조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM040300Service, "ITM040300ListCodeDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	/** 백업오류 리스트를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM040300/ITM040300List.do") 
	public ModelAndView ITM040300List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("백업오류 리스트를  조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM040300Service, "ITM040300List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 백업오류를 신규,수정,삭제*/
	@RequestMapping("/hsco/etc/itm/ITM040300/ITM040300CUD.do")
	public ModelAndView ITM040300CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("백업오류를 신규,수정,삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM040300Service, "ITM040300CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	


}
