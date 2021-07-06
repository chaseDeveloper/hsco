package hsco.mis.acc.ACC020207;

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
 * @Class Name   	: ACC020207Controller.java
 * @Description  	: 지출결의이력을 관리하는 Controller 클래스 
 * @author       	: 권재만
 * @since        	: 2020. 05. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020. 05. 26.	권재만		최초생성
 * </pre>  
 */
@Controller
public class ACC020207Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC020207Controller.class);
	
	@Resource(name="ACC020207Service")
	ACC020207ServiceImpl ACC020207Service;
	
	
	/**
	 * 지출결의 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020207/wikCptalPlanList.do") 
	public ModelAndView wikCptalPlanList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC020207Service, "wikCptalPlanList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 지출결의 이력 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020207/selectExpDsnMastrHist.do") 
	public ModelAndView selectExpDsnMastrHist(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC020207Service, "selectExpDsnMastrHist", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
    
}
