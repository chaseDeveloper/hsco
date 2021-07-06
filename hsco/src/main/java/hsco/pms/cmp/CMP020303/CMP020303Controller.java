package hsco.pms.cmp.CMP020303;

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
 * @Class Name   	: CMP020303Controller.java
 * @Description  	: 소재지별 소유자변경 이력 조회
 * @author       	: 이광원
 * @since        	: 2017. 01. 17.
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
@RequestMapping("/hsco/pms/cmp/wed/CMP020303") 
public class CMP020303Controller extends BaseContoller{
	private final Logger log = LoggerFactory.getLogger(CMP020303Controller.class);
	
	@Resource(name="CMP020303Service")
	CMP020303ServiceImpl cmp020303Service;
	
	@RequestMapping("/thingWtnncList.do") 
	public ModelAndView thingWtnncList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사업지구 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp020303Service, "thingWtnncList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
}
