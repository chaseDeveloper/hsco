package hsco.com.sym.qzm.SYM140300;

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
 * &#64;Project Name    : 화성도시공사 차세대정보시스템
 * &#64;Class Name      : SYM140300Controller.java
 * &#64;Description     : 
 * &#64;author          : 권재만
 * &#64;since           : 2020. 06. 02.
 * &#64;version         : 1.0
 * &#64;see             : 
 * &#64;COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020. 06. 02.      권재만              최초생성(AUD040203소스와 동일)
 * </pre>
 */

@Controller
public class SYM140300Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "SYM140300Service")
	SYM140300ServiceImpl SYM140300Service;

	/**
	 * 참여율/정답율, 문항별통계, 사원목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/com/sym/qzm/SYM140300/select.do")
	public ModelAndView select(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM140300Service, "select", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}
	
	/**
	 * 문항별결과 목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/com/sym/qzm/SYM140300/selectQustnrDtlsList.do")
	public ModelAndView selectQustnrDtlsList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM140300Service, "selectQustnrDtlsList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}
	
}
