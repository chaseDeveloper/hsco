package hsco.pms.rnt.pra.RNT01081400;

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
 * @Class Name   	: RNT01081400Controller.java
 * @Description  	: 상가계약현황
 * @author       	: 김지훈
 * @since        	: 2015. 12. 01.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 12. 01.					김지훈			최초생성
 * </pre>  
 */
@Controller
public class RNT01081400Controller extends BaseContoller{
	@Resource(name="RNT01081400Service")
	RNT01081400ServiceImpl RNT01081400Service;
	
	/**
	 * 동호변경현황
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01081400/selectRentSopsrtContRactList.do")
	public ModelAndView selectRentSopsrtContRactList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01081400Service, "selectRentSopsrtContRactList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}
