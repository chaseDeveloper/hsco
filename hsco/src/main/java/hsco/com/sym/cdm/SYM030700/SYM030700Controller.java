package hsco.com.sym.cdm.SYM030700;

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
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM030700Controller.java
 * @Description  	: SMS 메시지 팝업
 * @author       	: 이동석
 * @since        	: 2016. 3. 14.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 3. 14.				   이동석			   최초생성
 * </pre>
 */

@Controller
public class SYM030700Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(SYM030700Controller.class);    
    
    @Resource(name="SYM030700Service")
    SYM030700ServiceImpl SYM030700Service;
    
    /**
     * SMS 메시지조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/com/sym/cdm/SYM030700/selectDeptcodeList.do") 
    public ModelAndView selectDeptcodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SYM030700Service, "selectDeptcodeList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 부서정보조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/com/sym/cdm/SYM030700/selectSmstranList.do") 
    public ModelAndView selectSlaryList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SYM030700Service, "selectSmstranList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
	
	
    /**
     * SMS 메시지 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/com/sym/cdm/SYM030700/SmstranCUD.do")
    public ModelAndView smstranCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("SMS 메시지 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SYM030700Service, "smstranCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 이메일 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/com/sym/cdm/SYM030700/EmailsendCUD.do")
    public ModelAndView emailsendCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("이메일발송 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SYM030700Service, "emailsendCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
	
    /**
     * SMS 메시지 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/com/sym/cdm/SYM030700/SmstranC_D.do")
    public ModelAndView SmstranC_D(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("SMS 메시지 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SYM030700Service, "SmstranC_D", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
	
}
