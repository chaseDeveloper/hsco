package hsco.mis.ach.ACH030101;

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
 * @Class Name   	: ACH030101Controller.java
 * @Description  	: 
 * @author       	: 박병일
 * @since        	: 2015. 8. 18.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 8. 18.	박병일			최초생성
 * </pre>  
 */

@Controller
public class ACH030101Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACH030101Controller.class);	
	
	@Resource(name="ACH030101Service")
	ACH030101ServiceImpl ACH030101Service;
	
	/**
	 * 지표가중치 목록  조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH030101/selectList.do") 
	public ModelAndView selectList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		if(log.isInfoEnabled()) log.info("selectList Started!");
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH030101Service, "selectList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 지표가중치  등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH030101/mainCUD.do")
	public ModelAndView mainCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("mainCUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(ACH030101Service, "mainCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}

}
