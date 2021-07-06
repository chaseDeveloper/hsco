package hsco.mis.cus.CUS010404;

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
 * @Class Name      : CUS010404Controller.java
 * @Description     : 기타민원처리목록을 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 17.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 17.       김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010404Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010404Service")
    CUS010404ServiceImpl CUS010404Service;

    /**
     * 기타민원처리조회(접점별 처리현황) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010404/selectCcntPrcSttusList.do") 
    public ModelAndView selectCcntPrcSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("기타민원처리조회(접점별 처리현황) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010404Service, "selectCcntPrcSttusList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 기타민원처리조회(민원등급별 현황) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010404/selectCvplGradPrcSttusList.do") 
    public ModelAndView selectCvplGradPrcSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("기타민원처리조회(민원등급별 현황) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010404Service, "selectCvplGradPrcSttusList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    
    /**
     * 기타민원처리조회(반려사유별 처리상태) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010404/selectReturnPrcSttusList.do") 
    public ModelAndView selectReturnPrcSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("만족도평가결과조회(민원등급별 만족도결과) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010404Service, "selectReturnPrcSttusList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 기타민원처리조회(온라인 민원처리현황) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010404/selectOnCvplPrcSttusList.do") 
    public ModelAndView selectOnCvplPrcSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("기타민원처리조회(온라인 민원처리현황) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010404Service, "selectOnCvplPrcSttusList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 기타민원처리조회(오프라인 민원처리현황) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010404/selectOffCvplPrcSttusList.do") 
    public ModelAndView selectOffCvplPrcSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("기타민원처리조회(오프라인 민원처리현황) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010404Service, "selectOffCvplPrcSttusList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }

    
    /**
     * 기타민원처리조회(직원별 처리현황) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010404/selectEmpPrcSttusList.do") 
    public ModelAndView selectEmpPrcSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("기타민원처리조회(직원별 처리현황) 목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010404Service, "selectEmpPrcSttusList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }

}



