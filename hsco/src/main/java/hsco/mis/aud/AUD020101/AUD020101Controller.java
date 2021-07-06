package hsco.mis.aud.AUD020101;

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
 * @Class Name      : AUD020101Controller.java
 * @Description     : 법인카드/법인카드사용내역/법인카드특이사항 목록을 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 24.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 24.      김병진              최초생성
 * </pre>  
 */

@Controller
public class AUD020101Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD020101Service")
    AUD020101ServiceImpl AUD020101Service;
    
    /**
     * 법인카드사용내역목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD020101/selectCatsTmpApprovalList.do") 
    public ModelAndView selectCatsTmpApprovalList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("법인카드사용내역목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020101Service, "selectCatsTmpApprovalList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 특이사항목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD020101/selectCardPartclrMatterList.do") 
    public ModelAndView selectCardPartclrMatterList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("특이사항목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020101Service, "selectCardPartclrMatterList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   
    
    /**
     * 특이사항관리 목록 저장/수정/삭제
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD020101/cardPartclrMatterCUD.do")
    public ModelAndView cardPartclrMatterCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("특이사항목록 관리 테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
            execService(AUD020101Service, "cardPartclrMatterCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 알림대상 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */    
    @RequestMapping("/hsco/mis/aud/AUD020101/selectNtcnTrget.do") 
    public ModelAndView selectNtcnTrget(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020101Service, "selectNtcnTrget", xpDto, mav );
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 알림대상 등록/수정/삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */    
    @RequestMapping("/hsco/mis/aud/AUD020101/ntcnTrgetCUD.do") 
    public ModelAndView ntcnTrgetCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020101Service, "ntcnTrgetCUD", xpDto, mav );
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
}
