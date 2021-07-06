package hsco.pms.prj.prj02.PRJ020402;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ020402Controller.java
 * @Description  	: 주택분양가 컨트롤러 클래스 
 * @author       	: 
 * @since        	: 
 * @version      	: 
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  
 * </pre>  
 */

@Controller
public class PRJ020402Controller extends BaseContoller {

	@Resource(name="PRJ020402Service")
	PRJ020402ServiceImpl svc;

	// 분양가산정 조회
	@RequestMapping("hsco/pms/prj/PRJ020402/calcList.do")
	public ModelAndView calcList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "calcList", xpDto, mav);
		return mav;
	}
	
	// 분양가변경 조회
	@RequestMapping("hsco/pms/prj/PRJ020402/chngList.do")
	public ModelAndView chngList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "chngList", xpDto, mav);
		return mav;
	}

	//  저장
	@RequestMapping("hsco/pms/prj/PRJ020402/save.do")
	public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "save", xpDto, mav);
		return mav;
	}
}
