package hsco.mis.ach.ACH040506;

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
 * @Class Name   	: ACH040506Controller.java
 * @Description  	: 
 * @author       	: 양성모
 * @since        	: 2018. 2. 2.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 2. 2.    양성모              최초생성
 * </pre>  
 */

@Controller
public class ACH040506Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACH040506Controller.class);	
	
	@Resource(name="ACH040506Service")
	ACH040506ServiceImpl ACH040506Service;		
	
	/**
	 * 지표별 개인성과순위 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH040506/selectList.do") 
	public ModelAndView selectList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH040506Service, "selectList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	

}
