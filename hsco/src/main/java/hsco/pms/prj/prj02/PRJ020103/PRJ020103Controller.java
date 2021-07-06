package hsco.pms.prj.prj02.PRJ020103;

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
 * @Class Name   	: PRJ020103Controller.java
 * @Description  	: 분양가상한제 컨트롤러 클래스 
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
public class PRJ020103Controller extends BaseContoller {

	@Resource(name="PRJ020103Service")
	PRJ020103ServiceImpl svc;

	// 분양가상한 조회
	@RequestMapping("hsco/pms/prj/PRJ020103/totList.do")
	public ModelAndView totList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "totList", xpDto, mav);
		return mav;
	}

	// 상한가_대지비 조회
	@RequestMapping("hsco/pms/prj/PRJ020103/landList.do")
	public ModelAndView landList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "landList", xpDto, mav);
		return mav;
	}

	// 상한가_건축비 조회
	@RequestMapping("hsco/pms/prj/PRJ020103/bldgList.do")
	public ModelAndView bldgList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "bldgList", xpDto, mav);
		return mav;
	}

	//  저장
	@RequestMapping("hsco/pms/prj/PRJ020103/save.do")
	public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "save", xpDto, mav);
		return mav;
	}
}
