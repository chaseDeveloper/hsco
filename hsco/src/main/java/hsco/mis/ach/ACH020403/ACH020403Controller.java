package hsco.mis.ach.ACH020403;

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
 * @Class Name   	: ACH020403Controller.java
 * @Description  	: 교육역량강화관리
 * @author       	: 정 민
 * @since        	: 2017. 08. 01.
 * @version      	: 1.0
 * @see          	: 
 * @COPYRIGHT (c) 2015 나눔아이씨티, Inc. All Right Reserved.
 * <pre>
 * ------------------------------------------------------------------
 * Modification Information 
 * ------------------------------------------------------------------
 *   작성일                        작성자                내용
 * ------------------------------------------------------------------
 *  2017. 08. 01.					정 민				최초생성
 * </pre>  
 */

@Controller
public class ACH020403Controller extends BaseContoller {
	
	protected Logger log = LoggerFactory.getLogger(ACH020403Controller.class);	
	
	@Resource(name="ACH020403Service")
	ACH020403ServiceImpl ACH020403Service;		
	
	/**
	 * 대상 계량지표 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH020403/selectKPIInfo.do") 
	public ModelAndView selectKPIInfo(NexacroMapDTO xpDto, Model model) throws Exception {
				
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020403Service, "selectKPIInfo", xpDto, mav);
		
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
	@RequestMapping("/hsco/mis/ach/ACH020403/selectRefrnList.do") 
	public ModelAndView selectRefrnList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020403Service, "selectRefrnList", xpDto, mav);
		
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
	@RequestMapping("/hsco/mis/ach/ACH020403/selectEvlEmpList.do") 
	public ModelAndView selectListTemp(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020403Service, "selectEvlEmpList", xpDto, mav);
		
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
	@RequestMapping("/hsco/mis/ach/ACH020403/saveEmpTlphonKdDgree.do") 
	public ModelAndView saveEmpTlphonKdDgree(NexacroMapDTO xpDto, Model model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020403Service, "saveEmpTlphonKdDgree", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 의무이수시간, 지정학습시간 조회
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH020403/selectEvlEmpEdcRcognTime.do") 
	public ModelAndView selectEvlEmpEdcRcognTime(NexacroMapDTO xpDto, Model model) throws Exception {
				
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020403Service, "selectEvlEmpEdcRcognTime", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	
	/**
	 * 평가사원목록 기초자료생성
	 * @param xpDto
	 * @param model
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/hsco/mis/ach/ACH020403/selectEmpnoList.do") 
	public ModelAndView selectEmpnoList(NexacroMapDTO xpDto, Model model) throws Exception {
				
		ModelAndView mav = new ModelAndView("nexacroMapView");
		
		execService(ACH020403Service, "selectEmpnoList", xpDto, mav);
		
		mav.addObject(NexacroConstant.ERROR_CODE, "0");
		mav.addObject(NexacroConstant.ERROR_MSG, "success.정상조회");
		
		return mav;
		
	}
	

}
