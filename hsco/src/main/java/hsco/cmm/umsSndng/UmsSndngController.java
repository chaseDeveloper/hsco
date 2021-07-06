package hsco.cmm.umsSndng;

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
 * @Class Name   	: UmsController.java
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
public class UmsSndngController extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(UmsSndngController.class);    
    
    @Resource(name="UmsSndngService")
    UmsSndngServiceImpl UmsSndngService;
    
    /**
     * SMS 메시지 발송
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/cmm/umsSndng/sendUms.do")
    public ModelAndView smstranCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("SMS 메시지 관리 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(UmsSndngService, "smstranCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
}
