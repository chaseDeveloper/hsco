package hsco.pms.rnt.pra.RNT01051501;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class RNT01051501Controller extends BaseContoller{
	
	@Resource(name="RNT01051501Service")
	RNT01051501ServiceImpl RNT01051501Service;
	
	//SMS발송내역 조회
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051501/selectRentHouseSmsList.do")
	public ModelAndView selectRentInfoDetail(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01051501Service, "selectRentHouseSmsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//SMS발송내역 저장
	@RequestMapping("/hsco/pms/rnt/pra/RNT01051501/saveRentHouseSmsList.do")
	public ModelAndView saveRentHouseSmsList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01051501Service, "saveRentHouseSmsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
}
