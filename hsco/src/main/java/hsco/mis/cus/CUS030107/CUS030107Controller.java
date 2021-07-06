package hsco.mis.cus.CUS030107;

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
 * @Class Name      : CUS030107Controller.java
 * @Description     : 콜센터상담내역목록을 조회하는 컨트롤러 클래스
 * @author          : 최현식
 * @since           : 2016. 9. 10.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 9. 10.       최현식               최초생성
 * </pre>  
 */

@Controller
public class CUS030107Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS030107Service")
    CUS030107ServiceImpl CUS030107Service;

    
    /**
     * 월별 상담목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS030107/selectCstmrCnslt.do") 
    public ModelAndView selectCstmrCnslt(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("상담내역 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS030107Service, "selectCstmrCnslt", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    

    /**
     * 상담내용 CUD
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS030107/cstmrCnsltCUD.do") 
    public ModelAndView cstmrCnsltCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("상담목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS030107Service, "cstmrCnsltCUD", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
}
   
