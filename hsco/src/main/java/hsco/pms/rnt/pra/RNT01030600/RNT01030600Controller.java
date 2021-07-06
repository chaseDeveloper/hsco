package hsco.pms.rnt.pra.RNT01030600;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class RNT01030600Controller extends BaseContoller{
	@Resource(name="RNT01030600Service")
	RNT01030600ServiceImpl RNT01030600Service;
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030600/rentNmchangeR.do")
	public ModelAndView rentNmchangeR(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030600Service, "rentNmchangeR", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030600/rentNmchangeCUD.do")
	public ModelAndView rentNmchangeCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030600Service, "rentNmchangeCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	} 
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030600/rentNmchangeCancel.do")
	public ModelAndView rentNmchangeCancel(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030600Service, "rentNmchangeCancel", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
