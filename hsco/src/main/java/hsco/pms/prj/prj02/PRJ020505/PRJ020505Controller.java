package hsco.pms.prj.prj02.PRJ020505;

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
 * @Class Name   	: PRJ020505Controller.java
 * @Description  	: 사업별추정매출 컨트롤러 클래스 
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
public class PRJ020505Controller extends BaseContoller {

	@Resource(name="PRJ020505Service")
	PRJ020505ServiceImpl svc;

	//  조회
	@RequestMapping("hsco/pms/prj/PRJ020505/mList.do")
	public ModelAndView mList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "mList", xpDto, mav);
		return mav;
	}

	//  조회
	@RequestMapping("hsco/pms/prj/PRJ020505/rList.do")
	public ModelAndView rList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "rList", xpDto, mav);
		return mav;
	}

	//  생성
	@RequestMapping("hsco/pms/prj/PRJ020505/make.do")
	public ModelAndView make(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "make", xpDto, mav);
		return mav;
	}
}
