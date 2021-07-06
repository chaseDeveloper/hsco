package hsco.mis.hrm.HRM030406;

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
 * @Class Name   	: HRM030406Controller.java
 * @Description  	: 
 * @author       	: 김형태
 * @since        	: 2015. 10. 22.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 10. 22.   김형태		최초생성
 * </pre>  
 */

@Controller
public class HRM030406Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM030406Service")
	HRM030406ServiceImpl HRM030406Service;
    
    /**
     * 정년퇴직 예정자 명부 조회
     * 
     * @param xpDto
     * @param model
     * @return
     * @throws Exception
     */
	@RequestMapping("/hsco/mis/hrm/HRM030406/tbhrmPrearngerList.do")
	public ModelAndView tbhrmPrearngerList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM030406Service, "tbhrmPrearngerList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}