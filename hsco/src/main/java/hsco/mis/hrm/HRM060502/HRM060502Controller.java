package hsco.mis.hrm.HRM060502;

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
public class HRM060502Controller extends BaseContoller{
	
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="HRM060502Service")
	HRM060502ServiceImpl HRM060502Service;
	
	/**직위 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM060502/checkOfcps.do") 
	public ModelAndView checkOfcps(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가자 직위 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(HRM060502Service, "checkOfcps", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**평가대상자 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM060502/selectMlssClsfList.do") 
	public ModelAndView selectMlssClsfList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가 직급 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(HRM060502Service, "selectMlssClsfList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	

	/**평가대상자 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM060502/selectMlssAprsr.do") 
	public ModelAndView selectMlssAprsr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가 대상자 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(HRM060502Service, "selectMlssAprsr", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**평가표 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM060502/selectEvlTable.do") 
	public ModelAndView selectEvlTable(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가표 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(HRM060502Service, "selectEvlTable", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
		
	
	/**평가표 제출  */
	@RequestMapping("/hsco/mis/hrm/HRM060502/insertMlssScor.do") 
	public ModelAndView insertMlssScor(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가표 제출 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(HRM060502Service, "insertMlssScor", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**평가표 제출  */
	@RequestMapping("/hsco/mis/hrm/HRM060502/updateMlssAprsr.do") 
	public ModelAndView updateMlssAprsr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가표 제출 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(HRM060502Service, "updateMlssAprsr", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	
	/**평가표 제출취소  */
	@RequestMapping("/hsco/mis/hrm/HRM060502/updateMlssAprsrCancle.do") 
	public ModelAndView updateMlssAprsrCancle(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("평가표 제출 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(HRM060502Service, "updateMlssAprsrCancle", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
