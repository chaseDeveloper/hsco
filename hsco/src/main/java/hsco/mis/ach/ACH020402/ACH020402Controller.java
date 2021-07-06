package hsco.mis.ach.ACH020402;

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
 * @Class Name   	: ACH020402Controller.java
 * @Description  	: 사회공헌이수시간관리
 * @author       	: 정 민
 * @since        	: 2017. 07. 26.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 07. 26.					정 민				최초생성
 * </pre>  
 */

@Controller
public class ACH020402Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACH020402Controller.class);	
	
	@Resource(name="ACH020402Service")
	ACH020402ServiceImpl ACH020402Service;		
	
	/**
	 * 대상 계량지표 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH020402/selectKPIInfo.do") 
	public ModelAndView selectKPIInfo(NexacroMapDTO xpDto, Model model) throws Exception {
				
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020402Service, "selectKPIInfo", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	
	/**
	 * 실적집계내역 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH020402/selectRefrnList.do") 
	public ModelAndView selectRefrnList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020402Service, "selectRefrnList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 평가사원목록 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH020402/selectEvlEmpList.do") 
	public ModelAndView selectListTemp(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020402Service, "selectEvlEmpList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}	
	
	/**
	 * 실적집계내역 저장(계량지표 월별실적 & 첨부실적 정보를  저장, 수정, 삭제 한다.) & 평가사원목록 저장
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH020402/saveEmpTlphonKdDgree.do") 
	public ModelAndView saveEmpTlphonKdDgree(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020402Service, "saveEmpTlphonKdDgree", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

}
