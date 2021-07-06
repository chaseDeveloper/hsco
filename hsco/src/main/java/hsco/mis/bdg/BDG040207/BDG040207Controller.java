package hsco.mis.bdg.BDG040207;

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
 * @Class Name   	: BDG040207Controller.java
 * @Description  	: 수입결산보고서를 조회하는 Controller 클래스 
 * @author       	: 김형태
 * @since        	: 2018. 01. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2018.01.08.                     김형태              최초생성
 * </pre>
 */
@Controller
public class BDG040207Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(BDG040207Controller.class);
	
	@Resource(name="BDG040207Service")
	BDG040207ServiceImpl BDG040207Service;
	
	/**
	 * 수입결산보고서 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG040207/selectIncmeStacntReprt.do") 
	public ModelAndView selectIncmeStacntReprt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(BDG040207Service, "selectIncmeStacntReprt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 수입결의서 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG040207/selectIncAnact.do") 
	public ModelAndView selectIncAnact(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(BDG040207Service, "selectIncAnact", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
