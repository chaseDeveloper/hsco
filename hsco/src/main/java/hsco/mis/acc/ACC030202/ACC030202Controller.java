package hsco.mis.acc.ACC030202;

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
 * @Class Name   	: ACC030202Controller.java
 * @Description  	: 원천징수영수증 관리하는 Controller 클래스 
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
public class ACC030202Controller extends BaseContoller {

	@Resource(name="ACC030202Service")
	ACC030202ServiceImpl ACC030202Service;
	
	protected Logger log = LoggerFactory.getLogger(ACC030202Controller.class);
	
	/**
	 * 원천징수영수증(건별)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC030202/wthtxRciptCsbyList.do")
	public ModelAndView wthtxRciptCsbyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("wthtxRciptCsbyList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC030202Service, "wthtxRciptCsbyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 원천징수영수증(개인별)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC030202/wthtxRciptIndvdlList.do")
	public ModelAndView wthtxRciptIndvdlList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC030202Service, "wthtxRciptIndvdlList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 거주자의 기타소득 원천징수영수증
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC030202/etcIncome.do")
	public ModelAndView etcIncome(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC030202Service, "etcIncome", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 거주자의 사업소득 원천징수영수증
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC030202/bsnsIncome.do")
	public ModelAndView bsnsIncome(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC030202Service, "bsnsIncome", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
}
