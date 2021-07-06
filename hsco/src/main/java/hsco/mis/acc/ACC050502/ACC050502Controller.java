package hsco.mis.acc.ACC050502;

import javax.annotation.Resource;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.mis.acc.ACC050401.ACC050401Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC050502Controller.java
 * @Description  	: 단기금융상품을 조회하는  Controller 클래스 
 * @author       	: 
 * @since        	: 2019. 07. 01.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2019 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2019. 07. 01.			최초생성
 * </pre>  
 */

@Controller
public class ACC050502Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(ACC050502Controller.class);
	
	@Resource(name = "ACC050502Service")
	ACC050502ServiceImpl ACC050502Service;
	
	/**
	 * 단기금융상품 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	
	@RequestMapping("/hsco/mis/acc/ACC050502/ShortInstList.do")
	public ModelAndView ShortInstList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("ShortInstList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC050502Service, "ShortInstList", xpDto, mav);
		
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}


}//end Controller
