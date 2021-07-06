package hsco.mis.hrm.HRM010202;

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
public class HRM010202Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "HRM010202Service")
	HRM010202ServiceImpl HRM010202Service;

	/**
	 * 조직도 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM010202/selectOrgcht.do")
	public ModelAndView selectOrgcht(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM010202Service, "selectOrgcht", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/**
	 * 조직도별 부서내역 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM010202/selectOrgchtDept.do")
	public ModelAndView selectOrgchtDept(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM010202Service, "selectOrgchtDept", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}

	/**
	 * 부서별인원 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/hrm/HRM010202/selectEmpList.do")
	public ModelAndView selectEmpList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		execService(HRM010202Service, "selectEmpList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
}