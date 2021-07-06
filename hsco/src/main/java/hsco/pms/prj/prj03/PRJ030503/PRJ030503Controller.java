package hsco.pms.prj.prj03.PRJ030503;

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
 * @Class Name   	: PRJ030503Controller.java
 * @Description  	: 원가항목별명세서 컨트롤러 클래스 
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
public class PRJ030503Controller extends BaseContoller {

	@Resource(name="PRJ030503Service")
	PRJ030503ServiceImpl svc;


	//  조회
	@RequestMapping("hsco/pms/prj/PRJ030503/d1List.do")
	public ModelAndView d1List(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "d1List", xpDto, mav);
		return mav;
	}

	//  조회
	@RequestMapping("hsco/pms/prj/PRJ030503/d2List.do")
	public ModelAndView d2List(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "d2List", xpDto, mav);
		return mav;
	}
}
