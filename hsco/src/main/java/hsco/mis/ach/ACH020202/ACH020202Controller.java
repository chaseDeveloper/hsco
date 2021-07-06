package hsco.mis.ach.ACH020202;

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
 * @Class Name   	: ACH020202Controller.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 8. 06.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8.06.		박병일			최초생성
 *  2015.10.28.     박병일                   표준적용
 * </pre>  
 */

@Controller
public class ACH020202Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACH020202Controller.class);	
	
	@Resource(name="ACH020202Service")
	ACH020202ServiceImpl ACH020202Service;
	
	/** 관점별 가중치  조회 */
	@RequestMapping("/hsco/mis/ach/ACH020202/mstList.do") 
	public ModelAndView mstList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("mstList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020202Service, "mstList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/** 전략목표별 가중치  조회 */
	@RequestMapping("/hsco/mis/ach/ACH020202/mainSearchList.do") 
	public ModelAndView mainSearchList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020202Service, "mainSearchList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/** 관점별 가중치 기초자료 생성  */
	@RequestMapping("/hsco/mis/ach/ACH020202/bsisMstC.do")
	public ModelAndView bsisMstC(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("bsisMstC 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACH020202Service, "bsisMstC", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}
	
	/** 전략목표  가중치 기초자료 생성  */
	@RequestMapping("/hsco/mis/ach/ACH020202/bsisDtlC.do")
	public ModelAndView bsisDtlC(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("bsisDtlC 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACH020202Service, "bsisDtlC", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}	
	
	/** 평가차수별 지표 수정*/
	@RequestMapping("/hsco/mis/ach/ACH020202/mainCUD.do")
	public ModelAndView mainCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("mainCUD시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACH020202Service, "mainCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}
	
	/** 마감여부   조회 */
	@RequestMapping("/hsco/mis/ach/ACH020202/getClosAt.do") 
	public ModelAndView getClosAt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020202Service, "getClosAt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

}