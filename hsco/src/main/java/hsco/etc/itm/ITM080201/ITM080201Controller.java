package hsco.etc.itm.ITM080201;

import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import hsco.cmm.controller.BaseContoller;
import hsco.cmm.exception.NexaServiceException;
import hsco.cmm.ria.nexacro.NexacroConstant;
import hsco.cmm.ria.nexacro.map.NexacroMapDTO;

/**
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: ITM080201Controller.java
 * @Description  	: 월간보고서표지를 출력하는 컨트롤러 클래스
 * @author       	: 이호준
 * @since        	: 2015. 6. 9.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 9.			  이호준			최초생성
 * </pre>  
 */


@Controller
public class ITM080201Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ITM080201Controller.class);	
	
	@Resource(name="ITM080201Service")
	ITM080201ServiceImpl ITM080201Service;
	
	/** 평가결과표를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM080201/ITM080201List.do") 
	public ModelAndView ITM080201List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ITM080201Service, "ITM080201List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 평가결과표를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM080201/ITM080201CodeList.do") 
	public ModelAndView ITM080201CodeList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM080201Service, "ITM080201CodeList", xpDto, mav );

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/** 평가결과표를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM080201/ITM080201GrpCodeCUD.do")
	public ModelAndView ITM080201GrpCodeCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("그룹코드 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ITM080201Service, "ITM080201GrpCodeCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	/** 평가결과표를  조회 */
	@RequestMapping("/hsco/etc/itm/ITM080201/ITM080201CodeCUD.do")
	public ModelAndView ITM080201CodeCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("코드 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		try {
			execService(ITM080201Service, "ITM080201CodeCUD", xpDto, mav);
			
			mav.addObject(NexacroConstant.ERROR_CODE, "0");
			mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		}
		catch (Exception e) {
			throw new NexaServiceException("fail.common.msg");
		}
		
		return mav;
	}
	


}
