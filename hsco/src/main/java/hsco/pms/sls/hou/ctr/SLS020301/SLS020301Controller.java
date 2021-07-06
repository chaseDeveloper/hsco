package hsco.pms.sls.hou.ctr.SLS020301;

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
 * @Class Name   	: SLS020301Controller.java
 * @Description  	: 
 * @author       	: 김시영
 * @since        	: 2015. 6.11.
 * @version      	: 1.0
 * @see          	:
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8.26					   정윤원				작성자 변경
 * </pre>  
 */
@Controller
public class SLS020301Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020301Service")
	SLS020301ServiceImpl SLS020301Service;

	/**
	 * 주택압류 압류구분 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020301/cmbSeizrSeCodeList.do")
	public ModelAndView cmbSeizrSeCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("[RUN]comboTyAeaList :: 주택압류 압류구분 리스트 ::---------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020301Service, "cmbSeizrSeCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	
	/**
	 * 주택대출 대출구분 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020301/cmbLonSeCodeList.do")
	public ModelAndView cmbLonSeCodeList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("[RUN]comboTyAeaList :: 주택대출 대출구분 리스트 ::---------------------------------------------!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS020301Service, "cmbLonSeCodeList", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	
	

	/**
	 * 주택계약자 압류 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020301/selectHcntrCtrSeizrList.do")
	public ModelAndView selectHcntrCtrSeizrList(NexacroMapDTO xpDto, Model model) throws Exception {
	
		log.debug("주택계약자 압류리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHcntrCtrSeizrList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
	
		execService(SLS020301Service, "selectHcntrCtrSeizrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	  
		return mav;
	}		
	
	
	/**
	 * 주택계약자 대출 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020301/selectHcntrCtrLonList.do")
	public ModelAndView selectHcntrCtrLonList(NexacroMapDTO xpDto, Model model) throws Exception {
	
		log.debug("주택계약자 대출리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHcntrCtrLonList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
	
		execService(SLS020301Service, "selectHcntrCtrLonList", xpDto, mav);
		
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
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020301/saveHcntrCtrSeizrList.do")
	public ModelAndView saveHcntrCtrSeizrList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveHcntrCtrSeizrList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020301Service, "saveHcntrCtrSeizrList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	
	
	
	
	/**
	 * 주택계약 대출 리스트 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020301/saveHcntrCtrLonList.do")
	public ModelAndView saveHcntrCtrLonList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveHcntrCtrLonList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020301Service, "saveHcntrCtrLonList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}
	
	
	
	
}
