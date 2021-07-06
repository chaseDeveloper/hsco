package hsco.pms.fms.FMS020104;

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
public class FMS020104Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "FMS020104Service")
	FMS020104ServiceImpl FMS020104Service;

	/**
	 * 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/fms/FMS020104/select.do")
	public ModelAndView select(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FMS020104Service, "select", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 상세(대표시설물, 건축물)조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/fms/FMS020104/selectSub.do")
	public ModelAndView selectSub(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FMS020104Service, "selectSub", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 첨부파일(전경, 기타)조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/fms/FMS020104/selectFile.do")
	public ModelAndView selectFile(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FMS020104Service, "selectFile", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 저장
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/fms/FMS020104/save.do")
	public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(FMS020104Service, "save", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

}
