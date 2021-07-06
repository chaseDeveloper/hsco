package hsco.mis.aud.AUD020105;

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
 * @Class Name      : AUD020105Controller.java
 * @Description     : 거래내역모니터링을 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 06.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 06.      김병진            최초생성
 *  2016. 04. 25.      이수지            하도급지급내역 추가
 * </pre>  
 */

@Controller
public class AUD020105Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass());
    
    @Resource(name="AUD020105Service")
    AUD020105ServiceImpl AUD020105Service;

    /**
     * 사업현황목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */    
    @RequestMapping("/hsco/mis/aud/AUD020105/selectBsnsSttusList.do") 
    public ModelAndView selectBsnsSttusList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("사업현황목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020105Service, "selectBsnsSttusList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 사업비목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/aud/AUD020105/selectWctList.do") 
    public ModelAndView selectWctList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("사업비목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020105Service, "selectWctList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 하도급업체 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/aud/AUD020105/selectEntrpsAcctoSubcntrCnt.do") 
    public ModelAndView selectEntrpsAcctoSubcntrCnt(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("하도급업체 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020105Service, "selectEntrpsAcctoSubcntrCnt", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 하도급 계약내역 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/aud/AUD020105/selectEntrpsPxcondDtls.do") 
    public ModelAndView selectEntrpsPxcondDtls(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("하도급 계약내역 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD020105Service, "selectEntrpsPxcondDtls", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
}
