package hsco.pms.rnt.pra.RNT01070400;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class RNT01070400Controller extends BaseContoller{
	@Resource(name="RNT01070400Service")
	RNT01070400ServiceImpl RNT01070400Service;
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01070400/rentSprmnyRcivList.do")
	public ModelAndView rentSprmnyRcivList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01070400Service, "rentSprmnyRcivList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01070400/rentSprmnyRcivSumList.do")
	public ModelAndView rentSprmnyRcivSumList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01070400Service, "rentSprmnyRcivSumList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01070400/sprntRecDescReceiptBs.do")
	public ModelAndView sprntRecDescReceiptBs(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01070400Service, "sprntRecDescReceiptBs", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01070400/sprntRecDescCancelBs.do")
	public ModelAndView sprntRecDescCancelBs(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01070400Service, "sprntRecDescCancelBs", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
