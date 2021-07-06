package hsco.pms.rnt.lrm.RNT040308;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.DataSetMap;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;
/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: RNT040308Controller.java
 * @Description  	: 장기수선 일괄등록
 * @author       	: 이광원
 * @since        	: 2016. 03. 03.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2016 infozen, Inc. All Right Reserved.
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
public class RNT040308Controller extends BaseContoller {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Resource(name="RNT040308Service")
	RNT040308ServiceImpl rnt040308Service;

	
	/**
	 * 장기수선관리 요청내역조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040308/selectRequest.do") 
	public ModelAndView selectRequest(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("장기수선관리 요청내역조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040308Service, "selectRequest", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}
	
	
	/**
	 * 신규,수정,삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040101/requestCUD.do")
	public ModelAndView listCUD(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("저장 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040308Service, "requestCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	
	/**
	 * 장기수선관리 요청내역조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040308/selectPlan.do") 
	public ModelAndView selectPlan(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("장기수선관리 요청내역조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040308Service, "selectPlan", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}
	
	
	/**
	 * 장기수선관리 요청내역조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040308/selectExecut.do") 
	public ModelAndView selectExecut(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("장기수선관리 요청내역조회 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040308Service, "selectExecut", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}
	
	
	/**
	 * 장기수선계획 및 실행 행추가 팝업창
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040308/getListP.do") 
	public ModelAndView getList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("영구임대 계약자 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040308Service, "getListP", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}
	
	/**
	 * 팝업창 동 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040308/houseDongP.do") 
	public ModelAndView houseDongP(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("영구임대 계약자 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040308Service, "houseDongP", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}
	
	
	/**
	 * 장기수선계획 및 실행 행추가 팝업창
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040308/copyPlan.do") 
	public ModelAndView copyPlan(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("영구임대 계약자 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040308Service, "copyPlan", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");		

		return mav;		
	}
	
	/**
	 * 장기수선 실행 등록
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/pms/rnt/rnt040308/executC.do")	
	public ModelAndView executC(NexacroMapDTO xpDto, Model model)
	        throws Exception {
		
		log.debug("저장 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(rnt040308Service, "executC", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
