package hsco.pms.sls.lad.rci.SLS100204;

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
public class SLS100204Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS100204Service")
	SLS100204ServiceImpl SLS100204Service;


	//토지결의서 목록
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100204/selectLadDecsnList.do")
	public ModelAndView selectLadDecsnList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("토지수납관리(결의서일괄)----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100204Service, "selectLadDecsnList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}

	
	//토지 수입결의서 조회
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100204/selectLadIncmeDecsnList.do")
	public ModelAndView selectLadIncmeDecsnList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100204Service, "selectLadIncmeDecsnList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	//토지 수입결의서 조회2
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100204/selectLadIncmeDecsnList2.do")
	public ModelAndView selectLadIncmeDecsnList2(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS100204Service, "selectLadIncmeDecsnList2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	
	
	//토지 수입내역서 조회
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100204/selectLadIncmeDtstmnList.do")
	public ModelAndView selectLadIncmeDtstmnList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS100204Service, "selectLadIncmeDtstmnList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
		
}
