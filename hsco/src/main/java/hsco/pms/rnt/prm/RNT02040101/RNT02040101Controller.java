package hsco.pms.rnt.prm.RNT02040101;

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
 * @Class Name   		: RNT02040101Controller.java
 * @Description  		: 매입임대 보증금
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
public class RNT02040101Controller  extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name="RNT02040101Service")
	RNT02040101ServiceImpl RNT02040101Service;

	
	/**
	 * 매입임대 보증금 정보
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040101/selectPuchasGtnList.do")
	public ModelAndView selectPuchasGtnList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040101Service, "selectPuchasGtnList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		

	
	/**
	 * 매입임대 보증금 정보(저장,수정,삭제)
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040101/savePuchasGtnCUD.do")
	public ModelAndView savePuchasGtnCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040101Service, "savePuchasGtnCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 매입임대 보증금 연체이자생성
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/pms/rnt/prm/RNT02040203/savePuchasRentGtnMtRntchrgU.do")
	public ModelAndView savePuchasRentMtRntchrgU(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT02040101Service, "savePuchasRentGtnMtRntchrgU", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
}
