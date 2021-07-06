package hsco.com.sym.mnm.SYM040200;

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
 * @Class Name   	: SYM040200Controller.java
 * @Description  	: 메뉴를 관리하는 컨트롤러 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 6. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 24.					정윤원				최초생성
 * </pre>  
 */
@Controller
public class SYM040200Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM040200Controller.class);	
	
	@Resource(name="SYM040200Service")
	SYM040200ServiceImpl SYM040200Service;
	
	/**
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040200/SYM040200Code.do") 
	public ModelAndView SYM040200Code(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("매뉴 초기 조회조건 ---!");
		ModelAndView mav = new ModelAndView("nexacroMapView");		
		
		execService(SYM040200Service, "SYM040200Code", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 메뉴 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040200/SYM040200List.do") 
	public ModelAndView SYM040200List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("메뉴관리 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");		
		
		execService(SYM040200Service, "SYM040200List", xpDto, mav);		
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
		
	}
	
	
	/**
	 * 메뉴관리 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040200/SYM040200CUD.do")
	public ModelAndView SYM040200CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("메뉴관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");		
		
		execService(SYM040200Service, "SYM040200CUD", xpDto, mav);
				
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 메뉴 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040200/SYM040200PageIdChk.do") 
	public ModelAndView SYM040200PageIdChk(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("화면존재여부확인 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");		
		
		execService(SYM040200Service, "SYM040200PageIdChk", xpDto, mav);		
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
		
	}
	/**
	 * 메뉴 KEY 정보추출
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040200/SYM040200MenuKey.do") 
	public ModelAndView SYM040200MenuKey(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("화면존재여부확인 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");		
		
		execService(SYM040200Service, "SYM040200MenuKey", xpDto, mav);		
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
		
	}

}
