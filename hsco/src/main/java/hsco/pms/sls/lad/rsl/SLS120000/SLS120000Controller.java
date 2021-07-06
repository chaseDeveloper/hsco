package hsco.pms.sls.lad.rsl.SLS120000;

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
public class SLS120000Controller extends BaseContoller{

	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS120000Service")
	SLS120000ServiceImpl SLS120000Service;
	
	/**
	 * 기본 코드 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rsl/SLS120000/selectBaseCodeList.do")
	public ModelAndView selectBaseCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS120000Service, "selectEmdList", xpDto, mav);			// 읍면동 전체(그리드용)
		execService(SLS120000Service, "selectLndcgrCodeList", xpDto, mav);	// 지목코드

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 읍면동코드 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rsl/SLS120000/selectEmdList.do")
	public ModelAndView selectEmdList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS120000Service, "selectEmdList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 잔여지 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rsl/SLS120000/selectRemndrLadList.do")
	public ModelAndView selectRemndrLadList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS120000Service, "selectRemndrLadList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 잔여지 정보 조회
	 * 해당 잔여지 읍면동(법정동)코드, 첨부 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rsl/SLS120000/selectRemndrLadInfo.do")
	public ModelAndView selectRemndrLadInfo(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS120000Service, "selectEmdList", xpDto, mav);				// 읍면동(법정동)코드
		execService(SLS120000Service, "selectRemndrLadAtchList", xpDto, mav);	// 점부목록

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지 잔여지 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rsl/SLS120000/saveRemndrLadList.do")
	public ModelAndView saveRemndrLadList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS120000Service, "saveRemndrLadList", xpDto, mav);			// 첨부목록 저장(갱신)
		execService(SLS120000Service, "selectRemndrLadAtchList", xpDto, mav);	// 첨부목록 조회

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 잔여지 첨부 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rsl/SLS120000/selectRemndrLadAtchList.do")
	public ModelAndView selectRemndrLadAtchList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS120000Service, "selectRemndrLadAtchList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 토지 잔여지 첨부 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/lad/rsl/SLS120000/saveRemndrLadAtch.do")
	public ModelAndView saveRemndrLadAtch(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS120000Service, "saveRemndrLadAtch", xpDto, mav);			// 첨부내역 적용(저장처리)

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
}

