package hsco.mis.acc.ACC050424;

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
 * @Class Name   	: ACC050424Controller.java
 * @Description  	: 기타유동자산명세서를 조회하는 Controller 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 12. 01.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 01.	이수지		최초생성
 * </pre>  
 */
@Controller
public class ACC050424Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC050424Controller.class);
	
	@Resource(name="ACC050424Service")
	ACC050424ServiceImpl ACC050424Service;
	
	/**
	 * 인건비 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050424/selectLaborAmount.do") 
	public ModelAndView selectLaborAmount(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("selectLaborAmount Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050424Service, "selectLaborAmount", xpDto, mav);
        
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	

	/**
	 * 상세내역 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050424/selectLaborAmountPartEstbs.do") 
	public ModelAndView selectLaborAmountPartEstbs(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("selectLaborAmountPartEstbs Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050424Service, "selectLaborAmountPartEstbs", xpDto, mav);
        
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	

	/**
	 * 개인별상세내역 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050424/selectLaborAmountPartEstbsDtls.do") 
	public ModelAndView selectLaborAmountPartEstbsDtls(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("selectLaborAmountPartEstbsDtls Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050424Service, "selectLaborAmountPartEstbsDtls", xpDto, mav);
        
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
