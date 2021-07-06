package hsco.com.sym.lgm.SYM050600;
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
import hsco.com.sym.lgm.SYM050600.SYM050600ServiceImpl;

/**
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM050600Controller.java
 * @Description  	: 개인정보수준진단
 * @author       	: 정민
 * @since        	: 2018. 8. 23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 8. 23.					정민				최초생성
 * </pre>
 */

@Controller
public class SYM050600Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM050600Controller.class);	
	
	@Resource(name="SYM050600Service")
	SYM050600ServiceImpl SYM050600Service;
	
	
	/**
     * 
     * <pre>
     * @DESCRIPTION: 개인정보수준진단
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     * 2016. 3. 9.
     * </pre>
     */
    @RequestMapping("/hsco/com/sym/lgm/SYM050600/select.do") 
    public ModelAndView select(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SYM050600Service, "select", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }

	
}
