package hsco.mis.bdg.BDG040205;

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
 * @Class Name   	: BDG040205Controller.java
 * @Description  	: 지출결산보고서를 조회하는 Controller 클래스 
 * @author       	: 이수지
 * @since        	: 2018. 01. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 01. 02.	이수지		최초생성
 * </pre>  
 */
@Controller
public class BDG040205Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(BDG040205Controller.class);
	
	@Resource(name="BDG040205Service")
	BDG040205ServiceImpl BDG040205Service;
	
	/**
	 * 명세서 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG040205/ExpndtrStacntReprt.do") 
	public ModelAndView expndtrStacntReprt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("expndtrStacntReprt Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(BDG040205Service, "expndtrStacntReprt", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 지출결의서 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG040205/selectExpDsnList.do") 
	public ModelAndView selectExpDsnList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("selectExpDsnList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(BDG040205Service, "selectExpDsnList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
