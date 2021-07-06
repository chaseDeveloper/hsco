package hsco.mis.sal.SAL020108;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL020108Controller.java
 * @Description  	: 학자보조금신청관리
 * @author       	: 이상명
 * @since        	: 2015. 7. 7.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 7. 7.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL020108Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SAL020108Service")
	SAL020108ServiceImpl SAL020108Service;
	
	/**
	 * 학자보조금신청조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL020108/selectSchxpnsbsidyList.do") 
	public ModelAndView selectSchxpnsbsidyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SAL020108Service, "selectSchxpnsbsidyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	/**
	 * 학자보조금신청조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL020108/selectHrfamilyList.do") 
	public ModelAndView selectHrfamilyList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SAL020108Service, "selectHrfamilyList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
			
	/**
	 * 학자보조금신청 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL020108/SchxpnsbsidyCUD.do")
	public ModelAndView SchxpnsbsidyCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SAL020108Service, "SchxpnsbsidyCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");		
		
		return mav;
	}

	/**
	 * 학자보조금신청 승인/반려
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL020108/saveSchxpnsbsidyListAppr.do")
	public ModelAndView saveSchxpnsbsidyListAppr(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SAL020108Service, "saveSchxpnsbsidyListAppr", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
    //내부결재레포트용데이터셋 목록 조회 2016.08.18
  	@RequestMapping("hsco/mis/sal/SAL020108/innerSanctnUbiDataset.do") 
	public ModelAndView innerSanctnUbiDataset(NexacroMapDTO xpDto, Model model) throws Exception {
      
      log.debug("내부결재레포트용데이터셋 목록 리스트 ----------------------------------------------------!");
      ModelAndView mav = new ModelAndView("nexacroMapView");
  
      execService(SAL020108Service, "innerSanctnUbiDataset", xpDto, mav );

	  mav.addObject(NexacroConstant.ERROR_CODE, "0");
	  mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
	      
	  return mav;
	} 
  	
  	
  	// 내부결재 저장 2016.08.18
  	@RequestMapping("hsco/mis/sal/SAL020108/saveInnerSanc.do") 
	public ModelAndView saveInnerSanc(NexacroMapDTO xpDto, Model model) throws Exception {
          
  		ModelAndView mav = new ModelAndView("nexacroMapView");
      
  		execService(SAL020108Service, "saveInnerSanc", xpDto, mav );

  		mav.addObject(NexacroConstant.ERROR_CODE, "0");
  		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
  
  		return mav;
      
  	}
	
}