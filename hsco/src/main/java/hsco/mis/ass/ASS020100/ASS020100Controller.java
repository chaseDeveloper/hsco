package hsco.mis.ass.ASS020100;

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
 * @Class Name   	: ASS020100Controller.java
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
public class ASS020100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="ass020100Service")
	ASS020100ServiceImpl ass020100Service;

	
	@RequestMapping("/hsco/mis/ass/ASS020100/dprcProcessList.do") 
	public ModelAndView dprcProcessList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("감가상각처리 리스트조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass020100Service, "dprcProcessList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	@RequestMapping("/hsco/mis/ass/ASS020100/dprcExecutChk.do") 
	public ModelAndView dprcExecutChk(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("감가상각 기등록 여부 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass020100Service, "dprcExecutChk", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;	
	}
		
	@RequestMapping("/hsco/mis/ass/ASS020100/dprcExecut.do")
	public ModelAndView dprcExecut(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("감가상각실행 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass020100Service, "dprcExecut", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/mis/ass/ASS020100/dprcChitChk.do") 
	public ModelAndView dprcChitChk(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("감가상각 기등록 여부 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass020100Service, "dprcChitChk", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;	
	}
	
	@RequestMapping("/hsco/mis/ass/ASS020100/dprcChit.do")
	public ModelAndView dprcChit(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("감가상각전표생성 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass020100Service, "dprcChit", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

}