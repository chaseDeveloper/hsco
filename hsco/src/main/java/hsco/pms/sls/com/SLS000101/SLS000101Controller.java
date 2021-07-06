package hsco.pms.sls.com.SLS000101;

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
public class SLS000101Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS000101Service")
	SLS000101ServiceImpl SLS000101Service;


	
	/**
	 * 기타수입관리 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000101/selectEtcIncmePayList.do")
	public ModelAndView selectEtcIncmePayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000101Service, "selectEtcIncmePayList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
     * 기타수입관리 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/com/SLS000101/saveEtcIncmePayList.do")
	public ModelAndView saveEtcIncmePayList (NexacroMapDTO xpDto, Model model) throws Exception {

    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS000101Service, "saveEtcIncmePayList", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
    	return mav;
	}
    
    
    //부서콤보
    @RequestMapping("/hsco/pms/sls/com/SLS000101/selectDeptCodeList.do")
	public ModelAndView selectDeptCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000101Service, "selectDeptCodeList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    
	
}
