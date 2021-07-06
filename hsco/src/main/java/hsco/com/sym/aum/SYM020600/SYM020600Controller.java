package hsco.com.sym.aum.SYM020600;

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
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM020600Controller.java
 * @Description  	: 권한에 대한 버튼 차단
 * @author       	: 정윤원
 * @since        	: 2015. 9. 1.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 1.					정윤원				최초생성
 * </pre>
 */

@Controller
public class SYM020600Controller extends BaseContoller {

protected Logger log = LoggerFactory.getLogger(SYM020600Controller.class);	
	
	@Resource(name="SYM020600Service")
	SYM020600ServiceImpl SYM020600Service;
	

	/**
	 * 권한에 대한 화면 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020600/getListPage.do") 
	public ModelAndView getListUser(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isDebugEnabled())
    	    log.debug(" getListUser ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020600Service, "getListPage", xpDto, mav);
		
		return mav;
		
	}
	
	/**
	 * 화면에 대한 차단버튼 목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020600/getListButton.do") 
	public ModelAndView getListGrp(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020600Service, "getListButton", xpDto, mav);
		
		return mav;
		
	}
	

	
	/**
	 * 차단버튼 관리
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020600/execCUD.do")
	public ModelAndView execCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020600Service, "execCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
}

