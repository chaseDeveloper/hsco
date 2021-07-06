package hsco.mis.ctr.CTR040100;

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
 * @Class Name   	: CTR040100Controller.java
 * @Description  	: 용역업체관리 Controller 클래스 
 * @author       	: 이수지
 * @since        	: 2015. 10. 07.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 10. 02.	이수지		최초생성
 * </pre>  
 */
@Controller
public class CTR040100Controller extends BaseContoller {

	protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="CTR040100Service")
	CTR040100ServiceImpl CTR040100Service;
	

	/**
	 * 용역업체 목록
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ctr/CTR040200/servcEntrpsList.do") 
	public ModelAndView servcEntrpsList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(CTR040100Service, "servcEntrpsList", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
	
	/**
	 * 용역업체 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ctr/CTR040200/servcEntrpsCUD.do") 
	public ModelAndView servcEntrpsCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
        execService(CTR040100Service, "servcEntrpsCUD", xpDto, mav);
        
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		return mav;
	}
}
