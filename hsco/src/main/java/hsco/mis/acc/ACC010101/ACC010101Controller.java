package hsco.mis.acc.ACC010101;

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
 * @Class Name   	: ACC010102Controller.java
 * @Description  	: 분개유형관리 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2017. 10. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 15.	이상명		최초생성
 *  2016. 01. 18.	이수지		역분개실행(팝업)
 * </pre>  
 */
@Controller
public class ACC010101Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC010101Controller.class);
	
	@Resource(name="acc010101Service")
	ACC010101ServiceImpl acc010101Service;
	
	/**
	 * 예산계정 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC010101/budgetAcntList.do") 
	public ModelAndView budgetAcntList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc010101Service, "budgetAcntList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
	
	@RequestMapping("/hsco/mis/acc/ACC010101/selectAtmcJrnlzTy.do") 
	public ModelAndView selectAtmcJrnlzTy(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc010101Service, "selectAtmcJrnlzTy", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
	
	@RequestMapping("/hsco/mis/acc/ACC010101/saveCopyPrvYearJrnlzTy.do") 
	public ModelAndView saveCopyPrvYearJrnlzTy(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc010101Service, "saveCopyPrvYearJrnlzTy", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
	
	@RequestMapping("/hsco/mis/acc/ACC010101/saveJrnlzTy.do") 
	public ModelAndView saveJrnlzTy(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc010101Service, "saveJrnlzTy", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
	
	
	@RequestMapping("/hsco/mis/acc/ACC010101/selectAtmcJrnlzTyPopup.do") 
	public ModelAndView selectAtmcJrnlzTyPopup(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc010101Service, "selectAtmcJrnlzTyPopup", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
	
	
	@RequestMapping("/hsco/mis/acc/ACC010101/selectJrnlzTyUseCnt.do") 
	public ModelAndView selectJrnlzTyUseCnt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc010101Service, "selectJrnlzTyUseCnt", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
}
