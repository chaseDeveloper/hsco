package hsco.pms.rnt.prm.RNT02031200;

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
 * @Class Name   	: RNT02031200Controller.java
 * @Description  	: 소유물건조회
 * @author       	: 송호원
 * @since        	: 2016. 07. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 07. 08.				송호원				최초생성
 * </pre>  
 */
@Controller
public class RNT02031200Controller extends BaseContoller{
	@Resource(name="RNT02031200Service")
	RNT02031200ServiceImpl RNT02031200Service;

	/**
	 * 소유물건조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02031200/rentPosesnThingPopList.do")
	public ModelAndView reqstList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(RNT02031200Service, "rentPosesnThingPopList", xpDto, mav);	// 소유물건조회

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

		return mav;
	} 
}
