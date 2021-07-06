package hsco.mis.sal.SAL060204;

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
 * @Class Name   	: SAL060204Controller.java
 * @Description  	: 기금대부상환조회
 * @author       	: 이상명
 * @since        	: 2015. 11. 5.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 5.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL060204Controller extends BaseContoller {
	
    protected Logger log = LoggerFactory.getLogger(this.getClass());    
	
	@Resource(name="SAL060204Service")
	SAL060204ServiceImpl SAL060204Service;
	
	/**
     * 기금대부상환조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060204/selectEndwLoanRpayList.do") 
    public ModelAndView selectSchxpnLoanRpayList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL060204Service, "selectEndwLoanRpayList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    } 
    
    /**
     * 기금대부상환조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060204/selectEndwLoanRpay2List.do") 
    public ModelAndView selectEndwLoanRpay2List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL060204Service, "selectEndwLoanRpay2List", xpDto, mav);
        
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
    @RequestMapping("hsco/mis/sal/SAL060204/EndwLoanRpayCUD.do")
    public ModelAndView EndwLoanRpayCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("기금대부 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL060204Service, "EndwLoanRpayCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
    
    /**
     * 자료생성
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060204/endwLoanRpayCreate.do")
    public ModelAndView endwLoanRpayCreate(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("기금대부 관리 자료생성 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL060204Service, "endwLoanRpayCreate", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }	
}