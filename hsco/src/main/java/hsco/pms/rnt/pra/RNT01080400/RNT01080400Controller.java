package hsco.pms.rnt.pra.RNT01080400;

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
public class RNT01080400Controller extends BaseContoller{
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="RNT01080400Service")
	RNT01080400ServiceImpl rnt01080400Service;
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01080400/selectLawsuitDetailList.do")
	public ModelAndView selectLawsuitDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt01080400Service, "selectLawsuitDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
}
