package hsco.pms.cmp.CMP040300;

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
public class CMP040300Controller extends BaseContoller{
	
	private final Logger log = LoggerFactory.getLogger(CMP040300Controller.class);
			
	@Resource(name="CMP040300Service")
	CMP040300ServiceImpl CMP040300Service;
		
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040300/rwmnyList.do") 
	public ModelAndView rwmnyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("rwmnyList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040300Service, "rwmnyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040300/rwmnyRptList.do") 
	public ModelAndView rwmnyRptList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("rwmnyRptList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040300Service, "rwmnyRptList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040300/silnongRptList.do") 
	public ModelAndView silnongRptList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("silnongRptList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040300Service, "silnongRptList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	
	@RequestMapping("/hsco/pms/cmp/tdd/CMP040300/habRptList.do") 
	public ModelAndView habRptList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("habRptList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CMP040300Service, "habRptList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		
}
