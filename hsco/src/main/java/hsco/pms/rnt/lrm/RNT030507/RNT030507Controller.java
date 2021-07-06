package hsco.pms.rnt.lrm.RNT030507;

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
 * @Class Name   	: RNT01060400Controller.java
 * @Description  	: 각종현황및분석표 출력조회
 * @author       	: 박병일
 * @since        	: 2016.03.02
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016.03.02		 	  박병일			  최초생성
 * </pre>  
 */
@Controller
public class RNT030507Controller extends BaseContoller{
	@Resource(name="RNT030507Service")
	RNT030507ServiceImpl RNT030507Service;
	
	/**
	 * 수입조정현황보고조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/lrm/RNT030507/selectIncmeMSttusR1.do")
	public ModelAndView selectIncmeMSttusR1(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT030507Service, "selectIncmeMSttusR1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 당월임대료미수금현황조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/lrm/RNT030507/selectThsmonRntChrgAtmptList.do")
	public ModelAndView selectThsmonRntChrgAtmptList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT030507Service, "selectThsmonRntChrgAtmptList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 웡별세입징수현황조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/lrm/RNT030507/selectMonthlyLevList.do")
	public ModelAndView selectMonthlyLevList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT030507Service, "selectMonthlyLevList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 조정내역서조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/lrm/RNT030507/selectIncmeMDtlList.do")
	public ModelAndView selectIncmeMDtlList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT030507Service, "selectIncmeMDtlList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 자금수입기록부조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/lrm/RNT030507/selectCptalIncmeList.do")
	public ModelAndView selectCptalIncmeList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT030507Service, "selectCptalIncmeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		
	
	/**
	 * 수입예산정리부조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/lrm/RNT030507/selectIncmeBdgArngList.do")
	public ModelAndView selectIncmeBdgArngList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT030507Service, "selectIncmeBdgArngList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 수입조정일계표조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/lrm/RNT030507/selectIncmeMdatDailyList.do")
	public ModelAndView selectIncmeMdatDailyList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT030507Service, "selectIncmeMdatDailyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 지구별 예산정리부 상세내역 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/lrm/RNT030507/selectAreaIncmeBdgArngList1.do")
	public ModelAndView selectAreaIncmeBdgArngList1(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT030507Service, "selectAreaIncmeBdgArngList1", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 지구별 예산정리부 집계표 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/lrm/RNT030507/selectAreaIncmeBdgArngList2.do")
	public ModelAndView selectAreaIncmeBdgArngList2(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(RNT030507Service, "selectAreaIncmeBdgArngList2", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
}
