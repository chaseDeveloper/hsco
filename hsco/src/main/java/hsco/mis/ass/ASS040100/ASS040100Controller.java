package hsco.mis.ass.ASS040100;

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
 * @Class Name   	: ASS040100Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 23	       이혜선		   최초생성
 * </pre>  
 */
@Controller
public class ASS040100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="ass040100Service")
	ASS040100ServiceImpl ass040100Service;
	
	@RequestMapping("/hsco/mis/ass/ASS040100/assetsMastrList.do") 
	public ModelAndView assetsMastrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("자산현황 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass040100Service, "assetsMastrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

	@RequestMapping("/hsco/mis/ass/ASS040100/assetsClList.do") 
	public ModelAndView assetsClList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("자산분류 리스트 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass040100Service, "assetsClList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	

}