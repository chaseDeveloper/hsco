package hsco.mis.ctr.CTR050100;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CTR050100Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "CTR050100Service")
	CTR050100ServiceImpl CTR050100Service;

	/**
	 * 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ctr/CTR050100/select.do")
	public ModelAndView select(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CTR050100Service, "select", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

}
