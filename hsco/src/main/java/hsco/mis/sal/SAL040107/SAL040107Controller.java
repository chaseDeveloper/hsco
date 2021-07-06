package hsco.mis.sal.SAL040107;

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
 * @Project Name 	: 화성도시공사 경영정보시스템
 * @Class Name   	: SAL040107Controller.java
 * @Description  	: 퇴직급여지출관리
 * @author       	: 이상명
 * @since        	: 2017. 10. 24.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2017 NANUMICT, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 10. 24.					이상명				최초생성
 * </pre>  
 */


@Controller
public class SAL040107Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(this.getClass());	
	
	@Resource(name="SAL040107Service")
	SAL040107ServiceImpl SAL040107Service;
	
	/**
	 * 퇴직급여지출관리
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL040107/selectRetireSalaryExpndtrList.do") 
	public ModelAndView selectSalaryPymntExpndtrList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(SAL040107Service, "selectRetireSalaryExpndtrList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	
	/**
	 * 퇴직급여지출관리 등록, 수정, 삭제
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("hsco/mis/sal/SAL040107/retireSalaryExpndtrCUD.do")
	public ModelAndView retireSalaryExpndtrCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(SAL040107Service, "retireSalaryExpndtrCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");
		
		
		
		return mav;
	}
	
	
}