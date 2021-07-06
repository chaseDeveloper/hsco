package hsco.mis.cus.CUS010602_P01;

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
 * @Class Name      : CUS010602_P01Controller.java
 * @Description     : 홍보고객선택을 관리하는 컨트롤러 클래스
 * @author          : 김병진
 * @since           : 2015. 9. 10.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 10.       김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010602_P01Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
    @Resource(name="CUS010602_P01Service")
    CUS010602_P01ServiceImpl CUS010602_P01Service;
    
    /**
     * 홍보고객선택 목록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010602_P01/selectPrCstmrListActChoiseList.do") 
    public ModelAndView selectPrCstmrListActChoiseList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("홍보고객선택목록 조회 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(CUS010602_P01Service, "selectPrCstmrListActChoiseList", xpDto, mav );

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }   

    /**
     * 홍보고객선택 목록 등록/수정
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/cus/CUS010602_P01/prCstmrListActChoiseU.do")
    public ModelAndView prCstmrListActChoiseU(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("홍보고객활동목록 U 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(CUS010602_P01Service, "prCstmrListActChoiseU", xpDto, mav);
        
        return mav;
    }
}
