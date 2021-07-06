package hsco.pms.sls.hou.ctr.SLS020202;

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
 * @Class Name   	: SLS020202Controller.java
 * @Description  	: 주택계약자 명의 변경 Controller
 * @author       	: 정윤원
 * @since        	: 2015. 9.2.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * 
 * </pre>  
 */
@Controller
public class SLS020202Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020202Service")
	SLS020202ServiceImpl SLS020202Service;

	
	
	/**
	 * 주택계약자변경 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020202/selectHcntrctrChangeList.do")
	public ModelAndView selectHcntrctrChangeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택계약자 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHcntrctrChangeList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020202Service, "selectHcntrctrChangeList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	
	
	/**
	 * 주택계약자변경 신규
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020202/selectHcntrctrChangeInsert.do")
	public ModelAndView selectHcntrctrChangeInsert(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택계약자 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHcntrctrChangeList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020202Service, "selectHcntrctrChangeInsert", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	
	/**
	 * 주택계약 압류 리스트 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020202/saveHcntrctrChangeList.do")
	public ModelAndView saveHcntrctrChangeList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveHcntrCtrSeizrList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020202Service, "saveHcntrctrChangeList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상처리");
			
		return mav;
	}	
	
	
	
	/**
	 * 주택계약자명의 변경 신청서
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020202/selectNmchangeReqstdoc.do")
	public ModelAndView selectNmchangeReqstdoc(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택계약자 명의변경 신청서~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectNmchangeReqstdoc");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020202Service, "selectNmchangeReqstdoc", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
