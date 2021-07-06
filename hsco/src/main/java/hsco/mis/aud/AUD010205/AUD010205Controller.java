package hsco.mis.aud.AUD010205;

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
 * @Class Name      : AUD010205Controller.java
 * @Description     : 일상감사통계목록을 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 11. 03.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 03.      김병진             최초생성
 * </pre>  
 */

@Controller
public class AUD010205Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());    
    
    @Resource(name="AUD010205Service")
    AUD010205ServiceImpl AUD010205Service;

    /**
     * 일상감사통계목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/aud/AUD010205/selectEdayAuditList.do") 
    public ModelAndView selectEdayAuditList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("일상감사통계목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD010205Service, "selectEdayAuditList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
        
}
