package hsco.pms.cmp.CMP040801;

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
 * @Class Name   	: CMP040801Controller.java
 * @Description  	: 수용확인서발급
 * @author       	: 지효정
 * @since        	: 2015. 7. 17.
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
@RequestMapping("/hsco/pms/cmp/tdd/CMP040801") 
public class CMP040801Controller extends BaseContoller{
private final Logger log = LoggerFactory.getLogger(CMP040801Controller.class);
	
	@Resource(name="CMP040801Service")
	CMP040801ServiceImpl cmp040801Service;
	
	@RequestMapping("/thingOwnerList.do") 
	public ModelAndView thingOwnerList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("물건 소유자 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040801Service, "thingOwnerList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/thingWtnncList.do") 
	public ModelAndView thingWtnncList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("사업지구 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040801Service, "thingWtnncList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/altrtvAcqsList.do") 
	public ModelAndView altrtvAcqscList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("대체취득 물건내역 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040801Service, "altrtvAcqsList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	@RequestMapping("/aceptncCnfrmnList.do") 
	public ModelAndView aceptncCnfrmnList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("대체취득 물건내역 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040801Service, "aceptncCnfrmnList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	

	@RequestMapping("/aceptncThingList.do") 
	public ModelAndView aceptncThingList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("대체취득 매핑 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040801Service, "aceptncThingList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}	
	
	
	@RequestMapping("/aceptncThingCUD.do") 
	public ModelAndView aceptncThingCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("대체취득 매핑  CUD ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040801Service, "aceptncThingCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	
	
	@RequestMapping("/altrtvAcqsCUD.do") 
	public ModelAndView altrtvAcqsCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("대체취득 물건내역 CUD ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040801Service, "altrtvAcqsCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("/aceptncCnfrmnCUD.do") 
	public ModelAndView altrtvCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("확인서 발급내역 CUD ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040801Service, "aceptncCnfrmnCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	@RequestMapping("/aceptncCnfrmnAllCUD.do") 
	public ModelAndView aceptncCnfrmnAllCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("확인서 발급내역 CUD ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(cmp040801Service, "aceptncCnfrmnAllCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
