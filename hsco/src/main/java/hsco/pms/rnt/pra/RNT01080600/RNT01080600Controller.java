package hsco.pms.rnt.pra.RNT01080600;

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
public class RNT01080600Controller extends BaseContoller{
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="RNT01080600Service")
	RNT01080600ServiceImpl rnt01080600Service;
	
	@RequestMapping("/hsco/pms/rnt/pra/RNT01080600/selectSpeclManageList.do")
	public ModelAndView selectSpeclManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt01080600Service, "selectSpeclManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	} 
}
