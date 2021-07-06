package hsco.mis.cus.CUS010102_P02;

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
 * @Class Name      : CUS010102_P02Controller.java
 * @Description     : 고객상담목록을 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 21.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 21.       김병진               최초생성
 * </pre>  
 */

@Controller
public class CUS010102_P02Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010102_P02Service")
    CUS010102_P02ServiceImpl CUS010102_P02Service;
    
    /**
     * 고객상세정보 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010102_P02/selectCstmrDetailInfo.do") 
    public ModelAndView selectCstmrDetailInfo(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객상세정보 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010102_P02Service, "selectCstmrDetailInfo", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 

    /**
     * 보상상세정보 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010102_P02/selectOwnerInfoDetail.do") 
    public ModelAndView selectOwnerInfoDetail(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("보상상세정보 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010102_P02Service, "selectOwnerInfoDetail", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    } 
}
