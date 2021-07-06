package hsco.pms.sls.lad.rci.SLS100101;

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
import hsco.pms.com.COM000000.COM000000ServiceImpl;

@Controller
public class SLS100101Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="SLS100101Service")
	SLS100101ServiceImpl SLS100101Service;

	@Resource(name="COM000000Service")
	COM000000ServiceImpl COM000000Service;
		
	/**
	 * 화면 기초정보 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rci/SLS100101/selectInitInfo.do") 
	public ModelAndView selectInitInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(COM000000Service, "selectCyberBankCodeList", xpDto, mav);	// 사이버브랜치용 은행목록
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
