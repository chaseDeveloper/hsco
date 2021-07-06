package hsco.mis.hrm.HRM070109;

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
 * @Class Name      : HRM070109Controller.java
 * @Description     : 부서별 근태현황목록을 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 12. 16.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 16.      김병진              최초생성
 * </pre>  
 */

@Controller
public class HRM070109Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="HRM070109Service")
    HRM070109ServiceImpl HRM070109Service;

    /**
     * 근태현황_일반(부서별) 목록 조회
     * @param xpDtoselectRestVcatnList
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070109/selectdeptDclzList.do") 
    public ModelAndView selectdeptDclzList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("근태현황_일반(부서별) 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070109Service, "selectdeptDclzList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }

    /**
     * 근태현황_일반(사원별) 목록 조회
     * @param xpDtoselectRestVcatnList
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070109/selectEmpDclzList.do") 
    public ModelAndView selectEmpDclzList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("근태현황_일반(사원별) 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070109Service, "selectEmpDclzList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    
    /**
     * 근태현황_일반(일자별) 목록 조회
     * @param xpDtoselectRestVcatnList
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070109/selectDayDclzList.do") 
    public ModelAndView selectDayDclzList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("근태현황_일반(사원별) 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070109Service, "selectDayDclzList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 근태현황_기타 목록 조회
     * @param xpDtoselectRestVcatnList
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070109/selectEtcDclzList.do") 
    public ModelAndView selectEtcDclzList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("근태현황_일반(기타) 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070109Service, "selectEtcDclzList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
}
