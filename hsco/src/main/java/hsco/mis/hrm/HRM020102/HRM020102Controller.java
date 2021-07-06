package hsco.mis.hrm.HRM020102;

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
 * @Class Name   	: HRM020102Controller.java
 * @Description  	: 
 * @author       	: 이혜선
 * @since        	: 2015. 07.23.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------
 * ------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 2015. 07.23.			  이혜선			최초생성
 * </pre>  
 */

@Controller
public class HRM020102Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="HRM020102Service")
	HRM020102ServiceImpl HRM020102Service;
	

	/** 채용공고관리조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020102/empmnPblancList.do")
	public ModelAndView empmnPblancList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020102Service, "empmnPblancList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 채용년도,차수 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020102/empmnKeyList.do")
	public ModelAndView empmnKeyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        execService(HRM020102Service, "empmnKeyList", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

        return mav;
	}	
	
	/** 모집분야 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020102/empmnRcritRealmList.do")
	public ModelAndView empmnRcritRealmList(NexacroMapDTO xpDto, Model model) throws Exception {
		
	     ModelAndView mav = new ModelAndView("nexacroMapView");
	        execService(HRM020102Service, "empmnRcritRealmList", xpDto, mav);
	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

	        return mav;
	}	
	
	/** 과목 조회 */
	@RequestMapping("/hsco/mis/hrm/HRM020102/selectChoiseSbjectList.do")
	public ModelAndView selectChoiseSbjectList(NexacroMapDTO xpDto, Model model) throws Exception {
		
	     ModelAndView mav = new ModelAndView("nexacroMapView");
	        execService(HRM020102Service, "selectChoiseSbjectList", xpDto, mav);
	        mav.addObject(NexacroConstant.ERROR_CODE, "0");
	        mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");

	        return mav;
	}

	/** 저장 */
	@RequestMapping("/hsco/mis/hrm/HRM020102/empmnPblancCUD.do")
	public ModelAndView empmnPblancCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(HRM020102Service, "empmnPblancCUD", xpDto, mav);
        mav.addObject(NexacroConstant.ERROR_CODE, "0");
        mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

        return mav;
	}
	
	

}