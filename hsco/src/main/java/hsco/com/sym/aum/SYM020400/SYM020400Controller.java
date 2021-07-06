package hsco.com.sym.aum.SYM020400;

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
 * @Class Name   	: SYM020400Controller.java
 * @Description  	: 권한에 대한 오퍼레이션 차단 
 * @author       	: 정윤원
 * @since        	: 2015. 9. 2.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 2.					정윤원				최초생성
 * </pre>
 */

@Controller
public class SYM020400Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(SYM020400Controller.class);	
	
	@Resource(name="SYM020400Service")
	SYM020400ServiceImpl SYM020400Service;
	

	/**
	 * 권한에 대한 서비스 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020400/getListSvc.do") 
	public ModelAndView getListSvc(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug(" getListSvc ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020400Service, "getListSvc", xpDto, mav);
		
		return mav;
		
	}
	
	/**
	 * 서비스에 대한 차단 오퍼레이션 목록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020400/getListOprtin.do") 
	public ModelAndView getListOprtin(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020400Service, "getListOprtin", xpDto, mav);
		
		return mav;
		
	}
	

	
	/**
	 * 차단 오퍼레이션 관리
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/aum/SYM020400/execCUD.do")
	public ModelAndView execCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM020400Service, "execCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
}

