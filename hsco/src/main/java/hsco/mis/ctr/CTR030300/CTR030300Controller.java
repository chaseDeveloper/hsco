package hsco.mis.ctr.CTR030300;

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
 * @Project Name	: 화성도시공사 차세대정보시스템
 * @Class Name		: CTR030300Controller.java
 * @Description		: 검수검사관리
 * @author			: 김형태
 * @since			: 2017. 07. 21.
 * @version			: 1.0
 * @see				:
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 07. 21.                  김형태              최초생성
 * </pre>
 */
@Controller
public class CTR030300Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "CTR030300Service")
	CTR030300ServiceImpl CTR030300Service;

	/**
	 * 계약목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ctr/CTR030300/selectCntrctList.do")
	public ModelAndView selectCntrctList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CTR030300Service, "selectCntrctList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 검사입회내역 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ctr/CTR030300/selectPrsecWtnessDtls.do")
	public ModelAndView selectPrsecWtnessDtls(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CTR030300Service, "selectPrsecWtnessDtls", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 입회검사자 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ctr/CTR030300/selectWtnessInsptr.do")
	public ModelAndView selectWtnessInsptr(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CTR030300Service, "selectWtnessInsptr", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 검사입회 저장
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ctr/CTR030300/saveCntrwkServc.do")
	public ModelAndView saveCntrwkServc(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CTR030300Service, "saveCntrwkServc", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/**
	 * 첨부파일 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ctr/CTR030300/selectFileList.do")
	public ModelAndView selectFileList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(CTR030300Service, "selectFileList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

}
