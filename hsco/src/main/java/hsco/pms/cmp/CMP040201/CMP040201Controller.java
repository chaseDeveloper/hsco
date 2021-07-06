package hsco.pms.cmp.CMP040201;

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
 * @Class Name   	: CMP040201Controller.java
 * @Description  	: 보상금일괄지출결의
 * @author       	: 이근표
 * @since        	: 2016. 7. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 7. 18.					이근표				최초생성
 * </pre>  
 */
@Controller
@RequestMapping("/hsco/pms/cmp/tdd/CMP040201")
public class CMP040201Controller extends BaseContoller{
	private final Logger log = LoggerFactory.getLogger(CMP040201Controller.class);
	
	@Resource(name="CMP040201Service")
	CMP040201ServiceImpl CMP040201Service;
	
	@RequestMapping("/rwmnyPymntList.do") 
	public ModelAndView thingOwnerList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상금현황 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040201Service, "rwmnyPymntList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/rwmnyPymntList1.do") 
	public ModelAndView rwmnyPymntList1(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("지출결의 완료건 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040201Service, "rwmnyPymntList1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	@RequestMapping("/rwmnyPymntDeU.do") 
	public ModelAndView sanctnerNmDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("지급예정일자일괄변경 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040201Service, "rwmnyPymntDeU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
