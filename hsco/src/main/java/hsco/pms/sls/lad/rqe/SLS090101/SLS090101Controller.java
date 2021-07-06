package hsco.pms.sls.lad.rqe.SLS090101;

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
public class SLS090101Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS090101Service")
	SLS090101ServiceImpl SLS090101Service;


	//납부안내관리
	@RequestMapping("/hsco/pms/sls/lad/rqe/SLS090101/selectLadLcntrctrSmsList.do")
	public ModelAndView selectLadLcntrctrSmsList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("납부안내관리 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS090101Service, "selectLadLcntrctrSmsList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
}
