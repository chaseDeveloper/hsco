package hsco.mis.acc.ACC040201;

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
 * @Class Name   	: ACC040201Controller.java
 * @Description  	: 카드별집계관리 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 16.	이상명		최초생성
 * </pre>  
 */
@Controller
public class ACC040201Controller extends BaseContoller {

    protected Logger log = LoggerFactory.getLogger(ACC040201Controller.class);
	
	@Resource(name="acc040201Service")
	ACC040201ServiceImpl acc040201Service;
		
	/**
	 * 카드별집계관리 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC040201/catsApprovalList.do") 
	public ModelAndView catsApprovalList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("catsApprovalList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(acc040201Service, "catsApprovalList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
