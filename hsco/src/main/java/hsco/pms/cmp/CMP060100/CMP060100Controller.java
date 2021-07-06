package hsco.pms.cmp.CMP060100;

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
 * @Class Name   	: CMP060100Controller.java
 * @Description  	: 공탁관리
 * @author       	: 지효정
 * @since        	: 2015. 8. 11.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 * </pre>  
 */
@Controller
@RequestMapping("/hsco/pms/cmp/law/CMP060100")
public class CMP060100Controller extends BaseContoller{
	private final Logger log = LoggerFactory.getLogger(CMP060100Controller.class);
	
	@Resource(name="CMP060100Service")
	CMP060100ServiceImpl cmp060100Service;
	
	@RequestMapping("/thingOwnerList.do") 
	public ModelAndView thingOwnerList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("물건 소유자 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp060100Service, "thingOwnerList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/thingWtnncList.do") 
	public ModelAndView thingWtnncList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사업지구 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp060100Service, "thingWtnncList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}

	@RequestMapping("/aceptncAdjdcOdrList.do") 
	public ModelAndView aceptncAdjdcOdrList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사업지구 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp060100Service, "aceptncAdjdcOdrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/ldgmntList.do") 
	public ModelAndView ldgmntList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사업지구 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp060100Service, "ldgmntList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/ldgmntCUD.do") 
	public ModelAndView ldgmntCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("보상금 리스트 CUD----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp060100Service, "ldgmntCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	//첨부파일 목록
	@RequestMapping("/ldgmntAtchList.do") 
	public ModelAndView ldgmntAtchList(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp060100Service, "ldgmntAtchList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	//첨부파일 C
	@RequestMapping("/ldgmntAtchC.do") 
	public ModelAndView ldgmntAtchCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp060100Service, "ldgmntAtchC", xpDto, mav);
		execService(cmp060100Service, "ldgmntAtchList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	//첨부파일 C
	@RequestMapping("/ldgmntAtchD.do") 
	public ModelAndView ldgmntAtchD(NexacroMapDTO xpDto, Model model) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp060100Service, "ldgmntAtchD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
