package hsco.mis.acc.ACC050419;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : ACC050419Controller.java
 * @Description     : 
 * @author          : 정윤원
 * @since           : 2015. 11. 17.
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 17.                  정윤원                최초생성
 * </pre>
 */
@Controller
public class ACC050419Controller extends BaseContoller {
    protected Logger log = LoggerFactory.getLogger(ACC050419Controller.class);

    @Resource(name = "ACC050419Service")
    ACC050419ServiceImpl ACC050419Service;

    /**
     * 매출원가율명세서 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/acc/ACC050419/select.do")
    public ModelAndView select(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	if(log.isInfoEnabled()) log.info("select Started!");
    	
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(ACC050419Service, "select", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
}