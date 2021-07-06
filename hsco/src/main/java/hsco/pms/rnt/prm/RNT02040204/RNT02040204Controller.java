package hsco.pms.rnt.prm.RNT02040204;

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
 * @Class Name   		: RNT02040204Controller.java
 * @Description  		: 일자별 수납소인 처리
 * @author       			: 변승우
 * @since        			: 2015. 11. 26.
 * @version     		 	: 1.0
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
public class RNT02040204Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="RNT02040204Service")
	RNT02040204ServiceImpl RNT02040204Service;

	
	/**
	 * 매입임대 수납확인 I
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040204/sprntPuchasRecDescI.do")
	public ModelAndView sprntPuchasRecDescI(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040204Service, "sprntPuchasRecDescI", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
		
	/**
	 * 매입임대 일자별 수납소인 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040204/selectPuchasRentRcvAmtByDayList.do")
	public ModelAndView selectPuchasRentRcvAmtByDayList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040204Service, "selectPuchasRentRcvAmtByDayList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 매입임대 일자별 수납소인 처리
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040204/sprntPuchasRecDescReceipt.do")
	public ModelAndView sprntPuchasRecDescReceipt(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040204Service, "sprntPuchasRecDescReceipt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	
	/**
	 * 매입임대 일자별 수납소인 취소
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040204/sprntPuchasRecDescCancel.do")
	public ModelAndView sprntPuchasRecDescCancel(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040204Service, "sprntPuchasRecDescCancel", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 매입임대 일자별 수납소인 결의
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040204/sprntPuchasActVoteI.do")
	public ModelAndView sprntPuchasActVoteI(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040204Service, "sprntPuchasActVoteI", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	
	/**
	 * 매입임대 연체이자 재계산
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040204/ovdintrReCalU.do")
	public ModelAndView ovdintrReCalU(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040204Service, "ovdintrReCalU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
}
