package hsco.pms.sls.hou.std.SLS010400;

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
 * @Class Name   	: SLS010400Controller.java
 * @Description  	: 협의문서자료를 관리하는 컨트롤러 클래스
 * @author       	: 변승우
 * @since        	: 2015. 6. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2015. 6. 26.					변승우				최초생성
 * </pre>  
 */

@Controller
public class SLS010400Controller extends BaseContoller{
	
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="SLS010400Service")
	SLS010400ServiceImpl SLS010400Service;

	/**
	 * 협의문서자료 정보 리스트
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/sls/hou/std/SLS010400/selectDscssDocList.do") 
	public ModelAndView selectDscssDocList(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("협의문서자료 리스트----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS010400Service, "selectDscssDocList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;	
	}
	
	/**
	 * 협의문서자료 정보 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/pms/sls/hou/std/SLS010400/dscssDocCUD.do") 
	public ModelAndView dscssDocCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		log.debug("협의문서자료 정보 관리 CUD 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SLS010400Service, "dscssDocCUD", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;	
	}
}
