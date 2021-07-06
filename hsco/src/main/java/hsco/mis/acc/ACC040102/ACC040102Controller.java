package hsco.mis.acc.ACC040102;

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
 * @Class Name   	: ACC040102Controller.java
 * @Description  	: 청구내역대사관리 Controller 클래스 
 * @author       	: 이상명
 * @since        	: 2015. 07. 16.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 07. 16.	이상명		최초생성
 * </pre>  
 */
@Controller
public class ACC040102Controller extends BaseContoller {

    protected Logger log = LoggerFactory.getLogger(ACC040102Controller.class);
	
	@Resource(name="acc040102Service")
	ACC040102ServiceImpl acc040102Service;
	
	/**
	 * 청구내역대사관리 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC040102/catsBillList.do") 
	public ModelAndView catsBillList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("catsBillList Started!");

		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(acc040102Service, "catsBillList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
}
