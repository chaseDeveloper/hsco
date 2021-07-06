package hsco.com.sym.mnm.SYM040600;

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
 * 
 * <pre>
 * @Project Name 	: 화성도시공사 차세대정보시스템
 * @Class Name   	: SYM040600Controller.java
 * @Description  	: 화면별 버튼을 관리
 * @author       	: 정윤원
 * @since        	: 2015. 9. 1.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 1.					정윤원				최초생성
 * </pre>
 */
@Controller
public class SYM040600Controller extends BaseContoller {
	
protected Logger log = LoggerFactory.getLogger(SYM040600Controller.class);	
	
	@Resource(name="SYM040600Service")
	SYM040600ServiceImpl SYM040600Service;
	
	/**
	 * 버튼 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040600/getButtonList.do") 
	public ModelAndView getButtonList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled())
		    log.info("getButtonList called!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM040600Service, "getButtonList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 버튼 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040600/execCUD.do")
	public ModelAndView execCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
				
		execService(SYM040600Service, "execCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");		
		
		return mav;
	}
}



