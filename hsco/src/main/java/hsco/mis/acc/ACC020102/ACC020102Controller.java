package hsco.mis.acc.ACC020102;

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
 * @Class Name   	: ACC020102Controller.java
 * @Description  	: 금융기관을 관리하는 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 09.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 09.	이상명		최초생성
 * </pre>  
 */
@Controller
public class ACC020102Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC020102Controller.class);
	
	@Resource(name="acc020102Service")
	ACC020102ServiceImpl acc020102Service;
	
	/**
	 * 금융기관 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020102/fnncInsttCodeList.do") 
	public ModelAndView fnncInsttCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("fnncInsttCodeList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc020102Service, "fnncInsttCodeList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
	
	/**
	 * 금융기관지점 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020102/fnncInsttSpotCodeList.do") 
	public ModelAndView fnncInsttSpotCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc020102Service, "fnncInsttSpotCodeList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}
	
	/**
	 * 금융기관, 지점 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020102/fnncInsttCodeCUD.do") 
	public ModelAndView fnncInsttCodeCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc020102Service, "fnncInsttCodeCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
		
	}

}
