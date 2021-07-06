package hsco.mis.acc.ACC020202;

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
 * @Class Name   	: ACC020202Controller.java
 * @Description  	: 지출결의등록(지출계획) 관리하는 Controller 클래스 
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
public class ACC020202Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC020202Controller.class);
	
	@Resource(name="acc020202Service")
	ACC020202ServiceImpl acc020202Service;
	
	
	/**
	 * 지출계획 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020202/wikCptalPlanList.do") 
	public ModelAndView wikCptalPlanList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc020202Service, "wikCptalPlanList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
    
    
    /**
     * 결의서 삭제
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/acc/ACC020202/expDsnD.do") 
	public ModelAndView expDsnD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc020202Service, "expDsnD", xpDto, mav);
        execService(acc020202Service, "wikCptalPlanList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
