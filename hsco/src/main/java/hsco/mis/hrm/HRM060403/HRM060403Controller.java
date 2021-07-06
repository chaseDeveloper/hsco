package hsco.mis.hrm.HRM060403;

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
 * @Class Name   	: HRM060403Controller.java
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
public class HRM060403Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM060403Service")
	HRM060403ServiceImpl HRM060403Service;
	
    /** 집계내역조회 */
    @RequestMapping("/hsco/mis/hrm/HRM060403/selectPerevaResultList.do") 
    public ModelAndView selectPerevaSmList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("집계내역조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060403Service, "selectPerevaResultList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /** 저장 */
    @RequestMapping("/hsco/mis/hrm/HRM060403/savePerevaResult.do")
    public ModelAndView savePerevaResult(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("집계처리 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM060403Service, "savePerevaResult", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
                
        return mav;
    }
    
    /** 집계확정 */
    @RequestMapping("/hsco/mis/hrm/HRM060403/setDcsnList.do")
    public ModelAndView setDcsnList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("집계확정----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM060403Service, "setDcsnList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
                
        return mav;
    }
}
