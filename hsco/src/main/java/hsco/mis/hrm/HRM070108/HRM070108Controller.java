package hsco.mis.hrm.HRM070108;

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
 * @Class Name      : HRM070108Controller.java
 * @Description     : 유연근무신청내역을 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 11. 23.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 23.      김병진              최초생성
 * </pre>  
 */

@Controller
public class HRM070108Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="HRM070108Service")
    HRM070108ServiceImpl HRM070108Service;

    /**
     * 유연근무신청내역 목록 조회
     * @param xpDtoselectRestVcatnList
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070108/selectFlxwkList.do") 
    public ModelAndView selectFlxwkList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("유연근무신청내역 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070108Service, "selectFlxwkList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }

}
