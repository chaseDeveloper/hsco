package hsco.mis.sal.SAL030202;

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
 * &#64;Project Name 	: 화성도시공사 경영정보시스템
 * &#64;Class Name   	: SAL030202Controller.java
 * &#64;Description  	: 사원별원별급여자료조회
 * &#64;author       	: 정  민
 * &#64;since        	: 2017. 4. 04.
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 4. 04.					정  민 				최초생성
 * </pre>
 */

@Controller
public class SAL030202Controller extends BaseContoller {

    protected Logger     log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "SAL030202Service")
    SAL030202ServiceImpl SAL030202Service;

    /**
     * 사원별월별급여집계 지급공제항목 조회
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL030202/selectPymntDdcIem.do")
    public ModelAndView selectPymntDdcIem(NexacroMapDTO xpDto, Model model) throws Exception {

        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030202Service, "selectPymntDdcIem", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;

    }

    /**
     * 사원별월별급여집계 목록 조회
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL030202/selectEmplMtSalarySmList.do")
    public ModelAndView selectMtSalaryPymnt2List(NexacroMapDTO xpDto, Model model) throws Exception {

        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030202Service, "selectEmplMtSalarySmList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;

    }

}