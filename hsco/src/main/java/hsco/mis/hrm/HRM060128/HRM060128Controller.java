package hsco.mis.hrm.HRM060128;

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
 * @Class Name      : HRM060128Controller.java
 * @Description     : 근무성적평가지표를 관리하는 컨트롤러 클래스
 * @author          : 양성모
 * @since           : 2017. 06. 16.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 06. 16.      양성모              최초생성
 * </pre>  
 */

@Controller
public class HRM060128Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="HRM060128Service")
    HRM060128ServiceImpl HRM060128Service;

    /**
     * 근무성적평가지표 현황을 조회
     * @param xpDtoselectRestVcatnList
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM060128/selectHrmEvlScreEvlIxList.do") 
    public ModelAndView selectHrmEvlScreEvlIxList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("근무성적평가지표 조회 실행 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM060128Service, "selectHrmEvlScreEvlIxList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 근무성적평가지표 수정, 삭제, 등록 처리
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM060128/saveHrmEvlScreEvlIxCUD.do")
    public ModelAndView saveHrmEvlScreEvlIxCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
    	log.debug("근무성적평가지표CUD 실행 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060128Service, "saveHrmEvlScreEvlIxCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        return mav;
    }
    
    /**
     * 근무성적평가지표 직전차수 복사 처리
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM060128/saveHrmEvlScreEvlIxCopy.do")
    public ModelAndView saveHrmEvlScreEvlIxCopy(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("근무성적평가지표 직전차수 복사 실행 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060128Service, "saveHrmEvlScreEvlIxCopy", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
}
