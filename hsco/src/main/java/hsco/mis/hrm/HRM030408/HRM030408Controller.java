package hsco.mis.hrm.HRM030408;

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
 * @Class Name   	: HRM030408Controller.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2017. 12. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2017. 12. 04.   이수지		최초생성
 * </pre>  
 */

@Controller
public class HRM030408Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM030408Service")
	HRM030408ServiceImpl HRM030408Service;
    
    /**
     * 겸직자 관리 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
	@RequestMapping("/hsco/mis/hrm/HRM030408/tbhrmCtsManList.do")
	public ModelAndView tbhrmCtsManList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030408Service, "tbhrmCtsManList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
    
    /**
     * 겸직자 관리 CUD
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM030408/tbhrmCtsManCUD.do")
    public ModelAndView tbhrmCtsManCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM030408Service, "tbhrmCtsManCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
	

    /**
     * 발령(겸직) 팝업 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws ExceptiontbhrmGnfdDtlsPopup
     */
    @RequestMapping("/hsco/mis/hrm/HRM030408/tbhrmGnfdDtlsPopup.do")
    public ModelAndView tbhrmGnfdDtlsPopup(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM030408Service, "tbhrmGnfdDtlsPopup", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
}