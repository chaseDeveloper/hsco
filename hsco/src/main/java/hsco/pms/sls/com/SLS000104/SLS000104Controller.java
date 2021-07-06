package hsco.pms.sls.com.SLS000104;

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
public class SLS000104Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS000104Service")
	SLS000104ServiceImpl SLS000104Service;


	
	/**
	 * 기타수입관리 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/com/SLS000104/selectEtcIncmePayList.do")
	public ModelAndView selectEtcIncmePayList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000104Service, "selectEtcIncmePayList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	// 기타수입부가세 조회
    @RequestMapping("/hsco/pms/sls/com/SLS000104/selectEtcIncmeVatList.do")
	public ModelAndView selectEtcIncmeVatList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000104Service, "selectEtcIncmeVatList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
    // 기타수입부가세  기생성자료 조회
    @RequestMapping("/hsco/pms/sls/com/SLS000104/selectEtcIncmeVatExsitYn.do")
	public ModelAndView selectEtcIncmeVatExsitYn(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000104Service, "selectEtcIncmeVatExsitYn", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
	/**
     * 기타수입부가세 저장
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/pms/sls/com/SLS000104/saveEtcIncmeVat.do")
	public ModelAndView saveEtcIncmeVat (NexacroMapDTO xpDto, Model model) throws Exception {

    	ModelAndView mav = new ModelAndView("nexacroMapView");

    	execService(SLS000104Service, "saveEtcIncmeVat", xpDto, mav);
    	
    	mav.addObject(NexacroConstant.ERROR_CODE, "0");
    	mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
    	return mav;
	}
    
    
    // 기타수입부가세 매출조서 조회
    @RequestMapping("/hsco/pms/sls/com/SLS000104/selectEtcIncmeSellingWtnncList.do")
	public ModelAndView selectEtcIncmeSellingWtnncList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS000104Service, "selectEtcIncmeSellingWtnncList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
    
	
}
