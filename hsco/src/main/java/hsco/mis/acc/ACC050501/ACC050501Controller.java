package hsco.mis.acc.ACC050501;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.mis.acc.ACC050401.ACC050401Controller;
import hsco.mis.acc.ACC050401.ACC050401ServiceImpl;

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
 * @Class Name   	: ACC050501Controller.java
 * @Description  	: 현금 및 현금성자산을 조회하는  Controller 클래스 
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
public class ACC050501Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACC050501Controller.class);
	
	@Resource(name="ACC050501Service")
	ACC050501ServiceImpl ACC050501Service;
	
	/**
	 * 현금 및 현금성자산 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050501/CashableAssList.do") 
	public ModelAndView CashableAssList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("CashableAssList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050501Service, "CashableAssList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

}//end Controller
