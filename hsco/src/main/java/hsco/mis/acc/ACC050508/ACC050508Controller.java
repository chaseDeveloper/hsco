package hsco.mis.acc.ACC050508;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC050508Controller.java
 * @Description  	: 예수금명세서를 조회하는  Controller 클래스 
 * @author       	: 
 * @since        	: 2019. 07. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2019 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2019. 07. 10.			최초생성
 * </pre>  
 */

@Controller
public class ACC050508Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(ACC050508Controller.class);
	
	@Resource(name="ACC050508Service")
	ACC050508ServiceImpl ACC050508Service;
	
	/**
	 * 예수금명세서 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	
	@RequestMapping("/hsco/mis/acc/ACC050508/depositList.do")
	public ModelAndView depositList (NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("depositList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC050508Service, "depositList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		
		
		return mav;
		
	}

}//end controller
