package hsco.mis.hrm.HRM090901;

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
 * @Class Name   	: HRM090901Controller.java
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
public class HRM090901Controller extends BaseContoller {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @Resource(name="HRM090901Service")
    HRM090901ServiceImpl HRM090901Service;

    /**
     * 회의자료등록 조회
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM090901/selectMstInfo.do") 
    public ModelAndView selectMstInfo(NexacroMapDTO xpDto, Model model) throws Exception {
    
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM090901Service, "selectMstInfo", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상등록");
        
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
    @RequestMapping("/hsco/mis/hrm/HRM090901/selectFileList.do")
    public ModelAndView selectFileList(NexacroMapDTO xpDto, Model model) throws Exception {
    
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    
    	execService(HRM090901Service, "selectFileList", xpDto, mav);
    
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
    
    	return mav;
    }
    
    /**
     * 부서별 회의자료등록 정보 삭제
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM090901/deleteMtgDta.do")
    public ModelAndView deleteMtgDta(NexacroMapDTO xpDto, Model model) throws Exception {
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    
    	execService(HRM090901Service, "deleteMtgDta", xpDto, mav);
    
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	return mav;
    }
}
