package hsco.mis.fun.FUN020202;

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
 * @Class Name   	: FUN020202Controller.java
 * @Description  	: 
 * @author       	: 박세현
 * @since        	: 2016. 11. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 11. 17.  				   박세현				최초생성
 * </pre>  
 */
@Controller
public class FUN020202Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="FUN020202Service")
	FUN020202ServiceImpl FUN020202Service;

	
	/**
	 * 공사채등록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN020202/selectPbncdList.do")  
	public ModelAndView selectPbncdList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("공사채등록 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(FUN020202Service, "selectPbncdList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	
	/**
	 * 공사채등록 CUD
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/mis/fun/FUN020202/PbncdCUD.do")
	public ModelAndView PbncdCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("공사채등록 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FUN020202Service, "PbncdCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;		
		
	}
}