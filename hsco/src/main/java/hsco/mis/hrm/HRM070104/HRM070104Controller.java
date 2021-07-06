package hsco.mis.hrm.HRM070104;

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
 * @Class Name      : HRM070104Controller.java
 * @Description     : 병가신청내역을 관리하는 컨트롤러 클래스
 * @author          : 이수지
 * @since           : 2017. 12. 06.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 12. 06.      이수지              최초생성
 * </pre>  
 */

@Controller
public class HRM070104Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="HRM070104Service")
    HRM070104ServiceImpl HRM070104Service;
    
    /**
     * 병가신청내역 목록 조회
     * @param xpDtoselectRestVcatnList
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070104/selectUserInfo.do") 
    public ModelAndView selectUserInfo(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("접속자정보 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070104Service, "selectUserInfo", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    
    /**
     * 병가신청내역 목록 조회
     * @param xpDtoselectRestVcatnList
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070104/selectDissVcatnList.do") 
    public ModelAndView selectDissVcatnList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("병가신청내역 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070104Service, "selectDissVcatnList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
    
    /**
     * 병가 수정, 삭제, 등록 처리
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070104/dissVcatnCUD.do")
    public ModelAndView dissVcatnCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM070104Service, "dissVcatnCUD", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        return mav;
    }

    /**
     * 첨부파일 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070104/selectFile.do")
    public ModelAndView selectFile(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070104Service, "selectFile", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        return mav;
    }

}
