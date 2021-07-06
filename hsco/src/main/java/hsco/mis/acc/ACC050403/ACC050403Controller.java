package hsco.mis.acc.ACC050403;

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
 * @Class Name   	: ACC050403Controller.java
 * @Description  	: 사업지구별 원가항목명세서를 조회하는 Controller 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 11. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 11.	이수지		최초생성
 * </pre>  
 */
@Controller
public class ACC050403Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC050403Controller.class);
	
	@Resource(name="ACC050403Service")
	ACC050403ServiceImpl ACC050403Service;
	
	/**
	 * 거래처별미수금명세서 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050403/accnutStacntBcncList.do") 
	public ModelAndView accnutStacntBcncList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("accnutStacntBcncList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050403Service, "accnutStacntBcncList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 거래처별미수금명세서 상세 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050403/chitDetailBcncList.do") 
	public ModelAndView chitDetailBcncList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("chitDetailBcncList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC050403Service, "chitDetailBcncList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
