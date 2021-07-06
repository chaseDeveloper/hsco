package hsco.mis.acc.ACC020503;

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
 * @Class Name   	: ACC020503Controller.java
 * @Description  	: 지출내역통보 관리하는 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 08. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 25.	이상명		최초생성
 * </pre>  
 */
@Controller
public class ACC020503Controller extends BaseContoller {

	@Resource(name="ACC020503Service")
	ACC020503ServiceImpl ACC020503Service;
	
	protected Logger log = LoggerFactory.getLogger(ACC020503Controller.class);
	
	/**
	 * 지출내역통보 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020503/incExpElseCashMastrList.do")
	public ModelAndView incExpElseCashMastrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("incExpElseCashMastrList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC020503Service, "incExpElseCashMastrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
    
	
}
