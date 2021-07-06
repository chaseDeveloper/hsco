package hsco.eis.eis.EIS030101;

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
 * @Class Name   	: EIS030101Controller.java
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
public class EIS030101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(EIS030101Controller.class);	
	
	@Resource(name="EIS030101Service")
	EIS030101ServiceImpl EIS030101Service;
	
	/**
	 * 총괄결산수지_대차대조표 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030101/selectBalSheet.do")
	public ModelAndView selectBalSheet(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isDebugEnabled()) log.debug("selectBalSheet started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030101Service, "selectBalSheet", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 총괄결산수지_손익계산서 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030101/selectInStatement.do") 
	public ModelAndView selectInStatement(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030101Service, "selectInStatement", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 총괄결산수지_현금흐름표 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030101/selectCashFlowSheet.do") 
	public ModelAndView selectCashFlowSheet(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030101Service, "selectCashFlowSheet", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 총괄결산수지_경영지표목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030101/selectMngmtixList.do") 
	public ModelAndView selectMngmtixList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030101Service, "selectMngmtixList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 총괄결산수지_경영지표_연도별 상세내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/eis/eis/EIS030101/selectMngmtixDtlList.do") 
	public ModelAndView selectMngmtixDtlList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(EIS030101Service, "selectMngmtixDtlList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}		

}