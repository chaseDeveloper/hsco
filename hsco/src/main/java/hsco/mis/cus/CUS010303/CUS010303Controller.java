package hsco.mis.cus.CUS010303;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS010303Controller.java
 * @Description     : 통합고객목록을 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 02.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 30.       김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010303Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010303Service")
    CUS010303ServiceImpl CUS010303Service;
    
    /**
     * 통합고객목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010303/selectCstmrList01.do") 
    public ModelAndView selectCstmrList01(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("통합고객목록 조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010303Service, "selectCstmrList01", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }   
    
    
    /**
     * 통합고객목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010303/selectCstmrList.do") 
    public ModelAndView selectCstmrList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("통합고객목록 조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010303Service, "selectCstmrList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }   

    /**
     * 고객상세정보 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010303/selectCstmrDetailInfo2.do") 
    public ModelAndView selectCstmrDetailInfo2(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객상세정보 조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010303Service, "selectCstmrDetailInfo2", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }  
}
