package hsco.mis.hrm.HRM060203;

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
 * @Class Name   	: HRM060203Controller.java
 * @Description  	: 
 * @author       	: 류빛나
 * @since        	: 2015. 11. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 11. 16.	류빛나			최초생성
 * </pre>  
 */

@Controller
public class HRM060203Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM060203Service")
	HRM060203ServiceImpl HRM060203Service;
	
    /** 집계내역조회 */
    @RequestMapping("/hsco/mis/hrm/HRM060203/selectCrevalSmList.do") 
    public ModelAndView selectCrevalSmList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("집계내역조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060203Service, "selectCrevalSmList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }

    /** 기초자료생성 */
    @RequestMapping("/hsco/mis/hrm/HRM060203/crevalSmCUD.do")
    public ModelAndView crevalSmCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("기초자료생성 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM060203Service, "crevalSmCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
                
        return mav;
    }

    /** 집계 */
    @RequestMapping("/hsco/mis/hrm/HRM060203/crevalSmListCUD.do")
    public ModelAndView crevalSmListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("집계 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM060203Service, "crevalSmListCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
                
        return mav;
    }
    /** 집계확정 */
    @RequestMapping("/hsco/mis/hrm/HRM060203/setDcsnList.do")
    public ModelAndView setDcsnList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("집계확정----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM060203Service, "setDcsnList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
                
        return mav;
    }
    
    /**경력평정서 */
    @RequestMapping("/hsco/mis/hrm/HRM060203/selectCrevalPrintList.do") 
    public ModelAndView selectCrevalPrintList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("경력평정서 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060203Service, "selectCrevalPrintList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }

}
