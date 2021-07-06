package hsco.pms.cmp.CMP040502;

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
 * @Class Name   	: CMP040502Controller.java
 * @Description  	: 소유권이전 등기대장
 * @author       	: 지효정
 * @since        	: 2015. 7. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * </pre>  
 */
@Controller
@RequestMapping("/hsco/pms/cmp/tdd/CMP040502")
public class CMP040502Controller extends BaseContoller{
	private final Logger log = LoggerFactory.getLogger(CMP040502Controller.class);
	@Resource(name="CMP040502Service")
	CMP040502ServiceImpl cmp040502Service;
	
	@RequestMapping("/unrgistTrnsferList.do") 
	public ModelAndView unrgistTrnsferList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040502Service, "unrgistTrnsferList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/unrgistTrnsferCUD.do") 
	public ModelAndView unrgistTrnsferCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040502Service, "unrgistTrnsferCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
