package hsco.mis.aud.AUD020101_P02;

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
 * @Class Name      : AUD020101_P02Controller.java
 * @Description     : 법인카드 모니터링 설정을 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 30.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 30.      김병진             최초생성
 * </pre>  
 */

@Controller
public class AUD020101_P02Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD020101_P02Service")
    AUD020101_P02ServiceImpl AUD020101_P02Service;

    /**
     * 법인카드 모니터링 설정 정보 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD020101_P02/selectEstbsList.do") 
    public ModelAndView selectEstbsList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("법인카드 모니터링 설정 정보 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020101_P02Service, "selectEstbsList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 법인카드 모니터링 설정 정보 저장/수정/삭제 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD020101_P02/estbsListCUD.do")
    public ModelAndView estbsListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("법인카드 모니터링 설정 정보 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD020101_P02Service, "estbsListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
}
