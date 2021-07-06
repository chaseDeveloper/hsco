package hsco.mis.acc.ACC050506;

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
 * @Class Name   	: ACC050506Controller.java
 * @Description  	: 미지급금명세서를  조회하는  Controller 클래스 
 * @author       	: 
 * @since        	: 2019. 07. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2019 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2019. 07. 08.			최초생성
 * </pre>  
 */

@Controller
public class ACC050506Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(ACC050506Controller.class);
	
	@Resource(name="ACC050506Service")
	ACC050506ServiceImpl ACC050506Service;
	
	/**
	 * 미지급금 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	
	@RequestMapping("/hsco/mis/acc/ACC050506/payableAmtList.do")
	public ModelAndView payableAmtList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("payableAmtList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(ACC050506Service, "payableAmtList", xpDto, mav);		
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;		
	}

}//end Controller
