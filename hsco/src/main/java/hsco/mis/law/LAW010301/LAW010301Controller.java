package hsco.mis.law.LAW010301;

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
 * @Class Name      : LAW010301Controller.java
 * @Description     : 소송현황 정보를 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 15.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 15.      김병진              최초생성
 * </pre>  
 */

@Controller
public class LAW010301Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="LAW010301Service")
    LAW010301ServiceImpl LAW010301Service;

    /**
     * 소송현황 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010301/selectLwstList.do") 
    public ModelAndView selectLwstList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("소송현황 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010301Service, "selectLwstList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 변호사(법무사)사무실 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010301/selectJcffrOffmList.do") 
    public ModelAndView selectJcffrOffmList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("변호사(법무사)사무실 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010301Service, "selectJcffrOffmList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    
    /**
     * 변호사(법무사) 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010301/selectLawyerList.do") 
    public ModelAndView selectLawyerList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("변호사(법무사) 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010301Service, "selectLawyerList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    /**
     * 소송현황 목록 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010301/lwstListCUD.do")
    public ModelAndView lwstListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("소송현황 목록 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(LAW010301Service, "lwstListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 하단 탭 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010301/selectSubTab.do") 
    public ModelAndView selectSubTab(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("하단 탭 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010301Service, "selectSubTab", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 선택 행의 자식 레코드 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010301/selectLwstListChild.do") 
    public ModelAndView selectLwstListChild(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("선택 행의 자식 레코드 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010301Service, "selectLwstListChild", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
}
