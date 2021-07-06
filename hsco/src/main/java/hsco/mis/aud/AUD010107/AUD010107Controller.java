package hsco.mis.aud.AUD010107;

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
 * @Class Name      : AUD010107Controller.java
 * @Description     : 감사결과처분목록을 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 06. 30.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 06. 30.      김병진              최초생성
 * </pre>  
 */


@Controller
public class AUD010107Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD010107Service")
    AUD010107ServiceImpl AUD010107Service;
    
    /**
     * 내외부 감사관리 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010107/selectInExAdList.do") 
    public ModelAndView selectInExAdList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(AUD010107Service, "selectInExAdList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /**
     * 감사결과처분 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010107/selectAuditResultList.do") 
    public ModelAndView selectLgstrList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD010107Service, "selectAuditResultList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   
    
    /**
     * 내외부감사목록 종결여부 수정
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD010107/InexAuditListU.do")
    public ModelAndView InexAuditListU(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD010107Service, "InexAuditListU", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
}
