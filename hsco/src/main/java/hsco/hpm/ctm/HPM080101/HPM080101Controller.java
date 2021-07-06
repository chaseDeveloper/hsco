package hsco.hpm.ctm.HPM080101;

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
 * @Class Name   	: HPM080101Controller.java
 * @Description  	: 매출관리
 * @author       	: 정 민
 * @since        	: 2017. 08. 22.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 08. 22.					정 민			최초생성
 * </pre>  
 */

@Controller
public class HPM080101Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM080101Controller.class);
	@Resource(name="HPM080101Service")
	HPM080101ServiceImpl HPM080101Service;
	
	/**
	 * 매출관리 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM080101/selectRcpmnyDtlsManageList.do")
	public ModelAndView selectRcpmnyDtlsManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled()) log.info("selectSuplyInfoList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM080101Service, "selectRcpmnyDtlsManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매출관리 목록 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/ctm/HPM080101/saveRcpmnyDtlsManageList.do")
	public ModelAndView saveRcpmnyDtlsManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM080101Service, "saveRcpmnyDtlsManageList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}	

}