package hsco.mis.hrm.HRM020302;

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
 * @Class Name   	: HRM020302Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 07.31.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 07.31.			  이혜선			최초생성
 * </pre>
 */

@Controller
public class HRM020302Controller extends BaseContoller {

    protected Logger     log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "HRM020302Service")
    HRM020302ServiceImpl HRM020302Service;

    /** 필기전형관리 조회 */
    @RequestMapping("/hsco/mis/hrm/HRM020302/tbhrmEtcScrproList.do")
    public ModelAndView tbhrmEtcScrproList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020302Service, "tbhrmEtcScrproList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }

    @RequestMapping("/hsco/mis/hrm/HRM020302/tbhrmEtcScrproR.do")
    public ModelAndView tbhrmEtcScrproR(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020302Service, "tbhrmEtcScrproR", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }

    /** 평가기준관리 채용년도 콤보데이터 조회 */
    @RequestMapping("/hsco/mis/hrm/HRM020302/empmnYearComboList.do")
    public ModelAndView empmnYearComboList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020302Service, "empmnYearComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }

    /** 평가기준관리 차수 콤보데이터 조회 */
    @RequestMapping("/hsco/mis/hrm/HRM020302/odrSeComboList.do")
    public ModelAndView odrSeComboList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020302Service, "odrSeComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }

    /** 평가기준관리 채용공고명 조회 */
    @RequestMapping("/hsco/mis/hrm/HRM020302/pblancNmComboList.do")
    public ModelAndView pblancNmComboList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020302Service, "pblancNmComboList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }

    @RequestMapping("/hsco/mis/hrm/HRM020302/tbhrmEtcScrproCUD.do")
    public ModelAndView tbhrmEtcScrproCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020302Service, "tbhrmEtcScrproCUD", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }

    @RequestMapping("/hsco/mis/hrm/HRM020302/saveExcelUpload.do")
    public ModelAndView saveExcelUpload(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020302Service, "saveExcelUpload", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }

}