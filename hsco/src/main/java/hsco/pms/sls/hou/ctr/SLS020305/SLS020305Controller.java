package hsco.pms.sls.hou.ctr.SLS020305;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
import hsco.pms.sls.hou.ctr.SLS020101.SLS020101ServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SLS020305Controller.java
 * @Description  	: 
 * @author       	: 최승락
 * @since        	: 2015. 9.08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 08.		 최승락			최초생성
 * </pre>  
 */
@Controller
public class SLS020305Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020305Service")
	SLS020305ServiceImpl SLS020305Service;
	
	/**
	 * 주택별 공가정보 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020305/selectUninhbhousList.do")
	public ModelAndView selectUninhbhousList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택별 공가 정보 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020305Service, "selectUninhbhousList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}

	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020305/saveUninhbhousList.do")	
	public ModelAndView saveUninhbhousList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택별 공가 정보 저장----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		
		execService(SLS020305Service, "saveUninhbhousList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
			
		return mav;
	}	
	
	
}
