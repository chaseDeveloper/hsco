package hsco.pms.prj.PRJ010124;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: PRJ010124Controller.java
 * @Description  	: 
 * @author       	: 정  민
 * @since        	: 2017. 11. 08.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 11. 08.                  정  민                최초생성
 * </pre>
 */
@Controller
public class PRJ010124Controller extends BaseContoller {
    protected Logger log = LoggerFactory.getLogger(PRJ010124Controller.class);

    @Resource(name = "PRJ010124Service")
    PRJ010124ServiceImpl PRJ010124Service;

    /**
     * 토석자료 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010124/selectStoneDtaList.do")
    public ModelAndView selectStoneDtaList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(PRJ010124Service, "selectStoneDtaList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    
    /**
     * 토석자료 저장
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010124/saveStoneDtaRegistList.do")
    public ModelAndView saveStoneDtaRegistList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(PRJ010124Service, "saveStoneDtaRegistList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
}