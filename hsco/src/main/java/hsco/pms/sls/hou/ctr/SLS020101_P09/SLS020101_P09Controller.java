package hsco.pms.sls.hou.ctr.SLS020101_P09;

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
 * @Class Name   	: SLS020101_P09Controller.java
 * @Description  	: 
 * @author       	: 박태혁
 * @since        	: 2016. 7.27.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2016 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2016. 7. 27.		 박태혁			최초생성
 * </pre>  
 */
@Controller
public class SLS020101_P09Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020101_P09Service")
	SLS020101_P09ServiceImpl SLS020101_P09Service;
	
	
	/**
	 * 납입기한 날짜계산
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101_P09/selectCountDate.do")
	public ModelAndView selectCountDate(NexacroMapDTO xpDto, Model model) throws Exception {	
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101_P09Service, "selectCountDate", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	/**
	 * 전세분양전환기본정보조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020101_P09/selectChangeInfo.do")
	public ModelAndView selectChangeInfo(NexacroMapDTO xpDto, Model model) throws Exception {	
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020101_P09Service, "selectChangeInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
}
