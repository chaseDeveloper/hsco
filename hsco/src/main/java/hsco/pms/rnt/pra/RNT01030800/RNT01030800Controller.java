package hsco.pms.rnt.pra.RNT01030800;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class RNT01030800Controller extends BaseContoller{
	@Resource(name="RNT01030800Service")
	RNT01030800ServiceImpl RNT01030800Service;
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030800/rentHouseChangeList.do")
	public ModelAndView selectRentInfoDetail(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030800Service, "rentHouseChangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030800/rentHouseChangeCUD.do")
	public ModelAndView rentHouseChangeCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030800Service, "rentHouseChangeCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
