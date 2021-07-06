package hsco.mis.acc.ACC050504;

import javax.annotation.Resource;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC050504Controller.java
 * @Description  	: 유동성장기미수금내역을 조회하는  Controller 클래스 
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
public class ACC050504Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACC050504Controller.class);
	
	@Resource(name="ACC050504Service")
	ACC050504ServiceImpl ACC050504Service; 
	
	/**
	 * 유동성장기미수금 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	
	@RequestMapping("/hsco/mis/acc/ACC050504/liqLongOutAmtList.do")
	public ModelAndView liqLongOutAmtList(NexacroMapDTO xpDto, Model model) throws Exception{
		
		if(log.isInfoEnabled()) log.info("liqLongOutAmtList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(ACC050504Service, "liqLongOutAmtList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		
		
		return mav;
	}

}//end controller
