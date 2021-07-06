package hsco.mis.hrm.HRM070101;


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
 * @Class Name   	: HRM070101Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 9. 8.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 8.         이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM070101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM070101Service")
	HRM070101ServiceImpl HRM070101Service;
	
	/**
	 * 휴무정보 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM070101/tbhrmHvofInfoList.do") 
	public ModelAndView tbhrmHvofInfoList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("휴무정보 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070101Service, "tbhrmHvofInfoList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	

	
	/**
	 * 휴무정보CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM070101/tbhrmHvofInfoCUD.do")
	public ModelAndView tbhrmHvofInfoCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("휴무정보 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HRM070101Service, "tbhrmHvofInfoCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
	/**
	 * 초기화CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM070101/tbhrmHvofInfoD.do")
	public ModelAndView tbhrmHvofInfoD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("초기화 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM070101Service, "tbhrmHvofInfoD", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
	
	/**
	 * 해당 날짜의 일정 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM070101/tbhrmHvofInfoOneDayDel.do")
	public ModelAndView tbhrmHvofInfoOneDayDel(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("해당 날짜의 일정 삭제----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM070101Service, "tbhrmHvofInfoOneDayDel", xpDto, mav);
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;
	}
}
