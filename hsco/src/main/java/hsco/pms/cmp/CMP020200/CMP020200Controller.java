package hsco.pms.cmp.CMP020200;

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
 * @Class Name   	: CMP020200Controller.java
 * @Description  	: 조서일괄등록(업로드)
 * @author       	: 지효정
 * @since        	: 2015. 7. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 7.					지효정				최초생성
 * </pre>  
 */
@Controller
@RequestMapping("/hsco/pms/cmp/wed/CMP020200") 
public class CMP020200Controller extends BaseContoller{
	private final Logger log = LoggerFactory.getLogger(CMP020200Controller.class);
	
	@Resource(name="CMP020200Service")
	CMP020200ServiceImpl cmp020200Service;
	
	@RequestMapping("/thingWtnncList.do") 
	public ModelAndView thingWtnncList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사업지구 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp020200Service, "thingWtnncList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/thingWtnncCUD.do") 
	public ModelAndView thingWtnncCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사업지구 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp020200Service, "thingWtnncCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("/thingWtnncDeleteAll.do") 
	public ModelAndView thingWtnncDeleteAll(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사업지구 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp020200Service, "thingWtnncDeleteAll", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
}
