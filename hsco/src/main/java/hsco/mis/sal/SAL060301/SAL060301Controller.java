package hsco.mis.sal.SAL060301;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL060301Controller.java
 * @Description  	: 퇴직연금관리
 * @author       	: 이상명
 * @since        	: 2015. 11. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 9.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL060301Controller extends BaseContoller {
	
    protected Logger log = LoggerFactory.getLogger(this.getClass());    
	
	@Resource(name="SAL060301Service")
	SAL060301ServiceImpl SAL060301Service;
	
	/**
     * 기금대부상환조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060301/selectRetireAnntyList.do") 
    public ModelAndView selectRetireAnntyList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL060301Service, "selectRetireAnntyList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    } 
    
   	
    /**
     * 기금대부관리 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060301/RetireAnntyCUD.do")
    public ModelAndView RetireAnntyCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("기금대부 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL060301Service, "RetireAnntyCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
	
	
}