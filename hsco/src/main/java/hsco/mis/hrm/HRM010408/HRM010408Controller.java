package hsco.mis.hrm.HRM010408;

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
 * @Class Name   	: HRM010408Controller.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 6. 9.
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
 *  2015. 6. 9.		박병일			최초생성
 *  2015.10.28.     박병일                   표준적용
 * </pre>
 */

@Controller
public class HRM010408Controller extends BaseContoller {

    protected Logger     log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "HRM010408Service")
    HRM010408ServiceImpl HRM010408Service;

    /**
     * 부서장 직무지원 추천(1~3순위) 조회
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM010408/mainSearchList.do")
    public ModelAndView mainSearchList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM010408Service, "mainSearchList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }
    
    /**
     * 부서장 추천내역 / 직원 지원내역
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM010408/mainSearchList2.do")
    public ModelAndView mainSearchList2(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM010408Service, "mainSearchList2", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }

    /**
     * 부서장 직무지원 추천 수정
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM010408/mainCUD.do")
    public ModelAndView mainCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM010408Service, "mainCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
    }
    /**
     * 부서장 직무지원 추천 수정
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM010408/mainCUD2.do")
    public ModelAndView mainCUD2(NexacroMapDTO xpDto, Model model) throws Exception {
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(HRM010408Service, "mainCUD2", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	
    	return mav;
    }

}