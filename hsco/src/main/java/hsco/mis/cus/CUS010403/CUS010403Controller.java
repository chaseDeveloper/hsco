package hsco.mis.cus.CUS010403;

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
 * @Class Name      : CUS010403Controller.java
 * @Description     : 민원부서별처리를 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 25.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 25.       김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010403Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010403Service")
    CUS010403ServiceImpl CUS010403Service;

    /**
     * 민원분류별처리조회(부서별 처리현황) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010403/selectClPrcSttus1List.do") 
    public ModelAndView selectClPrcSttus1List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("민원분류별처리조회(부서별 처리현황) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010403Service, "selectClPrcSttus1List", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 민원분류별처리조회(부서별 처리평가) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010403/selectClPrcEvlList.do") 
    public ModelAndView selectClPrcEvlList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("민원분류별처리조회(부서별 처리평가) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010403Service, "selectClPrcEvlList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 민원분류별처리조회(부서별 처리상태) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010403/selectClPrcSttus2List.do") 
    public ModelAndView selectClPrcSttus2List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("민원분류별처리조회(부서별 처리상태) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010403Service, "selectClPrcSttus2List", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
}