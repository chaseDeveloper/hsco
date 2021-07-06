package hsco.com.sym.aum.SYM020100;

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
 * @Class Name   	: SYM020100Controller.java
 * @Description  	: 권한그룹관리 
 * @author       	: 정윤원
 * @since        	: 2015. 8. 22.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 22.					정윤원				최초생성
 * </pre>
 */
@Controller
public class SYM020100Controller  extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM020100Controller.class);	
	
	@Resource(name="SYM020100Service")
	SYM020100ServiceImpl SYM020100Service;
	
	/**
	 * 권한그룹 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020100/SYM020100List.do") 
	public ModelAndView SYM020100List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(SYM020100Service, "SYM020100List", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		return mav;
	}
	
	/**
	 * 권한그룹 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020100/SYM020100CUD.do")
	public ModelAndView SYM020100CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(SYM020100Service, "SYM020100CUD", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		return mav;
	}
}



