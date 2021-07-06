package hsco.mis.cus.CUS010106;

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
 * @Class Name      : CUS010106Controller.java
 * @Description     : 고객방문평가카드를 관리하는 컨트롤러 클래스 
 * @author          : 김병진
 * @since           : 2015. 08. 05.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 05.       김병진             최초생성
 * </pre>  
 */

@Controller
public class CUS010106Controller extends BaseContoller {
    
    protected Logger log = LoggerFactory.getLogger(this.getClass()); 
    
	
    @Resource(name="CUS010106Service")
    CUS010106ServiceImpl CUS010106Service;
	
    /**
     * 고객방문평가카드 목록 조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010106/selectVisitEvlCardList.do") 
    public ModelAndView selectVisitEvlCardList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("고객방문평가카드 목록 리스트 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS010106Service, "selectVisitEvlCardList", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    }   
	 
		
    /**
     * 고객방문평가카드 테이블 저장/수정/삭제 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010106/visitEvlCardListCUD.do")
    public ModelAndView visitEvlCardListCUD(NexacroMapDTO xpDto, Model model)
            throws Exception {
        
        log.debug("고객방문평가카드 테이블 저장 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
             execService(CUS010106Service, "visitEvlCardListCUD", xpDto, mav);
             
             mav.addObject(NexacroConstant.ERROR_CODE, "0");
             mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
         
         return mav;
     }
    
    /**
     * 사원번호 부서코드  조회
     * @param xpDto
     * @param model
     * @return 
     * @throws Exception
     */
    @RequestMapping("hsco/mis/cus/CUS010106/selectEmpNoDeptCode.do") 
    public ModelAndView selectEmpNoDeptCode(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("사원번호 부서코드 조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

	        execService(CUS010106Service, "selectEmpNoDeptCode", xpDto, mav );

	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	        
	        return mav;
	    } 
}