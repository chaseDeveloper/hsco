package hsco.com.sym.mnm.SYM040500;

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
 * @Class Name   	: SYM040500Controller.java
 * @Description  	: 서비스 / 오퍼레이션 관리 
 * @author       	: 정윤원
 * @since        	: 2015. 9. 2.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 9. 2.					정윤원				최초생성
 * </pre>
 */
@Controller
public class SYM040500Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM040500Controller.class);	
	
	@Resource(name="SYM040500Service")
	SYM040500ServiceImpl SYM040500Service;
	
	/**
	 * 서비스 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040500/getSvcList.do") 
	public ModelAndView getSvcList(NexacroMapDTO xpDto, Model model) throws Exception {
		if(log.isInfoEnabled())
		    log.info("getSvcList called!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM040500Service, "getSvcList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 오퍼레이션 리스트
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040500/getOprtinList.do") 
	public ModelAndView getOprtinList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM040500Service, "getOprtinList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 서비스 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040500/execSvc.do")
	public ModelAndView execSvc(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
				
		execService(SYM040500Service, "execSvc", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");		
		
		return mav;
	}
	
	/**
	 * 오퍼레이션 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/mnm/SYM040500/execOprtin.do")
	public ModelAndView execOprtin(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
				
		execService(SYM040500Service, "execOprtin", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");		
		
		return mav;
	}
}



