package hsco.eis.eis.EIS030102;

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
 * @Class Name   	: EIS030102Controller.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2016. 3. 30.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 3. 30.		박병일			최초생성
 * </pre>  
 */

@Controller
public class EIS030102Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(EIS030102Controller.class);	
	
	@Resource(name="EIS030102Service")
	EIS030102ServiceImpl EIS030102Service;
	
	/**
	 * 자금수지_일계_수입지출일계 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030102/selectInExpSmmprdy.do")
	public ModelAndView selectInExpSmmprdy(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isDebugEnabled()) log.debug("selectInExpSmmprdy started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030102Service, "selectInExpSmmprdy", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 자금수지_일계_자금현황 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030102/selectCptalSttus.do") 
	public ModelAndView selectCptalSttus(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030102Service, "selectCptalSttus", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 자금수지_일계_지구별지출현황 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030102/selectBsnsExpndtrSttus.do") 
	public ModelAndView selectBsnsExpndtrSttus(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030102Service, "selectBsnsExpndtrSttus", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 자금수지_연간_수입상세내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030102/selectIncmeDtl.do") 
	public ModelAndView selectIncmeDtl(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030102Service, "selectIncmeDtl", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 자금수지_연간_지출상세내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030102/selectExpndtrDtl.do") 
	public ModelAndView selectExpndtrDtl(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030102Service, "selectExpndtrDtl", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav; 
	}	
	
	/**
	 * 자금수지_연간집계내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030102/selectInExpSmList.do") 
	public ModelAndView selectInExpSmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030102Service, "selectInExpSmList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav; 
	}	

}