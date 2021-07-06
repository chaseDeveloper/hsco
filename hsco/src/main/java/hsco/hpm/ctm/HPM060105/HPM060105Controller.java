package hsco.hpm.ctm.HPM060105;

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
 * @Class Name   	: HPM060105Controller.java
 * @Description  	: 경기타운대관관리
 * @author       	: 정 민
 * @since        	: 2017. 09. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 09. 10.					정 민			최초생성
 * </pre>  
 */

@Controller
public class HPM060105Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM060105Controller.class);
	@Resource(name="HPM060105Service")
	HPM060105ServiceImpl HPM060105Service;
	
	/**
	 * 경기타운대관관리 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060105/selectHscRentManageList.do")
	public ModelAndView selectHscRentManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectSuplyInfoList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM060105Service, "selectHscRentManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 경기타운대관관리 목록 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM060105/saveHscRentManageList.do")
	public ModelAndView saveHscRentManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM060105Service, "saveHscRentManageList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}	


}