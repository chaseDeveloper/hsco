package hsco.com.sym.msm.SYM110100;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
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
 * @Class Name   	: SYM090200Service.java
 * @Description  	: 알림발송 관리  컨트롤러 클래스
 * @author       	: 정윤원
 * @since        	: 2015. 9. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------

 * </pre>  
 */
@Controller
public class SYM110100Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM110100Controller.class);	
	
	@Resource(name="SYM110100Service")
	SYM110100ServiceImpl SYM110100Service;
	
	 @Value("#{extUrl['messangerUrl']}")
	 private String messangerUrl;
	
	
	 /**
     * 사원리스트조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/com/sym/msm/SYM110100/selectempList.do") 
    public ModelAndView selectempList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SYM110100Service, "selectempList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }   
	
    /**
     * 알림발송 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/com/sym/msm/SYM110100/NtcnSndngCUD.do")
    public ModelAndView ntcnSndngCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("알림발송 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SYM110100Service, "ntcnSndngCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 알림발송 내역조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/com/sym/msm/SYM110100/getListMessengerSendLog.do")
    public ModelAndView getListMessengerSendLog(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("알림발송 리스트조회 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SYM110100Service, "getListMessengerSendLog", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }	

}
	