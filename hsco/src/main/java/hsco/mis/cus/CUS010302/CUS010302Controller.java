package hsco.mis.cus.CUS010302;

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
 * @Class Name      : CUS010302Controller.java
 * @Description     : 고객문자발송 고객목록을 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 30.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 30.       김병진              최초생성
 * </pre>  
 */

@Controller
public class CUS010302Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010302Service")
    CUS010302ServiceImpl CUS010302Service;

    /**
     * 고객문자발송 고객 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010302/selectCstmrList.do") 
    public ModelAndView selectCstmrList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객문자발송 고객목록 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010302Service, "selectCstmrList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    //사업코드 2016.07.13
    @RequestMapping("/hsco/mis/cus/CUS010302/selectBsnsCodeList.do") 
    public ModelAndView selectBsnsCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("사업코드 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010302Service, "selectBsnsCodeList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    //주택코드 2016.07.13
    @RequestMapping("/hsco/mis/cus/CUS010302/selectHouseCodeList.do") 
    public ModelAndView selectHouseCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("주택코드 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010302Service, "selectHouseCodeList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    //매입주택코드 2016.07.13
    @RequestMapping("/hsco/mis/cus/CUS010302/selectPuchasHouseCodeList.do") 
    public ModelAndView selectPuchasHouseCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("매입주택코드 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010302Service, "selectPuchasHouseCodeList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    //토지코드 2016.07.13
    @RequestMapping("/hsco/mis/cus/CUS010302/selectLandCodeList.do") 
    public ModelAndView selectLandCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("토지코드 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010302Service, "selectLandCodeList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
}