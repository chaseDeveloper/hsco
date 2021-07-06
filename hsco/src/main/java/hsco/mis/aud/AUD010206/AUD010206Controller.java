package hsco.mis.aud.AUD010206;

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
 * @Project Name    : 화성도시공사 차세대정보시스템
 * @Class Name      : AUD010206Controller.java
 * @Description     : 일상감사조치결과를 관리하는 컨트롤러 클래스 
 * @author          : 김형태
 * @since           : 2020. 10. 12.
 * @version         : 1.0
 * @see             : 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2020. 10. 12.      김형태             최초생성
 * </pre>  
 */


@Controller
public class AUD010206Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass()); 
	
	@Resource(name="AUD010206Service")
	AUD010206ServiceImpl AUD010206Service;
	
	/**
	 * 일상감사결과완료 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/aud/AUD010206/selectEdayAuditList.do") 
	public ModelAndView selectEdayAuditList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("일상감사결과완료 리스트 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(AUD010206Service, "selectEdayAuditList", xpDto, mav );
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 일상감사조치결과 상세 조회
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/aud/AUD010206/selectEdayAudit.do") 
	public ModelAndView selectEdayAudit(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("일상감사조치결과 상세 ----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(AUD010206Service, "selectEdayAudit", xpDto, mav );
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	/**
	 * 일상감사조치결과 저장
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/aud/AUD010206/save.do")
	public ModelAndView save(NexacroMapDTO xpDto, Model model) throws Exception {
		
		log.debug("일상감사조치결과 저장 시작----------------------------------------------------!");
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(AUD010206Service, "save", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		return mav;
	}
}
