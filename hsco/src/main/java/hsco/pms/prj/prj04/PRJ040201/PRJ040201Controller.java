package hsco.pms.prj.prj04.PRJ040201;

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
 * @Class Name   	: PRJ040201Controller.java
 * @Description  	: 사업지구 컨트롤러 클래스 
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
public class PRJ040201Controller extends BaseContoller {
	@Resource(name="PRJ040201Service")
	PRJ040201ServiceImpl svc;


	/**
	 * 사업개요 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/prj/PRJ040201/mList.do")
	public ModelAndView mList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "mList", xpDto, mav);
		return mav;
	}


	/**
	 * 사업개요 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/prj/PRJ040201/save.do")
	public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "save", xpDto, mav);
		return mav;
	}


	/**
	 * 파일조회 [첨부파일, 이미지]
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/prj/PRJ040201/fileList.do")
	public ModelAndView fileList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "fileList", xpDto, mav);
		return mav;
	}


	/**
	 * 파일업로드
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/prj/PRJ040201/fileUpload.do")
	public ModelAndView fileUpload(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "fileUpload", xpDto, mav);
		return mav;
	}


	/**
	 * 파일삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/prj/PRJ040201/fileDelete.do")
	public ModelAndView fileDelete(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "fileDelete", xpDto, mav);
		return mav;
	}


	/**
	 * 홈페이지 연동(사업개요)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/prj/PRJ040201/hpgIntrlck.do")
	public ModelAndView hpgIntrlck1(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(svc, "hpgIntrlck", xpDto, mav);
		return mav;
	}
}
