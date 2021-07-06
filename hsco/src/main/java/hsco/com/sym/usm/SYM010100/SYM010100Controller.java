package hsco.com.sym.usm.SYM010100;

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
 * @Class Name   	: SYM010100.java
 * @Description  	: 사용자정보를 관리하는 컨트롤러 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 6. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 15.					정윤원				최초생성
 * </pre>  
 */

@Controller
public class SYM010100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM010100Controller.class);	
	
	@Resource(name="SYM010100Service")
	SYM010100ServiceImpl SYM010100Service;
	
//	@Resource(name="ManageLoginSessionSevice")
//	ManageLoginSessionSeviceImpl ManageLoginSessionSevice;
	
	/**
	 * 사용자 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/usm/SYM010100/getListUser.do") 
	public ModelAndView getListUser(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM010100Service, "getListUser", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/**
	 * 사용자 정보 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/usm/SYM010100/execCUD.do")
	public ModelAndView execCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자정보 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM010100Service, "execCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	

	
	/**
	 * 사용자 삭제 시 사용자 관련 자식 데이터 현황을 조회한다
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/usm/SYM010100/checkUserChilds.do") 
	public ModelAndView checkUserChilds(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("사용자 추가 대상 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM010100Service, "checkChildData", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

}
