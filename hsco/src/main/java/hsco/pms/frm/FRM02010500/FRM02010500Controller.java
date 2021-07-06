package hsco.pms.frm.FRM02010500;

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
 * @Class Name   	: FRM02010400Controller.java
 * @Description  	: 금융기관등록
 * @author       	: 김지훈
 * @since        	: 2016. 01. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 01. 18.					김지훈			최초생성
 * </pre>  
 */
@Controller
public class FRM02010500Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="FRM02010500Service")
	FRM02010500ServiceImpl FRM02010500Service;
	
	/**
	 * 금융기관코드조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02010500/selectFrmEmdwFnlt.do")
	public ModelAndView selectFrmEmdwFnlt(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02010500Service, "selectFrmEmdwFnlt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 금융기관코드별 지점조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02010500/selectFrmEmdwFnltSpot.do")
	public ModelAndView selectFrmEmdwFnltSpot(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02010500Service, "selectFrmEmdwFnltSpot", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 금융기관코드저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02010500/saveFrmEmdwFnlt.do")
	public ModelAndView saveFrmEmdwFnlt(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02010500Service, "saveFrmEmdwFnlt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 금융기관코드별 지점저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/frm/FRM02010500/saveFrmEmdwFnltSpot.do")
	public ModelAndView saveFrmEmdwFnltSpot(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FRM02010500Service, "saveFrmEmdwFnltSpot", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	

	
}
