package hsco.mis.hrm.HRM070502;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.cmm.sanc.SancServiceImpl;
import hsco.cmm.util.StringUtil;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070502Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2017. 5. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 5. 24.			  양성모			최초생성
 * </pre>  
 */

@Controller
public class HRM070502Controller extends BaseContoller  {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM070502Service")
	HRM070502ServiceImpl HRM070502Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;
	
	
	
	/**현장체재비 마감일 기준 현황조회 */
	@RequestMapping("/hsco/mis/hrm/HRM070502/selectSptScstClosList.do") 
	public ModelAndView tbhrmWrkcpList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("현장체재비 마감일 기준 현황조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070502Service, "selectSptScstClosList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**현장체재비 마감일 기준 CUD */
	@RequestMapping("/hsco/mis/hrm/HRM070502/saveSptScstClosCUD.do")
	public ModelAndView tbhrmWrkcpCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("현장체재비 마감일 기준 CUD----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM070502Service, "saveSptScstClosCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
	/**현장체재비 마감일 기준 일괄생성 프로세스 */
	@RequestMapping("/hsco/mis/hrm/HRM070502/insertNewCloseDe.do")
	public ModelAndView insertNewCloseDe(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("현장체재비 마감일 기준 일괄생성 프로세스----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM070502Service, "insertNewCloseDe", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
}