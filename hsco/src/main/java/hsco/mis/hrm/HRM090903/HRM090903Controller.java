package hsco.mis.hrm.HRM090903;

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
 * @Class Name   	: HRM090903Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2019. 10. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 WebCash, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                        내용
 * ------------------------------------------------------------------
 *  2019. 10. 18.			  양성모			최초생성
 * </pre>
 */

@Controller
public class HRM090903Controller extends BaseContoller {
	
    protected Logger log = LoggerFactory.getLogger(this.getClass());	
    
    @Resource(name="HRM090903Service")
    HRM090903ServiceImpl HRM090903Service;
    
    /**
     * 회의자료관리 기준 정보 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM090903/selectMstInfo.do") 
    public ModelAndView selectMstInfo(NexacroMapDTO xpDto, Model model) throws Exception {
    	
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
     	execService(HRM090903Service, "selectMstInfo", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상등록");
    	
    	return mav;
    }

    /**
     * 기준일자별 회의자료 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM090903/selectMtgDtaList.do") 
    public ModelAndView selectMtgDtaList(NexacroMapDTO xpDto, Model model) throws Exception {
    	
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
     	execService(HRM090903Service, "selectMtgDtaList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상등록");
    	
    	return mav;
    }

    /**
     * 회의자료관리 저장
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM090903/saveMstInfo.do")
    public ModelAndView saveBsrpDtl(NexacroMapDTO xpDto, Model model) throws Exception {
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    
    	execService(HRM090903Service, "saveMstInfo", xpDto, mav);
    
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	return mav;
    }
    
    /**
     * 첨부파일 조회
     * 
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM090903/selectFileList.do")
    public ModelAndView selectFileList(NexacroMapDTO xpDto, Model model) throws Exception {
    
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    
    	execService(HRM090903Service, "selectFileList", xpDto, mav);
    
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    
    	return mav;
    }
}
