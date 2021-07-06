package hsco.pms.prj.prj02.PRJ020301;

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
 * @Class Name   	: PRJ020301Controller.java
 * @Description  	: 추정원가 컨트롤러 클래스 
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
public class PRJ020301Controller extends BaseContoller {

	@Resource(name="PRJ020301Service")
	PRJ020301ServiceImpl svc;

	// 원가코드 조회
	@RequestMapping("hsco/pms/prj/PRJ020301/prccdList.do")
	public ModelAndView prccdList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "prccdList", xpDto, mav);
		return mav;
	}

	// 추정원가 조회
	@RequestMapping("hsco/pms/prj/PRJ020301/cdList.do")
	public ModelAndView cdList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "cdList", xpDto, mav);
		return mav;
	}

	//  조회
	@RequestMapping("hsco/pms/prj/PRJ020301/mList.do")
	public ModelAndView mList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "mList", xpDto, mav);
		return mav;
	}

	//  조회
	@RequestMapping("hsco/pms/prj/PRJ020301/rList.do")
	public ModelAndView rList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "rList", xpDto, mav);
		return mav;
	}

	//  조회
	@RequestMapping("hsco/pms/prj/PRJ020301/xlsList.do")
	public ModelAndView xlsList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "xlsList", xpDto, mav);
		return mav;
	}

	//  저장
	@RequestMapping("hsco/pms/prj/PRJ020301/save.do")
	public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "save", xpDto, mav);
		return mav;
	}

	// 차수복사
	@RequestMapping("hsco/pms/prj/PRJ020301/copy.do")
	public ModelAndView copy(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "copy", xpDto, mav);
		return mav;
	}

	// 엑셀 저장
	@RequestMapping("hsco/pms/prj/PRJ020301/xSave.do")
	public ModelAndView xSave(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "xSave", xpDto, mav);
		return mav;
	}
}
