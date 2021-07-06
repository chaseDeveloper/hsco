package hsco.mis.law.LAW010303;

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
 * @Class Name      : LAW010303Controller.java
 * @Description     : 소송일정목록을 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2016. 02. 16.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 02. 16.      김병진             최초생성
 * </pre>  
 */

@Controller
public class LAW010303Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="LAW010303Service")
    LAW010303ServiceImpl LAW010303Service;

    /**
     * 소송일정 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010303/selectFxList.do") 
    public ModelAndView selectJcffrOffmList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("사무실목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(LAW010303Service, "selectFxList", xpDto, mav );
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    /**
     * 소송일정팝업 콤보박스 리스트 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010303/selectComboList.do") 
    public ModelAndView selectComboList(NexacroMapDTO xpDto, Model model) throws Exception {
        log.debug("소송일정팝업 콤보박스 조회  ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(LAW010303Service, "selectComboList", xpDto, mav );
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

    /**
     * 소송일정 등록
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010303/fxInfoC.do")
    public ModelAndView fxInfoC(NexacroMapDTO xpDto, Model model) throws Exception {
        log.debug("소송일정 C 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
            execService(LAW010303Service, "fxInfoC", xpDto, mav);
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        return mav;
    }
    
    /**
     * 소송상세조회 리스트 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010303/selectDetailFxInfo.do") 
    public ModelAndView selectDetailFxInfo(NexacroMapDTO xpDto, Model model) throws Exception {
        log.debug("소송일정상세조회----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(LAW010303Service, "selectDetailFxInfo", xpDto, mav );
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }
    
    /**
     * 소송일정 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010303/detailFxInfoD.do")
    public ModelAndView detailFxInfoD(NexacroMapDTO xpDto, Model model) throws Exception {
        log.debug("소송일정 D 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
            execService(LAW010303Service, "detailFxInfoD", xpDto, mav);
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        return mav;
    }
    
}
