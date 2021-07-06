package hsco.com.sym.cdm.SYM030100;

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
 * @Class Name   	: SYM030100Controller.java
 * @Description  	: 공통코드를 관리하는 컨트롤러 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 6. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 26.					정윤원				최초생성
 * </pre>  
 */

@Controller
public class SYM030100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM030100Controller.class);	
	
	@Resource(name="SYM030100Service")
	SYM030100ServiceImpl SYM030100Service;
	
	/**
	 * 그룹코드 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/cdm/SYM030100/SYM030100List.do") 
	public ModelAndView SYM030100List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM030100Service, "SYM030100List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 코드 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/cdm/SYM030100/SYM030100CodeList.do") 
	public ModelAndView SYM030100CodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM030100Service, "SYM030100CodeList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 그룹코드 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/cdm/SYM030100/SYM030100GrpCodeCUD.do")
	public ModelAndView SYM030100GrpCodeCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("그룹코드 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM030100Service, "SYM030100GrpCodeCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/**
	 * 코드 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/cdm/SYM030100/SYM030100CodeCUD.do")
	public ModelAndView SYM030100CodeCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM030100Service, "SYM030100CodeCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 그룹코드 기 등록현황을 조회한다(dupcheck 용도)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/cdm/SYM030100/SYM030100dupCheckSttus.do") 
	public ModelAndView SYM030100dupCheckSttus(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("화면관리 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM030100Service, "SYM030100dupCheckSttus", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		
		
		return mav;
		
	}

}
