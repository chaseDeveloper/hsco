package hsco.pms.prj.PRJ010131;

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
 * @Class Name   	: PRJ010131Controller.java
 * @Description  	: 
 * @author       	: 정  민
 * @since        	: 2017. 11. 11.
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
 *  2017. 11. 11.                  정  민                최초생성
 * </pre>
 */
@Controller
public class PRJ010131Controller extends BaseContoller {
    protected Logger log = LoggerFactory.getLogger(PRJ010131Controller.class);

    @Resource(name = "PRJ010131Service")
    PRJ010131ServiceImpl PRJ010131Service;

    /**
     * 사업분류별 계약현황 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010131/selectBsnsClCntrctList.do")
    public ModelAndView selectBsnsClCntrctList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(PRJ010131Service, "selectBsnsClCntrctList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    
    /**
     * 사업분류별 계약현황 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/prj/PRJ010131/selectBsnsDstrcCntrctList.do")
    public ModelAndView selectBsnsDstrcCntrctList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(PRJ010131Service, "selectBsnsDstrcCntrctList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
}