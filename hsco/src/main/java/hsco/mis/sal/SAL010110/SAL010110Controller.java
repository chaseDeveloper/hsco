package hsco.mis.sal.SAL010110;


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
 * &#64;Class Name   	: SAL010110Controller.java
 * &#64;Description  	: 급여기준정보조회
 * &#64;author       	: 정  민
 * &#64;since        	: 2017. 4. 05
 * &#64;version      	: 1.0
 * &#64;see          	: 
 * &#64;COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 4. 05.					정  민				최초생성
 * </pre>
 */

@Controller
public class SAL010110Controller extends BaseContoller {

    protected Logger     log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "SAL010110Service")
    SAL010110ServiceImpl SAL010110Service;

    /**
     * 사원정보 목록조회
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL010110/selectEmplInfoList.do")
    public ModelAndView selectEmplInfoList(NexacroMapDTO xpDto, Model model) throws Exception {

        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL010110Service, "selectEmplInfoList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;

    }

    /**
     * 사원상세정보 조회
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL010110/selectEmplDetailInfo.do")
    public ModelAndView selectEmplDetailInfo(NexacroMapDTO xpDto, Model model) throws Exception {

        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL010110Service, "selectEmplDetailInfo", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;

    }


    /**
     * 사원상세정보 수정
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL010110/emplDetailInfoU.do")
    public ModelAndView emplDetailInfoU(NexacroMapDTO xpDto, Model model) throws Exception {

        log.debug("사원상세정보 U 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL010110Service, "emplDetailInfoU", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
    }
    

    /**
     * 지급공제상세코드 목록조회
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL010110/selectPymntDdcDetailCodeList.do")
    public ModelAndView selectPymntDdcDetailCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL010110Service, "selectPymntDdcDetailCodeList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }

}