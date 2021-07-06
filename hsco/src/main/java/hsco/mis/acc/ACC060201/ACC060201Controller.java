package hsco.mis.acc.ACC060201;

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
 * @Class Name   	: ACC060201Controller.java
 * @Description  	: 배부항목관리를 관리하는 Controller 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 11. 04.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 11. 04.	이수지		최초생성
 * </pre>  
 */
@Controller
public class ACC060201Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(ACC060201Controller.class);
	
	@Resource(name="ACC060201Service")
	ACC060201ServiceImpl ACC060201Service;
	
	/**
	 * 배부항목관리 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC060201/seAccnutDlryStdrIemList.do") 
	public ModelAndView seAccnutDlryStdrIemList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("seAccnutDlryStdrIemList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC060201Service, "seAccnutDlryStdrIemList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 배부항목관리 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/acc/ACC060201/seAccnutDlryStdrIemCUD.do") 
	public ModelAndView seAccnutDlryStdrIemCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(ACC060201Service, "seAccnutDlryStdrIemCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}

}
