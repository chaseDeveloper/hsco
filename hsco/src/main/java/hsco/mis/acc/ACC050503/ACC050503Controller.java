package hsco.mis.acc.ACC050503;

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
 * @Class Name   	: ACC050503Controller.java
 * @Description  	: 미수금내역을 조회하는  Controller 클래스 
 * @author       	: 
 * @since        	: 2019. 07. 02.
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
public class ACC050503Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(ACC050503Controller.class);
	
	@Resource(name ="ACC050503Service")
	ACC050503ServiceImpl ACC050503Service;
	
	/**
	 * 미수금 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	
	@RequestMapping("/hsco/mis/acc/ACC050503/OutstandAmtList.do")
	public ModelAndView OutstandAmtList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("CashableAssList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC050503Service, "OutstandAmtList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
	}

}//end Controller
