package hsco.mis.hrm.HRM070303;


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
import hsco.cmm.sanc.SancServiceImpl;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: HRM070303Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 10. 19.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 10. 19			  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM070303Controller extends BaseContoller  {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM070303Service")
	HRM070303ServiceImpl HRM070303Service;
	
	@Resource(name="SancService")
	SancServiceImpl sancService;
	
	
	
	/**당직내역관리 목록조회 */
	@RequestMapping("/hsco/mis/hrm/HRM070303/tbhrmDalyBndtList.do") 
	public ModelAndView tbhrmDalyBndtList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("당직내역관리  목록조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HRM070303Service, "tbhrmDalyBndtList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	

}