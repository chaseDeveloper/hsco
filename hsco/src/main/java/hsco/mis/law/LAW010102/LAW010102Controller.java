package hsco.mis.law.LAW010102;

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
 * @Class Name      : LAW010102Controller.java
 * @Description     : 법무코드를 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 10. 12.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 12.      김병진             최초생성
 * </pre>  
 */

@Controller
public class LAW010102Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="LAW010102Service")
    LAW010102ServiceImpl LAW010102Service;
    
    /**
     * 그룹코드 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010102/selectLawCodeList.do") 
    public ModelAndView selectLawCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(LAW010102Service, "selectLawCodeList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 그룹코드 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010102/lawCodeListCUD.do")
    public ModelAndView lawCodeListCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("그룹코드 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010102Service, "lawCodeListCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        
        
        return mav;
    }
    
    /**
     * 코드 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/law/LAW010102/selectLawDetailCodeList.do") 
    public ModelAndView selectLawDetailCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("코드 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(LAW010102Service, "selectLawDetailCodeList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
}
