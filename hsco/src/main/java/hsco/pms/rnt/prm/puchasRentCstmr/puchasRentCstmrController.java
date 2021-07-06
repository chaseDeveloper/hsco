package hsco.pms.rnt.prm.puchasRentCstmr;

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
 * @Class Name   		: puchasRentCstmrController.java
 * @Description  		: 매입임대 고객 정보
 * @author       			: 변승우
 * @since        			: 2015. 11. 26.
 * @version      			: 1.0
 * @see          			: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 26.					변승우				최초생성
 * </pre>  
 */


@Controller
public class puchasRentCstmrController extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="puchasRentCstmrService")
	puchasRentCstmrServiceImpl puchasRentCstmrService;

	/**
	 * 매입임대 고객 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/puchasRentCstmr/selectPuchasRentCstmrList.do")
	public ModelAndView selectPuchasRentCstmrList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(puchasRentCstmrService, "selectPuchasRentCstmrList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}  


	/**
	 * 매입임대 고객 정보 저장,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/puchasRentCstmr/savePuchasRentCstmrCUD.do")
	public ModelAndView savePuchasRentCstmrCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(puchasRentCstmrService, "savePuchasRentCstmrCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	} 	


	/**
	 * 매입임대 고객 가족 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/puchasRentCstmr/selectPuchasRentCstmrFamilyList.do")
	public ModelAndView selectPuchasRentCstmrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(puchasRentCstmrService, "selectPuchasRentCstmrFamilyList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}  


	/**
	 * 매입임대 고객 가족 정보 저장,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/puchasRentCstmr/savePuchasRentCstmrFamilyCUD.do")
	public ModelAndView savePuchasRentCstmrFamilyCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(puchasRentCstmrService, "savePuchasRentCstmrFamilyCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	} 




	/**
	 * 매입임대 대기자 가족 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/puchasRentCstmr/selectPuchasCstmrFamilyList.do")
	public ModelAndView selectPuchasCstmrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(puchasRentCstmrService, "selectPuchasCstmrFamilyList", xpDto, mav);		// 매입임대 대기자 가족 목록

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 매입임대 대기자 가족 CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/puchasRentCstmr/puchasCstmrFamilyCUD.do")
	public ModelAndView puchasWaitrFamilyCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(puchasRentCstmrService, "puchasCstmrFamilyCUD", xpDto, mav);		// 매입임대 고객 가족 CUD

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}
}
