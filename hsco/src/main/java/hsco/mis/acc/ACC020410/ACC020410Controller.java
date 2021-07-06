package hsco.mis.acc.ACC020410;

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
 * @Class Name   	: ACC020410Controller.java
 * @Description  	: 자금지출기록부를 조회하는 Controller 클래스 
 * @author       	: 김형태
 * @since        	: 2018. 01. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 01. 26.   김형태             최초생성
 * </pre>  
 */
@Controller
public class ACC020410Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC020410Controller.class);
	
	@Resource(name="ACC020410Service")
	ACC020410ServiceImpl ACC020410Service;
	
	/**
	 * 자금지출기록부
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020410/selectCptalExpndtrRcord.do") 
	public ModelAndView selectCptalExpndtrRcord(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC020410Service, "selectCptalExpndtrRcord", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 계약지출내역 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/acc/ACC020410/selectCntrctExpndtrDtls.do") 
	public ModelAndView selectCntrctExpndtrDtls(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC020410Service, "selectCntrctExpndtrDtls", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	
	/**
	 * 계약지출내역 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/acc/ACC020410/saveCntrctExpndtrDtls.do")
	public ModelAndView saveCntrctExpndtrDtls(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("계약지출내역 저장 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC020410Service, "saveCntrctExpndtrDtls", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
