package hsco.mis.acc.ACC050410;

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
 * @Class Name   	: ACC050410Controller.java
 * @Description  	: 미지급금 서비스 Controller 클래스
 * @author       	: 이수지
 * @since        	: 2015. 11. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 20.	이수지		최초생성
 * </pre>  
 */
@Controller
public class ACC050410Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC050410Controller.class);
	
	@Resource(name="ACC050410Service")
	ACC050410ServiceImpl ACC050410Service;
	
	
	/**
	 * 미지급금
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050410/unpayIntrBillList.do")
	public ModelAndView select(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("select Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC050410Service, "unpayIntrBillList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
}
