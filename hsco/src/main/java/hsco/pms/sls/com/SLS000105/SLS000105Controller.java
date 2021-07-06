package hsco.pms.sls.com.SLS000105;

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
public class SLS000105Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS000105Service")
	SLS000105ServiceImpl SLS000105Service;

	
	//기타결의서 목록
	@RequestMapping("/hsco/pms/sls/com/SLS000105/selectEtcDecsnList.do")
	public ModelAndView selectEtcDecsnList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("기타수납관리(결의서일괄)----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS000105Service, "selectEtcDecsnList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	//임대료조정현황
	@RequestMapping("/hsco/pms/sls/com/SLS000105/selectEtcRntchrgMdatList.do")
	public ModelAndView selectEtcRntchrgMdatList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS000105Service, "selectEtcRntchrgMdatList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	
	//기타 수입결의서 조회
	@RequestMapping("/hsco/pms/sls/com/SLS000105/selectEtcIncmeDecsnList.do")
	public ModelAndView selectEtcIncmeDecsnList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS000105Service, "selectEtcIncmeDecsnList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	//기타 수입결의서 조회2
	@RequestMapping("/hsco/pms/sls/com/SLS000105/selectEtcIncmeDecsnList2.do")
	public ModelAndView selectEtcIncmeDecsnList2(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS000105Service, "selectEtcIncmeDecsnList2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	
	
	//기타 수입내역서 조회
	@RequestMapping("/hsco/pms/sls/com/SLS000105/selectEtcIncmeDtstmnList.do")
	public ModelAndView selectEtcIncmeDtstmnList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS000105Service, "selectEtcIncmeDtstmnList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
  
	
}
