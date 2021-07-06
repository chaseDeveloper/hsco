package hsco.pms.rnt.prm.RNT02020300;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   		: RNT02020300Controller.java
 * @Description  		: 매입임대 소유권
 * @author       			: 변승우
 * @since        			: 2015. 10. 27.
 * @version      			: 1.0
 * @see          			:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 27.					변승우				최초생성
 * </pre>
 */

@Controller
public class RNT02020300Controller extends BaseContoller{
	@Resource(name="RNT02020300Service")
	RNT02020300ServiceImpl RNT02020300Service;


	/**
	 * 입주대기자 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020300/puchasWaitrList.do")
	public ModelAndView puchasWaitrList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02020300Service, "puchasWaitrList", xpDto, mav);			// 입주대기자 목록

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 소유물건정보 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020300/puchasPosesnThingList.do")
	public ModelAndView puchasPosesnThingList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02020300Service, "puchasPosesnThingList", xpDto, mav);		// 소유물건정보 목록

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 소유물건정보 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020300/puchasPosesnThingCUD.do")
	public ModelAndView puchasPosesnThingCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02020300Service, "puchasPosesnThingCUD", xpDto, mav);		// 소유물건정보 CUD

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}


	/**
	 * 소유물건정보 등록 대상자 체크
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020300/puchasPosesnThingChk.do")
	public ModelAndView puchasPosesnThingChk(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02020300Service, "puchasPosesnThingChk", xpDto, mav);		// 소유물건정보 등록 대상자 체크

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 소유물건 일괄등록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020300/puchasPosesnThingCmulti.do")
	public ModelAndView puchasPosesnThingCmulti(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02020300Service, "puchasPosesnThingCmulti", xpDto, mav);	// 소유물건 일괄등록

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}


	/**
	 * 첨부파일 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020300/atchCUD.do")
	public ModelAndView atchCUD(NexacroMapDTO xpDto, Model model)
			throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02020300Service, "atchCUD", xpDto, mav);					// 첨부파일 저장

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}


	/**
	 * 첨부파일 다운로드 팝업 목록 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020300/ATCH_DOWN_LIST.do")
	public ModelAndView ATCH_DOWN_LIST(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02020300Service, "ATCH_DOWN_LIST", xpDto, mav);			// 첨부파일 다운로드 팝업 목록 조회

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 첨부파일 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02020300/ATCH_FILE_DEL.do")
	public ModelAndView atchDelete(NexacroMapDTO xpDto, Model model)
			throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02020300Service, "ATCH_FILE_DEL", xpDto, mav);			// 첨부파일 삭제

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}
}