package hsco.mis.sal.SAL040101;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL040101Controller.java
 * @Description  	: 퇴직근속연수공제기준
 * @author       	: 이상명
 * @since        	: 2015. 9. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 15.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL040101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SAL040101Service")
	SAL040101ServiceImpl SAL040101Service;
	
	/**
	 * 퇴직근속연수공제기준조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL040101/selectRetireCnwksdDateList.do") 
	public ModelAndView selectRetireCnwksdDateList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SAL040101Service, "selectRetireCnwksdDateList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/**
	 * 퇴직근속연수공제기준조회2
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL040101/selectRetireCnwksdList.do") 
	public ModelAndView selectRetireCnwksdList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SAL040101Service, "selectRetireCnwksdList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 퇴직근속연수공제기준 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL040101/RetireCnwksdCUD.do")
	public ModelAndView RetireCnwksdCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("퇴직근속연수공제기준 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SAL040101Service, "RetireCnwksdCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
}