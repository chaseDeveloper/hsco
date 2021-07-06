package hsco.pms.sls.hou.ctr.SLS020500;

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
 * @Class Name   	: SLS020500Controller.java
 * @Description  	: 입주대기자 관리Controller
 * @author       	: 정윤원
 * @since        	: 2015. 10.10.
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
public class SLS020500Controller extends BaseContoller{
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SLS020500Service")
	SLS020500ServiceImpl SLS020500Service;

	/**
	 * 입주대기자 리스트 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020500/selectHouseMvnWaitrList.do")
	public ModelAndView selectHouseMvnWaitrList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 입주대기자 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectHouseMvnWaitrList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020500Service, "selectHouseMvnWaitrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	
	/**
	 * 입주대기자 리스트 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020500/saveHouseMvnWaitrList.do")
	public ModelAndView saveHouseMvnWaitrList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveHouseMvnWaitrList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020500Service, "saveHouseMvnWaitrList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	
	
	
	/**
	 * 입주대기자 가족 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020500/selectCstmrFamilyList.do")
	public ModelAndView selectCstmrFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {

		log.debug("주택 입주대기자 가족 리스트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[RUN]selectCstmrFamilyList");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020500Service, "selectCstmrFamilyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}
	
	/**
	 * 입주대기자 리스트 일괄등록 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020500/saveHouseMvnWaitrPopUp.do")
	public ModelAndView saveHouseMvnWaitrPopUp(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveHouseMvnWaitrPopUp");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020500Service, "saveHouseMvnWaitrPopUp", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	
	
	
	/**
	 * 입주대기자 계약통지일자 업데이트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020500/updateNticeDeList.do")
	public ModelAndView updateNticeDeList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]updateNticeDeList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020500Service, "updateNticeDeList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}	
	

	/**
	 * 입주대기자 가족 리스트 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020500/saveHouseMvnFamilyList.do")
	public ModelAndView saveHouseMvnFamilyList(NexacroMapDTO xpDto, Model model) throws Exception {
			
		log.debug("##########################################################################[RUN]saveHouseMvnWaitrList");
			
		ModelAndView mav = new ModelAndView("nexacroMapView");
			
		execService(SLS020500Service, "saveHouseMvnFamilyList", xpDto, mav);	
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
			
		return mav;
	}
	
	/**
	 * 입주대기자 리스트 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/sls/hou/ctr/SLS020500/selectHeaderInfo.do")
	public ModelAndView selectHeaderInfo(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SLS020500Service, "selectHeaderInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE , "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
		 return mav;
	}	
}
