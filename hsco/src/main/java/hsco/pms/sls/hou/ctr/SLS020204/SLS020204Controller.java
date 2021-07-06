package hsco.pms.sls.hou.ctr.SLS020204;


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
 * @Class Name   	: SLS020204Controller.java
 * @Description  	: 
 * @author       	: 홍길동
 * @since        	: 2015. 8.8.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6.11.					김시영				최초생성
 * </pre>  
 */
@Controller
public class SLS020204Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());		
	
	@Resource(name="SLS020204Service")
	SLS020204ServiceImpl SLS020204Service;
	
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020204/dualList.do")
	public ModelAndView houseTyCodeList(NexacroMapDTO xpDto, Model model) throws Exception {
        
		log.debug("디버거----------------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
        
		execService(SLS020204Service, "houseCodeSh", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		
		return mav;
	}
}
