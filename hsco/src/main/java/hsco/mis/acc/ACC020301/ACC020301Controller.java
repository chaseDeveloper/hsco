package hsco.mis.acc.ACC020301;

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
 * @Class Name   	: ACC020301Controller.java
 * @Description  	: 지출내역전송 관리하는 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 20.	이상명		최초생성
 * </pre>  
 */
@Controller
public class ACC020301Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC020301Controller.class);
	
	@Resource(name="acc020301Service")
	ACC020301ServiceImpl acc020301Service;
	
	/**
	 * 대량이체
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020301/lqttTransfrList.do") 
	public ModelAndView lqttTransfrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("lqttTransfrList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc020301Service, "lqttTransfrList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 거액이체
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020301/bmnyTransfrList.do") 
	public ModelAndView bmnyTransfrList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc020301Service, "bmnyTransfrList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	
	/**
	 * 급여이체
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020301/salaryTransfrList.do") 
	public ModelAndView salaryTransfrList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc020301Service, "salaryTransfrList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	
	/**
	 * 자료전송
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020301/expndtrBranchSend.do") 
	public ModelAndView expndtrBranchSend(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc020301Service, "expndtrBranchSend", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
