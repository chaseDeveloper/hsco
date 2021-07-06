package hsco.mis.aud.AUD040101;

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
 * @Class Name      : AUD040101Controller.java
 * @Description     : 청렴마일리지설정 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 07. 10.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 10.      김병진              최초생성
 * </pre>  
 */


@Controller
public class AUD040101Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="AUD040101Service")
    AUD040101ServiceImpl AUD040101Service;
    
    /**
     * 청렴마일리지설정 목록 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040101/selectMlgList.do") 
    public ModelAndView selectMlgList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청렴마일리지설정 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD040101Service, "selectMlgList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 청렴마일리지설정 목록 저장/수정/삭제
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040101/MlgListListCUD.do")
    public ModelAndView MlgListListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("청렴마일리지설정 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
    
            execService(AUD040101Service, "MlgListListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 청렴마일리지설정 년도복사 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040101/selectMlgListCopy.do") 
    public ModelAndView selectMlgListCopy(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("청렴마일리지설정 년도복사 상세 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD040101Service, "selectMlgListCopy", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 청렴마일리지설정_복사 목록 저장
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040101/MlgListCOPYListCUD.do")
    public ModelAndView MlgListCOPYListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("청렴마일리지설정 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
      
            execService(AUD040101Service, "MlgListCOPYListCUD", xpDto, mav);
            
            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        return mav;
    }
    
    /**
     * 삭제여부 조회
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/aud/AUD040101/deleteData.do") 
    public ModelAndView deleteData(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("삭제여부 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(AUD040101Service, "deleteData", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   
    
}
