package hsco.cmm.author.controller;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.author.service.impl.AuthorServiceImpl;
import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: AuthorController.java
 * @Description  	: 
 * @author       	: 정윤원
 * @since        	: 2015. 6. 11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 11.					정윤원				최초생성
 * </pre>  
 */
@Controller
public class AuthorController extends BaseContoller {
	/** Log Factory */
	private final static Logger LOGGER = LoggerFactory.getLogger(AuthorController.class);	
	
	@Resource(name="AuthorService")
	AuthorServiceImpl AuthorService;
	

	/**
	 * 차단 버튼 리스트
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/cmm/author/controller/AuthorController/getAuthBtnList.do") 
	public ModelAndView getAuthBtnList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(LOGGER.isInfoEnabled())
			LOGGER.info("getAuthBtnList started!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(AuthorService, "getAuthBtnList", xpDto, mav);
		
		return mav;
		
	}

}
