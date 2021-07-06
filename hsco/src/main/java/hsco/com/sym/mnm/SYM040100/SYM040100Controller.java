package hsco.com.sym.mnm.SYM040100;
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
 * @Class Name   	: SYM040100Controller.java
 * @Description  	: 화면을 관리하는 컨트롤러 클래스
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
public class SYM040100Controller extends BaseContoller {

	
	protected Logger log = LoggerFactory.getLogger(SYM040100Controller.class);	
	
	@Resource(name="SYM040100Service")
	SYM040100ServiceImpl SYM040100Service;
	
	/**
	 * 메뉴 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040100/SYM040100List.do") 
	public ModelAndView SYM040100List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("화면관리 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM040100Service, "SYM040100List", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		
		
		return mav;
		
	}
	
	/**
	 * 개인정보 sql 목록 조회  
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040100/selectPageIndvdlinfoMapping.do") 
	public ModelAndView selectPageIndvdlinfoMapping(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("개인정보 sql 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM040100Service, "selectPageIndvdlinfoMapping", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		
		
		return mav;
		
	}
	
	/**
	 * 화면관리 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040100/SYM040100CUD.do")
	public ModelAndView SYM040100CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("화면관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM040100Service, "SYM040100CUD", xpDto, mav );

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
	@RequestMapping("/hsco/com/sym/mnm/SYM040100/SYM040100CHECK.do") 
	public ModelAndView SYM040100CHECK(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("화면관리 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM040100Service, "checkPageButtonInfo", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		
		
		return mav;
		
	}
	
	/**
	 * 화면의 자식 정보현황을 조회한다(Validation 용도)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040100/SYM040100PageChildsSttus.do") 
	public ModelAndView SYM040100PageChildsSttus(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("화면관리 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM040100Service, "searchPageChildSttus", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		
		
		return mav;
		
	}
}
