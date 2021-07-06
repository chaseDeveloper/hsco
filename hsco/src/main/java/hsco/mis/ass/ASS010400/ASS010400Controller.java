package hsco.mis.ass.ASS010400;

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
 * @Class Name   	: ASS010400Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 6. 15.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 15	       이혜선		   최초생성
 * </pre>  
 */
@Controller
public class ASS010400Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="ass010400Service")
	ASS010400ServiceImpl ass010400Service;
    
    @RequestMapping("/hsco/mis/ass/ASS010400/atldManageList.do") 
	public ModelAndView atldManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용품관리 리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010400Service, "atldManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	@RequestMapping("/hsco/mis/ass/ASS010400/atldManageDetail.do") 
	public ModelAndView atldManageDetail(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용품관리상세 리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010400Service, "atldManageDetail", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	@RequestMapping("/hsco/mis/ass/ASS010400/atldTrgetList.do") 
	public ModelAndView atldTrgetList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		log.debug("불용품대상 리스트 조회----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010400Service, "atldTrgetList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	
	@RequestMapping("/hsco/mis/ass/ASS010400/atldManageCUD.do")
	public ModelAndView atldManageCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("불용품관리 CUD----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ass010400Service, "atldManageCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}