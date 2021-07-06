package hsco.hpm.usm.HPM010203;

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
 * @Class Name   	: HPM010203Controller.java
 * @Description  	: 사업소사원관리
 * @author       	: 정 민
 * @since        	: 2017. 08. 10.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일							작성자			내용
 * ------------------------------------------------------------------
 *  2017. 08. 10.					정 민			최초생성
 * </pre>  
 */

@Controller
public class HPM010203Controller extends BaseContoller{
	protected Logger log = LoggerFactory.getLogger(HPM010203Controller.class);
	@Resource(name="HPM010203Service")
	HPM010203ServiceImpl HPM010203Service;
	
	/**
	 * 사업소사원관리 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010203/selectBizplcEmpnoManageList.do")
	public ModelAndView selectBizplcEmpnoManageList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM010203Service, "selectBizplcEmpnoManageList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
	
	
	/**
	 * 사업소사원관리 목록 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010203/bizplcEmpnoManageCUD.do")
	public ModelAndView bizplcEmpnoManageCUD(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM010203Service, "bizplcEmpnoManageCUD", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");	
		
		
		return mav;
	}		
	
	/**
	 * 전체사원 목록 조회
	 * 
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010203/selectEmpList.do")
	public ModelAndView selectEmpList(NexacroMapDTO xpDto, Model model) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroMapView");

		execService(HPM010203Service, "selectEmpList", xpDto, mav);

		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.처리성공");

		return mav;
	}
	
	
	
	/**
	 * 사업소사원관리 목록 조회 
	 * @param xpDto
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/hsco/hpm/usm/HPM010203/selectBizplcList.do")
	public ModelAndView selectBizplcList(NexacroMapDTO xpDto, Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(HPM010203Service, "selectBizplcList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
	}
}