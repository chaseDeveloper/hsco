package hsco.pms.cmp.CMP040900;

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
 * @Class Name   	: CMP040900Controller.java
 * @Description  	: 보상금청구승인
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
@RequestMapping("/hsco/pms/cmp/tdd/CMP040900")
public class CMP040900Controller extends BaseContoller{
	private final Logger log = LoggerFactory.getLogger(CMP040900Controller.class);
	
	@Resource(name="CMP040900Service")
	CMP040900ServiceImpl cmp040900Service;
	
	@RequestMapping("/rwmnyPymntList.do") 
	public ModelAndView rwmnyPymntList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상금 지급 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040900Service, "rwmnyPymntList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	@RequestMapping("/rwmnyPymntU.do") 
	public ModelAndView rwmnyPymntU(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상금액 업데이트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040900Service, "rwmnyPymntU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("/thingWtnncList.do") 
	public ModelAndView thingWtnncList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상금 지급 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040900Service, "thingWtnncList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
