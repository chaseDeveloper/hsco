package hsco.mis.acc.ACC050205;

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
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : ACC050205Controller.java
 * @Description     : 
 * @author          : 김형태
 * @since           : 2020. 11. 23
 * @version         : 1.0
 * @see             :
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020. 11. 23                  김형태                최초생성
 * </pre>
 */
@Controller
public class ACC050205Controller extends BaseContoller {
	protected Logger log = LoggerFactory.getLogger(ACC050205Controller.class);
	
	@Resource(name = "ACC050205Service")
	ACC050205ServiceImpl ACC050205Service;
	
	/**
	 * 자금일보 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050205/select.do")
	public ModelAndView select(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("select Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC050205Service, "select", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}