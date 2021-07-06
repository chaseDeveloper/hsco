package hsco.mis.sal.SAL030113;

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
public class SAL030113Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(SAL030113Controller.class);
	
	@Resource(name="SAL030113Service")
	SAL030113ServiceImpl SAL030113Service;
	
	@RequestMapping("/hsco/mis/sal/SAL030113/selectSalaryPymntList.do") 
	public ModelAndView selectSalaryPymntList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(SAL030113Service, "selectSalaryPymntList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	@RequestMapping("/hsco/mis/sal/SAL030113/selectSalaryDdcList.do") 
	public ModelAndView selectSalaryDdcList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(SAL030113Service, "selectSalaryDdcList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
