package hsco.mis.sal.SAL060101;

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
 * @Class Name   	: SAL060101Controller.java
 * @Description  	: 학자금대부관리
 * @author       	: 이상명
 * @since        	: 2015. 11. 3.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 3.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL060101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SAL060101Service")
	SAL060101ServiceImpl SAL060101Service;
	
	/**
	 * 학자금대부관리
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL060101/selectSchxpnLoanList.do") 
	public ModelAndView selectSchxpnLoanList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SAL060101Service, "selectSchxpnLoanList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
     * 학자금대부관리
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060101/selectSchxpnLoan2List.do") 
    public ModelAndView selectSchxpnLoan2List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL060101Service, "selectSchxpnLoan2List", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }  
    
    /**
     * 학자금대부관리
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060101/selectSchxpnLoan3List.do") 
    public ModelAndView selectSchxpnLoan3List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL060101Service, "selectSchxpnLoan3List", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }   
    
    /**
     * 학자금대부관리2
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060101/selectSchxpnLoan4List.do") 
    public ModelAndView selectSchxpnLoan4List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL060101Service, "selectSchxpnLoan4List", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }   
    
    /**
     * 학자금대부관리
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060101/selectSchxpnLoan5List.do") 
    public ModelAndView selectSchxpnLoan5List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL060101Service, "selectSchxpnLoan5List", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }   	
	
    /**
     * 학자금대부관리
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060101/selectSchxpnLoan6List.do") 
    public ModelAndView selectSchxpnLoan6List(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL060101Service, "selectSchxpnLoan6List", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }       
    
	
	/**
	 * 학자금대부관리 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL060101/SchxpnLoanCUD.do")
	public ModelAndView SchxpnLoanCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("학자금대부 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SAL060101Service, "SchxpnLoanCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");		
		
		return mav;
	}
	
	/**
     * 학자금대부관리 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060101/SchxpnLoan2CUD.do")
    public ModelAndView SchxpnLoan2CUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("학자금대부 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL060101Service, "SchxpnLoan2CUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
	
	/**
     * 학자금대부관리 등록
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060101/SchxpnLoan2_1C.do")
    public ModelAndView SchxpnLoan2C(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("학자금대부 관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL060101Service, "SchxpnLoan2_1C", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
	
	/**
     * 학자금대부관리2 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL060101/SchxpnLoanRpayCUD.do")
    public ModelAndView SchxpnLoanRpayCUD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("학자금대부 관리2 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL060101Service, "SchxpnLoanRpayCUD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");       
        
        return mav;
    }
	
	
}