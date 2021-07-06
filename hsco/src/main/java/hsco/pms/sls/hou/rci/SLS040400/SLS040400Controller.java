package hsco.pms.sls.hou.rci.SLS040400;

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
 * @Class Name   	: SLS040400Controller.java
 * @Description  	: 
 * @author       	: 홍길동
 * @since        	: 2015. 8.17.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 17.		 홍길동			최초생성
 * </pre>  
 */
@Controller
public class SLS040400Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS040400Service")
	SLS040400ServiceImpl SLS040400Service;
	
	/**
	 * 수입조정일계표 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040400/selectIncmeMdatDailyList.do")
	public ModelAndView selectIncmeMdatDailyList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("수입조정일계표 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040400Service, "selectIncmeMdatDailyList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	/**
	 * 월별징수현황 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040400/selectMonthlyLevList.do")
	public ModelAndView selectMonthlyLevList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("월별징수현황 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040400Service, "selectMonthlyLevList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}		
	
	/**
	 * 자금수입기록부 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040400/selectCptalIncmeList.do")
	public ModelAndView selectCptalIncmeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("자금수입기록부 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040400Service, "selectCptalIncmeList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	/**
	 * 수입예산정리부 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040400/selectIncmeBdgArngList.do")
	public ModelAndView selectIncmeBdgArngList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("자금수입기록부 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040400Service, "selectIncmeBdgArngList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	/**
	 * 지구별 수입예산정리부_월계표 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040400/selectAreaIncmeBdgArngList1.do")
	public ModelAndView selectAreaIncmeBdgArngList1(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("지구별 자금수입기록부_월계표 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040400Service, "selectAreaIncmeBdgArngList1", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}
	
	/**
	 * 지구별 수입예산정리부_집계표 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/rci/SLS040400/selectAreaIncmeBdgArngList2.do")
	public ModelAndView selectAreaIncmeBdgArngList2(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("지구별 자금수입기록부_집계표 조회영역----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS040400Service, "selectAreaIncmeBdgArngList2", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	
    
}
