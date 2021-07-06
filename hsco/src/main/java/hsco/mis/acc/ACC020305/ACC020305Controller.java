package hsco.mis.acc.ACC020305;

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
 * @Class Name   	: ACC020305Controller.java
 * @Description  	: 중소기업구매실적 정보를 관리하는 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2017. 07. 20.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 07. 20.	이상명		최초생성
 * </pre>  
 */
@Controller
public class ACC020305Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC020305Controller.class);
	
	@Resource(name="acc020305Service")
	ACC020305ServiceImpl acc020305Service;
	
	/**
	 * 중소기업구매실적
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC020305/expDsnList.do") 
	public ModelAndView expDsnList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("expDsnList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(acc020305Service, "expDsnList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	
}
