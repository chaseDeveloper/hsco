package hsco.mis.aud.AUD030106;

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
 * @Class Name      : AUD030106Controller.java
 * @Description     : 청탁등록시스템관리테이블을 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 09.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 09.      김병진              최초생성
 *  2016. 04. 12.      이수지              내부결재
 * </pre>  
 */

@Controller
public class AUD030106Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD030106Service")
    AUD030106ServiceImpl AUD030106Service;

    /**
     * 청탁등록시스템관리테이블 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD030106/selectRequestlist.do") 
    public ModelAndView selectRequestlist(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청탁등록시스템관리테이블 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD030106Service, "selectRequestlist", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 청탁등록시스템관리테이블 목록 저장/수정/삭제
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD030106/RequestlistCUD.do")
    public ModelAndView RequestlistCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("청탁등록시스템관리테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(AUD030106Service, "RequestlistCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    
    /**
     * 내부결재 저장
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD030106/saveInnerSanc.do") 
    public ModelAndView saveInnerSanc(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(AUD030106Service, "saveInnerSanc", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 
    
    /**
     * 승인여부(결재여부) 변경저장
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD030106/confmU.do") 
    public ModelAndView confmU(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
        execService(AUD030106Service, "confmU", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
}
