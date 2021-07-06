package hsco.pms.sls.lad.ctr.SLS080304;

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
public class SLS080304Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS080304Service")
	SLS080304ServiceImpl SLS080304Service;


	/**
	 * 토지계약목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080304/selectLadLcntrctrList.do")
	public ModelAndView selectLadLcntrctrList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지계약목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080304Service, "selectLadLcntrctrList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지계약자 재계약목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080304/selectLcntrctrReCntrctList.do")
	public ModelAndView selectLcntrctrReCntrctList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지계약자 재계약목록 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS080304Service, "selectLcntrctrReCntrctList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	// 토지계약자 재계약목록 저장
	@RequestMapping("/hsco/pms/sls/lad/ctr/SLS080304/saveLcntrctrReCntrctList.do")
	public ModelAndView saveLcntrctrReCntrctList (NexacroMapDTO xpDto, Model model) throws Exception {

    	log.debug("토지계약자 재계약목록 저장======================================>");
    	ModelAndView mav = new ModelAndView("nexacroMapView");
    	
    	execService(SLS080304Service, "saveLcntrctrReCntrctList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
    	return mav;
	}
	
}
