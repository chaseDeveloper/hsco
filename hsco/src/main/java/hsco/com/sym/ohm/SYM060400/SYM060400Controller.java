package hsco.com.sym.ohm.SYM060400;

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
 * @Class Name   	: SYM060400Controller.java
 * @Description  	: Q&A 관리하는 컨트롤러 클래스
 * @author       	: 고진호
 * @since        	: 2016. 1. 04.
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
public class SYM060400Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(SYM060400Controller.class);	

	@Resource(name="SYM060400Service")
	SYM060400ServiceImpl SYM060400Service;

    /**
     * 권한그룹별 사용자 목록
     * @param xpDto
     * @param model
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping("/hsco/com/sym/aum/SYM060400/getListGrpUser.do") 
    public ModelAndView getListGrpUser(NexacroMapDTO xpDto, Model model) throws Exception {
        
        ModelAndView mav = new ModelAndView("nexacroMapView");
        
        execService(SYM060400Service, "getListGrpUser", xpDto, mav);
        
        return mav;
        
    }
    
	/**
	 * Q&A 목록을 조회한다.
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060400/SYM060400List.do") 
	public ModelAndView SYM060400List(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM060400Service, "SYM060400List", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

	/**
	 * Q&A 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060400/SYM060400CUD.do")
	public ModelAndView SYM060400CUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("Q&A CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SYM060400Service, "SYM060400CUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
	
	/**
	 * 첨부한 파일을 업로드하고 공통 첨부파일 정보를 저장한다.
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/com/sym/ohm/SYM060400/fileUpload.do")
	public ModelAndView fileUpload(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SYM060400Service, "fileUpload", xpDto, mav);
	
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		 
		return mav;
	}
	
}