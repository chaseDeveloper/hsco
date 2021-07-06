package hsco.pms.sls.hou.ctr.SLS020206;

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
 * @Class Name   	: SLS020206Controller.java
 * @Description  	: 상호전환
 * @author       	: 지효정
 * @since        	: 2015. 9.07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * </pre>  
 */
@Controller
public class SLS020206Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020206Service")
	SLS020206ServiceImpl sLS020206Service;
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020206/intrtR.do")
	public ModelAndView houseTyCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(sLS020206Service, "intrtR", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020206/rntchrgChangeList.do")
	public ModelAndView rntchrgChangeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(sLS020206Service, "rntchrgChangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020206/applcYmList.do")
	public ModelAndView applcYmList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(sLS020206Service, "applcYmList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020206/houseRntchrgList.do")
	public ModelAndView houseRntchrgList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(sLS020206Service, "houseRntchrgList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/*
	 *  상호전환 상세정보
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020206/houseRntchrgInfo.do")
	public ModelAndView houseRntchrgInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(sLS020206Service, "houseRntchrgInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/*
	 *  상호전환 임대료 조회
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020206/getRntchrg.do")
	public ModelAndView getRntchrg(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(sLS020206Service, "getRntchrg", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/*
	 *  상호전환처리
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020206/saveRntchrg.do")
	public ModelAndView saveRntchrg(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(sLS020206Service, "saveRntchrg", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/*
	 *  보증금환불처리
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020206/saveReturnGtn.do")
	public ModelAndView saveReturnGtn(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(sLS020206Service, "saveReturnGtn", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
}
