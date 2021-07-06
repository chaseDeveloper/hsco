package hsco.mis.ach.ACH030401;

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
 * @Class Name   	: ACH030401Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2017. 8. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 8. 10.	양성모		최초생성
 * </pre>  
 */

@Controller
public class ACH030401Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACH030401Controller.class);	
	
	@Resource(name="ACH030401Service")
	ACH030401ServiceImpl ACH030401Service;	
	
	/**
	 * 현재 평가차수 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH030401/selectCurOdr.do") 
	public ModelAndView selectCurOdr(NexacroMapDTO xpDto, Model model) throws Exception {		
		
		if(log.isInfoEnabled()) log.info("selectCurOdr Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH030401Service, "selectCurOdr", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 평가차수 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH030401/selectOdrList.do") 
	public ModelAndView selectOdrList(NexacroMapDTO xpDto, Model model) throws Exception {		

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH030401Service, "selectOdrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 현재 평가차수   등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH030401/mainCUD.do")
	public ModelAndView mainCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("main CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACH030401Service, "mainCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 집계목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH030401/selectSmScoreList.do") 
	public ModelAndView selectSmScoreList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("selectSmScoreList 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH030401Service, "selectSmScoreList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 집계상세내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH030401/selectSmScoreDtlList.do") 
	public ModelAndView selectSmScoreDtlList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("selectSmScoreDtlList 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH030401Service, "selectSmScoreDtlList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 집계목록및내역 생성
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH030401/insertOrgnztLastRankSm.do")
	public ModelAndView insertOrgnztLastRankSm(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("insertOrgnztLastRankSm 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACH030401Service, "insertOrgnztLastRankSm", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}

}
