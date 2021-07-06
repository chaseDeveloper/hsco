package hsco.mis.ctr.CTR061500;

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

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: CTR061500Controller.java
 * @Description  	: 보증현황
 * @author       	: 김형태
 * @since        	: 2017. 08. 11.
 * @version      	: 1.0
 * @see          	:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 08. 11.                  김형태              최초생성
 * </pre>
 */
@Controller
public class CTR061500Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "CTR061500Service")
	CTR061500ServiceImpl CTR061500Service;
	
	/**
	 * 보증현황 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ctr/CTR061500/selectAssrncSttus.do")
	public ModelAndView selectAssrncSttus(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(CTR061500Service, "selectAssrncSttus", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
}
