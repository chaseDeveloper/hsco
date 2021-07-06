package hsco.pms.rnt.pra.RNT01070500;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class RNT01070500Controller extends BaseContoller{
	@Resource
	RNT01070500ServiceImpl RNT01070500Service;
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01070500/rentSportDelintList.do")
	public ModelAndView rentSportDelintList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01070500Service, "rentSportDelintList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}


	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01070500/spVaBillUid.do")
	public ModelAndView spVaBillUid(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01070500Service, "spVaBillUid", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
