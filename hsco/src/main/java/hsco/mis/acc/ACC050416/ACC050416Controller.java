package hsco.mis.acc.ACC050416;

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
 * @Class Name   	: ACC050416Controller.java
 * @Description  	: 차입금명세서를 조회하는 컨트롤러 클래스
 * @author       	: 양성모
 * @since        	: 2015. 11. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 18.				   양성모				최초생성
 * </pre>  
 */

@Controller
public class ACC050416Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACC050416Controller.class);	
	
	@Resource(name="ACC050416Service")
	ACC050416ServiceImpl ACC050416Service;

	
	/**
	 * 공사채명세서 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050416/selectPbncdList.do") 
	public ModelAndView selectPbncdList03(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("selectPbncdList03 Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC050416Service, "selectPbncdList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}		
	
}
