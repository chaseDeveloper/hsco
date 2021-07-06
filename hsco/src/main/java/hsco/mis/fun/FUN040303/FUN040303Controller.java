package hsco.mis.fun.FUN040303;

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
 * @Class Name   	: FUN040303Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2015. 09. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 09. 24.  				   양성모				최초생성
 * </pre>  
 */
@Controller
public class FUN040303Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="fun040303Service")
	FUN040303ServiceImpl fun040303Service;
	
	/**
	 * 가상계좌 수납내역(검색조건 은행 목록)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN040303/selectBankList.do")  
	public ModelAndView selectBankList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가상계좌 수납내역(검색조건 은행 목록) 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun040303Service, "selectBankList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 가상계좌 수납내역(검색조건 계약구분코드 목록)
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN040303/selectCrtDivList.do")  
	public ModelAndView selectCrtDivList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가상계좌 수납내역(검색조건 계약구분코드 목록) 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun040303Service, "selectCrtDivList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 가상계좌 수납내역(기본) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN040303/selectVaReceiptList.do")  
	public ModelAndView selectVaReceiptList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가상계좌 수납내역(기본) 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun040303Service, "selectVaReceiptList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 가상계좌 수납내역(상세) 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/fun/FUN040303/selectVaReceiptDetailList.do")  
	public ModelAndView selectVaReceiptDetailList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("가상계좌 수납내역(상세) 조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(fun040303Service, "selectVaReceiptDetailList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	

	
}