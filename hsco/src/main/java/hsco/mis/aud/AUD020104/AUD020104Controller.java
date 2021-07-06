package hsco.mis.aud.AUD020104;

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
 * @Class Name      : AUD020104Controller.java
 * @Description     : 거래내역모니터링을 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 06.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 06.      김병진            최초생성
 * </pre>  
 */

@Controller
public class AUD020104Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD020104Service")
    AUD020104ServiceImpl AUD020104Service;

    /**
     * 사업코드 콤보박스 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */    
    @RequestMapping("/hsco/mis/aud/AUD020104/selectBsnsCodeList.do") 
    public ModelAndView selectBsnsCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("사업코드 콤보박스 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020104Service, "selectBsnsCodeList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 거래내역모니터링 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/aud/AUD020104/selectCntrctList.do") 
    public ModelAndView selectCntrctList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("거래내역모니터링 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020104Service, "selectCntrctList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
        
}
