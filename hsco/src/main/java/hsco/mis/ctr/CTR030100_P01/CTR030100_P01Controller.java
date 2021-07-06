package hsco.mis.ctr.CTR030100_P01;

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
 * @Class Name   	: CTR030100_P01Controller.java
 * @Description  	: 
 * @author       	: 이수지
 * @since        	: 2015. 10. 22.
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
 *  2015. 10. 22.                  이수지                최초생성
 * </pre>
 */
@Controller
public class CTR030100_P01Controller extends BaseContoller {
    protected Logger         log = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "CTR030100_P01Service")
    CTR030100_P01ServiceImpl CTR030100_P01Service;

    /**
     * 계약변경내역 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR030100_P01/cntrctChangeList.do")
    public ModelAndView cntrctChangeList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR030100_P01Service, "cntrctChangeList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    /**
     * 계약변경내역저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/ctr/CTR030100_P01/cntrctChangeCUD.do")
    public ModelAndView cntrctChangeCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CTR030100_P01Service, "cntrctChangeCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

}