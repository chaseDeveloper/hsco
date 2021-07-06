package hsco.pms.sls.lad.rci.SLS100300;

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
public class SLS100300Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS100300Service")
	SLS100300ServiceImpl SLS100300Service;


	//수입조정일계표
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100300/selectLadIncmeMdatDailyList.do")
	public ModelAndView selectLadIncmeMdatDailyList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("수입조정일계표----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100300Service, "selectLadIncmeMdatDailyList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	//월별징수현황 : 목별
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100300/selectLadMonthlyLevList1.do")
	public ModelAndView selectLadMonthlyLevList1(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("월별징수현황 : 목별----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100300Service, "selectLadMonthlyLevList1", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	//월별징수현황 : 지구별
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100300/selectLadMonthlyLevList2.do")
	public ModelAndView selectLadMonthlyLevList2(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("월별징수현황 : 지구별----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100300Service, "selectLadMonthlyLevList2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
		
		
	//자금수입	기록부
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100300/selectCptalIncmeList.do")
	public ModelAndView selectCptalIncmeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("자금수입기록부----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100300Service, "selectCptalIncmeList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	//수입예산정리부
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100300/selectIncmeBdgArngList.do")
	public ModelAndView selectIncmeBdgArngList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("수입예산정리부----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100300Service, "selectIncmeBdgArngList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	//지구별 수입예산정리부 : 보조장부
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100300/selectAreaIncmeBdgArngList1.do")
	public ModelAndView selectAreaIncmeBdgArngList1(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("지구별 수입예산정리부 : 보조장부----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100300Service, "selectAreaIncmeBdgArngList1", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	//지구별 수입예산정리부 : 집계표
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100300/selectAreaIncmeBdgArngList2.do")
	public ModelAndView selectAreaIncmeBdgArngList2(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("지구별 수입예산정리부 : 집계표----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100300Service, "selectAreaIncmeBdgArngList2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
	
	//수입예산정리부 (X)
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100300/selectIncmeBdgArngListA.do")
	public ModelAndView selectIncmeBdgArngListA(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("지구별 수입예산정리부 보조장부 ----------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS100300Service, "selectIncmeBdgArngListA", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}	
	
}
