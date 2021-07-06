package hsco.mis.cus.CUS030111;

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
 * @Class Name      : CUS030111Controller.java
 * @Description     : 콜센터 업무별 내역목록을 조회하는 컨트롤러 클래스
 * @author          : 최현식
 * @since           : 2016. 9. 12.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 9. 12.       최현식               최초생성
 * </pre>  
 */

@Controller
public class CUS030111Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS030111Service")
    CUS030111ServiceImpl CUS030111Service;

    
    /**
     * 업무별 상담목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS030111/selectJobList.do") 
    public ModelAndView selectJobList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("업무별 실적내역 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS030111Service, "selectJobList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
}
   
