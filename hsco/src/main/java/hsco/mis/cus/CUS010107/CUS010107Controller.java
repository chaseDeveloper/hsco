package hsco.mis.cus.CUS010107;

import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;


/**
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : CUS010107Controller.java
 * @Description     : 고객방문평가카드목록을 조회하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 06.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 06.      김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010107Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    @Resource(name="CUS010107Service")
    CUS010107ServiceImpl CUS010107Service;

    /**
     * 고객방문평가카드 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010107/selectVisitEvlCardList.do") 
    public ModelAndView selectVisitEvlCardList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객방문평가카드 목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS010107Service, "selectVisitEvlCardList", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	}
    
    /**
     * 고객방문평가카드 목록 부서별 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010107/selectVisitEvlCardDtls.do") 
    public ModelAndView selectVisitEvlCardDtls(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객방문평가카드 목록 부서조회--------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(CUS010107Service, "selectVisitEvlCardDtls", xpDto, mav );

            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
            
            return mav;
    }
    
    /**
     * 고객방문평가카드 목록 사원별 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010107/selectVisitEvlCardEmpno.do") 
    public ModelAndView selectVisitEvlCardEmpno(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객방문평가카드 목록 사원조회--------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

            execService(CUS010107Service, "selectVisitEvlCardEmpno", xpDto, mav );

            mav.addObject(NexacroConstant.ERROR_CODE, "0");
            mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
            
            return mav;
    }
}