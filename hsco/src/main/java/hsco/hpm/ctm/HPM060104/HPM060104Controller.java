package hsco.hpm.ctm.HPM060104;

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
 * @Class Name   	: HPM060104Controller.java
 * @Description  	: 강사관리
 * @author       	: 정 민
 * @since        	: 2017. 08. 31.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 08. 31.					정 민			최초생성
 * </pre>  
 */

@Controller
public class HPM060104Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM060104Controller.class);
	@Resource(name="HPM060104Service")
	HPM060104ServiceImpl HPM060104Service;
	
	/**
	 * 강사관리 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060104/selectInstrctrManageList.do")
	public ModelAndView selectInstrctrManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectSuplyInfoList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM060104Service, "selectInstrctrManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 강사관리 목록 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060104/saveInstrctrManageList.do")
	public ModelAndView saveInstrctrManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM060104Service, "saveInstrctrManageList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}	
	
//	/**
//	 * 강사정보 이관
//	 * @param xpDto
//	 * @param model
//	 * @return ModelAndView
//	 * @throws Exception
//	 */
//	@RequestMapping("/hsco/hpm/ctm/HPM060104/trnsferInstrctrInfoList.do")
//	public ModelAndView trnsferInstrctrInfoList(NexacroMapDTO xpDto, Model model) throws Exception {
//		
//		ModelAndView mav = new ModelAndView("nexacroMapView");
//
//		execService(HPM060104Service, "trnsferInstrctrInfoList", xpDto, mav);
//
//		mav.addObject(NexacroConstant.ERROR_CODE, "0");
//		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
//		
//		
//		return mav;
//	}	
	

}