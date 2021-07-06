package hsco.pms.rnt.prm.RNT02030800;

import javax.annotation.Resource;

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
 * @Class Name   	: RNT02030800Controller.java
 * @Description  	: 공가현황
 * @author       	: 변승우
 * @since        	: 2015. 12. 17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 17.					변승우				최초생성
 * </pre>  
 */


@Controller
public class RNT02030800Controller  extends BaseContoller{
	@Resource(name="RNT02030800Service")
	RNT02030800ServiceImpl RNT02030800Service;

	/**
	 * 매입임대 공가현황
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030800/puchasHouseBildList.do")
	public ModelAndView puchasHouseBildList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02030800Service, "puchasHouseBildList", xpDto, mav);		// 매입임대 공가현황

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	}


	/**
	 * 매입임대 공가CUD
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02030800/puchasHouseBildCUD.do")
	public ModelAndView selectPuchasPosesnThingList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02030800Service, "puchasHouseBildCUD", xpDto, mav);		// 매입임대 공가CUD

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}
}
