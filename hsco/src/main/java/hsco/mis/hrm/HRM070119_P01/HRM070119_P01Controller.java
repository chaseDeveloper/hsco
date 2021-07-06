package hsco.mis.hrm.HRM070119_P01;

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
 * @Class Name   	: HRM070119Controller.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 12. 09.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 12. 09.   김형태		최초생성
 * </pre>  
 */

@Controller
public class HRM070119_P01Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM070119_P01Service")
	HRM070119_P01ServiceImpl HRM070119_P01Service;
	
	/**
     * 근태기DB정보 목록조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
	@RequestMapping("/hsco/mis/hrm/HRM070119_P01/selectDclzDBInfoList.do")
	public ModelAndView selectDclzDBInfoList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070119_P01Service, "selectDclzDBInfoList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
}