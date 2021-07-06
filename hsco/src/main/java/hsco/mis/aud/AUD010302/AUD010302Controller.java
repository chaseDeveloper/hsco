package hsco.mis.aud.AUD010302;

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
 * @Class Name      : AUD010302Controller.java
 * @Description     : 계약심사요청목록 보완 통보/회신을 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 11. 06.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 06.      김병진              최초생성
 * </pre>  
 */

@Controller
public class AUD010302Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD010302Service")
    AUD010302ServiceImpl AUD010302Service;
    
    /**
     * 계약심사요청목록 보완 통보/회신 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/aud/AUD010302/selectRequstCtrList.do") 
    public ModelAndView selectRequstCtrList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("계약심사요청목록 보완 통보/회신 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD010302Service, "selectRequstCtrList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 계약심사요청목록 보완 통보/회신 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/aud/AUD010302/requstCtrListU.do")
    public ModelAndView requstCtrListU(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("계약심사요청목록 보완 통보/회신 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD010302Service, "requstCtrListU", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
}
