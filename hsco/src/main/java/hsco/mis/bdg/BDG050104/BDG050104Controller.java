package hsco.mis.bdg.BDG050104;

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
 * 
 * <pre>
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : BDG050104Controller.java
 * @Description     : 
 * @author          : 김형태
 * @since           : 2015. 03. 16.
 * @version         : 1.0
 * @see             :
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 03. 16.                  김형태                최초생성
 * </pre>
 */
@Controller
public class BDG050104Controller extends BaseContoller {
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "BDG050104Service")
	BDG050104ServiceImpl BDG050104Service;

	/**
	 * 부서별조기집행현황 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG050104/selectAcctoElpdExcutSttus.do")
	public ModelAndView selectAcctoElpdExcutSttus(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(BDG050104Service, "selectAcctoElpdExcutSttus", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}