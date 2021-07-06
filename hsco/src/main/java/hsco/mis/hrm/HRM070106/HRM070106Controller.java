package hsco.mis.hrm.HRM070106;

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
 * @Class Name      : HRM070106Controller.java
 * @Description     : 출퇴근내역목록을 조회하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 11. 18.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 18.      김병진              최초생성
 * </pre>  
 */

@Controller
public class HRM070106Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="HRM070106Service")
    HRM070106ServiceImpl HRM070106Service;

    /**
     * 출퇴근내역 목록 조회
     * @param xpDtoselectRestVcatnList
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM070106/selectCmgList.do") 
    public ModelAndView selectCmgList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("근태내역 목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM070106Service, "selectCmgList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }
}
