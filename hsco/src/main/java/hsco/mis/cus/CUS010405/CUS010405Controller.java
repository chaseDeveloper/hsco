package hsco.mis.cus.CUS010405;

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
 * @Class Name      : CUS010405Controller.java
 * @Description     : 만족도평가결과목록을 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 15.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 15.           김병진           최초생성
 * </pre>  
 */

@Controller
public class CUS010405Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010405Service")
    CUS010405ServiceImpl CUS010405Service;

    /**
     * 만족도평가결과조회(부서별 만족도결과) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010405/selectDeptStsfdgList.do") 
    public ModelAndView selectDeptStsfdgList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("만족도평가결과조회(부서별 만족도결과) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010405Service, "selectDeptStsfdgList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 만족도평가결과조회(분류별 만족도결과) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010405/selectCvplSeStsfdgList.do") 
    public ModelAndView selectCvplSeStsfdgList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("만족도평가결과조회(분류별 만족도결과) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010405Service, "selectCvplSeStsfdgList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    
    /**
     * 만족도평가결과조회(민원등급별 만족도결과) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010405/selectCvplGradStsfdgList.do") 
    public ModelAndView selectCvplGradStsfdgList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("만족도평가결과조회(민원등급별 만족도결과) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010405Service, "selectCvplGradStsfdgList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 만족도평가결과조회(접점별 만족도결과) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010405/selectCcntStsfdgList.do") 
    public ModelAndView selectCcntStsfdgList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("만족도평가결과조회(접점별 만족도결과) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010405Service, "selectCcntStsfdgList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
}


