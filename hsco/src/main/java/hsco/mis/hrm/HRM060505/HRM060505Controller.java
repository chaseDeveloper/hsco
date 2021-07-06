package hsco.mis.hrm.HRM060505;

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
 * @Class Name   	: HRM060505Controller.java
 * @Description  	: 다면평가등록기간관리
 * @author       	: 고태호
 * @since        	: 2019. 10. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2019. 10. 24.	고태호			최초생성
 * </pre>  
 */

@Controller
public class HRM060505Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM060505Service")
	HRM060505ServiceImpl HRM060505Service;
	
    /** 집계내역조회 */
    @RequestMapping("/hsco/mis/hrm/HRM060505/saveSeveralWorkEvl.do") 
    public ModelAndView saveSeveralWorkEvl(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("다면평가등록 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060505Service, "saveSeveralWorkEvl", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /** 집계내역조회 */
    @RequestMapping("/hsco/mis/hrm/HRM060505/selectSeveralWorkEvl.do") 
    public ModelAndView selectSeveralWorkEvl(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("다면평가조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060505Service, "selectSeveralWorkEvl", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
   
}
