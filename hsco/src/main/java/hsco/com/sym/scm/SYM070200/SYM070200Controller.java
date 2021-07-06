package hsco.com.sym.scm.SYM070200;

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
 * @Class Name   	: SYM090100Controller.java
 * @Description  	: 내부결재모형을 관리하는 컨트롤러 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 04.
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
public class SYM070200Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM070200Controller.class);	

	@Resource(name="SYM070200Service")
	SYM070200ServiceImpl SYM070200Service;
	
	/**
	 * 연계메시지 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/scm/SYM070200/SYM070200MssageList.do") 
	public ModelAndView SYM070200MssageList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled())
		    log.info("SYM070200MssageList called");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM070200Service, "mssageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 연계메시지항목 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/scm/SYM070200/SYM070200MssageItemList.do") 
	public ModelAndView SYM070200MssageItemList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM070200Service, "mssageItemList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 연계메시지 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/com/sym/scm/SYM070200/SYM070200CUD.do")
	public ModelAndView SYM070200CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("연계메시지 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM070200Service, "SYM070200CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/**
	 * 연계메시지항목 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/com/sym/scm/SYM070200/MssageItemCUD.do")
	public ModelAndView mssageItemCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("연계메시지항목 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM070200Service, "mssageItemCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
}