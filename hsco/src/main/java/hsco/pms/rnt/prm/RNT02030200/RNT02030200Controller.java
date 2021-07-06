package hsco.pms.rnt.prm.RNT02030200;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

@Controller
public class RNT02030200Controller extends BaseContoller{

	@Resource(name="RNT02030200Service")
	RNT02030200ServiceImpl RNT02030200Service;


	/**
	 * 매입임대 대기자 리스트 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030200/selectWaitrList.do")
	public ModelAndView selectWaitrList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02030200Service, "selectWaitrList", xpDto, mav);					// 매입임대 대기자 리스트 조회
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 매입임대 거래가능 주택정보 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030200/selectCntrctrPosblHouseList.do")
	public ModelAndView selectPuchasRentCntrctList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02030200Service, "selectCntrctrPosblHouseList", xpDto, mav);		// 매입임대 거래가능 주택정보 조회

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 선수금계좌번호 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030200/selectPrecdntAccount.do")
	public ModelAndView selectPrecdntAccount(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02030200Service, "selectPrecdntAccount", xpDto, mav);			// 선수금계좌번호 조회

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 매입임대 대기자 가족목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030200/selectPuchasRentCstmrFamilyList.do")
	public ModelAndView selectPuchasRentCstmrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02030200Service, "selectPuchasRentCstmrFamilyList", xpDto, mav);			// 계약등록(매입)

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}


	/**
	 * 계약등록(매입)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030200/puchasCntrctC.do")
	public ModelAndView saveCntrctrC(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02030200Service, "puchasCntrctC", xpDto, mav);					// 계약등록(매입)

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}


	/**
	 * 기존계약자 계약등록(매입)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030200/puchasCntrctAllC.do")
	public ModelAndView puchasCntrctAllC(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02030200Service, "puchasCntrctAllC", xpDto, mav);				// 기존계약자 계약등록(매입)

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}
}
