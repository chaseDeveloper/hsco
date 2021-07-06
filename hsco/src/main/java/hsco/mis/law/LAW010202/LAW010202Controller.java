package hsco.mis.law.LAW010202;

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
 * @Class Name      : LAW010202Controller.java
 * @Description     : 법률자문결과목록을 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 14.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 14.      김병진             최초생성
 * </pre>  
 */

@Controller
public class LAW010202Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="LAW010202Service")
    LAW010202ServiceImpl LAW010202Service;
    
    /**
     * 법률자문신청목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010202/selectLawCnsutReqst.do") 
    public ModelAndView selectLawCnsutReqst(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(LAW010202Service, "selectLawCnsutReqst", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    /**
     * 법률자문신청목록 수정(접수) 시작
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010202/lawCnsutReqstU.do")
    public ModelAndView lawCnsutReqstU(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("법률자문신청목록 U 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010202Service, "lawCnsutReqstU", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 법률자문결과목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010202/selectLawCnsutResult.do") 
    public ModelAndView selectLawCnsutResult(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(LAW010202Service, "selectLawCnsutResult", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 법률자문결과목록 등록,수정,삭제 시작
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010202/lawCnsutResultCUD.do")
    public ModelAndView lawCnsutResultCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("법률자문결과목록 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010202Service, "lawCnsutResultCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
}
