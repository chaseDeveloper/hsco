package hsco.mis.hrm.HRM070503;

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
import hsco.cmm.sanc.SancServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070503Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2017. 06. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 06. 07.			  양성모			최초생성
 * </pre>  
 */

@Controller
public class HRM070503Controller extends BaseContoller  {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM070503Service")
	HRM070503ServiceImpl HRM070503Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;
	
	
	
	/**현장체재비 등록현황조회 */
	@RequestMapping("/hsco/mis/hrm/HRM070503/selectSptScstPymntStdrList.do") 
	public ModelAndView selectSptScstPymntStdrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("현장체재비 등록현황조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070503Service, "selectSptScstPymntStdrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**현장체재비 등록현황 CUD */
	@RequestMapping("/hsco/mis/hrm/HRM070503/saveSptScstPymntStdrCUD.do")
	public ModelAndView saveSptScstPymntStdrCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("현장체재비 등록현황 CUD----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM070503Service, "saveSptScstPymntStdrCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
}