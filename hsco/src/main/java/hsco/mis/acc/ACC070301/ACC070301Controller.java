package hsco.mis.acc.ACC070301;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ACC070301Controller.java
 * @Description  	: 수입부를 관리하는 Controller 클래스 
 * @author       	: 이수지
 * @since        	: 2019. 11. 08.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2019 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2019. 11. 08.	이수지		최초생성
 * </pre>  
 */
@Controller
public class ACC070301Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC070301Controller.class);
	
	@Resource(name="ACC070301Service")
	ACC070301ServiceImpl ACC070301Service;
	
	/**
	 * 대행사업 수입결의 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC070301/selectIncList.do") 
	public ModelAndView selectIncList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACC070301Service, "selectIncList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
}

