package hsco.pms.frm.FRM02010900;

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
 * @Class Name   	: FRM02010900Controller.java
 * @Description  	: 자산건전성이율표
 * @author       	: 김지훈
 * @since        	: 2016. 01. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 01. 20.					김지훈			최초생성
 * </pre>  
 */
@Controller
public class FRM02010900Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="FRM02010900Service")
	FRM02010900ServiceImpl FRM02010900Service;
	
	/**
	 * 자산건전성이율표 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02010900/selectFrmAssetsSndIntrt.do")
	public ModelAndView selectFrmAssetsSndIntrt(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02010900Service, "selectFrmAssetsSndIntrt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 자산건전성이율표 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02010900/saveFrmAssetsSndIntrt.do")
	public ModelAndView saveFrmAssetsSndIntrt(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02010900Service, "saveFrmAssetsSndIntrt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
}
