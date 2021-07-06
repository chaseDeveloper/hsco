package hsco.mis.hrm.HRM090204;

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
 * @Class Name   	: HRM090204Controller.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 10. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 10. 26.   김형태		최초생성
 * </pre>  
 */

@Controller
public class HRM090204Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM090204Service")
	HRM090204ServiceImpl HRM090204Service;
	
    /**
     * 실적증명발급내역 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
	@RequestMapping("/hsco/mis/hrm/HRM090204/tbhrmIssuList.do")
	public ModelAndView tbhrmIssuList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM090204Service, "tbhrmIssuList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
     * 저장(U)
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping("/hsco/mis/hrm/HRM090204/tbhrmIssuSave.do")
    public ModelAndView tbhrmIssuSave(NexacroMapDTO xpDto, Model model) throws Exception {
        ModelAndView mav = new ModelAndView("nexacroMapView");

        execService(HRM090204Service, "tbhrmIssuSave", xpDto, mav);

        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
    }
}