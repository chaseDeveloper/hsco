package hsco.mis.hrm.HRM060404;

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
 * @Class Name   	: HRM060404Controller.java
 * @Description  	: 
 * @author       	: 박세현
 * @since        	: 2016. 10. 13.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2016. 10. 13.	박세현			최초생성
 * </pre>  
 */

@Controller
public class HRM060404Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM060404Service")
	HRM060404ServiceImpl HRM060404Service;
	
    /** 집계내역조회 */
    @RequestMapping("/hsco/mis/hrm/HRM060404/selectPerevaResultList.do") 
    public ModelAndView selectPerevaSmList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("집계내역조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060404Service, "selectPerevaResultList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
}
