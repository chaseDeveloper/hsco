package hsco.mis.hrm.HRM060501;

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
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM060501Controller.java
 * @Description  	: 
 * @author       	: 이형무
 * @since        	: 2019. 09. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2019. 09. 16.	이형무			최초생성
 * </pre>  
 */

@Controller
public class HRM060501Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM060501Service")
	HRM060501ServiceImpl HRM060501Service;
	
    /** 집계내역조회 */
    @RequestMapping("/hsco/mis/hrm/HRM060501/selectMlssList.do") 
    public ModelAndView selectMlssList(NexacroMapDTO xpDto, Model model) throws Exception {
        
        log.debug("집계내역조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060501Service, "selectMlssList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /*
     * 평가자 세부목록 조회
     */
    @RequestMapping("/hsco/mis/hrm/HRM060501/selectAprsrList.do")
    public ModelAndView selectAprsrList(NexacroMapDTO xpDto, Model model) throws Exception{
    	log.debug("집계내역조회 ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060501Service, "selectAprsrList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
        
        return mav;
    }
    
    /*
     * 엑셀업로드 
     */
    @RequestMapping("/hsco/mis/hrm/HRM060501/saveExcel.do")
    public ModelAndView saveExcel(NexacroMapDTO xpDto, Model model) throws Exception {
    	log.debug("insert ----------------------------------------------------!");
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM060501Service, "saveExcel", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상");
        
        return mav;
    }
    
    /*
     * 평가자 정보 삭제
     */
    @RequestMapping("/hsco/mis/hrm/HRM060501/deleteMlssAprsList.do")
    public ModelAndView deleteMlssAprseeList(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM060501Service, "deleteMlssAprsList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }
    
    @RequestMapping("/hsco/mis/hrm/HRM060501/saveAprDetail.do")
    public ModelAndView saveAprDetail(NexacroMapDTO xpDto, Model model) throws Exception {
    	log.debug("update ----------------------------------------------------!");
    	
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM060501Service, "updateAprDetail", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }
    
    /**
     * 평가자 랜덤생성
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM060501/selectRandomList.do")
    public ModelAndView selectRandomList(NexacroMapDTO xpDto, Model model) throws Exception {
    	log.debug("update ----------------------------------------------------!");
    	
    	ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM060501Service, "selectRandomList", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
    }
}
