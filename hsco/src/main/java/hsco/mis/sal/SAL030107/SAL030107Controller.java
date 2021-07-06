package hsco.mis.sal.SAL030107;

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
 * @Class Name   	: SAL030107Controller.java
 * @Description  	: 급여인상관리
 * @author       	: 이상명
 * @since        	: 2015. 11. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 17.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL030107Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SAL030107Service")
	SAL030107ServiceImpl SAL030107Service;
	
	/**
	 * 급여인상관리
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL030107/selectUpSalaryCreatList.do") 
	public ModelAndView selectPdWorkSalaryList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SAL030107Service, "selectUpSalaryCreatList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
     * 급여인상관리2
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL030107/selectUpSalaryPymntList.do") 
    public ModelAndView selectUpSalaryPymntList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL030107Service, "selectUpSalaryPymntList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }   
    
    /**
     * 인상기본급 내역조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL030107/selectUpSalaryTableList.do") 
    public ModelAndView selectUpSalaryTableList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SAL030107Service, "selectUpSalaryTableList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
        
    }   
		
    /**
     * 급여인상관리 등록, 수정, 삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL030107/UpSalaryPymntC.do")
    public ModelAndView UpSalaryPymntC(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여인상관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030107Service, "UpSalaryPymntC", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        
        
        return mav;
    }	
    
    /**
     * 급여인상관리 차액 내역 생성
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL030107/UpSalaryPymntC_2.do")
    public ModelAndView UpSalaryPymntC_2(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여인상관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030107Service, "UpSalaryPymntC_2", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        
        
        return mav;
    }   
    
    /**
     * 급여인상관리 생성관리 생성
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL030107/UpSalaryPymntCre_2.do")
    public ModelAndView UpSalaryPymntCre_2(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여인상관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030107Service, "UpSalaryPymntCre_2", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        
        
        return mav;
    }   
    
    /**
     * 급여인상관리  삭제
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL030107/UpSalaryPymntD.do")
    public ModelAndView UpSalaryPymntD(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여인상관리 CUD 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030107Service, "UpSalaryPymntD", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        
        
        return mav;
    }   
    
    /**
     * 인상기본급 삭제후 입력
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL030107/insertUpSalaryTableList.do")
    public ModelAndView insertUpSalaryTableList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여인상기본급입력 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030107Service, "insertUpSalaryTableList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        
        
        return mav;
    }   
    
    /**
     * 직급별 평균인상률
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("hsco/mis/sal/SAL030107/clsfAvgIncDtls.do")
    public ModelAndView clsfAvgIncDtls(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("급여인상기본급입력 시작----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(SAL030107Service, "clsfAvgIncDtls", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
        
        
        
        return mav;
    }   
	
}