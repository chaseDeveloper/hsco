package hsco.mis.fun.FUN030101;

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
 * @Class Name   	: FUN030101Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2015. 8. 28.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 28.  				   양성모				최초생성
 * </pre>  
 */
@Controller
public class FUN030101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="fun030101Service")
	FUN030101ServiceImpl fun030101Service;

	/**
	 * 예금계좌 목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN030101/selectDpstAcnutList.do") 
	public ModelAndView selectDpstAcnutList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("예금계좌 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun030101Service, "selectDpstAcnutList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 예금계좌 입출금 내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN030101/selectDpstIppDtlsList.do") 
	public ModelAndView selectDpstIppDtlsList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("예금계좌 입출금 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun030101Service, "selectDpstIppDtlsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 예금계좌 만기여부, 입출금 내역 수정, 삭제, 등록 처리
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */	
	@RequestMapping("/hsco/mis/fun/FUN030101/dpstIppDtlsCUD.do")
	public ModelAndView dpstIppDtlsCUD(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("예금계좌 입출금 내역 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(fun030101Service, "dpstIppDtlsCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
				
		return mav;		
		
	}
	
	/**
	 * 예금계좌 목록 조회(전자결재 팝업)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN030101/selectPopupDpstAcnutList.do") 
	public ModelAndView selectPopupDpstAcnutList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("예금계좌 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun030101Service, "selectPopupDpstAcnutList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
    
    /**
	 * 전자결재 금액 한글화
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/mis/FUN030101/selectAmtTrans.do") 
	public ModelAndView selectAmtTrans(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("예금액 한글화 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun030101Service, "selectAmtTrans", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}

}