package hsco.pms.rnt.pra.RNT01040201;

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
 * @Class Name   	: RNT01040201Controller.java
 * @Description  	: 체납이자/월임대료 생성
 * @author       	: 지효정
 * @since        	: 2015. 11. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 16.					지효정				최초생성
 * </pre>  
 */
@Controller
public class RNT01040201Controller extends BaseContoller{
	@Resource(name="RNT01040201Service")
	RNT01040201ServiceImpl RNT01040201Service;
	
	/**
	 * 주택계약 등록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/pra/RNT01040201/sprntRentValueDelayIuNew.do")
	public ModelAndView sprntRentValueDelayIuNew(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT01040201Service, "sprntRentValueDelayIuNew", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
		
	}	
		
		/**
		 * 주택계약 등록
		 * @param xpDto
		 * @param model
		 * @return
		 * @throws Exception
		 */
		@RequestMapping("/hsco/pms/rnt/pra/RNT01040201/sprntRentLeaseValueIdNew.do")
		public ModelAndView sprntRentLeaseValueIdNew(NexacroMapDTO xpDto, Model model) throws Exception {

			ModelAndView mav = new ModelAndView("nexacroMapView");
			
			execService(RNT01040201Service, "sprntRentLeaseValueIdNew", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
			return mav;		
	}
}
