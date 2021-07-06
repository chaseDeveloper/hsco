package hsco.mis.acc.ACC050306;

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
 * @Class Name   	: ACC050306Controller.java
 * @Description  	: 합계잔액시산표 관리하는 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 08. 25.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 08. 25.	이상명		최초생성
 * </pre>  
 */
@Controller
public class ACC050306Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC050306Controller.class);
	
	@Resource(name="ACC050306Service")
	ACC050306ServiceImpl ACC050306Service;
	
	
	/**
	 * 합계잔액시산표
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC050306/smBlceTiablList.do")
	public ModelAndView smBlceTiablList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("smBlceTiablList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC050306Service, "smBlceTiablList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
}
