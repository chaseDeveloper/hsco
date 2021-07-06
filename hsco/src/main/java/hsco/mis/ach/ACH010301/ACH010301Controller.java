package hsco.mis.ach.ACH010301;

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
 * @Class Name   	: ACH010301Controller.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 9. 02.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 02.	박병일			최초생성
 * </pre>  
 */

@Controller
public class ACH010301Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACH010301Controller.class);	
	
	@Resource(name="ACH010301Service")
	ACH010301ServiceImpl ACH010301Service;		
	
	/**
	 * 계량지표 실적참조 기준  조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH010301/selectList.do") 
	public ModelAndView selectList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("selectList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH010301Service, "selectList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 계량지표 실적참조 기준  등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH010301/mainCUD.do")
	public ModelAndView mainCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("main CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACH010301Service, "mainCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	

	/**
	 * 선택년도 구분 이전차수 데이터 복사
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH010301/copyBeforeData.do")
	public ModelAndView copyBeforeData(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("이전차수 복사 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH010301Service, "copyBeforeData", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}	

}
