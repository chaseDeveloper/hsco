package hsco.cmm.log;

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

@Controller
public class Log2Controller extends BaseContoller {
	/** Log Factory */
	protected Logger log = LoggerFactory.getLogger(Log2Controller.class);

	@Resource(name = "Log2Service")
	Log2ServiceImpl Log2Service;

	@RequestMapping("/hsco/cmm/log/insertIndInfoLog.do")
	public ModelAndView saveIndivisualInfoLog(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(Log2Service, "saveIndivisualInfoLog", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	@RequestMapping("/hsco/cmm/log/savePageUseLog.do")
	public ModelAndView savePageUseLog(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(Log2Service, "savePageUseLog", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}