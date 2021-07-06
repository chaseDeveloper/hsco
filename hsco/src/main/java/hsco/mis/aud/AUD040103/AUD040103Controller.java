package hsco.mis.aud.AUD040103;

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
 * @Class Name      : AUD040103Controller.java
 * @Description     : 청렴마일리지 목록을 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 20.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 20.      김병진              최초생성
 * </pre>  
 */

@Controller
public class AUD040103Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD040103Service")
    AUD040103ServiceImpl AUD040103Service;
    
    /**
     * 청렴마일리지부서별 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040103/selectDeptMlgRegistList.do") 
    public ModelAndView selectDeptMlgRegistList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청렴마일리지부서별목록 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD040103Service, "selectDeptMlgRegistList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /**
     * 청렴마일리지개인별 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040103/selectPersonMlgRegistList.do") 
    public ModelAndView selectPersonMlgRegistList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청렴마일리지개인별목록 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD040103Service, "selectPersonMlgRegistList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /**
     * 청렴마일리지항목별 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040103/selectEstbsMlgRegistList.do") 
    public ModelAndView selectEstbsMlgRegistList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청렴마일리지항목별목록 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD040103Service, "selectEstbsMlgRegistList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }

    /**
     * 청렴마일리지항목 부서조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040103/selectDept.do") 
    public ModelAndView selectDept(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청렴마일리지항목별목록 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(AUD040103Service, "selectDept", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
}
