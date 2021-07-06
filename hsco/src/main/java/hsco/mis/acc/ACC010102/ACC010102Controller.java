package hsco.mis.acc.ACC010102;

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
 * @Description  	: 마감일관리 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 15.
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
public class ACC010102Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC010102Controller.class);
	
	@Resource(name="acc010102Service")
	ACC010102ServiceImpl acc010102Service;
	
	/**
	 * 마감일관리 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC010102/closDeManageList.do") 
	public ModelAndView closDeManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("closDeManageList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc010102Service, "closDeManageList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
	
	/**
	 * 마감일관리 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC010102/closDeManageCUD.do") 
	public ModelAndView closDeManageCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc010102Service, "closDeManageCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
	
	/**
	 * 역분개 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC010102/selectinverseJrnlzpr.do") 
	public ModelAndView selectinverseJrnlzpr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc010102Service, "selectinverseJrnlzpr", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
	/**
	 * 역분개
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC010102/inverseJrnlzpr.do") 
	public ModelAndView inverseJrnlzpr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc010102Service, "inverseJrnlzpr", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
}
