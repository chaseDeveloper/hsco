package hsco.pms.prj.prj02.PRJ020702;

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
 * @Class Name   	: PRJ020702Controller.java
 * @Description  	: 연차별투자계획 컨트롤러 클래스 
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
public class PRJ020702Controller extends BaseContoller {

	@Resource(name="PRJ020702Service")
	PRJ020702ServiceImpl svc;

	/**
	 * 연차별투자계획 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/prj/PRJ020702/mList.do")
	public ModelAndView mList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "mList", xpDto, mav);
		return mav;
	}


	/**
	 * 연차별투자계획 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/prj/PRJ020702/save.do")
	public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "save", xpDto, mav);
		return mav;
	}


	/**
	 * 원가코드 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/prj/PRJ020702/prmpcCodeList.do")
	public ModelAndView prmpcCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "prmpcCodeList", xpDto, mav);
		return mav;
	}


	/**
	 * 양식 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/prj/PRJ020702/sampleList.do")
	public ModelAndView sampleList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "sampleList", xpDto, mav);
		return mav;
	}
}
