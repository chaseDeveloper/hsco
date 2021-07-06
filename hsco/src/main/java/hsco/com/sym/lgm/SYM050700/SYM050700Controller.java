package hsco.com.sym.lgm.SYM050700;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM050700Controller.java
 * @Description  	: 개인정보다운 이력관리 
 * @author       	: 이우용
 * @since        	: 2020. 07. 06.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *2020. 7. 06.		이우용		최초생성
 * </pre>
 */

@Controller
public class SYM050700Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(SYM050700Controller.class);
	
	@Resource(name="SYM050700Service")
	SYM050700ServiceImpl SYM050700Service;
	
	/**
	 * 개인정보다운이력 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	
	@RequestMapping("/hsco/com/sym/lgm/SYM050700/selectDwlnHistList.do")
	public ModelAndView selectDwlnHistList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(SYM050700Service, "selectDwlnHistList", xpDto, mav);
		return mav;

	}	
}
