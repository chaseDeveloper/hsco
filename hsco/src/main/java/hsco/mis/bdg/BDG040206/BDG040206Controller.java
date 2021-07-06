package hsco.mis.bdg.BDG040206;

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
 * @Class Name   	: BDG040206Controller.java
 * @Description  	: 부서별지출결산현황을 조회하는 Controller 클래스 
 * @author       	: 김형태
 * @since        	: 2018. 01. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2018. 01. 02.   김형태             최초생성
 * </pre>  
 */
@Controller
public class BDG040206Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(BDG040206Controller.class);
	
	@Resource(name="BDG040206Service")
	BDG040206ServiceImpl BDG040206Service;
	
	/**
	 * 부서별지출결산현황 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/bdg/BDG040206/selectDeptExpndtrStacnt.do") 
	public ModelAndView selectDeptExpndtrStacnt(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(BDG040206Service, "selectDeptExpndtrStacnt", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
