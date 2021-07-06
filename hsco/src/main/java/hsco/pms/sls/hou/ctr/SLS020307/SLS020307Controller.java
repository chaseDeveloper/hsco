package hsco.pms.sls.hou.ctr.SLS020307;

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
 * @Class Name   	: SLS020307Controller.java
 * @Description  	: 명의변경.임차권양도현황 Controller
 * @author       	: 최인석
 * @since        	: 2016. 08.18.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 
 * </pre>  
 */
@Controller
public class SLS020307Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020307Service")
	SLS020307ServiceImpl SLS020307Service;

	/**
	 * 명의변경.임차권양도 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020307/selectHcntrctrChangeList.do")
	public ModelAndView selectKjfRpayList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("명의변경.임차권양도 조회 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020307Service, "selectHcntrctrChangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	

	
}
