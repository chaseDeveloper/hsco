package hsco.cmm.excel.controller;
import hsco.cmm.controller.BaseContoller;
import hsco.cmm.excel.service.impl.IndvdlinfoDwldServiceImpl;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: IndvdlinfoDwldController.java
 * @Description  	: 개인정보다운로드내역 관리 Controller
 * @author       	: 권재만
 * @since        	: 2020. 7. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020. 7. 7.					권재만				최초생성(한국감정원 Project참조)
 * </pre>  
 */
@Controller
public class IndvdlinfoDwldController extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(IndvdlinfoDwldController.class);

	@Resource(name = "indvdlinfoDwldService")
	IndvdlinfoDwldServiceImpl indvdlinfoDwldService;
	
	/**
	 * 개인정보다운로드이력 저장
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/cmm/indvdlinfoDwld/saveIndvdlinfoDwldHist.do")
	public ModelAndView saveIndvdlinfoDwldHist(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(indvdlinfoDwldService, "saveIndvdlinfoDwldHist", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;

	}

}
