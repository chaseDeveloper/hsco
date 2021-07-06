package hsco.mis.acc.ACC050423;

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
 * @Class Name   	: ACC050423Controller.java
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
public class ACC050423Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC050423Controller.class);
	
	@Resource(name="ACC050423Service")
	ACC050423ServiceImpl ACC050423Service;
	
	/**
	 * 인건비율 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050423/selectLaborRate.do") 
	public ModelAndView selectLaborRate(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("selectLaborRate Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050423Service, "selectLaborRate", xpDto, mav);
        
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	

	/**
	 * 전표생성여부 확인
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050423/chitCnfirmAt.do") 
	public ModelAndView chitCnfirmAt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("chitCnfirmAt Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050423Service, "chitCnfirmAt", xpDto, mav);
        
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	

	/**
	 * 전표생성
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050423/spaccManSlipAi.do") 
	public ModelAndView spaccManSlipAi(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("spaccManSlipAi Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050423Service, "spaccManSlipAi", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		return mav;
	}


	/**
	 * 당월정리
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050423/spaccLaborRate.do") 
	public ModelAndView spaccLaborRate(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("spaccLaborRate Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050423Service, "spaccLaborRate", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		return mav;
	}


	/**
	 * 인건비설정 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050423/selectLaborAmountPartEstbs.do") 
	public ModelAndView selectLaborAmountPartEstbs(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("selectLaborAmountPartEstbs Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050423Service, "selectLaborAmountPartEstbs", xpDto, mav);
        
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
	    mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}


	/**
	 * 인건비 설정 신규, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050423/laborAmountPartEstbsCUD.do") 
	public ModelAndView laborAmountPartEstbsCD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("laborAmountPartEstbsCUD Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050423Service, "laborAmountPartEstbsCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		return mav;
	}


	/**
	 * 인건비 복사
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050423/laborAmountPartEstbsCopy.do") 
	public ModelAndView laborAmountPartEstbsCpoy(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("laborAmountPartEstbsCpoy Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050423Service, "laborAmountPartEstbsCpoy", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		return mav;
	}
}
