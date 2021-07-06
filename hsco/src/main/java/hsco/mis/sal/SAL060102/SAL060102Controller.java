package hsco.mis.sal.SAL060102;

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
 * @Class Name   	: SAL060102Controller.java
 * @Description  	: 학자금대부상환조회
 * @author       	: 이상명
 * @since        	: 2015. 11. 4.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 4.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL060102Controller extends BaseContoller {
	
    protected Logger log = LoggerFactory.getLogger(this.getClass());    
	
	@Resource(name="SAL060102Service")
	SAL060102ServiceImpl SAL060102Service;
	
	/**
     * 학자금대부상환조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060102/selectSchxpnLoanRpayList.do") 
    public ModelAndView selectSchxpnLoanRpayList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL060102Service, "selectSchxpnLoanRpayList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    } 
    
    /**
     * 학자금대부상환조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060102/selectSchxpnLoanRpay2List.do") 
    public ModelAndView selectSchxpnLoanRpay2List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL060102Service, "selectSchxpnLoanRpay2List", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }   
	
	
	
	
}