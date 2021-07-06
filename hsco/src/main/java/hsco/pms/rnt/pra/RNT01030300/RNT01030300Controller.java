package hsco.pms.rnt.pra.RNT01030300;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class RNT01030300Controller extends BaseContoller{
	@Resource(name="RNT01030300Service")
	RNT01030300ServiceImpl RNT01030300Service;


	/**
	 * 재계약 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030300/rentReCntrctList.do")
	public ModelAndView rentReCntrctList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT01030300Service, "rentReCntrctList", xpDto, mav);		// 재계약 목록

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 재계약 목록 건수
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030300/rentReCntrctCnt.do")
	public ModelAndView rentReCntrctCnt(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT01030300Service, "rentReCntrctCnt", xpDto, mav);		// 재계약 목록 건수

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 자격변경 임대료기준 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030300/chrgStdr.do")
	public ModelAndView chrgStdr(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT01030300Service, "chrgStdr", xpDto, mav);				// 자격변경 임대료기준 조회

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 재계약 정보 일괄 생성
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030300/rentReCntrctAllC.do")
	public ModelAndView rentReCntrctAllC(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT01030300Service, "rentReCntrctAllC", xpDto, mav);		// 재계약 정보 일괄 생성

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}


	/**
	 * 재계약 정보 일괄 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030300/rentReCntrctAllD.do")
	public ModelAndView rentReCntrctAllD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT01030300Service, "rentReCntrctAllD", xpDto, mav);		// 재계약 정보 일괄 삭제

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}


	/**
	 * 재계약 정보 저장 [그리드 저장]
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030300/rentReCntrctCUD.do")
	public ModelAndView rentReCntrctCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT01030300Service, "rentReCntrctCUD", xpDto, mav);			// 재계약 정보 저장 [그리드 저장]

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	/**
	 * 납입기한일괄변경
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030300/rentReCntrctAllU.do")
	public ModelAndView rentReCntrctAllU(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT01030300Service, "rentReCntrctAllU", xpDto, mav);		// 납입기한일괄변경

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}


	/**
	 * 재계약정보 납부서
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01030300/billPrintList.do")
	public ModelAndView billPrintList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01030300Service, "billPrintList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
