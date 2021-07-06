package hsco.mis.ass.ASS010900;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;


/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ASS010900Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 18	       이혜선		   최초생성
 * </pre>  
 */
@Controller
public class ASS010900Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="ass010900Service")
	ASS010900ServiceImpl ass010900Service;	

	/**
	 * 재물조사계획 조회
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010900/pptyPlanList.do") 
	public ModelAndView pptyPlanList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010900Service, "pptyPlanList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 재물조사계획 CUD
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010900/pptyPlanListCUD.do")
	public ModelAndView pptyPlanListCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010900Service, "pptyPlanListCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 
	 * @param tranInfo
	 * @param inVar
	 * @param inDataset
	 * @param outVar
	 * @param outDataset
	 * @return
	 * @throws NexaServiceException
	 */
	@RequestMapping("/hsco/mis/ass/ASS010900/selectPptyPlanCnt.do")
	public ModelAndView selectPptyPlanCnt(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010900Service, "selectPptyPlanCnt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
}