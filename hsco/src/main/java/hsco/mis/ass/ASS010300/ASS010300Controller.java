package hsco.mis.ass.ASS010300;

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
 * @Class Name   	: ASS010300Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 8.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 8	       이혜선		   최초생성
 * </pre>  
 */
@Controller
public class ASS010300Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="ass010300Service")
	ASS010300ServiceImpl ass010300Service;
	
	@RequestMapping("/hsco/mis/ass/ASS010300/assetsClList.do") 
	public ModelAndView assetsClList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("자산분류관리 리스트 ----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010300Service, "assetsClList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	@RequestMapping("/hsco/mis/ass/ASS010300/assetsClR.do") 
	public ModelAndView assetsClR(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("자산분류 상세 조회 ----------------------------------------------------!");

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010300Service, "assetsClR", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	@RequestMapping("/hsco/mis/ass/ASS010300/assetsClCUD.do")
	public ModelAndView assetsClCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("자산분류정보 저장 시작----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010300Service, "assetsClCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	

}