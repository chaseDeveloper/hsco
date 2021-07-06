package hsco.com.sym.ohm.SYM060200;

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
 * @Class Name   	: SYM060200Controller.java
 * @Description  	: 온라인도움말을 관리하는 컨트롤러 클래스
 * @author       	: 고진호
 * @since        	: 2015. 12. 21.
 * @version      	: 1.0
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
public class SYM060200Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	

	@Resource(name="SYM060200Service")
	SYM060200ServiceImpl SYM060200Service;
	
	/**
	 * 온라인도움말 버전 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060200/SYM060200List.do") 
	public ModelAndView SYM060200List(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled())
		    log.info("SYM060200List called");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM060200Service, "hpcmVerList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

	/**
	 * 온라인도움말 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060200/SYM060201List.do") 
	public ModelAndView SYM060201List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM060200Service, "hpcmList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 온라인도움말 상세목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060200/SYM060202List.do") 
	public ModelAndView SYM060202List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM060200Service, "hpcmDtlsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 온라인 도움말 버전 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060200/SYM060200CUD.do")
	public ModelAndView SYM060200CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("온라인 도움말 버전 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM060200Service, "SYM060200CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 온라인 도움말 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060200/SYM060201CUD.do")  
	public ModelAndView SYM060201CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("온라인 도움말 버전 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM060200Service, "SYM060201CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 파일일련번호 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060200/getFileSn.do") 
	public ModelAndView atchmnFileSn(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM060200Service, "selectFielSnMap", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 온라인 도움말 등록, 수정, 삭제(첨부파일)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060200/SYM060201CUDWithFile.do")  
	public ModelAndView SYM060201CUDWithFile(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("온라인 도움말 버전 관리 CUD WithFile시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM060200Service, "SYM060201CUDWithFile", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		
		
		
	}
	
	/**
	 * 온라인 도움말 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060200/SYM060202CUD.do")  
	public ModelAndView SYM060202CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("온라인 도움말 버전 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM060200Service, "SYM060202CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
	
	
}