package hsco.mis.ctr.CTR010101;

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
 * @Class Name   	: CTR010101Controller.java
 * @Description  	: 
 * @author       	: 배용근
 * @since        	: 2015. 7. 27.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * 
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 27.   배용근	           최초생성
 *  2015. 11. 24.                  정윤원                공통형식에 맞춰 수정
 * </pre>
 */
@Controller
public class CTR010101Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "ctr010101Service")
	CTR010101ServiceImpl ctr010101Service;

	@RequestMapping("/hsco/mis/ctr/CTR010101/selectBcncmstList.do")
	public ModelAndView selectBcncmstList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ctr010101Service, "selectBcncmstList", xpDto, mav); // 거래처코드 리스트

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	@RequestMapping("/hsco/mis/ctr/CTR010101/selectFnncInsttCodeList.do")
	public ModelAndView selectFnncInsttCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ctr010101Service, "selectFnncInsttCodeList", xpDto, mav); // 거래처계좌 리스트
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	@RequestMapping("/hsco/mis/ctr/CTR010101/selectBcncAcnutnoList.do")
	public ModelAndView selectBcncAcnutnoList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ctr010101Service, "selectBcncAcnutnoList", xpDto, mav); // 거래처계좌 리스트

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	@RequestMapping("/hsco/mis/ctr/CTR010101/selectCntrctList.do")
	public ModelAndView selectCntrctList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ctr010101Service, "selectCntrctList", xpDto, mav); // 거래내역 리스트

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	@RequestMapping("/hsco/mis/ctr/CTR010101/selectBcncmst.do")
	public ModelAndView selectBcncmst(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ctr010101Service, "selectBcncmst", xpDto, mav); // 거래처코드 마스터

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	@RequestMapping("/hsco/mis/ctr/CTR010101/selectChkBizrno.do")
	public ModelAndView selectChkBizrno(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ctr010101Service, "selectChkBizrno", xpDto, mav); // 거래처코드 마스터

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/* 거래처정보,계좌정보 저장 */
	@RequestMapping("/hsco/mis/ctr/CTR010101/saveBcncmst.do")
	public ModelAndView saveBcncmst(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ctr010101Service, "saveBcncmst", xpDto, mav); // 거래처코드 저장

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

	@RequestMapping("/hsco/mis/ctr/CTR010101/selectBcncmstPopupList.do")
	public ModelAndView selectBcncmstPopupList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ctr010101Service, "selectChkBizrno", xpDto, mav); // 거래처 검색 팝업 조회

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	@RequestMapping("/hsco/mis/ctr/CTR010101/selectBcncChangeHistList.do")
	public ModelAndView selectBcncChangeHistList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ctr010101Service, "selectBcncChangeHistList", xpDto, mav); // 거래처 변경 이력 조회

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

	/* 거래처변경이력 저장 */
	@RequestMapping("/hsco/mis/ctr/CTR010101/saveBcncChangeHistList.do")
	public ModelAndView saveBcncChangeHistList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ctr010101Service, "saveBcncChangeHistList", xpDto, mav); // 거래처 변경이력 저장

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}

}
